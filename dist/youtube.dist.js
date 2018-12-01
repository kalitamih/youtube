/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/carousel.js":
/*!************************!*\
  !*** ./js/carousel.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = carousel;\nfunction carousel() {\n  var left = 0;\n  var slide = document.getElementById('move');\n  var dot = document.getElementsByClassName('dot');\n\n  function buttonsForPagging() {\n    var sizeChunk = document.getElementsByClassName('slider__wrapper')[0].offsetWidth * 4;\n    dot[1].innerHTML = 4 * Math.floor(-left / sizeChunk) + 1;\n    dot[2].innerHTML = 4 * Math.floor(-left / sizeChunk) + 2;\n    dot[3].innerHTML = 4 * Math.floor(-left / sizeChunk) + 3;\n    dot[4].innerHTML = 4 * Math.floor(-left / sizeChunk) + 4;\n  }\n\n  function activeButtonPage() {\n    for (var i = 1; i < 5; i += 1) {\n      dot[i].id = '';\n    }\n    var shift = -parseInt(left, 10);\n    if (shift % (document.getElementsByClassName('slider__wrapper')[0].offsetWidth * 4) === 0) dot[1].id = 'active';\n    if (shift % (document.getElementsByClassName('slider__wrapper')[0].offsetWidth * 4) === document.getElementsByClassName('slider__wrapper')[0].offsetWidth) dot[2].id = 'active';\n    if (shift % (document.getElementsByClassName('slider__wrapper')[0].offsetWidth * 4) === 2 * document.getElementsByClassName('slider__wrapper')[0].offsetWidth) dot[3].id = 'active';\n    if (shift % (document.getElementsByClassName('slider__wrapper')[0].offsetWidth * 4) === 3 * document.getElementsByClassName('slider__wrapper')[0].offsetWidth) dot[4].id = 'active';\n  }\n\n  function sliderLeft() {\n    left -= 320 * (document.getElementsByClassName('slider__wrapper')[0].offsetWidth / 320);\n    slide.style.left = left + 'px';\n    console.log(left);\n    buttonsForPagging();\n    activeButtonPage();\n  }\n\n  function sliderRight() {\n    if (left < 0) left += 320 * (document.getElementsByClassName('slider__wrapper')[0].offsetWidth / 320);\n    slide.style.left = left + 'px';\n    buttonsForPagging();\n    activeButtonPage();\n    console.log(left);\n  }\n\n  var resizeTimeout = void 0;\n\n  function actualResizeHandler() {\n    if (document.getElementsByClassName('slider__wrapper')[0].offsetWidth / 320 === 4) {\n      left -= left % 1280;\n    }\n\n    if (document.getElementsByClassName('slider__wrapper')[0].offsetWidth / 320 === 2) {\n      left -= left % 640;\n    }\n    slide.style.left = left + 'px';\n    buttonsForPagging();\n    activeButtonPage();\n  }\n\n  function resizeThrottler() {\n    if (!resizeTimeout) {\n      resizeTimeout = setTimeout(function () {\n        resizeTimeout = null;\n        actualResizeHandler();\n      }, 66);\n    }\n  }\n\n  window.addEventListener('resize', resizeThrottler, false);\n  var lastX = void 0; // Tracks the last observed mouse X position\n  var distance = 0;\n\n  function count() {\n    if (distance < -10) sliderLeft();\n    if (distance > 10) sliderRight();\n    distance = 0;\n  }\n\n  function moved(event) {\n    if (event.buttons === 0) {\n      slide.removeEventListener('mousemove', moved);\n    } else {\n      var dist = event.clientX - lastX;\n      distance += dist;\n      lastX = event.clientX;\n    }\n    slide.addEventListener('mouseup', count);\n  }\n\n  slide.addEventListener('mousedown', function (event) {\n    if (event.button === 0) {\n      lastX = event.clientX;\n\n      slide.addEventListener('mousemove', moved);\n      event.preventDefault(); // Prevent selection\n    }\n  });\n\n  // Swipe function\n  var initialX = null;\n  var initialY = null;\n\n  function startTouch(e) {\n    initialX = e.touches[0].clientX;\n    initialY = e.touches[0].clientY;\n  }\n\n  function moveTouch(e) {\n    if (initialX === null) {\n      return;\n    }\n    if (initialY === null) {\n      return;\n    }\n    var currentX = e.touches[0].clientX;\n    var currentY = e.touches[0].clientY;\n    var diffX = initialX - currentX;\n    var diffY = initialY - currentY;\n    if (Math.abs(diffX) > Math.abs(diffY)) {\n      // sliding horizontally\n      if (diffX > 0) {\n        // swiped left\n        sliderLeft();\n      } else {\n        // swiped right\n        sliderRight();\n      }\n    }\n    initialX = null;\n    initialY = null;\n    e.preventDefault();\n  }\n\n  slide.addEventListener('touchstart', startTouch, false);\n  slide.addEventListener('touchmove', moveTouch, false);\n\n  function button1() {\n    left -= left % (4 * document.getElementsByClassName('slider__wrapper')[0].offsetWidth);\n    slide.style.left = left + 'px';\n    activeButtonPage();\n  }\n\n  function button2() {\n    left -= left % (4 * document.getElementsByClassName('slider__wrapper')[0].offsetWidth);\n    left -= document.getElementsByClassName('slider__wrapper')[0].offsetWidth;\n    slide.style.left = left + 'px';\n    activeButtonPage();\n  }\n\n  function button3() {\n    left -= left % (4 * document.getElementsByClassName('slider__wrapper')[0].offsetWidth);\n    left -= 2 * document.getElementsByClassName('slider__wrapper')[0].offsetWidth;\n    slide.style.left = left + 'px';\n    activeButtonPage();\n  }\n\n  function button4() {\n    left -= left % (4 * document.getElementsByClassName('slider__wrapper')[0].offsetWidth);\n    left -= 3 * document.getElementsByClassName('slider__wrapper')[0].offsetWidth;\n    slide.style.left = left + 'px';\n    activeButtonPage();\n  }\n\n  dot[0].addEventListener('mousedown', sliderRight, false);\n  dot[1].addEventListener('mousedown', button1, false);\n  dot[2].addEventListener('mousedown', button2, false);\n  dot[3].addEventListener('mousedown', button3, false);\n  dot[4].addEventListener('mousedown', button4, false);\n  dot[5].addEventListener('mousedown', sliderLeft, false);\n\n  function resetLeft() {\n    left = 0;\n    buttonsForPagging();\n    activeButtonPage();\n  }\n\n  document.getElementsByClassName('searchButton')[0].addEventListener('click', resetLeft, false);\n}\n\n//# sourceURL=webpack:///./js/carousel.js?");

/***/ }),

