let gameseq=[];
let userseq=[];
let level=0;
let started=false;
let colors=["pink","blue","orange","bluish"];

let h2=document.querySelector("h2");
let h3=document.querySelector("h3")

document.addEventListener("keydown" , function(){
    if(started==false){
        console.log("game started");
        started=true;

        Levelup()
        
    }
    
        

        

    

});

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")},250
    )
}
function userflash(btn){
    btn.classList.add("userf");
    setTimeout(function(){
        btn.classList.remove("userf")},200
    )
} 

function Levelup(){
    userseq=[];
    level++;
    h2.innerText= `Level ${level}`;
    let randomnum=Math.floor(Math.random()*3);
    let randomfls=colors[randomnum];
    let randomcolor=document.querySelector(`.${randomfls}`);
    console.log(randomnum)
    console.log(randomfls)
    gameflash(randomcolor)
    gameseq.push(randomfls)

}

function btnpress(){
    console.log(this);
    let x=this;
    userflash(x)
    usercolor=x.getAttribute("id");
    userseq.push(usercolor);
    checkans(userseq.length-1)
    
    
}

let allbtns=document.querySelectorAll(".btn")
for(btn of allbtns){
    btn.addEventListener("click",btnpress)
}

function checkans(idx){
    
    if(userseq[idx]==gameseq[idx]){
        if(userseq.length==gameseq.length){
            Levelup()
        }
        
    }else{
        h2.innerHTML=`Game over! Your score : <b>${level}</b> <br> Press any key to start`;
        
        
        
        reset();
        document.querySelector("body").style.backgroundColor= "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor= "white";


        },150)
    }
    
}
function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
    
}