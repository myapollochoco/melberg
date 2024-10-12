const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {

    if (entry.isIntersecting) {
      entry.target.classList.add('loadup');
	  return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    // entry.target.classList.remove('loadup');
  });
});

// Get multiple elements instead of a single one using "querySelectorAll"
const squares = document.querySelectorAll('.loadup-target');

// Loop over the elements and add each one to the observer
squares.forEach((element) => observer.observe(element));




// const observer = new IntersectionObserver(entries => {
//   // Loop over the entries
//   entries.forEach(entry => {
//     // If the element is visible
//     if (entry.isIntersecting) {
//       // Add the animation class
//       entry.target.classList.add('loadup');
//     }
//   });
// });

// observer.observe(document.querySelector('.loadup-target'));



const balletobserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {

    if (entry.isIntersecting) {
      entry.target.classList.add('loadballet');
	  return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    // entry.target.classList.remove('loadup');
  });
});

// Get multiple elements instead of a single one using "querySelectorAll"
const ballet = document.querySelectorAll('.loadballet-target');

// Loop over the elements and add each one to the observer
ballet.forEach((element) => balletobserver.observe(element));


// smooth scroll
const scroller = new LocomotiveScroll({
  el: document.querySelector(".containerbody"),
  smooth: true
});

scroller.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".containerbody", {
  scrollTop(value) {
    return arguments.length
      ? scroller.scrollTo(value, 0, 0)
      : scroller.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      left: 0,
      top: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }
});

ScrollTrigger.addEventListener("refresh", () => scroller.update());

ScrollTrigger.refresh();