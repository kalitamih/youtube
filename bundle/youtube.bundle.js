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

/***/ "./js/fillPageLayout.js":
/*!******************************!*\
  !*** ./js/fillPageLayout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return fillPageLayout; });\nfunction fillPageLayout() {\n  var wrapper = document.createElement('div');\n  wrapper.className = 'wrapper';\n  document.body.appendChild(wrapper);\n  var inputSearch = document.createElement('input');\n  inputSearch.className = 'inputSearch';\n  wrapper.appendChild(inputSearch);\n  var button = document.createElement('button');\n  button.className = 'searchButton';\n  var nameButton = document.createTextNode('Search');\n  button.appendChild(nameButton);\n  wrapper.appendChild(button);\n  var numberPage = document.createElement('h1');\n  numberPage.className = 'numberPage';\n  numberPage.innerHTML = 1;\n  document.body.appendChild(numberPage);\n  var carousel = document.createElement('div');\n  carousel.className = 'carousel';\n  carousel.id = 'carousel-default';\n  document.body.appendChild(carousel);\n\n  function create() {\n    for (var i = 0; i < 16; i += 1) {\n      var slide = document.createElement('div');\n      slide.className = 'slide';\n      carousel.appendChild(slide);\n      var title = document.createElement('div');\n      title.className = 'title';\n      slide.appendChild(title);\n      var newlink = document.createElement('a');\n      newlink.setAttribute('target', '_blank');\n      title.append(newlink);\n      var author = document.createElement('div');\n      author.className = 'author';\n      slide.appendChild(author);\n      var publishedDate = document.createElement('div');\n      publishedDate.className = 'publishedDate';\n      slide.appendChild(publishedDate);\n      var viewRate = document.createElement('div');\n      viewRate.className = 'viewRate';\n      slide.appendChild(viewRate);\n      var description = document.createElement('div');\n      description.className = 'description';\n      slide.appendChild(description);\n    }\n  }\n\n  create();\n}\n\n//# sourceURL=webpack:///./js/fillPageLayout.js?");

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fillPageLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fillPageLayout */ \"./js/fillPageLayout.js\");\n/* harmony import */ var _purejscarousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./purejscarousel */ \"./js/purejscarousel.js\");\n/* harmony import */ var _initialCarousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./initialCarousel */ \"./js/initialCarousel.js\");\n/* harmony import */ var _retrieveInformation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./retrieveInformation */ \"./js/retrieveInformation.js\");\n\n\n\n\nObject(_fillPageLayout__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nObject(_purejscarousel__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\nObject(_initialCarousel__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\nObject(_retrieveInformation__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\n//# sourceURL=webpack:///./js/index.js?");

/***/ }),

/***/ "./js/initialCarousel.js":
/*!*******************************!*\
  !*** ./js/initialCarousel.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initialCarousel; });\nfunction initialCarousel() {\n  var carouselDefault = new window.PureJSCarousel({\n    carousel: '#carousel-default',\n    slide: '.slide'\n  });\n  console.log(carouselDefault);\n}\n\n//# sourceURL=webpack:///./js/initialCarousel.js?");

/***/ }),