/***/ "./js/creater.js":
/*!***********************!*\
  !*** ./js/creater.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = creater;\nfunction creater() {\n  var wrapper = document.createElement('div');\n  wrapper.className = 'wrapper';\n  document.body.appendChild(wrapper);\n\n  var inputSearch = document.createElement('input');\n  inputSearch.className = 'inputSearch';\n  wrapper.appendChild(inputSearch);\n\n  var button = document.createElement('button');\n  button.className = 'searchButton';\n  var nameButton = document.createTextNode('Search');\n  button.appendChild(nameButton);\n  wrapper.appendChild(button);\n\n  var slider = document.createElement('div');\n  slider.className = 'slider';\n  slider.style.display = 'none';\n\n  var sliderWrapper = document.createElement('div');\n  sliderWrapper.className = 'slider__wrapper';\n\n  var sliderSlide = document.createElement('div');\n  sliderSlide.className = 'slider__slide';\n  sliderSlide.id = 'move';\n\n  document.body.appendChild(slider);\n\n  function addChunk() {\n    for (var i = 0; i < 4; i += 1) {\n      var page = document.createElement('div');\n      page.className = 'page';\n      sliderSlide.appendChild(page);\n      for (var j = 0; j < 4; j += 1) {\n        var slide = document.createElement('div');\n        slide.className = 'first';\n        page.appendChild(slide);\n        var title = document.createElement('div');\n        title.className = 'title';\n        slide.appendChild(title);\n        var newlink = document.createElement('a');\n        newlink.setAttribute('target', '_blank');\n        title.append(newlink);\n        var author = document.createElement('div');\n        author.className = 'author';\n        slide.appendChild(author);\n        var publishedDate = document.createElement('div');\n        publishedDate.className = 'publishedDate';\n        slide.appendChild(publishedDate);\n        var viewRate = document.createElement('div');\n        viewRate.className = 'viewRate';\n        slide.appendChild(viewRate);\n        var description = document.createElement('div');\n        description.className = 'description';\n        slide.appendChild(description);\n      }\n    }\n  }\n\n  slider.appendChild(sliderWrapper);\n  sliderWrapper.appendChild(sliderSlide);\n\n  for (var j = 0; j < 6; j += 1) {\n    var dot = document.createElement('span');\n    dot.className = 'dot';\n    dot.style.display = 'none';\n    dot.innerHTML = j;\n    if (j === 0) {\n      dot.id = 'left';\n      dot.innerHTML = 'Back';\n    }\n    if (j === 1) {\n      dot.id = 'active';\n    }\n    if (j === 5) {\n      dot.id = 'right';\n      dot.innerHTML = 'Next';\n    }\n    document.body.appendChild(dot);\n  }\n\n  addChunk();\n\n  function create() {\n    while (document.getElementsByClassName('page')[4]) {\n      document.getElementsByClassName('page')[4].remove();\n    }document.getElementById('move').style.left = '0px';\n    var dot = document.getElementsByClassName('dot');\n    slider.style.display = 'block';\n    for (var _j = 0; _j < 6; _j += 1) {\n      dot[_j].style.display = 'inline-block';\n    }\n  }\n\n  button.addEventListener('click', create, false);\n\n  function addingChunk() {\n    var blockVideo = document.getElementsByClassName('first');\n    if (blockVideo.length < -1 * parseInt(sliderSlide.style.left, 10) / 320 + 16) addChunk();\n  }\n\n  sliderSlide.addEventListener('touchmove', addingChunk, false);\n  sliderSlide.addEventListener('mousemove', addingChunk);\n  document.getElementsByClassName('dot')[4].addEventListener('mouseup', addingChunk);\n  document.getElementById('right').addEventListener('mouseup', addingChunk, false);\n}\n\n//# sourceURL=webpack:///./js/creater.js?");

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _creater = __webpack_require__(/*! ./creater */ \"./js/creater.js\");\n\nvar _creater2 = _interopRequireDefault(_creater);\n\nvar _carousel = __webpack_require__(/*! ./carousel */ \"./js/carousel.js\");\n\nvar _carousel2 = _interopRequireDefault(_carousel);\n\nvar _retrieveInformation = __webpack_require__(/*! ./retrieveInformation */ \"./js/retrieveInformation.js\");\n\nvar _retrieveInformation2 = _interopRequireDefault(_retrieveInformation);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(0, _creater2.default)();\n(0, _carousel2.default)();\n(0, _retrieveInformation2.default)();\n\n//# sourceURL=webpack:///./js/index.js?");

