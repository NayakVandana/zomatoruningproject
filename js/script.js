
/* model */


let pop = document.querySelector(".bg-model");
let body = document.getElementById("body");
let cross = document.getElementById("cross");

let count;

function popup()
{
   count =   setInterval(
        function()
        {
            pop.classList.add("active"); 
        },
        3000
    )
}

cross.addEventListener("click",function()
{   
    pop.classList.remove("active"); 
    clearInterval(count);
})

/* sign popup*/

let signpop = document.querySelector(".popup");

let signbutton= document.getElementById("signbutton");
let close= document.getElementById("close");


signbutton.addEventListener("click",function(){
    signpop.classList.add("active");
})

close.addEventListener("click",function()
{   
    signpop.classList.remove("active"); 

})


/* Dark Mode*/

let mode = document.querySelector("#mode");
let darkmode = document.querySelector(".darkmode");

mode.addEventListener("click",function()
{
  
  
    

    darkmode.classList.toggle("myDark");
    if(mode.innerText == "Active Dark Mode")
    {
        mode.innerText = "Active Light Mode";

    }
    else
    {
        mode.innerText = "Active Dark Mode";
    }
})