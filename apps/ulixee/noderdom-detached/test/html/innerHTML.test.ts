import DOMParser from '../../src/api/DOMParser';

describe('innerHTML', () => {
  it('parses basic text', () => {
    const dom = new DOMParser().parseFromString('<div class="address">Hello this is text.</div>', 'text/html');
    const address = dom.querySelector('.address')!;
    expect(address.innerHTML).toBe('Hello this is text.');
    expect(address.textContent).toBe('Hello this is text.');
  });
});
