(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c0acefb2","chunk-2524cad3"],{"03e1":function(e,t,i){"use strict";i("b9be")},"515d":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("van-overlay",{attrs:{show:e.show}},[t("div",{staticClass:"slippage-setting"},[t("div",{staticClass:"header"},[t("h2",[e._v(e._s(e.$t("slippageSetting.text1")))]),t("van-icon",{attrs:{name:"cross"},on:{click:e.close}})],1),t("div",{staticClass:"content"},[t("span",{staticClass:"title"},[e._v(e._s(e.$t("slippageSetting.text2")))]),t("div",{staticClass:"buttons"},[t("van-button",{class:.1==e.slippagePlaceholder?"active":"",attrs:{disabled:e.checked},on:{click:function(t){e.slippagePlaceholder=.1}}},[e._v("0.1%")]),t("van-button",{class:.5==e.slippagePlaceholder?"active":"",attrs:{disabled:e.checked},on:{click:function(t){e.slippagePlaceholder=.5}}},[e._v("0.5%")]),t("van-button",{class:1==e.slippagePlaceholder?"active":"",attrs:{disabled:e.checked},on:{click:function(t){e.slippagePlaceholder=1}}},[e._v("1%")])],1),t("div",{staticClass:"input"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.slippage,expression:"slippage"}],attrs:{type:"number",readonly:e.checked,placeholder:e.slippagePlaceholder},domProps:{value:e.slippage},on:{input:[function(t){t.target.composing||(e.slippage=t.target.value)},e.input]}}),t("span",[e._v("%")])]),t("span",{staticClass:"title"},[e._v(e._s(e.$t("slippageSetting.text3")))]),t("div",{staticClass:"deadline"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.deadline,expression:"deadline"}],attrs:{type:"number",placeholder:e.deadlinePlaceholder},domProps:{value:e.deadline},on:{input:function(t){t.target.composing||(e.deadline=t.target.value)}}}),t("span",[e._v(e._s(e.$t("slippageSetting.text4")))])]),t("div",{staticClass:"audio"},[t("span",[e._v(e._s(e.$t("slippageSetting.text5")))]),t("van-switch",{attrs:{size:"20px","inactive-color":"#E4E4E4","active-color":"#96C3F2"},on:{change:e.switchChange},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}})],1)])])])},s=[],l=(i("68ef"),i("e3b3"),i("d9d2"),i("d282")),n=i("ea8e"),c={size:[Number,String],value:null,loading:Boolean,disabled:Boolean,activeColor:String,inactiveColor:String,activeValue:{type:null,default:!0},inactiveValue:{type:null,default:!1}},o=i("78eb"),d=i("543e"),h=Object(l["a"])("switch"),p=h[0],r=h[1],g=p({mixins:[o["a"]],props:c,computed:{checked:function(){return this.value===this.activeValue},style:function(){return{fontSize:Object(n["a"])(this.size),backgroundColor:this.checked?this.activeColor:this.inactiveColor}}},methods:{onClick:function(e){if(this.$emit("click",e),!this.disabled&&!this.loading){var t=this.checked?this.inactiveValue:this.activeValue;this.$emit("input",t),this.$emit("change",t)}},genLoading:function(){var e=this.$createElement;if(this.loading){var t=this.checked?this.activeColor:this.inactiveColor;return e(d["a"],{class:r("loading"),attrs:{color:t}})}}},render:function(){var e=arguments[0],t=this.checked,i=this.loading,a=this.disabled;return e("div",{class:r({on:t,loading:i,disabled:a}),attrs:{role:"switch","aria-checked":String(t)},style:this.style,on:{click:this.onClick}},[e("div",{class:r("node")},[this.genLoading()])])}}),u=(i("66b9"),i("b650")),v=(i("c3a6"),i("ad06")),m=(i("f1dc"),i("6e47")),f=(i("caad"),{components:{[m["a"].name]:m["a"],[v["a"].name]:v["a"],[u["a"].name]:u["a"],[g.name]:g},data(){return{show:!1,checked:!1,slippage:"",slippagePlaceholder:"0.1",slippageStore:"",deadline:"",deadlinePlaceholder:"20"}},created(){const e=JSON.parse(localStorage.getItem("tradeSetting"));e&&(this.slippagePlaceholder=e.slippage,this.deadlinePlaceholder=e.deadline,this.checked=e.checked,this.$store.commit("slippage",e.slippage),this.$store.commit("deadline",e.deadline.toBN().times(60).toFixed()))},methods:{open(){this.show=!0},close(){const e=this.slippage.length>0?this.slippage:this.slippagePlaceholder,t=this.deadline.length>0?this.deadline:this.deadlinePlaceholder;this.$store.commit("slippage",e),this.$store.commit("deadline",t.toBN().times(60).toFixed()),localStorage.setItem("tradeSetting",JSON.stringify({slippage:e,deadline:t,checked:this.checked})),this.show=!1},input(){return this.slippage.length<=0&&this.slippageStore.length<=0?(this.slippagePlaceholder="0.5",!1):this.slippage.length<=0?(this.slippagePlaceholder=this.slippageStore,this.slippageStore="",!1):(["0.1","0.5","1"].includes(this.slippage)?this.slippageStore=this.slippage:this.slippageStore.length<=0&&(this.slippageStore=this.slippagePlaceholder),void(this.slippagePlaceholder=this.slippage))},switchChange(){this.slippage=this.checked?"100":"",this.input()}}}),b=f,k=b,S=(i("03e1"),i("a35e"),i("2877")),C=Object(S["a"])(k,a,s,!1,null,"6b54ecc4",null);t["default"]=C.exports},"78eb":function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));var a={inject:{vanField:{default:null}},watch:{value:function(){var e=this.vanField;e&&(e.resetValidation(),e.validateWithTrigger("onChange"))}},created:function(){var e=this.vanField;e&&!e.children&&(e.children=this)}}},a35e:function(e,t,i){"use strict";i("b20d")},b20d:function(e,t,i){},b9be:function(e,t,i){},c3a6:function(e,t,i){"use strict";i("68ef"),i("9d70"),i("3743")},d9d2:function(e,t,i){},f1dc:function(e,t,i){"use strict";i("68ef"),i("a71a")}}]);