function solve() {
  let container = document.querySelector("#output");
  let sentences = Array.from(document.querySelector("#input").value.split(".")).filter(d=>d.length>0);
  
  //trim "/n"
  sentences.pop();

  for (let index = 0; index < sentences.length; index++) {
    if(sentences[index]===""){
      delete sentences[index];
    }
    
  }

  console.log(sentences);
  


  while(sentences.length > 0){
    let p = document.createElement("p");

    p.textContent=sentences
    .splice(0,3)
    .map(sentence=>sentence.trim())
    .join(".");

    container.appendChild(p);

  }
}

function solve() {
  let inputStr = document.getElementById('input').value;
  let output = document.getElementById('output');

  let input = inputStr.split('.').filter((p) => p.length > 0);

  for (let i = 0; i < input.length; i += 3) {
      let arr = [];
      for (let y = 0; y < 3; y++) {
          if (input[i + y]) {
              arr.push(input[i + y]);
          }
      }
      let paragraph = arr.join('. ') + '.';
      output.innerHTML += `<p>${paragraph}</p>`;
  }
}



