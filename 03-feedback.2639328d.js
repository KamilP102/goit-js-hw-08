function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},n=t.parcelRequired7c6;null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){o[e]=t},t.parcelRequired7c6=n);var l=n("kEUo3");const a=document.querySelector("input"),i=document.querySelector("textarea[name=message]"),u=document.querySelector("button[type=submit"),d=document.querySelector(".feedback-form"),c={email:"",message:""};d.addEventListener("input",e(l).throttle((()=>{c.email=a.value,c.message=i.value,localStorage.setItem("feedback-form-state",JSON.stringify(c))}),500)),u.addEventListener("click",(e=>{e.preventDefault(),console.log(c),localStorage.clear(),d.reset(),i.innerHTML=""}));
//# sourceMappingURL=03-feedback.2639328d.js.map