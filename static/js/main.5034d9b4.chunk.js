(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){},21:function(e,t,a){e.exports=a(35)},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(18),r=a.n(l),s=(a(26),a(7)),m=a(20);a(27);var i=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],l=t[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"navBar"},c.a.createElement("button",{onClick:function(){l(!a)}},c.a.createElement(m.a,null)),c.a.createElement("ul",{className:a?"links show-nav":"links"},c.a.createElement("li",{className:"heading"},"Streaming Site"),c.a.createElement("li",null,"Login"),c.a.createElement("li",null,"Start Free Trial"))))};a(28);var o=function(e){var t=e.title;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"header"},c.a.createElement("ul",{className:"header-ul"},c.a.createElement("li",null,t))))};a(29);var u=function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"type-card"},c.a.createElement("div",{className:"type-card-image"},c.a.createElement("img",{alt:"",src:"".concat(e.image)})),c.a.createElement("div",{className:"type-card-title"},e.type)))};a(16);var E=function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"content"},e.content.length>0?e.content.map(function(e){return c.a.createElement(u,{key:e.title,type:e.title,image:e.images.poster.url})}):c.a.createElement("p",null,"Loading......")))};a(30);var p=function(){return c.a.createElement("div",{className:"footer"},c.a.createElement("ul",{className:"list"},c.a.createElement("a",{href:"/",className:"tag"},"Home"),c.a.createElement("a",{href:"/",className:"tag"},"Terms and Conditions"),c.a.createElement("a",{href:"/",className:"tag"},"Privacy Policy"),c.a.createElement("a",{href:"/",className:"tag"},"Collection Statement"),c.a.createElement("a",{href:"/",className:"tag"},"Help"),c.a.createElement("a",{href:"/",className:"tag"},"Manage Account")),c.a.createElement("p",{className:"para"},"Copyright \xa9 201",c.a.createElement("span",{style:{fontWeight:"lighter",fontSize:"23px"}},"6")," DEMO Streaming. All Rights Reserved."),c.a.createElement("div",{className:"links-1"},c.a.createElement("div",{className:"icon"}),c.a.createElement("div",{className:"img"},c.a.createElement("img",{alt:"",className:"image",src:"".concat("/React-UI","/assets/microsoft.png")}),c.a.createElement("img",{alt:"",className:"image",src:"".concat("/React-UI","/assets/appStore.png")}),c.a.createElement("img",{alt:"",className:"image",src:"".concat("/React-UI","/assets/googleP.png")}))))};var g=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],l=t[1];Object(n.useEffect)(function(){fetch("".concat("/React-UI","/assets/sample.json"),{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then(function(e){return e.json()}).then(function(e){l(e)})},[]);var r=a.entries,m=Object.values(r).filter(function(e){return e.releaseYear>=2010&&e.programType.includes("movie")});return c.a.createElement(c.a.Fragment,null,c.a.createElement(i,null),c.a.createElement(o,{title:"Popular Movies"}),c.a.createElement(E,{content:m}),c.a.createElement(p,null))};var f=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],l=t[1];Object(n.useEffect)(function(){fetch("".concat("/React-UI","/assets/sample.json"),{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then(function(e){return e.json()}).then(function(e){l(e)})},[]);var r=a.entries,m=Object.values(r).filter(function(e){return e.releaseYear>=2010&&e.programType.includes("series")});return c.a.createElement(c.a.Fragment,null,c.a.createElement(i,null),c.a.createElement(o,{title:"Popular Web Shows"}),c.a.createElement(E,{content:m}),c.a.createElement(p,null))},v=a(9);var d=function(){var e=[{type:"Movies",image:"".concat("/React-UI","/assets/473096.png"),url:"/movies"},{type:"Series",image:"".concat("/React-UI","/assets/525661.png"),url:"/series"}];return c.a.createElement(c.a.Fragment,null,c.a.createElement(i,null),c.a.createElement(o,{title:"Popular Shows"}),c.a.createElement("div",{className:"content"},e.length>0?e.map(function(e){return c.a.createElement(v.b,{style:{textDecoration:"none",color:"black"},to:e.url},c.a.createElement(u,{key:e.type,type:e.type,image:e.image}))}):c.a.createElement("p",null,"Loading.....")),c.a.createElement(p,null))},h=a(1);var N=function(){return c.a.createElement(v.a,null,c.a.createElement(h.c,null,c.a.createElement(h.a,{exact:!0,path:"/React-UI",component:d}),c.a.createElement(h.a,{exact:!0,path:"/series",component:f}),c.a.createElement(h.a,{exact:!0,path:"/movies",component:g})))};r.a.render(c.a.createElement(N,null),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.5034d9b4.chunk.js.map