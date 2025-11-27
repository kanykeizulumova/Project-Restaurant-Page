/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n  background-color: #fdfbf7;\r\n\r\n  color: #3e2723;\r\n\r\n  line-height: 1.6;\r\n}\r\n\r\nheader {\r\n  background-color: #5d4037;\r\n  padding: 1rem 0;\r\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\r\n  position: sticky;\r\n  top: 0;\r\n  z-index: 1000;\r\n}\r\n\r\n\r\n#main-nav {\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 2rem;\r\n}\r\n\r\n#main-nav button {\r\n  background: transparent;\r\n  border: 2px solid #d7ccc8;\r\n  color: #fff;\r\n  padding: 0.5rem 1.5rem;\r\n  font-size: 1.1rem;\r\n  cursor: pointer;\r\n  border-radius: 5px;\r\n  transition: all 0.3s ease;\r\n  font-weight: bold;\r\n}\r\n\r\n#main-nav button:hover,\r\n#main-nav button:focus {\r\n  background-color: #d7ccc8;\r\n  color: #5d4037;\r\n  transform: scale(1.05);\r\n}\r\n\r\n#content {\r\n  max-width: 1200px;\r\n  margin: 0 auto;\r\n  padding: 2rem;\r\n  min-height: 80vh;\r\n\r\n  text-align: center;\r\n}\r\n\r\n\r\n#content h1,\r\n#content p {\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n\r\n#content>img {\r\n  max-width: 100%;\r\n  height: auto;\r\n  border-radius: 10px;\r\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\r\n  margin: 1rem 0;\r\n}\r\n\r\n#about-container {\r\n  margin-top: 2rem;\r\n  padding: 1.5rem;\r\n  background-color: #efebe9;\r\n  border-radius: 8px;\r\n  border-left: 5px solid #8d6e63;\r\n}\r\n\r\n#home-text {\r\n  background-color: #efebe9;\r\n}\r\n\r\n\r\n#menu-container {\r\n  display: grid;\r\n\r\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\r\n  gap: 2rem;\r\n  padding: 1rem 0;\r\n}\r\n\r\n.menu-card {\r\n  background-color: #fff;\r\n  border: 1px solid #ddd;\r\n  border-radius: 10px;\r\n  overflow: hidden;\r\n\r\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\r\n  transition: transform 0.2s;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding-bottom: 1rem;\r\n}\r\n\r\n.menu-card:hover {\r\n  transform: translateY(-5px);\r\n  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.15);\r\n}\r\n\r\n.menu-card img {\r\n  width: 100%;\r\n  height: 200px;\r\n\r\n  object-fit: cover;\r\n\r\n  border-bottom: 1px solid #eee;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.menu-card h3 {\r\n  color: #bf360c;\r\n\r\n  margin-bottom: 0.5rem;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.menu-card p {\r\n  font-weight: bold;\r\n  color: #5d4037;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n\r\n#contact-container {\r\n  background-color: #fff;\r\n  padding: 2rem;\r\n  border-radius: 10px;\r\n  box-shadow: 0 0 15px rgba(0, 0, 0, 0.05);\r\n  display: inline-block;\r\n\r\n  margin-top: 2rem;\r\n}\r\n\r\n#contact-container p {\r\n  margin: 0.5rem 0;\r\n  font-size: 1.1rem;\r\n}\r\n\r\n#contact-container img {\r\n  margin-top: 1rem;\r\n  max-width: 100%;\r\n  border: 5px solid #fff;\r\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://project-restaurant-page/./src/styles.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://project-restaurant-page/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://project-restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://project-restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://project-restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://project-restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://project-restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://project-restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://project-restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ }),

