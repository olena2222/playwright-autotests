import BasePage from "./BasePage.js"
import Signup from "../Components/Signup.js"
import Login from "../Components/Login.js";
export default class extends BasePage {
    constructor(page) {
        super(page, "/")
        this.signup = new Signup(page);
        this.signin=new Login(page);
    }
}