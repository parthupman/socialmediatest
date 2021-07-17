(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/Layout/NoData.js":
/*!*************************************!*\
  !*** ./components/Layout/NoData.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoProfilePosts": function() { return /* binding */ NoProfilePosts; },
/* harmony export */   "NoFollowData": function() { return /* binding */ NoFollowData; },
/* harmony export */   "NoMessages": function() { return /* binding */ NoMessages; },
/* harmony export */   "NoPosts": function() { return /* binding */ NoPosts; },
/* harmony export */   "NoProfile": function() { return /* binding */ NoProfile; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\programming\\Dev\\SOCIALMEDIA\\components\\Layout\\NoData.js";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

const NoProfilePosts = () => __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
  info: true,
  icon: "meh",
  header: "Sorry",
  content: "User has not posted anything yet!",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }
}), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
  icon: "long arrow alternate left",
  content: "Go Back",
  as: "a",
  href: "/",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }
}));
const NoFollowData = ({
  followersComponent,
  followingComponent
}) => __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, followersComponent && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
  icon: "user outline",
  info: true,
  content: "User does not have followers",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 7
  }
}), followingComponent && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
  icon: "user outline",
  info: true,
  content: "User does not follow any users",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 7
  }
}));
const NoMessages = () => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
  info: true,
  icon: "telegram plane",
  header: "Sorry",
  content: "You have not messaged anyone yet.Search above to message someone!",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 3
  }
});
const NoPosts = () => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
  info: true,
  icon: "meh",
  header: "Hey!",
  content: "No Posts. Make sure you have followed someone.",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 3
  }
});
const NoProfile = () => __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
  info: true,
  icon: "meh",
  header: "Hey!",
  content: "No Profile Found.",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 3
  }
});

/***/ }),

/***/ "./components/Layout/Toastr.js":
/*!*************************************!*\
  !*** ./components/Layout/Toastr.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostDeleteToastr": function() { return /* binding */ PostDeleteToastr; },
/* harmony export */   "ErrorToastr": function() { return /* binding */ ErrorToastr; },
/* harmony export */   "MsgSentToastr": function() { return /* binding */ MsgSentToastr; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\programming\\Dev\\SOCIALMEDIA\\components\\Layout\\Toastr.js";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

const PostDeleteToastr = () => {
  return __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_1__.ToastContainer, {
    position: "bottom-center",
    autoClose: 3000,
    hideProgressBar: false,
    newestOnTop: false,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: false,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.info("Deleted Successfully", {
    position: "bottom-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined
  }));
};
const ErrorToastr = ({
  error
}) => {
  return __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_1__.ToastContainer, {
    position: "bottom-center",
    autoClose: 3000,
    hideProgressBar: false,
    newestOnTop: false,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: false,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error(error, {
    position: "bottom-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined
  }));
};
const MsgSentToastr = () => __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_1__.ToastContainer, {
  position: "bottom-center",
  autoClose: 3000,
  hideProgressBar: false,
  newestOnTop: false,
  closeOnClick: true,
  rtl: false,
  pauseOnFocusLoss: true,
  draggable: true,
  pauseOnHover: false,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 3
  }
}, react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.success("Sent successfully", {
  position: "bottom-center",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  progress: undefined
}));

/***/ }),

/***/ "./components/Post/CardPost.js":
/*!*************************************!*\
  !*** ./components/Post/CardPost.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PostComments__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PostComments */ "./components/Post/PostComments.js");
/* harmony import */ var _CommentInputField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CommentInputField */ "./components/Post/CommentInputField.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_calculateTime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/calculateTime */ "./utils/calculateTime.js");
/* harmony import */ var _utils_postActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/postActions */ "./utils/postActions.js");
var _jsxFileName = "D:\\programming\\Dev\\SOCIALMEDIA\\components\\Post\\CardPost.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);








function Cardpost({
  post,
  user,
  setPosts,
  setShowToastr
}) {
  const {
    0: likes,
    1: setLikes
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(post.likes);
  const {
    0: comments,
    1: setComments
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(post.comments);
  const {
    0: error,
    1: seterror
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const isLiked = likes.length > 0 && likes.filter(like => like.user === user._id).length > 0;
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Segment, {
    basic: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Card, {
    color: "teal",
    fluid: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, post.picUrl && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
    src: post.picUrl,
    style: {
      cursor: "pointer"
    },
    floated: "left",
    wrapped: true,
    ui: false,
    alt: "PostImage",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Card.Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
    floated: "left",
    src: post.user.profilePicUrl,
    avatar: true,
    circular: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }), (user.role === "root" || post.user._id === user._id) && __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Popup, {
    on: "click",
    position: "top right",
    trigger: __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
      src: "/deleteIcon.svg",
      sytle: {
        cursor: "pointer"
      },
      size: "mini",
      floated: "right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 21
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Header, {
    as: "h4",
    content: "Are you sure?",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 19
    }
  }), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 19
    }
  }, "This action is irreversible!"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
    color: "red",
    icon: "trash",
    content: "Delete",
    onClick: () => (0,_utils_postActions__WEBPACK_IMPORTED_MODULE_6__.deletePost)(post._id, setPosts, setShowToastr),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 19
    }
  }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Card.Header, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }
  }, __jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
    href: `/${post.user.username}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 15
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 17
    }
  }, post.user.name))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Card.Meta, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }
  }, (0,_utils_calculateTime__WEBPACK_IMPORTED_MODULE_5__.default)(post.createdAt)), post.location && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Card.Meta, {
    content: post.location,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 31
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Card.Description, {
    style: {
      fontSize: "17px",
      letterSpacing: ".1px",
      wordSpacing: ".35px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }
  }, post.text)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Card.Content, {
    extra: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    name: isLiked ? "heart" : "heart outline",
    color: "red",
    style: {
      cursor: "pointer"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 13
    }
  }), likes.length > 0 && __jsx("span", {
    className: "spanLikesList",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 15
    }
  }, `${likes.length} ${likes.length === 1 ? "like" : "likes"}`), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    name: "comment outline",
    style: {
      marginLeft: "7px"
    },
    color: "blue",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 13
    }
  }), comments.length > 0 && comments.map((comment, i) => i < 3 && __jsx(_PostComments__WEBPACK_IMPORTED_MODULE_2__.default, {
    key: comment._id,
    comment: comment,
    postId: post._id,
    user: user,
    setComments: setComments,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 21
    }
  })), comments.length > 3 && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
    content: "View More",
    color: "teal",
    basic: true,
    circular: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 15
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
    hidden: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 13
    }
  }), __jsx(_CommentInputField__WEBPACK_IMPORTED_MODULE_3__.default, {
    user: user,
    postId: post._id,
    setComments: setComments,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 13
    }
  })))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
    hidden: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Cardpost);

/***/ }),

/***/ "./components/Post/CommentInputField.js":
/*!**********************************************!*\
  !*** ./components/Post/CommentInputField.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\programming\\Dev\\SOCIALMEDIA\\components\\Post\\CommentInputField.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



function Commentinputfield({
  postId,
  user,
  setComments
}) {
  const {
    0: text,
    1: setText
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form, {
    reply: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
    value: text,
    onChange: e => setText(e.target.value),
    placeholder: "Add Comment",
    action: {
      color: "blue",
      icon: "edit",
      loading: loading,
      disabled: text === "" || loading
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Commentinputfield);

/***/ }),

/***/ "./components/Post/CreatePost.js":
/*!***************************************!*\
  !*** ./components/Post/CreatePost.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_uploadPicToCloudinary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/uploadPicToCloudinary */ "./utils/uploadPicToCloudinary.js");
/* harmony import */ var _utils_postActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/postActions */ "./utils/postActions.js");
var _jsxFileName = "D:\\programming\\Dev\\SOCIALMEDIA\\components\\Post\\CreatePost.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function Createpost({
  user,
  setPosts
}) {
  const {
    0: newPost,
    1: setNewPost
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    text: "",
    location: ""
  });
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const {
    0: error,
    1: setError
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: highlighted,
    1: setHighlighted
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: media,
    1: setMedia
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: mediaPreview,
    1: setMediaPreview
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);

  const handleChange = e => {
    const {
      name,
      value,
      files
    } = e.target;

    if (name === "media") {
      setMedia(files[0]);
      setMediaPreview(URL.createObjectURL(files[0]));
    }

    setNewPost(prev => _objectSpread(_objectSpread({}, prev), {}, {
      [name]: value
    }));
  };

  const addStyles = () => ({
    textAlign: "center",
    height: "150px",
    width: "150px",
    border: "dotted",
    paddingTop: media === null && "60px",
    cursor: "pointer",
    borderColor: highlighted ? "green" : "black"
  });

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    let picUrl;

    if (media !== null) {
      picUrl = await (0,_utils_uploadPicToCloudinary__WEBPACK_IMPORTED_MODULE_2__.default)(media);

      if (!picUrl) {
        setLoading(false);
        return setError("Error Uploading Image");
      }
    }

    await (0,_utils_postActions__WEBPACK_IMPORTED_MODULE_3__.submitNewPost)(newPost.text, newPost.location, picUrl, setPosts, setNewPost, setError);
    setMedia(null);
    setMediaPreview(null);
    setLoading(false);
  };

  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form, {
    error: error != null,
    onSubmit: handleSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
    error: true,
    onDismiss: () => setError(null),
    content: error,
    header: "Oops!",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Group, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
    src: user.profilePicUrl,
    circular: true,
    avatar: true,
    inline: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.TextArea, {
    placeholder: "Whats Happening",
    name: "text",
    value: newPost.text,
    onChange: handleChange,
    rows: 4,
    width: 14,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 11
    }
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Group, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
    value: newPost.location,
    name: "location",
    onChange: handleChange,
    label: "Add location",
    icon: "map marker alternate",
    placeholder: "Want to add Location?",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 11
    }
  }), __jsx("input", {
    ref: inputRef,
    onChange: handleChange,
    name: "media",
    style: {
      display: "none"
    },
    type: "file",
    accept: "image/*",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 11
    }
  })), __jsx("div", {
    onClick: () => inputRef.current.click(),
    style: addStyles(),
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
      lineNumber: 105,
      columnNumber: 9
    }
  }, media === null ? __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    name: "plus",
    size: "big",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 13
    }
  }) : __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
    style: {
      height: "150px",
      width: "150px"
    },
    src: mediaPreview,
    alt: "PostImage",
    centered: true,
    size: "medium",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 15
    }
  }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
    hidden: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 9
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
    circular: true,
    disabled: newPost.text === "" || loading,
    content: __jsx("strong", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 20
      }
    }, "Post"),
    style: {
      backgroundColor: "#1DA1F2",
      color: "white"
    },
    icon: "send",
    loading: loading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 9
    }
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Createpost);

/***/ }),

/***/ "./components/Post/PostComments.js":
/*!*****************************************!*\
  !*** ./components/Post/PostComments.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_calculateTime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/calculateTime */ "./utils/calculateTime.js");
var _jsxFileName = "D:\\programming\\Dev\\SOCIALMEDIA\\components\\Post\\PostComments.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);




function Postcomments({
  comment,
  user,
  setComments,
  postId
}) {
  const {
    0: disabled,
    1: setdisabled
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Comment.Group, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Comment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Comment.Avatar, {
    src: comment.user.profilePicUrl,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Comment.Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Comment.Author, {
    as: "a",
    href: `/${comment.user.username}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, comment.user.name), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Comment.Metadata, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, (0,_utils_calculateTime__WEBPACK_IMPORTED_MODULE_2__.default)(comment.date)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Comment.Text, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, comment.text), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Comment.Actions, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Comment.Action, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 15
    }
  }, (user.role === "root" || comment.user._id === user._id) && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    disabled: disabled,
    color: "red",
    name: "trash",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 19
    }
  })))))));
}

