var Launchy=function(t){function e(l){if(a[l])return a[l].exports;var i=a[l]={i:l,l:!1,exports:{}};return t[l].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var a={};return e.m=t,e.c=a,e.d=function(t,a,l){e.o(t,a)||Object.defineProperty(t,a,{configurable:!1,enumerable:!0,get:l})},e.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(a,"a",a),a},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,a){"use strict";function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var a=0;a<e.length;a++){var l=e[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(t,l.key,l)}}return function(e,a,l){return a&&t(e.prototype,a),l&&t(e,l),e}}(),n={launchModal:"a",closeModal:"a",modalWindow:"div",modalContent:"div",modalOverlay:"div",modalTitle:"h2"},o={modalLaunchLink:"launchy__launch-link",modalCloseLink:"launchy__close-link",modalWindow:"launchy__window",modalContent:"launchy__content",modalOverlay:"launchy__overlay",modalTitle:"launchy__title",modalWindowIsVisible:"launchy__window--is-visible",modalOverlayIsVisible:"launchy__overlay--is-visible"},s={launchyAriaHidden:"data-launchy-aria-hidden",launchyFocusable:"data-launchy-focusable",launchyTabIndex:"data-launchy-tabindex",launchyText:"data-launchy-text",launchyTitle:"data-launchy-title"},r={Escape:27},d={launchyElements:"[data-launchy]",launchyControl:"launchy-control-",launchyDialog:"launchy-dialog-",launchyCloseControl:"launchy-close-control-",modalOverlay:"modal-overlay-",modalTitle:"modal-title-"},u={modalClose:"Close modal window!",modalCloseHTML:'<span aria-hidden="true">&times;</span>',modalError:"Launchy container must have a `data-launchy-text` attribute!",modalErrorEmpty:"Launchy container `data-launchy-text` attribute cannot be empty!",modalWarning:"Launchy container should have a `data-launchy-title` attribute, or be sure to supply your own heading! (Prefereably an `<h2>`.)"},h=0,c=function(){function t(e){l(this,t),this.focusable=a(1),this.launchyId=h,this.hasTitle=!!e.title,this.modalIsVisible=!1,this.activeElement=null,this.shiftKeyIsPressed=!1,this.allFocusable=null,this.firstFocusable=null,this.lastFocusable=null,this.domFocusable=null,this.prepareFocusable(),this.createElements(e),this.insertElements(e),this.setupEventListeners(),h++}return i(t,[{key:"prepareFocusable",value:function(){this.domFocusable=document.querySelectorAll(this.focusable);var t=!0,e=!1,a=void 0;try{for(var l,i=Array.from(this.domFocusable)[Symbol.iterator]();!(t=(l=i.next()).done);t=!0){var n=l.value,o=!1;n.hasAttribute("tabindex")&&"-1"===n.getAttribute("tabindex")||(n.setAttribute(s.launchyTabIndex,!0),o=!0),n.hasAttribute("aria-hidden")&&"true"===n.getAttribute("aria-hidden")||(n.setAttribute(s.launchyAriaHidden,!0),o=!0),o&&n.setAttribute(s.launchyFocusable,!0)}}catch(t){e=!0,a=t}finally{try{!t&&i.return&&i.return()}finally{if(e)throw a}}}},{key:"createElements",value:function(t){this.launchControl=document.createElement(n.launchModal),this.launchControl.id=""+d.launchyControl+this.launchyId,this.launchControl.href="#"+d.launchyDialog+this.launchyId,this.launchControl.classList.add(o.modalLaunchLink),this.launchControl.setAttribute("aria-haspopup","dialog"),this.launchControl.textContent=t.text,this.closeControl=document.createElement(n.closeModal),this.closeControl.id=""+d.launchyCloseControl+this.launchyId,this.closeControl.href="#"+d.launchyControl+this.launchyId,this.closeControl.classList.add(o.modalCloseLink),this.closeControl.setAttribute("aria-label",u.modalClose),this.closeControl.innerHTML=u.modalCloseHTML,this.modalWindow=document.createElement(n.modalWindow),this.modalWindow.id=""+d.launchyDialog+this.launchyId,this.modalWindow.classList.add(o.modalWindow),this.modalWindow.setAttribute("tabindex",-1),this.modalWindow.setAttribute("role","dialog"),this.modalWindow.setAttribute("aria-modal",!0),this.hasTitle&&this.modalWindow.setAttribute("aria-labelledby",""+d.modalTitle+this.launchyId),this.modalOverlay=document.createElement(n.modalOverlay),this.modalOverlay.id=""+d.modalOverlay+this.launchyId,this.modalOverlay.classList.add(o.modalOverlay),this.modalOverlay.setAttribute("tabindex",0),this.modalContent=document.createElement(n.modalContent),this.modalContent.classList.add(o.modalContent),this.hasTitle&&(this.modalTitle=document.createElement(n.modalTitle),this.modalTitle.id=""+d.modalTitle+this.launchyId,this.modalTitle.classList.add(o.modalTitle),this.modalTitle.textContent=t.title)}},{key:"insertElements",value:function(t){var e=t.target.querySelectorAll(this.focusable);t.target.parentNode.insertBefore(this.launchControl,t.target),t.target.parentNode.insertBefore(this.modalWindow,t.target),this.modalWindow.appendChild(this.modalContent),this.modalContent.appendChild(this.closeControl),this.hasTitle&&this.modalContent.appendChild(this.modalTitle),this.modalContent.appendChild(t.target);var a=!0,l=!1,i=void 0;try{for(var n,o=Array.from(e)[Symbol.iterator]();!(a=(n=o.next()).done);a=!0){var r=n.value;r.removeAttribute(s.launchyAriaHidden),r.removeAttribute(s.launchyFocusable),r.removeAttribute(s.launchyTabIndex)}}catch(t){l=!0,i=t}finally{try{!a&&o.return&&o.return()}finally{if(l)throw i}}document.body.appendChild(this.modalOverlay)}},{key:"setupEventListeners",value:function(){this.launchControl.addEventListener("click",this.showModal.bind(this),!1),this.closeControl.addEventListener("click",this.hideModal.bind(this),!1),this.modalOverlay.addEventListener("click",this.hideModal.bind(this),!1),document.addEventListener("focus",this.trapFocus.bind(this),!0),document.addEventListener("keydown",this.checkEsc.bind(this),!1)}},{key:"showModal",value:function(t){t.preventDefault(),this.activeElement=document.activeElement,this.modalIsVisible=!0,this.allFocusable=this.modalWindow.querySelectorAll(this.focusable),this.firstFocusable=this.allFocusable[0],this.lastFocusable=this.allFocusable[this.allFocusable.length-1],this.modalWindow.classList.add(o.modalWindowIsVisible),this.modalOverlay.classList.add(o.modalOverlayIsVisible),this.modalWindow.setAttribute("aria-hidden",!1),this.inertElements(!0),this.modalWindow.focus()}},{key:"hideModal",value:function(t){t.preventDefault(),this.modalIsVisible=!1,this.allFocusable=null,this.firstFocusable=null,this.lastFocusable=null,this.modalWindow.classList.remove(o.modalWindowIsVisible),this.modalOverlay.classList.remove(o.modalOverlayIsVisible),this.modalWindow.setAttribute("aria-hidden",!0),this.inertElements(!1),this.activeElement.focus()}},{key:"trapFocus",value:function(t){this.modalIsVisible&&!this.modalWindow.contains(t.target)&&(t.stopPropagation(),this.shiftKeyIsPressed?this.lastFocusable.focus():this.firstFocusable.focus())}},{key:"checkEsc",value:function(t){this.modalIsVisible&&(this.shiftKeyIsPressed=t.shiftKey,t.keyCode===r.Escape&&this.hideModal(t))}},{key:"inertElements",value:function(t){var e=document.querySelectorAll("["+s.launchyFocusable+"]"),a=!0,l=!1,i=void 0;try{for(var n,o=Array.from(e)[Symbol.iterator]();!(a=(n=o.next()).done);a=!0){var r=n.value;t?(r.hasAttribute(s.launchyAriaHidden)&&r.setAttribute("aria-hidden",!0),r.hasAttribute(s.launchyTabIndex)&&r.setAttribute("tabindex",-1)):(r.removeAttribute("aria-hidden"),r.removeAttribute("tabindex"))}}catch(t){l=!0,i=t}finally{try{!a&&o.return&&o.return()}finally{if(l)throw i}}}}]),t}(),m=function(){var t=document.querySelectorAll(d.launchyElements),e=null,a=null,l=!0,i=!1,n=void 0;try{for(var o,r=Array.from(t)[Symbol.iterator]();!(l=(o=r.next()).done);l=!0){var h=o.value;if(e=h.getAttribute(s.launchyText),a=h.getAttribute(s.launchyTitle),!e)throw Error(u.modalError);if(""===e.trim())throw Error(u.modalErrorEmpty);a||console.warn(u.modalWarning);new c({target:h,text:e,title:a})}}catch(t){i=!0,n=t}finally{try{!l&&r.return&&r.return()}finally{if(i)throw n}}};document.addEventListener("DOMContentLoaded",m,!1),e.Launchy=c},function(t,e){t.exports='a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]'}]);