(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Mining"],{1393:function(t,e,n){"use strict";var i=n("23e7"),s=n("857a"),a=n("af03");i({target:"String",proto:!0,forced:a("big")},{big:function(){return s(this,"big","","")}})},"22c7":function(t,e,n){t.exports=n.p+"img/miningBubbleBottom.de7f3422.png"},"24ad":function(t,e,n){},"56a2":function(t,e,n){t.exports=n.p+"img/miningBubbleCenter.9b7f9bf0.png"},8102:function(t,e,n){t.exports=n.p+"img/miningSetting.906eeaed.png"},"81d5":function(t,e,n){"use strict";var i=n("7b0b"),s=n("23cb"),a=n("50c4");t.exports=function(t){var e=i(this),n=a(e.length),o=arguments.length,r=s(o>1?arguments[1]:void 0,n),u=o>2?arguments[2]:void 0,c=void 0===u?n:s(u,n);while(c>r)e[r++]=t;return e}},"857a":function(t,e,n){var i=n("1d80"),s=/"/g;t.exports=function(t,e,n,a){var o=String(i(t)),r="<"+e;return""!==n&&(r+=" "+n+'="'+String(a).replace(s,"&quot;")+'"'),r+">"+o+"</"+e+">"}},"89b4":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"box"},[i("iframe",{attrs:{id:"iframe",src:"static/iframe/index.html",frameborder:"0",width:"100%",height:"100%"}}),i("img",{attrs:{src:n("8102")},on:{click:function(e){t.showMenu=!0}}}),i("van-overlay",{attrs:{show:t.showMenu},on:{click:function(e){t.showMenu=!1}}},[i("div",{staticClass:"menus",on:{click:function(t){t.stopPropagation()}}},[i("div",{staticClass:"title"},[i("img",{attrs:{src:n("9b19")}}),i("van-icon",{attrs:{name:"cross"},on:{click:function(e){t.showMenu=!1}}})],1),i("div",{staticClass:"subitem",on:{click:function(e){return t.$router.push("/")}}},[t._v("Swap")]),i("div",{staticClass:"subitem",on:{click:function(e){return t.showPopup("pledge")}}},[t._v(t._s(t.$t("mining.text1")))]),i("div",{staticClass:"subitem",on:{click:function(e){return t.showPopup("destroy")}}},[t._v(t._s(t.$t("mining.text2")))]),i("div",{staticClass:"subitem",on:{click:t.showinvitelists}},[t._v(t._s(t.$t("mining.text3")))]),i("div",{staticClass:"subitem",on:{click:function(e){t.showinvitelist=!0}}},[t._v(t._s(t.$t("mining.text4")))]),i("div",{staticClass:"subitem",on:{click:function(e){return t.$router.push("/ranking")}}},[t._v(t._s(t.$t("mining.text5")))]),i("div",{staticClass:"subitem",on:{click:function(e){return t.showPopup("exchange")}}},[t._v(t._s(t.$t("mining.text6")))]),i("div",{staticClass:"subitem",on:{click:function(e){return t.showPopup("BoardofDirectors")}}},[t._v(t._s(t.$t("mining.text14")))])])]),i("div",{staticClass:"miningInfo"},[i("h1",[t._v("BHB")]),i("div",{staticClass:"miningInfoBox"},[t._m(0),i("div",{staticClass:"info"},[i("div",[i("div",[t._v(t._s(t.$t("mining.text7")))]),i("span",[t._v(t._s(t.minePool.toFixed(0)))])]),i("div",[i("div",[t._v(t._s(t.$t("mining.text1")))]),i("span",[t._v(t._s(t.pledgeLp.toFixed(2)))])]),i("div",[i("div",[t._v(t._s(t.$t("mining.text8")))]),i("span",[t._v(t._s(t.destroyPower))])])]),i("span",{staticClass:"line"}),i("div",{staticClass:"info"},[i("div",[i("div",[t._v(t._s(t.$t("mining.text9")))]),i("span",[t._v(t._s(t.todayMine))])]),i("div",[i("div",[t._v(t._s(t.$t("mining.text10")))]),i("span",[t._v(t._s(t.pledgeMining.toFixed(2)))])]),i("div",[i("div",[t._v(t._s(t.$t("mining.text11")))]),i("span",[t._v(t._s(t.destroyMining.toFixed(2)))])])]),t._m(1)])]),i("div",{staticClass:"income"},[i("div",{staticClass:"bank"}),t._m(2),t._l(t.bigBubble,(function(e,n){return i("div",{key:n,staticClass:"bubble",style:e.style,on:{click:function(e){return t.showPopup("award")}}},[i("div",{staticClass:"big",class:{notAmount:!e.amount}}),i("span",{directives:[{name:"show",rawName:"v-show",value:e.amount,expression:"item.amount"}]},[t._v(t._s(e.amount))])])})),t._l(t.mdBubble,(function(e,n){return i("div",{key:n+1e3,staticClass:"bubble",style:e.style,on:{click:function(e){return t.showPopup("award")}}},[i("div",{staticClass:"middle",class:{notAmount:!e.amount}}),i("span",{directives:[{name:"show",rawName:"v-show",value:e.amount,expression:"item.amount"}]},[t._v(t._s(e.amount))])])})),t._l(t.slBubble,(function(e,n){return i("div",{key:n+2e3,staticClass:"bubble",style:e.style,on:{click:function(e){return t.showPopup("award")}}},[i("div",{staticClass:"small",class:{notAmount:!e.amount}}),i("span",{directives:[{name:"show",rawName:"v-show",value:e.amount,expression:"item.amount"}]},[t._v(t._s(e.amount))])])}))],2),i("div",{staticClass:"miningBottom"},[i("span",{on:{click:function(e){return t.showPopup("pledge")}}},[t._v(t._s(t.$t("mining.text15")))]),0==t.Hierarchy?i("span",{on:{click:function(e){return t.showPopup("activation")}}},[t._v(t._s(t.$t("mining.text12")))]):i("span",{on:{click:function(e){return t.showPopup("award")}}},[t._v(t._s(t.$t("mining.text13")))]),i("span",{on:{click:function(e){return t.showPopup("destroy")}}},[t._v(t._s(t.$t("mining.text16")))])]),i("popup-container",{attrs:{pledgeLp:t.pledgeLp},on:{reload:t.init}}),i("mining-award",{attrs:{pledgeMining:t.pledgeMining,destroyMining:t.destroyMining,totalMining:t.totalMining,destroyPower:t.destroyPower,receivedestroy:t.receivedestroy},on:{reload:t.init}}),i("invitationCard",{directives:[{name:"show",rawName:"v-show",value:t.showinvitationCard,expression:"showinvitationCard"}],on:{getBind:t.Closeinvitee}}),i("invitelist",{directives:[{name:"show",rawName:"v-show",value:t.showinvitelist,expression:"showinvitelist"}],on:{showinvite:t.showinvite}})],1)},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"left"},[i("img",{attrs:{src:n("bea2")}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"right"},[i("img",{attrs:{src:n("bea2")}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"bubbleImgBox"},[i("img",{staticClass:"bubble-top",attrs:{src:n("da4c")}}),i("img",{staticClass:"bubble-center",attrs:{src:n("56a2")}}),i("img",{staticClass:"bubble-bottom",attrs:{src:n("22c7")}})])}];n("99af"),n("b0c0"),n("a9e3"),n("b680"),n("d3b7");function a(t){if(Array.isArray(t))return t}n("a4d3"),n("e01a"),n("d28b"),n("3ca3"),n("ddb0");function o(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],i=!0,s=!1,a=void 0;try{for(var o,r=t[Symbol.iterator]();!(i=(o=r.next()).done);i=!0)if(n.push(o.value),e&&n.length===e)break}catch(u){s=!0,a=u}finally{try{i||null==r["return"]||r["return"]()}finally{if(s)throw a}}return n}}var r=n("06c5");function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t,e){return a(t)||o(t,e)||Object(r["a"])(t,e)||u()}n("96cf");var d=n("1da1"),l=n("ade3"),m=(n("c3a6"),n("ad06")),f=(n("66b9"),n("b650")),h=(n("f1dc"),n("6e47"));n("cb29"),n("c975"),n("d81d"),n("fb6a"),n("1393"),n("c96a");function v(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function p(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function g(t,e,n){return e&&p(t.prototype,e),n&&p(t,n),t}var b,w=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;v(this,t),this.total=e.toBN(),this.big=[],this.middle=[],this.small=[]}return g(t,[{key:"init",value:function(){var t=this;if(this.total.lt(.01))return this.big=new Array(3).fill().map((function(){return 0})),this.middle=new Array(3).fill().map((function(){return 0})),this.small=new Array(3).fill().map((function(){return 0})),this.big=this.big.map((function(e){return{amount:e,style:t.randomOffset(0,10),yellow:Math.round(Math.random())}})),this.middle=this.middle.map((function(e){return{amount:e,style:t.randomOffset(0,10),yellow:Math.round(Math.random())}})),this.small=this.small.map((function(e){return{amount:e,style:t.randomOffset(0,10),yellow:Math.round(Math.random())}})),[this.big,this.middle,this.small];var e=Math.floor(this.total.div(4e3).toFixed()),n=Math.floor(this.total.minus(4e3*e).div(1e3).toFixed()),i=Math.floor(this.total.minus(4e3*e).minus(1e3*n).div(500).toFixed()),s=y(this.total.minus(4e3*e).minus(1e3*n).minus(500*i).toFixed());return e>0&&(this.big=new Array(e).fill().map((function(){return 4e3}))),n>0&&(this.middle=new Array(n).fill().map((function(){return 1e3}))),i>0&&(this.small=new Array(i).fill().map((function(){return 500}))),s>0&&this.small.push(s),this.big=this.big.map((function(e){return{amount:e,style:t.randomOffset(0,10),yellow:Math.round(Math.random())}})),this.middle=this.middle.map((function(e){return{amount:e,style:t.randomOffset(0,10),yellow:Math.round(Math.random())}})),this.small=this.small.map((function(e){return{amount:e,style:t.randomOffset(0,10),yellow:Math.round(Math.random())}})),[this.big,this.middle,this.small]}},{key:"randomOffset",value:function(t,e){return{top:"".concat(parseInt(Math.random()*(40-t+1)+t,10),"%"),left:"".concat(parseInt(Math.random()*(80-e+1)+e,10),"%")}}}]),t}();function y(t){var e="string"===typeof t?t:"".concat(t),n=e.indexOf(".");return n>0?e.slice(n+1).length<=2?Number(e):Number(e.slice(0,n+3)):Number(e)}var k={components:(b={},Object(l["a"])(b,h["a"].name,h["a"]),Object(l["a"])(b,f["a"].name,f["a"]),Object(l["a"])(b,m["a"].name,m["a"]),Object(l["a"])(b,"popup-container",(function(){return n.e("chunk-945187e6").then(n.bind(null,"08c8"))})),Object(l["a"])(b,"mining-award",(function(){return n.e("chunk-2d13b192").then(n.bind(null,"5332"))})),Object(l["a"])(b,"invitationCard",(function(){return n.e("chunk-5cfc157a").then(n.bind(null,"cd51"))})),Object(l["a"])(b,"invitelist",(function(){return n.e("chunk-009cce48").then(n.bind(null,"213e"))})),b),data:function(){return{showMenu:!1,showinvitationCard:!1,showinvitelist:!1,bigBubble:[],mdBubble:[],slBubble:[],minePool:0,todayMine:0,pledgeLp:0,pledgeMining:0,destroyPower:0,destroyMining:0,totalMining:0,receivedestroy:0,Hierarchy:0}},created:function(){this.$contracts&&this.init()},methods:{init:function(){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function e(){var n,i,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$contracts.Family.methods.depthOf(t.$address).call({from:t.$address});case 2:t.Hierarchy=e.sent,t.$route.query.invitationCard&&0==t.Hierarchy&&(console.log(t.$route.query.invitationCard),t.passbindaddress=t.$route.query.invitationCard,t.showPopup("activation")),n=new t.$web3.BatchRequest,i=86400*Math.floor(new Date/1e3/86400),s=i+86400,n.add(t.$contracts.BHBToken.methods.balanceOf(t.$contracts.TokenBiggings._address).call.request({from:t.$address})),n.add(t.$contracts.TokenBiggings.methods.getOutPut(i,s).call.request({from:t.$address})),n.add(t.$contracts.TokenBiggings.methods.userPoolInfo(0,t.$address).call.request({from:t.$address})),n.add(t.$contracts.TokenBiggings.methods.earned(0,t.$address).call.request({from:t.$address})),n.add(t.$contracts.TokenBiggings.methods.userPoolInfo(1,t.$address).call.request({from:t.$address})),n.add(t.$contracts.TokenBiggings.methods.earned(1,t.$address).call.request({from:t.$address})),n.add(t.$contracts.BHBToken.methods.balanceOf(t.$contracts.Govern._address).call.request({from:t.$address})),n.add(t.$contracts.TokenBiggings.methods.earned(2,t.$address).call.request({from:t.$address})),n.requestManager.sendBatch(n.requests,(function(e,n){if(!e){var i=n[2].result.decode([{name:"supply",type:"uint256"},{name:"reward",type:"uint256"},{name:"taked",type:"uint256"},{name:"rewardDebt",type:"uint256"}]),s=n[4].result.decode([{name:"supply",type:"uint256"},{name:"reward",type:"uint256"},{name:"taked",type:"uint256"},{name:"rewardDebt",type:"uint256"}]),a=n[3].result.decode(["uint256"]).fromWei(),o=n[7].result.decode(["uint256"]).fromWei();t.minePool=n[0].result.decode(["uint256"]).fromWei(),t.todayMine=n[1].result.decode(["uint256"]).fromWei().toFixed(2),t.pledgeLp=i.supply.fromWei(),t.pledgeMining=a.toBN().plus(o).toFixed(),t.destroyPower=s.supply.fromWei().toFixed(0),t.destroyMining=n[5].result.decode(["uint256"]).fromWei(),t.totalMining=a.toBN().plus(i.taked.fromWei()).plus(t.destroyMining).plus(s.taked.fromWei()).toFixed(),t.receivedestroy=n[6].result.decode(["uint256"]).fromWei().toFixed(2);var r=new w(a.toBN().plus(t.destroyMining).plus(o).toFixed()),u=r.init(),d=c(u,3),l=d[0],m=d[1],f=d[2];t.bigBubble=l,t.mdBubble=m,t.slBubble=f}}));case 16:case"end":return e.stop()}}),e)})))()},showinvitelists:function(){this.Hierarchy>0?this.showinvitationCard=!0:(this.$store.commit("showPopup","activation"),this.showMenu=!1)},showPopup:function(t){this.$store.commit("showPopup",t),this.showMenu=!1},Closeinvitee:function(){this.showinvitationCard=!1},showinvite:function(){this.showinvitelist=!1},formatDate:function(t){var e=new Date(1e3*Number(t)),n=e.getFullYear(),i=e.getMonth()+1,s=e.getDate(),a=e.getHours(),o=e.getMinutes();e.getSeconds();return"".concat(n,"/").concat(i,"/").concat(s," ").concat(a,":").concat(o)}}},A=k,x=A,M=(n("e2c1"),n("2877")),_=Object(M["a"])(x,i,s,!1,null,"239d1684",null);e["default"]=_.exports},af03:function(t,e,n){var i=n("d039");t.exports=function(t){return i((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},bea2:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAEgCAYAAAC9/vN4AAAE1ElEQVR4Xu2azU+UVxTGf2cGhgEiKiqYFkVQqILFtCbWBGkaw4bEhd27c6Nx01TBjVs3Q03soibGf8EEY5rGfplGMWrSxo8qakEQP2BUsAwMoDIzp7nzMsPHDDNq0t25u/e+9z5z59znnHvP8x5hUbt/qb3ZJ7Jf0FZEKhV9LUgvqmdjb6bObGn9YXT+FEk9DNz4ZkVssrAL5KvFoPOeo6p6rL6l8/tUXxLg9uWDK4tZdg2hPsfk9CtVjte3hI65jiRAb3fHT0Dbu0z2xqiC7K3bFTovfd2H2xS/A0i30uUrKVu1mkCwmEQ8zpupKK/Cw8Rm3s4f1rcpONYgvZc7uhD2pt6sqVrPsvLVGYtxQM8H+5mOTqTfxVXbpLe74yFQ63qXla9iTVX1kv8kHpvhyYN7JOIx748k9KgDmARKXEdV/ZbksnO1kWdPGB99mRpy0gGoe/L5/FQ3NiGS3tmsONGxV7x4/MhbAXo6DRAoClL1SUPejXgdjTLU/48BmA2MB+YLWDzAbIDZwB2I5gtmA+OBd4U0X8hqg/YISNmHXLZFNSR9l9tvqUhTYSDAus1b897WpyfGGR7om02dOORSnhMI37qeDVu3JfOGXC3y8jmjw8+SiZdfEjXSf+VwdVz994Hg2g0bKSlbnhMg/OghU+MRN/9cXUvn117ad6X9ICqnCgoDybTH58++inS2ooTjwvbNu0JD6fymr7sjpNBeGAxSUVVNUUlpeiWqSmTkBf+Gh9BEYqQA3VPT8t11N2BBgtR76cg+8fk6FdYGiosJlpQSn4nxeipKPBZzy77g9yUO1DafGEyhZ2RY4Z+PlE6UsFuRHSAVjv5CYrDAJxdrmjtvLjZQ7hQt76Yu+gvvMD5jiK3AjJjhC0ak2Th5R5sR9qO0IlQ6d3ZBC+Usfs7IFsmupemArmCaLpScWhrCMWmQhVqa3taV+LkGs1rakzAMDEFkAgKFUL4cGmuhJC0RHZdGmdPS9K56WpqTyP66B4+HM3e0wA9ffAqVqzwFyM9e2SznRe+qE+E8La3/Kdx8sDQdigqhdScUBdyYPqZpcABdMKul/XoVJqZy86mpDjatT41pcwCelvZ2Bn68lJ+MVZWwY/YIVI46AE9LG5+E35wd87TVK+DL7d4g4aQDSGppHwQApw3AbIDxwHmQ+YLZwHjgHS3mC2YD44H5Quo2avFgQTyITsEvV/Pd1aGiHHZ9tsCIEaAsme6c/wPiidwgG9fBttkyBSEkekdvITQlZ125Ac9f5QbY2QQfrfHGKIccQFpLY3Iafr8OsXh2kI8rvMQrNV2oEe3RapSkluYlHlH4swfG5uoMkv1166GhFuZksnPSKJ6Wpj16EOVU+medPSJRGB2DYBG4NMfL1FItzBu2y+cyp6Vpj4ZQ2vNvAyPAHmmUTC1N/9Z9+OgE1i4BdAHhgDTI0lqa3tJSAuwmzg6EpJYGuAkXpVFMS8tiWVPzTM1ztMjggVWFed5iVWFWFZbvaLMPlvbR1nHEeGA2MB540dJ8wWxgPDBfSN2dLB78P/HAqsIcw6wqLF+Okvu9yUAmA2WVgd6XVkakLERSqwqzqrD3LSuzL98u9tgXT7OB8cA7hc0XzAbGA/OF1J3c4oHFA4sHGfHAqsKsKmyebPG+VWH/AZeJGfPTtefJAAAAAElFTkSuQmCC"},c3a6:function(t,e,n){"use strict";n("68ef"),n("9d70"),n("3743")},c96a:function(t,e,n){"use strict";var i=n("23e7"),s=n("857a"),a=n("af03");i({target:"String",proto:!0,forced:a("small")},{small:function(){return s(this,"small","","")}})},cb29:function(t,e,n){var i=n("23e7"),s=n("81d5"),a=n("44d2");i({target:"Array",proto:!0},{fill:s}),a("fill")},da4c:function(t,e,n){t.exports=n.p+"img/miningBubbleTop.ac0aafc5.svg"},e2c1:function(t,e,n){"use strict";n("24ad")},f1dc:function(t,e,n){"use strict";n("68ef"),n("a71a")}}]);