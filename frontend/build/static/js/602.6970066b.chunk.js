"use strict";(self.webpackChunkit_center_bandixon=self.webpackChunkit_center_bandixon||[]).push([[602],{1108:function(a,e,n){n.d(e,{Z:function(){return l}});var i=n(577),t=n(4569).create({baseURL:{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REMOTE_SERVER_API}),l=function(a,e,n,l){a.preventDefault();var o=a.target[0].value,s=a.target[1].value.replace(/\(/g,"").replace(/\)/g,"").replace(/-/g,"").replace(/ /g,""),d=a.target[2].value,r="Ismi: ".concat(o,"\nTelefon raqami: ").concat(s,"\nKurs: ").concat(d||"Qiziqish");l&&t.post("/api/sendMessage",{message:r}).then((function(a){var e=a.data;i.Am.success(e,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})})).catch((function(a){i.Am.error("".concat(a?a.response.data:"Xato! Serverda xatolik, iltimos keyinroq boshqatdan urunib ko'ring!"),{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})})).finally((function(){e&&e(),n&&n()}))}},9602:function(a,e,n){n.r(e);var i=n(8152),t=n(2791),l=n(1108),o=n(2943),s=n.n(o),d=n(184);e.default=function(a){var e=a.activeContact,n=(0,t.useState)("+998 "),o=(0,i.Z)(n,2),r=o[0],u=o[1],c=(0,t.useState)(""),v=(0,i.Z)(c,2),g=v[0],m=v[1],f=(0,t.useState)({valid:!1,value:"",sendValid:""}),h=(0,i.Z)(f,2),p=h[0],x=h[1],b=(0,t.useState)({valid:!1,value:"",sendValid:""}),y=(0,i.Z)(b,2),C=y[0],V=y[1],z=function(a){"numberInput"===a.target.name?(u(a.target.value),I(a)):"nameInput"===a.target.name&&(m(a.target.value),S(a))},j=function(){u("+998 "),m(""),x({valid:!1,value:"",sendValid:""}),V({valid:!1,value:"",sendValid:""})},S=function(a){var e=a.target.value,n=a.target.style;if(/\d/gi.test(e))x({valid:!0,value:"Son yozmay ism yozing!",sendValid:!1}),n.outline="2px solid red";else if(0===e.length)x({valid:!0,value:"Ismingizni yozing!",sendValid:!1}),n.outline="2px solid red";else if(/\w/gi.test(e)){var i=e.match(/\w/gi),t=i[0],l=0;i.forEach((function(a){t.toLowerCase()===a.toLowerCase()&&l++})),i.length===l||e.length<3?(x({valid:!0,value:"Iltimos ismingizni yozing!",sendValid:!1}),n.outline="2px solid red"):(x({valid:!1,value:"",sendValid:!0}),n.outline="none")}},I=function(a){var e=a.target.value,n=a.target.style;19!==e.length?(V({valid:!0,value:"Raqamni to'liq yozing!",sendValid:!1}),n.outline="2px solid red"):(V({valid:!1,value:"",sendValid:!0}),n.outline="none")};return(0,d.jsxs)("section",{className:"contact container ".concat(e?"contact-click-style":""),children:[(0,d.jsx)("h2",{"data-aos":"fade-right","data-aos-duration":"600","data-aos-once":"true",children:"Aloqa"}),(0,d.jsxs)("div",{className:"form","data-aos":"zoom-in-down","data-aos-duration":"800","data-aos-once":"true",children:[(0,d.jsxs)("div",{className:"form-text","data-aos":"fade-right","data-aos-duration":"600","data-aos-delay":"450","data-aos-once":"true",children:[(0,d.jsx)("h2",{children:"Quyidagi formani to\u2019ldiring va biz siz bilan bog\u2019lanamiz"}),(0,d.jsx)("p",{children:"Bizda o\u2019qib zamonaviy kasblarni o\u2019rganing va ilk millionlaringizni ishlashni boshlang."})]}),(0,d.jsx)("div",{className:"form-box","data-aos":"fade-left","data-aos-duration":"600","data-aos-delay":"450","data-aos-once":"true",children:(0,d.jsxs)("form",{onSubmit:function(a){return(0,l.Z)(a,null,j,p.sendValid&&C.sendValid)},children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("label",{htmlFor:"nameInputC",children:(0,d.jsx)("input",{type:"text",name:"nameInput",placeholder:"Ism va familyangiz",autoComplete:"off",value:g,onChange:z,id:"nameInputC",onBlur:S})}),p.valid?(0,d.jsx)("span",{children:p.value}):""]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("label",{htmlFor:"numberInputC",children:(0,d.jsx)(s(),{options:{blocks:[4,0,2,0,3,2,2],delimiters:[" ","(",")"," ","-"],numericOnly:!0,prefix:"+998"},value:r,onChange:z,name:"numberInput",autoComplete:"off",type:"tel",id:"numberInputC",onBlur:I})}),C.valid?(0,d.jsx)("span",{children:C.value}):""]}),(0,d.jsx)("div",{children:(0,d.jsx)("button",{onClick:function(a){var e=a.target.form[0],n=a.target.form[1],i=a.target.form[2];p.sendValid?e.style.outline="none":(e.style.outline="2px solid red",x({valid:!0,value:"Ismingizni yozing!",sendValid:!1})),C.sendValid?n.style.outline="none":(n.style.outline="2px solid red",V({valid:!0,value:"Raqamni to'liq yozing!",sendValid:!1})),p.sendValid?C.sendValid?i.focus():n.focus():e.focus()},type:"submit",children:"Yuborish"})})]})})]})]})}}}]);
//# sourceMappingURL=602.6970066b.chunk.js.map