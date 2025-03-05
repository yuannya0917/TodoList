import { List } from "./List.js";
export class todoApp{
    constructor(){
        this.addListBtn=document.getElementById("ListBtn");
        this.addListBtn.addEventListener('click',()=>addList);

        this.lists=[];
    }
        
}