(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-20ae0c01"],{"8a7d":function(t,s,a){"use strict";a("e6d5")},e6d5:function(t,s,a){},f208:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t._self._c;t._self._setupProxy;return s("div",{staticClass:"data-migrate"},[s("span",{staticClass:"title"},[t._v(t._s(t.$t("migrate.text1")))]),s("div",{staticClass:"note",class:{noMargin:t.noMargin}},[t._v(t._s(t.$t("migrate.text2")))]),s("van-button",{directives:[{name:"show",rawName:"v-show",value:"none"===t.tradingStatus,expression:"tradingStatus === 'none'"}],staticClass:"double-button",class:{noMargin:t.noMargin},attrs:{disabled:t.isMigrated},on:{click:t.migrate}},[t._v(t._s(t.btnText))]),s("van-button",{directives:[{name:"show",rawName:"v-show",value:"none"!==t.tradingStatus,expression:"tradingStatus !== 'none'"}],staticClass:"double-button",class:{noMargin:t.noMargin},attrs:{loading:"","loading-text":t.btnText}})],1)},i=[],n=(a("66b9"),a("b650")),r=(a("caad"),{components:{[n["a"].name]:n["a"]},data(){return{tradingStatus:"none",allowance:"0".toBN(),isMigrated:!1}},computed:{btnText(){return this.isMigrated?this.$t("migrate.text3"):"approving"===this.tradingStatus?this.$t("migrate.text4"):"trading"===this.tradingStatus?this.$t("migrate.text5"):this.allowance.lte(0)?this.$t("migrate.text6"):this.$t("migrate.text7")},noMargin(){return["en","ja","ko"].includes(this.$i18n.locale)}},created(){this.$contracts&&this.init()},methods:{init(){const t=new this.$web3.BatchRequest,s=sessionStorage.getItem("displayed");t.add(this.$contracts.OldTokenBiggings.methods.userPoolInfo(1,this.$address).call.request({from:this.$address})),t.add(this.$contracts.OldTokenBiggings.methods.earned(0,this.$address).call.request({from:this.$address})),t.add(this.$contracts.OldTokenBiggings.methods.earned(1,this.$address).call.request({from:this.$address})),t.add(this.$contracts.OldTokenBiggings.methods.earned(2,this.$address).call.request({from:this.$address})),t.add(this.$contracts.OldBHBToken.methods.balanceOf(this.$address).call.request({from:this.$address})),t.add(this.$contracts.OldBHBToken.methods.allowance(this.$address,this.$contracts.BhSwapMigrations.options.address).call.request({from:this.$address})),t.requestManager.sendBatch(t.requests,(t,a)=>{if(!t){const t=("string"==typeof a[0]?a[0]:a[0].result).decode([{type:"uint256",name:"supply"},{type:"uint256",name:"reward"},{type:"uint256",name:"taked"},{type:"uint256",name:"rewardDebt"}]),e=a[1].result.toBN(),i=a[2].result.toBN(),n=a[3].result.toBN(),r=a[4].result.toBN();this.isMigrated=r.plus(e).plus(i).plus(n).plus(t.supply).lte(0),this.allowance=a[5].result.toBN(),s||this.isMigrated||(this.$store.commit("showPopup","migrate"),sessionStorage.setItem("displayed","true"))}})},approve(){this.$contracts.OldBHBToken.methods.approve(this.$contracts.BhSwapMigrations.options.address,"2100000".toWei()).send({from:this.$address}).on("transactionHash",t=>{this.tradingStatus="approving"}).on("receipt",async t=>{this.allowance=(await this.$contracts.OldBHBToken.methods.allowance(this.$address,this.$contracts.BhSwapMigrations.options.address).call({from:this.$address})).toBN(),this.tradingStatus="none"}).on("error",t=>{this.tradingStatus="none"})},migrate(){if(this.allowance.lte(0))return this.approve();const t=this.$contracts.BhSwapMigrations.methods.migrate();t.call({from:this.$address},(s,a)=>{s||t.send({from:this.$address}).on("transactionHash",t=>{this.tradingStatus="trading"}).on("receipt",t=>{this.tradingStatus="none",this.init()}).on("error",t=>{this.tradingStatus="none"})})}}}),o=r,d=o,c=(a("8a7d"),a("2877")),l=Object(c["a"])(d,e,i,!1,null,"818b1c92",null);s["default"]=l.exports}}]);