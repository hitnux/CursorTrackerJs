class CursorTracker {
    constructor(options) {
        this.mouse = { event: false, x: 0, y: 0 };
        this.config = {
            id: 'cursor-tracker',
            container: '.ct-container',
            selector: '.ct-content',
            top: 25,
            left: 0,
            active: 'active',
            breakpoint: '1024px',
            innerHtml: '',
            classes: 'ct',
            ...options
        }

        this.init();
    }

    init() {
        if (this.isDesktop()) {
            this.template();
            this.animation();
            this.mousemove();

            if (this.config.container.length)
                this.config.container?.split(' ').forEach((containerSelector) => {
                    document.querySelectorAll(containerSelector).forEach((container) => {
                        const children = container.querySelectorAll(this.config.container);
                        if (children.length) {
                            children.forEach(target => {
                                target.classList.add('child');
                                this.createChildContainer({ target });
                            });
                        }
                        if (!container.classList.contains('child')) this.createContainer({ target: container });
                    });
                });
            else console.error('Cursor Tracker: Container cannot be empty');
        }
    }

    template() {
        if (!this.element) {
            const el = document.createElement('div');
            el.id = this.config.id;
            el.style.position = 'fixed';
            el.style.pointerEvents = 'none';
            el.style.zIndex = 9999;
            el.innerHTML = this.config.innerHtml;
            if (this.config.classes) {
                this.config.classes.split(' ').forEach((cls) => {
                    el.classList.add(cls);
                });
            }
            document.body.appendChild(el);
            this.element = el;
        }
        return this.element;
    }

    isDesktop() {
        return window.matchMedia(`(min-width: ${this.config.breakpoint})`).matches;
    }

    animation() {
        if (this.mouse.event) {
            this.element.style.top = `${this.mouse.y + this.config.top}px`;
            this.element.style.left = `${this.mouse.x + this.config.left}px`;
        }
        window.requestAnimationFrame(this.animation.bind(this));
    }

    onTheElement({ target, classes, activated, deactivated }) {
        target.addEventListener('mouseenter', (e) => {
            classes?.split(' ').forEach((cls) => {
                this.element.classList.toggle(cls);
            });
            target.classList.add(this.config.active);
            if (activated) activated(e);
            this.on('activated', { activatedElement: target, originalEvent: e }, target);
        });
        target.addEventListener('mouseleave', (e) => {
            classes?.split(' ').forEach((cls) => {
                this.element.classList.toggle(cls);
            });
            target.classList.remove(this.config.active);
            if (deactivated) deactivated(e);
            this.on('deactivated', { deactivatedElement: target, originalEvent: e }, target);
        });
    }

    createContainer({ target }) {
        this.onTheElement({
            target,
            activated: () => {
                this.element.innerHTML = target.querySelector(this.config.selector).innerHTML;
            },
            deactivated: () => {
                this.element.innerHTML = this.config.innerHtml;
                this.mouse.event = false;
            }
        });
    }

    createChildContainer({ target }) {
        let lastContent;

        this.onTheElement({
            target,
            activated: () => {
                lastContent = this.element.innerHTML;
                this.element.innerHTML = target.querySelector('.ct-content').innerHTML;
            },
            deactivated: () => {
                this.element.innerHTML = lastContent;
            }
        });
    }

    on(type, data, target = this.element) {
        target.dispatchEvent(new CustomEvent(type, {
            detail: {
                mouse: this.mouse,
                ...data
            }
        }));
    }

    mousemove() {
        document.addEventListener('mousemove', (e) => {
            this.mouse = {
                event: true,
                x: e.clientX,
                y: e.clientY
            }
            this.on('moving', { originalEvent: e });
        });
    }
}