document.addEventListener('alpine:init', () => {
    Alpine.data('sidebar', () => ({
        open: false,
        toggle() { this.open = !this.open; },
        close() { this.open = false; },
    }));

    Alpine.data('pricingToggle', () => ({
        cycle: 'monthly',
        toggle() { this.cycle = this.cycle === 'monthly' ? 'yearly' : 'monthly'; },
    }));

    Alpine.data('modal', () => ({
        show: false,
        open() { this.show = true; },
        close() { this.show = false; },
    }));

    Alpine.data('tabs', () => ({
        active: 'overview',
        setTab(tab) { this.active = tab; },
    }));

    Alpine.data('alert', () => ({
        visible: true,
        dismiss() { this.visible = false; },
    }));
});
