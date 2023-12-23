# Frontend Mentor - Testimonials grid section solution

This is a solution to the [Testimonials grid section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/testimonials-grid-section-Nnw6J7Un7). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

- View the optimal layout for the page depending on their device's screen size

### Screenshot

![](./screenshots/Desktop_solution.png)
![](./screenshots/Mobile_solution.png)

### Links

- Solution URL: (https://www.frontendmentor.io/solutions/responsive-testimonial-grid-with-gridcolumngridrow-bYTXimQeP)
- Live Site URL: (https://lm-testimonials-grid.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS Grid
- CSS custom properties/vars
- Desktop-first workflow

### What I learned

I learnt about the grid-column/grid-row cleaner value syntax. Instead of doing something like

```css
#purple-card {
  grid-column: 1 / 3;
}
```

Which can be a bit unclear, as I want it to span 2 columns, so where is the 3 coming from some might think. So instead I went and learn the more intuitive syntax:

```css
#purple-card {
  grid-column: span 2;
}
```

## Author

- Website - [Leon Michalak](https://www.leonmichalak.tech)
- Frontend Mentor - [@NinjaInShade](https://www.frontendmentor.io/profile/NinjaInShade)
- Instagram - [@lmdeveloper](https://www.instagram.com/TheFrontendGuy/)
