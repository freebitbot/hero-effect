// tslint:disable-next-line:variable-name
const OpenElementStack = require('parse5/lib/parser/open-element-stack');

const openElementStackOriginalPop = OpenElementStack.prototype.pop;
const openElementStackOriginalPush = OpenElementStack.prototype.push;

// Horrible monkey-patch to implement https://github.com/inikulin/parse5/issues/237
OpenElementStack.prototype.push = function(...args: any[]) {
  openElementStackOriginalPush.apply(this, args);
  if (this.treeAdapter.pushedOntoStack) {
    this.treeAdapter.pushedOntoStack(args, this.current);
  }
  const after = this.items[this.stackTop];
  if (after._pushedOnStackOfOpenElements) {
    after._pushedOnStackOfOpenElements();
  }
};
OpenElementStack.prototype.pop = function(...args: any[]) {
  const before = this.items[this.stackTop];

  openElementStackOriginalPop.apply(this, args);
  if (this.treeAdapter.poppedOffStack) {
    this.treeAdapter.poppedOffStack(args, this.current);
  }

  if (before._poppedOffStackOfOpenElements) {
    before._poppedOffStackOfOpenElements();
  }
};
