import"./vendor/@babel-203dcb8e.js";import{g as l,h as e,a as n,i as o,j as t,b as a,k as i,l as r}from"./vendor/react-934bbff1.js";import"./vendor/object-assign-36fe2d91.js";import{j as s,c as u}from"./vendor/@emotion-c323cb07.js";import"./vendor/scheduler-2ece1935.js";import{r as p}from"./vendor/react-dom-883c1331.js";import{f as c}from"./vendor/date-fns-74a2601a.js";function m(l){return n("h2",null,"Now is ",c(l.date,"HH:mm:ss O"),".")}const d=o(()=>import("./Toggle-12f07718.js")),b=t(l=>s(a,null,s("h1",null,"Hello, ",l.name,"!"),s("h2",null,"This is a lab page"))),v=u({backgroundColor:"grey",boxSizing:"initial"});p(s(r,null,s(b,{name:"JSX"}),s("p",{css:v},"Hyperion 796"),s((function(){const[o,t]=l(new Date);return e(()=>{console.log("useEffect callback called!");const l=window.setInterval(()=>t(new Date),1e3);return()=>{clearInterval(l)}},[]),n("div",null,n("h1",null,"Clock Panel"),n(m,{date:o}))}),null),s(i,{fallback:s("div",null,"Loading...")},s(d,null)),s("div",{className:"container"},s("div",{className:"item-a"},s("p",null,"itemA")),s("div",{className:"item-b"},s("p",null,"itemB")),s("div",{className:"item-c"},s("p",null,"itemC")),s("div",{className:"item-d"},s("p",null,"itemD"))),s("div",{className:"emoji-board"},"😀 😎 🤖 👨‍👩‍👧‍👦 👦🏻 👧🏻 👨🏻 👩🏻 👦🏼 👧🏼 👨🏼 👩🏼",s("br",null),"👦🏽 👧🏽 👨🏽 👩🏽 👦🏾 👧🏾 👨🏾 👩🏾 👦🏿 👧🏿 👨🏿 👩🏿",s("br",null),"🐱 🐶 🐌 🌎 🍕 🍲 🍫 🍻 ⚽️ 🏀 🏈 ⚾️",s("br",null),"🌈 🏯 🗽 🚆 📱 🎉 🗓 💸 🇫 🇴 🇳 🇹",s("br",null),"🇺🇸 🇧🇷 🇲🇹 🇸🇪 🇳🇬 🇰🇭 🇭🇷 🇮🇩 🇳🇿 🇪🇬 🇨🇳 🇹🇼",s("br",null)),s("form",{action:"./demo",method:"post"},s("p",null,s("label",{htmlFor:"oneline"},"Fill（填空）:"),s("input",{id:"oneline",type:"text",placeholder:"fill this"})),s("p",null,s("input",{type:"checkbox",name:"ck0",id:"ck0_0"}),"Check here",s("select",null,s("optgroup",{label:"Group 1"},s("option",null,"Option 1.1")),s("optgroup",{label:"Group 2"},s("option",null,"Option 2.1"),s("option",null,"Option 2.2")),s("optgroup",{label:"Group 3",disabled:!0},s("option",null,"Option 3.1"),s("option",null,"Option 3.2"),s("option",null,"Option 3.3")))),s("textarea",{name:"ta",placeholder:"A textarea"}),s("button",{type:"reset"},"Reset（重置）")),s("p",null,navigator.userAgent)),document.getElementById("app")),async function(){const l=await fetch("https://api.github.com/users/nullizer").then(l=>l.json());console.log(l,42),console.log("My Avatar: "+l.avatar_url)}();