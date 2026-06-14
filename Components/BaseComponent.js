import { expect } from '@playwright/test';

export default class BaseComponent {
    constructor(page) {
        this.page = page;
    }
    async checkVisibility(element) {
        await expect(element).toBeVisible();
    }

    async removeAttributes(element, attribute) {
        await element.evaluate((el, attr) => {
            el.removeAttribute(attr);
        }, attribute);
    }

    async checkHref(element, link) {
        await expect(element).toHaveAttribute('href', link);
    }

    checkLabel(labelText) {
        return this.page.getByLabel(labelText).first();;
    }

    checkError(selector, text, page) {
        return page.locator(selector).filter({ hasText: text });
    }

    async validateEmptyField(element) {
        await element.focus();
        await element.blur();
    }

    async checkBorderColor(element, color) {
        await expect(element).toHaveCSS('border-color', color);
    }
    errorMessage(text) {
        return this.page.locator(".invalid-feedback").filter({
            hasText: text,
        });
    }
}