/***/ "./js/purejscarousel.js":
/*!******************************!*\
  !*** ./js/purejscarousel.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return carouselJS; });\nfunction carouselJS() {\n  (function () {\n    window.PureJSCarousel = function initialSlider(settings) {\n      this.carousel = document.querySelector('#carousel-default');\n      this.slides = this.carousel.querySelectorAll('.slide');\n      this.btnNext = this.carousel.querySelector(settings.btnNext) || null;\n      this.btnPrev = this.carousel.querySelector(settings.btnPrev) || null;\n      this.activeIndex = settings.activeIndex || 0;\n      this.speed = 250;\n      this.delay = settings.delay || 0;\n      this.effect = settings.effect || 'linear';\n      this.minPos = null;\n      this.slidesToShow = null;\n      this.maxIndex = null;\n      this.isEnabled = null;\n      this.build();\n    };\n\n    window.PureJSCarousel.prototype.build = function buildSlider() {\n      var _ = this;\n\n      var i;\n      var windowResizeTimeout;\n      var windowWidth = window.innerWidth;\n      var windowHeight = window.innerHeight;\n      var styleWidth = _.slides[0].offsetWidth * _.slides.length;\n      _.minPos = _.carousel.offsetWidth - _.slides.length * _.slides[0].offsetWidth;\n      _.slidesToShow = Math.round(_.carousel.offsetWidth / _.slides[0].offsetWidth);\n      _.maxIndex = 0;\n      _.isEnabled = 1;\n      _.swipeCounter = 0;\n      _.numberPage = document.querySelector('.numberPage');\n      _.carousel.className += ' purejscarousel'; // create slides container\n\n      _.slidesContainer = document.createElement('div');\n\n      _.carousel.insertBefore(_.slidesContainer, _.slides[0]);\n\n      _.slidesContainer.className += ' purejscarousel-slides-container';\n      _.slidesContainer.style.marginLeft = '0px';\n      _.slidesContainer.style.width = \"\".concat(styleWidth, \"px\");\n      var lastX; // Tracks the last observed mouse X position\n\n      var distance = 0;\n\n      function count() {\n        if (distance < -10) _.goToNextSlide();\n        if (distance > 10) _.goToPrevSlide();\n        distance = 0;\n      }\n\n      function moved(event) {\n        if (event.buttons === 0) {\n          window.removeEventListener('mousemove', moved);\n        } else {\n          var dist = event.clientX - lastX;\n          distance += dist;\n          lastX = event.clientX;\n        }\n\n        window.addEventListener('mouseup', count);\n      }\n\n      document.getElementsByClassName('carousel')[0].addEventListener('mousedown', function (event) {\n        if (event.button === 0) {\n          lastX = event.clientX;\n          window.addEventListener('mousemove', moved);\n          event.preventDefault(); // Prevent selection\n        }\n      }); // Swipe function\n\n      var initialX = null;\n      var initialY = null;\n\n      function startTouch(e) {\n        initialX = e.touches[0].clientX;\n        initialY = e.touches[0].clientY;\n      }\n\n      function moveTouch(e) {\n        if (initialX === null) {\n          return;\n        }\n\n        if (initialY === null) {\n          return;\n        }\n\n        var currentX = e.touches[0].clientX;\n        var currentY = e.touches[0].clientY;\n        var diffX = initialX - currentX;\n        var diffY = initialY - currentY;\n\n        if (Math.abs(diffX) > Math.abs(diffY)) {\n          // sliding horizontally\n          if (diffX > 0) {\n            // swiped left\n            _.goToNextSlide();\n          } else {\n            // swiped right\n            _.goToPrevSlide();\n          }\n        }\n\n        initialX = null;\n        initialY = null;\n        e.preventDefault();\n      }\n\n      document.addEventListener('touchstart', startTouch, false);\n      document.addEventListener('touchmove', moveTouch, false);\n\n      function addDotEventListener(d, c) {\n        var _this = this;\n\n        if (window.addEventListener) {\n          d.addEventListener('click', function dotsNavigation() {\n            c.goToSlide(parseInt(this.getAttribute('data-index'), 10));\n            _.swipeCounter = c.swipeCounter - c.swipeCounter % Math.ceil(c.slidesContainer.offsetWidth / c.carousel.offsetWidth) + parseInt(this.getAttribute('data-index'), 10);\n            document.querySelector('.numberPage').innerHTML = c.swipeCounter + 1;\n          });\n        } else if (window.attachEvent) {\n          d.attachEvent('onclick', function () {\n            c.goToSlide(parseInt(_this.getAttribute('data-index'), 10));\n          });\n        } else {\n          d.addEventListener('onclick', function () {\n            c.goToSlide(parseInt(_this.getAttribute('data-index'), 10));\n          });\n        }\n      } //  create slides dots\n\n\n      _.dotsContainer = document.createElement('div');\n\n      _.carousel.insertBefore(_.dotsContainer, _.slides[0]);\n\n      _.dotsContainer.className += ' purejscarousel-dots-container';\n      _.dots = [];\n      var dotsLength = Math.ceil(_.slidesContainer.offsetWidth / _.carousel.offsetWidth);\n\n      for (i = 0; i < dotsLength; i += 1) {\n        var dot = document.createElement('button');\n        var carouselDot = i === 0 ? ' active' : '';\n        dot.className = \"purejscarousel-dot\".concat(carouselDot);\n        dot.setAttribute('data-index', i);\n        dot.setAttribute('type', 'button');\n        addDotEventListener(dot, _);\n\n        _.dots.push(dot);\n\n        _.dotsContainer.appendChild(dot);\n      }\n\n      _.maxIndex = dotsLength - 1; //  create carousel btn-prev\n\n      if (!_.btnPrev) {\n        _.btnPrev = document.createElement('button');\n\n        _.btnPrev.setAttribute('class', '');\n\n        _.btnPrev.setAttribute('type', 'button');\n\n        _.btnPrev.setAttribute('data-is-native', 0);\n\n        _.carousel.insertBefore(_.btnPrev, _.slides[0]);\n      } else {\n        _.btnPrev.setAttribute('data-is-native', 1);\n      }\n\n      _.btnPrev.className += ' purejscarousel-btn purejscarousel-btn-prev';\n\n      if (_.activeIndex === 0) {\n        _.btnPrev.disabled = true;\n      } //  create carousel btn-next\n\n\n      if (!_.btnNext) {\n        _.btnNext = document.createElement('button');\n\n        _.btnNext.setAttribute('class', '');\n\n        _.btnNext.setAttribute('type', 'button');\n\n        _.btnNext.setAttribute('data-is-native', 0);\n\n        _.carousel.insertBefore(_.btnNext, _.slides[0]);\n      } else {\n        _.btnNext.setAttribute('data-is-native', 1);\n      }\n\n      _.btnNext.className += ' purejscarousel-btn purejscarousel-btn-next'; //  build slides\n\n      for (i = 0; i < _.slides.length; i += 1) {\n        _.slides[i].className += ' purejscarousel-slide';\n\n        _.slidesContainer.appendChild(_.slides[i]);\n      }\n\n      function windowResize() {\n        if (window.innerWidth !== windowWidth || window.innerHeight !== windowHeight) {\n          clearTimeout(windowResizeTimeout);\n          windowResizeTimeout = setTimeout(function () {\n            _.destroy();\n\n            _.build();\n          }, 400);\n        }\n      }\n\n      if (window.addEventListener) {\n        window.addEventListener('resize', windowResize);\n      } else if (window.attachEvent) {\n        window.attachEvent('onresize', windowResize);\n      } else {\n        window.onresize = windowResize;\n      }\n    };\n\n    window.PureJSCarousel.prototype.enableControl = function controlEnable() {\n      this.btnNext.disabled = false;\n      this.btnPrev.disabled = false;\n\n      for (var i = 0; i < this.dots.length; i += 1) {\n        this.dots[i].disabled = false;\n      }\n\n      this.dots[this.activeIndex].disabled = true;\n\n      if (this.activeIndex === this.maxIndex) {\n        this.btnNext.disabled = true;\n      }\n\n      if (this.activeIndex === 0) {\n        this.btnPrev.disabled = true;\n      }\n\n      if ('ontouchstart' in window || navigator.maxTouchPoints) {\n        this.slidesContainer.disabled = false;\n      }\n    };\n\n    window.PureJSCarousel.prototype.disableControl = function controlDisable() {\n      this.btnNext.disabled = true;\n      this.btnPrev.disabled = true;\n\n      for (var i = 0; i < this.dots.length; i += 1) {\n        this.dots[i].disabled = true;\n      }\n\n      if ('ontouchstart' in window || navigator.maxTouchPoints) {\n        this.slidesContainer.disabled = true;\n      }\n    };\n\n    window.PureJSCarousel.prototype.goToNextSlide = function nextSlide() {\n      var newActiveIndex;\n\n      if (this.btnNext.disabled === false) {\n        newActiveIndex = this.activeIndex + 1;\n        this.numberPage.innerHTML = this.swipeCounter + 1;\n        this.goToSlide(newActiveIndex, 'next', 'dirBtn');\n      } else {\n        this.goToSlide(parseInt(0, 10));\n      }\n\n      this.swipeCounter += 1;\n      this.numberPage.innerHTML = this.swipeCounter + 1;\n    };\n\n    window.PureJSCarousel.prototype.goToPrevSlide = function prevSlide() {\n      var newActiveIndex;\n\n      if (this.btnPrev.disabled === false) {\n        newActiveIndex = this.activeIndex - 1;\n        this.swipeCounter -= 1;\n        if (this.swipeCounter < 0) this.swipeCounter = 0;\n        this.numberPage.innerHTML = this.swipeCounter + 1;\n        this.goToSlide(newActiveIndex, 'prev', 'dirBtn');\n      } else if (this.swipeCounter) {\n        this.goToSlide(Math.ceil(this.slidesContainer.offsetWidth / this.carousel.offsetWidth) - 1);\n        this.swipeCounter -= 1;\n        this.numberPage.innerHTML = this.swipeCounter + 1;\n      }\n    };\n\n    window.PureJSCarousel.prototype.goToSlide = function goSlide(n, dir, trigger) {\n      var _ = this;\n\n      var direction = n > this.activeIndex ? 'next' : 'prev';\n      var slidesContainerWidth = this.slidesContainer.offsetWidth;\n      var blockWidth = this.carousel.offsetWidth;\n      var currentPos = Math.max(-blockWidth * this.activeIndex, this.minPos);\n      var scrollWidth = trigger === 'dirBtn' ? blockWidth : Math.abs(blockWidth * (this.activeIndex - n));\n      var newPos = direction === 'next' ? Math.max(this.minPos, currentPos - scrollWidth) : Math.min(0, currentPos + scrollWidth);\n\n      function scrollEnd() {\n        if ('transition' in document.body.style) {\n          _.slidesContainer.style.transition = null;\n\n          _.slidesContainer.removeEventListener('transitionend', scrollEnd);\n        }\n\n        _.dots[_.activeIndex].className = _.dots[_.activeIndex].className.replace(' active', '');\n        _.activeIndex = n;\n        _.dots[_.activeIndex].className += ' active';\n\n        _.enableControl();\n      }\n\n      if (direction === 'next' && n === this.maxIndex || direction === 'prev' && this.activeIndex === this.maxIndex) {\n        scrollWidth = scrollWidth + slidesContainerWidth - (this.maxIndex + 1) * blockWidth;\n      }\n\n      this.disableControl();\n\n      if ('transition' in document.body.style) {\n        this.slidesContainer.style.transition = \"margin-left \".concat(this.speed, \"ms \").concat(this.effect, \" \").concat(this.delay, \"ms\");\n      }\n\n      this.slidesContainer.style.marginLeft = \"\".concat(newPos, \"px\");\n\n      if ('transition' in document.body.style) {\n        this.slidesContainer.addEventListener('transitionend', scrollEnd);\n      } else {\n        scrollEnd();\n      }\n    };\n\n    window.PureJSCarousel.prototype.destroy = function destroySlide() {\n      if (this.isEnabled === 1) {\n        this.isEnabled = 0;\n        this.carousel.className = this.carousel.className.replace(' purejscarousel', '');\n        this.carousel.removeChild(this.dotsContainer);\n\n        if (this.btnNext.getAttribute('data-is-native').toString() === '1') {\n          this.btnNext.className = this.btnNext.className.replace(' purejscarousel-btn purejscarousel-btn-next', '');\n        } else {\n          this.carousel.removeChild(this.btnNext);\n          this.btnNext = null;\n        }\n\n        if (this.btnPrev.getAttribute('data-is-native').toString() === '1') {\n          this.btnPrev.className = this.btnPrev.className.replace(' purejscarousel-btn purejscarousel-btn-prev', '');\n        } else {\n          this.carousel.removeChild(this.btnPrev);\n          this.btnPrev = null;\n        }\n\n        for (var i = 0; i < this.slides.length; i += 1) {\n          this.slides[i].className = this.slides[i].className.replace(' pure-js-carousel-slide', '');\n          this.carousel.insertBefore(this.slides[i], this.slidesContainer);\n        }\n\n        this.carousel.removeChild(this.slidesContainer);\n        this.minPos = null;\n        this.slidesToShow = null;\n        this.maxIndex = null;\n        this.isEnabled = null;\n      }\n    };\n  })();\n}\n\n//# sourceURL=webpack:///./js/purejscarousel.js?");

/***/ }),

