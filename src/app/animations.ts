import { animate, animation, style } from '@angular/animations';

export const fadeAnimation = animation([
  style({
    opacity: 0
  }),
  animate('800ms 300ms ease-in-out', style({
    opacity: 1
  }))
]);

export const slideAnimation = animation([
  style({
    opacity: 0,
    transform: 'translate3d(-100%,0,0)'
  }),
  animate('800ms 300ms ease-in-out', style({
    opacity: 1,
    transform: 'translate3d(0%,0,0)'
  }))
]);


export const rotateAnimation = animation([
  style({
    transform: 'rotate(0deg)'
  }),
  animate('800ms 300ms ease-in-out', style({
    transform: 'rotate(360deg)'
  }))
]);


