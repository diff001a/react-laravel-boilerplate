function rippleEffect(e) {
  let diameter;
  let target = e.target;
  let ink = target.querySelector(".ink");
  if (!target.classList.contains("md-btn")) {
    target = e.target.parentNode;
  }
  if (!ink) {
    ink = document.createElement("i");
    ink.classList.add("ink");
    diameter = Math.max(target.clientWidth, target.clientHeight);
    ink.style.width = `${diameter}px`;
    ink.style.height = `${diameter}px`;
    [
      "animationend",
      "webkitAnimationEnd",
      "oAnimationEnd",
      "MSAnimationEnd",
    ].forEach((eventName) => {
      ink.addEventListener(eventName, () => {
        ink.parentNode.removeChild(ink);
      });
    });
    target.insertBefore(ink, target.firstChild);
  } else {
    diameter = ink.clientWidth;
  }
  const clickX = e.pageX;
  const clickY = e.pageY;
  // target's X & Y //
  const clientRect = target.getBoundingClientRect();
  const positionX = clientRect.left + window.pageXOffset;
  const positionY = clientRect.top + window.pageYOffset;
  // get target's offset //
  const x = clickX - positionX;
  const y = clickY - positionY;
  ink.style.top = `${y - diameter / 2}px`;
  ink.style.left = `${x - diameter / 2}px`;
  ink.classList.remove("is-animating");
  ink.width = `${ink.clientWidth}px`;
  ink.classList.add("is-animating");
}

export default rippleEffect;
