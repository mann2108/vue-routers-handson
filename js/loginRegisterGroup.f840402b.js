(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["loginRegisterGroup"],{1331:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i("78ef"),r=(0,n.regex)("integer",/(^[0-9]*$)|(^-[0-9]+$)/);t.default=r},"169a":function(e,t,i){"use strict";i("7db0"),i("caad"),i("45fc"),i("a9e3"),i("2532"),i("498a");var n=i("5530"),r=i("2909"),a=i("ade3"),s=(i("368e"),i("480e")),o=i("4ad4"),u=i("b848"),l=i("75eb"),c=(i("3c93"),i("a9ad")),d=i("7560"),f=i("f2e7"),h=i("58df"),v=Object(h["a"])(c["a"],d["a"],f["a"]).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim:function(){var e=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",e)},classes:function(){return Object(n["a"])({"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive},this.themeClasses)},computedOpacity:function(){return Number(this.isActive?this.opacity:0)},styles:function(){return{zIndex:this.zIndex}}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render:function(e){var t=[this.__scrim];return this.isActive&&t.push(this.genContent()),e("div",{staticClass:"v-overlay",class:this.classes,style:this.styles},t)}}),m=v,p=i("80d2"),b=i("2b0e"),g=b["a"].extend().extend({name:"overlayable",props:{hideOverlay:Boolean,overlayColor:String,overlayOpacity:[Number,String]},data:function(){return{animationFrame:0,overlay:null}},watch:{hideOverlay:function(e){this.isActive&&(e?this.removeOverlay():this.genOverlay())}},beforeDestroy:function(){this.removeOverlay()},methods:{createOverlay:function(){var e=new m({propsData:{absolute:this.absolute,value:!1,color:this.overlayColor,opacity:this.overlayOpacity}});e.$mount();var t=this.absolute?this.$el.parentNode:document.querySelector("[data-app]");t&&t.insertBefore(e.$el,t.firstChild),this.overlay=e},genOverlay:function(){var e=this;if(this.hideScroll(),!this.hideOverlay)return this.overlay||this.createOverlay(),this.animationFrame=requestAnimationFrame((function(){e.overlay&&(void 0!==e.activeZIndex?e.overlay.zIndex=String(e.activeZIndex-1):e.$el&&(e.overlay.zIndex=Object(p["t"])(e.$el)),e.overlay.value=!0)})),!0},removeOverlay:function(){var e=this,t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.overlay&&(Object(p["a"])(this.overlay.$el,"transitionend",(function(){e.overlay&&e.overlay.$el&&e.overlay.$el.parentNode&&!e.overlay.value&&(e.overlay.$el.parentNode.removeChild(e.overlay.$el),e.overlay.$destroy(),e.overlay=null)})),cancelAnimationFrame(this.animationFrame),this.overlay.value=!1),t&&this.showScroll()},scrollListener:function(e){if("keydown"===e.type){if(["INPUT","TEXTAREA","SELECT"].includes(e.target.tagName)||e.target.isContentEditable)return;var t=[p["w"].up,p["w"].pageup],i=[p["w"].down,p["w"].pagedown];if(t.includes(e.keyCode))e.deltaY=-1;else{if(!i.includes(e.keyCode))return;e.deltaY=1}}(e.target===this.overlay||"keydown"!==e.type&&e.target===document.body||this.checkPath(e))&&e.preventDefault()},hasScrollbar:function(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;var t=window.getComputedStyle(e);return["auto","scroll"].includes(t.overflowY)&&e.scrollHeight>e.clientHeight},shouldScroll:function(e,t){return 0===e.scrollTop&&t<0||e.scrollTop+e.clientHeight===e.scrollHeight&&t>0},isInside:function(e,t){return e===t||null!==e&&e!==document.body&&this.isInside(e.parentNode,t)},checkPath:function(e){var t=e.path||this.composedPath(e),i=e.deltaY;if("keydown"===e.type&&t[0]===document.body){var n=this.$refs.dialog,r=window.getSelection().anchorNode;return!(n&&this.hasScrollbar(n)&&this.isInside(r,n))||this.shouldScroll(n,i)}for(var a=0;a<t.length;a++){var s=t[a];if(s===document)return!0;if(s===document.documentElement)return!0;if(s===this.$refs.content)return!0;if(this.hasScrollbar(s))return this.shouldScroll(s,i)}return!0},composedPath:function(e){if(e.composedPath)return e.composedPath();var t=[],i=e.target;while(i){if(t.push(i),"HTML"===i.tagName)return t.push(document),t.push(window),t;i=i.parentElement}return t},hideScroll:function(){this.$vuetify.breakpoint.smAndDown?document.documentElement.classList.add("overflow-y-hidden"):(Object(p["b"])(window,"wheel",this.scrollListener,{passive:!1}),window.addEventListener("keydown",this.scrollListener))},showScroll:function(){document.documentElement.classList.remove("overflow-y-hidden"),window.removeEventListener("wheel",this.scrollListener),window.removeEventListener("keydown",this.scrollListener)}}}),y=i("e4d3"),w=i("21be"),x=i("a293"),$=i("d9bd"),O=Object(h["a"])(o["a"],u["a"],l["a"],g,y["a"],w["a"],f["a"]);t["a"]=O.extend({name:"v-dialog",directives:{ClickOutside:x["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200,previousActiveElement:null}},computed:{classes:function(){var e;return e={},Object(a["a"])(e,"v-dialog ".concat(this.contentClass).trim(),!0),Object(a["a"])(e,"v-dialog--active",this.isActive),Object(a["a"])(e,"v-dialog--persistent",this.persistent),Object(a["a"])(e,"v-dialog--fullscreen",this.fullscreen),Object(a["a"])(e,"v-dialog--scrollable",this.scrollable),Object(a["a"])(e,"v-dialog--animated",this.animate),e},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(e){var t;e?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(t=this.previousActiveElement)||t.focus())},fullscreen:function(e){this.isActive&&(e?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object($["e"])("full-width",this)},beforeMount:function(){var e=this;this.$nextTick((function(){e.isBooted=e.isActive,e.isActive&&e.show()}))},beforeDestroy:function(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick:function(){var e=this;this.animate=!1,this.$nextTick((function(){e.animate=!0,window.clearTimeout(e.animateTimeout),e.animateTimeout=window.setTimeout((function(){return e.animate=!1}),150)}))},closeConditional:function(e){var t=e.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(t)||this.overlay&&t&&!this.overlay.$el.contains(t))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):g.options.methods.hideScroll.call(this)},show:function(){var e=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){e.$nextTick((function(){e.previousActiveElement=document.activeElement,e.$refs.content.focus(),e.bind()}))}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(e){this.$emit("click:outside",e),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(e){if(e.keyCode===p["w"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var t=this.getActivator();this.$nextTick((function(){return t&&t.focus()}))}this.$emit("keydown",e)},onFocusin:function(e){if(e&&this.retainFocus){var t=e.target;if(t&&![document,this.$refs.content].includes(t)&&!this.$refs.content.contains(t)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(e){return e.contains(t)}))){var i=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),n=Object(r["a"])(i).find((function(e){return!e.hasAttribute("disabled")}));n&&n.focus()}}},genContent:function(){var e=this;return this.showLazyContent((function(){return[e.$createElement(s["a"],{props:{root:!0,light:e.light,dark:e.dark}},[e.$createElement("div",{class:e.contentClasses,attrs:Object(n["a"])({role:"document",tabindex:e.isActive?0:void 0},e.getScopeIdAttrs()),on:{keydown:e.onKeydown},style:{zIndex:e.activeZIndex},ref:"content"},[e.genTransition()])])]}))},genTransition:function(){var e=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[e]):e},genInnerContent:function(){var e={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(e.style=Object(n["a"])(Object(n["a"])({},e.style),{},{maxWidth:"none"===this.maxWidth?void 0:Object(p["g"])(this.maxWidth),width:"auto"===this.width?void 0:Object(p["g"])(this.width)})),this.$createElement("div",e,this.getContentSlot())}},render:function(e){return e("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}})},"1feb":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("h1",[e._v("Registration Form")]),i("hr"),i("form",[i("v-text-field",{attrs:{"error-messages":e.nameErrors,counter:10,label:"Name",required:""},on:{input:function(t){return e.$v.name.$touch()},blur:function(t){return e.$v.name.$touch()}},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),i("v-text-field",{attrs:{"error-messages":e.emailErrors,label:"E-mail",required:""},on:{input:function(t){return e.$v.email.$touch()},blur:function(t){return e.$v.email.$touch()}},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),i("v-text-field",{attrs:{type:"password","error-messages":e.passwordErrors,label:"Password",required:""},on:{input:function(t){return e.$v.password.$touch()},blur:function(t){return e.$v.password.$touch()}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),i("v-select",{attrs:{items:e.languages,"error-messages":e.languageErrors,label:"Favourite Language",required:""},on:{change:function(t){return e.$v.language.$touch()},blur:function(t){return e.$v.language.$touch()}},model:{value:e.language,callback:function(t){e.language=t},expression:"language"}}),i("v-checkbox",{attrs:{"error-messages":e.checkboxErrors,label:"Do you agree? ",required:""},on:{change:function(t){return e.$v.checkbox.$touch()},blur:function(t){return e.$v.checkbox.$touch()}},model:{value:e.checkbox,callback:function(t){e.checkbox=t},expression:"checkbox"}}),i("v-btn",{staticClass:"mr-4",on:{click:e.submit}},[e._v(" submit ")]),i("v-btn",{on:{click:e.clear}},[e._v(" clear ")])],1),i("v-dialog",{attrs:{"max-width":"400"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[i("v-card",[i("v-card-title",{staticClass:"headline"},[e._v(" Users Registration Status ")]),i("v-card-text",[e._v(" "+e._s(e.serverSideMessage)+" ")]),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(t){e.dialog=!1}}},[e._v(" OK ")])],1)],1)],1)],1)},r=[],a=(i("b0c0"),i("1dce")),s=i("b5ae"),o=i("56d7"),u={mixins:[a["validationMixin"]],validations:{name:{required:s["required"],maxLength:Object(s["maxLength"])(10)},email:{required:s["required"],email:s["email"]},language:{required:s["required"]},checkbox:{checked:function(e){return e}},password:{required:s["required"],minLength:Object(s["minLength"])(10)}},data:function(){return{name:"",email:"",language:null,languages:["C++","Python","Javascript","Java"],checkbox:!1,password:"",fetchedUsersData:[],usersDataAPI:"https://vue-training-3f5e1-default-rtdb.firebaseio.com/data.json",dialog:!1,serverSideMessage:""}},computed:{checkboxErrors:function(){var e=[];return this.$v.checkbox.$dirty?(!this.$v.checkbox.checked&&e.push("You must agree to continue!"),e):e},languageErrors:function(){var e=[];return this.$v.language.$dirty?(!this.$v.language.required&&e.push("Language is required"),e):e},nameErrors:function(){var e=[];return this.$v.name.$dirty?(!this.$v.name.maxLength&&e.push("Name must be at most 10 characters long"),!this.$v.name.required&&e.push("Name is required."),e):e},emailErrors:function(){var e=[];return this.$v.email.$dirty?(!this.$v.email.email&&e.push("Must be valid e-mail"),!this.$v.email.required&&e.push("E-mail is required"),e):e},passwordErrors:function(){var e=[];return this.$v.password.$dirty?(!this.$v.password.minLength&&e.push("Password must be at least 10 characters long"),!this.$v.password.required&&e.push("Password is required"),e):e}},beforeRouteEnter:function(e,t,i){localStorage.getItem("UserID")?i("/home"):i(!0)},created:function(){var e=this;this.axios.get(this.usersDataAPI).then((function(e){var t=[];for(var i in e.data)t.push(e.data[i]);return t})).then((function(t){e.fetchedUsersData=t})).catch((function(e){console.log(e)})),localStorage.getItem("UserID")?o["eventBus"].$emit("isUserSessionActive",!0):o["eventBus"].$emit("isUserSessionActive",!1)},methods:{submit:function(){var e=this;if(this.$v.$touch(),console.log(this.$v.$invalid),!this.$v.$invalid){var t=!1;for(var i in this.fetchedUsersData)if(this.fetchedUsersData[i].email===this.email){t=!0;break}if(t)this.serverSideMessage="User with given email already exist",this.dialog=!0;else{var n={id:this.fetchedUsersData.length+1,name:this.name,email:this.email,password:this.password,language:this.language};this.axios.post(this.usersDataAPI,n).then((function(t){200===t.status?(e.fetchedUsersData.push(n),e.serverSideMessage="User Registered Successfully",e.dialog=!0):(e.serverSideMessage="Some error occured please try later !",e.dialog=!0)})).catch((function(){e.serverSideMessage="Some error occured please try later !",e.dialog=!0}))}}},clear:function(){this.$v.$reset(),this.name="",this.email="",this.language=null,this.checkbox=!1,this.password=""}}},l=u,c=(i("59ee"),i("2877")),d=i("6544"),f=i.n(d),h=i("8336"),v=i("b0af"),m=i("99d9"),p=(i("d3b7"),i("25f0"),i("5530")),b=(i("6ca7"),i("ec29"),i("9d26")),g=i("c37a"),y=(i("4de4"),i("45fc"),i("5607")),w=i("2b0e"),x=w["a"].extend({name:"rippleable",directives:{ripple:y["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(e.staticClass="v-input--selection-controls__ripple",e.directives=e.directives||[],e.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",e)):null}}}),$=i("8547"),O=i("58df");function _(e){e.preventDefault()}var k=Object(O["a"])(g["a"],x,$["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var e=this,t=this.value,i=this.internalValue;return this.isMultiple?!!Array.isArray(i)&&i.some((function(i){return e.valueComparator(i,t)})):void 0===this.trueValue||void 0===this.falseValue?t?this.valueComparator(t,i):Boolean(i):this.valueComparator(i,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(e){this.lazyValue=e,this.hasColor=e}},methods:{genLabel:function(){var e=g["a"].options.methods.genLabel.call(this);return e?(e.data.on={click:_},e):e},genInput:function(e,t){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:e,type:e},t),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:_},ref:"input"})},onBlur:function(){this.isFocused=!1},onClick:function(e){this.onChange(),this.$emit("click",e)},onChange:function(){var e=this;if(this.isInteractive){var t=this.value,i=this.internalValue;if(this.isMultiple){Array.isArray(i)||(i=[]);var n=i.length;i=i.filter((function(i){return!e.valueComparator(i,t)})),i.length===n&&i.push(t)}else i=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(i,this.trueValue)?this.falseValue:this.trueValue:t?this.valueComparator(i,t)?null:t:!i;this.validate(!0,i),this.internalValue=i,this.hasColor=i}},onFocus:function(){this.isFocused=!0},onKeydown:function(e){}}}),j=k.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return Object(p["a"])(Object(p["a"])({},g["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(e){var t=this;this.$nextTick((function(){return t.inputIndeterminate=e}))},inputIndeterminate:function(e){this.$emit("update:indeterminate",e)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(b["a"],this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",Object(p["a"])(Object(p["a"])({},this.attrs$),{},{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}}),P=i("169a"),S=i("b974"),C=i("2fa4"),A=i("8654"),I=Object(c["a"])(l,n,r,!1,null,"3f903ea2",null);t["default"]=I.exports;f()(I,{VBtn:h["a"],VCard:v["a"],VCardActions:m["a"],VCardText:m["b"],VCardTitle:m["c"],VCheckbox:j,VDialog:P["a"],VSelect:S["a"],VSpacer:C["a"],VTextField:A["a"]})},"2a12":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i("78ef"),r=function(e){return(0,n.withParams)({type:"maxLength",max:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)<=e}))};t.default=r},3360:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i("78ef"),r=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return(0,n.withParams)({type:"and"},(function(){for(var e=this,i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return t.length>0&&t.reduce((function(t,i){return t&&i.apply(e,n)}),!0)}))};t.default=r},"368e":function(e,t,i){},"3a54":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i("78ef"),r=(0,n.regex)("alphaNum",/^[a-zA-Z0-9]*$/);t.default=r},"3c93":function(e,t,i){},"45b8":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i("78ef"),r=(0,n.regex)("numeric",/^[0-9]*$/);t.default=r},"46bc":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i("78ef"),r=function(e){return(0,n.withParams)({type:"maxValue",max:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e}))};t.default=r},"51a3":function(e,t,i){},"578a":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("h1",[e._v("Login Form")]),i("hr"),i("form",[i("v-text-field",{attrs:{"error-messages":e.emailErrors,label:"E-mail",required:""},on:{input:function(t){return e.$v.email.$touch()},blur:function(t){return e.$v.email.$touch()}},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),i("v-text-field",{attrs:{type:"password","error-messages":e.passwordErrors,label:"Password",required:""},on:{input:function(t){return e.$v.password.$touch()},blur:function(t){return e.$v.password.$touch()}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),i("v-btn",{staticClass:"mr-4",on:{click:e.submit}},[e._v(" submit ")]),i("v-btn",{on:{click:e.clear}},[e._v(" clear ")])],1),i("v-dialog",{attrs:{"max-width":"400"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[i("v-card",[i("v-card-title",{staticClass:"headline"},[e._v(" User Login Status ")]),i("v-card-text",[e._v(" "+e._s(e.serverSideMessage)+" ")]),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(t){e.dialog=!1}}},[e._v(" OK ")])],1)],1)],1)],1)},r=[],a=i("1dce"),s=i("b5ae"),o=i("56d7"),u={mixins:[a["validationMixin"]],validations:{email:{required:s["required"],email:s["email"]},password:{required:s["required"],minLength:Object(s["minLength"])(10)}},data:function(){return{email:"",password:"",fetchedUsersData:[],usersDataAPI:"https://vue-training-3f5e1-default-rtdb.firebaseio.com/data.json",dialog:!1,serverSideMessage:"",loginUserID:""}},computed:{emailErrors:function(){var e=[];return this.$v.email.$dirty?(!this.$v.email.email&&e.push("Must be valid e-mail"),!this.$v.email.required&&e.push("E-mail is required"),e):e},passwordErrors:function(){var e=[];return this.$v.password.$dirty?(!this.$v.password.minLength&&e.push("Password must be at least 10 characters long"),!this.$v.password.required&&e.push("Password is required"),e):e}},created:function(){var e=this;this.axios.get(this.usersDataAPI).then((function(e){var t=[];for(var i in e.data)t.push(e.data[i]);return t})).then((function(t){e.fetchedUsersData=t})).catch((function(e){console.log(e)})),localStorage.getItem("UserID")?o["eventBus"].$emit("isUserSessionActive",!0):o["eventBus"].$emit("isUserSessionActive",!1)},beforeRouteEnter:function(e,t,i){localStorage.getItem("UserID")?i("/home"):i(!0)},methods:{submit:function(){if(this.$v.$touch(),!this.$v.$invalid){var e=!1;for(var t in this.fetchedUsersData)if(this.fetchedUsersData[t].email===this.email&&this.fetchedUsersData[t].password===this.password){this.loginUserID=t,e=!0;break}e?(localStorage.setItem("UserID",this.loginUserID),o["eventBus"].$emit("isUserSessionActive",!0),this.$router.push({path:"/dashboard"})):(this.serverSideMessage="No user found with given email and password",this.dialog=!0)}},clear:function(){this.$v.$reset(),this.email="",this.password=""}}},l=u,c=(i("9a2b"),i("2877")),d=i("6544"),f=i.n(d),h=i("8336"),v=i("b0af"),m=i("99d9"),p=i("169a"),b=i("2fa4"),g=i("8654"),y=Object(c["a"])(l,n,r,!1,null,"83ffeb9a",null);t["default"]=y.exports;f()(y,{VBtn:h["a"],VCard:v["a"],VCardActions:m["a"],VCardText:m["b"],VCardTitle:m["c"],VDialog:p["a"],VSpacer:b["a"],VTextField:g["a"]})},"59ee":function(e,t,i){"use strict";i("51a3")},"5d75":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i("78ef"),r=/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/,a=(0,n.regex)("email",r);t.default=a},"5db3":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i("78ef"),r=function(e){return(0,n.withParams)({type:"minLength",min:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)>=e}))};t.default=r},"615b":function(e,t,i){},6235:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i("78ef"),r=(0,n.regex)("alpha",/^[a-zA-Z]*$/);t.default=r},6417:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i("78ef"),r=function(e){return(0,n.withParams)({type:"not"},(function(t,i){return!(0,n.req)(t)||!e.call(this,t,i)}))};t.default=r},"6ca7":function(e,t,i){},"772d":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i("78ef"),r=/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i,a=(0,n.regex)("url",r);t.default=a},"78ef":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"withParams",{enumerable:!0,get:function(){return n.default}}),t.regex=t.ref=t.len=t.req=void 0;var n=r(i("8750"));function r(e){return e&&e.__esModule?e:{default:e}}function a(e){return a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}var s=function(e){if(Array.isArray(e))return!!e.length;if(void 0===e||null===e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===a(e)){for(var t in e)return!0;return!1}return!!String(e).length};t.req=s;var o=function(e){return Array.isArray(e)?e.length:"object"===a(e)?Object.keys(e).length:String(e).length};t.len=o;var u=function(e,t,i){return"function"===typeof e?e.call(t,i):i[e]};t.ref=u;var l=function(e,t){return(0,n.default)({type:e},(function(e){return!s(e)||t.test(e)}))};t.regex=l},8750:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n="web"===Object({NODE_ENV:"production",BASE_URL:"/vue-routers-handson/"}).BUILD?i("cb69").withParams:i("0234").withParams,r=n;t.default=r},"91d3":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i("78ef"),r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,n.withParams)({type:"macAddress"},(function(t){if(!(0,n.req)(t))return!0;if("string"!==typeof t)return!1;var i="string"===typeof e&&""!==e?t.split(e):12===t.length||16===t.length?t.match(/.{2}/g):null;return null!==i&&(6===i.length||8===i.length)&&i.every(a)}))};t.default=r;var a=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},"99d9":function(e,t,i){"use strict";i.d(t,"a",(function(){return a})),i.d(t,"b",(function(){return o})),i.d(t,"c",(function(){return u}));var n=i("b0af"),r=i("80d2"),a=Object(r["h"])("v-card__actions"),s=Object(r["h"])("v-card__subtitle"),o=Object(r["h"])("v-card__text"),u=Object(r["h"])("v-card__title");n["a"]},"9a2b":function(e,t,i){"use strict";i("e337")},aa82:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i("78ef"),r=function(e){return(0,n.withParams)({type:"requiredIf",prop:e},(function(t,i){return!(0,n.ref)(e,this,i)||(0,n.req)(t)}))};t.default=r},b0af:function(e,t,i){"use strict";i("0481"),i("4069"),i("a9e3");var n=i("5530"),r=(i("615b"),i("10d2")),a=i("297c"),s=i("1c87"),o=i("58df");t["a"]=Object(o["a"])(a["a"],s["a"],r["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return Object(n["a"])(Object(n["a"])({"v-card":!0},s["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},r["a"].options.computed.classes.call(this))},styles:function(){var e=Object(n["a"])({},r["a"].options.computed.styles.call(this));return this.img&&(e.background='url("'.concat(this.img,'") center center / cover no-repeat')),e}},methods:{genProgress:function(){var e=a["a"].options.methods.genProgress.call(this);return e?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[e]):null}},render:function(e){var t=this.generateRouteLink(),i=t.tag,n=t.data;return n.style=this.styles,this.isClickable&&(n.attrs=n.attrs||{},n.attrs.tabindex=0),e(i,this.setBackgroundColor(this.color,n),[this.genProgress(),this.$slots.default])}})},b5ae:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"alpha",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"alphaNum",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"numeric",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"between",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"email",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"ipAddress",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"macAddress",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"maxLength",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"minLength",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"required",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"requiredIf",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(t,"requiredUnless",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(t,"sameAs",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(t,"url",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(t,"or",{enumerable:!0,get:function(){return b.default}}),Object.defineProperty(t,"and",{enumerable:!0,get:function(){return g.default}}),Object.defineProperty(t,"not",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(t,"minValue",{enumerable:!0,get:function(){return w.default}}),Object.defineProperty(t,"maxValue",{enumerable:!0,get:function(){return x.default}}),Object.defineProperty(t,"integer",{enumerable:!0,get:function(){return $.default}}),Object.defineProperty(t,"decimal",{enumerable:!0,get:function(){return O.default}}),t.helpers=void 0;var n=j(i("6235")),r=j(i("3a54")),a=j(i("45b8")),s=j(i("ec11")),o=j(i("5d75")),u=j(i("c99d")),l=j(i("91d3")),c=j(i("2a12")),d=j(i("5db3")),f=j(i("d4f4")),h=j(i("aa82")),v=j(i("e652")),m=j(i("b6cb")),p=j(i("772d")),b=j(i("d294")),g=j(i("3360")),y=j(i("6417")),w=j(i("eb66")),x=j(i("46bc")),$=j(i("1331")),O=j(i("c301")),_=k(i("78ef"));function k(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,i):{};n.get||n.set?Object.defineProperty(t,i,n):t[i]=e[i]}return t.default=e,t}function j(e){return e&&e.__esModule?e:{default:e}}t.helpers=_},b6cb:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i("78ef"),r=function(e){return(0,n.withParams)({type:"sameAs",eq:e},(function(t,i){return t===(0,n.ref)(e,this,i)}))};t.default=r},c301:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i("78ef"),r=(0,n.regex)("decimal",/^[-]?\d*(\.\d+)?$/);t.default=r},c99d:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i("78ef"),r=(0,n.withParams)({type:"ipAddress"},(function(e){if(!(0,n.req)(e))return!0;if("string"!==typeof e)return!1;var t=e.split(".");return 4===t.length&&t.every(a)}));t.default=r;var a=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var t=0|+e;return t>=0&&t<=255}},cb69:function(e,t,i){"use strict";(function(e){function i(e){return i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.withParams=void 0;var n="undefined"!==typeof window?window:"undefined"!==typeof e?e:{},r=function(e,t){return"object"===i(e)&&void 0!==t?t:e((function(){}))},a=n.vuelidate?n.vuelidate.withParams:r;t.withParams=a}).call(this,i("c8ba"))},d294:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i("78ef"),r=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return(0,n.withParams)({type:"or"},(function(){for(var e=this,i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return t.length>0&&t.reduce((function(t,i){return t||i.apply(e,n)}),!1)}))};t.default=r},d4f4:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i("78ef"),r=(0,n.withParams)({type:"required"},(function(e){return"string"===typeof e?(0,n.req)(e.trim()):(0,n.req)(e)}));t.default=r},e337:function(e,t,i){},e652:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i("78ef"),r=function(e){return(0,n.withParams)({type:"requiredUnless",prop:e},(function(t,i){return!!(0,n.ref)(e,this,i)||(0,n.req)(t)}))};t.default=r},eb66:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i("78ef"),r=function(e){return(0,n.withParams)({type:"minValue",min:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e}))};t.default=r},ec11:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i("78ef"),r=function(e,t){return(0,n.withParams)({type:"between",min:e,max:t},(function(i){return!(0,n.req)(i)||(!/\s/.test(i)||i instanceof Date)&&+e<=+i&&+t>=+i}))};t.default=r},ec29:function(e,t,i){}}]);
//# sourceMappingURL=loginRegisterGroup.f840402b.js.map