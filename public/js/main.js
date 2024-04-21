import { head, body } from "./layout.js";

let headElement = document.head
let bodyElement = document.body
headElement.insertAdjacentHTML("afterbegin", head);
bodyElement.insertAdjacentHTML("afterbegin", body)




