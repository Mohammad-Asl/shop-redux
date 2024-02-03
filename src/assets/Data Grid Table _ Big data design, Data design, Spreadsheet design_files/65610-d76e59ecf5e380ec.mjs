"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[65610],{411938:(e,t,n)=>{n.d(t,{Z:()=>r});function r(e,t,n=28){let r;if(!(e||{}).resurrection_info&&!(t||{}).resurrectionInfo)return!1;r=t?((t||{}).resurrectionInfo||{}).resurrectionDate:((e||{}).resurrection_info||{}).resurrection_dt;let o=new Date,i=r?new Date(r):o;return i.setDate(i.getDate()+n),new Date().getTime()<i.getTime()}},88307:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(186656),o=n(867820),i=n(529195);async function a(e){let t=(0,i.i$)(),n=(0,i.nR)(),a=(0,i.di)(),l=t?t.map(({pageType:e,...t})=>t):null,s={is_register:null!=e&&e};if(l&&(s.unauth_visited_pages=JSON.stringify(l)),n&&(s.invite_redemption=JSON.stringify(n)),a&&(s.paid_landing=JSON.stringify(a)),l||n||a){let e=await (0,r.Z)({url:"/v3/orientation/user_landing_signals/",method:"POST",data:s});(0,o.My)(`landing_signals.flush.${e.status}`),(0,i.z$)()}}},524172:(e,t,n)=>{n.d(t,{M:()=>m,Z:()=>P});var r=n(667294),o=n(366284),i=n(425288),a=n(83969),l=n(914772),s=n(773285),_=n(780280),u=n(867820),c=n(50286),d=n(785893);let g=["dweb_google_chrome_fedcm_eap_select_by","dweb_google_chrome_fedcm_eap_button_gesture","dweb_google_chrome_fedcm_eap_exempt_idp"],p=["mweb_google_chrome_fedcm_eap_select_by","mweb_google_chrome_fedcm_eap_button_gesture","mweb_google_chrome_fedcm_eap_exempt_idp"],f={dweb_google_chrome_fedcm_eap_exempt_idp:121,mweb_google_chrome_fedcm_eap_exempt_idp:121},{Provider:h,useMaybeHook:m}=(0,i.Z)("GoogleSignInApi"),b=()=>{let e=(0,c.HG)(),{checkExperiment:t}=(0,s.F)();return t(e?"web_google_disabled":"mweb_google_disabled").anyEnabled},w=()=>{let{userAgent:e}=(0,_.B)(),{browserName:t,platform:n}=e,r=null!=t?t:"";return(0,o.G6)(r)||"ios"===n},v=(e,t,n,r)=>e.some(e=>{let o=f[e]||116,i=n>=o;return(0,u.My)(`${r}.is_chrome.is_ver_at_least_${o}_${String(i)}`),i&&t(e).anyEnabled}),y=()=>{var e;let t=(0,c.HG)(),{checkExperiment:n}=(0,s.F)(),{userAgent:r}=(0,_.B)(),i=r.browserVersion?parseInt(r.browserVersion.split(".")[0],10):0,a=(0,o.i7)(null!==(e=r.browserName)&&void 0!==e?e:"");return a&&(t&&v(g,n,i,t?"dweb":"mweb")||!t&&"android"===r.platform&&v(p,n,i,t?"dweb":"mweb"))};function P({children:e}){let t=b(),n=w(),o=y(),i=(0,r.useRef)(null),s=(0,r.useRef)(new Set),g=(0,r.useRef)(new Set),p=(0,r.useRef)(null),{language:f}=(0,_.B)(),m=(0,c.HG)(),v=m?"dweb":"mweb",P=(0,r.useRef)(!1),E=(0,r.useCallback)(()=>{if(P.current)return;P.current=!0;let e=!1,t=()=>{let t=(0,a.Fm)();t&&!e&&(e=!0,(0,l.Z)({type:"loadScript",status:"success"}),(0,l.Z)({type:"apiClient",valid:!!t}),p.current=t,(0,a.OY)({autoSelect:!0,itpSupport:n,isFedCMEnabled:o},e=>{if((0,l.Z)({type:"response",valid:!!e}),!e)return;(0,u.My)(`${v}.google_sign_in.select_by.${e.select_by}`);let t=(0,a.PL)(e.select_by);if("SIGN_IN_WITH_GOOGLE_BUTTON"===t){let t=Array.from(s.current),n=t[t.length-1],r=i.current;n?n(e):r&&r(e)}else{var n;null===(n=i.current)||void 0===n||n.call(i,e)}}),g.current.forEach(e=>{e()}),g.current.clear())};window.onGoogleLibraryLoad=()=>t(),(0,l.Z)({type:"loadScript",status:"start"}),(0,a.Px)(void 0,f).then(()=>{t()}).catch(()=>{})},[n,f,o,v]);(0,r.useEffect)(()=>{t?(s.current.clear(),g.current.clear()):E()},[t,E]);let O=(0,r.useRef)({ensureInit:(e,t)=>(E(),"button"===e?s.current.add(t):i.current=t,new Promise(e=>{let t=!!p.current;t?e():g.current.add(e)})),removeButtonCallback:e=>{s.current.delete(e)}});return(0,d.jsx)(h,{value:O.current,children:e})}},83969:(e,t,n)=>{n.d(t,{Fm:()=>a,OY:()=>s,PL:()=>u,Px:()=>l,mK:()=>c,ru:()=>_});var r=n(713930),o=n(966113),i=n(867820);let a=()=>{var e,t,n;return null===(e=window)||void 0===e?void 0:null===(t=e.google)||void 0===t?void 0:null===(n=t.accounts)||void 0===n?void 0:n.id},l=(e,t)=>(0,r.Z)("https://accounts.google.com/gsi/client"+(t?`?hl=${t}`:""),null!=e&&e.unsafe?null:"GSI"),s=({autoSelect:e,itpSupport:t,isFedCMEnabled:n},r)=>{var i;null===(i=a())||void 0===i||i.initialize({auto_select:null!=e&&e,client_id:o.v3o,callback:r,cancel_on_tap_outside:!1,context:"use",itp_support:t,use_fedcm_for_prompt:n})},_=({buttonRef:e,isDesktop:t,locale:n,logo_alignment:r})=>{let o=a();if(o&&e.current){let t=e.current.offsetWidth;o.renderButton(e.current,{locale:n,size:"large",shape:"pill",text:"continue_with",theme:"outline",width:t+"px",logo_alignment:r,click_listener:()=>(0,i.EX)({event:"start",provider:"google"})})}else(0,i.My)((t?"unauth_web":"unauth_mweb")+".gsi_button.not_initialized")},u=e=>["auto","fedcm_auto"].includes(e)?"AUTO_LOGIN":e.startsWith("btn")?"SIGN_IN_WITH_GOOGLE_BUTTON":"ONE_TAP_PROMPT",c=e=>{switch(e){case"SIGN_IN_WITH_GOOGLE_BUTTON":return"gsi_btn";case"ONE_TAP_PROMPT":return"onetap_btn";default:return"other"}}},45169:(e,t,n)=>{n.d(t,{E_:()=>_,Eh:()=>i,du:()=>s,yV:()=>a});var r=n(109322),o=n(116485);let i=(e,t)=>"DEPRECATED_CHECK_EXISTS"===t?"facebook_id"in e&&"facebook"||"google_open_id_token"in e&&"google"||"line_id_token"in e&&"line"||"email":"DEPRECATED_CHECK_TRUTHY"===t?e.facebook_id?"facebook":e.google_open_id_token?"google":e.line_id_token?"line":"email":e.type,a=e=>{let t=i(e,"DEPRECATED_CHECK_TRUTHY");return"google"===t?"google_one_tap":t},l=(e="")=>e in r.i5,s=e=>o.rT.includes(e)||o.ZR.has(e)||l(e),_={GOOGLE:"g",FACEBOOK:"fb",PINTEREST:"p",APPLE:"apl",LINE:"ln",UNKNOWN:"unk"}},914772:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(701563),o=n(867820);let i=e=>(0,o.dy)({event:e,provider:"google"}),a=e=>(0,r.RP)("google_autologin",e),l=e=>(0,r.M3)("google_autologin",e),s=e=>{switch(e.type){case"loadScript":"start"===e.status?(i("start"),i("load_script_start"),l("autoLoginGoogleStart")):"success"===e.status?i("load_script_success"):i("load_script_failure");break;case"apiClient":e.valid?(i("initialize_library"),l("autoLoginGoogleInitEnd")):(a("noAccountFound"),i("global_object_not_found"));break;case"response":e.valid?(i("receive_credential_response_from_provider"),(0,o.EX)({event:"receive_credential_response_from_provider",provider:"google"})):(a("noResponse"),(0,o.EX)({event:"receive_no_credential_response_from_provider",provider:"google"}));break;case"autologin":"start"===e.status?(i("pinterest_login_start"),(0,o.NC)("press_google_one_tap_other"),(0,r.M3)("google_autologin","autoLoginGoogleEnd"),(0,r.PA)("google_autologin")):("success"===e.status?i("pinterest_login_success"):i("pinterest_login_failure"),i("end"));break;case"manualLoginAttempt":(0,o.NC)(e.fromConnectButton?"press_google_one_tap_button":"press_google_one_tap"),(0,r.PA)("google_autologin")}}},383690:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(667294),o=n(773285);let i=()=>{let e=(0,o.F)();return(0,r.useCallback)(()=>{e.flush()},[e])}},701563:(e,t,n)=>{n.d(t,{M3:()=>h,PA:()=>m,RP:()=>f,gq:()=>g});var r=n(991067),o=n(790348),i=n(543059),a=n(638089),l=n(558775),s=n(729524),_=n(358864),u=n(985271);let c=({name:e,pwtStaticContext:t})=>{if(!u.Z||!(0,r.Z)())return null;let n={type:"stopwatch",name:e},o=[],i=!0;return{abort:e=>{i&&(i=!1,(0,l.Z)({metricId:n,pwtStaticContext:t,result:{type:"ABORT",reason:e}}))},annotate:e=>{i&&o.push({label:e,timestamp:u.Z.now()})},stop:()=>{if(!i)return;i=!1;let e={type:"COMPLETE",traceId:(0,_.Z)(),startTime:0,endTime:u.Z.now(),spans:[],annotationMap:(0,s.Z)(o),binaryAnnotationMap:(0,a.ng)({metricId:n,pwtStaticContext:t})};(0,l.Z)({metricId:n,pwtStaticContext:t,result:e})}}},d={},g=(e,t)=>{t.forEach(t=>{d[t]=c({name:t,pwtStaticContext:e})})},p=e=>d[e],f=(e,t)=>{let n=p(e);if(n)try{n.abort(t)}catch(t){(0,o.H)("app_load_stopwatch_error",{name:e,result:"abort"})}},h=(e,t)=>{let n=p(e);n&&(n.annotate(t),(0,i.ZP)(`stopwatch_${e}_${t}`))},m=e=>{let t=p(e);if(t)try{t.stop()}catch(t){(0,o.H)("app_load_stopwatch_error",{name:e,result:"complete"})}}},729524:(e,t,n)=>{n.d(t,{Z:()=>r});let r=e=>{let t={};e.forEach(({label:e,timestamp:n})=>{t={...t,[e]:(t[e]||[]).concat([n])}});let n=Object.freeze({});return Object.keys(t).forEach(e=>{(t[e]||[]).forEach((t,r)=>{let o=r?`${e}_${r+1}`:e;n={...n,[o]:t}})}),n}},932046:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(826067);function o(){let e=(0,r.mB)(window.location.search);if("31"===e.utm_source)return"email";if(e.utm_pai)return"paid";let t=document.referrer;return t?t.includes("/t.co/")?"twitter":t.includes("cdn.ampproject.org")?"amp":t.includes("google.")?"google":t.includes("bing.")?"bing":t.includes("facebook.")?"facebook":"other":"direct"}},69642:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(667294),o=n(932046),i=n(867820);function a(){return(0,r.useCallback)(e=>{e.action&&e.event?(0,i.My)("pinner_conversion",{...e,type:e.type||"none",trigger:e.trigger||"other",referrer:(0,o.Z)()}):(0,i.My)("pinner_conversion.missing_tags")},[])}},348584:(e,t,n)=>{n.d(t,{D:()=>_,Z:()=>u});var r=n(667294),o=n(616550),i=n(826067),a=n(785893);let l=(0,r.createContext)(!1),s=()=>{var e,t;let n=(0,o.useLocation)(),r=(0,o.useHistory)();return(null===(e=r.location.state)||void 0===e?void 0:e.isAppFactoryOAuth)||(null!==(t=(0,i.mB)(n.search).next)&&void 0!==t?t:"").startsWith("/app-factory-oauth/")};function _({children:e}){let t=s(),[n,o]=(0,r.useState)(t);return(0,r.useEffect)(()=>{t&&o(!0)},[t]),(0,a.jsx)(l.Provider,{value:n,children:e})}function u(){return(0,r.useContext)(l)}},529195:(e,t,n)=>{n.d(t,{Cb:()=>L,Ff:()=>B,Lp:()=>w,O0:()=>C,OJ:()=>E,PW:()=>x,S2:()=>P,Yi:()=>k,Yy:()=>$,Z4:()=>h,ZN:()=>d,dc:()=>T,di:()=>v,i$:()=>p,nR:()=>m,oQ:()=>Z,t_:()=>g,z$:()=>N});var r=n(214494),o=n(231486),i=n(226198),a=n(844974),l=n(339363),s=n(867820),_=n(826067),u=n(116485),c=n(332215);let d=["utm_pai","utm_source","invite_code"],g=()=>(0,a.qn)(u.tz,""),p=()=>{let e;let t=g();try{e=JSON.parse(t)}catch(t){e=[]}return e},f=()=>(0,a.L_)(u.tz),h=(e,t)=>{let n=p(),r=n.length,o=r?n[0].path:"";if(r<u.eA&&(!r||e!==o)){let r={path:e,pageType:t,ts:Date.now()};(0,a.Nh)(u.tz,JSON.stringify([r].concat(n)))}},m=()=>{let e;let t=(0,a.qn)(u.Lg,"");try{e=JSON.parse(t)}catch(t){e=null}return e},b=()=>(0,a.L_)(u.Lg),w=e=>{if(!e)return;let t={inviteCode:e,ts:Date.now()};(0,a.Nh)(u.Lg,JSON.stringify(t))},v=()=>{let e;let t=(0,a.qn)(u.eV,"");try{e=JSON.parse(t)}catch(t){e=null}return e},y=()=>(0,a.L_)(u.Lg),P=(e,t)=>{if(!e)return;let n={...!!t&&{adImageUrl:t},campaignId:e,ts:Date.now()};(0,a.Nh)(u.eV,JSON.stringify(n))},E=()=>(0,a.qn)(u.fo,""),O=()=>(0,a.L_)(u.fo),L=e=>{(0,a.Nh)(u.fo,e)},N=()=>{g()&&f(),m()&&b(),v()&&y(),E()&&O()};function T(){let e=p();return e.filter(e=>"closeup"===e.pageType).length}function k(){let e=r.Z.create("UnauthUserDataResource");return new Promise((t,n)=>{e.callGet().then(e=>{let r=e.resource_response.data,a=!!o.U2(i.x3);return r?((0,c.Wn)(r.medium_image_url)&&(r.medium_image_url=""),(0,s.My)(`mweb.unauth.personalized_login.fetch_user_info.info.user_info_found.logged_out_cookie_${a?"true":"false"}`),t(r)):((0,s.My)(`mweb.unauth.personalized_login.fetch_user_info.info.no_user_info.logged_out_cookie_${a?"true":"false"}`),n({}))}).catch(e=>{if(e&&e.message){let t=e.message.replace(/\s/g,"_").toLowerCase();(0,s.My)(`mweb.unauth.personalized_login.fetch_user_info.error.${t}`)}else(0,s.My)("mweb.unauth.personalized_login.fetch_user_info.error.unknown");return n(e)})})}function S({i18n:e,location:t}){let n;let r=t.pathname.startsWith("/signup"),o=t.pathname.startsWith("/login");if(!r&&!o)return{showPLPBanner:!1,pinForBanner:null};try{n=JSON.parse((0,l.qn)(u.KH))}catch(e){n=[]}if(n&&n.length>0){let t=n[0];if(t)return t.bannerCopy=e._('More ideas like this await', 'page banner with pin image that was signed up from', 'page banner with pin image that was signed up from'),{showPLPBanner:!!t.image,pinForBanner:t}}return{showPLPBanner:!1,pinForBanner:null}}let $=e=>e.search&&e.search.startsWith("?next=")?e.search.split("?next=")[1]:null;function A({i18n:e,location:t}){var n;let r=(null===(n=t.state)||void 0===n?void 0:n.next)||$(t);if(r){let t=r.indexOf("?"),n=(0,_.mB)(r.substring(t));if(n.url&&n.media)return{showPLPBanner:!0,pinForBanner:{image:{url:(0,_.Jx)(n.media),height:1,width:1},pinDescription:n.description,bannerCopy:e._('Save this idea and discover more inspiration like it.', 'page banner with pin image that was signed up from', 'page banner with pin image that was signed up from')}}}return{showPLPBanner:!1,pinForBanner:null}}function B({i18n:e,location:t}){return A({i18n:e,location:t}).showPLPBanner?A({i18n:e,location:t}):S({i18n:e,location:t}).showPLPBanner?S({i18n:e,location:t}):{showPLPBanner:!1,pinForBanner:null}}let Z=(e,t)=>e?`https://i.pinimg.com/${t||"474x"}/${e.substr(0,2)}/${e.substr(2,2)}/${e.substr(4,2)}/${e}.jpg`:"",C=e=>e?`https://i.pinimg.com/75x75/${e.substr(0,2)}/${e.substr(2,2)}/${e.substr(4,2)}/${e}.jpg`:"",x=e=>e?`https://i.pinimg.com/236x/${e.substr(0,2)}/${e.substr(2,2)}/${e.substr(4,2)}/${e}.jpg`:""},332215:(e,t,n)=>{function r(e){return!!(null==e?void 0:e.is_matured_new_user)}n.d(t,{IR:()=>a,V0:()=>r,Wn:()=>i,xT:()=>o});let o=e=>!!e&&2===e.login_state,i=e=>!!(e&&e.match(/\/static\/images\/user\/default_\d+\.png$/));function a(e){return!e||void 0===e.third_party_marketing_tracking_enabled||null===e.third_party_marketing_tracking_enabled||e.third_party_marketing_tracking_enabled}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/65610-d76e59ecf5e380ec.mjs.map