import Popover from '../popover';

document.body.innerHTML = `
  <button id="popover-body">Click to toggle popover</button>
`;

test('popover shows on click', () => {
  const button = document.getElementById('popover-body');
  const popover = new Popover(button, 'Test title', 'Test content');
  button.click();

  const isPopoverVisible = popover.popover.classList.contains('show');
  expect(isPopoverVisible).toBe(true);
});
