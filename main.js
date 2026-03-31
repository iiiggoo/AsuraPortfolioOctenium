import gsap from '/gsap/index.js';
import ScrollTrigger from '/gsap/ScrollTrigger.js';
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.normalizeScroll(false); 


const logoWhite = document.getElementById('logo-white');
const logoRed = document.getElementById('logo-red');
const btnGoBack = document.getElementById('btn-go-back');
const btnSendMessage = document.getElementById('btnSendMessage');
const inpName = document.getElementById('inpName');
const inpEmail = document.getElementById('inpEmail');
const inpMessage = document.getElementById('inpMessage');
const myEmail = document.getElementById('my-email');
const myPhone = document.getElementById('my-phone');
const btnMenu = document.getElementById('hamburger');
const imgMenu = document.getElementById('hamburger-img-menu');
const imgMenuX = document.getElementById('hamburger-img-x');
const menu = document.getElementById('navBar-hamburger');
const filterMenu = document.getElementById('navBar-hamburger-filter');


// hamburger links click :
function redBackGround (btnId,section){
    const btn = document.getElementById(btnId);
    btn.ontouchstart = function(){
        btn.className = 'red';
    }
    btn.ontouchend = function(){
        btn.className = ''
    }
    btn.onclick = function(){
        location.href = `#${section}`
        gsap.to(menu,{
            x:150,
            duration:0.5,
            opacity:0,
            onComplete: function(){
                menu.className = 'hide';
                
                gsap.set(menu, {clearProps: 'all'}); // this is for clearing the gsap data from the element 
            }
        })
        filterMenu.className = 'hide';
    }
}
redBackGround('about-hamburger','about');
redBackGround('skills-hamburger','skills');
redBackGround('projects-hamburger','projects');
redBackGround('contact-hamburger','contact');

// logo button :
if(window.innerWidth >= 440){
    logoWhite.onmouseenter= function(){    
        logoWhite.setAttribute('class','hide');
        logoRed.setAttribute('class','logo');
    }
    logoRed.onmouseleave = function(){
        logoRed.setAttribute('class','hide')
        logoWhite.setAttribute('class','logo')
    }
}else{
    logoWhite.ontouchstart = function (){
        logoWhite.setAttribute('class','hide');
        logoRed.setAttribute('class','logo');
    }
    logoWhite.ontouchend =function (){
        logoRed.setAttribute('class','hide')
        logoWhite.setAttribute('class','logo')
    }
}

logoRed.onclick = function(){
    location.reload()
}
logoWhite.onclick = function(){
    location.reload()
}

// hamburger button : 
btnMenu.onclick = function(){
    if(menu.className == 'hide' && filterMenu.className == 'hide'){
        filterMenu.className = 'navBar-hamburger-filter';
        menu.className = 'navBar-hamburger';
        imgMenu.className = 'hide'
        imgMenuX.className = ''
        gsap.from(menu,{
            x:150,
            duration:0.5,
            opacity:0,
        })
    }else{
        gsap.to(menu,{
            x:150,
            duration:0.5,
            opacity:0,
            onComplete: function(){
                menu.className = 'hide';
                gsap.set(menu, {clearProps: 'all'}); // this is for clearing the gsap data from the element 
            }
        })
        imgMenu.className = ''
        imgMenuX.className = 'hide'
        filterMenu.className = 'hide';
    }
}
filterMenu.onclick = function (){
    gsap.to(menu,{
            x:150,
            duration:0.5,
            opacity:0,
            onComplete: function(){
                menu.className = 'hide';
                gsap.set(menu, {clearProps: 'all'}); // this is for clearing the gsap data from the element 
            }
        })
        imgMenu.className = ''
        imgMenuX.className = 'hide'
        filterMenu.className = 'hide';
}
function socialMediaClickHamburger (icon,iconRed,iconWhite,link){
    const container = document.getElementById(icon);
    const red = document.getElementById(iconRed);
    const white = document.getElementById(iconWhite);
    container.ontouchstart = function(){
        red.className = 'social-media-hamburger-img';
        white.className = 'hide'
    }
    container.ontouchend = function (){
        red.className = 'hide'
        white.className = 'social-media-hamburger-img'
    }
    container.onclick = function(){
        window.open(`${link}`,'_blank')
        gsap.to(menu,{
            x:150,
            duration:0.5,
            opacity:0,
            onComplete: function(){
                menu.className = 'hide';
                gsap.set(menu, {clearProps: 'all'}); // this is for clearing the gsap data from the element 
            }
        })
        imgMenu.className = ''
        imgMenuX.className = 'hide'
        filterMenu.className = 'hide';
    }
}
socialMediaClickHamburger('github-hamburger','githubR-hamburger','githubW-hamburger','https://github.com/iiiggoo')
socialMediaClickHamburger('linkedin-hamburger','linkedinR-hamburger','linkedinW-hamburger','https://github.com/iiiggoo')
socialMediaClickHamburger('instagram-hamburger','instagramR-hamburger','instagramW-hamburger','https://www.instagram.com/iiig_goo')
socialMediaClickHamburger('tiktok-hamburger','tiktokR-hamburger','tiktokW-hamburger','https://www.tiktok.com/@asura_dev')
//hero button : 
const btnHero = document.getElementById('btn-hero');
if(window.innerWidth >= 440){
    btnHero.onclick = function (){
        location.href = '#contact'
    }
}else{
    btnHero.onclick = function (){
        location.href = '#contact'
    }
    btnHero.ontouchstart = function(){
        btnHero.className = 'btn-hero red'
    }
    btnHero.ontouchend = function(){
        btnHero.className = 'btn-hero'
    }
}
// scrolling Button :  

