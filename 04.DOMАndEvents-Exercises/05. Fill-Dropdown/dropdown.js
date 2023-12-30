function addItem() {
    let textItem = document.querySelector("#newItemText").value;
    let valueItem = document.querySelector("#newItemValue").value;

    function createOption(text,value){
        let option = document.createElement("option");
        option.textContent=text;
        option.value=value;

        return option;
    }

    function clearInputfields(){
        let inputs = Array.from(document.querySelectorAll("input"));
        inputs.forEach(input=>{
            input.value="";
        })
    }

    let option = createOption(textItem,valueItem);

    let select =document.querySelector("#menu");
    select.appendChild(option);
    clearInputfields();

}