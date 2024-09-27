
// function loco() {

//   gsap.registerPlugin(ScrollTrigger);

//   // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

//   const locoScroll = new LocomotiveScroll({
//     el: document.querySelector(".main"),
//     smooth: true
//   });
//   // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
//   locoScroll.on("scroll", ScrollTrigger.update);

//   // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
//   ScrollTrigger.scrollerProxy(".main", {
//     scrollTop(value) {
//       return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//     }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//     getBoundingClientRect() {
//       return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
//     },
//     // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//     pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
//   });

//   // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
//   ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

//   // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
//   ScrollTrigger.refresh();
// }
// loco()
var menuToggle = document.getElementById("menuToggle");

var menuBar = gsap.timeline();

menuBar.to('.bar-1', 0.5,{
	attr:{d: "M8,2 L2,8"},
	x:1,
    delay:0.2,
    stroke:"#000000",
    duration:0.3,
	ease: Power2.easeInOut
}, 'start')

menuBar.to('.bar-2', 0.5,{
	autoAlpha: 0,
    duration:0.3,
    delay:0.2,

}, 'start')

menuBar.to('.bar-3', 0.5,{
	attr:{d: "M8,8 L2,2"},
	x:1,
    duration:0.3,
    delay:0.2,

    stroke:"#000000",
	ease: Power2.easeInOut
}, 'start')

menuBar.reverse();


var tl = gsap.timeline({ paused: true});

tl.to('.fullpage-menu', {
	duration:0,
	display: "block",
	ease: 'Expo.easeInOut',
});

tl.from('.menu-bg span', {
	duration:1,
	x:"100%",
	stagger: 0.1,
	ease: 'Expo.easeInOut'
});

tl.from('.main-menu li a', {
	y:"100%",
    // duration:1,
	stagger: 0.2,
	ease: 'back'
} , "-=0.5");

tl.from('.social-links li', {
	y:"-100%",
	opacity:0,
	stagger: 0.1,
	ease: 'Expo.easeInOut'
} , "-=0.8");
tl.to(".brand-logo a",{
    color:"#000000",
},0)

tl.reverse();

menuToggle.addEventListener('click', function(){
	menuBar.reversed(!menuBar.reversed());
	tl.reversed(!tl.reversed());
});

//page2
var clutter = "";

document.querySelector("#page2>h3").textContent.split("").forEach(function (dets) {
  clutter += `<span>${dets}</span>`

  document.querySelector("#page2>h3").innerHTML = clutter;
})

gsap.to("#page2>h3>span", {
  scrollTrigger: {
    trigger: `#page2>h3>span`,
    start: `top bottom`,
    end: `bottom top`,
    scroller: `.main`,
    scrub: true,
  },
  stagger: .2,
  color: `#fde9ba`
})

//page4


let fadein = gsap.utils.toArray('.work')
fadein.forEach((item, index) => {

let tlpage4 = gsap.timeline({
  scrollTrigger: {
  trigger:item,
  scrub: true,
  start:"top 80%",  // start when top of trigger target hits 50% point of viewport
  toggleActions:"restart none none reset",
  end: "top 30%",
  }
});
tlpage4.from(item.querySelector("img"), {
  opacity: 0,
  y:20,
  duration:0.5,
  })
  tlpage4.from(item.querySelector("h2"), {
    opacity: 0,
    y:30,
    duration:1,
    },"-=0.1")
    tlpage4.fromTo(item.querySelector("h3"), {
        opacity: 0,
        y:30,
        duration:1,
        },{
            opacity:0.7,
            y:0
        },"-=0.7");
});
//page 5

gsap.set(".panel5", { zIndex: (i, target, targets) => targets.length - i });

var images = gsap.utils.toArray('.panel5');

images.forEach((image, i) => {
  
  var tl = gsap.timeline({
    
    scrollTrigger: {
      trigger: "section.services",
      start: () => "top -" + (window.innerHeight*(i+0.5)),
      end: () => "+=" + window.innerHeight,
      scrub: true,
      toggleActions: "play none reverse none",
      invalidateOnRefresh: true,     
    }
    
  })
  
  tl 
  .to(image, { opacity: 0,duration:0.1,delay:0.1})
  ;
  
});


gsap.set(".panel-text", { zIndex: (i, target, targets) => targets.length - i });

var texts = gsap.utils.toArray('.panel-text');

texts.forEach((text, i) => {
  var textp = text.querySelector('p');

  var tl = gsap.timeline({
    
    scrollTrigger: {
      trigger: "section.services",
      start: () => "top -" + (window.innerHeight*i),
      end: () => "+=" + window.innerHeight,
      scrub: true,
      toggleActions: "play none reverse none",
      invalidateOnRefresh: true,     
    }
    
  })
  
  tl
  .to(text, { duration: 0.33, opacity: 1, y:"10%" ,	ease: Power1.easeInOut
})  
  .to(textp, { duration: 0.33, opacity: 0.8, y:"10%" ,	ease: Power1.easeInOut
},0)  

  .to(text, { duration: 0.33, opacity: 0, y:"0%",	ease: Power1.easeInOut
}, 0.96)
  .to(textp, { duration: 0.33, opacity: 0, y:"0%",	ease: Power1.easeInOut
},0.96 )

  ;
  
});


ScrollTrigger.create({

    trigger: "section.services",
    scrub: true,
    // markers: true,
    pin: true,
    start: () => "top top",
    end: () => "+=" + ((images.length + 1) * window.innerHeight),
    invalidateOnRefresh: true,

});
  
  //page6
  
const blogs = document.querySelector(".blogs");
console.log(blogs.offsetWidth)

function getScrollAmount() {
  let blogsWidth = blogs.scrollWidth;
  return -(blogsWidth - window.innerWidth);
}

const tween = gsap.to(blogs, {
  x: getScrollAmount,
  duration: 3,
  ease: "none",
});

//page7
ScrollTrigger.create({
  trigger:".page7",
  start:"top 20%",
  end: () => `+=${getScrollAmount() * -1}`,
  pin:true,
  animation:tween,
  scrub:1,
  invalidateOnRefresh:true,
})

//footer
