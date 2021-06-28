(function() {
var exports = {};
exports.id = "pages/signup";
exports.ids = ["pages/signup"];
exports.modules = {

/***/ "./components/Common/CommonInputs.js":
/*!*******************************************!*\
  !*** ./components/Common/CommonInputs.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\programming\\Dev\\SOCIALMEDIA\\components\\Common\\CommonInputs.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



function CommonInputs({
  user: {
    bio,
    facebook,
    instagram,
    youtube,
    twitter
  },
  handlechange,
  showSocialLinks,
  setShowSocialLinks
}) {
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Field, {
    required: true,
    control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.TextArea,
    name: "bio",
    value: bio,
    onChange: handlechange,
    placeholder: "bio",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
    content: "Add Social Links",
    color: "red",
    icon: "at",
    type: "button",
    onClick: () => setShowSocialLinks(!showSocialLinks),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }), showSocialLinks && __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
    icon: "facebook f",
    iconPosition: "left",
    name: "facebook",
    value: facebook,
    onChange: handlechange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
    icon: "twitter",
    iconPosition: "left",
    name: "twitter",
    value: twitter,
    onChange: handlechange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
    icon: "instagram",
    iconPosition: "left",
    name: "instagram",
    value: instagram,
    onChange: handlechange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
    icon: "youtube",
    iconPosition: "left",
    name: "youtube",
    value: youtube,
    onChange: handlechange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
    icon: "attention",
    info: true,
    size: "small",
    header: "Social Media Links Are Optional!",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (CommonInputs);

/***/ }),

/***/ "./components/Common/ImageDropDiv.js":
/*!*******************************************!*\
  !*** ./components/Common/ImageDropDiv.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\programming\\Dev\\SOCIALMEDIA\\components\\Common\\ImageDropDiv.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



function ImageDropDiv({
  highlighted,
  setHighlighted,
  inputRef,
  handlechange,
  mediaPreview,
  setMediaPreview,
  setMedia
}) {
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Field, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Segment, {
    placeholder: true,
    basic: true,
    secondary: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx("input", {
    style: {
      display: "none"
    },
    type: "file",
    accept: "image/*",
    onChange: handlechange,
    name: "media",
    ref: inputRef,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }), __jsx("div", {
    onDragOver: e => {
      e.preventDefault();
      setHighlighted(true);
    },
    onDragLeave: e => {
      e.preventDefault();
      setHighlighted(false);
    },
    onDrop: e => {
      e.preventDefault();
      setHighlighted(true);
      const droppedFile = Array.from(e.dataTransfer.files);
      setMedia(droppedFile[0]);
      setMediaPreview(URL.createObjectURL(droppedFile[0]));
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, mediaPreview === null ? __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Segment, {
    color: highlighted ? "green" : "",
    placeholder: true,
    basic: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Header, {
    icon: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 19
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    name: "file image outline ",
    style: {
      cursor: "pointer"
    },
    onClick: () => inputRef.current.click(),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 21
    }
  }), "Drag n Drop or click to upload image"))) : __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Segment, {
    color: "green",
    placeholder: true,
    basic: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
    src: mediaPreview,
    size: "medium",
    centered: true,
    style: {
      cursor: "pointer"
    },
    onClick: () => inputRef.current.click(),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 19
    }
  })))))));
}

/* harmony default export */ __webpack_exports__["default"] = (ImageDropDiv);

/***/ }),

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Common_CommonInputs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Common/CommonInputs */ "./components/Common/CommonInputs.js");
/* harmony import */ var _components_Common_ImageDropDiv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Common/ImageDropDiv */ "./components/Common/ImageDropDiv.js");
/* harmony import */ var _components_Common_WelcomeMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Common/WelcomeMessage */ "./components/Common/WelcomeMessage.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _utils_authUser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/authUser */ "./utils/authUser.js");
/* harmony import */ var _utils_uploadPicToCloudinary__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/uploadPicToCloudinary */ "./utils/uploadPicToCloudinary.js");
var _jsxFileName = "D:\\programming\\Dev\\SOCIALMEDIA\\pages\\signup.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const bcrypt = __webpack_require__(/*! bcryptjs */ "bcryptjs");

const regexUserName = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/;
let cancel;