/* harmony default export */ __webpack_exports__["default"] = (Postcomments);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _components_Post_CardPost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Post/CardPost */ "./components/Post/CardPost.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nookies */ "nookies");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Layout_NoData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Layout/NoData */ "./components/Layout/NoData.js");
/* harmony import */ var _components_Post_CreatePost__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Post/CreatePost */ "./components/Post/CreatePost.js");
/* harmony import */ var _components_Layout_Toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Layout/Toastr */ "./components/Layout/Toastr.js");
var _jsxFileName = "D:\\programming\\Dev\\SOCIALMEDIA\\pages\\index.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);










function Index({
  user,
  postsData,
  errorLoading
}) {
  const {
    0: posts,
    1: setPosts
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(postsData);
  const {
    0: showToastr,
    1: setShowToastr
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    document.title = `Welcome, ${user.name.split(" ")[0]}`;
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    showToastr && setTimeout(() => setShowToastr(false), 3000);
  }, [showToastr]);
  if (posts.length === 0 || errorLoading) return __jsx(_components_Layout_NoData__WEBPACK_IMPORTED_MODULE_6__.NoPosts, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 50
    }
  });
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, showToastr && __jsx(_components_Layout_Toastr__WEBPACK_IMPORTED_MODULE_8__.PostDeleteToastr, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 22
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Segment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, __jsx(_components_Post_CreatePost__WEBPACK_IMPORTED_MODULE_7__.default, {
    user: user,
    setPosts: setPosts,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }), posts.map(post => __jsx(_components_Post_CardPost__WEBPACK_IMPORTED_MODULE_3__.default, {
    key: post._id,
    post: post,
    user: user,
    setPosts: setPosts,
    setShowToastr: setShowToastr,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }))));
}

Index.getInitialProps = async ctx => {
  try {
    const {
      token
    } = (0,nookies__WEBPACK_IMPORTED_MODULE_5__.parseCookies)(ctx);
    const res = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(`${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_2__.default}/api/posts`, {
      headers: {
        Authorization: token
      }
    });
    return {
      postsData: res.data
    };
  } catch (error) {
    return {
      errorLoading: true
    };
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./utils/baseUrl.js":
/*!**************************!*\
  !*** ./utils/baseUrl.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const baseUrl = "http://localhost:3000";
/* harmony default export */ __webpack_exports__["default"] = (baseUrl);

/***/ }),

/***/ "./utils/calculateTime.js":
/*!********************************!*\
  !*** ./utils/calculateTime.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-moment */ "react-moment");
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\programming\\Dev\\SOCIALMEDIA\\utils\\calculateTime.js";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



const calculateTime = createdAt => {
  const today = moment__WEBPACK_IMPORTED_MODULE_1___default()(Date.now());
  const postDate = moment__WEBPACK_IMPORTED_MODULE_1___default()(createdAt);
  const diffInHours = today.diff(postDate, "hours");

  if (diffInHours < 24) {
    return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, "Today ", __jsx((react_moment__WEBPACK_IMPORTED_MODULE_2___default()), {
      format: "hh:mm: A",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 15
      }
    }, createdAt));
  } else if (diffInHours > 24 && diffInHours < 36) {
    return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, "Yesterday ", __jsx((react_moment__WEBPACK_IMPORTED_MODULE_2___default()), {
      format: "hh:mm: A",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 19
      }
    }, createdAt));
  } else if (diffInHours > 36) {
    return __jsx((react_moment__WEBPACK_IMPORTED_MODULE_2___default()), {
      format: "DD/MM/YY hh:mm A",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 12
      }
    }, createdAt);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (calculateTime);

/***/ }),

/***/ "./utils/catchErrors.js":
/*!******************************!*\
  !*** ./utils/catchErrors.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const catchErrors = error => {
  let errorMsg = {};

  if (error.response) {
    // If the request was made and the server not responded with a status code in the range of 2xx
    errorMsg = error.response.data;
    console.error(errorMsg);
  } else if (error.request) {
    // if the request was made and no response was recevied from server
    errorMsg = error.request;
    console.error(errorMsg);
  } else {
    // if something else happened while making the request
    errorMsg = error.message;
    console.error(errorMsg);
  }

  return errorMsg;
};

/* harmony default export */ __webpack_exports__["default"] = (catchErrors);

