for(let i=0;i<100;i++){

let confetti=document.createElement("div");

confetti.style.width="10px";
confetti.style.height="10px";
confetti.style.background="white";
confetti.style.position="fixed";
confetti.style.top=Math.random()*100+"%";
confetti.style.left=Math.random()*100+"%";

document.body.appendChild(confetti);

}