/***/ "./src/contacts.js":
/*!*************************!*\
  !*** ./src/contacts.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadContacts: () => (/* binding */ loadContacts)\n/* harmony export */ });\n/* harmony import */ var _images_map_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/map.png */ \"./src/images/map.png\");\n\r\nconst loadContacts = function () {\r\n    const content = document.getElementById('content');\r\n    content.innerHTML = \"\";\r\n    const newHeading = document.createElement('h1');\r\n    const textNode = document.createTextNode('Our contacts');\r\n    newHeading.appendChild(textNode);\r\n    content.appendChild(newHeading);\r\n    content.style.height = window.innerHeight + 'px';\r\n    const contactContainer = document.createElement('div');\r\n    contactContainer.id = 'contact-container';\r\n    content.appendChild(contactContainer);\r\n    const contactText = document.createElement('p');\r\n    const contactTextNode = document.createTextNode('');\r\n    contactText.appendChild(contactTextNode);\r\n    contactContainer.appendChild(contactText);\r\n    const contactAddress = document.createElement('p');\r\n    const contactAddressNode = document.createTextNode('Address: Belorusskaya street, Bishkek, Kyrgyzstan');\r\n    contactAddress.appendChild(contactAddressNode);\r\n    contactContainer.appendChild(contactAddress);\r\n    const contactPhone = document.createElement('p');\r\n    const contactPhoneNode = document.createTextNode('Phone: 555-555-5555');\r\n    contactPhone.appendChild(contactPhoneNode);\r\n    contactContainer.appendChild(contactPhone);\r\n    const contactEmail = document.createElement('p');\r\n    const contactEmailNode = document.createTextNode('Email: info@example.com');\r\n    contactEmail.appendChild(contactEmailNode);\r\n    contactContainer.appendChild(contactEmail);\r\n    const contactHours = document.createElement('p');\r\n    const contactHoursNode = document.createTextNode('Hours: Monday - Friday: 9am - 5pm');\r\n    contactHours.appendChild(contactHoursNode);\r\n    contactContainer.appendChild(contactHours);\r\n    const contactMap = document.createElement('img');\r\n    contactMap.src = _images_map_png__WEBPACK_IMPORTED_MODULE_0__;\r\n    contactContainer.appendChild(contactMap);\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://project-restaurant-page/./src/contacts.js?\n}");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadHome: () => (/* binding */ loadHome)\n/* harmony export */ });\n/* harmony import */ var _images_home_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/home.png */ \"./src/images/home.png\");\n\r\n\r\n\r\nconst loadHome = function () {\r\n    const content = document.getElementById('content');\r\n    content.innerHTML = \"\";\r\n\r\n    const newParagraph = document.createElement('p');\r\n    const textNode = document.createTextNode('Welcome to Yurt Cafe.');\r\n    textNode.id = 'home-text';\r\n    newParagraph.appendChild(textNode);\r\n    content.appendChild(newParagraph);\r\n\r\n    content.style.minHeight = window.innerHeight + 'px';\r\n\r\n    const homeImg = document.createElement('img');\r\n\r\n    homeImg.src = _images_home_png__WEBPACK_IMPORTED_MODULE_0__;\r\n\r\n    content.appendChild(homeImg);\r\n\r\n    homeImg.style.width = '100%';\r\n    homeImg.style.height = '100%';\r\n    homeImg.style.objectFit = 'cover';\r\n    homeImg.style.objectPosition = 'center';\r\n\r\n    const homeText = document.createElement('p');\r\n    const homeTextNode = document.createTextNode('We serve our food with love and care.');\r\n    homeText.appendChild(homeTextNode);\r\n    content.appendChild(homeText);\r\n\r\n    const aboutContainer = document.createElement('div');\r\n    aboutContainer.id = 'about-container';\r\n    content.appendChild(aboutContainer);\r\n\r\n    const aboutText = document.createElement('p');\r\n    const aboutTextNode = document.createTextNode('Come visit us to enjoy kyrgyz culture ');\r\n    aboutText.appendChild(aboutTextNode);\r\n    aboutContainer.appendChild(aboutText);\r\n};\r\n\r\n\n\n//# sourceURL=webpack://project-restaurant-page/./src/home.js?\n}");

/***/ }),

/***/ "./src/images/blinchi.jpg":
/*!********************************!*\
  !*** ./src/images/blinchi.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"f639496d9fd130335370.jpg\";\n\n//# sourceURL=webpack://project-restaurant-page/./src/images/blinchi.jpg?\n}");

/***/ }),

