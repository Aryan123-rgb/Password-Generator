const lowercase = "qwertyuioplkjhgfdsamnbvcxz";
const uppercase = "POIUYTREWQLKJHGFDSANBVCXZM";
const symbols = "!@#$%^&*()-_+=~{}[]:;'/?.>,<|";
const numbers = "0123456789";
const operations = "/*-+";
const space = " ";

const randomgenerator = (dataset) => {
    return dataset[Math.floor(Math.random()*dataset.length)];
}
// console.log(randomgenerator(lowercase));

const lowercaseDiv = document.getElementById("lowercase");
const uppercaseDiv = document.getElementById("uppercase");
const symbolsDiv = document.getElementById("symbols");
const numbersDiv = document.getElementById("numbers");
const operationsDiv = document.getElementById("operations");
const spacesDiv = document.getElementById("spaces");
const pass = document.getElementById("pass-show");
const btn = document.getElementById("generate-btn");
const copyIcn = document.querySelector(".input-box p");
const password = "";

const lengthSlider = document.querySelector(".pass-length input");
lengthSlider.addEventListener("input",function update(){
    document.querySelector(".details p").innerHTML = lengthSlider.value;
});
document.querySelector(".details p").innerHTML = lengthSlider.value;

const passwordGenerator = (password = "") => {
    if(lowercaseDiv.checked){
        password+=randomgenerator(lowercase);
    }
    if(uppercaseDiv.checked){
        password+=randomgenerator(uppercase);
    }
    if(symbolsDiv.checked){
        password+=randomgenerator(symbols);
    }
    if(numbersDiv.checked){
        password+=randomgenerator(numbers);
    }
    if(operationsDiv.checked){
        password = myFunction(password);
    }
    if(spacesDiv.checked){
        password+=`  ${password}  `;
    }
    if(password.length < lengthSlider.value){
        return passwordGenerator(password);
    }
    password = truncateString(password,lengthSlider.value);
    pass.value = password;
}
btn.addEventListener("click",function(){
    passwordGenerator(password);
})

function truncateString(str,num){
    if(str.length > num){
        let substr = str.substring(0,num);
        return substr
    }else{
        return str;
    }
}
function myFunction(str) {
    var result = "";
    var freq = {};
    for(i=0;i<str.length;i++){
       let char = str[i];
       if(freq[char]) {
        freq[char]++;      
       } else {
        freq[char] =1
        result = result+char;
       }
    }
    return result;
}

copyIcn.addEventListener("click",function(){
    navigator.clipboard.writeText(pass.value);
    copyIcn.innerHTML = `<i class="fa-solid fa-check"></i>`;
    setTimeout(function(){
        copyIcn.innerHTML = `<i class="fa-sharp fa-regular fa-clipboard"></i>`;
    },1500)
})