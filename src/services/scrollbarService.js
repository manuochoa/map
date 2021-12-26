export function getScrollbarWidth() {
    return window.innerWidth - document.body.clientWidth;
}

export function checkForScrollbar(element) {
    if (!element) return;
    console.log(element.scrollHeight, element.clientHeight);
    return element.scrollHeight > element.clientHeight;
}