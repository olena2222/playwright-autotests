import BasePage from "./BasePage"
import Signup from "../Components/Signup"
export default class extends BasePage {
    constructor(page) {
        super(page, "/")
        this.signup = new Signup(page);
    }




}