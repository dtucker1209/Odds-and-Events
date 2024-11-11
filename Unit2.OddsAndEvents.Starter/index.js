const form = document.querySelector("form");
const sort1 = document.getElementById("sortOne");
const sortAll = document.getElementById("sortAll");
const output = document.querySelector("#numberBank output");
const outputEvens = document.querySelector("#evens output");
const outputOdds = document.querySelector("#odds output")
const arrNumbers = [];
const odd = [];
const even = [];


const printAllNumbers = () => {
    output.innerHTML= arrNumbers;
};
const PrintOddNumbers = () =>{
    outputOdds.innerHTML= odd;
};
const PrintEvenNumbers = () =>{
    outputEvens.innerHTML= even;
};



form.addEventListener("submit", function (event) {
  event.preventDefault();
  const data = new FormData(event.target);
  arrNumbers.push(`${data.get("number")}`);
  printAllNumbers();
});


// need to remove the 1st # from the bank
sort1.addEventListener("click", function (event) {
    const firstNumber = arrNumbers.shift(0);
   for (let i =0; i < firstNumber.length; i++)
    if(firstNumber[i] %2 ===1) {
        let arr = firstNumber[i];
        odd.push(arr);
        // arrNumbers.shift();
        PrintOddNumbers();
    }else{
        let arr = firstNumber[i];
        even.push(arr);
        // arrNumbers.shift();
        PrintEvenNumbers();
    }

  });
 

  sortAll.addEventListener("click", function (event) {
    arrNumbers.forEach((element) => {
        if (element % 2 === 1){
            odd.push(element);
            PrintOddNumbers();
        } else {
            even.push(element);
            PrintEvenNumbers();
        }
    });
    arrNumbers.splice(0,arrNumbers.length);
  });