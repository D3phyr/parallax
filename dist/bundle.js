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

/***/ "./script.js":
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animationIndex\": () => (/* binding */ animationIndex),\n/* harmony export */   \"everestImgs\": () => (/* binding */ everestImgs),\n/* harmony export */   \"moveIndex\": () => (/* binding */ moveIndex),\n/* harmony export */   \"selectedImg\": () => (/* binding */ selectedImg),\n/* harmony export */   \"selectionIndex\": () => (/* binding */ selectionIndex)\n/* harmony export */ });\nlet header = document.querySelector('.header-items');\r\n        let main = document.querySelector('.main-items');\r\n        let text = document.querySelector('.main-items__text');\r\n        let scroll = document.querySelector('.main-items__scroll')\r\n        let share = document.querySelector('.main-items__share')\r\n        let mountain = document.querySelector('.main-section__mountain')\r\n        let mainSection = document.querySelector('.main-section')\r\n        let headerSection = document.querySelector('.header-section')\r\n        let screenPosition = 0;\r\n\r\n        let secondText = document.querySelector('.main-items-second__text')\r\n        let videoPlayer = document.querySelector('.main-items-second__player')\r\n\r\n        let pageNumber = Array.from(document.querySelectorAll('.page-number'))\r\n\r\n        let mainImg = document.querySelector('.main-items-third__main-img')\r\n        let gallery = document.querySelector('.main-items-third__gallery')\r\n\r\n        let everestImgs = document.querySelectorAll('.main-items-third__everest-img')\r\n        let selectedImg = document.querySelector('.main-items-third__selected-img')\r\n        let selectionIndex = 0;\r\n        let animationIndex = 0;\r\n\r\n        let moveIndex = 1;\r\n\r\n        setTimeout(start, 1500);\r\n        function start() {\r\n            header.classList.remove('header-items_disabled')\r\n            text.classList.remove('main-items__text_disabled')\r\n            scroll.classList.remove('main-items__scroll_disabled')\r\n            share.classList.remove('main-items__share_disabled')\r\n            mountain.classList.remove('main-section__mountain_active')\r\n            mainSection.style.backgroundSize = \"100%\";\r\n            headerSection.style.backgroundSize = \"100%\";\r\n            setTimeout(resetMoveIndex, 1000);\r\n        }\r\n\r\n        function resetMoveIndex() {\r\n            moveIndex = 0;\r\n        }\r\n\r\n        function animationIndexReset() {\r\n            animationIndex = 0;\r\n        }\r\n\r\n        function zeroFrame() {\r\n            headerSection.style.backgroundPosition = (\"center -450px\")\r\n            mainSection.style.backgroundPosition = (\"center -580px\")\r\n            mountain.style.backgroundPosition = (\"center -580px\")\r\n            scroll.classList.add('main-items__scroll_disabled');\r\n            share.classList.add('main-items__share_disabled');\r\n            text.classList.add('main-items__text_disabled');\r\n\r\n            mainImg.classList.add('main-items-third__main-img_disabled')\r\n            gallery.classList.add('main-items-third__gallery_disabled')\r\n\r\n            setTimeout(zeroFrameRemove, 1500);\r\n        }\r\n\r\n        function zeroFrameRemove() {\r\n\r\n            pageNumber[1].style.display = \"none\";\r\n            mainImg.style.display = \"none\";\r\n            gallery.style.display = \"none\";\r\n\r\n            text.style.display = \"none\";\r\n            scroll.style.display = \"none\";\r\n            share.style.display = \"none\";\r\n            mountain.style.display = \"none\";\r\n            pageNumber[0].style.display = \"flex\";\r\n            videoPlayer.style.display = \"flex\";\r\n            secondText.style.display = \"flex\";\r\n            setTimeout(firstFrameSetUp, 100);\r\n        }\r\n\r\n        function firstFrameSetUp() {\r\n            main.style.flexDirection = \"column\";\r\n            main.style.alignItems = \"center\";\r\n            secondText.classList.remove('main-items-second__text_disabled')\r\n            videoPlayer.classList.remove('main-items-second__player_disabled')\r\n            setTimeout(pageNumberSet, 1000);\r\n        }\r\n\r\n        function pageNumberSet() {\r\n            if (screenPosition == 1) {\r\n                pageNumber[0].classList.remove('page-number_disabled')\r\n            }\r\n            else if (screenPosition == 2) {\r\n                pageNumber[1].classList.remove('page-number_disabled')\r\n            }\r\n            setTimeout(resetMoveIndex, 1000);\r\n        }\r\n\r\n\r\n        function firstFrame() {\r\n            headerSection.style.backgroundPosition = (\"center -540px\")\r\n            mainSection.style.backgroundPosition = (\"center -670px\")\r\n            secondText.classList.add('main-items-second__text_disabled')\r\n            videoPlayer.classList.add('main-items-second__player_disabled')\r\n            pageNumber[0].classList.add('page-number_disabled')\r\n            pageNumber[1].classList.add('page-number_disabled')\r\n            setTimeout(firstFrameRemove, 1000)\r\n        }\r\n\r\n        function firstFrameRemove() {\r\n            secondText.style.display = \"none\";\r\n            videoPlayer.style.display = \"none\";\r\n            pageNumber[1].style.display = \"flex\";\r\n            mainImg.style.display = \"flex\";\r\n            gallery.style.display = \"flex\";\r\n            setTimeout(secondFrameSetUp, 100);\r\n        }\r\n\r\n        function secondFrameSetUp() {\r\n            mainImg.classList.remove('main-items-third__main-img_disabled')\r\n            gallery.classList.remove('main-items-third__gallery_disabled')\r\n            setTimeout(pageNumberSet, 1000);\r\n        }\r\n\r\n        everestImgs.forEach((item, i) => {\r\n            item.addEventListener('click', function () {\r\n                if ((moveIndex == 0) && (animationIndex == 0) && (selectionIndex != i)) {\r\n                    selectionIndex = i;\r\n                    changeImg(item);\r\n                    setTimeout(animationIndexReset, 600);\r\n                }\r\n            })\r\n        })\r\n\r\n        function changeImg(item) {\r\n            animationIndex = 1;\r\n            selectedImg.classList.add('to-left');\r\n            selectedImg.addEventListener('animationend', function () {\r\n                selectedImg.classList.remove('to-left');\r\n                if (item == everestImgs[0]) selectedImg.src = \"/parallax/assets/everest1.jpg\";\r\n                if (item == everestImgs[1]) selectedImg.src = \"/parallax/assets/everest2.jpg\";\r\n                if (item == everestImgs[2]) selectedImg.src = \"/parallax/assets/everest3.jpg\";\r\n                selectedImg.classList.add('from-right');\r\n                selectedImg.addEventListener('animationend', function () {\r\n                    selectedImg.classList.remove('from-right');\r\n                })\r\n            })\r\n}\r\n\r\nwindow.addEventListener('wheel', function (e) {\r\n    if (moveIndex == 0) {\r\n        if (screenPosition == 0) {\r\n            if (e.deltaY > 0) {\r\n                screenPosition = 1\r\n                moveIndex = 1;\r\n                zeroFrame();\r\n            }\r\n        }\r\n        else if (screenPosition == 1) {\r\n            if (e.deltaY > 0) {\r\n                screenPosition = 2\r\n                moveIndex = 1;\r\n                firstFrame();\r\n            }\r\n        }\r\n        else if (screenPosition == 2) {\r\n            if (e.deltaY < 0) {\r\n                screenPosition = 1;\r\n                moveIndex = 1;\r\n                zeroFrame();\r\n            }\r\n        }\r\n    }\r\n})\n\n//# sourceURL=webpack://parallax/./script.js?");

