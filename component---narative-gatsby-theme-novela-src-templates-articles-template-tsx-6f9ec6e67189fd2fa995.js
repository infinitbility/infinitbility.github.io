(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{GxIk:function(t,e,n){"use strict";var r,a,o,i,c,l,s,u,p,b,d,x,h,g,j,f,m,O,w=n("Bt0p"),v=n("5Md4"),y=(n("x3Br"),n("mXGw")),k=n("aD51"),z=n("D3RC"),L=n("yQ72"),P=n("5++h"),_=n("15bu");e.a=function(t){var e=t.articles,n=t.alwaysShowAllDetails;if(!e)return null;var r=1===e.length,a=Object(y.useContext)(_.a),o=a.gridLayout,i=void 0===o?"tiles":o,c=(a.hasSetGridLayout,a.getGridLayout),l=e.reduce((function(t,e,n,r){return n%2==0&&t.push(r.slice(n,n+2)),t}),[]);return Object(y.useEffect)((function(){return c()}),[]),Object(k.jsx)(A,{alwaysShowAllDetails:n},l.map((function(t,e){var n=e%2!=0,a=e%2!=1;return Object(k.jsx)(T,{key:e,gridLayout:i,hasOnlyOneArticle:r,reverse:n},Object(k.jsx)(R,{article:t[0],narrow:n}),Object(k.jsx)(R,{article:t[1],narrow:a}))})))};var R=function(t){var e=t.article,n=t.narrow;if(!e)return null;var r=Object(y.useContext)(_.a).gridLayout,a=n&&e.title.length>35,o=n?e.hero.narrow:e.hero.regular,i=o&&0!==Object.keys(o).length&&o.constructor===Object;return Object(k.jsx)(W,{href:e.slug,"data-a11y":"false"},Object(k.jsx)(q,{gridLayout:r},Object(k.jsx)(B,{narrow:n,gridLayout:r},i?Object(k.jsx)(L.c,{src:o,alt:e.title}):Object(k.jsx)(L.a,null)),Object(k.jsx)("div",null,Object(k.jsx)(E,{dark:!0,hasOverflow:a,gridLayout:r},e.title),Object(k.jsx)(F,{narrow:n,hasOverflow:a,gridLayout:r},e.excerpt),Object(k.jsx)(Q,null,e.date," · ",e.timeToRead," min read"))))},S=Object(k.css)("text-overflow:ellipsis;overflow-wrap:normal;-webkit-line-clamp:2;-webkit-box-orient:vertical;display:-webkit-box;white-space:normal;overflow:hidden;",P.a.phablet(r||(r=Object(w.a)(["\n    -webkit-line-clamp: 3;\n  "])))),C={name:"1fq9f5n",styles:"p{display:-webkit-box;}h2{margin-bottom:10px;}"},A=Object(v.a)("div",{target:"e14bbv6l0"})("transition:opacity 0.25s;",(function(t){return t.alwaysShowAllDetails&&C})),D=function(t){return Object(k.css)("position:relative;display:grid;grid-template-columns:",t.reverse?"457px 1fr":"1fr 457px",";grid-template-rows:2;column-gap:30px;&:not(:last-child){margin-bottom:75px;}",P.a.desktop_medium(a||(a=Object(w.a)(["\n    grid-template-columns: 1fr 1fr;\n  "])))," ",P.a.tablet(o||(o=Object(w.a)(["\n    grid-template-columns: 1fr;\n    \n    &:not(:last-child) {\n      margin-bottom: 0;\n    }\n  "]))))},G=function(t){return Object(k.css)("display:grid;grid-template-rows:1fr;grid-template-columns:1fr 488px;grid-column-gap:96px;grid-template-rows:1;align-items:center;position:relative;margin-bottom:50px;",P.a.desktop(i||(i=Object(w.a)(["\n    grid-column-gap: 24px;\n    grid-template-columns: 1fr 380px;\n  "])))," ",P.a.tablet(c||(c=Object(w.a)(["\n    grid-template-columns: 1fr;\n  "])))," @media (max-width:540px){background:",t.theme.colors.card,";}",P.a.phablet(l||(l=Object(w.a)(["\n    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.2);\n    border-bottom-right-radius: 5px;\n    border-bottom-left-radius: 5px;\n  "]))))},M=function(t){return Object(k.css)("position:relative;",P.a.tablet(s||(s=Object(w.a)(["\n    margin-bottom: 60px;\n  "])))," @media (max-width:540px){background:",t.theme.colors.card,";}",P.a.phablet(u||(u=Object(w.a)(["\n    margin-bottom: 40px;\n    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.2);\n    border-bottom-right-radius: 5px;\n    border-bottom-left-radius: 5px;\n  "]))))},I=function(t){return Object(k.css)("display:grid;grid-template-rows:",t.hasOnlyOneArticle?"1fr":"1fr 1fr",";")},T=Object(v.a)("div",{target:"e14bbv6l1"})((function(t){return"tiles"===t.gridLayout?D:I})),q=Object(v.a)("div",{target:"e14bbv6l2"})((function(t){return"rows"===t.gridLayout?G:M})),B=Object(v.a)("div",{target:"e14bbv6l3"})("position:relative;height:",(function(t){return"tiles"===t.gridLayout?"280px":"220px"}),";box-shadow:0 30px 60px -10px rgba(0,0,0,",(function(t){return t.narrow?.22:.3}),"),0 18px 36px -18px rgba(0,0,0,",(function(t){return t.narrow?.25:.33}),");margin-bottom:",(function(t){return"tiles"===t.gridLayout?"30px":0}),";transition:transform 0.3s var(--ease-out-quad),box-shadow 0.3s var(--ease-out-quad);& > div{height:100%;}",P.a.tablet(p||(p=Object(w.a)(["\n    height: 200px;\n    margin-bottom: 35px;\n  "])))," ",P.a.phablet(b||(b=Object(w.a)(["\n    overflow: hidden;\n    margin-bottom: 0;\n    box-shadow: none;\n    border-top-right-radius: 5px;\n    border-top-left-radius: 5px;\n  "])))),E=Object(v.a)(z.a.h2,{target:"e14bbv6l4"})("font-size:21px;font-family:",(function(t){return t.theme.fonts.serif}),";margin-bottom:",(function(t){return t.hasOverflow&&"tiles"===t.gridLayout?"35px":"10px"}),";transition:color 0.3s ease-in-out;",S,";",P.a.desktop(d||(d=Object(w.a)(["\n    margin-bottom: 15px;\n  "])))," ",P.a.tablet(x||(x=Object(w.a)(["\n    font-size: 24px;  \n  "])))," ",P.a.phablet(h||(h=Object(w.a)(["\n    font-size: 22px;  \n    padding: 30px 20px 0;\n    margin-bottom: 10px;\n    -webkit-line-clamp: 3;\n  "])))),F=Object(v.a)("p",{target:"e14bbv6l5"})(S,";font-size:16px;margin-bottom:10px;color:",(function(t){return t.theme.colors.grey}),";display:",(function(t){return t.hasOverflow&&"tiles"===t.gridLayout?"none":"box"}),";max-width:",(function(t){return t.narrow?"415px":"515px"}),";",P.a.desktop(g||(g=Object(w.a)(["\n    display: -webkit-box;\n  "])))," ",P.a.phablet(j||(j=Object(w.a)(["\n    margin-bottom; 15px;\n  "])))," ",P.a.phablet(f||(f=Object(w.a)(["\n    max-width: 100%;\n    padding:  0 20px;\n    margin-bottom: 20px;\n    -webkit-line-clamp: 3;\n  "])))),Q=Object(v.a)("div",{target:"e14bbv6l6"})("font-weight:600;font-size:16px;color:",(function(t){return t.theme.colors.grey}),";opacity:0.33;",P.a.phablet(m||(m=Object(w.a)(["\n    max-width: 100%;\n    padding:  0 20px 30px;\n  "])))),W=Object(v.a)("a",{target:"e14bbv6l7"})("position:relative;display:block;width:100%;height:100%;top:0;left:0;border-radius:5px;z-index:1;transition:transform 0.33s var(--ease-out-quart);-webkit-tap-highlight-color:rgba(255,255,255,0);&:hover ",B,",&:focus ",B,"{transform:translateY(-1px);box-shadow:0 50px 80px -20px rgba(0,0,0,0.27),0 30px 50px -30px rgba(0,0,0,0.3);}&:hover h2,&:focus h2{color:",(function(t){return t.theme.colors.accent}),";}&[data-a11y='true']:focus::after{content:'';position:absolute;left:-1.5%;top:-2%;width:103%;height:104%;border:3px solid ",(function(t){return t.theme.colors.accent}),";background:rgba(255,255,255,0.01);border-radius:5px;}",P.a.phablet(O||(O=Object(w.a)(["\n    &:hover "," {\n      transform: none;\n      box-shadow: initial;\n    }\n\n    &:active {\n      transform: scale(0.97) translateY(3px);\n    }\n  "])),B))},nzct:function(t,e,n){"use strict";n.r(e);var r,a,o,i,c,l,s,u,p,b,d,x,h,g,j,f,m,O,w,v=n("5Md4"),y=n("mXGw"),k=n("FQY5"),z=n("7/GX"),L=n("h7I9"),P=n("vuho"),_=n("kiUK"),R=n("Bt0p"),S=n("Wbzz"),C=n("sFbg"),A=n("ADQ3"),D=n("yQ72"),G=n("aD51"),M=function(t){var e=t.author;return Object(G.jsx)(I,null,Object(G.jsx)(T,{as:e.authorsPage?"a":"div",href:e.slug,"data-a11y":"false","aria-label":"Author's bio"},Object(G.jsx)(B,null,Object(G.jsx)(q,{src:e.avatar.medium}))),Object(G.jsx)(E,{dangerouslySetInnerHTML:{__html:e.bio}}))},I=Object(v.a)("div",{target:"eig4wgl0"})({name:"3j1lrl",styles:"display:flex;align-items:center;position:relative;left:-10px;"}),T=Object(v.a)("div",{target:"eig4wgl1"})("display:block;position:relative;height:40px;width:40px;border-radius:50%;background:rgba(0,0,0,0.25);margin-right:16px;margin:10px 26px 10px 10px;&::after{content:'';position:absolute;left:-5px;top:-5px;width:50px;height:50px;border-radius:50%;border:1px solid rgba(0,0,0,0.25);}&[data-a11y='true']:focus::after{content:'';position:absolute;left:-5px;top:-5px;width:50px;height:50px;border:2px solid ",(function(t){return t.theme.colors.accent}),";}"),q=Object(v.a)(D.c,{target:"eig4wgl2"})({name:"uodor8",styles:"border-radius:50%;"}),B=Object(v.a)("div",{target:"eig4wgl3"})({name:"wibiw4",styles:"height:40px;width:40px;border-radius:50%;background:rgba(0,0,0,0.25);margin-right:16px;overflow:hidden;"}),E=Object(v.a)("p",{target:"eig4wgl4"})("max-width:430px;font-size:14px;line-height:1.45;color:",(function(t){return t.theme.colors.grey}),";a{color:",(function(t){return t.theme.colors.grey}),";text-decoration:underline;}"),F=n("U0tm"),Q=n("5++h"),W=n("15bu"),H=function(t){var e=t.authors,n=Object(y.useContext)(W.a),r=n.gridLayout,a=void 0===r?"tiles":r,o=n.hasSetGridLayout,i=n.setGridLayout,c=Object(S.useStaticQuery)("3372861117").site.edges[0].node.siteMetadata.hero,l=o&&"tiles"===a,s=e.find((function(t){return t.featured}));if(!s)throw new Error("\n      No featured Author found.\n      Please ensure you have at least featured Author.\n  ");return Object(G.jsx)(k.a,{relative:!0,id:"Articles__Hero"},Object(G.jsx)(J,{style:{maxWidth:c.maxWidth+"px"}},Object(G.jsx)(Y,{dangerouslySetInnerHTML:{__html:c.heading}})),Object(G.jsx)(C.a,null,Object(G.jsx)(A.a,null)),Object(G.jsx)(N,null,Object(G.jsx)(M,{author:s}),Object(G.jsx)(X,null,Object(G.jsx)(U,{onClick:function(){return i("tiles")},active:l,"data-a11y":"false",title:"Show articles in Tile grid","aria-label":"Show articles in Tile grid"},Object(G.jsx)(F.a.Tiles,null)),Object(G.jsx)(U,{onClick:function(){return i("rows")},active:!l,"data-a11y":"false",title:"Show articles in Row grid","aria-label":"Show articles in Row grid"},Object(G.jsx)(F.a.Rows,null)))))},N=Object(v.a)("div",{target:"evd3z0e0"})("display:flex;align-items:center;justify-content:space-between;margin-bottom:100px;",Q.a.desktop(r||(r=Object(R.a)(["\n    margin-bottom: 80px;\n  "]))),";",Q.a.tablet(a||(a=Object(R.a)(["\n    margin-bottom: 60px;\n  "]))),";",Q.a.phablet(o||(o=Object(R.a)(["\n    display: none;\n  "]))),";"),X=Object(v.a)("div",{target:"evd3z0e1"})("display:flex;align-items:center;",Q.a.tablet(i||(i=Object(R.a)(["\n    display: none;\n  "]))),";"),J=Object(v.a)("div",{target:"evd3z0e2"})("margin:100px 0;",Q.a.desktop(c||(c=Object(R.a)(["\n    width: 80%;\n  "])))," ",Q.a.tablet(l||(l=Object(R.a)(["\n    width: 100%;\n  "])))),Y=Object(v.a)("h1",{target:"evd3z0e3"})("font-style:normal;font-weight:600;font-size:52px;line-height:1.15;color:",(function(t){return t.theme.colors.primary}),";a{color:",(function(t){return t.theme.colors.accent}),";}",Q.a.desktop(s||(s=Object(R.a)(["\n    font-size: 38px\n  "])))," ",Q.a.phablet(u||(u=Object(R.a)(["\n    font-size: 32px;\n  "])))),U=Object(v.a)("button",{target:"evd3z0e4"})("position:relative;display:flex;align-items:center;justify-content:center;height:36px;width:36px;border-radius:50%;background:transparent;transition:background 0.25s;&:not(:last-child){margin-right:30px;}&:hover{background:",(function(t){return t.theme.colors.hover}),";}&[data-a11y='true']:focus::after{content:'';position:absolute;left:-10%;top:-10%;width:120%;height:120%;border:2px solid ",(function(t){return t.theme.colors.accent}),";background:rgba(255,255,255,0.01);border-radius:50%;}svg{opacity:",(function(t){return t.active?1:.25}),";transition:opacity 0.2s;path{fill:",(function(t){return t.theme.colors.primary}),";}}"),K=n("GxIk"),Z=n("1ihw"),V=n("D3RC"),$=function(){var t=Object(y.useState)("");t[0],t[1];return Object(G.jsx)(k.a,{narrow:!0},Object(G.jsx)(tt,null,Object(G.jsx)(et,null,Object(G.jsx)(nt,null,"Interested in working with us?"),Object(G.jsx)(rt,null,"We love to work on exciting and innovative projects. Our expertise and knowledge can help you deliver your next project, big or small, whatever your location. If you're interested in working with us, we'd love to know more."),Object(G.jsx)(rt,null,"Mail us your details on ",Object(G.jsx)("a",{href:"mailTo:infinitbility@gmail.com",target:"_blank"},"infinitbility@gmail.com")))))},tt=Object(v.a)("div",{target:"e8iclx30"})("position:relative;display:flex;flex-direction:column;padding:64px 0 55px;margin:50px auto 100px;background:",(function(t){return t.theme.colors.card}),";box-shadow:0px 4px 50px rgba(0,0,0,0.05);z-index:1;",Q.a.tablet(p||(p=Object(R.a)(["\n    padding: 50px 0 0;\n    text-align: center;\n  "])))," ",Q.a.phablet(b||(b=Object(R.a)(["\n    margin: 20px auto 80px;\n  "])))),et=Object(v.a)("div",{target:"e8iclx31"})("margin:0 auto;width:100%;max-width:640px;",Q.a.tablet(d||(d=Object(R.a)(["\n    h3 {\n      padding: 0 50px;\n    }\n  "])))," ",Q.a.phone(x||(x=Object(R.a)(["\n    h3 {\n      padding: 0 24px;\n    }\n  "])))),nt=Object(v.a)(V.a.h3,{target:"e8iclx32"})("margin-bottom:20px;",Q.a.tablet(h||(h=Object(R.a)(["\n    margin-bottom: 15px;\n  "])))),rt=Object(v.a)("p",{target:"e8iclx33"})("margin:0 auto 30px;color:",(function(t){return t.theme.colors.grey}),";line-height:1.75;",Q.a.tablet(g||(g=Object(R.a)(["\n    padding: 0 26px;\n    margin: 0 auto 25px;\n  "])))),at=(Object(v.a)("img",{target:"e8iclx34"})("margin:0 auto 30px;color:",(function(t){return t.theme.colors.grey}),";line-height:1.75;",Q.a.tablet(j||(j=Object(R.a)(["\n    padding: 0 26px;\n    margin: 0 auto 25px;\n  "])))),Object(v.a)("form",{target:"e8iclx35"})('position:relative;&::after{content:">";position:absolute;left:21px;top:10px;color:',(function(t){return t.hasError?t.theme.colors.error:t.theme.colors.accent}),";",Q.a.tablet(f||(f=Object(R.a)(["\n    left: 34px;\n    top: 11px;\n  "]))),"}"),Object(v.a)("input",{target:"e8iclx36"})("position:relative;background:",(function(t){return t.hasError?t.theme.colors.errorBackground:t.theme.colors.inputBackground}),";border-radius:35px;border:none;padding:13px 21px 13px 35px;width:471px;color:",(function(t){return t.theme.colors.primary}),";::placeholder{color:",(function(t){return t.theme.colors.track}),";opacity:1;}:-ms-input-placeholder{color:",(function(t){return t.theme.colors.track}),";}::-ms-input-placeholder{color:",(function(t){return t.theme.colors.track}),";}",Q.a.tablet(m||(m=Object(R.a)(["\n    width: calc(100% - 36px);\n    margin: 0 18px;\n    padding: 14px 14px 14px 30px;\n    margin-bottom: 30px;\n  "])))),Object(v.a)("button",{target:"e8iclx37"})("position:absolute;left:306px;top:3px;display:flex;align-items:center;justify-content:center;width:161px;height:38px;border:1px solid ",(function(t){return t.hasError?t.theme.colors.error:t.theme.colors.accent}),";color:",(function(t){return t.hasError?t.theme.colors.error:t.theme.colors.accent}),";background:",(function(t){return t.subscribed?t.theme.colors.accent:"transparent"}),";font-weight:600;border-radius:35px;letter-spacing:0.42px;transition:border-color 0.2s var(--ease-in-out-quad),background 0.2s var(--ease-in-out-quad),color 0.2s var(--ease-in-out-quad);&:hover{background:",(function(t){return t.hasError?t.theme.colors.error:t.theme.colors.accent}),";color:",(function(t){return t.theme.colors.background}),";}&[disabled]{cursor:not-allowed;}svg *{fill:",(function(t){return t.theme.colors.background}),";}",(function(t){return Q.a.tablet(O||(O=Object(R.a)(["\n    position: relative;\n    height: 60px;\n    width: 100%;\n    top: 0;\n    left: 0;\n    border: none;\n    border-radius: 0;\n    border-top: 1px solid ",";\n\n    &:hover {\n      color: initial;\n      background: initial;\n    }\n  "])),t.theme.colors.horizontalRule)})),Object(v.a)("div",{target:"e8iclx38"})("position:absolute;left:35px;bottom:-20px;color:",(function(t){return t.theme.colors.error}),";font-size:12px;a{color:",(function(t){return t.theme.colors.error}),";text-decoration:underline;}",Q.a.tablet(w||(w=Object(R.a)(["\n    left: 50px;\n    top: 50px;\n  "])))),n("WIMD")),ot=(e.default=function(t){var e=t.location,n=t.pageContext,r=n.group,a=n.additionalContext.authors;return Object(G.jsx)(L.a,null,Object(G.jsx)(z.a,{pathname:e.pathname}),Object(G.jsx)(H,{authors:a}),Object(G.jsx)($,null),Object(G.jsx)(k.a,{narrow:!0},Object(G.jsx)(K.a,{articles:r}),Object(G.jsx)(it,{show:n.pageCount>1},Object(G.jsx)(P.a,n))),Object(G.jsx)(ot,null),Object(G.jsx)(Z.a,null),Object(G.jsx)(at.a,null),Object(G.jsx)(_.a,null))},Object(v.a)("div",{target:"e1bswbkw0"})("position:absolute;bottom:0;left:0;width:100%;height:590px;z-index:0;pointer-events:none;background:",(function(t){return t.theme.colors.gradient}),";transition:",(function(t){return t.theme.colorModeTransition}),";")),it=Object(v.a)("div",{target:"e1bswbkw1"})((function(t){return t.show&&"margin-top: 95px;"}))},vuho:function(t,e,n){"use strict";var r,a,o,i=n("Bt0p"),c=n("6CzD"),l=n("yBJb"),s=n("7L9N"),u=n("5Md4"),p=n("mXGw"),b=n.n(p),d=n("aD51"),x=n("tj/o"),h=n("5++h"),g=n("LZRm"),j=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))||this).maxPages=3,e.count=e.props.pageCount,e.current=e.props.index,e.pageRoot=e.props.pathPrefix,e.getFullPath=function(t){return"/"===e.pageRoot?1===t?e.pageRoot:e.pageRoot+"page/"+t:1===t?e.pageRoot:e.pageRoot+"/page/"+t},e}return Object(s.a)(e,t),e.prototype.render=function(){var t=this.count,e=this.current;if(t<=1)return null;var n=this.previousPath,r=this.nextPath,a=this.current<this.count,o=this.current>1;return Object(d.jsx)(b.a.Fragment,null,Object(d.jsx)(x.Helmet,null,o&&Object(d.jsx)("a",{rel:"prev",href:n}),a&&Object(d.jsx)("a",{rel:"next",href:r})),Object(d.jsx)(y,null,o&&Object(d.jsx)(m,{href:n},"Prev"),this.getPageLinks,Object(d.jsx)(v,{"aria-hidden":"true"},Object(d.jsx)("em",null,e)," of ",t),a&&Object(d.jsx)(m,{href:r},"Next")))},Object(l.a)(e,[{key:"nextPath",get:function(){return this.getFullPath(this.current+1)}},{key:"previousPath",get:function(){return this.getFullPath(this.current-1)}},{key:"getPageLinks",get:function(){var t=this,e=this.current,n=this.count,r=this.maxPages,a=1===e?e:e-1,o=Object(g.i)(a,n+1-a),i=o.slice(0,r);return o[0]>2&&i.unshift(null),o[0]>1&&i.unshift(1),o[0]+1===n&&o[0]-1>0&&i.splice(o.length-1-r,0,o[0]-1),o[0]+r<n&&i.push(null),o[0]+r-1<n&&i.push(n),Object(c.a)(new Set(i)).map((function(n,r){return null===n?Object(d.jsx)(w,{key:"PaginatorPage_spacer_"+r,"aria-hidden":!0}):Object(d.jsx)(O,{key:"PaginatorPage_"+n,href:t.getFullPath(n),style:{opacity:e===n?1:.3},className:"Paginator__pageLink"},n)}))}}]),e}(p.Component);e.a=j;var f=function(t){return Object(d.css)("line-height:1;color:",t.theme.colors.primary,";padding:0;width:6.8rem;height:6.8rem;display:flex;align-items:center;justify-content:center;font-variant-numeric:tabular-nums;",h.a.desktop_up(r||(r=Object(i.a)(["\n    display: block;\n    width: auto;\n    height: auto;\n    padding: 2rem;\n\n    &:first-of-type {\n      padding-left: 0;\n    }\n\n    &:last-child {\n      padding-right: 0;\n    }\n  "]))))},m=Object(u.a)("a",{target:"e5lnzj40"})("font-weight:600;font-size:18px;text-decoration:none;color:",(function(t){return t.theme.colors.primary}),";",f," &:hover,&:focus{opacity:1;text-decoration:underline;}"),O=Object(u.a)("a",{target:"e5lnzj41"})("font-weight:400;font-size:18px;text-decoration:none;color:",(function(t){return t.theme.colors.primary}),";",f," &:hover,&:focus{opacity:1;text-decoration:underline;}"),w=Object(u.a)("span",{target:"e5lnzj42"})("opacity:0.3;",f,' &::before{content:"...";}'),v=Object(u.a)("span",{target:"e5lnzj43"})("font-weight:400;",f," color:",(function(t){return t.theme.colors.primary}),";em{font-style:normal;color:",(function(t){return t.theme.colors.primary}),";}"),y=Object(u.a)("nav",{target:"e5lnzj44"})("position:relative;z-index:1;display:inline-flex;justify-content:space-between;align-items:center;",h.a.tablet(a||(a=Object(i.a)(["\n    .Paginator__pageLink, "," { display: none; }\n    left: -15px;\n  "])),w)," ",h.a.desktop_up(o||(o=Object(i.a)(["\n    justify-content: flex-start;\n    "," { display: none; }\n  "])),v))}}]);