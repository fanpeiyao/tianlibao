(function(window){var svgSprite='<svg><symbol id="icon-arror-r" viewBox="0 0 1024 1024"><path d="M700.581518 526.020318l-0.899486 0.899486 0 0 0 0L353.257068 873.345792c-7.995091 7.995091-20.946055 7.995091-28.940123 0s-7.995091-20.946055 0-28.940123l331.955414-331.956438L323.417459 179.594331c-7.995091-7.974625-7.995091-20.946055 0-28.940123s20.946055-7.995091 28.940123 0l342.847485 342.848509c1.898233 0.959861 3.797489 1.979074 5.376451 3.577478C708.575586 505.074264 708.575586 518.025227 700.581518 526.020318z"  ></path></symbol><symbol id="icon-arror-l" viewBox="0 0 1024 1024"><path d="M323.416436 526.021342l0.87902 0.899486 0 0 0 0L670.760328 873.366258c7.995091 7.995091 20.947078 7.995091 28.942169 0 7.995091-7.995091 7.995091-20.947078 0-28.942169L367.708198 512.450255l332.87332-332.874343c7.995091-7.974625 7.995091-20.947078 0-28.942169-7.995091-7.995091-20.947078-7.995091-28.942169 0L328.773444 493.500671c-1.87879 0.959861-3.797489 1.979074-5.357008 3.578502C315.421344 505.074264 315.421344 518.02625 323.416436 526.021342z"  ></path></symbol><symbol id="icon-yuanquan1" viewBox="0 0 1024 1024"><path d="M512 64c249.6 0 448 198.4 448 448s-198.4 448-448 448-448-198.4-448-448 198.4-448 448-448m0-64C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512-230.4-512-512-512z"  ></path></symbol><symbol id="icon-icon-test" viewBox="0 0 1024 1024"><path d="M1023.999687 475.428739a36.571417 36.571417 0 1 0-73.142835 0c0 3.855672 0.752326 7.512814 1.870367 11.002773l-2.695836 0.720979c0.459755 8.233793 0.825469 16.498934 0.825469 24.847666 0 242.374456-196.493001 438.857009-438.857009 438.857008C269.625387 950.857165 73.142835 754.374613 73.142835 512.000157S269.625387 73.143148 511.999843 73.143148a436.558234 436.558234 0 0 1 239.009886 70.969448A36.351989 36.351989 0 0 0 778.448741 156.734959a36.571417 36.571417 0 0 0 36.571418-36.571417c0-9.49812-3.709387-18.06628-9.654855-24.575992l1.818122-1.807673A509.533885 509.533885 0 0 0 511.999843 0.000313C229.229644 0.000313 0 229.229958 0 512.000157s229.229644 511.999843 511.999843 511.999843c282.780648 0 511.999843-229.229644 511.999844-511.999843 0-9.539915-0.428408-18.975341-1.003102-28.368971A36.048969 36.048969 0 0 0 1023.999687 475.428739z m-746.150956 36.937132c-7.930773-7.920324-20.971096-7.732243-29.131746 0.428408l-14.774853 14.774853c-8.160651 8.160651-8.348732 21.200973-0.417959 29.131746l215.29071 215.290709c7.930773 7.930773 20.971096 7.742692 29.131746-0.417959l9.978773-9.989221c1.316571-0.982204 2.612244-1.995754 3.813876-3.207836l448.03121-448.03121c11.901384-11.901384 13.280649-29.821379 3.071999-40.00913l-7.387426-7.387427c-10.20865-10.20865-28.107746-8.829385-40.009131 3.06155L463.474797 698.002386 277.848731 512.365871z" fill="#15A8FF" ></path></symbol><symbol id="icon-xuanzhong" viewBox="0 0 1024 1024"><path d="M512 1024A512 512 0 1 1 512 0a512 512 0 0 1 0 1024z m-98.624-282.048l-188.416-158.08a32 32 0 1 0-41.152 48.96L396.8 811.52a32 32 0 0 0 45.12-3.904l411.392-490.24a32 32 0 0 0-49.024-41.216l-390.848 465.792z" fill="#00A6AA" ></path></symbol><symbol id="icon-gongshang1" viewBox="0 0 1024 1024"><path d="M800 550.4v224H550.4V704h172.8V620.8H550.4V396.8h172.8V320H550.4V243.2h249.6v224H627.2v76.8l172.8 6.4z m-576 0v224h249.6V704H307.2V620.8h172.8V396.8H307.2V320h172.8V243.2h-256v224h172.8v76.8l-172.8 6.4z" fill="#D62629" ></path><path d="M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512-230.4-512-512-512z m0 921.6c-224 0-409.6-185.6-409.6-409.6S288 102.4 512 102.4s409.6 185.6 409.6 409.6-185.6 409.6-409.6 409.6z" fill="#D62629" ></path></symbol><symbol id="icon-tishi" viewBox="0 0 1024 1024"><path d="M512 0.64C229.632 0.64 0.64 229.632 0.64 512S229.632 1023.36 512 1023.36 1023.36 794.368 1023.36 512 794.368 0.64 512 0.64z m0 949.632C269.952 950.272 73.728 754.048 73.728 512 73.728 269.952 269.952 73.6 512 73.6c242.048 0 438.272 196.224 438.272 438.272 0 242.176-196.224 438.4-438.272 438.4z"  ></path><path d="M475.52 731.136h73.088v72.96h-73.088zM530.304 219.776h-36.48c-10.112 0-18.304 8.192-18.304 18.304v401.792c0 10.112 8.192 18.304 18.304 18.304h36.48c10.112 0 18.304-8.192 18.304-18.304V238.08c-0.128-10.112-8.32-18.304-18.304-18.304z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)