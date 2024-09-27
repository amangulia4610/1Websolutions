
function loco() {

  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
loco()


  gsap.from(".logo, header button", {
    y: -100,
    opacity: 0,
    ease: "power1",
    stagger: {
      amount: 0.5,
      each: 0.12,
    },
    delay:1,
  });
  gsap.from(".nav--link", {
    y:-100,
    ease: "power1",
    stagger: {
      each: 0.12,
    },
    delay:1,
  });


// Function to animate the elements in .page1


  gsap.from(".page1 .panel", {
    opacity: 0,
    duration: 1,
    delay:2,
  });
gsap.to("header,.page1",{
  opacity:1,
  delay:1.5,

})



const dot = document.querySelector('.dot');

document.addEventListener('mousemove', (e) => {
    updateCursorPos(e.clientX, e.clientY);
});

// Function to update the cursor position
function updateCursorPos(mouseX, mouseY) {
    dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
}

// Update cursor position when scrolling
window.addEventListener('scroll', () => {
    const mouseX = event.clientX;
    const mouseY = event.clientY + window.scrollY;
    updateCursorPos(mouseX, mouseY);
});


document.addEventListener('mouseleave', () => {
    dot.style.opacity = '0';
});
document.addEventListener('mouseenter', () => {
    dot.style.opacity = '1';
});

document.addEventListener("mouseout", function (event) {
    const cursorType = getComputedStyle(event.target).cursor;

    // Check if the cursor is a pointer.
    if (cursorType === "pointer") {
        dot.style.pointerEvents = "none"; // Hide the dot and disable pointer events
        resetDotSize();
    }
});

// Event listener to detect when the mouse leaves any element.
document.addEventListener("mouseout", function (event) {
    const cursorType = getComputedStyle(event.target).cursor;

    // Check if the cursor is a pointer.
    if (cursorType === "pointer") {
      resetDotSize();
    }
});



// Function to increase the size of the dot.
function increaseDotSize() {
  const currentWidth = parseFloat(dot.style.width);
  const currentHeight = parseFloat(dot.style.height);
  const newWidth = currentWidth + 0;
  const newHeight = currentHeight + 0;
  dot.style.width = newWidth + "px";
  dot.style.height = newHeight + "px";
  // dot.style.backgroundColor = "#fde9ba";


  dot.style.boxShadow = "0 0px 20px 15px #f8ba22";
}

// Function to reset the size of the dot to its original.
function resetDotSize() {
  dot.style.width = "1px";
  dot.style.height = "1px";
  // dot.style.backgroundColor = "#f8ba22";
  dot.style.boxShadow = "0 0px 30px 20px #f8ba22";

}

// Event listener to detect when the mouse hovers over any element.
document.addEventListener("mouseover", function(event) {
  const cursorType = getComputedStyle(event.target).cursor;

  // Check if the cursor is a pointer.
  if (cursorType === "pointer") {
    increaseDotSize();
  }
});

// Event listener to detect when the mouse leaves any element.
document.addEventListener("mouseout", function (event) {
    const cursorType = getComputedStyle(event.target).cursor;

    // Check if the cursor is a pointer.
    if (cursorType === "pointer") {
        resetDotSize();
    }
});
function canvas2() {
  const canvas = document.querySelector("#page7>canvas");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;


  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  function files(index) {
    var data = `
canvas/blk.jpg
canvas/desktop-002.jpg
canvas/desktop-004.jpg
canvas/desktop-006.jpg
canvas/desktop-008.jpg
canvas/desktop-010.jpg
canvas/desktop-012.jpg
canvas/desktop-014.jpg
canvas/desktop-016.jpg
canvas/desktop-018.jpg
canvas/desktop-020.jpg
canvas/desktop-022.jpg
canvas/desktop-024.jpg
canvas/desktop-026.jpg
canvas/desktop-028.jpg
canvas/desktop-030.jpg
canvas/desktop-032.jpg
canvas/desktop-034.jpg
canvas/desktop-036.jpg
canvas/desktop-038.jpg
canvas/desktop-040.jpg
canvas/desktop-042.jpg
canvas/desktop-044.jpg
canvas/desktop-046.jpg
canvas/desktop-048.jpg
canvas/desktop-050.jpg
canvas/desktop-052.jpg
canvas/desktop-054.jpg
canvas/desktop-056.jpg
canvas/desktop-058.jpg
canvas/desktop-060.jpg
canvas/desktop-062.jpg
canvas/desktop-064.jpg
canvas/desktop-066.jpg
canvas/desktop-068.jpg
canvas/desktop-070.jpg
canvas/desktop-072.jpg
canvas/desktop-074.jpg
canvas/desktop-076.jpg
canvas/desktop-078.jpg
canvas/desktop-080.jpg
canvas/desktop-082.jpg
canvas/desktop-084.jpg
canvas/desktop-086.jpg
canvas/desktop-088.jpg
canvas/desktop-090.jpg
canvas/desktop-092.jpg
canvas/desktop-094.jpg
canvas/desktop-096.jpg
canvas/desktop-098.jpg
canvas/desktop-100.jpg
canvas/desktop-102.jpg
canvas/desktop-104.jpg
canvas/desktop-106.jpg
canvas/desktop-108.jpg
canvas/desktop-110.jpg
canvas/desktop-112.jpg
canvas/desktop-114.jpg
canvas/desktop-116.jpg
canvas/desktop-118.jpg
canvas/desktop-120.jpg
canvas/desktop-122.jpg
canvas/desktop-124.jpg
canvas/desktop-126.jpg
canvas/desktop-128.jpg
canvas/desktop-130.jpg
canvas/desktop-132.jpg
canvas/desktop-134.jpg
canvas/desktop-136.jpg
canvas/desktop-138.jpg
canvas/desktop-140.jpg
canvas/desktop-142.jpg
canvas/desktop-144.jpg
canvas/desktop-146.jpg
canvas/desktop-148.jpg
canvas/desktop-150.jpg
canvas/desktop-152.jpg
canvas/desktop-154.jpg
canvas/desktop-156.jpg
canvas/desktop-158.jpg
canvas/desktop-160.jpg
canvas/desktop-162.jpg
canvas/desktop-164.jpg
canvas/desktop-166.jpg
canvas/desktop-168.jpg
canvas/desktop-170.jpg
canvas/desktop-172.jpg
canvas/desktop-174.jpg
canvas/desktop-176.jpg
canvas/desktop-178.jpg
canvas/desktop-180.jpg
canvas/desktop-182.jpg
canvas/desktop-184.jpg
canvas/desktop-186.jpg
canvas/desktop-188.jpg
canvas/desktop-190.jpg
canvas/desktop-192.jpg
canvas/desktop-194.jpg
canvas/desktop-196.jpg
canvas/desktop-198.jpg
canvas/desktop-200.jpg
canvas/desktop-202.jpg
canvas/desktop-204.jpg
canvas/desktop-206.jpg
canvas/desktop-208.jpg
canvas/desktop-210.jpg
canvas/desktop-212.jpg
canvas/desktop-214.jpg
canvas/desktop-216.jpg
canvas/desktop-218.jpg
canvas/desktop-220.jpg
canvas/desktop-222.jpg
canvas/desktop-224.jpg
canvas/desktop-226.jpg
canvas/desktop-228.jpg
canvas/desktop-230.jpg
canvas/desktop-232.jpg
canvas/desktop-234.jpg
canvas/desktop-236.jpg
canvas/desktop-238.jpg
canvas/desktop-240.jpg
canvas/desktop-242.jpg
canvas/blk.jpg

`;
    return data.split("\n")[index];
  }

  const frameCount = 125;

  const images = [];
  const imageSeq = {
    frame: 1,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: .5,
      trigger: `#page7`,
      start: `top top`,
      end: `250% top`,
      scroller: `.main`,
    },
    onUpdate: render,
  });

  images[1].onload = render;

  function render() {
    scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({

    trigger: "#page7",
    pin: true,
    scroller: `.main`,
    start: `top top`,
    end: `250% top`,
  });
}
canvas2()


