(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0b0e95fc"],{"020e":function(e,t,n){"use strict";n("f113")},c97d:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"exchange-container"},[n("span",[e._v(e._s(e.$t("exchangeContainer.text1")))]),n("div",{staticClass:"exchange-box"},[n("genesis-exchange",{directives:[{name:"show",rawName:"v-show",value:"exchange"===e.showPopup,expression:"showPopup === 'exchange'"}],attrs:{exchanged:e.exchanged,maxQuota:e.maxQuota},on:{reload:e.init}}),n("my-exchange",{directives:[{name:"show",rawName:"v-show",value:"myExchange"===e.showPopup,expression:"showPopup === 'myExchange'"}],attrs:{totalAward:e.totalAward,exchangeds:e.exchangeds,exchanged:e.exchanged},on:{reload:e.init}})],1)])},o=[],c=(n("b680"),n("d3b7"),n("5530")),s=n("2f62"),i={components:{"genesis-exchange":function(){return n.e("chunk-d5fe8b8a").then(n.bind(null,"4e77"))},"my-exchange":function(){return n.e("chunk-7a952cec").then(n.bind(null,"2f51"))}},computed:Object(c["a"])({},Object(s["b"])(["showPopup"])),data:function(){return{exchanged:0,totalAward:0,maxQuota:0,exchangeds:0}},created:function(){this.$contracts&&this.init()},methods:{init:function(){var e=this;this.$contracts.Exchange.methods.userInfos(this.$address).call({from:this.$address},(function(t,n){t||(e.exchanged=n.totalPay.fromWei(),e.totalAward=n.totalReceive.fromWei(),e.exchangeds=n.totalPay.toBN().times(30).minus(n.totalReceive).toFixed().fromWei())})),this.$contracts.Exchange.methods.maxAmount().call({from:this.$address},(function(t,n){t||(e.maxQuota=n.fromWei())}))}}},h=i,r=h,d=(n("020e"),n("2877")),u=Object(d["a"])(r,a,o,!1,null,"65b2f50d",null);t["default"]=u.exports},f113:function(e,t,n){}}]);