import InternalHandler from '../InternalHandler';
import StateMachine from '../StateMachine';
import { IGlobalEventHandlersEventMap, IAddEventListenerOptions, IEventListenerOrEventListenerObject, IEventListenerOptions, IEvent, IGlobalEventHandlers } from '../interfaces';

export const { getState, setState, setHiddenState } = StateMachine<
  IGlobalEventHandlers,
  IGlobalEventHandlersProperties,
  IGlobalEventHandlersReadonlyProperties
>('GlobalEventHandlers');
export const internalHandler = new InternalHandler<IGlobalEventHandlers>('GlobalEventHandlers', getState, setState);

export default class GlobalEventHandlers implements IGlobalEventHandlers {
  public get onabort(): ((this: IGlobalEventHandlers, ev: IEvent) => any) | null {
    return internalHandler.get<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'onabort', true);
  }

  public set onabort(value: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null) {
    internalHandler.set<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'onabort', value);
  }

  public get onauxclick(): ((this: IGlobalEventHandlers, ev: IEvent) => any) | null {
    return internalHandler.get<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'onauxclick', true);
  }

  public set onauxclick(value: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null) {
    internalHandler.set<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'onauxclick', value);
  }

  public get onblur(): ((this: IGlobalEventHandlers, ev: IEvent) => any) | null {
    return internalHandler.get<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'onblur', true);
  }

  public set onblur(value: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null) {
    internalHandler.set<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'onblur', value);
  }

  public get oncancel(): ((this: IGlobalEventHandlers, ev: IEvent) => any) | null {
    return internalHandler.get<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'oncancel', true);
  }

  public set oncancel(value: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null) {
    internalHandler.set<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'oncancel', value);
  }

  public get oncanplay(): ((this: IGlobalEventHandlers, ev: IEvent) => any) | null {
    return internalHandler.get<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'oncanplay', true);
  }

  public set oncanplay(value: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null) {
    internalHandler.set<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'oncanplay', value);
  }

  public get oncanplaythrough(): ((this: IGlobalEventHandlers, ev: IEvent) => any) | null {
    return internalHandler.get<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'oncanplaythrough', true);
  }

  public set oncanplaythrough(value: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null) {
    internalHandler.set<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'oncanplaythrough', value);
  }

  public get onchange(): ((this: IGlobalEventHandlers, ev: IEvent) => any) | null {
    return internalHandler.get<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'onchange', true);
  }

  public set onchange(value: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null) {
    internalHandler.set<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'onchange', value);
  }

  public get onclick(): ((this: IGlobalEventHandlers, ev: IEvent) => any) | null {
    return internalHandler.get<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'onclick', true);
  }

  public set onclick(value: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null) {
    internalHandler.set<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'onclick', value);
  }

  public get onclose(): ((this: IGlobalEventHandlers, ev: IEvent) => any) | null {
    return internalHandler.get<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'onclose', true);
  }

  public set onclose(value: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null) {
    internalHandler.set<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'onclose', value);
  }

  public get oncontextmenu(): ((this: IGlobalEventHandlers, ev: IEvent) => any) | null {
    return internalHandler.get<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'oncontextmenu', true);
  }

  public set oncontextmenu(value: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null) {
    internalHandler.set<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'oncontextmenu', value);
  }

  public get oncuechange(): ((this: IGlobalEventHandlers, ev: IEvent) => any) | null {
    return internalHandler.get<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'oncuechange', true);
  }

  public set oncuechange(value: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null) {
    internalHandler.set<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'oncuechange', value);
  }

  public get ondblclick(): ((this: IGlobalEventHandlers, ev: IEvent) => any) | null {
    return internalHandler.get<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'ondblclick', true);
  }

  public set ondblclick(value: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null) {
    internalHandler.set<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'ondblclick', value);
  }

  public get ondrag(): ((this: IGlobalEventHandlers, ev: IEvent) => any) | null {
    return internalHandler.get<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'ondrag', true);
  }

  public set ondrag(value: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null) {
    internalHandler.set<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'ondrag', value);
  }

  public get ondragend(): ((this: IGlobalEventHandlers, ev: IEvent) => any) | null {
    return internalHandler.get<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'ondragend', true);
  }

  public set ondragend(value: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null) {
    internalHandler.set<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'ondragend', value);
  }

  public get ondragenter(): ((this: IGlobalEventHandlers, ev: IEvent) => any) | null {
    return internalHandler.get<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'ondragenter', true);
  }

  public set ondragenter(value: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null) {
    internalHandler.set<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'ondragenter', value);
  }

  public get ondragexit(): ((this: IGlobalEventHandlers, ev: IEvent) => any) | null {
    return internalHandler.get<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'ondragexit', true);
  }

  public set ondragexit(value: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null) {
    internalHandler.set<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'ondragexit', value);
  }

  public get ondragleave(): ((this: IGlobalEventHandlers, ev: IEvent) => any) | null {
    return internalHandler.get<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'ondragleave', true);
  }

  public set ondragleave(value: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null) {
    internalHandler.set<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'ondragleave', value);
  }

  public get ondragover(): ((this: IGlobalEventHandlers, ev: IEvent) => any) | null {
    return internalHandler.get<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'ondragover', true);
  }

  public set ondragover(value: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null) {
    internalHandler.set<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'ondragover', value);
  }

  public get ondragstart(): ((this: IGlobalEventHandlers, ev: IEvent) => any) | null {
    return internalHandler.get<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'ondragstart', true);
  }

  public set ondragstart(value: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null) {
    internalHandler.set<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'ondragstart', value);
  }

  public get ondrop(): ((this: IGlobalEventHandlers, ev: IEvent) => any) | null {
    return internalHandler.get<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'ondrop', true);
  }

  public set ondrop(value: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null) {
    internalHandler.set<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'ondrop', value);
  }

  public get ondurationchange(): ((this: IGlobalEventHandlers, ev: IEvent) => any) | null {
    return internalHandler.get<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'ondurationchange', true);
  }

  public set ondurationchange(value: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null) {
    internalHandler.set<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'ondurationchange', value);
  }

  public get onemptied(): ((this: IGlobalEventHandlers, ev: IEvent) => any) | null {
    return internalHandler.get<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'onemptied', true);
  }

  public set onemptied(value: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null) {
    internalHandler.set<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'onemptied', value);
  }

  public get onended(): ((this: IGlobalEventHandlers, ev: IEvent) => any) | null {
    return internalHandler.get<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'onended', true);
  }

  public set onended(value: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null) {
    internalHandler.set<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'onended', value);
  }

  public get onerror(): ((this: IGlobalEventHandlers, ev: IEvent) => any) | null {
    return internalHandler.get<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'onerror', true);
  }

  public set onerror(value: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null) {
    internalHandler.set<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'onerror', value);
  }

  public get onfocus(): ((this: IGlobalEventHandlers, ev: IEvent) => any) | null {
    return internalHandler.get<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'onfocus', true);
  }

  public set onfocus(value: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null) {
    internalHandler.set<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'onfocus', value);
  }

  public get oninput(): ((this: IGlobalEventHandlers, ev: IEvent) => any) | null {
    return internalHandler.get<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'oninput', true);
  }

  public set oninput(value: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null) {
    internalHandler.set<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'oninput', value);
  }

  public get oninvalid(): ((this: IGlobalEventHandlers, ev: IEvent) => any) | null {
    return internalHandler.get<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'oninvalid', true);
  }

  public set oninvalid(value: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null) {
    internalHandler.set<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'oninvalid', value);
  }

  public get onkeydown(): ((this: IGlobalEventHandlers, ev: IEvent) => any) | null {
    return internalHandler.get<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'onkeydown', true);
  }

  public set onkeydown(value: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null) {
    internalHandler.set<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'onkeydown', value);
  }

  public get onkeypress(): ((this: IGlobalEventHandlers, ev: IEvent) => any) | null {
    return internalHandler.get<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'onkeypress', true);
  }

  public set onkeypress(value: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null) {
    internalHandler.set<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'onkeypress', value);
  }

  public get onkeyup(): ((this: IGlobalEventHandlers, ev: IEvent) => any) | null {
    return internalHandler.get<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'onkeyup', true);
  }

  public set onkeyup(value: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null) {
    internalHandler.set<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'onkeyup', value);
  }

  public get onload(): ((this: IGlobalEventHandlers, ev: IEvent) => any) | null {
    return internalHandler.get<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'onload', true);
  }

  public set onload(value: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null) {
    internalHandler.set<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'onload', value);
  }

  public get onloadeddata(): ((this: IGlobalEventHandlers, ev: IEvent) => any) | null {
    return internalHandler.get<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'onloadeddata', true);
  }

  public set onloadeddata(value: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null) {
    internalHandler.set<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'onloadeddata', value);
  }

  public get onloadedmetadata(): ((this: IGlobalEventHandlers, ev: IEvent) => any) | null {
    return internalHandler.get<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'onloadedmetadata', true);
  }

  public set onloadedmetadata(value: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null) {
    internalHandler.set<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'onloadedmetadata', value);
  }

  public get onloadend(): ((this: IGlobalEventHandlers, ev: IEvent) => any) | null {
    return internalHandler.get<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'onloadend', true);
  }

  public set onloadend(value: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null) {
    internalHandler.set<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'onloadend', value);
  }

  public get onloadstart(): ((this: IGlobalEventHandlers, ev: IEvent) => any) | null {
    return internalHandler.get<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'onloadstart', true);
  }

  public set onloadstart(value: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null) {
    internalHandler.set<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'onloadstart', value);
  }

  public get onmousedown(): ((this: IGlobalEventHandlers, ev: IEvent) => any) | null {
    return internalHandler.get<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'onmousedown', true);
  }

  public set onmousedown(value: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null) {
    internalHandler.set<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'onmousedown', value);
  }

  public get onmouseenter(): ((this: IGlobalEventHandlers, ev: IEvent) => any) | null {
    return internalHandler.get<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'onmouseenter', true);
  }

  public set onmouseenter(value: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null) {
    internalHandler.set<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'onmouseenter', value);
  }

  public get onmouseleave(): ((this: IGlobalEventHandlers, ev: IEvent) => any) | null {
    return internalHandler.get<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'onmouseleave', true);
  }

  public set onmouseleave(value: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null) {
    internalHandler.set<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'onmouseleave', value);
  }

  public get onmousemove(): ((this: IGlobalEventHandlers, ev: IEvent) => any) | null {
    return internalHandler.get<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'onmousemove', true);
  }

  public set onmousemove(value: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null) {
    internalHandler.set<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'onmousemove', value);
  }

  public get onmouseout(): ((this: IGlobalEventHandlers, ev: IEvent) => any) | null {
    return internalHandler.get<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'onmouseout', true);
  }

  public set onmouseout(value: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null) {
    internalHandler.set<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'onmouseout', value);
  }

  public get onmouseover(): ((this: IGlobalEventHandlers, ev: IEvent) => any) | null {
    return internalHandler.get<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'onmouseover', true);
  }

  public set onmouseover(value: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null) {
    internalHandler.set<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'onmouseover', value);
  }

  public get onmouseup(): ((this: IGlobalEventHandlers, ev: IEvent) => any) | null {
    return internalHandler.get<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'onmouseup', true);
  }

  public set onmouseup(value: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null) {
    internalHandler.set<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'onmouseup', value);
  }

  public get onpause(): ((this: IGlobalEventHandlers, ev: IEvent) => any) | null {
    return internalHandler.get<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'onpause', true);
  }

  public set onpause(value: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null) {
    internalHandler.set<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'onpause', value);
  }

  public get onplay(): ((this: IGlobalEventHandlers, ev: IEvent) => any) | null {
    return internalHandler.get<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'onplay', true);
  }

  public set onplay(value: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null) {
    internalHandler.set<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'onplay', value);
  }

  public get onplaying(): ((this: IGlobalEventHandlers, ev: IEvent) => any) | null {
    return internalHandler.get<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'onplaying', true);
  }

  public set onplaying(value: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null) {
    internalHandler.set<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'onplaying', value);
  }

  public get onprogress(): ((this: IGlobalEventHandlers, ev: IEvent) => any) | null {
    return internalHandler.get<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'onprogress', true);
  }

  public set onprogress(value: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null) {
    internalHandler.set<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'onprogress', value);
  }

  public get onratechange(): ((this: IGlobalEventHandlers, ev: IEvent) => any) | null {
    return internalHandler.get<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'onratechange', true);
  }

  public set onratechange(value: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null) {
    internalHandler.set<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'onratechange', value);
  }

  public get onreset(): ((this: IGlobalEventHandlers, ev: IEvent) => any) | null {
    return internalHandler.get<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'onreset', true);
  }

  public set onreset(value: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null) {
    internalHandler.set<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'onreset', value);
  }

  public get onresize(): ((this: IGlobalEventHandlers, ev: IEvent) => any) | null {
    return internalHandler.get<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'onresize', true);
  }

  public set onresize(value: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null) {
    internalHandler.set<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'onresize', value);
  }

  public get onscroll(): ((this: IGlobalEventHandlers, ev: IEvent) => any) | null {
    return internalHandler.get<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'onscroll', true);
  }

  public set onscroll(value: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null) {
    internalHandler.set<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'onscroll', value);
  }

  public get onsecuritypolicyviolation(): ((this: IGlobalEventHandlers, ev: IEvent) => any) | null {
    return internalHandler.get<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'onsecuritypolicyviolation', true);
  }

  public set onsecuritypolicyviolation(value: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null) {
    internalHandler.set<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'onsecuritypolicyviolation', value);
  }

  public get onseeked(): ((this: IGlobalEventHandlers, ev: IEvent) => any) | null {
    return internalHandler.get<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'onseeked', true);
  }

  public set onseeked(value: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null) {
    internalHandler.set<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'onseeked', value);
  }

  public get onseeking(): ((this: IGlobalEventHandlers, ev: IEvent) => any) | null {
    return internalHandler.get<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'onseeking', true);
  }

  public set onseeking(value: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null) {
    internalHandler.set<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'onseeking', value);
  }

  public get onselect(): ((this: IGlobalEventHandlers, ev: IEvent) => any) | null {
    return internalHandler.get<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'onselect', true);
  }

  public set onselect(value: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null) {
    internalHandler.set<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'onselect', value);
  }

  public get onstalled(): ((this: IGlobalEventHandlers, ev: IEvent) => any) | null {
    return internalHandler.get<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'onstalled', true);
  }

  public set onstalled(value: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null) {
    internalHandler.set<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'onstalled', value);
  }

  public get onsubmit(): ((this: IGlobalEventHandlers, ev: IEvent) => any) | null {
    return internalHandler.get<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'onsubmit', true);
  }

  public set onsubmit(value: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null) {
    internalHandler.set<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'onsubmit', value);
  }

  public get onsuspend(): ((this: IGlobalEventHandlers, ev: IEvent) => any) | null {
    return internalHandler.get<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'onsuspend', true);
  }

  public set onsuspend(value: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null) {
    internalHandler.set<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'onsuspend', value);
  }

  public get ontimeupdate(): ((this: IGlobalEventHandlers, ev: IEvent) => any) | null {
    return internalHandler.get<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'ontimeupdate', true);
  }

  public set ontimeupdate(value: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null) {
    internalHandler.set<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'ontimeupdate', value);
  }

  public get ontoggle(): ((this: IGlobalEventHandlers, ev: IEvent) => any) | null {
    return internalHandler.get<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'ontoggle', true);
  }

  public set ontoggle(value: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null) {
    internalHandler.set<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'ontoggle', value);
  }

  public get onvolumechange(): ((this: IGlobalEventHandlers, ev: IEvent) => any) | null {
    return internalHandler.get<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'onvolumechange', true);
  }

  public set onvolumechange(value: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null) {
    internalHandler.set<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'onvolumechange', value);
  }

  public get onwaiting(): ((this: IGlobalEventHandlers, ev: IEvent) => any) | null {
    return internalHandler.get<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'onwaiting', true);
  }

  public set onwaiting(value: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null) {
    internalHandler.set<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'onwaiting', value);
  }

  public get onwheel(): ((this: IGlobalEventHandlers, ev: IEvent) => any) | null {
    return internalHandler.get<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'onwheel', true);
  }

  public set onwheel(value: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null) {
    internalHandler.set<((this: IGlobalEventHandlers, ev: IEvent) => any) | null>(this, 'onwheel', value);
  }

  public addEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IGlobalEventHandlers, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IAddEventListenerOptions): void;
  public addEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IAddEventListenerOptions): void {
    internalHandler.run<void>(this, 'addEventListener', [type, listener, options]);
  }

  public removeEventListener<K extends keyof IGlobalEventHandlersEventMap>(type: K, listener: (this: IGlobalEventHandlers, ev: IGlobalEventHandlersEventMap[K]) => any, options?: boolean | IEventListenerOptions): void;
  public removeEventListener(type: string, listener: IEventListenerOrEventListenerObject, options?: boolean | IEventListenerOptions): void {
    internalHandler.run<void>(this, 'removeEventListener', [type, listener, options]);
  }
}