gsap.fromTo(".page7-cir", {
  scale: 1,
  y: -300,
  opacity: 0,
}, {
  y: 0,
  scale: 1.5,
  opacity: 1,
  scrollTrigger: {
    trigger: ".page7-cir",
    start: "top center",
    end: "bottom top",
    scroller: ".main",
    scrub: 0.5
  }
});

gsap.to('.corner-box', {
  scrollTrigger: {
    trigger: "#page7",
    start: 'top top',
    end: '250% top',
    scroller: ".main",
    scrub: 1,
    progress: () => {
      const element = document.querySelector('.corner-box');
      const bottom = element.getBoundingClientRect().bottom;
      const height = window.innerHeight;
      return height - bottom;
    }
  },
  // scale:1.4,
  y: 2700,
  delay: 2000,
  opacity: 1,
  // stagger:0.8,
});

gsap.to(".page7-cir-inner", {
  scrollTrigger: {
    trigger: `.page7-cir-inner`,
    start: `top center`,
    end: `bottom top`,
    scroller: `.main`,
    scrub: .5
  },
  scale: 1.5,

})

gsap.to(".page7-cir-inner", {
  scrollTrigger: {
    trigger: `.page7-cir-inner`,
    start: `bottom -200%`,
    end: `bottom -255%`,
    scroller: `.main`,
    scrub: .5
  },
  opacity: 0,
})
gsap.from(".process-heading", {
  scrollTrigger: {
    trigger: `.process-heading`,
    start: `center bottom`,
    end: `bottom center`,
    scroller: `.main`,
    scrub: .5
  },
  opacity: 0,
  y: 50,

})
gsap.from(".elem", {
  scrollTrigger: {
    trigger: `.process`,
    start: `center bottom`,
    end: `bottom bottom`,
    scroller: `.main`,
    scrub: .5
  },
  opacity: 0,
  x: -200,
  stagger: 0.2
})