/***/ }),

/***/ "./utils/postActions.js":
/*!******************************!*\
  !*** ./utils/postActions.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "submitNewPost": function() { return /* binding */ submitNewPost; },
/* harmony export */   "deletePost": function() { return /* binding */ deletePost; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _baseUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _catchErrors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catchErrors */ "./utils/catchErrors.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);




const Axios = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: `${_baseUrl__WEBPACK_IMPORTED_MODULE_1__.default}/api/posts`,
  headers: {
    Authorization: js_cookie__WEBPACK_IMPORTED_MODULE_3___default().get("token")
  }
});
const submitNewPost = async (text, location, picUrl, setPosts, setNewPost, setError) => {
  try {
    const res = await Axios.post("/", {
      text,
      location,
      picUrl
    });
    setPosts(prev => [res.data, ...prev]);
    setNewPost({
      text: "",
      location: ""
    });
  } catch (error) {
    const errorMsg = (0,_catchErrors__WEBPACK_IMPORTED_MODULE_2__.default)(error);
    setError(errorMsg);
  }
};
const deletePost = async (postId, setPosts, setShowToastr) => {
  try {
    await Axios.delete(`/${postId}`);
    setPosts(prev => prev.filter(post => post._id !== postId));
    setShowToastr(true);
  } catch (error) {
    alert((0,_catchErrors__WEBPACK_IMPORTED_MODULE_2__.default)(error));
  }
};

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
    form.append("upload_preset", "social_media_app");
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

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("js-cookie");;

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("moment");;

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

/***/ "nookies":
/*!**************************!*\
  !*** external "nookies" ***!
  \**************************/
