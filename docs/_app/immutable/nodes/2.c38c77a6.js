import{s as b,f as v,n as g}from"../chunks/scheduler.63274e7e.js";import{S as w,i as S,g as p,h as _,j as T,f as u,k as c,a as $,y as E,z as k,s as q,r as A,A as B,c as O,u as z,v as C,d as N,t as P,w as F}from"../chunks/index.81cde385.js";import{b as h}from"../chunks/paths.094f5527.js";const G=!0,V=Object.freeze(Object.defineProperty({__proto__:null,prerender:G},Symbol.toStringTag,{value:"Module"}));function R(l){let e,n,s,o,r;return{c(){e=p("button"),n=p("img"),this.h()},l(t){e=_(t,"BUTTON",{class:!0});var a=T(e);n=_(a,"IMG",{src:!0,alt:!0,class:!0}),a.forEach(u),this.h()},h(){v(n.src,s=l[0])||c(n,"src",s),c(n,"alt","something to click"),c(n,"class","circular-img svelte-13w0qbl"),c(e,"class","transparent-button svelte-13w0qbl")},m(t,a){$(t,e,a),E(e,n),o||(r=k(e,"click",l[1]),o=!0)},p(t,[a]){a&1&&!v(n.src,s=t[0])&&c(n,"src",s)},i:g,o:g,d(t){t&&u(e),o=!1,r()}}}let U=".wav",y=0,I=3,x=1;function d(l,e){return Math.floor(Math.random()*(e-l+1))+l}function D(l,e,n){let s=["clap","gj","woo","woof","yay","youdidit"],o=`${h}/images/millie-1.png`,r=s.length-1,t=-1,a=1;function m(){const i=new Audio;let f=d(y,r);for(;f===t;)f=d(y,r);i.src=`${h}/sounds/${s[f]}${U}`,i.play()}function M(){let i=d(x,I);for(;i===a;)i=d(x,I);a=i,n(0,o=`${h}/images/millie-${i}.png`)}function j(){M(),m()}return[o,j]}class H extends w{constructor(e){super(),S(this,e,D,R,b,{})}}function J(l){let e,n,s,o,r;return o=new H({}),{c(){e=p("meta"),n=q(),s=p("section"),A(o.$$.fragment),this.h()},l(t){const a=B("svelte-1hp72rk",document.head);e=_(a,"META",{name:!0,content:!0}),a.forEach(u),n=O(t),s=_(t,"SECTION",{class:!0});var m=T(s);z(o.$$.fragment,m),m.forEach(u),this.h()},h(){document.title="possibly a treat",c(e,"name","description"),c(e,"content","Svelte demo app"),c(s,"class","svelte-7w87tm")},m(t,a){E(document.head,e),$(t,n,a),$(t,s,a),C(o,s,null),r=!0},p:g,i(t){r||(N(o.$$.fragment,t),r=!0)},o(t){P(o.$$.fragment,t),r=!1},d(t){t&&(u(n),u(s)),u(e),F(o)}}}class W extends w{constructor(e){super(),S(this,e,null,J,b,{})}}export{W as component,V as universal};
