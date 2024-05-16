var up=document.getElementsByClassName('up')[0];
var userq=document.getElementsByClassName('ask')[0];
var chatbox=document.getElementsByClassName('chat')[0];
var send=document.getElementsByClassName('send');
var inpt=document.getElementById("inpt");

console.log('connected');


function getAnswer(question){
    
}

function loadchat(event){
    var question=inpt.value;
    event.preventDefault()

    up.classList.add("hide");
    chatbox.classList.remove("hide");
    
    userq.innerHTML=question;
    inpt.value='';
}


send[0].addEventListener( 'click',function(event){
    loadchat(event);
})