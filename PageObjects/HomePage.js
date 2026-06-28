import BasePage from "./BasePage"
import Signup from "../Components/Signup"
import Login from "../Components/Login";
export default class extends BasePage {
    constructor(page) {
        super(page, "/")
        this.signup = new Signup(page);
        this.signin=new Login(page);
    }
}