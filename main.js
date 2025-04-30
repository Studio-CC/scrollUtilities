import { ScrollHandler } from './ScrollModules/ScrollHandler';


//


"use strict";


//


// Global Aliases

const d = document;
const de = d.documentElement;
const w = window;
const b = d.body;


//


const isProduction = b.getAttribute('data-production') == 'true' ? true : false;


//


// Handheld Detection

function isHandheld() {
   return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

b.setAttribute('data-mobile', isHandheld());


//


// Get Mouse Position ( mouse.x / mouse.y )

let mouse = { x: 0, y: 0 };

d.addEventListener('mousemove', (e) => {

   mouse.x = e.clientX;
   mouse.y = e.clientY;

})


//


let scrollHandler;


//


const contentContainer = d.getElementById('content')

// Set global duration and assign to css var to synchronise

const transitionDuration = 500;
const scrollTriggerDuration = 1500;

de.style.setProperty('--global', transitionDuration + 'ms')
de.style.setProperty('--st', scrollTriggerDuration + 'ms')



//


w.addEventListener('DOMContentLoaded', () => {


   // DOM Ready


   function initScrollHandler() {


      const scrollHandlerSettings = {

         scrollBreakpoint: 1280,

         wheelMultiplier: 0.5,
         duration: 1.2,
         lerp: 0.066,

         scrollTriggerDuration: scrollTriggerDuration,
         contentContainer: contentContainer,

      } // scrollHandlerSettings


      scrollHandler = ScrollHandler(scrollHandlerSettings)


      //


      scrollHandler.onScroll((s) => {

         console.log('(Smooth) Scroll position:' + s);

      })


   } // initScrollHandler()   


   //


   w.addEventListener('load', () => {


      // All Resources Loaded


      initScrollHandler()


      //


   }) // window.load


}) // DOM Ready
