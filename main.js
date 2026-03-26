
import gsap from '/gsap/index.js';
import ScrollTrigger from '/gsap/ScrollTrigger.js';
gsap.registerPlugin(ScrollTrigger);


const logoWhite = document.getElementById('logo-white');
const logoRed = document.getElementById('logo-red');
const btnGoBack = document.getElementById('btn-go-back');
const btnSendMessage = document.getElementById('btnSendMessage');
const inpName = document.getElementById('inpName');
const inpEmail = document.getElementById('inpEmail');
const inpMessage = document.getElementById('inpMessage');
const myEmail = document.getElementById('my-email');
const myPhone = document.getElementById('my-phone');
const github = document.getElementById('github');
const linkedin = document.getElementById('linkedin');
const instagram = document.getElementById('instagram');
const tiktok = document.getElementById('tiktok');

// logo button :

logoWhite.onmouseenter= function(){
    logoWhite.setAttribute('class','hide');
    logoRed.setAttribute('class','logo')
}
logoRed.onmouseleave = function(){
    logoRed.setAttribute('class','hide')
    logoWhite.setAttribute('class','logo')
}
logoRed.onclick = function(){
    location.reload()
}
// scrolling Button :  

onscroll = function(){
    if(this.scrollY > 1065 && this.scrollY < 3960){
        btnGoBack.setAttribute('class','go-back')
    }else{
        btnGoBack.setAttribute('class','hide')
    }
}
btnGoBack.onclick = function(){
    location.href = '#hero'
}
// about section animation
const timeLineAbout = gsap.timeline({scrollTrigger:'#about-title'});
timeLineAbout.fromTo('#about-title',{x:-100 , opacity:0},{x:0 , opacity:1, duration:1 });
timeLineAbout.fromTo('#about-text1',{x:-100 , opacity:0},{x:0 , opacity:1, duration:1 },'-=0.5');
timeLineAbout.fromTo('#about-text2',{x:-100 , opacity:0},{x:0 , opacity:1, duration:1 },'-=0.5');
timeLineAbout.fromTo('#container-exp',{x:100 , opacity:0},{x:0 , opacity:1, duration:1 },'-=1');
// skills section animation
const timeLineSkills = gsap.timeline({scrollTrigger:'#skills-title'});
timeLineSkills.fromTo('#skills-title',{x:-100 , opacity:0},{x:0 , opacity:1, duration:1 });
timeLineSkills.fromTo('#container-svg-python , #container-svg-js , #container-svg-react , #container-svg-mongo , #container-svg-git',{y:-30 , opacity:0},{y:0 , opacity:1 , duration:0.3})
timeLineSkills.fromTo('#container-svg-django , #container-svg-css , #container-svg-threejs , #container-svg-json , #container-svg-github',{y:30 , opacity:0},{y:0 , opacity:1 , duration:0.3},'-=0.3')
// projects section animation
const timeLineProjects = gsap.timeline({scrollTrigger:'#projects-title'});
timeLineProjects.fromTo('#projects-title',{x:-100 , opacity:0},{x:0 , opacity:1, duration:1 });
timeLineProjects.fromTo('#projects-1',{y:100 , opacity:0},{y:0 , opacity:1 ,duration:1 },'-=0.5');
timeLineProjects.fromTo('#projects-2',{y:100 , opacity:0},{y:0 , opacity:1 ,duration:1 },'-=0.5');
timeLineProjects.fromTo('#projects-3',{y:100 , opacity:0},{y:0 , opacity:1 ,duration:1 },'-=0.5');
// contact section animation
const timeLineContact = gsap.timeline({scrollTrigger:'#contact'});
timeLineContact.fromTo('#my-email',{x:-100 , opacity:0},{x:0 , opacity:1 , duration:1})
timeLineContact.fromTo('#my-location',{x:-100 , opacity:0},{x:0 , opacity:1 , duration:1},'-=0.5')
timeLineContact.fromTo('#contact-form',{scaleX:0 , opacity:0},{scaleX:1 ,opacity:1, duration:1},'-=1.5')



