function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},n=t.parcelRequired7c6;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequired7c6=n);var a=n("kEUo3");const l=document.querySelector("input"),i=document.querySelector("textarea[name=message]"),s=document.querySelector("button[type=submit"),u=document.querySelector(".feedback-form");(()=>{const e=JSON.parse(localStorage.getItem("feedback-form-state"))||"";l.value=e.email||"",i.textContent=e.message})();const c={email:"",message:""};u.addEventListener("input",e(a).throttle((()=>{c.email=l.value,c.message=i.value,localStorage.setItem("feedback-form-state",JSON.stringify(c))}),500)),s.addEventListener("click",(e=>{e.preventDefault(),console.log(c),localStorage.clear(),u.reset(),i.innerHTML=""}));
//# sourceMappingURL=03-feedback.4fd07704.js.map