gsap.from(".app-heading", {
  scrollTrigger: {
    trigger: `.app`,
    start: `top 80%`,
    end: `top 30%`,
    scroller: `.main`,
    scrub: .5
  },
  opacity: 0,
  y: 50,
})
gsap.to(".app-heading", {
  scrollTrigger: {
    trigger: `.app`,
    start: `top 45%`,
    end: `bottom 0%`,
    scroller: `.main`,
    scrub: .5
  },
  x: -1000,
})
gsap.to(".process-heading", {
  scrollTrigger: {
    trigger: `.process`,
    start: `top 40%`,
    end: `bottom 0%`,
    scroller: `.main`,
    scrub: .5
  },
  x: -1000,
})
gsap.from(".cards__wrapper,.infoList", {
  scrollTrigger: {
    trigger: `.app`,
    start: `top 40%`,
    end: `top 10%`,
    scroller: `.main`,
    scrub: 0.1,
    stagger: true,


  },
  opacity: 0,
  y: 300
})


gsap.from("#arrow-right,#arrow-left", {
  scrollTrigger: {
    trigger: `.app`,
    start: `top 30%`,
    end: `top 10%`,
    scroller: `.main`,
    scrub: 0.1

  },
  opacity: 0,
})
gsap.from(".clients-heading", {
  scrollTrigger: {
    trigger: `.our-clients`,
    start: `top 70%`,
    end: `top 40%`,
    scroller: `.main`,
    scrub: .5
  },
  opacity: 0,
  y: 50,
})
gsap.to(".clients-heading", {
  scrollTrigger: {
    trigger: `.our-clients`,
    start: `top 45%`,
    end: `top 0%`,
    scroller: `.main`,
    scrub: .5
  },
  x: -1000,
})
gsap.from(".clients-row img", {
  scrollTrigger: {
    trigger: `.our-clients`,
    start: `top 60%`,
    end: `top 50%`,
    scroller: `.main`,
    scrub: .5,
  },
  opacity: 0,
  stagger:0.1,
  y: 500,
})
gsap.from(".our-clients", {
  scrollTrigger: {
    trigger: `.clients`,
    start: `top 30%`,
    end: `top 10%`,
    scroller: `.main`,
    scrub: .5,
  },
  height:0,
})
gsap.to(".our-clients", {
  scrollTrigger: {
    trigger: `.clients`,
    start: `bottom 80%`,
    end: `bottom 70%`,
    scroller: `.main`,
    scrub: .5,
  },
  y:-500,
})

