(function(){var e={6411:function(e,t,n){"use strict";var o=n(9242),r=n(3396),i=n(7139),s=n.p+"img/bg.7a36e0f9.jpg";const a={id:"main_pic"},l={id:"content"},c=(0,r._)("div",{class:"name_card"},[(0,r._)("h2",null,"ASWATHY & GOKUL")],-1),d=(0,r._)("div",{class:"intro"},[(0,r._)("h3",null,"We are starting our journey"),(0,r._)("h3",null,"request your presence on our precious moment")],-1),u={class:"picture_cards"},p=(0,r._)("div",{class:"regards_msg"},[(0,r._)("p",null,"Regards from Vishnu, Gopika & Arjun")],-1),h={id:"extras"},g=(0,r._)("i",{class:"fa fa-bars","aria-hidden":"true",title:"know more"},null,-1),m=[g],v=(0,r._)("i",{class:"fa fa-folder-open","aria-hidden":"true",title:"See engagement pics"},null,-1),f=[v],w={key:0,class:"more_pics"},_=(0,r._)("p",null,"Glance of our pre wedding shoot",-1),C=["src"];function y(e,t,n,o,g,v){const y=(0,r.up)("ConfettiExplosion"),S=(0,r.up)("CardGallery"),b=(0,r.up)("Carousal"),T=(0,r.up)("CountDown"),x=(0,r.up)("SimpleCard"),O=(0,r.up)("Overlay");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",a,[(0,r.Wm)(y,{particleCount:300,stageWidth:300,stageHeight:1800}),(0,r._)("img",{src:s,style:(0,i.j5)({opacity:g.imageOpacity})},null,4)]),(0,r._)("div",l,[c,d,(0,r.Wm)(S,{cards:g.cardSlides},null,8,["cards"]),(0,r._)("div",u,[(0,r.Wm)(b,{slides:g.slides,"is-open":!0,showControls:g.showCarouselControls},null,8,["slides","showControls"])]),p,(0,r._)("div",h,[(0,r._)("div",{id:"more_menu",onClick:t[0]||(t[0]=(...e)=>v.toggleCard&&v.toggleCard(...e))},m),(0,r.Wm)(T),(0,r._)("div",{id:"pictures",onClick:t[1]||(t[1]=(...e)=>v.showEngagementPics&&v.showEngagementPics(...e))},f)]),(0,r.Wm)(x,{isOpen:g.isCardOpen},null,8,["isOpen"]),g.isEngagementPicsShown?((0,r.wg)(),(0,r.iD)("div",w,[_,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(g.engagementPics,((e,t)=>((0,r.wg)(),(0,r.iD)("img",{id:"engagementPics",src:e,key:"slide-"+t},null,8,C)))),128))])):(0,r.kq)("",!0),(0,r.Wm)(O)])],64)}const S={key:0,class:"carousel"},b={class:"carousel-inner"};function T(e,t,n,o,i,s){const a=(0,r.up)("carousel-item"),l=(0,r.up)("CarouselControls");return n.isOpen?((0,r.wg)(),(0,r.iD)("div",S,[(0,r._)("div",b,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.slides,((e,t)=>((0,r.wg)(),(0,r.j4)(a,{slide:e,key:"item-"+t,"current-slide":i.currentSlide,index:t},null,8,["slide","current-slide","index"])))),128)),n.showControls?((0,r.wg)(),(0,r.j4)(l,{key:0,onPrev:s.prev,onNext:s.next},null,8,["onPrev","onNext"])):(0,r.kq)("",!0)])])):(0,r.kq)("",!0)}const x={class:"carousel-item"},O=["src"];function k(e,t,n,i,s,a){return(0,r.wy)(((0,r.wg)(),(0,r.iD)("div",x,[(0,r._)("img",{src:n.slide,alt:"Carousel Slide"},null,8,O)],512)),[[o.F8,n.currentSlide===n.index]])}var j={props:["slide","currentSlide","index"]},D=n(89);const I=(0,D.Z)(j,[["render",k]]);var E=I;function P(e,t,n,o,i,s){return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("button",{class:"carousel-control left",onClick:t[0]||(t[0]=t=>e.$emit("prev"))},"‹"),(0,r._)("button",{class:"carousel-control right",onClick:t[1]||(t[1]=t=>e.$emit("next"))},"›")])}var M={emits:["prev","next"]};const G=(0,D.Z)(M,[["render",P],["__scopeId","data-v-905e94b6"]]);var W=G,A={props:{slides:Array,isOpen:Boolean,showControls:{type:Boolean,default:!0}},components:{CarouselItem:E,CarouselControls:W},data(){return{currentSlide:0,slideInterval:null}},methods:{setCurrentSlide(e){this.currentSlide=e},prev(){const e=this.currentSlide>0?this.currentSlide-1:this.slides.length-1;this.setCurrentSlide(e)},next(){const e=this.currentSlide<this.slides.length-1?this.currentSlide+1:0;this.setCurrentSlide(e)},startSlideInterval(){this.slideInterval=setInterval((()=>{this.next()}),2e3)},stopSlideInterval(){clearInterval(this.slideInterval)}},watch:{isOpen(e){e&&!this.showControls?this.startSlideInterval():this.stopSlideInterval()},showControls(e){this.isOpen&&!e?this.startSlideInterval():this.stopSlideInterval()}},mounted(){this.isOpen&&!this.showControls&&this.startSlideInterval()},beforeUnmount(){this.stopSlideInterval()}};const Y=(0,D.Z)(A,[["render",T]]);var Z=Y;const N={class:"gallery"};function H(e,t,n,i,s,a){const l=(0,r.up)("Card");return(0,r.wg)(),(0,r.iD)("div",N,[(0,r.Wm)(o.uT,{name:s.transitionName},{default:(0,r.w5)((()=>[((0,r.wg)(),(0,r.iD)("div",{key:s.currentIndex,class:"slide"},[(0,r.Wm)(l,{eventTitle:a.currentCard.eventTitle,eventDate:a.currentCard.eventDate,place:a.currentCard.place,location:a.currentCard.location,eventTime:a.currentCard.eventTime,currentIndex:s.currentIndex,totalCards:s.totalCards,onGoToSlide:a.goToSlide},null,8,["eventTitle","eventDate","place","location","eventTime","currentIndex","totalCards","onGoToSlide"])]))])),_:1},8,["name"])])}var q=n.p+"img/pinmap.eb9ecfbc.png";const L=e=>((0,r.dD)("data-v-f2252844"),e=e(),(0,r.Cn)(),e),z={class:"card-title"},X={class:"datetime-container"},K=L((()=>(0,r._)("img",{src:q,alt:"buttonpng",title:"Open in maps"},null,-1))),U={class:"dot-bar"},F=["onClick"];function Q(e,t,n,o,s,a){return(0,r.wg)(),(0,r.iD)("div",{class:"custom-card",onTouchstart:t[1]||(t[1]=(...e)=>a.handleTouchStart&&a.handleTouchStart(...e)),onTouchmove:t[2]||(t[2]=(...e)=>a.handleTouchMove&&a.handleTouchMove(...e)),onTouchend:t[3]||(t[3]=(...e)=>a.handleTouchEnd&&a.handleTouchEnd(...e))},[(0,r._)("div",z,[(0,r._)("h2",null,(0,i.zw)(n.eventTitle),1)]),(0,r._)("div",X,[(0,r._)("p",null,(0,i.zw)(n.eventDate),1),(0,r._)("p",null,(0,i.zw)(n.eventTime),1)]),(0,r._)("div",{class:"location-container",onClick:t[0]||(t[0]=(...e)=>a.openGoogleMaps&&a.openGoogleMaps(...e))},[K,(0,r._)("p",null,(0,i.zw)(n.place),1)]),(0,r._)("div",U,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(s.dotArray,((e,t)=>((0,r.wg)(),(0,r.iD)("span",{key:t,class:(0,i.C_)(["dot",{"active-dot":t===n.currentIndex}]),onClick:e=>a.goToSlide(t)},null,10,F)))),128))])],32)}var B={props:{eventTitle:String,eventDate:String,eventTime:String,place:String,location:location,currentIndex:Number,totalCards:Number},data(){return{activeDotIndex:0,dotArray:Array(this.totalCards).fill(null),touchStartX:0,touchEndX:0}},methods:{openGoogleMaps(){window.open(this.location)},goToSlide(e){this.$emit("goToSlide",e)},handleTouchStart(e){this.touchStartX=e.touches[0].clientX},handleTouchMove(e){this.touchEndX=e.touches[0].clientX},handleTouchEnd(){const e=this.touchEndX-this.touchStartX;e<0?this.currentIndex+1<this.totalCards&&this.goToSlide(this.currentIndex+1):e>0&&this.currentIndex-1>=0&&this.goToSlide(this.currentIndex-1)}}};const V=(0,D.Z)(B,[["render",Q],["__scopeId","data-v-f2252844"]]);var R=V,J={props:{cards:Array},components:{Card:R},data(){return{currentIndex:0,transitionName:"fade",totalCards:this.cards.length}},computed:{currentCard(){return this.cards[this.currentIndex]}},methods:{goToSlide(e){this.transitionName="fade",this.currentIndex=e}}};const $=(0,D.Z)(J,[["render",H]]);var ee=$;const te=e=>((0,r.dD)("data-v-abe2b23e"),e=e(),(0,r.Cn)(),e),ne={key:0,class:"card"},oe=te((()=>(0,r._)("div",{class:"name_simple_card"},"Aswathy Sasi",-1))),re=te((()=>(0,r._)("p",null," D/o Sajitha Sasi & Sasi CA ",-1))),ie=te((()=>(0,r._)("div",{class:"phone_number"},[(0,r._)("a",{id:"contact2",href:"tel:+917012428213","aria-label":"Contact"},[(0,r._)("i",{class:"fas fa-phone fa-pulse"})])],-1))),se=te((()=>(0,r._)("div",{class:"name_simple_card"},"Gokul KS",-1))),ae=te((()=>(0,r._)("p",null,"S/o Valsa Sreedharan & Late Sreedharan KN",-1))),le=te((()=>(0,r._)("div",{class:"phone_number"},[(0,r._)("a",{id:"contact1",href:"tel:+918714522743","aria-label":"Contact"},[(0,r._)("i",{class:"fas fa-phone fa-pulse"})])],-1)));function ce(e,t,n,o,i,s){const a=(0,r.up)("Section");return n.isOpen?((0,r.wg)(),(0,r.iD)("div",ne,[(0,r.Wm)(a,null,{default:(0,r.w5)((()=>[oe,re,(0,r.Uk)(" Cheriyelippady (H), West Vengola, Perumbavoor "),ie,se,ae,(0,r.Uk)(" Kuriapuram (H), Iramalloor, Kothamangalam "),le])),_:1})])):(0,r.kq)("",!0)}var de={props:{isOpen:Boolean}};const ue=(0,D.Z)(de,[["render",ce],["__scopeId","data-v-abe2b23e"]]);var pe=ue,he=n(9560);const ge={class:"countdown-number"};function me(e,t,n,o,s,a){return(0,r.wg)(),(0,r.iD)("div",ge,"We are counting ! "+(0,i.zw)(a.daysRemaining)+" days more",1)}var ve={data(){return{targetDate:new Date("2024-01-28")}},computed:{daysRemaining(){const e=new Date,t=this.targetDate-e,n=Math.ceil(t/864e5);return n>0?n:0}}};const fe=(0,D.Z)(ve,[["render",me],["__scopeId","data-v-08dbcbc9"]]);var we=fe;const _e=e=>((0,r.dD)("data-v-fb045850"),e=e(),(0,r.Cn)(),e),Ce={class:"overlay-content"},ye=_e((()=>(0,r._)("p",null,"Thanks",-1))),Se={class:"thanks_section"},be=_e((()=>(0,r._)("p",null,"Photography : Epic Media ",-1))),Te={href:"https://www.instagram.com/epicmedia__?igsh=ZGNjOWZkYTE3MQ==",target:"_blank"},xe={class:"thanks_section"},Oe=_e((()=>(0,r._)("p",null,"Makeup : Orchid Beauty Clinic ",-1))),ke={href:"https://www.instagram.com/orchid__beautyclinic?igsh=ZGNjOWZkYTE3MQ==",target:"_blank"};function je(e,t,n,o,i,s){const a=(0,r.up)("font-awesome-icon");return(0,r.wg)(),(0,r.iD)("div",null,[i.showOverlay?((0,r.wg)(),(0,r.iD)("div",{key:0,class:"overlay",onClick:t[0]||(t[0]=(...e)=>s.hideOverlay&&s.hideOverlay(...e))},[(0,r._)("div",Ce,[ye,(0,r._)("div",Se,[be,(0,r._)("a",Te,[(0,r.Wm)(a,{icon:["fab","instagram"]})])]),(0,r._)("div",xe,[Oe,(0,r._)("a",ke,[(0,r.Wm)(a,{icon:["fab","instagram"]})])])])])):(0,r.kq)("",!0)])}var De=n(3204),Ie={components:{FontAwesomeIcon:De.GN},data(){return{showOverlay:!1,lastScrollPosition:0}},methods:{hideOverlay(){this.showOverlay=!1},handleScroll(){const e=window.scrollY||document.documentElement.scrollTop;e>this.lastScrollPosition?e+window.innerHeight>=document.documentElement.scrollHeight&&(this.showOverlay=!0):this.showOverlay=!1,this.lastScrollPosition=e}},mounted(){window.addEventListener("scroll",this.handleScroll)},beforeUnmount(){window.removeEventListener("scroll",this.handleScroll)}};const Ee=(0,D.Z)(Ie,[["render",je],["__scopeId","data-v-fb045850"]]);var Pe=Ee;const Me=n(315),Ge=Me.keys().map(Me);var We={name:"App",components:{Carousal:Z,CardGallery:ee,SimpleCard:pe,ConfettiExplosion:he.Z,CountDown:we,Overlay:Pe},mounted(){window.addEventListener("scroll",this.handleScroll),this.setMargin(),window.addEventListener("resize",this.setMargin)},beforeUnmount(){window.removeEventListener("scroll",this.handleScroll),window.removeEventListener("resize",this.setMargin)},methods:{toggleCard(){this.isCardOpen=!this.isCardOpen,this.isEngagementPicsShown=!1},showEngagementPics(){this.isCardOpen=!1,this.isEngagementPicsShown=!this.isEngagementPicsShown,window.scrollTo({top:document.body.scrollHeight,behavior:"auto"})},handleScroll(){const e=window.scrollY;this.imageOpacity=1-e/500},setMargin(){const e=document.querySelector(".name_card");window.innerWidth<=767?e.style.marginTop="60%":e.style.marginTop="-30%"}},data(){return{qrCode_knot:"https://maps.app.goo.gl/PM8Yz1YPYF366S4d7",qrCode_bride:"https://maps.app.goo.gl/fGBtyQceGQk9fyaw9",qrCode_groom:"https://maps.app.goo.gl/ockwvxQjEQEXtQri7",slides:[n(9223),n(6396),n(3434),n(3104)],engagementPics:Ge,isCardOpen:!1,isEngagementPicsShown:!1,showCarouselControls:!1,imageOpacity:1,cardSlides:[{eventTitle:"Thalikettu",place:"Puthuppara Temple,Vengola",location:"https://maps.app.goo.gl/PM8Yz1YPYF366S4d7",eventDate:"28 Jan 2024",eventTime:"10:00 AM to 10:30 AM"},{eventTitle:"Brides party",place:"Salem Church Auditorium, Vengola",location:"https://maps.app.goo.gl/jL6TwGpDybHLTZmn7",eventDate:"28 Jan 2024",eventTime:"From 11:00 AM"},{eventTitle:"Grooms Reception",place:"Community Hall,Nellikuzhy",location:"https://maps.app.goo.gl/G3Eeqj4bT2r3wXq17",eventDate:"28 Jan 2024",eventTime:"5:30 PM to 8.00 PM"}]}},metaInfo(){return{title:"Your Dynamic Title",meta:[{property:"og:title",content:"Gokul Weds Aswathy"},{property:"og:description",content:"Invitation to our wedding"},{property:"og:image",content:"/thumbnail.jpg"},{property:"og:url",content:"www.myweddinginviter.in/"}]}}};const Ae=(0,D.Z)(We,[["render",y]]);var Ye=Ae;const Ze=(0,o.ri)(Ye);Ze.mount("#app")},315:function(e,t,n){var o={"./03.jpg":4914,"./1.jpg":7413,"./10.jpg":2367,"./11.jpg":1518,"./12.jpg":5466,"./2.jpg":8349,"./4.jpg":2e3,"./5.jpg":8526,"./6.jpg":3693,"./7.jpg":6723,"./8.jpg":2276,"./9.jpg":5486};function r(e){var t=i(e);return n(t)}function i(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}r.keys=function(){return Object.keys(o)},r.resolve=i,e.exports=r,r.id=315},6396:function(e,t,n){"use strict";e.exports=n.p+"img/Onam_1.04c50088.jpg"},3434:function(e,t,n){"use strict";e.exports=n.p+"img/Onam_2.bd79ee1f.jpg"},3104:function(e,t,n){"use strict";e.exports=n.p+"img/Onam_3.18b764b2.jpg"},9223:function(e,t,n){"use strict";e.exports=n.p+"img/Onam_4.9f4fe9e4.jpg"},4914:function(e,t,n){"use strict";e.exports=n.p+"img/03.5e28a694.jpg"},7413:function(e,t,n){"use strict";e.exports=n.p+"img/1.9c95c1da.jpg"},2367:function(e,t,n){"use strict";e.exports=n.p+"img/10.15244a30.jpg"},1518:function(e,t,n){"use strict";e.exports=n.p+"img/11.0c52f2d9.jpg"},5466:function(e,t,n){"use strict";e.exports=n.p+"img/12.1f46b62a.jpg"},8349:function(e,t,n){"use strict";e.exports=n.p+"img/2.23d8d1b5.jpg"},2e3:function(e,t,n){"use strict";e.exports=n.p+"img/4.6c03da69.jpg"},8526:function(e,t,n){"use strict";e.exports=n.p+"img/5.9476a442.jpg"},3693:function(e,t,n){"use strict";e.exports=n.p+"img/6.d83a7e0f.jpg"},6723:function(e,t,n){"use strict";e.exports=n.p+"img/7.42c7ee73.jpg"},2276:function(e,t,n){"use strict";e.exports=n.p+"img/8.90c75643.jpg"},5486:function(e,t,n){"use strict";e.exports=n.p+"img/9.783e3939.jpg"}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,i){if(!o){var s=1/0;for(d=0;d<e.length;d++){o=e[d][0],r=e[d][1],i=e[d][2];for(var a=!0,l=0;l<o.length;l++)(!1&i||s>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[l])}))?o.splice(l--,1):(a=!1,i<s&&(s=i));if(a){e.splice(d--,1);var c=r();void 0!==c&&(t=c)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[o,r,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.p="/"}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,i,s=o[0],a=o[1],l=o[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(l)var d=l(n)}for(t&&t(o);c<s.length;c++)i=s[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(d)},o=self["webpackChunkwebsite"]=self["webpackChunkwebsite"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(6411)}));o=n.O(o)})();
//# sourceMappingURL=app.5efa2d38.js.map