function Signup() {
  const {
    0: user,
    1: setUser
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    name: "",
    email: "",
    password: "",
    bio: "",
    facebook: "",
    youtube: "",
    twitter: "",
    instagram: ""
  });
  const {
    name,
    email,
    password,
    bio
  } = user;

  const handlechange = e => {
    const {
      name,
      value,
      files
    } = e.target;

    if (name === "media") {
      setMedia(files[0]);
      setMediaPreview(URL.createObjectURL(files[0]));
    }

    setUser(prev => _objectSpread(_objectSpread({}, prev), {}, {
      [name]: value
    }));
  };

  const {
    0: showSocialLinks,
    1: setShowSocialLinks
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: showPassword,
    1: setShowPassword
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: errorMsg,
    1: setErrorMsg
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: formLoading,
    1: setFormLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: submitDisabled,
    1: setSubmitDisabled
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const {
    0: username,
    1: setUsername
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: usernameLoading,
    1: setUsernameLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: usernameAvilable,
    1: setUsernameAvilable
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: media,
    1: setMedia
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: mediaPreview,
    1: setMediaPreview
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: highlighted,
    1: setHighlighted
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const isUser = Object.values({
      name,
      email,
      password,
      bio
    }).every(item => Boolean(item));
    isUser ? setSubmitDisabled(false) : setSubmitDisabled(true);
  }, [user]); // const checkUsername = async () => {
  //     setUsernameLoading(true);
  //     try {
  //       cancel && cancel();
  //       const CancelToken = axios.CancelToken;
  //       const res = await axios.get(`${baseUrl}/api/signup/${username}`, {
  //         cancelToken: new CancelToken((canceler) => {
  //           cancel = canceler;
  //         }),
  //       });
  //       if (res.data === "Avilable") {
  //         if(errorMsg!==null) setErrorMsg(null)
  //         setUsernameAvilable(true);
  //         setUser((prev) => ({ ...prev, username }));
  //       }
  //     } catch (error) {
  //       setUsernameAvilable(false)
  //       setErrorMsg("Username not avilable");
  //     }
  //     setUsernameLoading(false);
  //   };

  const checkUsername = async () => {
    setUsernameLoading(true);

    try {
      cancel && cancel();
      const CancelToken = (axios__WEBPACK_IMPORTED_MODULE_5___default().CancelToken);
      const res = await axios__WEBPACK_IMPORTED_MODULE_5___default().get(`${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_6__.default}/api/signup/${username}`, {
        cancelToken: new CancelToken(canceler => {
          cancel = canceler;
        })
      });

      if (res.data === "Avilable") {
        if (errorMsg !== null) setErrorMsg(null);
        setUsernameAvilable(true);
        setUser(prev => _objectSpread(_objectSpread({}, prev), {}, {
          username
        }));
      }
    } catch (error) {
      setUsernameAvilable(false);
      setErrorMsg("Username not avilable");
    }

    setUsernameLoading(false);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    username === "" ? setUsernameAvilable(false) : checkUsername();
  }, [username]);

  const handlesubmit = async e => {
    e.preventDefault();
    setFormLoading(true);
    let profilePicUrl;

    if (media !== null) {
      profilePicUrl = await (0,_utils_uploadPicToCloudinary__WEBPACK_IMPORTED_MODULE_8__.default)(media);
    }

    if (media !== null && !profilePicUrl) {
      setFormLoading(false);
      return setErrorMsg("Error uploading image");
    }

    await (0,_utils_authUser__WEBPACK_IMPORTED_MODULE_7__.registerUser)(user, profilePicUrl, setErrorMsg, setFormLoading);
  };

  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(_components_Common_WelcomeMessage__WEBPACK_IMPORTED_MODULE_4__.HeaderMessage, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 7
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form, {
    loading: formLoading,
    error: errorMsg !== null,
    onSubmit: handlesubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
    error: true,
    header: "oops!",
    content: errorMsg,
    onDismiss: () => setErrorMsg(null),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 9
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Segment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 9
    }
  }, __jsx(_components_Common_ImageDropDiv__WEBPACK_IMPORTED_MODULE_3__.default, {
    mediaPreview: mediaPreview,
    setMediaPreview: setMediaPreview,
    setMedia: setMedia,
    inputRef: inputRef,
    highlighted: highlighted,
    setHighlighted: setHighlighted,
    handlechange: handlechange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
    required: true,
    label: "Name",
    placeholder: "Name",
    name: "name",
    value: name,
    onChange: handlechange,
    fluid: true,
    icon: "user",
    iconPosition: "left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
    required: true,
    label: "Email",
    placeholder: "Email",
    name: "email",
    value: email,
    onChange: handlechange,
    fluid: true,
    icon: "envelope",
    iconPosition: "left",
    type: "email",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
    required: true,
    label: "Password",
    placeholder: "Password",
    name: "password",
    value: password,
    onChange: handlechange,
    fluid: true,
    icon: {
      name: "eye",
      circular: true,
      link: true,
      onClick: () => setShowPassword(!showPassword)
    },
    iconPosition: "left",
    type: showPassword ? "text" : "password",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
    required: true,
    loading: usernameLoading,
    error: !usernameAvilable,
    label: "Username",
    placeholder: "Username",
    value: username,
    onChange: e => {
      setUsername(e.target.value);

      if (regexUserName.test(e.target.value)) {
        setUsernameAvilable(true);
      } else {
        setUsernameAvilable(false);
      }
    },
    fluid: true,
    icon: usernameAvilable ? "check" : "close",
    iconPosition: "left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 11
    }
  }), __jsx(_components_Common_CommonInputs__WEBPACK_IMPORTED_MODULE_2__.default, {
    user: user,
    showSocialLinks: showSocialLinks,
    setShowSocialLinks: setShowSocialLinks,
    handlechange: handlechange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
    hidden: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
    icon: "signup",
    content: "signup",
    type: "submit",
    color: "orange",
    disabled: submitDisabled || !usernameAvilable,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 11
    }
  }))), __jsx(_components_Common_WelcomeMessage__WEBPACK_IMPORTED_MODULE_4__.FooterMessage, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Signup);

