(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c2b56b60"],{"08c8":function(e,o,n){"use strict";n.r(o);n("caad");var a=function(){var e=this,o=e._self._c;e._self._setupProxy;return o("van-overlay",{attrs:{show:!["none","award"].includes(e.showPopup),"lock-scroll":!1},on:{click:function(o){return e.$store.commit("showPopup","none")}}},[o("div",{staticClass:"popup-container",on:{click:function(e){e.stopPropagation()}}},[o("pledge-mining",{directives:[{name:"show",rawName:"v-show",value:["pledge","redeem"].includes(e.showPopup),expression:"['pledge', 'redeem'].includes(showPopup)"}],attrs:{pledgeLp:e.pledgeLp},on:{reload:function(o){return e.$emit("reload")}}}),o("BoardofDirectors",{directives:[{name:"show",rawName:"v-show",value:["BoardofDirectors","redeems"].includes(e.showPopup),expression:"['BoardofDirectors', 'redeems'].includes(showPopup)"}],attrs:{pledgeLp:e.pledgeLp},on:{reload:function(o){return e.$emit("reload")}}}),o("destroy-mining",{directives:[{name:"show",rawName:"v-show",value:"destroy"===e.showPopup,expression:"showPopup === 'destroy'"}],on:{reload:function(o){return e.$emit("reload")}}}),o("activation-mining",{directives:[{name:"show",rawName:"v-show",value:"activation"===e.showPopup,expression:"showPopup === 'activation'"}],on:{reload:function(o){return e.$emit("reload")}}}),o("data-migrate",{directives:[{name:"show",rawName:"v-show",value:"migrate"===e.showPopup,expression:"showPopup === 'migrate'"}]})],1)])},i=[],r=(n("f1dc"),n("6e47")),t=n("2f62"),s={props:{pledgeLp:[Number,String]},components:{[r["a"].name]:r["a"],"pledge-mining":()=>n.e("chunk-42465be4").then(n.bind(null,"5eba")),"destroy-mining":()=>n.e("chunk-7fa7afde").then(n.bind(null,"e981")),"activation-mining":()=>n.e("chunk-7b20be36").then(n.bind(null,"1527")),BoardofDirectors:()=>n.e("chunk-6fc68668").then(n.bind(null,"5dfa")),"data-migrate":()=>n.e("chunk-20ae0c01").then(n.bind(null,"f208"))},computed:{...Object(t["b"])(["showPopup"])}},c=s,p=c,u=(n("2e0a"),n("2877")),d=Object(u["a"])(p,a,i,!1,null,"325a58ec",null);o["default"]=d.exports},"1ca7":function(e,o,n){},"2e0a":function(e,o,n){"use strict";n("1ca7")}}]);