myEmail.onclick = function (){location.href = 'mailto:benaichhamed@gmail.com'};
myPhone.onclick = function (){location.href = 'tel:+213660361580'};
// social media buttons :
github.onclick = function(){window.open('https://github.com/iiiggoo','_blank')};
linkedin.onclick = function(){window.open('','_blank')};
instagram.onclick = function(){window.open('https://www.instagram.com/iiig_goo','_blank')};
tiktok.onclick = function(){window.open('https://www.tiktok.com/@asura_dev','_blank')};

// meesage handling : 

async function sendMessage (text){
    try{
        const respond = await fetch(`./telegram.php`,
            {
                method:'POST',
                headers:{
                    'content-Type':'application/json'
                },  
                body:JSON.stringify({
                    chat_id:1098390817,
                    text:text,
                })
            }
        )
    }catch(error){
        console.log(error);
    }
}

function theMessage(name,email,message){
    const textMessage = `You have a new message from \nName :${name} ,\nEmail : ${email} ,\nMessage: ${message} `;
    return textMessage;
}

btnSendMessage.onclick = function(){
    if(inpName.value != '' && inpEmail.value != '' && inpMessage.value != ''){
        sendMessage(theMessage(inpName.value , inpEmail.value , inpMessage.value));
        inpName.value = '';
        inpEmail.value = '';
        inpMessage.value = '';
        btnSendMessage.style.background = 'green'
        btnSendMessage.textContent = 'Sent successfuly!'
        setTimeout(function (){
            location.reload();
        },1000);
    }else{
        btnSendMessage.textContent = 'all fildes required'
        btnSendMessage.style.background = 'red'
        setTimeout(function(){btnSendMessage.textContent='SEND MESSAGE';
            btnSendMessage.style.background = 'transparent'
        },3000)
    }
}



function addSvgEvent (containerSvgId,svgImgId,svgTextId){
    const container = document.getElementById(containerSvgId);
    const img = document.getElementById(svgImgId)
    const text = document.getElementById(svgTextId);
    let timer;
    let isClicked = false ;
    container.onmouseenter = function(){
        if(isClicked)return;
            gsap.to(img,{
                y:-80,
                duration:1,
                rotateY:360,
                ease:'none',
            })
            timer = setTimeout(function(){text.setAttribute('class','svg-text')},1000)
    }
    container.onmouseleave = function(){
        if(isClicked)return;
            clearTimeout(timer);
            gsap.to(img,{
                y:0,
                duration:1,
                rotateY:0,
                ease:'none',
            })
            text.setAttribute('class','hide')
    }
    container.onclick = function(){
        isClicked = true;
        gsap.to(img,{
            y:-80,
            duration:1,
            rotateY:360,
            ease:'none',
        })
        timer = setTimeout(function(){text.setAttribute('class','svg-text')},1000)
    }
    document.addEventListener('click', function(e){
        if(!container.contains(e.target)){ // this function is for when you click outside the element target container)
            isClicked = false;
            clearTimeout(timer);
            gsap.to(img,{
                y:0,
                duration:1,
                rotateY:0,
                ease:'none',
            })
            text.setAttribute('class','hide')
        }
    })
}
addSvgEvent('container-svg-python','svg-img-python','svg-text-python');
addSvgEvent('container-svg-django','svg-img-django','svg-text-django');
addSvgEvent('container-svg-js','svg-img-js','svg-text-js');
addSvgEvent('container-svg-css','svg-img-css','svg-text-css');
addSvgEvent('container-svg-react','svg-img-react','svg-text-react');
addSvgEvent('container-svg-threejs','svg-img-threejs','svg-text-threejs');
addSvgEvent('container-svg-mongo','svg-img-mongo','svg-text-mongo');
addSvgEvent('container-svg-json','svg-img-json','svg-text-json');
addSvgEvent('container-svg-git','svg-img-git','svg-text-git');
addSvgEvent('container-svg-github','svg-img-github','svg-text-github');
