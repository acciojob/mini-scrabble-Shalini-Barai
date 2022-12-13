let txt=document.getElementById("evaluatedText");
txt.addEventListener("input",()=>{
    let count=(txt.value).length;
    document.getElementById("letterCount").textContent=`${count}`;
});