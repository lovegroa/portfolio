// This is the main function where which pass two ref parameters of Parent element & Child element
export const scrollIntoView = (parent: HTMLElement, child: HTMLElement) => {
  const parentBounding = parent.getBoundingClientRect(),
    clientBounding = child.getBoundingClientRect();

  const parentRight = parentBounding.right,
    parentLeft = parentBounding.left,
    clientRight = clientBounding.right,
    clientLeft = clientBounding.left;

  if (parentLeft >= clientLeft) {
    scrollTo(parent, -(parentLeft - clientLeft), 300);
  } else if (clientRight > parentRight) {
    scrollTo(parent, clientRight - parentRight, 300);
  }
};
function scrollTo(element: HTMLElement, to: number, duration: number) {
  const start = element.scrollLeft;
  let currentTime = 0;
  const increment = 20;

  const animateScroll = function () {
    currentTime += increment;

    const val = easeInOutQuad(currentTime, start, to, duration);
    element.scrollLeft = val;

    if (currentTime < duration) {
      setTimeout(animateScroll, increment);
    }
  };

  animateScroll();
}
// Function for smooth scroll animation with the time duration
function easeInOutQuad(
  time: number,
  startPos: number,
  endPos: number,
  duration: number
) {
  time /= duration / 2;

  if (time < 1) return (endPos / 2) * time * time + startPos;
  time--;
  return (-endPos / 2) * (time * (time - 2) - 1) + startPos;
}