/***/ "./js/retrieveInformation.js":
/*!***********************************!*\
  !*** ./js/retrieveInformation.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return retrieveInfromation; });\nfunction retrieveInfromation() {\n  var elements = document.getElementsByClassName('slide');\n  var arrayVideoId = [];\n  var arrayUrlPreviewImage = [];\n  var arrayTitle = [];\n  var arrayDescription = [];\n  var arrayPublishedAt = [];\n  var arrayChannelTitle = [];\n  var arrayPageToken = [];\n  arrayPageToken[0] = '';\n  var searchValue;\n\n  function countPages() {\n    var width = window.innerWidth;\n    if (width < 992) return 16;\n    if (width < 1600) return 8;\n    return 4;\n  }\n\n  function retrieveInfo(page) {\n    fetch(\"https://www.googleapis.com/youtube/v3/search?pageToken=\".concat(arrayPageToken[page], \"&key=AIzaSyCTWC75i70moJLzyNh3tt4jzCljZcRkU8Y&type=video&part=snippet&maxResults=16&q=\").concat(searchValue)).then(function (response) {\n      if (response.status !== 200) {\n        console.log(\"Looks like there was a problem. Status Code: \".concat(response.status));\n        return;\n      }\n\n      response.json().then(function (data) {\n        for (var i = 0; i < 16; i += 1) {\n          arrayVideoId[i + 16 * page] = data.items[i].id.videoId;\n          arrayUrlPreviewImage[i + 16 * page] = data.items[i].snippet.thumbnails.medium.url;\n          arrayTitle[i + 16 * page] = data.items[i].snippet.title;\n          arrayDescription[i + 16 * page] = data.items[i].snippet.description;\n          arrayPublishedAt[i + 16 * page] = data.items[i].snippet.publishedAt;\n          arrayChannelTitle[i + 16 * page] = data.items[i].snippet.channelTitle;\n        }\n\n        arrayPageToken[page + 1] = data.nextPageToken;\n      });\n    }).catch(function (err) {\n      console.log('Fetch Error :-S', err);\n    });\n  }\n\n  function retvieveViewRate(videoId, numberSlide) {\n    var searchUrlViewRate = \"https://www.googleapis.com/youtube/v3/videos?key=AIzaSyCTWC75i70moJLzyNh3tt4jzCljZcRkU8Y&id=\".concat(videoId, \"&part=snippet,statistics&part=snippet,statistics\");\n    fetch(searchUrlViewRate).then(function (response) {\n      if (response.status !== 200) {\n        console.log(\"Looks like there was a problem. Status Code: \".concat(response.status));\n        return;\n      }\n\n      response.json().then(function (data) {\n        elements[numberSlide].childNodes[3].innerHTML = data.items[0].statistics.viewCount;\n      });\n    }).catch(function (err) {\n      console.log('Fetch Error :-S', err);\n    });\n  }\n\n  function changeInformation() {\n    var urlImage;\n    var pageNumber = Math.floor(document.getElementsByTagName('h1')[0].innerHTML / countPages());\n    var date;\n    var month;\n    var year;\n\n    for (var i = 0; i < 16; i += 1) {\n      urlImage = \"url(\".concat(arrayUrlPreviewImage[i + 16 * pageNumber], \")\");\n      elements[i].style.backgroundImage = urlImage;\n      document.getElementsByTagName('a')[i].innerHTML = arrayTitle[i + 16 * pageNumber];\n      document.getElementsByTagName('a')[i].setAttribute('href', \"https://www.youtube.com/watch?v=\".concat(arrayVideoId[i + 16 * pageNumber]));\n      elements[i].childNodes[1].innerHTML = \"Author: \".concat(arrayChannelTitle[i + 16 * pageNumber]);\n      date = arrayPublishedAt[i + 16 * pageNumber].substr(8, 2);\n      month = arrayPublishedAt[i + 16 * pageNumber].substr(4, 4);\n      year = arrayPublishedAt[i + 16 * pageNumber].substr(0, 4);\n      elements[i].childNodes[2].innerHTML = \"Published at: \".concat(date).concat(month).concat(year);\n      retvieveViewRate(arrayVideoId[i + 16 * pageNumber], i);\n      elements[i].childNodes[4].innerHTML = arrayDescription[i + pageNumber];\n    }\n\n    retrieveInfo(pageNumber + 1);\n  }\n\n  function retrieve() {\n    for (var i = 0; i <= Math.floor((document.getElementsByTagName('h1')[0].innerHTML - 1) / countPages()) + 1; i += 1) {\n      retrieveInfo(i);\n    }\n\n    changeInformation();\n  }\n\n  function search() {\n    var inputValue = document.getElementsByClassName('inputSearch');\n    searchValue = inputValue[0].value;\n  }\n\n  var searchButton = document.getElementsByClassName('searchButton');\n  searchButton[0].addEventListener('click', search, true);\n  searchButton[0].addEventListener('click', retrieve, true);\n  document.body.addEventListener('mousedown', changeInformation, true);\n  document.body.addEventListener('touchstart', changeInformation, true);\n}\n\n//# sourceURL=webpack:///./js/retrieveInformation.js?");

/***/ })

/******/ });