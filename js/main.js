/*
algorithm
in every 3 seconds you set interval to create new item with diffrent background
-before it make array with hex values
-then make a function to loop 6 times and put random values from array and put in another array and then make array into string

*/
let arrhex = [1,2,3,4,5,6,7,8,9,0,'A','B','C','D','E','F'];
function creathexvalues(arr){
    let arr2 = [];
    let random = 0;
    for(let i = 0; i <6; i++){
        random = Math.floor(Math.random() * arr.length);
        arr2.push(arr[random]);
    }
    let str = '#';
    let str2 = arr2.join("");
    str += str2;
   return str;
}

let i = 0;
setInterval(() => {
    let div = document.createElement("div");
    let divtext = document.createTextNode(i);
    div.appendChild(divtext);
    document.querySelector(".d-flex").appendChild(div);
   div.style.background =creathexvalues(arrhex);
    i++;
    console.log(creathexvalues(arrhex));
},2000);


