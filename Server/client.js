
const socket=io()
let name1=prompt('enetr a your name');
let messageArea=document.querySelector('.container');
let textarea=document.querySelector('#MesageInput');


socket.emit('user-joined',name1);


socket.on('user-joined',(name1)=>{
    console.log(name1);
    appendUser(name1,'right');


});

appendUser(name1,'left');
function appendUser(name,position){
        console.log("fnction will be calleed");
        let mainDiv=document.createElement('div')
        let className=position
        mainDiv.classList.add('message',className)

        let markup=
        `<h4>${name} joined a chat</h4>
        
        `
        
        mainDiv.innerHTML=markup;
        messageArea.appendChild(mainDiv)
}





textarea.addEventListener('keyup',(e)=>{
    if(e.key === 'Enter')
    {
            console.log(e.target.value);
            sendMesage(e.target.value);


    }
})

function sendMesage(message){
    let msg={
        user:name1,
        message:message.trim()
    }
   
    
    appendMesage(msg,'right');
    
    textarea.value="";
    scrollToBottom()

    //send t0 server
    socket.emit('message',msg);
     

}



function appendMesage(msg,position){
        let mainDiv=document.createElement('div')
        let className=position
        mainDiv.classList.add('message',className)

        let markup=
        `<h4>${msg.user}</h4>
         <p>${msg.message}</p>
        `
        mainDiv.innerHTML=markup
        messageArea.appendChild(mainDiv)
}

//receive data to 
socket.on('message',(msg)=>{
        //console.log(msg)
        appendMesage(msg,'left');
        scrollToBottom()
})

function scrollToBottom(){
    messageArea.scrollTop=messageArea.scrollHeight;
}











































































































































































































































































































































































// const socket = io('http://localhost:8000');
// const form=document.getElementById('send-container');
// const message=document.getElementById('MesageInput');
// const messageContainer=document.querySelector(".container");

// const name1 =prompt("enter your name to join");

// socket.emit('new-user-joined',name1);

// socket.on('user-joined',name1=>{
//     append(`${name1} joined a chat`,'right');

// });



// const append=(message,position)=>{
//     const messageEl=document.createElement('div');
//     messageEl.innerText=message;
//     messageEl.classList.add('message');
//     message.classList.add(position);
//     messageContainer.append(messageEl);
// }

// form.addEventListener=('submit',(e)=>{
//     e.preventDefault();
//     const message=MesageInput.val;
//     append(`you:${message}`,'right');
//     socket.emit('send',message);
//     MesageInput.val="";

// });



// socket.on('receive',data=>{
//     append(`${data.name1}:${data.message}`,'left');

// });