// INTERFACES RELATED TO STATE MACHINE PROPERTIES //////////////////////////////

export interface IGlobalEventHandlersProperties {
  onabort?: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  onauxclick?: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  onblur?: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  oncancel?: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  oncanplay?: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  oncanplaythrough?: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  onchange?: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  onclick?: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  onclose?: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  oncontextmenu?: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  oncuechange?: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  ondblclick?: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  ondrag?: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  ondragend?: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  ondragenter?: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  ondragexit?: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  ondragleave?: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  ondragover?: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  ondragstart?: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  ondrop?: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  ondurationchange?: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  onemptied?: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  onended?: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  onerror?: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  onfocus?: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  oninput?: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  oninvalid?: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  onkeydown?: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  onkeypress?: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  onkeyup?: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  onload?: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  onloadeddata?: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  onloadedmetadata?: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  onloadend?: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  onloadstart?: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  onmousedown?: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  onmouseenter?: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  onmouseleave?: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  onmousemove?: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  onmouseout?: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  onmouseover?: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  onmouseup?: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  onpause?: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  onplay?: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  onplaying?: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  onprogress?: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  onratechange?: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  onreset?: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  onresize?: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  onscroll?: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  onsecuritypolicyviolation?: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  onseeked?: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  onseeking?: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  onselect?: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  onstalled?: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  onsubmit?: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  onsuspend?: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  ontimeupdate?: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  ontoggle?: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  onvolumechange?: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  onwaiting?: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
  onwheel?: ((this: IGlobalEventHandlers, ev: IEvent) => any) | null;
}

