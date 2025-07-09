const display=document.getElementById("display")
const buttons=document.querySelectorAll(".btn")
const clr=document.getElementById("clear")
const equal=document.getElementById("equals")
buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
        const value=button.getAttribute("data-value");
        display.innerText+=value;
    })
})
clr.addEventListener("click",()=>{
    display.innerText="";
})
equal.addEventListener("click",()=>{
    try{
        const result=display.innerText.replaceAll("x","*")
        display.innerText=eval(result);
    }
    catch(err)
    {
        display.innerText="error";
    }
});