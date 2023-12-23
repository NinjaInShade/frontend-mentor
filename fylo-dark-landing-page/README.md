# Frontend Mentor - Fylo dark theme landing page solution

This is a solution to the [Fylo dark theme landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/fylo-dark-theme-landing-page-5ca5f2d21e82137ec91a50fd). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./screenshots/Desktop_solution.png)
![](./screenshots/Mobile_solution.png)

### Links

- Solution URL: (https://www.frontendmentor.io/solutions/responsive-dark-themed-landing-page-Y1P_lXkB_)
- Live Site URL: (https://lm-fylo-dark-landing-page.netlify.app/)

## My process

### Built with

- CSS Grid
- Semantic HTML5 markup
- CSS custom properties/vars
- Desktop-first workflow

### What I learned/practiced

I practiced using grid to make fluid, wrapping layouts. I used this:

```css
.testimonials-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 40px;
}
```

The auto-fit and minmax values are great for making responsive grid layouts, and require minimal work and basically no media queries, works pretty much out the box!

## Author

- Website - [Leon Michalak](https://www.leonmichalak.dev)
- Frontend Mentor - [@NinjaInShade](https://www.frontendmentor.io/profile/NinjaInShade)
- Instagram - [@TheFrontendGuy](https://www.instagram.com/thefrontendguy/)