/***/ }),

/***/ "./slider.js":
/*!*******************!*\
  !*** ./slider.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./script */ \"./script.js\");\n\r\n\r\n_script__WEBPACK_IMPORTED_MODULE_0__.everestImgs.forEach((item, i) => {\r\n    item.addEventListener('click', function () {\r\n        if ((_script__WEBPACK_IMPORTED_MODULE_0__.moveIndex == 0) && (_script__WEBPACK_IMPORTED_MODULE_0__.animationIndex == 0) && (_script__WEBPACK_IMPORTED_MODULE_0__.selectionIndex != i)) {\r\n            _script__WEBPACK_IMPORTED_MODULE_0__.selectionIndex = i;\r\n            changeImg(item);\r\n            setTimeout(function () {\r\n                _script__WEBPACK_IMPORTED_MODULE_0__.animationIndex = 0\r\n            }, 600);\r\n        }\r\n    })\r\n})\r\n\r\nfunction changeImg(item) {\r\n    _script__WEBPACK_IMPORTED_MODULE_0__.animationIndex = 1;\r\n    _script__WEBPACK_IMPORTED_MODULE_0__.selectedImg.classList.add('to-left');\r\n    _script__WEBPACK_IMPORTED_MODULE_0__.selectedImg.addEventListener('animationend', function () {\r\n        _script__WEBPACK_IMPORTED_MODULE_0__.selectedImg.classList.remove('to-left');\r\n        if (item == _script__WEBPACK_IMPORTED_MODULE_0__.everestImgs[0]) _script__WEBPACK_IMPORTED_MODULE_0__.selectedImg.src = \"/parallax/assets/everest1.jpg\";\r\n        if (item == _script__WEBPACK_IMPORTED_MODULE_0__.everestImgs[1]) _script__WEBPACK_IMPORTED_MODULE_0__.selectedImg.src = \"/parallax/assets/everest2.jpg\";\r\n        if (item == _script__WEBPACK_IMPORTED_MODULE_0__.everestImgs[2]) _script__WEBPACK_IMPORTED_MODULE_0__.selectedImg.src = \"/parallax/assets/everest3.jpg\";\r\n        _script__WEBPACK_IMPORTED_MODULE_0__.selectedImg.classList.add('from-right');\r\n        _script__WEBPACK_IMPORTED_MODULE_0__.selectedImg.addEventListener('animationend', function () {\r\n            _script__WEBPACK_IMPORTED_MODULE_0__.selectedImg.classList.remove('from-right');\r\n        })\r\n    })\r\n}\n\n//# sourceURL=webpack://parallax/./slider.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./slider.js");
/******/ 	
/******/ })()
;