/***/ }),

/***/ "./js/retrieveInformation.js":
/*!***********************************!*\
  !*** ./js/retrieveInformation.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = retrieveInformation;\nfunction retrieveInformation() {\n  var elements = document.getElementsByClassName('first');\n  var arrayVideoId = [];\n  var arrayTitle = [];\n  var arrayDescription = [];\n  var arrayPublishedAt = [];\n  var arrayChannelTitle = [];\n  var arrayPageToken = [];\n  var arrayUrlPreviewImage = [];\n  arrayPageToken[0] = '';\n  var searchValue = void 0;\n\n  function retvieveViewRate(videoId, numberSlide) {\n    var searchUrlViewRate = 'https://www.googleapis.com/youtube/v3/videos?key=AIzaSyBdBIWAoceoZKJlj7NswyZV8LgzCc3aZiQ&id=' + videoId + '&part=snippet,statistics&part=snippet,statistics';\n    fetch(searchUrlViewRate).then(function (response) {\n      if (response.status !== 200) {\n        console.log('Looks like there was a problem. Status Code: ' + response.status);\n        return;\n      }\n      response.json().then(function (data) {\n        elements[numberSlide].childNodes[3].innerHTML = data.items[0].statistics.viewCount;\n      });\n    }).catch(function (err) {\n      console.log('Fetch Error :-S', err);\n    });\n  }\n\n  function changeInformation(page) {\n    var urlImage = void 0;\n    var date = void 0;\n    var month = void 0;\n    var year = void 0;\n    for (var i = 16 * page; i < 16 + 16 * page; i += 1) {\n      urlImage = 'url(' + arrayUrlPreviewImage[i] + ')';\n      elements[i].style.backgroundImage = urlImage;\n      document.getElementsByTagName('a')[i].innerHTML = arrayTitle[i];\n      document.getElementsByTagName('a')[i].setAttribute('href', 'https://www.youtube.com/watch?v=' + arrayVideoId[i]);\n      elements[i].childNodes[1].innerHTML = 'Author: ' + arrayChannelTitle[i];\n      date = arrayPublishedAt[i].substr(8, 2);\n      month = arrayPublishedAt[i].substr(4, 4);\n      year = arrayPublishedAt[i].substr(0, 4);\n      elements[i].childNodes[2].innerHTML = 'Published at: ' + date + month + year;\n      retvieveViewRate(arrayVideoId[i], i);\n      elements[i].childNodes[4].innerHTML = arrayDescription[i];\n    }\n  }\n\n  function retrieveInfo(page) {\n    fetch('https://www.googleapis.com/youtube/v3/search?pageToken=' + arrayPageToken[page] + '&key=AIzaSyBdBIWAoceoZKJlj7NswyZV8LgzCc3aZiQ&type=video&part=snippet&maxResults=16&q=' + searchValue).then(function (response) {\n      if (response.status !== 200) {\n        console.log('Looks like there was a problem. Status Code: ' + response.status);\n        return;\n      }\n      response.json().then(function (data) {\n        for (var i = 0; i < 16; i += 1) {\n          arrayVideoId[i + 16 * page] = data.items[i].id.videoId;\n          arrayUrlPreviewImage[i + 16 * page] = data.items[i].snippet.thumbnails.medium.url;\n          arrayTitle[i + 16 * page] = data.items[i].snippet.title;\n          arrayDescription[i + 16 * page] = data.items[i].snippet.description;\n          arrayPublishedAt[i + 16 * page] = data.items[i].snippet.publishedAt;\n          arrayChannelTitle[i + 16 * page] = data.items[i].snippet.channelTitle;\n        }\n        arrayPageToken[page + 1] = data.nextPageToken;\n        changeInformation(page);\n      });\n    }).catch(function (err) {\n      console.log('Fetch Error :-S', err);\n    });\n  }\n\n  function retrieve() {\n    retrieveInfo(0);\n  }\n\n  function search() {\n    var inputValue = document.getElementsByClassName('inputSearch');\n    searchValue = inputValue[0].value;\n  }\n\n  var searchButton = document.getElementsByClassName('searchButton');\n  searchButton[0].addEventListener('click', search, true);\n  searchButton[0].addEventListener('click', retrieve, true);\n\n  function smoothLoading() {\n    var shift = -1 * parseInt(document.getElementById('move').style.left, 10) || 0;\n    var numberPage = Math.floor(shift / 5120) + 1;\n    if (elements[16 * numberPage] && !elements[16 * numberPage].childNodes[2].innerHTML) {\n      retrieveInfo(Math.floor(shift / 5120) + 1);\n    }\n  }\n\n  document.getElementById('move').addEventListener('touchmove', smoothLoading);\n\n  document.getElementById('move').addEventListener('mousemove', smoothLoading);\n\n  document.getElementById('right').addEventListener('mouseup', smoothLoading);\n\n  document.getElementsByClassName('dot')[4].addEventListener('mouseup', smoothLoading);\n}\n\n//# sourceURL=webpack:///./js/retrieveInformation.js?");

/***/ })

/******/ });