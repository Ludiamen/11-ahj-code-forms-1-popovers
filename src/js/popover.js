class Popover {
  constructor(trigger, title, content) {
    this.trigger = trigger;
    this.title = title;
    this.content = content;
    this.popover = this.createPopover();
    this.init();
  }

  createPopover() {
    const popover = document.createElement('div');
    popover.className = 'popover';
    popover.innerHTML = `
      <div class="popover-header">${this.title}</div>
      <div class="popover-body">${this.content}</div>
    `;
    document.body.appendChild(popover);
    return popover;
  }

  togglePopover() {
    const rect = this.trigger.getBoundingClientRect();
    this.popover.style.top = `${rect.top - this.popover.offsetHeight - 120}px`; // Смещение поповера сверху
    this.popover.classList.toggle('show');
  }

  init() {
    this.trigger.addEventListener('click', () => this.togglePopover());
  }
}

export default Popover;
