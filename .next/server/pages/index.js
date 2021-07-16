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
var _jsxFileName = "D:\\programming\\Dev\\SOCIALMEDIA\\components\\Post\\CardPost.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);







function Cardpost({
  post,
  user,
  setPosts,
  setShowToaster
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
    1: setError
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const isLiked = likes.length > 0 && likes.filter(like => like.user === user._id).length > 0;
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Segment, {
    basic: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Card, {
    color: "teal",
    fluid: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
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
      lineNumber: 34,
      columnNumber: 13
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Card.Content, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
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
      lineNumber: 45,
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
        lineNumber: 58,
        columnNumber: 21
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Header, {
    as: "h4",
    content: "Are you sure?",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 19
    }
  }), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 19
    }
  }, "This action is irreversible!"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
    color: "red",
    icon: "trash",
    content: "Delete",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 19
    }
  }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Card.Header, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }, __jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
    href: `/${post.user.username}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 15
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 17
    }
  }, post.user.name))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Card.Meta, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }
  }, (0,_utils_calculateTime__WEBPACK_IMPORTED_MODULE_5__.default)(post.createdAt)), post.location && __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Card.Meta, {
    content: post.location,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
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
      lineNumber: 83,
      columnNumber: 13
    }
  }, post.text)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Card.Content, {
    extra: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
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
      lineNumber: 95,
      columnNumber: 13
    }
  }), likes.length > 0 && __jsx("span", {
    className: "spanLikesList",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
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
      lineNumber: 107,
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
      lineNumber: 117,
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
      lineNumber: 128,
      columnNumber: 15
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
    hidden: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 13
    }
  }), __jsx(_CommentInputField__WEBPACK_IMPORTED_MODULE_3__.default, {
    user: user,
    postId: post._id,
    setComments: setComments,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 13
    }
  })))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
    hidden: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
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

    await (0,_utils_postActions__WEBPACK_IMPORTED_MODULE_3__.submitNewPost)(newPost.text, newPost.location, picUrl, setPosts, setError);
    setMedia(null);
    setMediaPreview(null), setLoading(false);
  };

  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form, {
    error: error != null,
    onSubmit: handleSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
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
      lineNumber: 64,
      columnNumber: 9
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Group, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
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
      lineNumber: 72,
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
      lineNumber: 73,
      columnNumber: 11
    }
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Group, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
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
      lineNumber: 84,
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
      lineNumber: 92,
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
      lineNumber: 102,
      columnNumber: 9
    }
  }, media === null ? __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    name: "plus",
    size: "big",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
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
      lineNumber: 127,
      columnNumber: 15
    }
  }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
    hidden: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 9
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
    circular: true,
    disabled: newPost.text === "" || loading,
    content: __jsx("strong", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
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
      lineNumber: 140,
      columnNumber: 9
    }
  })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
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
    1: setshowToastr
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    document.title = `Welcome, ${user.name.split(" ")[0]}`;
  }, []);
  if (posts.length === 0 || errorLoading) return __jsx(_components_Layout_NoData__WEBPACK_IMPORTED_MODULE_6__.NoPosts, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 50
    }
  });
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Segment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx(_components_Post_CreatePost__WEBPACK_IMPORTED_MODULE_7__.default, {
    user: user,
    setPosts: setPosts,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }), posts.map(post => __jsx(_components_Post_CardPost__WEBPACK_IMPORTED_MODULE_3__.default, {
    key: post._id,
    post: post,
    user: user,
    setPosts: setPosts,
    setshowToastr: setshowToastr,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
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
/* harmony export */   "submitNewPost": function() { return /* binding */ submitNewPost; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _baseUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _catchErrors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catchErrors */ "./utils/catchErrors.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);




const Axios = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseUrl: `${_baseUrl__WEBPACK_IMPORTED_MODULE_1__.default}/api/posts`,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL0xheW91dC9Ob0RhdGEuanMiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhLy4vY29tcG9uZW50cy9Qb3N0L0NhcmRQb3N0LmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL2NvbXBvbmVudHMvUG9zdC9Db21tZW50SW5wdXRGaWVsZC5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL1Bvc3QvQ3JlYXRlUG9zdC5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL1Bvc3QvUG9zdENvbW1lbnRzLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL3V0aWxzL2Jhc2VVcmwuanMiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhLy4vdXRpbHMvY2FsY3VsYXRlVGltZS5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi91dGlscy9jYXRjaEVycm9ycy5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi91dGlscy9wb3N0QWN0aW9ucy5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi91dGlscy91cGxvYWRQaWNUb0Nsb3VkaW5hcnkuanMiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJqcy1jb29raWVcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJtb21lbnRcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcIm5vb2tpZXNcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwicmVhY3QtbW9tZW50XCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwic2VtYW50aWMtdWktcmVhY3RcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvaWdub3JlZHxEOlxccHJvZ3JhbW1pbmdcXERldlxcU09DSUFMTUVESUFcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcbmV4dC1zZXJ2ZXJcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJuYW1lcyI6WyJOb1Byb2ZpbGVQb3N0cyIsIk5vRm9sbG93RGF0YSIsImZvbGxvd2Vyc0NvbXBvbmVudCIsImZvbGxvd2luZ0NvbXBvbmVudCIsIk5vTWVzc2FnZXMiLCJOb1Bvc3RzIiwiTm9Qcm9maWxlIiwiQ2FyZHBvc3QiLCJwb3N0IiwidXNlciIsInNldFBvc3RzIiwic2V0U2hvd1RvYXN0ZXIiLCJsaWtlcyIsInNldExpa2VzIiwidXNlU3RhdGUiLCJjb21tZW50cyIsInNldENvbW1lbnRzIiwiZXJyb3IiLCJzZXRFcnJvciIsImlzTGlrZWQiLCJsZW5ndGgiLCJmaWx0ZXIiLCJsaWtlIiwiX2lkIiwicGljVXJsIiwiY3Vyc29yIiwicHJvZmlsZVBpY1VybCIsInJvbGUiLCJ1c2VybmFtZSIsIm5hbWUiLCJjYWxjdWxhdGVUaW1lIiwiY3JlYXRlZEF0IiwibG9jYXRpb24iLCJmb250U2l6ZSIsImxldHRlclNwYWNpbmciLCJ3b3JkU3BhY2luZyIsInRleHQiLCJtYXJnaW5MZWZ0IiwibWFwIiwiY29tbWVudCIsImkiLCJDb21tZW50aW5wdXRmaWVsZCIsInBvc3RJZCIsInNldFRleHQiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNvbG9yIiwiaWNvbiIsImRpc2FibGVkIiwiQ3JlYXRlcG9zdCIsIm5ld1Bvc3QiLCJzZXROZXdQb3N0IiwiaW5wdXRSZWYiLCJ1c2VSZWYiLCJoaWdobGlnaHRlZCIsInNldEhpZ2hsaWdodGVkIiwibWVkaWEiLCJzZXRNZWRpYSIsIm1lZGlhUHJldmlldyIsInNldE1lZGlhUHJldmlldyIsImhhbmRsZUNoYW5nZSIsImZpbGVzIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwicHJldiIsImFkZFN0eWxlcyIsInRleHRBbGlnbiIsImhlaWdodCIsIndpZHRoIiwiYm9yZGVyIiwicGFkZGluZ1RvcCIsImJvcmRlckNvbG9yIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJ1cGxvYWRQaWMiLCJzdWJtaXROZXdQb3N0IiwiZGlzcGxheSIsImN1cnJlbnQiLCJjbGljayIsImRyb3BwZWRGaWxlIiwiQXJyYXkiLCJmcm9tIiwiZGF0YVRyYW5zZmVyIiwiYmFja2dyb3VuZENvbG9yIiwiUG9zdGNvbW1lbnRzIiwic2V0ZGlzYWJsZWQiLCJkYXRlIiwiSW5kZXgiLCJwb3N0c0RhdGEiLCJlcnJvckxvYWRpbmciLCJwb3N0cyIsInNob3dUb2FzdHIiLCJzZXRzaG93VG9hc3RyIiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJ0aXRsZSIsInNwbGl0IiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwidG9rZW4iLCJwYXJzZUNvb2tpZXMiLCJyZXMiLCJheGlvcyIsImJhc2VVcmwiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImRhdGEiLCJ0b2RheSIsIm1vbWVudCIsIkRhdGUiLCJub3ciLCJwb3N0RGF0ZSIsImRpZmZJbkhvdXJzIiwiZGlmZiIsImNhdGNoRXJyb3JzIiwiZXJyb3JNc2ciLCJyZXNwb25zZSIsImNvbnNvbGUiLCJyZXF1ZXN0IiwibWVzc2FnZSIsIkF4aW9zIiwiY29va2llIiwiZm9ybSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwicHJvY2VzcyIsInVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sTUFBTUEsY0FBYyxHQUFHLE1BQzVCLHFFQUNFLE1BQUMsc0RBQUQ7QUFBUyxNQUFJLE1BQWI7QUFBYyxNQUFJLEVBQUMsS0FBbkI7QUFBeUIsUUFBTSxFQUFDLE9BQWhDO0FBQXdDLFNBQU8sRUFBQyxtQ0FBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQURGLEVBRUUsTUFBQyxxREFBRDtBQUFRLE1BQUksRUFBQywyQkFBYjtBQUF5QyxTQUFPLEVBQUMsU0FBakQ7QUFBMkQsSUFBRSxFQUFDLEdBQTlEO0FBQWtFLE1BQUksRUFBQyxHQUF2RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBRkYsQ0FESztBQU9BLE1BQU1DLFlBQVksR0FBRyxDQUFDO0FBQUVDLG9CQUFGO0FBQXNCQztBQUF0QixDQUFELEtBQzFCLHFFQUNHRCxrQkFBa0IsSUFDakIsTUFBQyxzREFBRDtBQUFTLE1BQUksRUFBQyxjQUFkO0FBQTZCLE1BQUksTUFBakM7QUFBa0MsU0FBTyxFQUFDLDhCQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBRkosRUFLR0Msa0JBQWtCLElBQ2pCLE1BQUMsc0RBQUQ7QUFBUyxNQUFJLEVBQUMsY0FBZDtBQUE2QixNQUFJLE1BQWpDO0FBQWtDLFNBQU8sRUFBQyxnQ0FBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU5KLENBREs7QUFZQSxNQUFNQyxVQUFVLEdBQUcsTUFDeEIsTUFB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Ozs7Ozs7Ozs7O0FDVlA7O0FBRUEsTUFBTXpDLFNBQVMsR0FBRyxNQUFPbEIsS0FBUCxJQUFpQjtBQUNqQyxNQUFJO0FBQ0YsVUFBTWtFLElBQUksR0FBRyxJQUFJQyxRQUFKLEVBQWI7QUFDQUQsUUFBSSxDQUFDRSxNQUFMLENBQVksTUFBWixFQUFvQnBFLEtBQXBCO0FBQ0FrRSxRQUFJLENBQUNFLE1BQUwsQ0FBWSxlQUFaLEVBQTZCLGtCQUE3QjtBQUNBRixRQUFJLENBQUNFLE1BQUwsQ0FBWSxZQUFaLEVBQTBCLFdBQTFCO0FBRUEsVUFBTXZCLEdBQUcsR0FBRyxNQUFNQyxpREFBQSxDQUFXdUIsd0RBQVgsRUFBdUNILElBQXZDLENBQWxCO0FBQ0EsV0FBT3JCLEdBQUcsQ0FBQ0ssSUFBSixDQUFTb0IsR0FBaEI7QUFDRCxHQVJELENBUUUsT0FBT2hILEtBQVAsRUFBYztBQUNkO0FBQ0Q7QUFDRixDQVpEOztBQWNBLCtEQUFlNEQsU0FBZixFOzs7Ozs7Ozs7OztBQ2hCQSxtQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7QUNBQSxpRzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7OztBQ0FBLGUiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNZXNzYWdlLCBCdXR0b24gfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBOb1Byb2ZpbGVQb3N0cyA9ICgpID0+IChcclxuICA8PlxyXG4gICAgPE1lc3NhZ2UgaW5mbyBpY29uPVwibWVoXCIgaGVhZGVyPVwiU29ycnlcIiBjb250ZW50PVwiVXNlciBoYXMgbm90IHBvc3RlZCBhbnl0aGluZyB5ZXQhXCIgLz5cclxuICAgIDxCdXR0b24gaWNvbj1cImxvbmcgYXJyb3cgYWx0ZXJuYXRlIGxlZnRcIiBjb250ZW50PVwiR28gQmFja1wiIGFzPVwiYVwiIGhyZWY9XCIvXCIgLz5cclxuICA8Lz5cclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBOb0ZvbGxvd0RhdGEgPSAoeyBmb2xsb3dlcnNDb21wb25lbnQsIGZvbGxvd2luZ0NvbXBvbmVudCB9KSA9PiAoXHJcbiAgPD5cclxuICAgIHtmb2xsb3dlcnNDb21wb25lbnQgJiYgKFxyXG4gICAgICA8TWVzc2FnZSBpY29uPVwidXNlciBvdXRsaW5lXCIgaW5mbyBjb250ZW50PVwiVXNlciBkb2VzIG5vdCBoYXZlIGZvbGxvd2Vyc1wiIC8+XHJcbiAgICApfVxyXG5cclxuICAgIHtmb2xsb3dpbmdDb21wb25lbnQgJiYgKFxyXG4gICAgICA8TWVzc2FnZSBpY29uPVwidXNlciBvdXRsaW5lXCIgaW5mbyBjb250ZW50PVwiVXNlciBkb2VzIG5vdCBmb2xsb3cgYW55IHVzZXJzXCIgLz5cclxuICAgICl9XHJcbiAgPC8+XHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgTm9NZXNzYWdlcyA9ICgpID0+IChcclxuICA8TWVzc2FnZVxyXG4gICAgaW5mb1xyXG4gICAgaWNvbj1cInRlbGVncmFtIHBsYW5lXCJcclxuICAgIGhlYWRlcj1cIlNvcnJ5XCJcclxuICAgIGNvbnRlbnQ9XCJZb3UgaGF2ZSBub3QgbWVzc2FnZWQgYW55b25lIHlldC5TZWFyY2ggYWJvdmUgdG8gbWVzc2FnZSBzb21lb25lIVwiXHJcbiAgLz5cclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBOb1Bvc3RzID0gKCkgPT4gKFxyXG4gIDxNZXNzYWdlXHJcbiAgICBpbmZvXHJcbiAgICBpY29uPVwibWVoXCJcclxuICAgIGhlYWRlcj1cIkhleSFcIlxyXG4gICAgY29udGVudD1cIk5vIFBvc3RzLiBNYWtlIHN1cmUgeW91IGhhdmUgZm9sbG93ZWQgc29tZW9uZS5cIlxyXG4gIC8+XHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgTm9Qcm9maWxlID0gKCkgPT4gKFxyXG4gIDxNZXNzYWdlIGluZm8gaWNvbj1cIm1laFwiIGhlYWRlcj1cIkhleSFcIiBjb250ZW50PVwiTm8gUHJvZmlsZSBGb3VuZC5cIiAvPlxyXG4pOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgQ2FyZCxcclxuICBJY29uLFxyXG4gIEltYWdlLFxyXG4gIERpdmlkZXIsXHJcbiAgU2VnbWVudCxcclxuICBCdXR0b24sXHJcbiAgUG9wdXAsXHJcbiAgSGVhZGVyLFxyXG4gIE1vZGFsLFxyXG59IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgUG9zdENvbW1lbnRzIGZyb20gXCIuL1Bvc3RDb21tZW50c1wiO1xyXG5pbXBvcnQgQ29tbWVudElucHV0RmllbGQgZnJvbSBcIi4vQ29tbWVudElucHV0RmllbGRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgY2FsY3VsYXRlVGltZSBmcm9tIFwiLi4vLi4vdXRpbHMvY2FsY3VsYXRlVGltZVwiO1xyXG5cclxuZnVuY3Rpb24gQ2FyZHBvc3QoeyBwb3N0LCB1c2VyLCBzZXRQb3N0cywgc2V0U2hvd1RvYXN0ZXIgfSkge1xyXG4gIGNvbnN0IFtsaWtlcywgc2V0TGlrZXNdID0gdXNlU3RhdGUocG9zdC5saWtlcyk7XHJcblxyXG4gIGNvbnN0IFtjb21tZW50cywgc2V0Q29tbWVudHNdID0gdXNlU3RhdGUocG9zdC5jb21tZW50cyk7XHJcblxyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIGNvbnN0IGlzTGlrZWQgPVxyXG4gICAgbGlrZXMubGVuZ3RoID4gMCAmJlxyXG4gICAgbGlrZXMuZmlsdGVyKChsaWtlKSA9PiBsaWtlLnVzZXIgPT09IHVzZXIuX2lkKS5sZW5ndGggPiAwO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFNlZ21lbnQgYmFzaWM+XHJcbiAgICAgICAgPENhcmQgY29sb3I9XCJ0ZWFsXCIgZmx1aWQ+XHJcbiAgICAgICAgICB7cG9zdC5waWNVcmwgJiYgKFxyXG4gICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICBzcmM9e3Bvc3QucGljVXJsfVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGN1cnNvcjogXCJwb2ludGVyXCIgfX1cclxuICAgICAgICAgICAgICBmbG9hdGVkPVwibGVmdFwiXHJcbiAgICAgICAgICAgICAgd3JhcHBlZFxyXG4gICAgICAgICAgICAgIHVpPXtmYWxzZX1cclxuICAgICAgICAgICAgICBhbHQ9XCJQb3N0SW1hZ2VcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICA8Q2FyZC5Db250ZW50PlxyXG4gICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICBmbG9hdGVkPVwibGVmdFwiXHJcbiAgICAgICAgICAgICAgc3JjPXtwb3N0LnVzZXIucHJvZmlsZVBpY1VybH1cclxuICAgICAgICAgICAgICBhdmF0YXJcclxuICAgICAgICAgICAgICBjaXJjdWxhclxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgeyh1c2VyLnJvbGUgPT09IFwicm9vdFwiIHx8IHBvc3QudXNlci5faWQgPT09IHVzZXIuX2lkKSAmJiAoXHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxQb3B1cFxyXG4gICAgICAgICAgICAgICAgICBvbj1cImNsaWNrXCJcclxuICAgICAgICAgICAgICAgICAgcG9zaXRpb249XCJ0b3AgcmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICB0cmlnZ2VyPXtcclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9kZWxldGVJY29uLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzeXRsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibWluaVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBmbG9hdGVkPVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPEhlYWRlciBhcz1cImg0XCIgY29udGVudD1cIkFyZSB5b3Ugc3VyZT9cIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8cD5UaGlzIGFjdGlvbiBpcyBpcnJldmVyc2libGUhPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwicmVkXCIgaWNvbj1cInRyYXNoXCIgY29udGVudD1cIkRlbGV0ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L1BvcHVwPlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgPENhcmQuSGVhZGVyPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvJHtwb3N0LnVzZXIudXNlcm5hbWV9YH0+XHJcbiAgICAgICAgICAgICAgICA8YT57cG9zdC51c2VyLm5hbWV9PC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9DYXJkLkhlYWRlcj5cclxuXHJcbiAgICAgICAgICAgIDxDYXJkLk1ldGE+e2NhbGN1bGF0ZVRpbWUocG9zdC5jcmVhdGVkQXQpfTwvQ2FyZC5NZXRhPlxyXG5cclxuICAgICAgICAgICAge3Bvc3QubG9jYXRpb24gJiYgPENhcmQuTWV0YSBjb250ZW50PXtwb3N0LmxvY2F0aW9ufSAvPn1cclxuXHJcbiAgICAgICAgICAgIDxDYXJkLkRlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE3cHhcIixcclxuICAgICAgICAgICAgICAgIGxldHRlclNwYWNpbmc6IFwiLjFweFwiLFxyXG4gICAgICAgICAgICAgICAgd29yZFNwYWNpbmc6IFwiLjM1cHhcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3Bvc3QudGV4dH1cclxuICAgICAgICAgICAgPC9DYXJkLkRlc2NyaXB0aW9uPlxyXG4gICAgICAgICAgPC9DYXJkLkNvbnRlbnQ+XHJcblxyXG4gICAgICAgICAgPENhcmQuQ29udGVudCBleHRyYT5cclxuICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICBuYW1lPXtpc0xpa2VkID8gXCJoZWFydFwiIDogXCJoZWFydCBvdXRsaW5lXCJ9XHJcbiAgICAgICAgICAgICAgY29sb3I9XCJyZWRcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGN1cnNvcjogXCJwb2ludGVyXCIgfX1cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIHtsaWtlcy5sZW5ndGggPiAwICYmIChcclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzcGFuTGlrZXNMaXN0XCI+XHJcbiAgICAgICAgICAgICAgICB7YCR7bGlrZXMubGVuZ3RofSAke2xpa2VzLmxlbmd0aCA9PT0gMSA/IFwibGlrZVwiIDogXCJsaWtlc1wifWB9XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICBuYW1lPVwiY29tbWVudCBvdXRsaW5lXCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjdweFwiIH19XHJcbiAgICAgICAgICAgICAgY29sb3I9XCJibHVlXCJcclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIHtjb21tZW50cy5sZW5ndGggPiAwICYmXHJcbiAgICAgICAgICAgICAgY29tbWVudHMubWFwKFxyXG4gICAgICAgICAgICAgICAgKGNvbW1lbnQsIGkpID0+XHJcbiAgICAgICAgICAgICAgICAgIGkgPCAzICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8UG9zdENvbW1lbnRzXHJcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2NvbW1lbnQuX2lkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY29tbWVudD17Y29tbWVudH1cclxuICAgICAgICAgICAgICAgICAgICAgIHBvc3RJZD17cG9zdC5faWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICB1c2VyPXt1c2VyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0Q29tbWVudHM9e3NldENvbW1lbnRzfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAge2NvbW1lbnRzLmxlbmd0aCA+IDMgJiYgKFxyXG4gICAgICAgICAgICAgIDxCdXR0b24gY29udGVudD1cIlZpZXcgTW9yZVwiIGNvbG9yPVwidGVhbFwiIGJhc2ljIGNpcmN1bGFyIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDxEaXZpZGVyIGhpZGRlbiAvPlxyXG4gICAgICAgICAgICA8Q29tbWVudElucHV0RmllbGRcclxuICAgICAgICAgICAgICB1c2VyPXt1c2VyfVxyXG4gICAgICAgICAgICAgIHBvc3RJZD17cG9zdC5faWR9XHJcbiAgICAgICAgICAgICAgc2V0Q29tbWVudHM9e3NldENvbW1lbnRzfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9DYXJkLkNvbnRlbnQ+XHJcbiAgICAgICAgPC9DYXJkPlxyXG4gICAgICA8L1NlZ21lbnQ+XHJcbiAgICAgIDxEaXZpZGVyIGhpZGRlbiAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZHBvc3Q7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGb3JtIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiBDb21tZW50aW5wdXRmaWVsZCh7IHBvc3RJZCwgdXNlciwgc2V0Q29tbWVudHMgfSkge1xyXG4gIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm0gcmVwbHk+XHJcbiAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgdmFsdWU9e3RleHR9XHJcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUZXh0KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZCBDb21tZW50XCJcclxuICAgICAgICBhY3Rpb249e3tcclxuICAgICAgICAgIGNvbG9yOiBcImJsdWVcIixcclxuICAgICAgICAgIGljb246IFwiZWRpdFwiLFxyXG4gICAgICAgICAgbG9hZGluZzogbG9hZGluZyxcclxuICAgICAgICAgIGRpc2FibGVkOiB0ZXh0ID09PSBcIlwiIHx8IGxvYWRpbmcsXHJcbiAgICAgICAgfX1cclxuICAgICAgLz5cclxuICAgIDwvRm9ybT5cclxuICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IENvbW1lbnRpbnB1dGZpZWxkO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGb3JtLCBCdXR0b24sIEltYWdlLCBEaXZpZGVyLCBNZXNzYWdlLCBJY29uIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCB1cGxvYWRQaWMgZnJvbSBcIi4uLy4uL3V0aWxzL3VwbG9hZFBpY1RvQ2xvdWRpbmFyeVwiO1xyXG5pbXBvcnQgeyBzdWJtaXROZXdQb3N0IH0gZnJvbSBcIi4uLy4uL3V0aWxzL3Bvc3RBY3Rpb25zXCI7XHJcblxyXG5mdW5jdGlvbiBDcmVhdGVwb3N0KHsgdXNlciwgc2V0UG9zdHMgfSkge1xyXG4gIGNvbnN0IFtuZXdQb3N0LCBzZXROZXdQb3N0XSA9IHVzZVN0YXRlKHsgdGV4dDogXCJcIiwgbG9jYXRpb246IFwiXCIgfSk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGlucHV0UmVmID0gdXNlUmVmKCk7XHJcblxyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2hpZ2hsaWdodGVkLCBzZXRIaWdobGlnaHRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IFttZWRpYSwgc2V0TWVkaWFdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW21lZGlhUHJldmlldywgc2V0TWVkaWFQcmV2aWV3XSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSwgZmlsZXMgfSA9IGUudGFyZ2V0O1xyXG5cclxuICAgIGlmIChuYW1lID09PSBcIm1lZGlhXCIpIHtcclxuICAgICAgc2V0TWVkaWEoZmlsZXNbMF0pO1xyXG4gICAgICBzZXRNZWRpYVByZXZpZXcoVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlc1swXSkpO1xyXG4gICAgfVxyXG4gICAgc2V0TmV3UG9zdCgocHJldikgPT4gKHsgLi4ucHJldiwgW25hbWVdOiB2YWx1ZSB9KSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYWRkU3R5bGVzID0gKCkgPT4gKHtcclxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgIGhlaWdodDogXCIxNTBweFwiLFxyXG4gICAgd2lkdGg6IFwiMTUwcHhcIixcclxuICAgIGJvcmRlcjogXCJkb3R0ZWRcIixcclxuICAgIHBhZGRpbmdUb3A6IG1lZGlhID09PSBudWxsICYmIFwiNjBweFwiLFxyXG4gICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgIGJvcmRlckNvbG9yOiBoaWdobGlnaHRlZCA/IFwiZ3JlZW5cIiA6IFwiYmxhY2tcIixcclxuICB9KTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBsZXQgcGljVXJsO1xyXG5cclxuICAgIGlmIChtZWRpYSAhPT0gbnVsbCkge1xyXG4gICAgICBwaWNVcmwgPSBhd2FpdCB1cGxvYWRQaWMobWVkaWEpO1xyXG4gICAgICBpZiAoIXBpY1VybCkge1xyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIHJldHVybiBzZXRFcnJvcihcIkVycm9yIFVwbG9hZGluZyBJbWFnZVwiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGF3YWl0IHN1Ym1pdE5ld1Bvc3QoXHJcbiAgICAgIG5ld1Bvc3QudGV4dCxcclxuICAgICAgbmV3UG9zdC5sb2NhdGlvbixcclxuICAgICAgcGljVXJsLFxyXG4gICAgICBzZXRQb3N0cyxcclxuICAgICAgc2V0RXJyb3JcclxuICAgICk7XHJcbiAgICBzZXRNZWRpYShudWxsKTtcclxuICAgIHNldE1lZGlhUHJldmlldyhudWxsKSwgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxGb3JtIGVycm9yPXtlcnJvciAhPSBudWxsfSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICA8TWVzc2FnZVxyXG4gICAgICAgICAgZXJyb3JcclxuICAgICAgICAgIG9uRGlzbWlzcz17KCkgPT4gc2V0RXJyb3IobnVsbCl9XHJcbiAgICAgICAgICBjb250ZW50PXtlcnJvcn1cclxuICAgICAgICAgIGhlYWRlcj1cIk9vcHMhXCJcclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8Rm9ybS5Hcm91cD5cclxuICAgICAgICAgIDxJbWFnZSBzcmM9e3VzZXIucHJvZmlsZVBpY1VybH0gY2lyY3VsYXIgYXZhdGFyIGlubGluZSAvPlxyXG4gICAgICAgICAgPEZvcm0uVGV4dEFyZWFcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJXaGF0cyBIYXBwZW5pbmdcIlxyXG4gICAgICAgICAgICBuYW1lPVwidGV4dFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtuZXdQb3N0LnRleHR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIHJvd3M9ezR9XHJcbiAgICAgICAgICAgIHdpZHRoPXsxNH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG5cclxuICAgICAgICA8Rm9ybS5Hcm91cD5cclxuICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgIHZhbHVlPXtuZXdQb3N0LmxvY2F0aW9ufVxyXG4gICAgICAgICAgICBuYW1lPVwibG9jYXRpb25cIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICBsYWJlbD1cIkFkZCBsb2NhdGlvblwiXHJcbiAgICAgICAgICAgIGljb249XCJtYXAgbWFya2VyIGFsdGVybmF0ZVwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV2FudCB0byBhZGQgTG9jYXRpb24/XCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgcmVmPXtpbnB1dFJlZn1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgbmFtZT1cIm1lZGlhXCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX1cclxuICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS8qXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBpbnB1dFJlZi5jdXJyZW50LmNsaWNrKCl9XHJcbiAgICAgICAgICBzdHlsZT17YWRkU3R5bGVzKCl9XHJcbiAgICAgICAgICBvbkRyYWdPdmVyPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHNldEhpZ2hsaWdodGVkKHRydWUpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIG9uRHJhZ0xlYXZlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHNldEhpZ2hsaWdodGVkKGZhbHNlKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBvbkRyb3A9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgc2V0SGlnaGxpZ2h0ZWQodHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkcm9wcGVkRmlsZSA9IEFycmF5LmZyb20oZS5kYXRhVHJhbnNmZXIuZmlsZXMpO1xyXG5cclxuICAgICAgICAgICAgc2V0TWVkaWEoZHJvcHBlZEZpbGVbMF0pO1xyXG4gICAgICAgICAgICBzZXRNZWRpYVByZXZpZXcoVVJMLmNyZWF0ZU9iamVjdFVSTChkcm9wcGVkRmlsZVswXSkpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7bWVkaWEgPT09IG51bGwgPyAoXHJcbiAgICAgICAgICAgIDxJY29uIG5hbWU9XCJwbHVzXCIgc2l6ZT1cImJpZ1wiIC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBcIjE1MHB4XCIsIHdpZHRoOiBcIjE1MHB4XCIgfX1cclxuICAgICAgICAgICAgICAgIHNyYz17bWVkaWFQcmV2aWV3fVxyXG4gICAgICAgICAgICAgICAgYWx0PVwiUG9zdEltYWdlXCJcclxuICAgICAgICAgICAgICAgIGNlbnRlcmVkXHJcbiAgICAgICAgICAgICAgICBzaXplPVwibWVkaXVtXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxEaXZpZGVyIGhpZGRlbiAvPlxyXG5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBjaXJjdWxhclxyXG4gICAgICAgICAgZGlzYWJsZWQ9e25ld1Bvc3QudGV4dCA9PT0gXCJcIiB8fCBsb2FkaW5nfVxyXG4gICAgICAgICAgY29udGVudD17PHN0cm9uZz5Qb3N0PC9zdHJvbmc+fVxyXG4gICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIiMxREExRjJcIiwgY29sb3I6IFwid2hpdGVcIiB9fVxyXG4gICAgICAgICAgaWNvbj1cInNlbmRcIlxyXG4gICAgICAgICAgbG9hZGluZz17bG9hZGluZ31cclxuICAgICAgICAvPlxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDcmVhdGVwb3N0O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ29tbWVudCwgSWNvbiB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgY2FsY3VsYXRlVGltZSBmcm9tIFwiLi4vLi4vdXRpbHMvY2FsY3VsYXRlVGltZVwiO1xyXG5cclxuZnVuY3Rpb24gUG9zdGNvbW1lbnRzKHsgY29tbWVudCwgdXNlciwgc2V0Q29tbWVudHMsIHBvc3RJZCB9KSB7XHJcbiAgY29uc3QgW2Rpc2FibGVkLCBzZXRkaXNhYmxlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxDb21tZW50Lkdyb3VwPlxyXG4gICAgICAgIDxDb21tZW50PlxyXG4gICAgICAgICAgPENvbW1lbnQuQXZhdGFyIHNyYz17Y29tbWVudC51c2VyLnByb2ZpbGVQaWNVcmx9IC8+XHJcbiAgICAgICAgICA8Q29tbWVudC5Db250ZW50PlxyXG4gICAgICAgICAgICA8Q29tbWVudC5BdXRob3IgYXM9XCJhXCIgaHJlZj17YC8ke2NvbW1lbnQudXNlci51c2VybmFtZX1gfT5cclxuICAgICAgICAgICAgICB7Y29tbWVudC51c2VyLm5hbWV9XHJcbiAgICAgICAgICAgIDwvQ29tbWVudC5BdXRob3I+XHJcbiAgICAgICAgICAgIDxDb21tZW50Lk1ldGFkYXRhPntjYWxjdWxhdGVUaW1lKGNvbW1lbnQuZGF0ZSl9PC9Db21tZW50Lk1ldGFkYXRhPlxyXG4gICAgICAgICAgICA8Q29tbWVudC5UZXh0Pntjb21tZW50LnRleHR9PC9Db21tZW50LlRleHQ+XHJcbiAgICAgICAgICAgIDxDb21tZW50LkFjdGlvbnM+XHJcbiAgICAgICAgICAgICAgPENvbW1lbnQuQWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgeyh1c2VyLnJvbGUgPT09IFwicm9vdFwiIHx8IGNvbW1lbnQudXNlci5faWQgPT09IHVzZXIuX2lkKSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxJY29uIGRpc2FibGVkPXtkaXNhYmxlZH0gY29sb3I9XCJyZWRcIiBuYW1lPVwidHJhc2hcIiAvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L0NvbW1lbnQuQWN0aW9uPlxyXG4gICAgICAgICAgICA8L0NvbW1lbnQuQWN0aW9ucz5cclxuICAgICAgICAgIDwvQ29tbWVudC5Db250ZW50PlxyXG4gICAgICAgIDwvQ29tbWVudD5cclxuICAgICAgPC9Db21tZW50Lkdyb3VwPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdGNvbW1lbnRzO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBiYXNlVXJsIGZyb20gXCIuLi91dGlscy9iYXNlVXJsXCI7XHJcbmltcG9ydCBDYXJkUG9zdCBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3N0L0NhcmRQb3N0XCI7XHJcbmltcG9ydCB7IFNlZ21lbnQgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IHsgcGFyc2VDb29raWVzIH0gZnJvbSBcIm5vb2tpZXNcIjtcclxuaW1wb3J0IHsgTm9Qb3N0cyB9IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dC9Ob0RhdGFcIjtcclxuaW1wb3J0IENyZWF0ZVBvc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9zdC9DcmVhdGVQb3N0XCI7XHJcblxyXG5mdW5jdGlvbiBJbmRleCh7IHVzZXIsIHBvc3RzRGF0YSwgZXJyb3JMb2FkaW5nIH0pIHtcclxuICBjb25zdCBbcG9zdHMsIHNldFBvc3RzXSA9IHVzZVN0YXRlKHBvc3RzRGF0YSk7XHJcbiAgY29uc3QgW3Nob3dUb2FzdHIsIHNldHNob3dUb2FzdHJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkb2N1bWVudC50aXRsZSA9IGBXZWxjb21lLCAke3VzZXIubmFtZS5zcGxpdChcIiBcIilbMF19YDtcclxuICB9LCBbXSk7XHJcblxyXG4gIGlmIChwb3N0cy5sZW5ndGggPT09IDAgfHwgZXJyb3JMb2FkaW5nKSByZXR1cm4gPE5vUG9zdHMgLz47XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8U2VnbWVudD5cclxuICAgICAgICA8Q3JlYXRlUG9zdCB1c2VyPXt1c2VyfSBzZXRQb3N0cz17c2V0UG9zdHN9IC8+XHJcbiAgICAgICAge3Bvc3RzLm1hcCgocG9zdCkgPT4gKFxyXG4gICAgICAgICAgPENhcmRQb3N0XHJcbiAgICAgICAgICAgIGtleT17cG9zdC5faWR9XHJcbiAgICAgICAgICAgIHBvc3Q9e3Bvc3R9XHJcbiAgICAgICAgICAgIHVzZXI9e3VzZXJ9XHJcbiAgICAgICAgICAgIHNldFBvc3RzPXtzZXRQb3N0c31cclxuICAgICAgICAgICAgc2V0c2hvd1RvYXN0cj17c2V0c2hvd1RvYXN0cn1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvU2VnbWVudD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyB0b2tlbiB9ID0gcGFyc2VDb29raWVzKGN0eCk7XHJcblxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke2Jhc2VVcmx9L2FwaS9wb3N0c2AsIHtcclxuICAgICAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiB0b2tlbiB9LFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4geyBwb3N0c0RhdGE6IHJlcy5kYXRhIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IGVycm9yTG9hZGluZzogdHJ1ZSB9O1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iLCJjb25zdCBiYXNlVXJsID1cImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYmFzZVVybDtcclxuIiwiaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XHJcbmltcG9ydCBNb21lbnQgZnJvbSBcInJlYWN0LW1vbWVudFwiO1xyXG5cclxuY29uc3QgY2FsY3VsYXRlVGltZSA9IChjcmVhdGVkQXQpID0+IHtcclxuICBjb25zdCB0b2RheSA9IG1vbWVudChEYXRlLm5vdygpKTtcclxuICBjb25zdCBwb3N0RGF0ZSA9IG1vbWVudChjcmVhdGVkQXQpO1xyXG4gIGNvbnN0IGRpZmZJbkhvdXJzID0gdG9kYXkuZGlmZihwb3N0RGF0ZSwgXCJob3Vyc1wiKTtcclxuXHJcbiAgaWYgKGRpZmZJbkhvdXJzIDwgMjQpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgVG9kYXkgPE1vbWVudCBmb3JtYXQ9XCJoaDptbTogQVwiPntjcmVhdGVkQXR9PC9Nb21lbnQ+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9IGVsc2UgaWYgKGRpZmZJbkhvdXJzID4gMjQgJiYgZGlmZkluSG91cnMgPCAzNikge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICBZZXN0ZXJkYXkgPE1vbWVudCBmb3JtYXQ9XCJoaDptbTogQVwiPntjcmVhdGVkQXR9PC9Nb21lbnQ+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9IGVsc2UgaWYgKGRpZmZJbkhvdXJzID4gMzYpIHtcclxuICAgIHJldHVybiA8TW9tZW50IGZvcm1hdD1cIkREL01NL1lZIGhoOm1tIEFcIj57Y3JlYXRlZEF0fTwvTW9tZW50PjtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjYWxjdWxhdGVUaW1lO1xyXG4iLCJjb25zdCBjYXRjaEVycm9ycyA9IChlcnJvcikgPT4ge1xyXG4gIGxldCBlcnJvck1zZyA9IHt9O1xyXG5cclxuICBpZiAoZXJyb3IucmVzcG9uc2UpIHtcclxuICAgIC8vIElmIHRoZSByZXF1ZXN0IHdhcyBtYWRlIGFuZCB0aGUgc2VydmVyIG5vdCByZXNwb25kZWQgd2l0aCBhIHN0YXR1cyBjb2RlIGluIHRoZSByYW5nZSBvZiAyeHhcclxuXHJcbiAgICBlcnJvck1zZyA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcblxyXG4gICAgY29uc29sZS5lcnJvcihlcnJvck1zZyk7XHJcbiAgfSBlbHNlIGlmIChlcnJvci5yZXF1ZXN0KSB7XHJcbiAgICAvLyBpZiB0aGUgcmVxdWVzdCB3YXMgbWFkZSBhbmQgbm8gcmVzcG9uc2Ugd2FzIHJlY2V2aWVkIGZyb20gc2VydmVyXHJcbiAgICBlcnJvck1zZyA9IGVycm9yLnJlcXVlc3Q7XHJcblxyXG4gICAgY29uc29sZS5lcnJvcihlcnJvck1zZyk7XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIGlmIHNvbWV0aGluZyBlbHNlIGhhcHBlbmVkIHdoaWxlIG1ha2luZyB0aGUgcmVxdWVzdFxyXG4gICAgZXJyb3JNc2cgPSBlcnJvci5tZXNzYWdlO1xyXG5cclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JNc2cpO1xyXG4gIH1cclxuICByZXR1cm4gZXJyb3JNc2c7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjYXRjaEVycm9ycztcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgYmFzZVVybCBmcm9tIFwiLi9iYXNlVXJsXCI7XHJcbmltcG9ydCBjYXRjaEVycm9ycyBmcm9tIFwiLi9jYXRjaEVycm9yc1wiO1xyXG5pbXBvcnQgY29va2llIGZyb20gXCJqcy1jb29raWVcIjtcclxuXHJcbmNvbnN0IEF4aW9zID0gYXhpb3MuY3JlYXRlKHtcclxuICBiYXNlVXJsOiBgJHtiYXNlVXJsfS9hcGkvcG9zdHNgLFxyXG4gIGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogY29va2llLmdldChcInRva2VuXCIpIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHN1Ym1pdE5ld1Bvc3QgPSBhc3luYyAoXHJcbiAgdGV4dCxcclxuICBsb2NhdGlvbixcclxuICBwaWNVcmwsXHJcbiAgc2V0UG9zdHMsXHJcbiAgc2V0TmV3UG9zdCxcclxuICBzZXRFcnJvclxyXG4pID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgQXhpb3MucG9zdChcIi9cIiwgeyB0ZXh0LCBsb2NhdGlvbiwgcGljVXJsIH0pO1xyXG5cclxuICAgIHNldFBvc3RzKChwcmV2KSA9PiBbcmVzLmRhdGEsIC4uLnByZXZdKTtcclxuICAgIHNldE5ld1Bvc3QoeyB0ZXh0OiBcIlwiLCBsb2NhdGlvbjogXCJcIiB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc3QgZXJyb3JNc2cgPSBjYXRjaEVycm9ycyhlcnJvcik7XHJcbiAgICBzZXRFcnJvcihlcnJvck1zZyk7XHJcbiAgfVxyXG59O1xyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5jb25zdCB1cGxvYWRQaWMgPSBhc3luYyAobWVkaWEpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgZm9ybSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgZm9ybS5hcHBlbmQoXCJmaWxlXCIsIG1lZGlhKTtcclxuICAgIGZvcm0uYXBwZW5kKFwidXBsb2FkX3ByZXNldFwiLCBcInNvY2lhbF9tZWRpYV9hcHBcIik7XHJcbiAgICBmb3JtLmFwcGVuZChcImNsb3VkX25hbWVcIiwgXCJka3N1ejhtc2pcIik7XHJcblxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdChwcm9jZXNzLmVudi5DTE9VRElOQVJZX1VSTCwgZm9ybSk7XHJcbiAgICByZXR1cm4gcmVzLmRhdGEudXJsO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXBsb2FkUGljO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianMtY29va2llXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb21lbnRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5vb2tpZXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbW9tZW50XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZW1hbnRpYy11aS1yZWFjdFwiKTs7IiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==