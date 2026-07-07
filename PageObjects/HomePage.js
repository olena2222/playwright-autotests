import BasePage from "./BasePage.js"
import SignUp from "../Components/SignUp.js"
import Login from "../Components/Login.js";
export default class extends BasePage {
    constructor(page) {
        super(page, "/")
        this.signup = new SignUp(page);
        this.signin=new Login(page);
    }
}