gsap.from(".contact-button", {
  scrollTrigger: {
    trigger: `.footer`,
    start: `top 70%`,
    end: `top 50%`,
    scroller: `.main`,
    scrub: 0.5,
  },
opacity:0,
// scale:0.5,
})
const handleMouseEnter = (e) => {
  if (!e.target.dataset.expand) {
    return;
  }

  navsVisited += 1;

  if (navsVisited === 1) {
    expandMenu.classList.add("new--expand");
    menus.forEach((menu) => menu.classList.add("first"));
    indicator.classList.add("first");
  } else {
    expandMenu.classList.remove("new--expand");
    menus.forEach((menu) => menu.classList.remove("first"));
    indicator.classList.remove("first");
  }

  navLinks.forEach((navLink) => {
    if (navLink === e.target) {
      navLink.classList.add("hover");
      currentNav = navLink;
    } else {
      navLink.classList.remove("hover");
    }
  });

  const navLinkCenter = Math.floor(
    e.target.offsetLeft + e.target.clientWidth / 2
  );

  indicator.style.transform = `translateX(${navLinkCenter}px)`;
  indicator.style.opacity = "1";

  const targetMenu = document.querySelector(`#${e.target.dataset.expand}`);
  const targetCoords = targetMenu.getBoundingClientRect();
  const { width: targetWidth, height: targetHeight } = targetCoords;

  expandMenu.style.width = targetWidth + "px";
  expandMenu.style.height = targetHeight + "px";

  const prevMenu = targetMenu.previousElementSibling;

  targetMenu.classList.remove("prev");

  if (prevMenu) {
    prevMenu.classList.add("prev");
  }

  menus.forEach((menu) => {
    if (menu.id === targetMenu.id) {
      menu.classList.add("active");
    } else {
      menu.classList.remove("active");
    }
  });

  expandMenu.classList.add("expand");
};

const handleMouseLeave = (e) => {
  if (isMouseOnMenu || e.y > 50) {
    return;
  }

  forceInitialState();
};

const forceInitialState = () => {
  expandMenu.classList.remove("expand", "active");
  currentNav.classList.remove("hover");
  menus.forEach((menu) => menu.removeAttribute("class"));
  indicator.style.opacity = "0";
  currentNav = null;
  navsVisited = 0;
};

const expandMenu = document.querySelector(".header__expandMenu");
const menus = expandMenu.querySelectorAll(".menu__container > *");
const navLinks = document.querySelectorAll(".nav--link");
const indicator = document.querySelector(".tip");
let isMouseOnMenu = false;
let currentNav;
let navsVisited = 0;

const {
  height: menuHeight,
  width: menuWidth,
} = expandMenu.getBoundingClientRect();

navLinks.forEach((navLink) => {
  navLink.addEventListener("mouseenter", handleMouseEnter);
});

expandMenu.addEventListener("mouseenter", () => {
  if (expandMenu.style.opacity === "1") {
    isMouseOnMenu = true;
  }
});

expandMenu.addEventListener("mouseleave", (e) => {
  if (e.y > 70) {
    isMouseOnMenu = false;
    forceInitialState();
  }
});

document
  .querySelector(".nav__links")
  .addEventListener("mouseleave", handleMouseLeave);

// text mouse hover effect
// text mouse hover effect
const tiltEffectSettings = {
  max: 12, // max tilt rotation (degrees (deg))
  perspective: 1500, // transform perspective, the lower the more extreme the tilt gets (pixels (px))
  scale: 1, // transform scale - 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // speed (transition-duration) of the enter/exit transition (milliseconds (ms))
  easing: "cubic-bezier(.03,.98,.52,.99)" // easing (transition-timing-function) of the enter/exit transition
};

const cards = document.querySelectorAll(".panel");