/***/ "./src/images/boorsoki.jpg":
/*!*********************************!*\
  !*** ./src/images/boorsoki.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"192efc5e015fa672938a.jpg\";\n\n//# sourceURL=webpack://project-restaurant-page/./src/images/boorsoki.jpg?\n}");

/***/ }),

/***/ "./src/images/home.png":
/*!*****************************!*\
  !*** ./src/images/home.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"09e15f5b58834f2f6c6f.png\";\n\n//# sourceURL=webpack://project-restaurant-page/./src/images/home.png?\n}");

/***/ }),

/***/ "./src/images/kattama.jpg":
/*!********************************!*\
  !*** ./src/images/kattama.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"b007620a57ea0d6de9c4.jpg\";\n\n//# sourceURL=webpack://project-restaurant-page/./src/images/kattama.jpg?\n}");

/***/ }),

/***/ "./src/images/kuurdak.jpg":
/*!********************************!*\
  !*** ./src/images/kuurdak.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"66b3dd97ca71bb71c452.jpg\";\n\n//# sourceURL=webpack://project-restaurant-page/./src/images/kuurdak.jpg?\n}");

/***/ }),

/***/ "./src/images/manty-seasonal.jpg":
/*!***************************************!*\
  !*** ./src/images/manty-seasonal.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"95b3a632b686c9608adb.jpg\";\n\n//# sourceURL=webpack://project-restaurant-page/./src/images/manty-seasonal.jpg?\n}");

/***/ }),

/***/ "./src/images/map.png":
/*!****************************!*\
  !*** ./src/images/map.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"b50e014d8dc2b3d1cc56.png\";\n\n//# sourceURL=webpack://project-restaurant-page/./src/images/map.png?\n}");

/***/ }),

/***/ "./src/images/mastava.jpg":
/*!********************************!*\
  !*** ./src/images/mastava.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"ced7fe854904d95ba23e.jpg\";\n\n//# sourceURL=webpack://project-restaurant-page/./src/images/mastava.jpg?\n}");

/***/ }),

/***/ "./src/images/metballs.jpg":
/*!*********************************!*\
  !*** ./src/images/metballs.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"868bd32c38c5f60f7f35.jpg\";\n\n//# sourceURL=webpack://project-restaurant-page/./src/images/metballs.jpg?\n}");

/***/ }),

/***/ "./src/images/naryn.jpg":
/*!******************************!*\
  !*** ./src/images/naryn.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"aa7b2614ab8f73c073c7.jpg\";\n\n//# sourceURL=webpack://project-restaurant-page/./src/images/naryn.jpg?\n}");

/***/ }),

/***/ "./src/images/omlet.jpg":
/*!******************************!*\
  !*** ./src/images/omlet.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"5db0d9b4c32047f30265.jpg\";\n\n//# sourceURL=webpack://project-restaurant-page/./src/images/omlet.jpg?\n}");

/***/ }),

/***/ "./src/images/plov-prazdnichnyj.jpg":
/*!******************************************!*\
  !*** ./src/images/plov-prazdnichnyj.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"96d141ddf0c3ee666885.jpg\";\n\n//# sourceURL=webpack://project-restaurant-page/./src/images/plov-prazdnichnyj.jpg?\n}");

/***/ }),

/***/ "./src/images/samsa.alat.jpg":
/*!***********************************!*\
  !*** ./src/images/samsa.alat.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"11c86939dbe10e716e5d.jpg\";\n\n//# sourceURL=webpack://project-restaurant-page/./src/images/samsa.alat.jpg?\n}");

/***/ }),

/***/ "./src/images/shorpo-govyadina.jpg":
/*!*****************************************!*\
  !*** ./src/images/shorpo-govyadina.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"79319d9db31b0a5d6c20.jpg\";\n\n//# sourceURL=webpack://project-restaurant-page/./src/images/shorpo-govyadina.jpg?\n}");

/***/ }),

