import { ReactNode } from 'react';

interface AnimationObject {
  rotate?: number;
  x?: string | number;
  y?: string | number;
  opacity: number;
}

/**
 * Creates an array with intial node styles and animated node styles
 * @param child ReactNode
 * @returns Array<AnimationObject>
 */
export function createHomeMenuAnimation(
  child: ReactNode
): [AnimationObject, AnimationObject, number] {
  let initial: AnimationObject;
  let animate: AnimationObject;
  let delay: number;

  switch (child) {
    case `About`:
      initial = { rotate: 0, x: `100%`, opacity: 0 };
      animate = { rotate: 90, x: 0, opacity: 1 };
      delay = 0.5;
      break;
    case `Blog`:
      initial = { y: 0, opacity: 0 };
      animate = { y: `50px`, opacity: 1 };
      delay = 0.8;
      break;
    case `Contact`:
      initial = { opacity: 0, rotate: 0, x: `-100%` };
      animate = { rotate: -90, x: 0, opacity: 1 };
      delay = 1;
      break;

    default:
      break;
  }

  return [initial, animate, delay];
}
