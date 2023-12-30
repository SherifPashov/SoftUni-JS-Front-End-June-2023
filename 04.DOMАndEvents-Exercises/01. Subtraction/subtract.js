function subtract() {
    

    let inputs = Array.from(document.querySelectorAll("input"));
    
    inputs.forEach(input => {
        input.removeAttribute("disabled");
    })

   
        let firstNumber = Number(document.querySelector("#firstNumber").value);
        let secondNumber = Number(document.querySelector("#secondNumber").value);
        let result = document.querySelector("#result");

       let firstMinusSecond = (firstNumber-secondNumber);

        result.textContent=firstMinusSecond;
        
}