/***/ "./src/images/syrnyki.jpg":
/*!********************************!*\
  !*** ./src/images/syrnyki.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"f4450bac06349a19f226.jpg\";\n\n//# sourceURL=webpack://project-restaurant-page/./src/images/syrnyki.jpg?\n}");

/***/ }),

/***/ "./src/images/vegetarian.jpg":
/*!***********************************!*\
  !*** ./src/images/vegetarian.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"fcb6aaf17e34066a8380.jpg\";\n\n//# sourceURL=webpack://project-restaurant-page/./src/images/vegetarian.jpg?\n}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contacts_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contacts.js */ \"./src/contacts.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\r\n\r\n\r\n\r\n(0,_home_js__WEBPACK_IMPORTED_MODULE_0__.loadHome)();\r\nconst homeButton = document.getElementById('home-btn');\r\nhomeButton.addEventListener('click', _home_js__WEBPACK_IMPORTED_MODULE_0__.loadHome);\r\nconst menuButton = document.getElementById('menu-btn');\r\nmenuButton.addEventListener('click', _menu_js__WEBPACK_IMPORTED_MODULE_1__.loadMenu);\r\nconst contactsButton = document.getElementById('contact-btn');\r\ncontactsButton.addEventListener('click', _contacts_js__WEBPACK_IMPORTED_MODULE_2__.loadContacts);\n\n//# sourceURL=webpack://project-restaurant-page/./src/index.js?\n}");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadMenu: () => (/* binding */ loadMenu)\n/* harmony export */ });\n/* harmony import */ var _images_omlet_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/omlet.jpg */ \"./src/images/omlet.jpg\");\n/* harmony import */ var _images_syrnyki_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/syrnyki.jpg */ \"./src/images/syrnyki.jpg\");\n/* harmony import */ var _images_blinchi_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/blinchi.jpg */ \"./src/images/blinchi.jpg\");\n/* harmony import */ var _images_shorpo_govyadina_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/shorpo-govyadina.jpg */ \"./src/images/shorpo-govyadina.jpg\");\n/* harmony import */ var _images_mastava_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/mastava.jpg */ \"./src/images/mastava.jpg\");\n/* harmony import */ var _images_vegetarian_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/vegetarian.jpg */ \"./src/images/vegetarian.jpg\");\n/* harmony import */ var _images_metballs_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/metballs.jpg */ \"./src/images/metballs.jpg\");\n/* harmony import */ var _images_plov_prazdnichnyj_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/plov-prazdnichnyj.jpg */ \"./src/images/plov-prazdnichnyj.jpg\");\n/* harmony import */ var _images_kuurdak_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/kuurdak.jpg */ \"./src/images/kuurdak.jpg\");\n/* harmony import */ var _images_manty_seasonal_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/manty-seasonal.jpg */ \"./src/images/manty-seasonal.jpg\");\n/* harmony import */ var _images_naryn_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./images/naryn.jpg */ \"./src/images/naryn.jpg\");\n/* harmony import */ var _images_boorsoki_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./images/boorsoki.jpg */ \"./src/images/boorsoki.jpg\");\n/* harmony import */ var _images_kattama_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./images/kattama.jpg */ \"./src/images/kattama.jpg\");\n/* harmony import */ var _images_samsa_alat_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./images/samsa.alat.jpg */ \"./src/images/samsa.alat.jpg\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst loadMenu = function () {\r\n    const content = document.getElementById('content');\r\n    content.innerHTML = \"\";\r\n    const newHeading = document.createElement('h1');\r\n    const textNode = document.createTextNode('Our kyrgyz dishes');\r\n    newHeading.appendChild(textNode);\r\n    content.appendChild(newHeading);\r\n    content.style.height = window.innerHeight + 'px';\r\n    const menuContainer = document.createElement('div');\r\n    menuContainer.id = 'menu-container';\r\n    content.appendChild(menuContainer);\r\n\r\n    class Dishes {\r\n        constructor(name, price, about) {\r\n            this.name = name;\r\n            this.price = price;\r\n            this.about = about;\r\n        }\r\n\r\n    }\r\n\r\n    class Catalog {\r\n        constructor() {\r\n            this.menu = [];\r\n        }\r\n\r\n        addDishesToCatalog(name, price, about) {\r\n            this.menu.push(new Dishes(name, price, about));\r\n        }\r\n        displayMenu() {\r\n            const divContainer = document.getElementById(\"menu-container\");\r\n            divContainer.innerHTML = \"\";\r\n            this.menu.forEach((dishes) => {\r\n                let divCard = document.createElement(\"div\");\r\n                divCard.className = \"menu-card\";\r\n                let divName = document.createElement(\"h3\");\r\n                divName.textContent = dishes.name;\r\n                let divPrice = document.createElement(\"p\");\r\n                divPrice.textContent = `Price: ${dishes.price}`;\r\n                let divAbout = document.createElement(\"img\");\r\n                divAbout.src = dishes.about;\r\n                divCard.appendChild(divName);\r\n                divCard.appendChild(divPrice);\r\n                divCard.appendChild(divAbout);\r\n                divContainer.appendChild(divCard);\r\n            });\r\n        };\r\n    }\r\n\r\n    const myCatalog = new Catalog();\r\n    myCatalog.addDishesToCatalog(\"Omlet\", \"220 Сом\", _images_omlet_jpg__WEBPACK_IMPORTED_MODULE_0__);\r\n    myCatalog.addDishesToCatalog(\"Syrnyki\", \"320 Сом\", _images_syrnyki_jpg__WEBPACK_IMPORTED_MODULE_1__);\r\n    myCatalog.addDishesToCatalog(\"Blinchi\", \"250 Сом\", _images_blinchi_jpg__WEBPACK_IMPORTED_MODULE_2__);\r\n    myCatalog.addDishesToCatalog(\"Shorpo\", \"340 Сом\", _images_shorpo_govyadina_jpg__WEBPACK_IMPORTED_MODULE_3__);\r\n    myCatalog.addDishesToCatalog(\"Mastava\", \"310 Сом\", _images_mastava_jpg__WEBPACK_IMPORTED_MODULE_4__);\r\n    myCatalog.addDishesToCatalog(\"Vegetarian\", \"250 Сом\", _images_vegetarian_jpg__WEBPACK_IMPORTED_MODULE_5__);\r\n    myCatalog.addDishesToCatalog(\"Meatballs\", \"310 Сом\", _images_metballs_jpg__WEBPACK_IMPORTED_MODULE_6__);\r\n    myCatalog.addDishesToCatalog(\"Plov\", \"515 Сом\", _images_plov_prazdnichnyj_jpg__WEBPACK_IMPORTED_MODULE_7__);\r\n    myCatalog.addDishesToCatalog(\"Kuurdak\", \"715 Сом\", _images_kuurdak_jpg__WEBPACK_IMPORTED_MODULE_8__);\r\n    myCatalog.addDishesToCatalog(\"Manty\", \"385 Сом\", _images_manty_seasonal_jpg__WEBPACK_IMPORTED_MODULE_9__);\r\n    myCatalog.addDishesToCatalog(\"Naryn\", \"610 Сом\", _images_naryn_jpg__WEBPACK_IMPORTED_MODULE_10__);\r\n    myCatalog.addDishesToCatalog(\"Boorsoki\", \"110 Сом\", _images_boorsoki_jpg__WEBPACK_IMPORTED_MODULE_11__);\r\n    myCatalog.addDishesToCatalog(\"Kattama\", \"185 Сом\", _images_kattama_jpg__WEBPACK_IMPORTED_MODULE_12__);\r\n    myCatalog.addDishesToCatalog(\"Samsa\", \"135 Сом\", _images_samsa_alat_jpg__WEBPACK_IMPORTED_MODULE_13__);\r\n    myCatalog.displayMenu();\r\n};\r\n\n\n//# sourceURL=webpack://project-restaurant-page/./src/menu.js?\n}");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://project-restaurant-page/./src/styles.css?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;