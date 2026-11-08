// Runs before the page paints, so it never flashes. Light is the default; dark only when the visitor chose it.
export const THEME_SCRIPT = `(function(){var t="light";try{if(localStorage.getItem("theme")==="dark")t="dark"}catch(e){}document.documentElement.dataset.theme=t})()`;
