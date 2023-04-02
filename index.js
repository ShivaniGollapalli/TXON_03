const addbtn = document.querySelector('.addbtn');
var input = document.querySelector('.input');
const container = document.querySelector('.container');
class item{
    constructor(itemName){
        this.createDiv(itemName);
    }
    createDiv(itemName){
        let input = document.createElement('input');
        input.value = itemName;
        input.disabled = true;
        input.classList.add('item-input');
        input.type='text';

        let itemBox = document.createElement('div');
        itemBox.classList.add('item');

        let editButton = document.createElement('button');
        editButton.classList.add('editbtn');
        editButton.innerHTML = "EDIT";
        editButton.style.color = "#d6a955";
        editButton.style.fontSize = "0.8rem"
    
        let delButton = document.createElement('button');
        delButton.classList.add('delbtn');
        delButton.innerHTML = "DEL";
        delButton.style.color = "#d6a955";
        delButton.style.fontSize = "0.8rem"

        container.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(editButton);
        itemBox.appendChild(delButton);

        editButton.addEventListener('click' , () => this.edit(input));
        delButton.addEventListener('click', () => this.remove(itemBox))
    }
    edit(input){
        input.disabled = !input.disabled;
    }
    remove(item){
        container.removeChild(item);
    }
}
function check(){
    if(input.value != ""){
        new item(input.value);
        input.value = "";
    }
}
addbtn.addEventListener('click', check);
window.addEventListener('keydown',(e) => {
    if(e.which == 13){
        check();
    }
})

new item("Shivani");