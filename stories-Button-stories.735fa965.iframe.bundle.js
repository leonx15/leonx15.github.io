/*! For license information please see stories-Button-stories.735fa965.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[791],{"./src/stories/Button.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Large:()=>Large,Primary:()=>Primary,Secondary:()=>Secondary,Small:()=>Small,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_test__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/test/dist/index.mjs");const __WEBPACK_DEFAULT_EXPORT__={title:"Example/Button",component:__webpack_require__("./src/stories/Button.jsx").$,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}},args:{onClick:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fn)()}},Primary={args:{primary:!0,label:"Button"}},Secondary={args:{primary:!1,label:"Button"},play:async _ref=>{let{args,canvasElement}=_ref;const button=(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.ux)(canvasElement).getByRole("button",{name:/Button/i});await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(button).toBeInTheDocument(),await _storybook_test__WEBPACK_IMPORTED_MODULE_0__.Q4.click(button),await(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.fm)((()=>(0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__.E3)(args.onClick).toHaveBeenCalled()))}},Large={args:{size:"large",label:"Button"}},Small={args:{size:"small",label:"Button"}};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {\n    primary: true,\n    label: 'Button'\n  }\n}",...Primary.parameters?.docs?.source}}},Secondary.parameters={...Secondary.parameters,docs:{...Secondary.parameters?.docs,source:{originalSource:"{\n  args: {\n    primary: false,\n    label: 'Button'\n  },\n  play: async ({\n    args,\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const button = canvas.getByRole('button', {\n      name: /Button/i\n    });\n    await expect(button).toBeInTheDocument();\n    await userEvent.click(button);\n    await waitFor(() => expect(args.onClick).toHaveBeenCalled());\n  }\n}",...Secondary.parameters?.docs?.source}}},Large.parameters={...Large.parameters,docs:{...Large.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'large',\n    label: 'Button'\n  }\n}",...Large.parameters?.docs?.source}}},Small.parameters={...Small.parameters,docs:{...Small.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'small',\n    label: 'Button'\n  }\n}",...Small.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","Secondary","Large","Small"]},"./src/stories/Button.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Button});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Button=_ref=>{let{primary,backgroundColor,size,label,...props}=_ref;const mode=primary?"storybook-button--primary":"storybook-button--secondary";return(0,jsx_runtime.jsx)("button",{type:"button",className:["storybook-button","storybook-button--".concat(size),mode].join(" "),style:backgroundColor&&{backgroundColor},...props,children:label})};Button.defaultProps={backgroundColor:null,primary:!1,size:"medium",onClick:void 0},Button.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"Button",props:{backgroundColor:{defaultValue:{value:"null",computed:!1},description:"What background color to use",type:{name:"string"},required:!1},primary:{defaultValue:{value:"false",computed:!1},description:"Is this the principal call to action on the page?",type:{name:"bool"},required:!1},size:{defaultValue:{value:"'medium'",computed:!1},description:"How large should the button be?",type:{name:"enum",value:[{value:"'small'",computed:!1},{value:"'medium'",computed:!1},{value:"'large'",computed:!1}]},required:!1},onClick:{defaultValue:{value:"undefined",computed:!0},description:"Optional click handler",type:{name:"func"},required:!1},label:{description:"Button contents",type:{name:"string"},required:!0}}}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);