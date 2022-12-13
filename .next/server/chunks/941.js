"use strict";
exports.id = 941;
exports.ids = [941];
exports.modules = {

/***/ 941:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);






const Nav = ({
  profile,
  about,
  skill,
  product,
  contact
}) => {
  const profileScroll = () => profile.current.scrollIntoView({
    behavior: 'smooth'
  });

  const aboutScroll = () => about.current.scrollIntoView({
    behavior: 'smooth'
  });

  const skillScroll = () => skill.current.scrollIntoView({
    behavior: 'smooth'
  });

  const productScroll = () => product.current.scrollIntoView({
    behavior: 'smooth'
  });

  const contactScroll = () => contact.current.scrollIntoView({
    behavior: 'smooth'
  });

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.AppBar, {
      position: "static",
      style: {
        alignItems: 'center',
        color: 'green',
        backgroundColor: 'lightgray'
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Toolbar, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, {
          color: "inherit",
          onClick: profileScroll,
          children: "Profile"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, {
          color: "inherit",
          onClick: aboutScroll,
          children: "About me"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, {
          color: "inherit",
          onClick: skillScroll,
          children: "Skills"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, {
          color: "inherit",
          onClick: productScroll,
          children: "Products"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, {
          color: "inherit",
          onClick: contactScroll,
          children: "Contact"
        })]
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Nav);

/***/ })

};
;