cards.forEach(card => {
  card.addEventListener("mouseenter", cardMouseEnter);
  card.addEventListener("mousemove", cardMouseMove);
  card.addEventListener("mouseleave", cardMouseLeave);
});

function cardMouseEnter(event) {
  setTransition(event);
}

function cardMouseMove(event) {
  const card = event.currentTarget;
  const cardWidth = card.offsetWidth;
  const cardHeight = card.offsetHeight;
  const centerX = card.offsetLeft + cardWidth / 2;
  const centerY = card.offsetTop + cardHeight / 2;
  const mouseX = event.clientX - centerX;
  const mouseY = event.clientY - centerY;
  const rotateXUncapped = (-1) * tiltEffectSettings.max * mouseY / (cardHeight / 2);
  const rotateYUncapped = (+1) * tiltEffectSettings.max * mouseX / (cardWidth / 2);
  const rotateX = rotateXUncapped < -tiltEffectSettings.max ? -tiltEffectSettings.max :
    (rotateXUncapped > tiltEffectSettings.max ? tiltEffectSettings.max : rotateXUncapped);
  const rotateY = rotateYUncapped < -tiltEffectSettings.max ? -tiltEffectSettings.max :
    (rotateYUncapped > tiltEffectSettings.max ? tiltEffectSettings.max : rotateYUncapped);
  const translateZ = 80; // Adjust this value as needed

  card.style.transform = `perspective(${tiltEffectSettings.perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) 
                            translateZ(${translateZ}px) scale3d(${tiltEffectSettings.scale}, ${tiltEffectSettings.scale}, ${tiltEffectSettings.scale})`;
}

function cardMouseLeave(event) {
  event.currentTarget.style.transform = `perspective(${tiltEffectSettings.perspective}px) rotateX(0deg) rotateY(0deg) translateZ(0) scale3d(1, 1, 1)`;
  setTransition(event);
}

function setTransition(event) {
  const card = event.currentTarget;
  clearTimeout(card.transitionTimeoutId);
  card.style.transition = `transform ${tiltEffectSettings.speed}ms ${tiltEffectSettings.easing}`;
  card.transitionTimeoutId = setTimeout(() => {
    card.style.transition = "";
  }, tiltEffectSettings.speed);
}


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

var elem = document.querySelectorAll(".elem");
elem.forEach(function (val) {
  console.log(val.childNodes)

  val.addEventListener("mouseenter", function () {
    val.childNodes[3].style.opacity = 1
    val.childNodes[1].style.color = "#fde9ba"


  });
  val.addEventListener("mouseleave", function () {
    val.childNodes[3].style.opacity = 0

    val.childNodes[1].style.transition = "color 0.5s ease";
    val.childNodes[1].style.color = "transparent";
  });
  val.addEventListener("mousemove", function (dets) {
    val.childNodes[3].style.left = dets.x + "px"
    // val.childNodes[3].style.top= dets.y+"px"

  });
});

// console.clear();


const buttons = {
  prev: document.querySelector(".btn--left"),
  next: document.querySelector(".btn--right"),
};
const cardsContainerEl = document.querySelector(".cards__wrapper");
const cardInfosContainerEl = document.querySelector(".info__wrapper");

buttons.next.addEventListener("click", () => swapCards("right"));
buttons.prev.addEventListener("click", () => swapCards("left"));

function swapCards(direction) {
  const currentCardEl = cardsContainerEl.querySelector(".current--card");
  const previousCardEl = cardsContainerEl.querySelector(".previous--card");
  const nextCardEl = cardsContainerEl.querySelector(".next--card");

  changeInfo(direction);
  swapCardsClass();

  removeCardEvents(currentCardEl);

  function swapCardsClass() {
    currentCardEl.classList.remove("current--card");
    previousCardEl.classList.remove("previous--card");
    nextCardEl.classList.remove("next--card");

    currentCardEl.style.zIndex = "0";

    if (direction === "right") {
      previousCardEl.style.zIndex = "20";
      nextCardEl.style.zIndex = "30";

      currentCardEl.classList.add("previous--card");
      previousCardEl.classList.add("next--card");
      nextCardEl.classList.add("current--card");
    } else if (direction === "left") {
      previousCardEl.style.zIndex = "30";
      nextCardEl.style.zIndex = "20";

      currentCardEl.classList.add("next--card");
      previousCardEl.classList.add("current--card");
      nextCardEl.classList.add("previous--card");
    }
  }
}

