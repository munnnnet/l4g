(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{178:function(e,t,n){"use strict";n.r(t);var a=n(10),i=n.n(a),r=n(179),c=n(7),o=n(0),l=n(188),s=n.n(l),p=n(180),d=n(185),m=n(181),u=n(210),g=n(69),b=n(187),h=n.n(b),f=Object(r.a)("div",{target:"e16drlo40"})({name:"1uw4klq",styles:"background:#fff;border:1px solid #ccc;padding:1em;border-radius:1em;margin:-2em 0 2em 0;@media (min-width:1024px){margin-top:0;}p,span{line-height:1.7em;text-rendering:geometricPrecision;color:#3a4145;max-width:820px;margin:0 auto;a{color:inherit;font-weight:bold;text-decoration:none;&:hover{text-decoration:underline;}}}.picture{text-align:center;display:block;h3{color:#000;}img{border-radius:50%;}}"}),x=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){return Object(c.c)(f,null,Object(c.c)("span",{className:"picture"},Object(c.c)("img",{src:h.a,alt:"Luciano Mammino's profile picture"}),Object(c.c)("h3",null,"Hello :)")),Object(c.c)("p",null,"I am Luciano a.k.a. ",Object(c.c)("em",null,"loige"),", a passionate Web Developer currently working as Solution Architect at Vectra, Dublin. You can read some of my posts in this page, or"," ",Object(c.c)(g.Link,{to:"/about"},"know more about myself and my side projects")," ","or about my ",Object(c.c)(g.Link,{to:"/speaking"},"talks and workshops"),"."))},t}(o.Component),O=n(215),w=Object(r.a)("nav",{target:"elfrahe0"})({name:"v1ffov",styles:"display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-between;margin:2rem 0;padding:16px 0;max-width:820px;color:#9eabb3;text-align:center;"}),j=Object(r.a)("span",{target:"elfrahe1"})({name:"1xpef1v",styles:"order:1;width:100%;padding:16px 0;@media (min-width:780px){order:2;width:auto;}"}),v={name:"1tsgnyg",styles:"color:inherit;padding:16px;border:#bfc8cd 1px solid;text-decoration:none;border-radius:4px;transition:border 0.3s ease;min-width:200px;width:100%;&:hover{color:rgb(136,144,147);border-color:rgb(152,160,164);}@media (min-width:780px){width:auto;}"},y=Object(r.a)("div",{target:"elfrahe2"})({name:"1xb6rat",styles:"display:none;&.previous{order:2;}&.next{order:3;}@media (min-width:780px){min-width:200px;display:block;&.previous{order:1;}}"}),A={name:"nr1xwc",styles:"order:2;@media (min-width:780px){order:1;}"},k={name:"1eii47",styles:"order:3;"},Q=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props,t=e.previous,n=e.next,a=e.currentPage,i=e.totalPages,r=this.props.previousLabel||"← Newer Posts",o=this.props.nextLabel||"Older Posts →";return Object(c.c)(c.a,null,function(e){var l=e.css;e.cx;return Object(c.c)(w,null,t?Object(c.c)(g.Link,{className:l(v)+" "+l(A),to:t.href},r):Object(c.c)(y,{className:"previous"}),Object(c.c)(j,null,"Page ",a," of ",i),n?Object(c.c)(g.Link,{className:l(v)+" "+l(k),to:n.href},o):Object(c.c)(y,{className:"next"}))})},t}(o.Component),B=n(183);n.d(t,"pageQuery",function(){return M});var N=Object(r.a)("div",{target:"ef7bui0"})({name:"dpbxro",styles:"min-height:100vh;margin:0 auto;padding-left:20px;padding-right:20px;max-width:1260px;display:flex;flex-direction:column;@media (min-width:780px){width:90%;}"}),z=Object(r.a)("section",{target:"ef7bui1"})({name:"i3jcei",styles:"flex:1;display:flex;"}),U=Object(r.a)("div",{target:"ef7bui2"})({name:"tssdck",styles:"flex:1;display:flex;flex-wrap:wrap;@media (min-width:1024px){display:flex;}"}),C=Object(r.a)("main",{target:"ef7bui3"})({name:"vju3tz",styles:"width:100%;order:2;h3:first-of-type{margin-top:0;padding-top:0;}article{margin-top:0;padding-top:0;}@media (min-width:1024px){order:1;width:75%;margin-top:2em;}"}),S=Object(r.a)("aside",{target:"ef7bui4"})({name:"1ds6ifw",styles:"order:1;padding:1em;margin:0 0 2em 0;width:100%;h3{margin:0 0 0.5em 0;position:relative;color:#5cb767;}@media (min-width:1024px){background:transparent;margin:0 0 1em 0;order:2;width:25%;& > div{margin:1em 0 0 0;position:sticky;overflow-y:auto;top:70px;}}"}),F=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=s()(this,"props.data.site.siteMetadata.title"),t=s()(this,"props.data.site.siteMetadata.description"),n=this.props.pageContext,a=n.previous,i=n.next,r=n.currentPage,o=n.totalPages,l=n.posts,g={previous:a,next:i,currentPage:r,totalPages:o};return Object(c.c)(d.a,{location:this.props.location,section:"blog"},Object(c.c)(p.a,{pageData:{frontmatter:{title:e+(1===r?"":" - Page "+r+" of "+o),meta_description:t+" - Blog, page "+r+" of "+o}}}),Object(c.c)(m.a,{className:"bottomRightBg"},Object(c.c)("h1",null,"Luciano Mammino"),Object(c.c)("h2",null,"Web developer, entrepreneur, fighter, butterfly maker!")),Object(c.c)(N,null,Object(c.c)(z,null,Object(c.c)(U,null,Object(c.c)(C,null,Object(c.c)(B.a,null,Object(c.c)(O.a,{posts:l}),Object(c.c)(Q,g))),Object(c.c)(S,null,Object(c.c)("div",null,Object(c.c)(x,null),Object(c.c)(u.a,null)))))))},t}(o.Component),M=(t.default=F,"333377244")},181:function(e,t,n){"use strict";var a=n(10),i=n.n(a),r=n(179),c=n(7),o=n(0),l=n(182),s=n.n(l),p=Object(r.a)("div",{target:"ea1ziiz0"})({name:"vvgs1u",styles:"background-color:#46c9e5;background-repeat:no-repeat;background-position:center;background-size:cover;width:100%;min-height:300px;height:50vh;display:table;&.small{max-height:300px;}&.tiledBg{background-size:auto;background-repeat:repeat;}&.bottomRightBg{background-position:bottom right;}&.gradientOverlay{position:relative;z-index:-2;&:before{content:'';position:absolute;top:0;right:0;bottom:0;left:0;background-image:linear-gradient(to bottom right,#46c9e5,#d26ac2);opacity:0.6;z-index:-1;}}@media (min-width:780px){height:70vh;}"}),d=Object(r.a)("div",{target:"ea1ziiz1"})({name:"1dbbfk8",styles:"display:table-cell;vertical-align:middle;text-align:center;font-weight:700;color:#fff;padding:0 2em;color:white;text-shadow:1px 3px 0 #000,-1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,1px 1px 0 #000;@media (min-width:780px){font-size:1.2em;}h1{font-size:2em;line-height:1.6em;}h2{font-size:1.5em;margin:0.5em 0 0 0;line-height:1.6em;}&.textOverlay > * > span{background:#000000c4;display:inline;padding:0.2em;box-decoration-break:clone;-webkit-box-decoration-break:clone;}"}),m=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props,t=(e.isSmall,e.children),n=e.className,a=this.props.backgroundImage||s.a;return Object(c.c)(p,{className:n,style:{backgroundImage:"url("+a+")"}},Object(c.c)(d,{className:n},t))},t}(o.Component);t.a=m},182:function(e,t,n){e.exports=n.p+"static/default-bg-e7d1dfbd3202e36e2d9d70dfd5a77122.jpg"},184:function(e,t,n){"use strict";var a=n(44),i=n.n(a),r=n(7);n(0);t.a=function(e){return Object(r.c)("svg",i()({"aria-hidden":"true","data-prefix":"far","data-icon":"eye",className:"svg-inline--fa fa-eye fa-w-18",viewBox:"0 0 576 512",width:"1em",height:"1em"},e),Object(r.c)("path",{fill:"currentColor",d:"M569.354 231.631C512.97 135.949 407.81 72 288 72 168.14 72 63.004 135.994 6.646 231.631a47.999 47.999 0 0 0 0 48.739C63.031 376.051 168.19 440 288 440c119.86 0 224.996-63.994 281.354-159.631a47.997 47.997 0 0 0 0-48.738zM288 392c-102.556 0-192.091-54.701-240-136 44.157-74.933 123.677-127.27 216.162-135.007C273.958 131.078 280 144.83 280 160c0 30.928-25.072 56-56 56s-56-25.072-56-56l.001-.042C157.794 179.043 152 200.844 152 224c0 75.111 60.889 136 136 136s136-60.889 136-136c0-31.031-10.4-59.629-27.895-82.515C451.704 164.638 498.009 205.106 528 256c-47.908 81.299-137.444 136-240 136z"}))}},187:function(e,t){e.exports="data:image/jpeg;base64,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"},190:function(e,t,n){"use strict";var a=n(10),i=n.n(a),r=n(179),c=n(7),o=n(0),l=n(184),s={name:"1yorln6",styles:"margin:0 0.25em 0 0;"},p=Object(r.a)("span",{target:"e1tk4wa10"})({name:"13sv3zn",styles:"vertical-align:middle;font-size:inherit;margin:0 0.5em;display:inline-block;span{vertical-align:text-bottom;}"}),d=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props.time;return Object(c.c)(p,{title:e+" minute"+(e>1?"s":"")+" read"},Object(c.c)(c.a,null,function(t){var n=t.css;t.cx;return Object(c.c)(o.Fragment,null,Object(c.c)(l.a,{className:n(s)}),Object(c.c)("span",null,e," min"))}))},t}(o.Component);t.a=d},192:function(e,t,n){"use strict";var a=n(10),i=n.n(a),r=n(179),c=n(7),o=n(0),l=n(44),s=n.n(l),p=function(e){return Object(c.c)("svg",s()({"aria-hidden":"true","data-prefix":"far","data-icon":"calendar-alt",className:"svg-inline--fa fa-calendar-alt fa-w-14",viewBox:"0 0 448 512",width:"1em",height:"1em"},e),Object(c.c)("path",{fill:"currentColor",d:"M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"}))},d={name:"1yorln6",styles:"margin:0 0.25em 0 0;"},m=Object(r.a)("span",{target:"e1r90wi10"})({name:"13sv3zn",styles:"vertical-align:middle;font-size:inherit;margin:0 0.5em;display:inline-block;span{vertical-align:text-bottom;}"}),u=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props,t=e.date,n=e.style,a=e.className;return Object(c.c)(c.a,null,function(e){var i=e.css;e.cx;return Object(c.c)(m,{style:n,className:i(a)},Object(c.c)(p,{className:i(d)}),Object(c.c)("span",null,t))})},t}(o.Component);t.a=u},193:function(e,t,n){"use strict";var a=n(10),i=n.n(a),r=(n(209),n(45),n(71),n(179)),c=n(7),o=n(0),l=n(69),s=n(44),p=n.n(s),d=function(e){return Object(c.c)("svg",p()({"aria-hidden":"true","data-prefix":"fas","data-icon":"tags",className:"svg-inline--fa fa-tags fa-w-20",viewBox:"0 0 640 512",width:"1em",height:"1em"},e),Object(c.c)("path",{fill:"currentColor",d:"M497.941 225.941L286.059 14.059A48 48 0 0 0 252.118 0H48C21.49 0 0 21.49 0 48v204.118a48 48 0 0 0 14.059 33.941l211.882 211.882c18.744 18.745 49.136 18.746 67.882 0l204.118-204.118c18.745-18.745 18.745-49.137 0-67.882zM112 160c-26.51 0-48-21.49-48-48s21.49-48 48-48 48 21.49 48 48-21.49 48-48 48zm513.941 133.823L421.823 497.941c-18.745 18.745-49.137 18.745-67.882 0l-.36-.36L527.64 323.522c16.999-16.999 26.36-39.6 26.36-63.64s-9.362-46.641-26.36-63.64L331.397 0h48.721a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882z"}))},m=Object(r.a)("span",{target:"ex82wp60"})({name:"j1wil6",styles:"vertical-align:middle;margin:0 0.5em 0 1em;display:inline-block;a{color:inherit;font-weight:bold;text-decoration:none;vertical-align:text-bottom;}"}),u={name:"1yorln6",styles:"margin:0 0.25em 0 0;"},g=Object(r.a)("span",{target:"ex82wp61"})({name:"i6dzq1",styles:"vertical-align:text-bottom;"}),b=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this,t=this.props.tags;return Object(c.c)(c.a,null,function(n){var a=n.css;n.cx;return Object(c.c)(m,e.props,Object(c.c)(d,{className:a(u)}),t.map(function(e,n){return Object(c.c)(o.Fragment,{key:e},Object(c.c)(l.Link,{to:"/tag/"+(a=e,a.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,""))},"#",e),n<t.length-1?Object(c.c)(g,null,", "):"");var a}))})},t}(o.Component);t.a=b},210:function(e,t,n){"use strict";var a=n(10),i=n.n(a),r=n(179),c=n(7),o=n(0),l=n(211),s=n.n(l),p=Object(r.a)("a",{target:"e1pruv500"})({name:"1jztyo0",styles:"background:#ffffcd;padding:0.5em;font-size:12px;display:block;color:inherit;text-decoration:none;border:1px solid #ffffcd;margin:0 0 1em 0;&:hover{border-color:#f89000;}"}),d=Object(r.a)("span",{target:"e1pruv501"})({name:"p58oka",styles:"display:flex;flex-direction:row;flex-wrap:wrap;"}),m=Object(r.a)("span",{target:"e1pruv502"})({name:"13cvdli",styles:"width:50%;padding:0 0 0 1em;display:block;&.left{max-width:125px;padding:0 0 0 1em !important;}@media (max-width:1024px) and (min-width:780px){width:100%;max-width:auto !important;margin:0;&.left{padding:0 0 0 1em;}h4{padding:1em 0 0.5em 0 !important;}}&:first-of-type{padding:0;}h4{padding:0 0 0.5em 0;font-size:14px;}"}),u=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){return Object(c.c)(p,{rel:"nofollow noopener noreferrer",target:"_blank",href:"https://loige.link/nodejs-book-ref-blog"},Object(c.c)(d,null,Object(c.c)(m,{className:"left"},Object(c.c)("img",{src:s.a,style:{width:"100%"},alt:"Node.js Design Patterns Second Edition"})),Object(c.c)(m,null,Object(c.c)("h4",null,"Node.js Design Patterns"),Object(c.c)("p",null,"Master best practices to build modular and scalable server-side web applications guided by"," ",Object(c.c)("em",null,"Node.js Design Patterns Second Edition"),". Available as"," ",Object(c.c)("strong",null,"Digital")," and ",Object(c.c)("strong",null,"Print"),"."))))},t}(o.Component);t.a=u},211:function(e,t,n){e.exports=n.p+"static/200-cb588b738a90b17740d5c8fd47777e73.jpg"},215:function(e,t,n){"use strict";var a=n(44),i=n.n(a),r=n(10),c=n.n(r),o=n(7),l=n(0),s=n(188),p=n.n(s),d=n(179),m=n(69),u=n(193),g=n(192),b=n(190),h=n(187),f=n.n(h),x=Object(d.a)("article",{target:"e1i9va5t0"})({name:"12gkep0",styles:"margin:2rem 0 1rem;max-width:820px;&:first-of-type{margin-top:0;}position:relative;margin:4rem 0;padding-bottom:4rem;border-bottom:#ebf2f6 1px solid;word-wrap:break-word;-moz-hyphens:auto;-ms-hyphens:auto;-webkit-hyphens:auto;hyphens:auto;&::after{display:block;content:'';width:7px;height:7px;border:#e7eef2 1px solid;position:absolute;bottom:-5px;left:50%;margin-left:-5px;background:#fff;border-radius:100%;box-shadow:#fff 0 0 0 5px;}"}),O=Object(d.a)("h3",{target:"e1i9va5t1"})({name:"6jmial",styles:"font-size:1.6rem;font-weight:bolder;letter-spacing:-1px;line-height:1.15em;margin:0 0 0.4em 0;max-width:820px;text-rendering:geometricPrecision;"}),w=Object(d.a)("p",{target:"e1i9va5t2"})({name:"17vb7gs",styles:"margin:0;font-size:1em;line-height:1.7em;text-rendering:geometricPrecision;color:#3a4145;padding:0 1em 0 0;max-width:820px;"}),j=Object(d.a)("footer",{target:"e1i9va5t3"})({name:"1a717wp",styles:"margin:0.75rem 0 0 0;font-size:1rem;line-height:1.5rem;color:#6d6d6d;vertical-align:middle;"}),v=Object(d.a)("img",{target:"e1i9va5t4"})({name:"4y5kis",styles:"width:24px;height:24px;float:left;margin-right:9px;border-radius:100%;"}),y=Object(d.a)("p",{target:"e1i9va5t5"})({name:"dgersb",styles:"text-align:center;margin-top:2rem !important;width:auto;a{color:inherit;padding:16px;border:#bfc8cd 1px solid;text-decoration:none;border-radius:4px;transition:border 0.3s ease;min-width:200px;width:100%;&:hover{color:rgb(136,144,147);border-color:rgb(152,160,164);}}@media (min-width:1024px){text-align:left;max-width:100% !important;}"}),A=function(e){function t(){return e.apply(this,arguments)||this}return c()(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.slug,a=e.excerpt,i=e.date,r=e.timeToRead,c=e.tags;return Object(o.c)(x,{className:"content"},Object(o.c)("header",null,Object(o.c)(O,null,Object(o.c)(m.Link,{style:{boxShadow:"none"},to:"/"+n},t))),Object(o.c)("section",null,Object(o.c)(w,{dangerouslySetInnerHTML:{__html:a}})),Object(o.c)(j,null,Object(o.c)(v,{src:f.a,alt:"Luciano Mammino's Profile picture"}),Object(o.c)(m.Link,{to:"/about"},"Luciano Mammino"),Object(o.c)(u.a,{tags:c}),Object(o.c)(g.a,{date:i}),Object(o.c)(b.a,{time:r}),Object(o.c)(y,null,Object(o.c)(m.Link,{to:"/"+n},"Read the post →"))))},t}(l.Component),k=function(e){function t(){return e.apply(this,arguments)||this}return c()(t,e),t.prototype.render=function(){var e=this.props.posts;return e&&0!==e.length?Object(o.c)(l.Fragment,null,e.map(function(e){var t={slug:e.fields.slug,title:p()(e,"frontmatter.title",e.fields.slug),date:e.frontmatter.date,tags:e.frontmatter.tags,timeToRead:e.timeToRead,excerpt:e.excerpt};return Object(o.c)(A,i()({key:t.slug},t))})):Object(o.c)(l.Fragment,null,"No posts available in this section! :(")},t}(l.Component);t.a=k}}]);
//# sourceMappingURL=component---src-templates-blog-index-js-53736337dbb94533bfd3.js.map