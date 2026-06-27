import { expect } from "@playwright/test";
export default class {
    _url;

    constructor(page, url) {
        this.page = page;
        this._url = url;
    }
    async navigate() {
        await this.page.goto(this._url);
    }
    async containUrlCheck(expectedURL) {
        await expect(this.page).toHaveURL(expectedURL)
    }

}