export interface IGlobalEventHandlersReadonlyProperties {}

// tslint:disable-next-line:variable-name
export const GlobalEventHandlersPropertyKeys = ['onabort', 'onauxclick', 'onblur', 'oncancel', 'oncanplay', 'oncanplaythrough', 'onchange', 'onclick', 'onclose', 'oncontextmenu', 'oncuechange', 'ondblclick', 'ondrag', 'ondragend', 'ondragenter', 'ondragexit', 'ondragleave', 'ondragover', 'ondragstart', 'ondrop', 'ondurationchange', 'onemptied', 'onended', 'onerror', 'onfocus', 'oninput', 'oninvalid', 'onkeydown', 'onkeypress', 'onkeyup', 'onload', 'onloadeddata', 'onloadedmetadata', 'onloadend', 'onloadstart', 'onmousedown', 'onmouseenter', 'onmouseleave', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'onpause', 'onplay', 'onplaying', 'onprogress', 'onratechange', 'onreset', 'onresize', 'onscroll', 'onsecuritypolicyviolation', 'onseeked', 'onseeking', 'onselect', 'onstalled', 'onsubmit', 'onsuspend', 'ontimeupdate', 'ontoggle', 'onvolumechange', 'onwaiting', 'onwheel'];

// tslint:disable-next-line:variable-name
export const GlobalEventHandlersConstantKeys = [];
