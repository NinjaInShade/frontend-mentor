# Frontend Mentor - Coding bootcamp testimonials slider solution

This is a solution to the [Coding bootcamp testimonials slider challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/coding-bootcamp-testimonials-slider-4FNyLA8JL). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- Navigate the slider using either their mouse/trackpad or keyboard

### Screenshot

![](./screenshots/Desktop_solution.png)
![](./screenshots/Desktop_active_solution.png)
![](./screenshots/Mobile_solution.png)

### Links

- Solution URL: (https://www.frontendmentor.io/solutions/responsive-testimonial-slider-with-focus-states-and-animation-KgsYTWUtw)
- Live Site URL: (https://lm-bootcamp-testimonials.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties/vars
- Desktop-first workflow

### What I learned

I really utilised negative margins for overlapping stuff in this project. I only realised their value not long ago, and am loving how useful they are! I also had to use a fair bit of relative/absolute positioning which helped me practice that.

I learned how to make a slider too. I learnt how to enable use of keyboard arrow keys to focus and select elements in the HTML using the focus() method. I managed to do all the javascript without any help.

I had a global array with all every slide's data like texts, img and img alt in objects and a global variable which tracked the array index we would display. If previous button was clicked, we'd decrease this variable, and vice versa for next button.

I had to make sure if array index was going to be smaller than the index's we had available in the array, we would loop back to the start/end of the array (prevent out of bounds error).

Lastly, I added fadeIn animations for when the slide is changed. I just set up a simple Keyframes animation and set it on on each of the elements (text elements and img) but only when they were inside a .animate class. I then setup this class to be toggled with javascript on the body, so it forces the animations to happen again.

## Author

- Website - [Leon Michalak](https://www.leonmichalak.tech)
- Frontend Mentor - [@NinjaInShade](https://www.frontendmentor.io/profile/NinjaInShade)
- Instagram - [@lmdeveloper](https://www.instagram.com/lmdeveloper/)
