(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-735a43f0","chunk-2d0c0be3"],{"01da":function(t,e,n){t.exports=n.p+"img/miningBall.15dc6ab4.svg"},"097a":function(t,e,n){t.exports=n.p+"img/router.582543e3.svg"},1116:function(t,e,n){t.exports=n.p+"img/addLiquidity.e6e5ae15.svg"},1276:function(t,e,n){"use strict";var s=n("d784"),o=n("44e7"),i=n("825a"),a=n("1d80"),r=n("4840"),c=n("8aa5"),u=n("50c4"),l=n("14c3"),p=n("9263"),d=n("d039"),f=[].push,g=Math.min,v=4294967295,m=!d((function(){return!RegExp(v,"y")}));s("split",2,(function(t,e,n){var s;return s="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var s=String(a(this)),i=void 0===n?v:n>>>0;if(0===i)return[];if(void 0===t)return[s];if(!o(t))return e.call(s,t,i);var r,c,u,l=[],d=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),g=0,m=new RegExp(t.source,d+"g");while(r=p.call(m,s)){if(c=m.lastIndex,c>g&&(l.push(s.slice(g,r.index)),r.length>1&&r.index<s.length&&f.apply(l,r.slice(1)),u=r[0].length,g=c,l.length>=i))break;m.lastIndex===r.index&&m.lastIndex++}return g===s.length?!u&&m.test("")||l.push(""):l.push(s.slice(g)),l.length>i?l.slice(0,i):l}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var o=a(this),i=void 0==e?void 0:e[t];return void 0!==i?i.call(e,o,n):s.call(String(o),e,n)},function(t,o){var a=n(s,t,this,o,s!==e);if(a.done)return a.value;var p=i(t),d=String(this),f=r(p,RegExp),h=p.unicode,b=(p.ignoreCase?"i":"")+(p.multiline?"m":"")+(p.unicode?"u":"")+(m?"y":"g"),x=new f(m?p:"^(?:"+p.source+")",b),y=void 0===o?v:o>>>0;if(0===y)return[];if(0===d.length)return null===l(x,d)?[d]:[];var w=0,k=0,_=[];while(k<d.length){x.lastIndex=m?k:0;var E,T=l(x,m?d:d.slice(k));if(null===T||(E=g(u(x.lastIndex+(m?0:k)),d.length))===w)k=c(d,k,h);else{if(_.push(d.slice(w,k)),_.length===y)return _;for(var C=1;C<=T.length-1;C++)if(_.push(T[C]),_.length===y)return _;k=w=E}}return _.push(d.slice(w)),_}]}),!m)},"14c3":function(t,e,n){var s=n("c6b6"),o=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var i=n.call(t,e);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==s(t))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(t,e)}},"159b":function(t,e,n){var s=n("da84"),o=n("fdbc"),i=n("17c2"),a=n("9112");for(var r in o){var c=s[r],u=c&&c.prototype;if(u&&u.forEach!==i)try{a(u,"forEach",i)}catch(l){u.forEach=i}}},"16b3":function(t,e,n){t.exports=n.p+"img/mining-info.a7d76b73.svg"},"16e0":function(t,e,n){t.exports=n.p+"img/invitationCard.ebdb65bc.svg"},"17c2":function(t,e,n){"use strict";var s=n("b727").forEach,o=n("a640"),i=n("ae40"),a=o("forEach"),r=i("forEach");t.exports=a&&r?[].forEach:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}},2764:function(t,e,n){t.exports=n.p+"img/success.97c64430.svg"},"2db2":function(t,e,n){t.exports=n.p+"img/bbglogo.0d5e05e2.svg"},"2f0b":function(t,e,n){t.exports=n.p+"img/exchange.5f17f97f.svg"},"31e8":function(t,e,n){var s={"./Bnb.svg":"9b7f","./QRcodelogo.svg":"507c","./add.svg":"eef4","./addLiquidity.svg":"1116","./apy-bg.svg":"5dc4","./arraw.svg":"1d4a","./award-bg.svg":"66a7","./bbglogo.svg":"2db2","./buy.svg":"f3f6","./copy.svg":"553b","./countdown.svg":"ceca","./downarrow.svg":"4995","./en.svg":"bc04","./exchange.svg":"2f0b","./icon-exchange.svg":"5605","./info.svg":"07e6","./invitationCard.svg":"16e0","./invitelistAddress.svg":"8dd5","./ja.svg":"19ca","./ko.svg":"ed4a","./liquidity.svg":"6501","./logo.svg":"9b19","./menu.svg":"36be","./mining-info.svg":"16b3","./miningBall.svg":"01da","./miningBottom.svg":"f9d4","./miningBubbleTop.svg":"da4c","./next-light.svg":"949e","./not-trade.svg":"c5f5","./overlayBg.svg":"b746","./pools.svg":"92c4","./prev-dark.svg":"e9c3","./rate.svg":"ab45","./reload.svg":"b318","./remove.svg":"7e18","./round.svg":"86ef","./router.svg":"097a","./sell.svg":"46d3","./setting.svg":"cc6c","./success.svg":"2764","./swap.svg":"3fb0","./swapTo.svg":"8242","./switch-token.svg":"7a79","./time.svg":"f490","./tokens-empty.svg":"42a0","./topBg.svg":"8a0c","./usdtlogo.svg":"870d","./wallet.svg":"bc38","./zh-hk.svg":"9115"};function o(t){var e=i(t);return n(e)}function i(t){if(!n.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}o.keys=function(){return Object.keys(s)},o.resolve=i,t.exports=o,o.id="31e8"},4160:function(t,e,n){"use strict";var s=n("23e7"),o=n("17c2");s({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},"42a0":function(t,e,n){t.exports=n.p+"img/tokens-empty.3b7fc633.svg"},"44e7":function(t,e,n){var s=n("861d"),o=n("c6b6"),i=n("b622"),a=i("match");t.exports=function(t){var e;return s(t)&&(void 0!==(e=t[a])?!!e:"RegExp"==o(t))}},"46d3":function(t,e,n){t.exports=n.p+"img/sell.687ffac5.svg"},4995:function(t,e,n){t.exports=n.p+"img/downarrow.f4d4f398.svg"},"507c":function(t,e,n){t.exports=n.p+"img/QRcodelogo.cdd3415b.svg"},"553b":function(t,e,n){t.exports=n.p+"img/copy.1cab5f60.svg"},5605:function(t,e,n){t.exports=n.p+"img/icon-exchange.ab419841.svg"},"5dc4":function(t,e,n){t.exports=n.p+"img/apy-bg.12163583.svg"},6547:function(t,e,n){var s=n("a691"),o=n("1d80"),i=function(t){return function(e,n){var i,a,r=String(o(e)),c=s(n),u=r.length;return c<0||c>=u?t?"":void 0:(i=r.charCodeAt(c),i<55296||i>56319||c+1===u||(a=r.charCodeAt(c+1))<56320||a>57343?t?r.charAt(c):i:t?r.slice(c,c+2):a-56320+(i-55296<<10)+65536)}};t.exports={codeAt:i(!1),charAt:i(!0)}},"66a7":function(t,e,n){t.exports=n.p+"img/award-bg.335b07d8.svg"},"755b":function(t,e,n){"use strict";n("970d")},"797b":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"info"},[s("div",{staticClass:"introduce"},[s("div",{staticClass:"header"},[s("div",{staticClass:"token"},[s("img",{attrs:{src:t.token1.logoURI}}),s("div",{staticClass:"token-info"},[s("div",{on:{click:t.openSearch}},[s("h2",[t._v(t._s(t.token1.symbol))]),s("img",{attrs:{src:n("1d4a")}})]),s("span",[t._v(t._s(t.token1.name))])])]),s("div",{staticClass:"address"},[s("span",{domProps:{textContent:t._s(t.token1.address.slice(0,5)+"..."+t.token1.address.slice(-5))}}),s("img",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.token1.address,expression:"token1.address",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.copyDone,expression:"copyDone",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:t.copyError,expression:"copyError",arg:"error"}],attrs:{src:n("553b")}})])]),s("div",{staticClass:"liquidity"},[s("span",[t._v(t._s(t.$t("info.text1"))+" "),s("span",[t._v("$ "+t._s(t.reserveUSD))])]),s("div",{staticClass:"tokens"},[s("div",[s("div",{staticClass:"select",on:{click:function(e){t.showToken0Options=!0}}},[s("span",[t._v(t._s(t.token0.symbol))]),s("img",{attrs:{src:n("1d4a")}}),s("div",{directives:[{name:"show",rawName:"v-show",value:t.showToken0Options,expression:"showToken0Options"}],staticClass:"options"},t._l(t.token0Options,(function(e){return s("span",{key:e.address,domProps:{textContent:t._s(e.symbol)},on:{click:function(n){return n.stopPropagation(),t.selectToken0(e)}}})})),0),s("div",{directives:[{name:"show",rawName:"v-show",value:t.showToken0Options,expression:"showToken0Options"}],staticClass:"overlay",on:{click:function(e){e.stopPropagation(),t.showToken0Options=!1}}})]),s("span",[t._v(t._s(t.reserve0))])]),s("div",[s("span",[t._v(t._s(t.token1.symbol))]),s("span",[t._v(t._s(t.reserve1))])])])])]),s("div",{staticClass:"datas"},[s("div",[s("span",[t._v(t._s(t.$t("info.text6")))]),s("span",[t._v(t._s(t.transactions))])]),s("div",[s("span",[t._v(t._s(t.$t("info.text7")))]),s("span",[t._v("$ "+t._s(t.volume))])])]),s("div",{staticClass:"latest-transactions"},[s("div",{staticClass:"header"},[s("span",[t._v(t._s(t.$t("info.text8")))]),s("div",{staticClass:"filter",on:{click:function(e){t.showOptions=!0}}},[s("img",{attrs:{src:n("1d4a")}}),s("span",[t._v(t._s(t.$t("info.text9")))]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.showOptions,expression:"showOptions"}],staticClass:"options"},[s("span",{on:{click:function(e){return e.stopPropagation(),t.selectType("all")}}},[t._v(t._s(t.$t("info.text14")))]),s("span",{on:{click:function(e){return e.stopPropagation(),t.selectType("sell")}}},[t._v(t._s(t.$t("info.text11")))]),s("span",{on:{click:function(e){return e.stopPropagation(),t.selectType("buy")}}},[t._v(t._s(t.$t("info.text10")))]),s("span",{on:{click:function(e){return e.stopPropagation(),t.selectType("add")}}},[t._v(t._s(t.$t("info.text12")))]),s("span",{on:{click:function(e){return e.stopPropagation(),t.selectType("remove")}}},[t._v(t._s(t.$t("info.text13")))])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.showOptions,expression:"showOptions"}],staticClass:"overlay",on:{click:function(e){e.stopPropagation(),t.showOptions=!1}}})]),s("img",{class:t.reloadClass,attrs:{src:n("b318")},on:{click:t.reload}})]),s("div",{staticClass:"transactions"},t._l(t.transactionsList[t.currentPage],(function(e,o){return s("div",{key:o},[s("div",[s("span",{directives:[{name:"show",rawName:"v-show",value:"buy"===e.type,expression:"item.type === 'buy'"}],class:e.type},[t._v(t._s(t.$t("info.text10")))]),s("span",{directives:[{name:"show",rawName:"v-show",value:"sell"===e.type,expression:"item.type === 'sell'"}],class:e.type},[t._v(t._s(t.$t("info.text11")))]),s("span",{directives:[{name:"show",rawName:"v-show",value:"add"===e.type,expression:"item.type === 'add'"}],class:e.type},[t._v(t._s(t.$t("info.text12")))]),s("span",{directives:[{name:"show",rawName:"v-show",value:"remove"===e.type,expression:"item.type === 'remove'"}],class:e.type},[t._v(t._s(t.$t("info.text13")))]),s("span",[t._v(t._s(e.amount0.toFixed(4))+" "+t._s(t.token1.symbol))])]),s("img",{class:e.type,attrs:{src:n("31e8")("./"+e.type+".svg")}}),s("div",[s("span",[t._v(t._s(e.time))]),s("span",[t._v(t._s(e.amount1.toFixed(4))+" "+t._s(t.token0.symbol))])])])})),0),s("div",{staticClass:"pagination"},[s("img",{attrs:{src:n("e9c3")},on:{click:t.prevPage}}),s("span",[t._v(t._s(t.currentPage+1)+"/"+t._s(t.totalPage))]),s("img",{attrs:{src:n("949e")},on:{click:t.nextPage}})])]),s("search-tokens",{ref:"searchTokens",on:{select:t.selectToken1}})],1)},o=[],i=(n("4de4"),n("4160"),n("fb6a"),n("a9e3"),n("b680"),n("d3b7"),n("ac1f"),n("1276"),n("159b"),n("96cf"),n("1da1")),a=(n("e7e5"),n("d399")),r=n("b9cc"),c=n("b4e9"),u={components:{"search-tokens":function(){return Promise.all([n.e("chunk-11dc367b"),n.e("chunk-a3d9e27a")]).then(n.bind(null,"bab4"))}},data:function(){return{reloadClass:"",token0:c["d"],token1:c["b"],reserve0:0,reserve1:0,reserveUSD:0,transactions:0,volume:0,type:"all",tradeList:[],currentPage:0,pairAddress:null,flag:!0,showOptions:!1,token0Options:c["i"],showToken0Options:!1}},computed:{transactionsList:function(){for(var t=this,e="all"===this.type?this.tradeList:this.tradeList.filter((function(e){return e.type===t.type})),n=[],s=0;s<e.length;s+=10)n.push(e.slice(s,s+10));return n},totalPage:function(){return this.transactionsList.length}},created:function(){this.$contracts&&this.init()},methods:{copyDone:function(){a["a"].success("复制成功！")},copyError:function(t){console.log(t),a["a"].fail("复制失败！")},selectType:function(t){this.type=t,this.showOptions=!1},openSearch:function(){this.$refs.searchTokens.open()},selectToken0:function(t){if(this.showToken0Options=!1,t.symbol===this.token1.symbol)return!1;this.token0=t,this.init()},selectToken1:function(t){if(t.symbol===this.token0.symbol)return!1;this.token1=t,this.init()},reload:function(){var t=this;this.reloadClass="reload",this.getTransactions(this.pairAddress,this.flag);var e=setTimeout((function(){t.type="all",t.currentPage=0,t.reloadClass="",clearTimeout(e)}),1e3)},prevPage:function(){if(0===this.currentPage)return!1;this.currentPage--},nextPage:function(){if(this.currentPage+1===this.totalPage)return!1;this.currentPage++},init:function(){var t=this,e=new this.$web3.BatchRequest,n=new this.$web3.eth.Contract(r,this.token0.address),s=new this.$web3.eth.Contract(r,this.token1.address);this.$contracts.Factory.methods.getPair(this.token0.address,this.token1.address).call({from:this.$address},(function(o,i){if(!o){if(0===Number(i))return!1;t.flag=t.token0.address.toBN().lt(t.token1.address),t.pairAddress=i.toLowerCase(),t.reserveUSD="loading...",t.transactions="loading...",t.volume="loading...",Object(c["g"])(t.pairAddress).then((function(e){e&&(t.reserveUSD=e.reserveUSD.toFixed(0))})),Object(c["e"])(t.pairAddress).then((function(e){if(e){var n="0".toBN(),s="0".toBN();e.pairHourData.forEach((function(t){n=n.plus(t.hourlyTxns),s=s.plus(t.hourlyVolumeUSD)})),t.transactions=n.toFixed(),t.volume=s.toFixed().toFixed(0)}})),e.add(n.methods.balanceOf(t.pairAddress).call.request({from:t.$address})),e.add(s.methods.balanceOf(t.pairAddress).call.request({from:t.$address})),e.requestManager.sendBatch(e.requests,(function(e,n){e||(t.reserve0=n[0].result.decode(["uint256"]).fromWei().toFixed(0),t.reserve1=n[1].result.decode(["uint256"]).fromWei(t.token1.decimals).toFixed(0))})),t.getTransactions(t.pairAddress,t.flag)}}))},formatData:function(t){var e=Math.floor(new Date/1e3)-Number(t);return e<60?"".concat(e,"秒前"):Math.floor(e/60)<60?"".concat(Math.floor(e/60),"分钟前"):Math.floor(e/3600)<24?"".concat(Math.floor(e/3600),"小时前"):"".concat(Math.floor(e/3600/24),"天前")},getTransactions:function(t,e){var n=this;return Object(i["a"])(regeneratorRuntime.mark((function s(){var o,i,a,r,u;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,Object(c["f"])(t);case 2:o=s.sent,i=o.burns,a=o.mints,r=o.swaps,u=[],i.forEach((function(t){u.push({type:"remove",amount0:t["amount".concat(Number(!e))],amount1:t["amount".concat(Number(e))],timestamp:Number(t.timestamp),hash:t.id.split("-")[0],time:n.formatData(t.timestamp)})})),a.forEach((function(t){u.push({type:"add",amount0:t["amount".concat(Number(!e))],amount1:t["amount".concat(Number(e))],timestamp:Number(t.timestamp),hash:t.id.split("-")[0],time:n.formatData(t.timestamp)})})),e?r.forEach((function(t){t.amount1In>0?u.push({type:"buy",amount0:t.amount0Out,amount1:t.amount1In,timestamp:Number(t.timestamp),hash:t.id.split("-")[0],time:n.formatData(t.timestamp)}):u.push({type:"sell",amount0:t.amount0In,amount1:t.amount1Out,timestamp:Number(t.timestamp),hash:t.id.split("-")[0],time:n.formatData(t.timestamp)})})):r.forEach((function(t){t.amount0In>0?u.push({type:"buy",amount0:t.amount1Out,amount1:t.amount0In,timestamp:Number(t.timestamp),hash:t.id.split("-")[0],time:n.formatData(t.timestamp)}):u.push({type:"sell",amount0:t.amount1In,amount1:t.amount0Out,timestamp:Number(t.timestamp),hash:t.id.split("-")[0],time:n.formatData(t.timestamp)})})),n.tradeList=u.sort((function(t,e){return e.timestamp-t.timestamp}));case 11:case"end":return s.stop()}}),s)})))()}}},l=u,p=l,d=(n("755b"),n("2877")),f=Object(d["a"])(p,s,o,!1,null,"5c50df4d",null);e["default"]=f.exports},"7a79":function(t,e,n){t.exports=n.p+"img/switch-token.7bcb0fc7.svg"},"7e18":function(t,e,n){t.exports=n.p+"img/remove.4f2b882c.svg"},8242:function(t,e,n){t.exports=n.p+"img/swapTo.50af4a4a.svg"},"86ef":function(t,e,n){t.exports=n.p+"img/round.a3dd7c37.svg"},"870d":function(t,e,n){t.exports=n.p+"img/usdtlogo.00534dc2.svg"},"8a0c":function(t,e,n){t.exports=n.p+"img/topBg.1ad0aa34.svg"},"8aa5":function(t,e,n){"use strict";var s=n("6547").charAt;t.exports=function(t,e,n){return e+(n?s(t,e).length:1)}},"8dd5":function(t,e,n){t.exports=n.p+"img/invitelistAddress.54d90376.svg"},9263:function(t,e,n){"use strict";var s=n("ad6d"),o=n("9f7f"),i=RegExp.prototype.exec,a=String.prototype.replace,r=i,c=function(){var t=/a/,e=/b*/g;return i.call(t,"a"),i.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),u=o.UNSUPPORTED_Y||o.BROKEN_CARET,l=void 0!==/()??/.exec("")[1],p=c||l||u;p&&(r=function(t){var e,n,o,r,p=this,d=u&&p.sticky,f=s.call(p),g=p.source,v=0,m=t;return d&&(f=f.replace("y",""),-1===f.indexOf("g")&&(f+="g"),m=String(t).slice(p.lastIndex),p.lastIndex>0&&(!p.multiline||p.multiline&&"\n"!==t[p.lastIndex-1])&&(g="(?: "+g+")",m=" "+m,v++),n=new RegExp("^(?:"+g+")",f)),l&&(n=new RegExp("^"+g+"$(?!\\s)",f)),c&&(e=p.lastIndex),o=i.call(d?n:p,m),d?o?(o.input=o.input.slice(v),o[0]=o[0].slice(v),o.index=p.lastIndex,p.lastIndex+=o[0].length):p.lastIndex=0:c&&o&&(p.lastIndex=p.global?o.index+o[0].length:e),l&&o&&o.length>1&&a.call(o[0],n,(function(){for(r=1;r<arguments.length-2;r++)void 0===arguments[r]&&(o[r]=void 0)})),o}),t.exports=r},"949e":function(t,e,n){t.exports=n.p+"img/next-light.1aeebeb0.svg"},"970d":function(t,e,n){},"9f7f":function(t,e,n){"use strict";var s=n("d039");function o(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=s((function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=s((function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},ab45:function(t,e,n){t.exports=n.p+"img/rate.54bc2e23.svg"},ac1f:function(t,e,n){"use strict";var s=n("23e7"),o=n("9263");s({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},b318:function(t,e,n){t.exports=n.p+"img/reload.56a7318d.svg"},b746:function(t,e,n){t.exports=n.p+"img/overlayBg.0f8ca717.svg"},bc38:function(t,e,n){t.exports=n.p+"img/wallet.30bdd8fa.svg"},c5f5:function(t,e,n){t.exports=n.p+"img/not-trade.d9865208.svg"},ceca:function(t,e,n){t.exports=n.p+"img/countdown.23d92b93.svg"},d784:function(t,e,n){"use strict";n("ac1f");var s=n("6eeb"),o=n("d039"),i=n("b622"),a=n("9263"),r=n("9112"),c=i("species"),u=!o((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),l=function(){return"$0"==="a".replace(/./,"$0")}(),p=i("replace"),d=function(){return!!/./[p]&&""===/./[p]("a","$0")}(),f=!o((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,p){var g=i(t),v=!o((function(){var e={};return e[g]=function(){return 7},7!=""[t](e)})),m=v&&!o((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[c]=function(){return n},n.flags="",n[g]=/./[g]),n.exec=function(){return e=!0,null},n[g](""),!e}));if(!v||!m||"replace"===t&&(!u||!l||d)||"split"===t&&!f){var h=/./[g],b=n(g,""[t],(function(t,e,n,s,o){return e.exec===a?v&&!o?{done:!0,value:h.call(e,n,s)}:{done:!0,value:t.call(n,e,s)}:{done:!1}}),{REPLACE_KEEPS_$0:l,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),x=b[0],y=b[1];s(String.prototype,t,x),s(RegExp.prototype,g,2==e?function(t,e){return y.call(t,this,e)}:function(t){return y.call(t,this)})}p&&r(RegExp.prototype[g],"sham",!0)}},da4c:function(t,e,n){t.exports=n.p+"img/miningBubbleTop.ac0aafc5.svg"},e9c3:function(t,e,n){t.exports=n.p+"img/prev-dark.47721052.svg"},eef4:function(t,e,n){t.exports=n.p+"img/add.19822149.svg"},f3f6:function(t,e,n){t.exports=n.p+"img/buy.6c71700e.svg"},f490:function(t,e,n){t.exports=n.p+"img/time.8fb1abaf.svg"},f9d4:function(t,e,n){t.exports=n.p+"img/miningBottom.6b31fc4f.svg"},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);