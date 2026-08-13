/* ==========================================
   WILDCAT CUP
   Main JavaScript
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    initializeNavbar();

    initializeCountdown();

    initializeScrollAnimations();

    initializeSmoothScroll();

    initializeGallery();

    initializeHero();

});

/* ==========================================
Navbar Scroll Effect
========================================== */

function initializeNavbar(){

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll",()=>{

        if(window.scrollY > 40){

            navbar.classList.add("scrolled");

        }

        else{

            navbar.classList.remove("scrolled");

        }

    });

}

/* ==========================================
Countdown Timer
========================================== */

function initializeCountdown(){

    const targetDate = new Date("July 18, 2026 08:00:00").getTime();

    const days = document.getElementById("days");
    const hours = document.getElementById("hours");
    const minutes = document.getElementById("minutes");
    const seconds = document.getElementById("seconds");

    if(!days) return;

    setInterval(function(){

        const now = new Date().getTime();

        const distance = targetDate - now;

        const d = Math.floor(distance / (1000*60*60*24));

        const h = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));

        const m = Math.floor((distance % (1000*60*60)) / (1000*60));

        const s = Math.floor((distance % (1000*60)) / 1000);

        days.innerHTML = d;
        hours.innerHTML = h;
        minutes.innerHTML = m;
        seconds.innerHTML = s;

    },1000);

}

/* ==========================================
Fade In Animation
========================================== */

function initializeScrollAnimations(){

    const elements = document.querySelectorAll(

        ".stat-card,.player-card,.course-card,.champions-card,.fade-up"

    );

    const observer = new IntersectionObserver(

        entries=>{

            entries.forEach(entry=>{

                if(entry.isIntersecting){

                    entry.target.classList.add("active");

                }

            });

        },

        {

            threshold:.2

        }

    );

    elements.forEach(el=>{

        observer.observe(el);

    });

}

/* ==========================================
Smooth Scrolling
========================================== */

function initializeSmoothScroll(){

    document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

        anchor.addEventListener("click",function(e){

            const target=document.querySelector(this.getAttribute("href"));

            if(target){

                e.preventDefault();

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        });

    });

}

/* ==========================================
Hero Effects
========================================== */

function initializeHero(){

    const hero=document.querySelector(".hero");

    const video=document.querySelector("#heroVideo");

    if(!hero) return;

    window.addEventListener("scroll",()=>{

        hero.style.transform=`translateY(${window.scrollY*.25}px)`;

    });

    if(video){

        video.play().catch(()=>{});

    }

}

/* ==========================================
Gallery Preview
========================================== */

function initializeGallery(){

    const images=document.querySelectorAll(".gallery-grid img");

    images.forEach(image=>{

        image.addEventListener("click",()=>{

            createLightbox(image.src);

        });

    });

}
/* ==========================================
Lightbox Gallery
========================================== */

function createLightbox(imageSrc){

    const existing=document.querySelector(".lightbox");

    if(existing){

        existing.remove();

    }

    const lightbox=document.createElement("div");

    lightbox.className="lightbox";

    lightbox.innerHTML=`

        <div class="lightbox-overlay"></div>

        <img src="${imageSrc}" class="lightbox-image">

        <button class="lightbox-close">

            &times;

        </button>

    `;

    document.body.appendChild(lightbox);

    document.body.style.overflow="hidden";

    const close=()=>{

        lightbox.remove();

        document.body.style.overflow="auto";

    };

    lightbox.querySelector(".lightbox-close").onclick=close;

    lightbox.querySelector(".lightbox-overlay").onclick=close;

}

/* ==========================================
Animated Statistics
========================================== */

function animateNumbers(){

    const stats=document.querySelectorAll(".stat-card h1");

    stats.forEach(stat=>{

        const target=parseInt(stat.innerText);

        if(isNaN(target)) return;

        let current=0;

        const increment=Math.ceil(target/80);

        const timer=setInterval(()=>{

            current+=increment;

            if(current>=target){

                current=target;

                clearInterval(timer);

            }

            stat.innerText=current;

        },20);

    });

}

window.addEventListener("load",animateNumbers);

/* ==========================================
Back To Top Button
========================================== */

const backToTop=document.createElement("button");

backToTop.innerHTML="↑";

backToTop.className="back-to-top";

document.body.appendChild(backToTop);

backToTop.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        backToTop.classList.add("show");

    }

    else{

        backToTop.classList.remove("show");

    }

});

/* ==========================================
Scroll Progress Bar
========================================== */

const progress=document.createElement("div");

progress.className="progress-bar";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

    const scrollTop=document.documentElement.scrollTop;

    const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

    const width=(scrollTop/height)*100;

    progress.style.width=width+"%";

});

/* ==========================================
Navbar Active Links
========================================== */

const navLinks=document.querySelectorAll(".nav-link");

navLinks.forEach(link=>{

    if(link.href===window.location.href){

        link.classList.add("active");

    }

});

/* ==========================================
Hero Fade
========================================== */

window.addEventListener("scroll",()=>{

    const hero=document.querySelector(".hero-content");

    if(!hero) return;

    hero.style.opacity=1-window.scrollY/700;

});

/* ==========================================
Image Hover Zoom
========================================== */

document.querySelectorAll("img").forEach(img=>{

    img.addEventListener("mouseenter",()=>{

        img.style.transition=".4s";

    });

});

/* ==========================================
Console Welcome
========================================== */

console.log(`

🏆  WILDCAT CUP

Annual Two-Man Scramble

Marin Catholic Alumni

Est. 2025

`);
