"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var t=require("react"),n=e(t),r=e(require("@material-ui/icons/Public")),a=e(require("@material-ui/icons/VpnLock")),o=e(require("@material-ui/icons/Person")),i=e(require("@material-ui/icons/Group")),l=require("react-admin"),c=require("@material-ui/core"),s=require("@material-ui/styles"),u=require("@material-ui/core/styles"),m=e(require("@material-ui/icons/Lock")),d=e(require("@material-ui/core/MenuItem")),f=e(require("@material-ui/icons/PowerSettingsNew")),p=e(require("@material-ui/icons/Share")),h=e(require("@material-ui/lab/Autocomplete")),g=e(require("@material-ui/icons/Edit")),y=e(require("@material-ui/icons/Check")),v=e(require("@material-ui/icons/AccountCircle"));function b(e,t,n,r,a,o,i){try{var l=e[o](i),c=l.value}catch(e){return void n(e)}l.done?t(c):Promise.resolve(c).then(r,a)}function E(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){b(o,r,a,i,l,"next",e)}function l(e){b(o,r,a,i,l,"throw",e)}i(void 0)}))}}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function P(){return(P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){w(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function A(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function I(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}(e,t)||O(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(e){return function(e){if(Array.isArray(e))return x(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||O(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e,t){if(e){if("string"==typeof e)return x(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?x(e,t):void 0}}function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function j(e){this.message=e}j.prototype=new Error,j.prototype.name="InvalidCharacterError";var T,L="undefined"!=typeof window&&window.atob&&window.atob.bind(window)||function(e){var t=String(e).replace(/=+$/,"");if(t.length%4==1)throw new j("'atob' failed: The string to be decoded is not correctly encoded.");for(var n,r,a=0,o=0,i="";r=t.charAt(o++);~r&&(n=a%4?64*n+r:r,a++%4)?i+=String.fromCharCode(255&n>>(-2*a&6)):0)r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(r);return i};function U(e){var t=e.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:t+="==";break;case 3:t+="=";break;default:throw"Illegal base64url string!"}try{return function(e){return decodeURIComponent(L(e).replace(/(.)/g,(function(e,t){var n=t.charCodeAt(0).toString(16).toUpperCase();return n.length<2&&(n="0"+n),"%"+n})))}(t)}catch(e){return L(t)}}function N(e){this.message=e}N.prototype=new Error,N.prototype.name="InvalidTokenError";var R=["acl:Read","acl:Append","acl:Write","acl:Control"],q=["acl:Append","acl:Write","acl:Control"],B=["acl:Append","acl:Write","acl:Control"],D=["acl:Write","acl:Control"],M=["acl:Control"],W=(w(T={},"acl:Read","Lire"),w(T,"acl:Append","Enrichir"),w(T,"acl:Write","Modifier"),w(T,"acl:Control","Administrer"),T),$={anon:"acl:agentClass",anyUser:"acl:agentClass",user:"acl:agent",group:"acl:group"},F={anon:{label:"Tous les utilisateurs",icon:n.createElement(r,null)},anyUser:{label:"Utilisateurs connectés",icon:n.createElement(a,null)},user:{icon:n.createElement(o,null)},group:{icon:n.createElement(i,null)}},G="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var z=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e){var t,n;t=G,n=function(){function e(e){var t=[];if(0===e.length)return"";if("string"!=typeof e[0])throw new TypeError("Url must be a string. Received "+e[0]);if(e[0].match(/^[^/:]+:\/*$/)&&e.length>1){var n=e.shift();e[0]=n+e[0]}e[0].match(/^file:\/\/\//)?e[0]=e[0].replace(/^([^/:]+):\/*/,"$1:///"):e[0]=e[0].replace(/^([^/:]+):\/*/,"$1://");for(var r=0;r<e.length;r++){var a=e[r];if("string"!=typeof a)throw new TypeError("Url must be a string. Received "+a);""!==a&&(r>0&&(a=a.replace(/^[\/]+/,"")),a=r<e.length-1?a.replace(/[\/]+$/,""):a.replace(/[\/]+$/,"/"),t.push(a))}var o=t.join("/"),i=(o=o.replace(/\/(\?|&|#[^!])/g,"$1")).split("?");return o=i.shift()+(i.length>0?"?":"")+i.join("&")}return function(){return e("object"==typeof arguments[0]?arguments[0]:[].slice.call(arguments))}},e.exports?e.exports=n():t.urljoin=n()})),V=function(e){return e?Array.isArray(e)?e:[e]:void 0},H=function(e,t){return z(e,t.replace(e,"_acl/"))},J=function(e){var t=e.basePath,r=e.className,a=e.data,o=e.hasList,i=e.hasShow,c=A(e,["basePath","className","data","hasList","hasShow"]);return n.createElement(l.TopToolbar,P({className:r},c),o&&n.createElement(l.ListButton,{basePath:t,record:a}),i&&n.createElement(l.ShowButton,{basePath:t,record:a}))},_=c.makeStyles((function(){return{toolbar:{flex:1,display:"flex",justifyContent:"space-between"}}})),K=function(e){var t=e.hasDelete,r=A(e,["hasDelete"]),a=_();return n.createElement(l.Toolbar,P({},r,{className:a.toolbar}),n.createElement(l.SaveButton,null),t&&n.createElement(l.DeleteButton,{undoable:!1}))},Q=u.makeStyles((function(e){return{main:{display:"flex",flexDirection:"column",minHeight:"100vh",alignItems:"center",justifyContent:"flex-start",backgroundColor:e.palette.primary[500]},card:{minWidth:300,marginTop:"6em"},lockIconAvatar:{margin:"1em",display:"flex",justifyContent:"center"},lockIcon:{backgroundColor:e.palette.secondary[500]}}})),X=function(e){var n=e.theme,r=e.history,a=e.location,o=e.buttons,i=Q(),d=l.useNotify(),f=l.useLogin(),p=new URLSearchParams(a.search);return p.has("token")&&(localStorage.setItem("token",p.get("token")),d("Vous êtes maintenant connecté","info"),r.push("/")),p.has("logout")&&(localStorage.removeItem("token"),d("Vous êtes maintenant déconnecté","info"),r.push("/")),t.createElement(s.ThemeProvider,{theme:u.createMuiTheme(n)},t.createElement("div",{className:i.main},t.createElement(c.Card,{className:i.card},t.createElement("div",{className:i.lockIconAvatar},t.createElement(c.Avatar,{className:i.lockIcon},t.createElement(m,null))),o&&o.map((function(e){return t.createElement(c.CardActions,null,t.cloneElement(e,{fullWidth:!0,variant:"outlined",type:"submit",onClick:function(){return f({},"/login")}}))})))),t.createElement(l.Notification,null))};X.defaultProps={buttons:[t.createElement(c.Button,{startIcon:t.createElement(c.Avatar,{src:"/lescommuns.jpg"})},"Les Communs")]};var Y=t.forwardRef((function(e,t){var r=l.useLogout();return n.createElement(d,{onClick:function(){return r()},ref:t},n.createElement(f,null),"   Se déconnecter")})),Z=c.makeStyles((function(){return{list:{padding:0,width:"100%"},option:{padding:0}}})),ee=function(e){var r=e.agents,a=e.addPermission,i=Z(),s=I(t.useState(null),2),u=s[0],m=s[1],d=I(t.useState(""),2),f=d[0],p=d[1],g=I(t.useState([]),2),y=g[0],v=g[1],b=l.useGetList("Person",{page:1,perPage:100},{field:"pair:label",order:"ASC"},{q:f},{enabled:f.length>0}),E=b.ids,w=b.data;return t.useEffect((function(){v(E.length>0?Object.values(w):[])}),[E,w]),n.createElement(h,{classes:{option:i.option},getOptionLabel:function(e){return e["pair:label"]},filterOptions:function(e){return e.filter((function(e){return!Object.keys(r).includes(e.id)}))},options:y,noOptionsText:"Aucun résultat",autoComplete:!0,blurOnSelect:!0,clearOnBlur:!0,disableClearable:!0,value:u,onChange:function(e,t){a(t.id||t["@id"],"user","acl:Read"),m(null),p(""),v([])},onInputChange:function(e,t){p(t)},renderInput:function(e){return n.createElement(c.TextField,P({},e,{label:"Ajouter un utilisateur ou un groupe...",variant:"filled",margin:"dense",fullWidth:!0}))},renderOption:function(e){return n.createElement(c.List,{dense:!0,className:i.list},n.createElement(c.ListItem,{button:!0},n.createElement(c.ListItemAvatar,null,n.createElement(c.Avatar,{src:e.image},n.createElement(o,null))),n.createElement(c.ListItemText,{primary:e["pair:label"]})))}})},te=c.makeStyles((function(){return{listItem:{paddingLeft:4,paddingRight:36},primaryText:{width:"30%",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},secondaryText:{textAlign:"center",width:"60%",fontStyle:"italic",color:"grey"}}})),ne=function(e){var r=e.agent,a=e.addPermission,o=e.removePermission,i=te(),s=l.useDataProvider(),u=I(n.useState(null),2),m=u[0],d=u[1],f=I(t.useState(),2),p=f[0],h=f[1],v=I(t.useState(!0),2),b=v[0],E=v[1],w=I(t.useState(),2),P=w[0],k=w[1];if(t.useEffect((function(){"user"===r.type?s.getOne("Person",{id:r.id}).then((function(e){var t=e.data;h(t),E(!1)})).catch((function(e){k(e),E(!1)})):E(!1)}),[r.id,r.type]),"group"===r.type)return null;var C=function(){return d(null)};return b?n.createElement(l.Loading,null):P?n.createElement(l.Error,null):n.createElement(c.ListItem,{button:!0,className:i.listItem},n.createElement(c.ListItemAvatar,null,n.createElement(c.Avatar,{src:null==p?void 0:p.image},r.icon)),n.createElement(c.ListItemText,{className:i.primaryText,primary:r.label||(null==p?void 0:p["pair:label"])}),n.createElement(c.ListItemText,{className:i.secondaryText,primary:r.permissions&&r.permissions.map((function(e){return W[e]})).join(", ")}),n.createElement(c.ListItemSecondaryAction,null,n.createElement(c.IconButton,{onClick:function(e){return d(e.currentTarget)}},n.createElement(g,null)),n.createElement(c.Menu,{anchorEl:m,keepMounted:!0,open:Boolean(m),onClose:C},Object.entries(W).map((function(e){var t=I(e,2),i=t[0],l=t[1],s=r.permissions&&r.permissions.includes(i);return n.createElement(c.MenuItem,{onClick:function(){s?o(r.id,r.type,i):a(r.id,r.type,i),C()}},n.createElement(c.ListItemIcon,null,s?n.createElement(y,null):null),n.createElement(c.ListItemText,{primary:l}))})))))},re=c.makeStyles((function(e){return{list:{width:"100%",maxWidth:"100%",backgroundColor:e.palette.background.paper}}})),ae=function(e){var t=e.agents,r=e.addPermission,a=e.removePermission,o=re();return n.createElement(c.List,{dense:!0,className:o.list},Object.entries(t).map((function(e){var t=I(e,2),o=t[0],i=t[1];return n.createElement(ne,{key:o,agent:i,addPermission:r,removePermission:a})})))},oe={"foaf:Agent":C(C({id:"foaf:Agent",type:"anon"},F.anon),{},{permissions:[]}),"acl:AuthenticatedAgent":C(C({id:"acl:AuthenticatedAgent",type:"anyUser"},F.anyUser),{},{permissions:[]})},ie=function(e,t){return Array.isArray(e["acl:agentClass"])?e["acl:agentClass"].includes(t):e["acl:agentClass"]===t},le=function(e,t,n,r){e[t]?e[t].permissions.push(r):e[t]=C(C({id:t,type:n},F[n]),{},{permissions:[r]})},ce=function(e){var n=l.usePermissionsOptimized(e).permissions,r=l.useAuthProvider(),a=I(t.useState({}),2),o=a[0],i=a[1];t.useEffect((function(){var e=oe;if(n){var t,r=function(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=O(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,a,o=!0,i=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return o=e.done,e},e:function(e){i=!0,a=e},f:function(){try{o||null==r.return||r.return()}finally{if(i)throw a}}}}(n);try{var a=function(){var n=t.value;ie(n,"foaf:Agent")&&le(e,"foaf:Agent","anon",n["acl:mode"]),ie(n,"acl:AuthenticatedAgent")&&le(e,"acl:AuthenticatedAgent","anyUser",n["acl:mode"]),n["acl:agent"]&&V(n["acl:agent"]).forEach((function(t){return le(e,t,"user",n["acl:mode"])})),n["acl:agentGroup"]&&V(n["acl:agentGroup"]).forEach((function(t){return le(e,t,"group",n["acl:mode"])}))};for(r.s();!(t=r.n()).done;)a()}catch(e){r.e(e)}finally{r.f()}}i(e)}),[n]);var c=t.useCallback((function(t,n,a){var l,c=o;i(C(C({},o),{},w({},t,C(C({id:t,type:n},F[n]),{},{permissions:o[t]?[].concat(S(null===(l=o[t])||void 0===l?void 0:l.permissions),[a]):[a]})))),r.addPermission(e,t,n,a).catch((function(){i(c)}))}),[o,e,r]),s=t.useCallback((function(t,n,a){var l=o;i(Object.fromEntries(Object.entries(o).map((function(e){var n=I(e,2),r=n[0],o=n[1];return o.id===t&&(o.permissions=o.permissions.filter((function(e){return e!==a}))),[r,o]})).filter((function(e){var t=I(e,2),n=(t[0],t[1]);return"foaf:Agent"===n.id||"acl:AuthenticatedAgent"===n.id||n.permissions.length>0})))),r.removePermission(e,t,n,a).catch((function(){i(l)}))}),[o,e,r]);return{agents:o,addPermission:c,removePermission:s}},se=c.makeStyles((function(){return{title:{paddingBottom:8},actions:{padding:15},addForm:{paddingTop:0},listForm:{paddingTop:0,paddingBottom:0,paddingRight:0,maxHeight:210}}})),ue=function(e){var t=e.open,r=e.onClose,a=e.resourceId,o=se(),i=ce(a),s=i.agents,u=i.addPermission,m=i.removePermission;return n.createElement(c.Dialog,{fullWidth:!0,open:t,onClose:r},n.createElement(c.DialogTitle,{className:o.title},"Permissions sur la ressource"),n.createElement(c.DialogContent,{className:o.addForm},n.createElement(ee,{agents:s,addPermission:u})),n.createElement(c.DialogContent,{className:o.listForm},n.createElement(ae,{agents:s,addPermission:u,removePermission:m})),n.createElement(c.DialogActions,{className:o.actions},n.createElement(l.Button,{label:"ra.action.close",variant:"inlined",onClick:r})))},me=function(e){var r=e.record,a=I(t.useState(!1),2),o=a[0],i=a[1];return r?n.createElement(n.Fragment,null,n.createElement(l.Button,{label:"Permissions",onClick:function(){return i(!0)}},n.createElement(p,null)),n.createElement(ue,{resourceId:r.id||r["@id"],open:o,onClose:function(){return i(!1)}})):null},de=function(e){var t=e.basePath,r=e.className,a=e.data,o=e.hasList,i=e.hasEdit,c=e.hasControl,s=A(e,["basePath","className","data","hasList","hasEdit","hasControl"]);return n.createElement(l.TopToolbar,P({className:r},s),o&&n.createElement(l.ListButton,{basePath:t,record:a}),i&&n.createElement(l.EditButton,{basePath:t,record:a}),c&&n.createElement(me,{basePath:t,record:a}))},fe=t.forwardRef((function(e,t){var r=e.onClick,a=e.webId;return n.createElement(l.MenuItemLink,{ref:t,to:"/Person/".concat(encodeURIComponent(a),"/show"),primaryText:"Voir mon profil",leftIcon:n.createElement(v,null),onClick:r})})),pe=t.forwardRef((function(e,t){var r=e.onClick,a=e.webId;return n.createElement(l.MenuItemLink,{ref:t,to:"/Person/".concat(encodeURIComponent(a),"/edit"),primaryText:"Editer mon profil",leftIcon:n.createElement(g,null),onClick:r})})),he=t.forwardRef((function(e,t){var r=e.onClick;return n.createElement(l.MenuItemLink,{ref:t,to:"/login",primaryText:"Se connecter",onClick:r})}));exports.EditActions=J,exports.EditWithPermissions=function(e){var t=l.usePermissionsOptimized(e.id).permissions;return n.createElement(l.Edit,P({actions:n.createElement(J,null)},e,{permissions:t}),n.cloneElement(e.children,{toolbar:n.createElement(K,{hasDelete:t&&t.some((function(e){return D.includes(e["acl:mode"])}))})}))},exports.LoginPage=X,exports.LogoutButton=Y,exports.ResourceWithPermissions=function(e){var t=e.name,r=e.list,a=e.create,o=A(e,["name","list","create"]),i=l.usePermissionsOptimized(t).permissions;return n.createElement(l.Resource,P({},o,{name:t,list:i&&i.some((function(e){return R.includes(e["acl:mode"])}))?r:void 0,create:i&&i.some((function(e){return q.includes(e["acl:mode"])}))?a:void 0}))},exports.ShowActions=de,exports.ShowWithPermissions=function(e){var t=l.usePermissionsOptimized(e.id).permissions;return n.createElement(l.Show,P({actions:n.createElement(de,{hasControl:t&&t.some((function(e){return M.includes(e["acl:mode"])}))})},e,{permissions:t,hasEdit:t&&t.some((function(e){return B.includes(e["acl:mode"])}))}))},exports.UserMenu=function(e){var t=e.logout,r=A(e,["logout"]),a=l.useGetIdentity().identity;return n.createElement(l.UserMenu,r,a&&""!==a.id?[n.createElement(fe,{webId:a.id,key:"view"}),n.createElement(pe,{webId:a.id,key:"edit"}),n.cloneElement(t,{key:"logout"})]:n.createElement(he,null))},exports.authProvider=function(e){var t,n,r,a=e.middlewareUri,o=e.httpClient,i=e.checkPermissions,l=e.resources;return{login:function(e){return window.location.href="".concat(a,"auth?redirectUrl=")+encodeURIComponent(window.location.href),Promise.resolve()},logout:function(){var e=new URL(window.location.href);return window.location.href="".concat(a,"auth/logout?redirectUrl=")+encodeURIComponent(e.origin+"/login?logout"),Promise.resolve("/")},checkAuth:function(){return localStorage.getItem("token"),Promise.resolve()},checkError:function(e){return Promise.resolve()},getPermissions:(r=E(regeneratorRuntime.mark((function e(t){var n,r,c,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i){e.next=2;break}return e.abrupt("return",!0);case 2:return n=l[t]?l[t].containerUri:t,r=H(a,n),e.next=6,o(r);case 6:return c=e.sent,s=c.json,e.abrupt("return",s["@graph"]);case 9:case"end":return e.stop()}}),e)}))),function(e){return r.apply(this,arguments)}),addPermission:(n=E(regeneratorRuntime.mark((function e(t,n,r,i){var c,s,u;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=l[t]?l[t].containerUri:t,s=H(a,c),u={"@id":s+"#"+i.replace("acl:",""),"@type":"acl:Authorization","acl:accessTo":c,"acl:mode":i},e.t0=r,e.next="user"===e.t0?6:"group"===e.t0?8:"anon"===e.t0||"anyUser"===e.t0?10:12;break;case 6:return u["acl:agent"]=n,e.abrupt("break",13);case 8:return u["acl:agentGroup"]=n,e.abrupt("break",13);case 10:return u["acl:agentClass"]=n,e.abrupt("break",13);case 12:throw new Error("Unknown agent type: "+r);case 13:return e.next=15,o(s,{method:"PATCH",body:JSON.stringify({"@context":{acl:"http://www.w3.org/ns/auth/acl#",foaf:"http://xmlns.com/foaf/0.1/"},"@graph":[u]})});case 15:case"end":return e.stop()}}),e)}))),function(e,t,r,a){return n.apply(this,arguments)}),removePermission:(t=E(regeneratorRuntime.mark((function e(t,n,r,i){var c,s,u,m,d,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=l[t]?l[t].containerUri:t,s=$[r],u=H(a,c),e.next=5,o(u);case 5:return m=e.sent,d=m.json,f=d["@graph"].map((function(e){var t=V(e["acl:mode"]),r=V(e[s]);return i&&t.includes(i)&&r&&r.includes(n)&&(r=r.filter((function(e){return e!==n}))),C(C({},e),{},w({},s,r))})),e.next=10,o(u,{method:"PUT",body:JSON.stringify(C(C({},d),{},{"@graph":f}))});case 10:case"end":return e.stop()}}),e)}))),function(e,n,r,a){return t.apply(this,arguments)}),getIdentity:function(){var e=localStorage.getItem("token");if(e){var t=function(e,t){if("string"!=typeof e)throw new N("Invalid token specified");var n=!0===(t=t||{}).header?0:1;try{return JSON.parse(U(e.split(".")[n]))}catch(e){throw new N("Invalid token specified: "+e.message)}}(e);return{id:t.webId,fullName:t.name}}}}};
