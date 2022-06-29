"use strict";
(self["webpackChunkcloudnativepatterns"] = self["webpackChunkcloudnativepatterns"] || []).push([["layout-404"],{

/***/ "./node_modules/@vuepress/theme-default/lib/client/layouts/404.vue":
/*!*************************************************************************!*\
  !*** ./node_modules/@vuepress/theme-default/lib/client/layouts/404.vue ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _404_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./404.vue?vue&type=script&setup=true&lang=ts */ "./node_modules/@vuepress/theme-default/lib/client/layouts/404.vue?vue&type=script&setup=true&lang=ts");



const __exports__ = _404_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"];

/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./node_modules/esbuild-loader/dist/index.js??clonedRuleSet-6.use[0]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./node_modules/@vuepress/theme-default/lib/client/layouts/404.vue?vue&type=script&setup=true&lang=ts":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/esbuild-loader/dist/index.js??clonedRuleSet-6.use[0]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./node_modules/@vuepress/theme-default/lib/client/layouts/404.vue?vue&type=script&setup=true&lang=ts ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _vuepress_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vuepress/client */ "./node_modules/@vuepress/client/dist/index.js");
/* harmony import */ var _composables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../composables */ "./node_modules/@vuepress/theme-default/lib/client/composables/index.js");


const _hoisted_1 = { class: "theme-container" };
const _hoisted_2 = { class: "theme-default-content" };
const _hoisted_3 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", null, "404", -1);


/* harmony default export */ __webpack_exports__["default"] = (/* @__PURE__ */(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  __name: "404",
  setup(__props) {
    var _a, _b, _c;
    const routeLocale = (0,_vuepress_client__WEBPACK_IMPORTED_MODULE_1__.useRouteLocale)();
    const themeLocale = (0,_composables__WEBPACK_IMPORTED_MODULE_2__.useThemeLocaleData)();
    const messages = (_a = themeLocale.value.notFound) != null ? _a : ["Not Found"];
    const getMsg = () => messages[Math.floor(Math.random() * messages.length)];
    const homeLink = (_b = themeLocale.value.home) != null ? _b : routeLocale.value;
    const homeText = (_c = themeLocale.value.backToHome) != null ? _c : "Back to home";
    return (_ctx, _cache) => {
      const _component_RouterLink = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("RouterLink");
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [
          _hoisted_3,
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("blockquote", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(getMsg()), 1),
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_RouterLink, { to: (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(homeLink) }, {
            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(homeText)), 1)
            ]),
            _: 1
          }, 8, ["to"])
        ])
      ]);
    };
  }
}));


/***/ }),

/***/ "./node_modules/@vuepress/theme-default/lib/client/layouts/404.vue?vue&type=script&setup=true&lang=ts":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@vuepress/theme-default/lib/client/layouts/404.vue?vue&type=script&setup=true&lang=ts ***!
  \************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _esbuild_loader_dist_index_js_clonedRuleSet_6_use_0_bundler_webpack_lib_build_ssr_vuepressLoader_js_vue_loader_dist_index_js_ruleSet_0_use_1_404_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _esbuild_loader_dist_index_js_clonedRuleSet_6_use_0_bundler_webpack_lib_build_ssr_vuepressLoader_js_vue_loader_dist_index_js_ruleSet_0_use_1_404_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../esbuild-loader/dist/index.js??clonedRuleSet-6.use[0]!../../../../bundler-webpack/lib/build/ssr/vuepressLoader.js!../../../../../vue-loader/dist/index.js??ruleSet[0].use[1]!./404.vue?vue&type=script&setup=true&lang=ts */ "./node_modules/esbuild-loader/dist/index.js??clonedRuleSet-6.use[0]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./node_modules/@vuepress/theme-default/lib/client/layouts/404.vue?vue&type=script&setup=true&lang=ts");
 

/***/ })

}]);
//# sourceMappingURL=layout-404.38a0fdf0.js.map