export function stringToUniqueArray(input: string) {
  const tokens: Set<string> = new Set();
  for (const token of input.split(/[\t\n\f\r ]+/)) {
    if (token) {
      tokens.add(token);
    }
  }
  return Array.from(tokens);
}

export function iterableIteratorForArray<T>(getArray: () => any[]) {
  let index = 0;
  const iterator = {
    next: () => {
      const array = getArray();
      const item = array[index];
      index += 1;
      return { value: item, done: index > array.length };
    },
    [Symbol.iterator](): IterableIterator<T> {
      return iterator;
    },
  };
  return iterator;
}

export function createProxy(self: any) {
  return new Proxy(self, {
    get(_: any, prop: string | number) {
      if (prop === 'proxy') return undefined;
      if (prop === '_internalInstance') return self;
      const propIsNumber = typeof prop === 'number' || (typeof prop === 'string' && !isNaN(prop as any));
      if (propIsNumber) {
        return self.item.call(self, Number(prop));
      }
      const value = (self as any)[prop];
      if (typeof value === 'function') {
        return value.bind(self);
      }
      if (value !== undefined) {
        return value;
      }
      return self.namedItem ? self.namedItem.call(self, prop as string) : undefined;
    },
  });
}

////////

interface IState<IItem> {
  items: IItem[];
  itemsByName?: Record<string, IItem>;
  exposeItemsBy: ('index' | 'name')[];
}

export function addToArrayish<IArrayish, IItem>(
  arrayish: IArrayish,
  state: IState<IItem>,
  itemsToAdd: IItem[],
  i?: number,
) {
  const { itemsByName, items, exposeItemsBy } = state;
  const itemsAreObjects = itemsToAdd.every(i => typeof i === 'object');
  items.splice(i === undefined ? items.length : i, 0, ...itemsToAdd);

  for (const item of itemsToAdd) {
    const indexOfItem = items.indexOf(item);
    const name = itemsAreObjects ? (item as any).name : item;
    if (name && itemsByName) {
      itemsByName[name] = item;
      if (exposeItemsBy.includes('name')) {
        createAttrProperty<IArrayish>(arrayish, name);
      }
    }
    createAttrProperty<IArrayish>(arrayish, indexOfItem);
  }
}

export function replaceInArrayish<IArrayish, IItem>(
  arrayish: IArrayish,
  state: IState<IItem>,
  newItem: IItem,
  oldItem: IItem,
): boolean {
  const { itemsByName, items, exposeItemsBy } = state;
  const itemIsObject = typeof newItem === 'object' && typeof oldItem === 'object';
  const indexOfOldItem = items.indexOf(oldItem);
  if (indexOfOldItem < 0) return false;

  const nameOfOldItem = itemIsObject ? (oldItem as any).name : oldItem;
  if (nameOfOldItem && itemsByName) delete itemsByName[nameOfOldItem];

  items[indexOfOldItem] = newItem;
  const nameOfNewItem = itemIsObject ? (newItem as any).name : newItem;
  if (nameOfNewItem && itemsByName) itemsByName[nameOfNewItem] = newItem;

  if (exposeItemsBy.includes('name') && nameOfOldItem !== nameOfNewItem) {
    removeAttrProperty<IArrayish>(arrayish, nameOfOldItem);
    createAttrProperty<IArrayish>(arrayish, nameOfNewItem);
  }
  return true;
}

export function removeFromArrayish<IArrayish, IItem>(arrayish: IArrayish, state: IState<IItem>, item: IItem) {
  const { items, itemsByName, exposeItemsBy } = state;
  const index = items.indexOf(item);
  const itemIsObject = typeof item === 'object';
  const name = itemIsObject ? (item as any).name : item;
  items.splice(index, 1);
  if (name && itemsByName) {
    delete itemsByName[name];
    if (exposeItemsBy.includes('name')) {
      removeAttrProperty<IArrayish>(arrayish, name);
    }
  }

  const indexOfItem = items.indexOf(item);
  if (indexOfItem >= 0) {
    items.splice(indexOfItem, 1);
    for (let i = indexOfItem; i < items.length; i += 1) {
      createAttrProperty(arrayish, i);
    }
    removeAttrProperty<IArrayish>(arrayish, items.length);
  }
}

///////

function createAttrProperty<IArrayish>(arrayish: IArrayish, key: number | string) {
  const internalInstance: IArrayish = (arrayish as any)._internalInstance;
  if (typeof key === 'number' && key < 0) {
    console.log(new Error('key is less than 0'));
  }
  Object.defineProperty(internalInstance, key, {
    get: () => (arrayish as any).item.call(internalInstance, key),
    enumerable: true,
    configurable: true,
  });
}

function removeAttrProperty<IArrayish>(arrayish: IArrayish, key: number | string) {
  const internalInstance: IArrayish = (arrayish as any)._internalInstance;
  delete (internalInstance as any)[key];
}