/***/ }),

/***/ "./utils/uploadPicToCloudinary.js":
/*!****************************************!*\
  !*** ./utils/uploadPicToCloudinary.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);


const uploadPic = async media => {
  try {
    const form = new FormData();
    form.append("file", media);
    form.append("upload_present", "social_media_app");
    form.append("cloud_name", "dksuz8msj");
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post("https://api.cloudinary.com/v1_1/dksuz8msj/image/upload", form);
    return res.data.url;
  } catch (error) {
    return;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (uploadPic);

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("bcryptjs");;

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("js-cookie");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("semantic-ui-react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","components_Common_WelcomeMessage_js-utils_baseUrl_js","utils_authUser_js"], function() { return __webpack_exec__("./pages/signup.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL0NvbW1vbi9Db21tb25JbnB1dHMuanMiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhLy4vY29tcG9uZW50cy9Db21tb24vSW1hZ2VEcm9wRGl2LmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL3BhZ2VzL3NpZ251cC5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi91dGlscy91cGxvYWRQaWNUb0Nsb3VkaW5hcnkuanMiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJiY3J5cHRqc1wiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcImpzLWNvb2tpZVwiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwic2VtYW50aWMtdWktcmVhY3RcIiJdLCJuYW1lcyI6WyJDb21tb25JbnB1dHMiLCJ1c2VyIiwiYmlvIiwiZmFjZWJvb2siLCJpbnN0YWdyYW0iLCJ5b3V0dWJlIiwidHdpdHRlciIsImhhbmRsZWNoYW5nZSIsInNob3dTb2NpYWxMaW5rcyIsInNldFNob3dTb2NpYWxMaW5rcyIsIlRleHRBcmVhIiwiSW1hZ2VEcm9wRGl2IiwiaGlnaGxpZ2h0ZWQiLCJzZXRIaWdobGlnaHRlZCIsImlucHV0UmVmIiwibWVkaWFQcmV2aWV3Iiwic2V0TWVkaWFQcmV2aWV3Iiwic2V0TWVkaWEiLCJkaXNwbGF5IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZHJvcHBlZEZpbGUiLCJBcnJheSIsImZyb20iLCJkYXRhVHJhbnNmZXIiLCJmaWxlcyIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImN1cnNvciIsImN1cnJlbnQiLCJjbGljayIsImJjcnlwdCIsInJlcXVpcmUiLCJyZWdleFVzZXJOYW1lIiwiY2FuY2VsIiwiU2lnbnVwIiwic2V0VXNlciIsInVzZVN0YXRlIiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJ2YWx1ZSIsInRhcmdldCIsInByZXYiLCJzaG93UGFzc3dvcmQiLCJzZXRTaG93UGFzc3dvcmQiLCJlcnJvck1zZyIsInNldEVycm9yTXNnIiwiZm9ybUxvYWRpbmciLCJzZXRGb3JtTG9hZGluZyIsInN1Ym1pdERpc2FibGVkIiwic2V0U3VibWl0RGlzYWJsZWQiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwidXNlcm5hbWVMb2FkaW5nIiwic2V0VXNlcm5hbWVMb2FkaW5nIiwidXNlcm5hbWVBdmlsYWJsZSIsInNldFVzZXJuYW1lQXZpbGFibGUiLCJtZWRpYSIsInVzZVJlZiIsInVzZUVmZmVjdCIsImlzVXNlciIsIk9iamVjdCIsInZhbHVlcyIsImV2ZXJ5IiwiaXRlbSIsIkJvb2xlYW4iLCJjaGVja1VzZXJuYW1lIiwiQ2FuY2VsVG9rZW4iLCJheGlvcyIsInJlcyIsImJhc2VVcmwiLCJjYW5jZWxUb2tlbiIsImNhbmNlbGVyIiwiZGF0YSIsImVycm9yIiwiaGFuZGxlc3VibWl0IiwicHJvZmlsZVBpY1VybCIsInVwbG9hZFBpYyIsInJlZ2lzdGVyVXNlciIsImNpcmN1bGFyIiwibGluayIsIm9uQ2xpY2siLCJ0ZXN0IiwiZm9ybSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwicHJvY2VzcyIsInVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQVNBLFNBQVNBLFlBQVQsQ0FBc0I7QUFDcEJDLE1BQUksRUFBRTtBQUFFQyxPQUFGO0FBQU9DLFlBQVA7QUFBaUJDLGFBQWpCO0FBQTRCQyxXQUE1QjtBQUFxQ0M7QUFBckMsR0FEYztBQUVwQkMsY0FGb0I7QUFHcEJDLGlCQUhvQjtBQUlwQkM7QUFKb0IsQ0FBdEIsRUFLRztBQUNELFNBQ0UscUVBQ0UsTUFBQyx5REFBRDtBQUNFLFlBQVEsTUFEVjtBQUVFLFdBQU8sRUFBRUMsdURBRlg7QUFHRSxRQUFJLEVBQUMsS0FIUDtBQUlFLFNBQUssRUFBRVIsR0FKVDtBQUtFLFlBQVEsRUFBRUssWUFMWjtBQU1FLGVBQVcsRUFBQyxLQU5kO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQVVFLE1BQUMscURBQUQ7QUFDRSxXQUFPLEVBQUMsa0JBRFY7QUFFRSxTQUFLLEVBQUMsS0FGUjtBQUdFLFFBQUksRUFBQyxJQUhQO0FBSUUsUUFBSSxFQUFDLFFBSlA7QUFLRSxXQUFPLEVBQUUsTUFBTUUsa0JBQWtCLENBQUMsQ0FBQ0QsZUFBRixDQUxuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVkYsRUFrQkdBLGVBQWUsSUFDZCxxRUFDRSxNQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMseURBQUQ7QUFDRSxRQUFJLEVBQUMsWUFEUDtBQUVFLGdCQUFZLEVBQUMsTUFGZjtBQUdFLFFBQUksRUFBQyxVQUhQO0FBSUUsU0FBSyxFQUFFTCxRQUpUO0FBS0UsWUFBUSxFQUFFSSxZQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFG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QUE7QUFBQSxJQWhGRixDQVpGLENBRkYsRUF1R0UsTUFBQyw0RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBdkdGLENBREY7QUEyR0Q7O0FBQ0QsK0RBQWVyQixNQUFmLEU7Ozs7Ozs7Ozs7Ozs7O0FDbFBBOztBQUVBLE1BQU0yQyxTQUFTLEdBQUcsTUFBT3BCLEtBQVAsSUFBaUI7QUFDakMsTUFBSTtBQUNGLFVBQU0wQixJQUFJLEdBQUcsSUFBSUMsUUFBSixFQUFiO0FBQ0FELFFBQUksQ0FBQ0UsTUFBTCxDQUFZLE1BQVosRUFBb0I1QixLQUFwQjtBQUNBMEIsUUFBSSxDQUFDRSxNQUFMLENBQVksZ0JBQVosRUFBOEIsa0JBQTlCO0FBQ0FGLFFBQUksQ0FBQ0UsTUFBTCxDQUFZLFlBQVosRUFBMEIsV0FBMUI7QUFFQSxVQUFNaEIsR0FBRyxHQUFHLE1BQU1ELGlEQUFBLENBQVdrQix3REFBWCxFQUF1Q0gsSUFBdkMsQ0FBbEI7QUFDQSxXQUFPZCxHQUFHLENBQUNJLElBQUosQ0FBU2MsR0FBaEI7QUFDRCxHQVJELENBUUUsT0FBT2IsS0FBUCxFQUFjO0FBQ2Q7QUFDRDtBQUNGLENBWkQ7O0FBY0EsK0RBQWVHLFNBQWYsRTs7Ozs7Ozs7Ozs7QUNoQkEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEsaUc7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsK0MiLCJmaWxlIjoicGFnZXMvc2lnbnVwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIEZvcm0sXHJcbiAgQnV0dG9uLFxyXG4gIE1lc3NhZ2UsXHJcbiAgU2VnbWVudCxcclxuICBUZXh0QXJlYSxcclxuICBEaXZpZGVyLFxyXG59IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gQ29tbW9uSW5wdXRzKHtcclxuICB1c2VyOiB7IGJpbywgZmFjZWJvb2ssIGluc3RhZ3JhbSwgeW91dHViZSwgdHdpdHRlciB9LFxyXG4gIGhhbmRsZWNoYW5nZSxcclxuICBzaG93U29jaWFsTGlua3MsXHJcbiAgc2V0U2hvd1NvY2lhbExpbmtzLFxyXG59KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxGb3JtLkZpZWxkXHJcbiAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICBjb250cm9sPXtUZXh0QXJlYX1cclxuICAgICAgICBuYW1lPVwiYmlvXCJcclxuICAgICAgICB2YWx1ZT17YmlvfVxyXG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVjaGFuZ2V9XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJiaW9cIlxyXG4gICAgICAvPlxyXG5cclxuICAgICAgPEJ1dHRvblxyXG4gICAgICAgIGNvbnRlbnQ9XCJBZGQgU29jaWFsIExpbmtzXCJcclxuICAgICAgICBjb2xvcj1cInJlZFwiXHJcbiAgICAgICAgaWNvbj1cImF0XCJcclxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93U29jaWFsTGlua3MoIXNob3dTb2NpYWxMaW5rcyl9XHJcbiAgICAgIC8+XHJcblxyXG4gICAgICB7c2hvd1NvY2lhbExpbmtzICYmIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgIGljb249XCJmYWNlYm9vayBmXCJcclxuICAgICAgICAgICAgaWNvblBvc2l0aW9uPVwibGVmdFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJmYWNlYm9va1wiXHJcbiAgICAgICAgICAgIHZhbHVlPXtmYWNlYm9va31cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZWNoYW5nZX1cclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgICAgaWNvbj1cInR3aXR0ZXJcIlxyXG4gICAgICAgICAgICBpY29uUG9zaXRpb249XCJsZWZ0XCJcclxuICAgICAgICAgICAgbmFtZT1cInR3aXR0ZXJcIlxyXG4gICAgICAgICAgICB2YWx1ZT17dHdpdHRlcn1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZWNoYW5nZX1cclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgICAgaWNvbj1cImluc3RhZ3JhbVwiXHJcbiAgICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIlxyXG4gICAgICAgICAgICBuYW1lPVwiaW5zdGFncmFtXCJcclxuICAgICAgICAgICAgdmFsdWU9e2luc3RhZ3JhbX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZWNoYW5nZX1cclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgICAgaWNvbj1cInlvdXR1YmVcIlxyXG4gICAgICAgICAgICBpY29uUG9zaXRpb249XCJsZWZ0XCJcclxuICAgICAgICAgICAgbmFtZT1cInlvdXR1YmVcIlxyXG4gICAgICAgICAgICB2YWx1ZT17eW91dHViZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZWNoYW5nZX1cclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPE1lc3NhZ2VcclxuICAgICAgICAgICAgaWNvbj1cImF0dGVudGlvblwiXHJcbiAgICAgICAgICAgIGluZm9cclxuICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgaGVhZGVyPVwiU29jaWFsIE1lZGlhIExpbmtzIEFyZSBPcHRpb25hbCFcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbW1vbklucHV0cztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGb3JtLCBTZWdtZW50LCBJbWFnZSwgSWNvbiwgSGVhZGVyIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmZ1bmN0aW9uIEltYWdlRHJvcERpdih7XHJcbiAgaGlnaGxpZ2h0ZWQsXHJcbiAgc2V0SGlnaGxpZ2h0ZWQsXHJcbiAgaW5wdXRSZWYsXHJcbiAgaGFuZGxlY2hhbmdlLFxyXG4gIG1lZGlhUHJldmlldyxcclxuICBzZXRNZWRpYVByZXZpZXcsXHJcbiAgc2V0TWVkaWEsXHJcbn0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEZvcm0uRmllbGQ+XHJcbiAgICAgICAgPFNlZ21lbnQgcGxhY2Vob2xkZXIgYmFzaWMgc2Vjb25kYXJ5PlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19XHJcbiAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvKlwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVjaGFuZ2V9XHJcbiAgICAgICAgICAgIG5hbWU9XCJtZWRpYVwiXHJcbiAgICAgICAgICAgIHJlZj17aW5wdXRSZWZ9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBvbkRyYWdPdmVyPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICBzZXRIaWdobGlnaHRlZCh0cnVlKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgb25EcmFnTGVhdmU9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgIHNldEhpZ2hsaWdodGVkKGZhbHNlKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgb25Ecm9wPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICBzZXRIaWdobGlnaHRlZCh0cnVlKTtcclxuXHJcbiAgICAgICAgICAgICAgY29uc3QgZHJvcHBlZEZpbGUgPSBBcnJheS5mcm9tKGUuZGF0YVRyYW5zZmVyLmZpbGVzKTtcclxuICAgICAgICAgICAgICBzZXRNZWRpYShkcm9wcGVkRmlsZVswXSk7XHJcbiAgICAgICAgICAgICAgc2V0TWVkaWFQcmV2aWV3KFVSTC5jcmVhdGVPYmplY3RVUkwoZHJvcHBlZEZpbGVbMF0pKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge21lZGlhUHJldmlldyA9PT0gbnVsbCA/IChcclxuICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPFNlZ21lbnQgY29sb3I9e2hpZ2hsaWdodGVkID8gXCJncmVlblwiIDogXCJcIn0gcGxhY2Vob2xkZXIgYmFzaWM+XHJcbiAgICAgICAgICAgICAgICAgIDxIZWFkZXIgaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImZpbGUgaW1hZ2Ugb3V0bGluZSBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaW5wdXRSZWYuY3VycmVudC5jbGljaygpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgRHJhZyBuIERyb3Agb3IgY2xpY2sgdG8gdXBsb2FkIGltYWdlXHJcbiAgICAgICAgICAgICAgICAgIDwvSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPC9TZWdtZW50PlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8U2VnbWVudCBjb2xvcj1cImdyZWVuXCIgcGxhY2Vob2xkZXIgYmFzaWM+XHJcbiAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17bWVkaWFQcmV2aWV3fVxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJtZWRpdW1cIlxyXG4gICAgICAgICAgICAgICAgICAgIGNlbnRlcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGlucHV0UmVmLmN1cnJlbnQuY2xpY2soKX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvU2VnbWVudD5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvU2VnbWVudD5cclxuICAgICAgPC9Gb3JtLkZpZWxkPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VEcm9wRGl2O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgRm9ybSxcclxuICBCdXR0b24sXHJcbiAgTWVzc2FnZSxcclxuICBTZWdtZW50LFxyXG4gIFRleHRBcmVhLFxyXG4gIERpdmlkZXIsXHJcbn0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCBDb21tb25JbnB1dHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29tbW9uL0NvbW1vbklucHV0c1wiO1xyXG5pbXBvcnQgSW1hZ2VEcm9wRGl2IGZyb20gXCIuLi9jb21wb25lbnRzL0NvbW1vbi9JbWFnZURyb3BEaXZcIjtcclxuaW1wb3J0IHtcclxuICBIZWFkZXJNZXNzYWdlLFxyXG4gIEZvb3Rlck1lc3NhZ2UsXHJcbn0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29tbW9uL1dlbGNvbWVNZXNzYWdlXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IGJhc2VVcmwgZnJvbSBcIi4uL3V0aWxzL2Jhc2VVcmxcIjtcclxuaW1wb3J0IHsgcmVnaXN0ZXJVc2VyIH0gZnJvbSBcIi4uL3V0aWxzL2F1dGhVc2VyXCI7XHJcbmltcG9ydCB1cGxvYWRQaWMgZnJvbSBcIi4uL3V0aWxzL3VwbG9hZFBpY1RvQ2xvdWRpbmFyeVwiO1xyXG5jb25zdCBiY3J5cHQgPSByZXF1aXJlKFwiYmNyeXB0anNcIik7XHJcblxyXG5jb25zdCByZWdleFVzZXJOYW1lID0gL14oPyEuKlxcLlxcLikoPyEuKlxcLiQpW15cXFddW1xcdy5dezAsMjl9JC87XHJcbmxldCBjYW5jZWw7XHJcblxyXG5mdW5jdGlvbiBTaWdudXAoKSB7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoe1xyXG4gICAgbmFtZTogXCJcIixcclxuICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICBiaW86IFwiXCIsXHJcbiAgICBmYWNlYm9vazogXCJcIixcclxuICAgIHlvdXR1YmU6IFwiXCIsXHJcbiAgICB0d2l0dGVyOiBcIlwiLFxyXG4gICAgaW5zdGFncmFtOiBcIlwiLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCB7IG5hbWUsIGVtYWlsLCBwYXNzd29yZCwgYmlvIH0gPSB1c2VyO1xyXG4gIGNvbnN0IGhhbmRsZWNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlLCBmaWxlcyB9ID0gZS50YXJnZXQ7XHJcblxyXG4gICAgaWYgKG5hbWUgPT09IFwibWVkaWFcIikge1xyXG4gICAgICBzZXRNZWRpYShmaWxlc1swXSk7XHJcbiAgICAgIHNldE1lZGlhUHJldmlldyhVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGVzWzBdKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VXNlcigocHJldikgPT4gKHsgLi4ucHJldiwgW25hbWVdOiB2YWx1ZSB9KSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgW3Nob3dTb2NpYWxMaW5rcywgc2V0U2hvd1NvY2lhbExpbmtzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2hvd1Bhc3N3b3JkLCBzZXRTaG93UGFzc3dvcmRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtlcnJvck1zZywgc2V0RXJyb3JNc2ddID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2Zvcm1Mb2FkaW5nLCBzZXRGb3JtTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3N1Ym1pdERpc2FibGVkLCBzZXRTdWJtaXREaXNhYmxlZF0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbdXNlcm5hbWVMb2FkaW5nLCBzZXRVc2VybmFtZUxvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt1c2VybmFtZUF2aWxhYmxlLCBzZXRVc2VybmFtZUF2aWxhYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgW21lZGlhLCBzZXRNZWRpYV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbbWVkaWFQcmV2aWV3LCBzZXRNZWRpYVByZXZpZXddID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2hpZ2hsaWdodGVkLCBzZXRIaWdobGlnaHRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgaW5wdXRSZWYgPSB1c2VSZWYoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGlzVXNlciA9IE9iamVjdC52YWx1ZXMoeyBuYW1lLCBlbWFpbCwgcGFzc3dvcmQsIGJpbyB9KS5ldmVyeSgoaXRlbSkgPT5cclxuICAgICAgQm9vbGVhbihpdGVtKVxyXG4gICAgKTtcclxuICAgIGlzVXNlciA/IHNldFN1Ym1pdERpc2FibGVkKGZhbHNlKSA6IHNldFN1Ym1pdERpc2FibGVkKHRydWUpO1xyXG4gIH0sIFt1c2VyXSk7XHJcblxyXG4gIC8vIGNvbnN0IGNoZWNrVXNlcm5hbWUgPSBhc3luYyAoKSA9PiB7XHJcbiAgLy8gICAgIHNldFVzZXJuYW1lTG9hZGluZyh0cnVlKTtcclxuICAvLyAgICAgdHJ5IHtcclxuICAvLyAgICAgICBjYW5jZWwgJiYgY2FuY2VsKCk7XHJcbiAgLy8gICAgICAgY29uc3QgQ2FuY2VsVG9rZW4gPSBheGlvcy5DYW5jZWxUb2tlbjtcclxuICAvLyAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7YmFzZVVybH0vYXBpL3NpZ251cC8ke3VzZXJuYW1lfWAsIHtcclxuICAvLyAgICAgICAgIGNhbmNlbFRva2VuOiBuZXcgQ2FuY2VsVG9rZW4oKGNhbmNlbGVyKSA9PiB7XHJcbiAgLy8gICAgICAgICAgIGNhbmNlbCA9IGNhbmNlbGVyO1xyXG4gIC8vICAgICAgICAgfSksXHJcbiAgLy8gICAgICAgfSk7XHJcbiAgLy8gICAgICAgaWYgKHJlcy5kYXRhID09PSBcIkF2aWxhYmxlXCIpIHtcclxuICAvLyAgICAgICAgIGlmKGVycm9yTXNnIT09bnVsbCkgc2V0RXJyb3JNc2cobnVsbClcclxuICAvLyAgICAgICAgIHNldFVzZXJuYW1lQXZpbGFibGUodHJ1ZSk7XHJcbiAgLy8gICAgICAgICBzZXRVc2VyKChwcmV2KSA9PiAoeyAuLi5wcmV2LCB1c2VybmFtZSB9KSk7XHJcbiAgLy8gICAgICAgfVxyXG4gIC8vICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gIC8vICAgICAgIHNldFVzZXJuYW1lQXZpbGFibGUoZmFsc2UpXHJcbiAgLy8gICAgICAgc2V0RXJyb3JNc2coXCJVc2VybmFtZSBub3QgYXZpbGFibGVcIik7XHJcbiAgLy8gICAgIH1cclxuICAvLyAgICAgc2V0VXNlcm5hbWVMb2FkaW5nKGZhbHNlKTtcclxuICAvLyAgIH07XHJcblxyXG4gIGNvbnN0IGNoZWNrVXNlcm5hbWUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBzZXRVc2VybmFtZUxvYWRpbmcodHJ1ZSk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjYW5jZWwgJiYgY2FuY2VsKCk7XHJcbiAgICAgIGNvbnN0IENhbmNlbFRva2VuID0gYXhpb3MuQ2FuY2VsVG9rZW47XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtiYXNlVXJsfS9hcGkvc2lnbnVwLyR7dXNlcm5hbWV9YCwge1xyXG4gICAgICAgIGNhbmNlbFRva2VuOiBuZXcgQ2FuY2VsVG9rZW4oKGNhbmNlbGVyKSA9PiB7XHJcbiAgICAgICAgICBjYW5jZWwgPSBjYW5jZWxlcjtcclxuICAgICAgICB9KSxcclxuICAgICAgfSk7XHJcbiAgICAgIGlmIChyZXMuZGF0YSA9PT0gXCJBdmlsYWJsZVwiKSB7XHJcbiAgICAgICAgaWYgKGVycm9yTXNnICE9PSBudWxsKSBzZXRFcnJvck1zZyhudWxsKTtcclxuICAgICAgICBzZXRVc2VybmFtZUF2aWxhYmxlKHRydWUpO1xyXG4gICAgICAgIHNldFVzZXIoKHByZXYpID0+ICh7IC4uLnByZXYsIHVzZXJuYW1lIH0pKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgc2V0VXNlcm5hbWVBdmlsYWJsZShmYWxzZSk7XHJcbiAgICAgIHNldEVycm9yTXNnKFwiVXNlcm5hbWUgbm90IGF2aWxhYmxlXCIpO1xyXG4gICAgfVxyXG4gICAgc2V0VXNlcm5hbWVMb2FkaW5nKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgdXNlcm5hbWUgPT09IFwiXCIgPyBzZXRVc2VybmFtZUF2aWxhYmxlKGZhbHNlKSA6IGNoZWNrVXNlcm5hbWUoKTtcclxuICB9LCBbdXNlcm5hbWVdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlc3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldEZvcm1Mb2FkaW5nKHRydWUpO1xyXG5cclxuICAgIGxldCBwcm9maWxlUGljVXJsO1xyXG4gICAgaWYgKG1lZGlhICE9PSBudWxsKSB7XHJcbiAgICAgIHByb2ZpbGVQaWNVcmwgPSBhd2FpdCB1cGxvYWRQaWMobWVkaWEpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChtZWRpYSAhPT0gbnVsbCAmJiAhcHJvZmlsZVBpY1VybCkge1xyXG4gICAgICBzZXRGb3JtTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIHJldHVybiBzZXRFcnJvck1zZyhcIkVycm9yIHVwbG9hZGluZyBpbWFnZVwiKTtcclxuICAgIH1cclxuICAgIGF3YWl0IHJlZ2lzdGVyVXNlcih1c2VyLCBwcm9maWxlUGljVXJsLCBzZXRFcnJvck1zZywgc2V0Rm9ybUxvYWRpbmcpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZGVyTWVzc2FnZSAvPlxyXG4gICAgICA8Rm9ybVxyXG4gICAgICAgIGxvYWRpbmc9e2Zvcm1Mb2FkaW5nfVxyXG4gICAgICAgIGVycm9yPXtlcnJvck1zZyAhPT0gbnVsbH1cclxuICAgICAgICBvblN1Ym1pdD17aGFuZGxlc3VibWl0fVxyXG4gICAgICA+XHJcbiAgICAgICAgPE1lc3NhZ2VcclxuICAgICAgICAgIGVycm9yXHJcbiAgICAgICAgICBoZWFkZXI9XCJvb3BzIVwiXHJcbiAgICAgICAgICBjb250ZW50PXtlcnJvck1zZ31cclxuICAgICAgICAgIG9uRGlzbWlzcz17KCkgPT4gc2V0RXJyb3JNc2cobnVsbCl9XHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPFNlZ21lbnQ+XHJcbiAgICAgICAgICA8SW1hZ2VEcm9wRGl2XHJcbiAgICAgICAgICAgIG1lZGlhUHJldmlldz17bWVkaWFQcmV2aWV3fVxyXG4gICAgICAgICAgICBzZXRNZWRpYVByZXZpZXc9e3NldE1lZGlhUHJldmlld31cclxuICAgICAgICAgICAgc2V0TWVkaWE9e3NldE1lZGlhfVxyXG4gICAgICAgICAgICBpbnB1dFJlZj17aW5wdXRSZWZ9XHJcbiAgICAgICAgICAgIGhpZ2hsaWdodGVkPXtoaWdobGlnaHRlZH1cclxuICAgICAgICAgICAgc2V0SGlnaGxpZ2h0ZWQ9e3NldEhpZ2hsaWdodGVkfVxyXG4gICAgICAgICAgICBoYW5kbGVjaGFuZ2U9e2hhbmRsZWNoYW5nZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICBsYWJlbD1cIk5hbWVcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWVcIlxyXG4gICAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlY2hhbmdlfVxyXG4gICAgICAgICAgICBmbHVpZFxyXG4gICAgICAgICAgICBpY29uPVwidXNlclwiXHJcbiAgICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIlxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICBsYWJlbD1cIkVtYWlsXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZWNoYW5nZX1cclxuICAgICAgICAgICAgZmx1aWRcclxuICAgICAgICAgICAgaWNvbj1cImVudmVsb3BlXCJcclxuICAgICAgICAgICAgaWNvblBvc2l0aW9uPVwibGVmdFwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlY2hhbmdlfVxyXG4gICAgICAgICAgICBmbHVpZFxyXG4gICAgICAgICAgICBpY29uPXt7XHJcbiAgICAgICAgICAgICAgbmFtZTogXCJleWVcIixcclxuICAgICAgICAgICAgICBjaXJjdWxhcjogdHJ1ZSxcclxuICAgICAgICAgICAgICBsaW5rOiB0cnVlLFxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHNldFNob3dQYXNzd29yZCghc2hvd1Bhc3N3b3JkKSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgaWNvblBvc2l0aW9uPVwibGVmdFwiXHJcbiAgICAgICAgICAgIHR5cGU9e3Nob3dQYXNzd29yZCA/IFwidGV4dFwiIDogXCJwYXNzd29yZFwifVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIGxvYWRpbmc9e3VzZXJuYW1lTG9hZGluZ31cclxuICAgICAgICAgICAgZXJyb3I9eyF1c2VybmFtZUF2aWxhYmxlfVxyXG4gICAgICAgICAgICBsYWJlbD1cIlVzZXJuYW1lXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJVc2VybmFtZVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXt1c2VybmFtZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgIGlmIChyZWdleFVzZXJOYW1lLnRlc3QoZS50YXJnZXQudmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRVc2VybmFtZUF2aWxhYmxlKHRydWUpO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRVc2VybmFtZUF2aWxhYmxlKGZhbHNlKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGZsdWlkXHJcbiAgICAgICAgICAgIGljb249e3VzZXJuYW1lQXZpbGFibGUgPyBcImNoZWNrXCIgOiBcImNsb3NlXCJ9XHJcbiAgICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIlxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8Q29tbW9uSW5wdXRzXHJcbiAgICAgICAgICAgIHVzZXI9e3VzZXJ9XHJcbiAgICAgICAgICAgIHNob3dTb2NpYWxMaW5rcz17c2hvd1NvY2lhbExpbmtzfVxyXG4gICAgICAgICAgICBzZXRTaG93U29jaWFsTGlua3M9e3NldFNob3dTb2NpYWxMaW5rc31cclxuICAgICAgICAgICAgaGFuZGxlY2hhbmdlPXtoYW5kbGVjaGFuZ2V9XHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxEaXZpZGVyIGhpZGRlbiAvPlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBpY29uPVwic2lnbnVwXCJcclxuICAgICAgICAgICAgY29udGVudD1cInNpZ251cFwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICBjb2xvcj1cIm9yYW5nZVwiXHJcbiAgICAgICAgICAgIGRpc2FibGVkPXtzdWJtaXREaXNhYmxlZCB8fCAhdXNlcm5hbWVBdmlsYWJsZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9TZWdtZW50PlxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICAgIDxGb290ZXJNZXNzYWdlIC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFNpZ251cDtcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuY29uc3QgdXBsb2FkUGljID0gYXN5bmMgKG1lZGlhKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGZvcm0gPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGZvcm0uYXBwZW5kKFwiZmlsZVwiLCBtZWRpYSk7XHJcbiAgICBmb3JtLmFwcGVuZChcInVwbG9hZF9wcmVzZW50XCIsIFwic29jaWFsX21lZGlhX2FwcFwiKTtcclxuICAgIGZvcm0uYXBwZW5kKFwiY2xvdWRfbmFtZVwiLCBcImRrc3V6OG1zalwiKTtcclxuXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KHByb2Nlc3MuZW52LkNMT1VESU5BUllfVVJMLCBmb3JtKTtcclxuICAgIHJldHVybiByZXMuZGF0YS51cmw7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1cGxvYWRQaWM7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiY3J5cHRqc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianMtY29va2llXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZW1hbnRpYy11aS1yZWFjdFwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==