webpackHotUpdate("static/development/pages/sell.js",{

/***/ "./components/CreateItem.js":
/*!**********************************!*\
  !*** ./components/CreateItem.js ***!
  \**********************************/
/*! exports provided: default, CREATE_ITEM_MUTATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_ITEM_MUTATION", function() { return CREATE_ITEM_MUTATION; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/Form */ "./components/styles/Form.js");
/* harmony import */ var _lib_formatMoney__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/formatMoney */ "./lib/formatMoney.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
var _jsxFileName = "/Users/cssb-ghataorhe/Desktop/Bahadur/GHRepos/Sick-Fits/frontend/components/CreateItem.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    # this mutation takes arguments, which will then be able to gather the input data and hold it in the query (createItem), which was specified from our backend in schema.graphql\n    mutation CREATE_ITEM_MUTATION(\n        $title: String!\n        $description: String!\n        $price: Int!\n        $image: String\n        $largeImage: String\n    ) {\n        createItem(\n            title: $title\n            description: $description\n            price: $price\n            image: $image\n            largeImage: $largeImage\n        ) {\n            id\n        }\n    } \n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

 //allows us to push data and actually make a change





 //writing the query for the mutation that captures the data and sends it to server

var CREATE_ITEM_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());

var CreateItem =
/*#__PURE__*/
function (_Component) {
  _inherits(CreateItem, _Component);

  function CreateItem() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CreateItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CreateItem)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      title: 'Cool Shoes',
      description: 'I love those',
      image: 'dog.jpg',
      largeImage: 'largeDog.jpg',
      price: 1000
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (e) {
      var _e$target = e.target,
          name = _e$target.name,
          type = _e$target.type,
          value = _e$target.value;
      var val = type === 'number' ? parseFloat(value) : value; //works for ANY input

      _this.setState(_defineProperty({}, name, val));
    });

    return _this;
  }

  _createClass(CreateItem, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return (// Mutation wraps the entire form tag, exposing data to the query
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Mutation"], {
          mutation: CREATE_ITEM_MUTATION,
          variables: this.state,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        }, function (createItem, _ref) {
          var loading = _ref.loading,
              error = _ref.error;
          return (//want to return everything from form implicitly (returns whatever is there without having to use the return keyword ==== closing for function and mutation tag moved to end of form!!!)                     
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Form__WEBPACK_IMPORTED_MODULE_3__["default"], {
              onSubmit: function onSubmit(e) {
                //stops form from actually submitting; will stop url weirdness
                e.preventDefault();
                console.log(_this2.state);
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 54
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__["default"], {
              error: error,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 60
              },
              __self: this
            }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("fieldset", {
              disabled: true,
              "aria-busy": true,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 61
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
              htmlFor: "title",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 62
              },
              __self: this
            }, "Title", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
              type: "text",
              id: "title",
              name: "title",
              placeholder: "Title",
              required: true,
              value: _this2.state.title,
              onChange: _this2.handleChange,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 64
              },
              __self: this
            })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
              htmlFor: "price",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 75
              },
              __self: this
            }, "Price", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
              type: "number",
              id: "price",
              name: "price",
              placeholder: "Price",
              required: true,
              value: _this2.state.price,
              onChange: _this2.handleChange,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 77
              },
              __self: this
            })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
              htmlFor: "description",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 88
              },
              __self: this
            }, "Description", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
              id: "description",
              name: "description",
              placeholder: "Enter A Description",
              required: true,
              value: _this2.state.description,
              onChange: _this2.handleChange,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 90
              },
              __self: this
            })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
              type: "submit",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 99
              },
              __self: this
            }, "Submit")))
          );
        })
      );
    }
  }]);

  return CreateItem;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (CreateItem); //named export using ES6



/***/ })

})
//# sourceMappingURL=sell.js.b0aac2b87295fc149762.hot-update.js.map