/***/ (function(module) {

"use strict";
module.exports = require("nookies");;

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

/***/ "react-moment":
/*!*******************************!*\
  !*** external "react-moment" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-moment");;

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-toastify");;

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("semantic-ui-react");;

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js"], function() { return __webpack_exec__("./pages/index.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL0xheW91dC9Ob0RhdGEuanMiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhLy4vY29tcG9uZW50cy9MYXlvdXQvVG9hc3RyLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL2NvbXBvbmVudHMvUG9zdC9DYXJkUG9zdC5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL1Bvc3QvQ29tbWVudElucHV0RmllbGQuanMiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhLy4vY29tcG9uZW50cy9Qb3N0L0NyZWF0ZVBvc3QuanMiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhLy4vY29tcG9uZW50cy9Qb3N0L1Bvc3RDb21tZW50cy5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi91dGlscy9iYXNlVXJsLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL3V0aWxzL2NhbGN1bGF0ZVRpbWUuanMiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhLy4vdXRpbHMvY2F0Y2hFcnJvcnMuanMiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhLy4vdXRpbHMvcG9zdEFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhLy4vdXRpbHMvdXBsb2FkUGljVG9DbG91ZGluYXJ5LmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwianMtY29va2llXCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwibW9tZW50XCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJub29raWVzXCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcInJlYWN0LW1vbWVudFwiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcInJlYWN0LXRvYXN0aWZ5XCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwic2VtYW50aWMtdWktcmVhY3RcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvaWdub3JlZHxEOlxccHJvZ3JhbW1pbmdcXERldlxcU09DSUFMTUVESUFcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcbmV4dC1zZXJ2ZXJcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJuYW1lcyI6WyJOb1Byb2ZpbGVQb3N0cyIsIk5vRm9sbG93RGF0YSIsImZvbGxvd2Vyc0NvbXBvbmVudCIsImZvbGxvd2luZ0NvbXBvbmVudCIsIk5vTWVzc2FnZXMiLCJOb1Bvc3RzIiwiTm9Qcm9maWxlIiwiUG9zdERlbGV0ZVRvYXN0ciIsInRvYXN0IiwicG9zaXRpb24iLCJhdXRvQ2xvc2UiLCJoaWRlUHJvZ3Jlc3NCYXIiLCJjbG9zZU9uQ2xpY2siLCJwYXVzZU9uSG92ZXIiLCJkcmFnZ2FibGUiLCJwcm9ncmVzcyIsInVuZGVmaW5lZCIsIkVycm9yVG9hc3RyIiwiZXJyb3IiLCJNc2dTZW50VG9hc3RyIiwiQ2FyZHBvc3QiLCJwb3N0IiwidXNlciIsInNldFBvc3RzIiwic2V0U2hvd1RvYXN0ciIsImxpa2VzIiwic2V0TGlrZXMiLCJ1c2VTdGF0ZSIsImNvbW1lbnRzIiwic2V0Q29tbWVudHMiLCJzZXRlcnJvciIsImlzTGlrZWQiLCJsZW5ndGgiLCJmaWx0ZXIiLCJsaWtlIiwiX2lkIiwicGljVXJsIiwiY3Vyc29yIiwicHJvZmlsZVBpY1VybCIsInJvbGUiLCJkZWxldGVQb3N0IiwidXNlcm5hbWUiLCJuYW1lIiwiY2FsY3VsYXRlVGltZSIsImNyZWF0ZWRBdCIsImxvY2F0aW9uIiwiZm9udFNpemUiLCJsZXR0ZXJTcGFjaW5nIiwid29yZFNwYWNpbmciLCJ0ZXh0IiwibWFyZ2luTGVmdCIsIm1hcCIsImNvbW1lbnQiLCJpIiwiQ29tbWVudGlucHV0ZmllbGQiLCJwb3N0SWQiLCJzZXRUZXh0IiwibG9hZGluZyIsInNldExvYWRpbmciLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJjb2xvciIsImljb24iLCJkaXNhYmxlZCIsIkNyZWF0ZXBvc3QiLCJuZXdQb3N0Iiwic2V0TmV3UG9zdCIsImlucHV0UmVmIiwidXNlUmVmIiwic2V0RXJyb3IiLCJoaWdobGlnaHRlZCIsInNldEhpZ2hsaWdodGVkIiwibWVkaWEiLCJzZXRNZWRpYSIsIm1lZGlhUHJldmlldyIsInNldE1lZGlhUHJldmlldyIsImhhbmRsZUNoYW5nZSIsImZpbGVzIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwicHJldiIsImFkZFN0eWxlcyIsInRleHRBbGlnbiIsImhlaWdodCIsIndpZHRoIiwiYm9yZGVyIiwicGFkZGluZ1RvcCIsImJvcmRlckNvbG9yIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJ1cGxvYWRQaWMiLCJzdWJtaXROZXdQb3N0IiwiZGlzcGxheSIsImN1cnJlbnQiLCJjbGljayIsImRyb3BwZWRGaWxlIiwiQXJyYXkiLCJmcm9tIiwiZGF0YVRyYW5zZmVyIiwiYmFja2dyb3VuZENvbG9yIiwiUG9zdGNvbW1lbnRzIiwic2V0ZGlzYWJsZWQiLCJkYXRlIiwiSW5kZXgiLCJwb3N0c0RhdGEiLCJlcnJvckxvYWRpbmciLCJwb3N0cyIsInNob3dUb2FzdHIiLCJ1c2VFZmZlY3QiLCJkb2N1bWVudCIsInRpdGxlIiwic3BsaXQiLCJzZXRUaW1lb3V0IiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwidG9rZW4iLCJwYXJzZUNvb2tpZXMiLCJyZXMiLCJheGlvcyIsImJhc2VVcmwiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImRhdGEiLCJ0b2RheSIsIm1vbWVudCIsIkRhdGUiLCJub3ciLCJwb3N0RGF0ZSIsImRpZmZJbkhvdXJzIiwiZGlmZiIsImNhdGNoRXJyb3JzIiwiZXJyb3JNc2ciLCJyZXNwb25zZSIsImNvbnNvbGUiLCJyZXF1ZXN0IiwibWVzc2FnZSIsIkF4aW9zIiwiYmFzZVVSTCIsImNvb2tpZSIsImRlbGV0ZSIsImFsZXJ0IiwiZm9ybSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwicHJvY2VzcyIsInVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sTUFBTUEsY0FBYyxHQUFHLE1BQzVCLHFFQUNFLE1BQUMsc0RBQUQ7QUFBUyxNQUFJLE1BQWI7QUFBYyxNQUFJLEVBQUMsS0FBbkI7QUFBeUIsUUFBTSxFQUFDLE9BQWhDO0FBQXdDLFNBQU8sRUFBQyxtQ0FBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQURGLEVBRUUsTUFBQyxxREFBRDtBQUFRLE1BQUksRUFBQywyQkFBYjtBQUF5QyxTQUFPLEVBQUMsU0FBakQ7QUFBMkQsSUFBRSxFQUFDLEdBQTlEO0FBQWtFLE1BQUksRUFBQyxHQUF2RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBRkYsQ0FESztBQU9BLE1BQU1DLFlBQVksR0FBRyxDQUFDO0FB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LEdBQUcsTUFBTUMsaURBQUEsQ0FBVzBCLHdEQUFYLEVBQXVDSCxJQUF2QyxDQUFsQjtBQUNBLFdBQU94QixHQUFHLENBQUNLLElBQUosQ0FBU3VCLEdBQWhCO0FBQ0QsR0FSRCxDQVFFLE9BQU9oSSxLQUFQLEVBQWM7QUFDZDtBQUNEO0FBQ0YsQ0FaRDs7QUFjQSwrREFBZXlFLFNBQWYsRTs7Ozs7Ozs7Ozs7QUNoQkEsbUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEsaUc7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7QUNBQSxlIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWVzc2FnZSwgQnV0dG9uIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgTm9Qcm9maWxlUG9zdHMgPSAoKSA9PiAoXHJcbiAgPD5cclxuICAgIDxNZXNzYWdlIGluZm8gaWNvbj1cIm1laFwiIGhlYWRlcj1cIlNvcnJ5XCIgY29udGVudD1cIlVzZXIgaGFzIG5vdCBwb3N0ZWQgYW55dGhpbmcgeWV0IVwiIC8+XHJcbiAgICA8QnV0dG9uIGljb249XCJsb25nIGFycm93IGFsdGVybmF0ZSBsZWZ0XCIgY29udGVudD1cIkdvIEJhY2tcIiBhcz1cImFcIiBocmVmPVwiL1wiIC8+XHJcbiAgPC8+XHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgTm9Gb2xsb3dEYXRhID0gKHsgZm9sbG93ZXJzQ29tcG9uZW50LCBmb2xsb3dpbmdDb21wb25lbnQgfSkgPT4gKFxyXG4gIDw+XHJcbiAgICB7Zm9sbG93ZXJzQ29tcG9uZW50ICYmIChcclxuICAgICAgPE1lc3NhZ2UgaWNvbj1cInVzZXIgb3V0bGluZVwiIGluZm8gY29udGVudD1cIlVzZXIgZG9lcyBub3QgaGF2ZSBmb2xsb3dlcnNcIiAvPlxyXG4gICAgKX1cclxuXHJcbiAgICB7Zm9sbG93aW5nQ29tcG9uZW50ICYmIChcclxuICAgICAgPE1lc3NhZ2UgaWNvbj1cInVzZXIgb3V0bGluZVwiIGluZm8gY29udGVudD1cIlVzZXIgZG9lcyBub3QgZm9sbG93IGFueSB1c2Vyc1wiIC8+XHJcbiAgICApfVxyXG4gIDwvPlxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5vTWVzc2FnZXMgPSAoKSA9PiAoXHJcbiAgPE1lc3NhZ2VcclxuICAgIGluZm9cclxuICAgIGljb249XCJ0ZWxlZ3JhbSBwbGFuZVwiXHJcbiAgICBoZWFkZXI9XCJTb3JyeVwiXHJcbiAgICBjb250ZW50PVwiWW91IGhhdmUgbm90IG1lc3NhZ2VkIGFueW9uZSB5ZXQuU2VhcmNoIGFib3ZlIHRvIG1lc3NhZ2Ugc29tZW9uZSFcIlxyXG4gIC8+XHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgTm9Qb3N0cyA9ICgpID0+IChcclxuICA8TWVzc2FnZVxyXG4gICAgaW5mb1xyXG4gICAgaWNvbj1cIm1laFwiXHJcbiAgICBoZWFkZXI9XCJIZXkhXCJcclxuICAgIGNvbnRlbnQ9XCJObyBQb3N0cy4gTWFrZSBzdXJlIHlvdSBoYXZlIGZvbGxvd2VkIHNvbWVvbmUuXCJcclxuICAvPlxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5vUHJvZmlsZSA9ICgpID0+IChcclxuICA8TWVzc2FnZSBpbmZvIGljb249XCJtZWhcIiBoZWFkZXI9XCJIZXkhXCIgY29udGVudD1cIk5vIFByb2ZpbGUgRm91bmQuXCIgLz5cclxuKTsiLCJpbXBvcnQgeyB0b2FzdCwgVG9hc3RDb250YWluZXIgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBQb3N0RGVsZXRlVG9hc3RyID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8VG9hc3RDb250YWluZXJcclxuICAgICAgcG9zaXRpb249XCJib3R0b20tY2VudGVyXCJcclxuICAgICAgYXV0b0Nsb3NlPXszMDAwfVxyXG4gICAgICBoaWRlUHJvZ3Jlc3NCYXI9e2ZhbHNlfVxyXG4gICAgICBuZXdlc3RPblRvcD17ZmFsc2V9XHJcbiAgICAgIGNsb3NlT25DbGlja1xyXG4gICAgICBydGw9e2ZhbHNlfVxyXG4gICAgICBwYXVzZU9uRm9jdXNMb3NzXHJcbiAgICAgIGRyYWdnYWJsZVxyXG4gICAgICBwYXVzZU9uSG92ZXI9e2ZhbHNlfT5cclxuICAgICAge3RvYXN0LmluZm8oXCJEZWxldGVkIFN1Y2Nlc3NmdWxseVwiLCB7XHJcbiAgICAgICAgcG9zaXRpb246IFwiYm90dG9tLWNlbnRlclwiLFxyXG4gICAgICAgIGF1dG9DbG9zZTogMzAwMCxcclxuICAgICAgICBoaWRlUHJvZ3Jlc3NCYXI6IGZhbHNlLFxyXG4gICAgICAgIGNsb3NlT25DbGljazogdHJ1ZSxcclxuICAgICAgICBwYXVzZU9uSG92ZXI6IGZhbHNlLFxyXG4gICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgICAgICBwcm9ncmVzczogdW5kZWZpbmVkXHJcbiAgICAgIH0pfVxyXG4gICAgPC9Ub2FzdENvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IEVycm9yVG9hc3RyID0gKHsgZXJyb3IgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8VG9hc3RDb250YWluZXJcclxuICAgICAgcG9zaXRpb249XCJib3R0b20tY2VudGVyXCJcclxuICAgICAgYXV0b0Nsb3NlPXszMDAwfVxyXG4gICAgICBoaWRlUHJvZ3Jlc3NCYXI9e2ZhbHNlfVxyXG4gICAgICBuZXdlc3RPblRvcD17ZmFsc2V9XHJcbiAgICAgIGNsb3NlT25DbGlja1xyXG4gICAgICBydGw9e2ZhbHNlfVxyXG4gICAgICBwYXVzZU9uRm9jdXNMb3NzXHJcbiAgICAgIGRyYWdnYWJsZVxyXG4gICAgICBwYXVzZU9uSG92ZXI9e2ZhbHNlfT5cclxuICAgICAge3RvYXN0LmVycm9yKGVycm9yLCB7XHJcbiAgICAgICAgcG9zaXRpb246IFwiYm90dG9tLWNlbnRlclwiLFxyXG4gICAgICAgIGF1dG9DbG9zZTogMzAwMCxcclxuICAgICAgICBoaWRlUHJvZ3Jlc3NCYXI6IGZhbHNlLFxyXG4gICAgICAgIGNsb3NlT25DbGljazogdHJ1ZSxcclxuICAgICAgICBwYXVzZU9uSG92ZXI6IGZhbHNlLFxyXG4gICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgICAgICBwcm9ncmVzczogdW5kZWZpbmVkXHJcbiAgICAgIH0pfVxyXG4gICAgPC9Ub2FzdENvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IE1zZ1NlbnRUb2FzdHIgPSAoKSA9PiAoXHJcbiAgPFRvYXN0Q29udGFpbmVyXHJcbiAgICBwb3NpdGlvbj1cImJvdHRvbS1jZW50ZXJcIlxyXG4gICAgYXV0b0Nsb3NlPXszMDAwfVxyXG4gICAgaGlkZVByb2dyZXNzQmFyPXtmYWxzZX1cclxuICAgIG5ld2VzdE9uVG9wPXtmYWxzZX1cclxuICAgIGNsb3NlT25DbGlja1xyXG4gICAgcnRsPXtmYWxzZX1cclxuICAgIHBhdXNlT25Gb2N1c0xvc3NcclxuICAgIGRyYWdnYWJsZVxyXG4gICAgcGF1c2VPbkhvdmVyPXtmYWxzZX0+XHJcbiAgICB7dG9hc3Quc3VjY2VzcyhcIlNlbnQgc3VjY2Vzc2Z1bGx5XCIsIHtcclxuICAgICAgcG9zaXRpb246IFwiYm90dG9tLWNlbnRlclwiLFxyXG4gICAgICBhdXRvQ2xvc2U6IDMwMDAsXHJcbiAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXHJcbiAgICAgIGNsb3NlT25DbGljazogdHJ1ZSxcclxuICAgICAgcGF1c2VPbkhvdmVyOiBmYWxzZSxcclxuICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICBwcm9ncmVzczogdW5kZWZpbmVkXHJcbiAgICB9KX1cclxuICA8L1RvYXN0Q29udGFpbmVyPlxyXG4pO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIENhcmQsXHJcbiAgSWNvbixcclxuICBJbWFnZSxcclxuICBEaXZpZGVyLFxyXG4gIFNlZ21lbnQsXHJcbiAgQnV0dG9uLFxyXG4gIFBvcHVwLFxyXG4gIEhlYWRlcixcclxuICBNb2RhbCxcclxufSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IFBvc3RDb21tZW50cyBmcm9tIFwiLi9Qb3N0Q29tbWVudHNcIjtcclxuaW1wb3J0IENvbW1lbnRJbnB1dEZpZWxkIGZyb20gXCIuL0NvbW1lbnRJbnB1dEZpZWxkXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IGNhbGN1bGF0ZVRpbWUgZnJvbSBcIi4uLy4uL3V0aWxzL2NhbGN1bGF0ZVRpbWVcIjtcclxuaW1wb3J0IHsgZGVsZXRlUG9zdCB9IGZyb20gXCIuLi8uLi91dGlscy9wb3N0QWN0aW9uc1wiO1xyXG5cclxuZnVuY3Rpb24gQ2FyZHBvc3QoeyBwb3N0LCB1c2VyLCBzZXRQb3N0cywgc2V0U2hvd1RvYXN0ciB9KSB7XHJcbiAgY29uc3QgW2xpa2VzLCBzZXRMaWtlc10gPSB1c2VTdGF0ZShwb3N0Lmxpa2VzKTtcclxuXHJcbiAgY29uc3QgW2NvbW1lbnRzLCBzZXRDb21tZW50c10gPSB1c2VTdGF0ZShwb3N0LmNvbW1lbnRzKTtcclxuXHJcbiAgY29uc3QgW2Vycm9yLCBzZXRlcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgY29uc3QgaXNMaWtlZCA9XHJcbiAgICBsaWtlcy5sZW5ndGggPiAwICYmXHJcbiAgICBsaWtlcy5maWx0ZXIoKGxpa2UpID0+IGxpa2UudXNlciA9PT0gdXNlci5faWQpLmxlbmd0aCA+IDA7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8U2VnbWVudCBiYXNpYz5cclxuICAgICAgICA8Q2FyZCBjb2xvcj1cInRlYWxcIiBmbHVpZD5cclxuICAgICAgICAgIHtwb3N0LnBpY1VybCAmJiAoXHJcbiAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgIHNyYz17cG9zdC5waWNVcmx9XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxyXG4gICAgICAgICAgICAgIGZsb2F0ZWQ9XCJsZWZ0XCJcclxuICAgICAgICAgICAgICB3cmFwcGVkXHJcbiAgICAgICAgICAgICAgdWk9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgIGFsdD1cIlBvc3RJbWFnZVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgIDxDYXJkLkNvbnRlbnQ+XHJcbiAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgIGZsb2F0ZWQ9XCJsZWZ0XCJcclxuICAgICAgICAgICAgICBzcmM9e3Bvc3QudXNlci5wcm9maWxlUGljVXJsfVxyXG4gICAgICAgICAgICAgIGF2YXRhclxyXG4gICAgICAgICAgICAgIGNpcmN1bGFyXHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICB7KHVzZXIucm9sZSA9PT0gXCJyb290XCIgfHwgcG9zdC51c2VyLl9pZCA9PT0gdXNlci5faWQpICYmIChcclxuICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPFBvcHVwXHJcbiAgICAgICAgICAgICAgICAgIG9uPVwiY2xpY2tcIlxyXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbj1cInRvcCByaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgIHRyaWdnZXI9e1xyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2RlbGV0ZUljb24uc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN5dGxlPXt7IGN1cnNvcjogXCJwb2ludGVyXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJtaW5pXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGZsb2F0ZWQ9XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8SGVhZGVyIGFzPVwiaDRcIiBjb250ZW50PVwiQXJlIHlvdSBzdXJlP1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxwPlRoaXMgYWN0aW9uIGlzIGlycmV2ZXJzaWJsZSE8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInJlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbj1cInRyYXNoXCJcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiRGVsZXRlXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgZGVsZXRlUG9zdChwb3N0Ll9pZCwgc2V0UG9zdHMsIHNldFNob3dUb2FzdHIpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9Qb3B1cD5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIDxDYXJkLkhlYWRlcj5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPXtgLyR7cG9zdC51c2VyLnVzZXJuYW1lfWB9PlxyXG4gICAgICAgICAgICAgICAgPGE+e3Bvc3QudXNlci5uYW1lfTwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvQ2FyZC5IZWFkZXI+XHJcblxyXG4gICAgICAgICAgICA8Q2FyZC5NZXRhPntjYWxjdWxhdGVUaW1lKHBvc3QuY3JlYXRlZEF0KX08L0NhcmQuTWV0YT5cclxuXHJcbiAgICAgICAgICAgIHtwb3N0LmxvY2F0aW9uICYmIDxDYXJkLk1ldGEgY29udGVudD17cG9zdC5sb2NhdGlvbn0gLz59XHJcblxyXG4gICAgICAgICAgICA8Q2FyZC5EZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxN3B4XCIsXHJcbiAgICAgICAgICAgICAgICBsZXR0ZXJTcGFjaW5nOiBcIi4xcHhcIixcclxuICAgICAgICAgICAgICAgIHdvcmRTcGFjaW5nOiBcIi4zNXB4XCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtwb3N0LnRleHR9XHJcbiAgICAgICAgICAgIDwvQ2FyZC5EZXNjcmlwdGlvbj5cclxuICAgICAgICAgIDwvQ2FyZC5Db250ZW50PlxyXG5cclxuICAgICAgICAgIDxDYXJkLkNvbnRlbnQgZXh0cmE+XHJcbiAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgbmFtZT17aXNMaWtlZCA/IFwiaGVhcnRcIiA6IFwiaGVhcnQgb3V0bGluZVwifVxyXG4gICAgICAgICAgICAgIGNvbG9yPVwicmVkXCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiIH19XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICB7bGlrZXMubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Bhbkxpa2VzTGlzdFwiPlxyXG4gICAgICAgICAgICAgICAge2Ake2xpa2VzLmxlbmd0aH0gJHtsaWtlcy5sZW5ndGggPT09IDEgPyBcImxpa2VcIiA6IFwibGlrZXNcIn1gfVxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgbmFtZT1cImNvbW1lbnQgb3V0bGluZVwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCI3cHhcIiB9fVxyXG4gICAgICAgICAgICAgIGNvbG9yPVwiYmx1ZVwiXHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICB7Y29tbWVudHMubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgICAgIGNvbW1lbnRzLm1hcChcclxuICAgICAgICAgICAgICAgIChjb21tZW50LCBpKSA9PlxyXG4gICAgICAgICAgICAgICAgICBpIDwgMyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFBvc3RDb21tZW50c1xyXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtjb21tZW50Ll9pZH1cclxuICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnQ9e2NvbW1lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICBwb3N0SWQ9e3Bvc3QuX2lkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdXNlcj17dXNlcn1cclxuICAgICAgICAgICAgICAgICAgICAgIHNldENvbW1lbnRzPXtzZXRDb21tZW50c31cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIHtjb21tZW50cy5sZW5ndGggPiAzICYmIChcclxuICAgICAgICAgICAgICA8QnV0dG9uIGNvbnRlbnQ9XCJWaWV3IE1vcmVcIiBjb2xvcj1cInRlYWxcIiBiYXNpYyBjaXJjdWxhciAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8RGl2aWRlciBoaWRkZW4gLz5cclxuICAgICAgICAgICAgPENvbW1lbnRJbnB1dEZpZWxkXHJcbiAgICAgICAgICAgICAgdXNlcj17dXNlcn1cclxuICAgICAgICAgICAgICBwb3N0SWQ9e3Bvc3QuX2lkfVxyXG4gICAgICAgICAgICAgIHNldENvbW1lbnRzPXtzZXRDb21tZW50c31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvQ2FyZC5Db250ZW50PlxyXG4gICAgICAgIDwvQ2FyZD5cclxuICAgICAgPC9TZWdtZW50PlxyXG4gICAgICA8RGl2aWRlciBoaWRkZW4gLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmRwb3N0O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRm9ybSB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gQ29tbWVudGlucHV0ZmllbGQoeyBwb3N0SWQsIHVzZXIsIHNldENvbW1lbnRzIH0pIHtcclxuICBjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtIHJlcGx5PlxyXG4gICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgIHZhbHVlPXt0ZXh0fVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGV4dChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGQgQ29tbWVudFwiXHJcbiAgICAgICAgYWN0aW9uPXt7XHJcbiAgICAgICAgICBjb2xvcjogXCJibHVlXCIsXHJcbiAgICAgICAgICBpY29uOiBcImVkaXRcIixcclxuICAgICAgICAgIGxvYWRpbmc6IGxvYWRpbmcsXHJcbiAgICAgICAgICBkaXNhYmxlZDogdGV4dCA9PT0gXCJcIiB8fCBsb2FkaW5nLFxyXG4gICAgICAgIH19XHJcbiAgICAgIC8+XHJcbiAgICA8L0Zvcm0+XHJcbiAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBDb21tZW50aW5wdXRmaWVsZDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRm9ybSwgQnV0dG9uLCBJbWFnZSwgRGl2aWRlciwgTWVzc2FnZSwgSWNvbiB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgdXBsb2FkUGljIGZyb20gXCIuLi8uLi91dGlscy91cGxvYWRQaWNUb0Nsb3VkaW5hcnlcIjtcclxuaW1wb3J0IHsgc3VibWl0TmV3UG9zdCB9IGZyb20gXCIuLi8uLi91dGlscy9wb3N0QWN0aW9uc1wiO1xyXG5cclxuZnVuY3Rpb24gQ3JlYXRlcG9zdCh7IHVzZXIsIHNldFBvc3RzIH0pIHtcclxuICBjb25zdCBbbmV3UG9zdCwgc2V0TmV3UG9zdF0gPSB1c2VTdGF0ZSh7IHRleHQ6IFwiXCIsIGxvY2F0aW9uOiBcIlwiIH0pO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBpbnB1dFJlZiA9IHVzZVJlZigpO1xyXG5cclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtoaWdobGlnaHRlZCwgc2V0SGlnaGxpZ2h0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBbbWVkaWEsIHNldE1lZGlhXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFttZWRpYVByZXZpZXcsIHNldE1lZGlhUHJldmlld10gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUsIGZpbGVzIH0gPSBlLnRhcmdldDtcclxuXHJcbiAgICBpZiAobmFtZSA9PT0gXCJtZWRpYVwiKSB7XHJcbiAgICAgIHNldE1lZGlhKGZpbGVzWzBdKTtcclxuICAgICAgc2V0TWVkaWFQcmV2aWV3KFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZXNbMF0pKTtcclxuICAgIH1cclxuICAgIHNldE5ld1Bvc3QoKHByZXYpID0+ICh7IC4uLnByZXYsIFtuYW1lXTogdmFsdWUgfSkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFkZFN0eWxlcyA9ICgpID0+ICh7XHJcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICBoZWlnaHQ6IFwiMTUwcHhcIixcclxuICAgIHdpZHRoOiBcIjE1MHB4XCIsXHJcbiAgICBib3JkZXI6IFwiZG90dGVkXCIsXHJcbiAgICBwYWRkaW5nVG9wOiBtZWRpYSA9PT0gbnVsbCAmJiBcIjYwcHhcIixcclxuICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICBib3JkZXJDb2xvcjogaGlnaGxpZ2h0ZWQgPyBcImdyZWVuXCIgOiBcImJsYWNrXCIsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgbGV0IHBpY1VybDtcclxuXHJcbiAgICBpZiAobWVkaWEgIT09IG51bGwpIHtcclxuICAgICAgcGljVXJsID0gYXdhaXQgdXBsb2FkUGljKG1lZGlhKTtcclxuICAgICAgaWYgKCFwaWNVcmwpIHtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICByZXR1cm4gc2V0RXJyb3IoXCJFcnJvciBVcGxvYWRpbmcgSW1hZ2VcIik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhd2FpdCBzdWJtaXROZXdQb3N0KFxyXG4gICAgICBuZXdQb3N0LnRleHQsXHJcbiAgICAgIG5ld1Bvc3QubG9jYXRpb24sXHJcbiAgICAgIHBpY1VybCxcclxuICAgICAgc2V0UG9zdHMsXHJcbiAgICAgIHNldE5ld1Bvc3QsXHJcbiAgICAgIHNldEVycm9yXHJcbiAgICApO1xyXG4gICAgc2V0TWVkaWEobnVsbCk7XHJcbiAgICBzZXRNZWRpYVByZXZpZXcobnVsbCk7XHJcblxyXG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxGb3JtIGVycm9yPXtlcnJvciAhPSBudWxsfSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICA8TWVzc2FnZVxyXG4gICAgICAgICAgZXJyb3JcclxuICAgICAgICAgIG9uRGlzbWlzcz17KCkgPT4gc2V0RXJyb3IobnVsbCl9XHJcbiAgICAgICAgICBjb250ZW50PXtlcnJvcn1cclxuICAgICAgICAgIGhlYWRlcj1cIk9vcHMhXCJcclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8Rm9ybS5Hcm91cD5cclxuICAgICAgICAgIDxJbWFnZSBzcmM9e3VzZXIucHJvZmlsZVBpY1VybH0gY2lyY3VsYXIgYXZhdGFyIGlubGluZSAvPlxyXG4gICAgICAgICAgPEZvcm0uVGV4dEFyZWFcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJXaGF0cyBIYXBwZW5pbmdcIlxyXG4gICAgICAgICAgICBuYW1lPVwidGV4dFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtuZXdQb3N0LnRleHR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIHJvd3M9ezR9XHJcbiAgICAgICAgICAgIHdpZHRoPXsxNH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG5cclxuICAgICAgICA8Rm9ybS5Hcm91cD5cclxuICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgIHZhbHVlPXtuZXdQb3N0LmxvY2F0aW9ufVxyXG4gICAgICAgICAgICBuYW1lPVwibG9jYXRpb25cIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICBsYWJlbD1cIkFkZCBsb2NhdGlvblwiXHJcbiAgICAgICAgICAgIGljb249XCJtYXAgbWFya2VyIGFsdGVybmF0ZVwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV2FudCB0byBhZGQgTG9jYXRpb24/XCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgcmVmPXtpbnB1dFJlZn1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgbmFtZT1cIm1lZGlhXCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX1cclxuICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS8qXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBpbnB1dFJlZi5jdXJyZW50LmNsaWNrKCl9XHJcbiAgICAgICAgICBzdHlsZT17YWRkU3R5bGVzKCl9XHJcbiAgICAgICAgICBvbkRyYWdPdmVyPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHNldEhpZ2hsaWdodGVkKHRydWUpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIG9uRHJhZ0xlYXZlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHNldEhpZ2hsaWdodGVkKGZhbHNlKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBvbkRyb3A9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgc2V0SGlnaGxpZ2h0ZWQodHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkcm9wcGVkRmlsZSA9IEFycmF5LmZyb20oZS5kYXRhVHJhbnNmZXIuZmlsZXMpO1xyXG5cclxuICAgICAgICAgICAgc2V0TWVkaWEoZHJvcHBlZEZpbGVbMF0pO1xyXG4gICAgICAgICAgICBzZXRNZWRpYVByZXZpZXcoVVJMLmNyZWF0ZU9iamVjdFVSTChkcm9wcGVkRmlsZVswXSkpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7bWVkaWEgPT09IG51bGwgPyAoXHJcbiAgICAgICAgICAgIDxJY29uIG5hbWU9XCJwbHVzXCIgc2l6ZT1cImJpZ1wiIC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBcIjE1MHB4XCIsIHdpZHRoOiBcIjE1MHB4XCIgfX1cclxuICAgICAgICAgICAgICAgIHNyYz17bWVkaWFQcmV2aWV3fVxyXG4gICAgICAgICAgICAgICAgYWx0PVwiUG9zdEltYWdlXCJcclxuICAgICAgICAgICAgICAgIGNlbnRlcmVkXHJcbiAgICAgICAgICAgICAgICBzaXplPVwibWVkaXVtXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxEaXZpZGVyIGhpZGRlbiAvPlxyXG5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBjaXJjdWxhclxyXG4gICAgICAgICAgZGlzYWJsZWQ9e25ld1Bvc3QudGV4dCA9PT0gXCJcIiB8fCBsb2FkaW5nfVxyXG4gICAgICAgICAgY29udGVudD17PHN0cm9uZz5Qb3N0PC9zdHJvbmc+fVxyXG4gICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIiMxREExRjJcIiwgY29sb3I6IFwid2hpdGVcIiB9fVxyXG4gICAgICAgICAgaWNvbj1cInNlbmRcIlxyXG4gICAgICAgICAgbG9hZGluZz17bG9hZGluZ31cclxuICAgICAgICAvPlxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDcmVhdGVwb3N0O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ29tbWVudCwgSWNvbiB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgY2FsY3VsYXRlVGltZSBmcm9tIFwiLi4vLi4vdXRpbHMvY2FsY3VsYXRlVGltZVwiO1xyXG5cclxuZnVuY3Rpb24gUG9zdGNvbW1lbnRzKHsgY29tbWVudCwgdXNlciwgc2V0Q29tbWVudHMsIHBvc3RJZCB9KSB7XHJcbiAgY29uc3QgW2Rpc2FibGVkLCBzZXRkaXNhYmxlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxDb21tZW50Lkdyb3VwPlxyXG4gICAgICAgIDxDb21tZW50PlxyXG4gICAgICAgICAgPENvbW1lbnQuQXZhdGFyIHNyYz17Y29tbWVudC51c2VyLnByb2ZpbGVQaWNVcmx9IC8+XHJcbiAgICAgICAgICA8Q29tbWVudC5Db250ZW50PlxyXG4gICAgICAgICAgICA8Q29tbWVudC5BdXRob3IgYXM9XCJhXCIgaHJlZj17YC8ke2NvbW1lbnQudXNlci51c2VybmFtZX1gfT5cclxuICAgICAgICAgICAgICB7Y29tbWVudC51c2VyLm5hbWV9XHJcbiAgICAgICAgICAgIDwvQ29tbWVudC5BdXRob3I+XHJcbiAgICAgICAgICAgIDxDb21tZW50Lk1ldGFkYXRhPntjYWxjdWxhdGVUaW1lKGNvbW1lbnQuZGF0ZSl9PC9Db21tZW50Lk1ldGFkYXRhPlxyXG4gICAgICAgICAgICA8Q29tbWVudC5UZXh0Pntjb21tZW50LnRleHR9PC9Db21tZW50LlRleHQ+XHJcbiAgICAgICAgICAgIDxDb21tZW50LkFjdGlvbnM+XHJcbiAgICAgICAgICAgICAgPENvbW1lbnQuQWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgeyh1c2VyLnJvbGUgPT09IFwicm9vdFwiIHx8IGNvbW1lbnQudXNlci5faWQgPT09IHVzZXIuX2lkKSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxJY29uIGRpc2FibGVkPXtkaXNhYmxlZH0gY29sb3I9XCJyZWRcIiBuYW1lPVwidHJhc2hcIiAvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L0NvbW1lbnQuQWN0aW9uPlxyXG4gICAgICAgICAgICA8L0NvbW1lbnQuQWN0aW9ucz5cclxuICAgICAgICAgIDwvQ29tbWVudC5Db250ZW50PlxyXG4gICAgICAgIDwvQ29tbWVudD5cclxuICAgICAgPC9Db21tZW50Lkdyb3VwPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdGNvbW1lbnRzO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBiYXNlVXJsIGZyb20gXCIuLi91dGlscy9iYXNlVXJsXCI7XHJcbmltcG9ydCBDYXJkUG9zdCBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3N0L0NhcmRQb3N0XCI7XHJcbmltcG9ydCB7IFNlZ21lbnQgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IHsgcGFyc2VDb29raWVzIH0gZnJvbSBcIm5vb2tpZXNcIjtcclxuaW1wb3J0IHsgTm9Qb3N0cyB9IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dC9Ob0RhdGFcIjtcclxuaW1wb3J0IENyZWF0ZVBvc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9zdC9DcmVhdGVQb3N0XCI7XHJcbmltcG9ydCB7IFBvc3REZWxldGVUb2FzdHIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXQvVG9hc3RyXCI7XHJcblxyXG5mdW5jdGlvbiBJbmRleCh7IHVzZXIsIHBvc3RzRGF0YSwgZXJyb3JMb2FkaW5nIH0pIHtcclxuICBjb25zdCBbcG9zdHMsIHNldFBvc3RzXSA9IHVzZVN0YXRlKHBvc3RzRGF0YSk7XHJcbiAgY29uc3QgW3Nob3dUb2FzdHIsIHNldFNob3dUb2FzdHJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkb2N1bWVudC50aXRsZSA9IGBXZWxjb21lLCAke3VzZXIubmFtZS5zcGxpdChcIiBcIilbMF19YDtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzaG93VG9hc3RyICYmIHNldFRpbWVvdXQoKCkgPT4gc2V0U2hvd1RvYXN0cihmYWxzZSksIDMwMDApO1xyXG4gIH0sIFtzaG93VG9hc3RyXSk7XHJcblxyXG4gIGlmIChwb3N0cy5sZW5ndGggPT09IDAgfHwgZXJyb3JMb2FkaW5nKSByZXR1cm4gPE5vUG9zdHMgLz47XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7c2hvd1RvYXN0ciAmJiA8UG9zdERlbGV0ZVRvYXN0ciAvPn1cclxuICAgICAgPFNlZ21lbnQ+XHJcbiAgICAgICAgPENyZWF0ZVBvc3QgdXNlcj17dXNlcn0gc2V0UG9zdHM9e3NldFBvc3RzfSAvPlxyXG4gICAgICAgIHtwb3N0cy5tYXAoKHBvc3QpID0+IChcclxuICAgICAgICAgIDxDYXJkUG9zdFxyXG4gICAgICAgICAgICBrZXk9e3Bvc3QuX2lkfVxyXG4gICAgICAgICAgICBwb3N0PXtwb3N0fVxyXG4gICAgICAgICAgICB1c2VyPXt1c2VyfVxyXG4gICAgICAgICAgICBzZXRQb3N0cz17c2V0UG9zdHN9XHJcbiAgICAgICAgICAgIHNldFNob3dUb2FzdHI9e3NldFNob3dUb2FzdHJ9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L1NlZ21lbnQ+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgdG9rZW4gfSA9IHBhcnNlQ29va2llcyhjdHgpO1xyXG5cclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtiYXNlVXJsfS9hcGkvcG9zdHNgLCB7XHJcbiAgICAgIGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogdG9rZW4gfSxcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHsgcG9zdHNEYXRhOiByZXMuZGF0YSB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4geyBlcnJvckxvYWRpbmc6IHRydWUgfTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIiwiY29uc3QgYmFzZVVybCA9XCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJhc2VVcmw7XHJcbiIsImltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xyXG5pbXBvcnQgTW9tZW50IGZyb20gXCJyZWFjdC1tb21lbnRcIjtcclxuXHJcbmNvbnN0IGNhbGN1bGF0ZVRpbWUgPSAoY3JlYXRlZEF0KSA9PiB7XHJcbiAgY29uc3QgdG9kYXkgPSBtb21lbnQoRGF0ZS5ub3coKSk7XHJcbiAgY29uc3QgcG9zdERhdGUgPSBtb21lbnQoY3JlYXRlZEF0KTtcclxuICBjb25zdCBkaWZmSW5Ib3VycyA9IHRvZGF5LmRpZmYocG9zdERhdGUsIFwiaG91cnNcIik7XHJcblxyXG4gIGlmIChkaWZmSW5Ib3VycyA8IDI0KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIFRvZGF5IDxNb21lbnQgZm9ybWF0PVwiaGg6bW06IEFcIj57Y3JlYXRlZEF0fTwvTW9tZW50PlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfSBlbHNlIGlmIChkaWZmSW5Ib3VycyA+IDI0ICYmIGRpZmZJbkhvdXJzIDwgMzYpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgWWVzdGVyZGF5IDxNb21lbnQgZm9ybWF0PVwiaGg6bW06IEFcIj57Y3JlYXRlZEF0fTwvTW9tZW50PlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfSBlbHNlIGlmIChkaWZmSW5Ib3VycyA+IDM2KSB7XHJcbiAgICByZXR1cm4gPE1vbWVudCBmb3JtYXQ9XCJERC9NTS9ZWSBoaDptbSBBXCI+e2NyZWF0ZWRBdH08L01vbWVudD47XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2FsY3VsYXRlVGltZTtcclxuIiwiY29uc3QgY2F0Y2hFcnJvcnMgPSAoZXJyb3IpID0+IHtcclxuICBsZXQgZXJyb3JNc2cgPSB7fTtcclxuXHJcbiAgaWYgKGVycm9yLnJlc3BvbnNlKSB7XHJcbiAgICAvLyBJZiB0aGUgcmVxdWVzdCB3YXMgbWFkZSBhbmQgdGhlIHNlcnZlciBub3QgcmVzcG9uZGVkIHdpdGggYSBzdGF0dXMgY29kZSBpbiB0aGUgcmFuZ2Ugb2YgMnh4XHJcblxyXG4gICAgZXJyb3JNc2cgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG5cclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JNc2cpO1xyXG4gIH0gZWxzZSBpZiAoZXJyb3IucmVxdWVzdCkge1xyXG4gICAgLy8gaWYgdGhlIHJlcXVlc3Qgd2FzIG1hZGUgYW5kIG5vIHJlc3BvbnNlIHdhcyByZWNldmllZCBmcm9tIHNlcnZlclxyXG4gICAgZXJyb3JNc2cgPSBlcnJvci5yZXF1ZXN0O1xyXG5cclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JNc2cpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyBpZiBzb21ldGhpbmcgZWxzZSBoYXBwZW5lZCB3aGlsZSBtYWtpbmcgdGhlIHJlcXVlc3RcclxuICAgIGVycm9yTXNnID0gZXJyb3IubWVzc2FnZTtcclxuXHJcbiAgICBjb25zb2xlLmVycm9yKGVycm9yTXNnKTtcclxuICB9XHJcbiAgcmV0dXJuIGVycm9yTXNnO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2F0Y2hFcnJvcnM7XHJcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IGJhc2VVcmwgZnJvbSBcIi4vYmFzZVVybFwiO1xyXG5pbXBvcnQgY2F0Y2hFcnJvcnMgZnJvbSBcIi4vY2F0Y2hFcnJvcnNcIjtcclxuaW1wb3J0IGNvb2tpZSBmcm9tIFwianMtY29va2llXCI7XHJcblxyXG5jb25zdCBBeGlvcyA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgYmFzZVVSTDogYCR7YmFzZVVybH0vYXBpL3Bvc3RzYCxcclxuICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGNvb2tpZS5nZXQoXCJ0b2tlblwiKSB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBzdWJtaXROZXdQb3N0ID0gYXN5bmMgKFxyXG4gIHRleHQsXHJcbiAgbG9jYXRpb24sXHJcbiAgcGljVXJsLFxyXG4gIHNldFBvc3RzLFxyXG4gIHNldE5ld1Bvc3QsXHJcbiAgc2V0RXJyb3JcclxuKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IEF4aW9zLnBvc3QoXCIvXCIsIHsgdGV4dCwgbG9jYXRpb24sIHBpY1VybCB9KTtcclxuXHJcbiAgICBzZXRQb3N0cygocHJldikgPT4gW3Jlcy5kYXRhLCAuLi5wcmV2XSk7XHJcbiAgICBzZXROZXdQb3N0KHsgdGV4dDogXCJcIiwgbG9jYXRpb246IFwiXCIgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnN0IGVycm9yTXNnID0gY2F0Y2hFcnJvcnMoZXJyb3IpO1xyXG4gICAgc2V0RXJyb3IoZXJyb3JNc2cpO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkZWxldGVQb3N0ID0gYXN5bmMgKHBvc3RJZCwgc2V0UG9zdHMsIHNldFNob3dUb2FzdHIpID0+IHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgQXhpb3MuZGVsZXRlKGAvJHtwb3N0SWR9YCk7XHJcbiAgICBzZXRQb3N0cygocHJldikgPT4gcHJldi5maWx0ZXIoKHBvc3QpID0+IHBvc3QuX2lkICE9PSBwb3N0SWQpKTtcclxuICAgIHNldFNob3dUb2FzdHIodHJ1ZSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGFsZXJ0KGNhdGNoRXJyb3JzKGVycm9yKSk7XHJcbiAgfVxyXG59O1xyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5jb25zdCB1cGxvYWRQaWMgPSBhc3luYyAobWVkaWEpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgZm9ybSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgZm9ybS5hcHBlbmQoXCJmaWxlXCIsIG1lZGlhKTtcclxuICAgIGZvcm0uYXBwZW5kKFwidXBsb2FkX3ByZXNldFwiLCBcInNvY2lhbF9tZWRpYV9hcHBcIik7XHJcbiAgICBmb3JtLmFwcGVuZChcImNsb3VkX25hbWVcIiwgXCJka3N1ejhtc2pcIik7XHJcblxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdChwcm9jZXNzLmVudi5DTE9VRElOQVJZX1VSTCwgZm9ybSk7XHJcbiAgICByZXR1cm4gcmVzLmRhdGEudXJsO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXBsb2FkUGljO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianMtY29va2llXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb21lbnRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5vb2tpZXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbW9tZW50XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10b2FzdGlmeVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VtYW50aWMtdWktcmVhY3RcIik7OyIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=