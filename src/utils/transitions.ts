/**
 * Transitions utility for managing animations and transitions
 * Provides a consistent interface for animations
 */

export interface TransitionOptions {
  duration?: number;
  delay?: number;
  easing?: string;
  css?: (t: number, u: number) => string;
  tick?: (t: number, u: number) => void;
}

/**
 * Fade transition
 * @param node - The DOM node to animate
 * @param options - Transition options
 */
export function fade(node: Element, options: TransitionOptions = {}): any {
  const {
    delay = 0,
    duration = 400,
    easing = 'cubic-bezier(0.4, 0, 0.2, 1)'
  } = options;
  
  return {
    delay,
    duration,
    easing,
    css: (t: number) => `opacity: ${t}`
  };
}

/**
 * Slide transition
 * @param node - The DOM node to animate
 * @param options - Transition options
 */
export function slide(node: Element, options: TransitionOptions = {}): any {
  const {
    delay = 0,
    duration = 400,
    easing = 'cubic-bezier(0.4, 0, 0.2, 1)'
  } = options;
  
  const style = getComputedStyle(node);
  const height = parseFloat(style.height);
  const paddingTop = parseFloat(style.paddingTop);
  const paddingBottom = parseFloat(style.paddingBottom);
  const marginTop = parseFloat(style.marginTop);
  const marginBottom = parseFloat(style.marginBottom);
  const borderTopWidth = parseFloat(style.borderTopWidth);
  const borderBottomWidth = parseFloat(style.borderBottomWidth);
  
  return {
    delay,
    duration,
    easing,
    css: (t: number) => `
      overflow: hidden;
      height: ${t * height}px;
      padding-top: ${t * paddingTop}px;
      padding-bottom: ${t * paddingBottom}px;
      margin-top: ${t * marginTop}px;
      margin-bottom: ${t * marginBottom}px;
      border-top-width: ${t * borderTopWidth}px;
      border-bottom-width: ${t * borderBottomWidth}px;
    `
  };
}

/**
 * Scale transition
 * @param node - The DOM node to animate
 * @param options - Transition options
 */
export function scale(node: Element, options: TransitionOptions = {}): any {
  const {
    delay = 0,
    duration = 400,
    easing = 'cubic-bezier(0.4, 0, 0.2, 1)',
    start = 0,
    opacity = 0
  } = options as TransitionOptions & { start?: number, opacity?: number };
  
  return {
    delay,
    duration,
    easing,
    css: (t: number) => `
      transform: scale(${start + t * (1 - start)});
      opacity: ${opacity + t * (1 - opacity)};
    `
  };
}

/**
 * Fly transition
 * @param node - The DOM node to animate
 * @param options - Transition options
 */
export function fly(node: Element, options: TransitionOptions = {}): any {
  const {
    delay = 0,
    duration = 400,
    easing = 'cubic-bezier(0.4, 0, 0.2, 1)',
    x = 0,
    y = 0,
    opacity = 0
  } = options as TransitionOptions & { x?: number, y?: number, opacity?: number };
  
  const style = getComputedStyle(node);
  const targetOpacity = +style.opacity;
  const transform = style.transform === 'none' ? '' : style.transform;
  
  return {
    delay,
    duration,
    easing,
    css: (t: number, u: number) => `
      transform: ${transform} translate(${(1 - t) * x}px, ${(1 - t) * y}px);
      opacity: ${targetOpacity * t + opacity * u};
    `
  };
}