onscroll = function(){
    if(window.innerWidth >= 440){
        if(this.scrollY > 1065 && this.scrollY < 3960){
            btnGoBack.setAttribute('class','go-back')
        }else{
            btnGoBack.setAttribute('class','hide')
        };
        btnGoBack.onclick = function(){
            location.href = '#hero'
        }
    }else{
        if(this.scrollY > 500 && this.scrollY < 5510){
            btnGoBack.setAttribute('class','go-back')
        }else{
            btnGoBack.setAttribute('class','hide')
        }
        btnGoBack.ontouchstart = function(){
            btnGoBack.className = 'red go-back'
        }
        btnGoBack.ontouchend = function(){
            btnGoBack.className = 'go-back'
        }
        btnGoBack.onclick = function(){
            location.href = '#hero'
        }
    }
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
timeLineSkills.fromTo('#container-svg-python , #container-svg-js , #container-svg-react , #container-svg-mongo , #container-svg-git',{y:-30 , opacity:0},{y:0 , opacity:1 , duration:0.3},'-=0.5');
timeLineSkills.fromTo('#container-svg-django , #container-svg-css , #container-svg-threejs , #container-svg-json , #container-svg-github',{y:30 , opacity:0},{y:0 , opacity:1 , duration:0.3},'-=0.3');
// projects section animation
const timeLineProjects = gsap.timeline({scrollTrigger:'#projects-title'});
timeLineProjects.fromTo('#projects-title',{x:-100 , opacity:0},{x:0 , opacity:1, duration:1 });
timeLineProjects.fromTo('#projects-1',{y:100 , opacity:0},{y:0 , opacity:1 ,duration:1 },'-=0.5');
timeLineProjects.fromTo('#projects-2',{y:100 , opacity:0},{y:0 , opacity:1 ,duration:1 },'-=0.5');
timeLineProjects.fromTo('#projects-3',{y:100 , opacity:0},{y:0 , opacity:1 ,duration:1 },'-=0.5');
// contact section animation
const timeLineContact = gsap.timeline({scrollTrigger:'#contact'});
timeLineContact.fromTo('#my-email',{x:-100 , opacity:0},{x:0 , opacity:1 , duration:1})
timeLineContact.fromTo('#my-phone',{x:-100 , opacity:0},{x:0 , opacity:1 , duration:1},'-=0.5');
timeLineContact.fromTo('#my-location',{x:-100 , opacity:0},{x:0 , opacity:1 , duration:1},'-=0.5');
timeLineContact.fromTo('#contact-form',{scaleX:0 , opacity:0},{scaleX:1 ,opacity:1, duration:1},'-=1.5');
timeLineContact.from('#github-social-media-icon,#linkedin-social-media-icon,#instagram-social-media-icon,#tiktok-social-media-icon',{y:10 ,duration:1,opacity:0 },'-=0.5');

// project hover :
function projectImgHover (seemore,Filter,containerimg){
    const seeMore = document.getElementById(seemore);
    const filter = document.getElementById(Filter);
    const containerImg = document.getElementById(containerimg)
    if(window.innerWidth >= 440){
        containerImg.onmouseenter = function(){
            seeMore.className = 'see-more';
            filter.className = 'filter';
            containerImg.className = 'red-shadow container-project-img'
        };
        containerImg.onmouseleave = function(){
            seeMore.className = 'hide';
            filter.className = 'hide';
            containerImg.className = 'container-project-img'
        };
    }
}
projectImgHover('see-more1','filter1','container-project-img-1');
projectImgHover('see-more2','filter2','container-project-img-2');
projectImgHover('see-more3','filter3','container-project-img-3');



// email and phone click call : 
if(window.innerWidth >= 440){
    myEmail.onclick = function (){location.href = 'mailto:asura@asura-portfolio.com'};
    myPhone.onclick = function (){location.href = 'tel:+213660361580'};
}else{
    myEmail.ontouchstart = function (){
        myEmail.className = 'red-color contact-info-content contact-info-content-link';
    }
    myPhone.ontouchstart = function (){
        myPhone.className = 'red-color contact-info-content contact-info-content-link';
    }
    myEmail.ontouchend = function (){
        myEmail.className = 'contact-info-content contact-info-content-link';
    }
    myPhone.ontouchend = function (){
        myPhone.className = 'contact-info-content contact-info-content-link';
    }
    myEmail.onclick = function (){location.href = 'mailto:asura@asura-portfolio.com'};
    myPhone.onclick = function (){location.href = 'tel:+213660361580'};
}


// social media buttons :
function socialMediaHover(containerImg,imgWhite,imgRed,link){
    const container = document.getElementById(containerImg);
    const whiteIcon = document.getElementById(imgWhite);
    const redIcon = document.getElementById(imgRed);
    if(window.innerWidth >= 440){
        container.onmouseenter = function (){
            whiteIcon.className = 'hide';
            redIcon.className = 'social-media-img';
        }
        container.onmouseleave = function (){
            redIcon.className = 'hide';
            whiteIcon.className = 'social-media-img';
        }
        container.onclick = function(){window.open(`${link}`,'_blank')};
    }else{
        container.ontouchstart = function(){
            whiteIcon.className = 'hide';
            redIcon.className = 'social-media-img';
        }
        container.ontouchend = function(){
            redIcon.className = 'hide';
            whiteIcon.className = 'social-media-img';
        }
        container.onclick = function(){window.open(`${link}`,'_blank')
    }
}}
socialMediaHover('github-social-media-icon','github-white','github-red','https://github.com/iiiggoo')
socialMediaHover('linkedin-social-media-icon','linkedin-white','linkedin-red','https://github.com/iiiggoo')
socialMediaHover('instagram-social-media-icon','instagram-white','instagram-red','https://www.instagram.com/iiig_goo')
socialMediaHover('tiktok-social-media-icon','tiktok-white','tiktok-red','https://www.tiktok.com/@asura_dev')

// projects galery : 
function projectClick (imgContainer,titleContainer,projectWindow,windowFilter,btnX){
    const container = document.getElementById(imgContainer);
    const containerTitle = document.getElementById(titleContainer)
    const window = document.getElementById(projectWindow);
    const filter = document.getElementById(windowFilter);
    const x = document.getElementById(btnX);

    container.onclick = function(){
        filter.className = 'project-window-filter';
        gsap.from(window,{
            scaleX:0.9,
            duration:1,
            opacity:0,
            onStart:function(){
                window.className = 'project-window';
            }
        })
        
    };
    containerTitle.onclick = function(){
        filter.className = 'project-window-filter';
        gsap.from(window,{
            scaleX:0.9,
            duration:1,
            opacity:0,
            onStart:function(){
                window.className = 'project-window';
            }
        })
    };
    x.onclick = function (){
        window.className = 'hide';
        filter.className = 'hide';
    };
    filter.onclick = function(){
        window.className = 'hide';
        filter.className = 'hide';        
    };
}
projectClick('container-project-img-1','projects-containers-title-1','project-1-window','window-filter-1','btn-x-1');
projectClick('container-project-img-2','projects-containers-title-2','project-2-window','window-filter-2','btn-x-2');
projectClick('container-project-img-3','projects-containers-title-3','project-3-window','window-filter-3','btn-x-3');

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
    if(window.innerWidth >= 440){
        container.onmouseenter = function(){
            if(isClicked == true)return;
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
    }else{
        container.onclick = function(){
            if(isClicked == false){
                isClicked = true;
                gsap.to(img,{
                    y:-80,
                    duration:1,
                    rotateY:360,
                    ease:'none',
                })
                timer = setTimeout(function(){text.setAttribute('class','svg-text')},1000)
            }else{
                clearTimeout(timer);
                isClicked = false;
                gsap.to(img,{
                    y:0,
                    duration:1,
                    rotateY:0,
                    ease:'none',
                })
                text.setAttribute('class','hide')
            }
        }
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

// footer go back btn : 
const btnFooter = document.getElementById('footer-btn');
if(window.innerWidth >= 440){
    btnFooter.onclick = function (){
        location.href = '#hero'
    }
}else{
    btnFooter.onclick = function (){
        location.href = '#hero'
    }
    btnFooter.ontouchstart = function(){
        btnFooter.className = 'red-color'
    }
    btnFooter.ontouchend = function(){
        btnFooter.className = ''
    }
    
}