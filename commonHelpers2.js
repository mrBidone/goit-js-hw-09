import"./assets/styles-926b0825.js";const t=document.querySelector(".feedback-form"),a={email:"",message:""};t.addEventListener("input",()=>{const e=t.elements.email.value,s=t.elements.message.value;a.email=e.trim(),a.message=s.trim(),l("feedback-form-state",a)});function l(e,s){const m=JSON.stringify(s);localStorage.setItem(e,m)}function n(e){const s=localStorage.getItem(e);try{return JSON.parse(s)}catch{return s}}window.addEventListener("DOMContentLoaded",()=>{const e=n("feedback-form-state");t.elements.email.value=(e==null?void 0:e.email)||"",t.elements.message.value=(e==null?void 0:e.message)||""});t.addEventListener("submit",e=>{e.preventDefault();const s=t.elements.email.value,m=t.elements.message.value;if(a.email=s.trim(),a.message=m.trim(),!a.email||!a.message){alert("Fill please all fields");return}console.log(a),localStorage.removeItem("feedback-form-state"),t.reset()});
//# sourceMappingURL=commonHelpers2.js.map
