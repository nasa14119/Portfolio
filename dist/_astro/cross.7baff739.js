import{r as l}from"./index.ed373d49.js";var f={exports:{}},s={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u=l,a=Symbol.for("react.element"),m=Symbol.for("react.fragment"),x=Object.prototype.hasOwnProperty,y=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function i(o,r,p){var e,t={},n=null,_=null;p!==void 0&&(n=""+p),r.key!==void 0&&(n=""+r.key),r.ref!==void 0&&(_=r.ref);for(e in r)x.call(r,e)&&!c.hasOwnProperty(e)&&(t[e]=r[e]);if(o&&o.defaultProps)for(e in r=o.defaultProps,r)t[e]===void 0&&(t[e]=r[e]);return{$$typeof:a,type:o,key:n,ref:_,props:t,_owner:y.current}}s.Fragment=m;s.jsx=i;s.jsxs=i;f.exports=s;var d=f.exports;const E="/_astro/cross.9917ef33.svg";export{E as C,d as j};