function changeInfo(direction) {
  let currentInfoEl = cardInfosContainerEl.querySelector(".current--info");
  let previousInfoEl = cardInfosContainerEl.querySelector(".previous--info");
  let nextInfoEl = cardInfosContainerEl.querySelector(".next--info");

  gsap.timeline()
    .to([buttons.prev, buttons.next], {
      duration: 0.2,
      opacity: 0.5,
      pointerEvents: "none",
    })
    .to(
      currentInfoEl.querySelectorAll(".text"),
      {
        duration: 0.4,
        stagger: 0.1,
        translateY: "-120px",
        opacity: 0,
      },
      "-="
    )
    .call(() => {
      swapInfosClass(direction);
    })
    .call(() => initCardEvents())
    .fromTo(
      direction === "right"
        ? nextInfoEl.querySelectorAll(".text")
        : previousInfoEl.querySelectorAll(".text"),
      {
        opacity: 0,
        translateY: "40px",
      },
      {
        duration: 0.4,
        stagger: 0.1,
        translateY: "0px",
        opacity: 1,
      }
    )
    .to([buttons.prev, buttons.next], {
      duration: 0.2,
      opacity: 1,
      pointerEvents: "all",
    });

  function swapInfosClass() {
    currentInfoEl.classList.remove("current--info");
    previousInfoEl.classList.remove("previous--info");
    nextInfoEl.classList.remove("next--info");

    if (direction === "right") {
      currentInfoEl.classList.add("previous--info");
      nextInfoEl.classList.add("current--info");
      previousInfoEl.classList.add("next--info");
    } else if (direction === "left") {
      currentInfoEl.classList.add("next--info");
      nextInfoEl.classList.add("previous--info");
      previousInfoEl.classList.add("current--info");
    }
  }
}

function updateCard(e) {
  const card = e.currentTarget;
  const box = card.getBoundingClientRect();
  const centerPosition = {
    x: box.left + box.width / 2,
    y: box.top + box.height / 2,
  };
  let angle = Math.atan2(e.pageX - centerPosition.x, 0) * (35 / Math.PI);
  gsap.set(card, {
    "--current-card-rotation-offset": `${angle}deg`,
  });
  const currentInfoEl = cardInfosContainerEl.querySelector(".current--info");
  gsap.set(currentInfoEl, {
    rotateY: `${angle}deg`,
  });
}

function resetCardTransforms(e) {
  const card = e.currentTarget;
  const currentInfoEl = cardInfosContainerEl.querySelector(".current--info");
  gsap.set(card, {
    "--current-card-rotation-offset": 0,
  });
  gsap.set(currentInfoEl, {
    rotateY: 0,
  });
}

function initCardEvents() {
  const currentCardEl = cardsContainerEl.querySelector(".current--card");
  currentCardEl.addEventListener("pointermove", updateCard);
  currentCardEl.addEventListener("pointerout", (e) => {
    resetCardTransforms(e);
  });
}

initCardEvents();

function removeCardEvents(card) {
  card.removeEventListener("pointermove", updateCard);
}

function init() {
  let tl = gsap.timeline();

  tl.to(cardsContainerEl.children, {
    delay: 0.15,
    duration: 0.5,
    stagger: {
      ease: "power4.inOut",
      from: "right",
      amount: 0.1,
    },
    "--card-translateY-offset": "0%",
  }).to(
    cardInfosContainerEl.querySelector(".current--info").querySelectorAll(".text"),
    {
      delay: 0.5,
      duration: 0.4,
      stagger: 0.1,
      opacity: 1,
      translateY: 0,
    }
  ).to(
    [buttons.prev, buttons.next],
    {
      duration: 0.4,
      opacity: 1,
      pointerEvents: "all",
    },
    "-=0.4"
  );
}

// Call the init function to start the animation
init();




