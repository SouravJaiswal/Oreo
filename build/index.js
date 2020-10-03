"use strict";

Object.defineProperty(exports, "__esModule", { value: true });

var React = require("react");
var fi = require("react-icons/fi");
var ai = require("react-icons/ai");
var gr = require("react-icons/gr");

function _interopDefaultLegacy(e) {
  return e && typeof e === "object" && "default" in e ? e : { default: e };
}

var React__default = /*#__PURE__*/ _interopDefaultLegacy(React);

function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === "undefined") {
    return;
  }

  var head = document.head || document.getElementsByTagName("head")[0];
  var style = document.createElement("style");
  style.type = "text/css";

  if (insertAt === "top") {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z =
  '@import url("https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@500;700&family=Roboto:wght@300;400;500&display=swap");\n/*\n0 - 400px:    Mini - phone\n400 - 600px:    Phone\n600 - 900px:    Tablet portrait\n900 - 1200px:   Tablet landscape\n[1200 - 1800] is where our normal styles apply\n1800px + :      Big desktop\n$breakpoint arguement choices:\n- mini-phone\n- phone\n- tab-port\n- tab-land\n- big-desktop\nORDER: Base + typography > general layout + grid > page layout > components\n1em = 16px\n*/\n*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n  position: relative; }\n\nol,\nul,\ndl {\n  margin: 0; }\n\nhtml {\n  font-size: 62.5%;\n  scroll-behavior: smooth; }\n  @media only screen and (max-width: 75em) {\n    html {\n      font-size: 56.25%; } }\n  @media only screen and (max-width: 56.25em) {\n    html {\n      font-size: 50%; } }\n  @media only screen and (max-width: 25em) {\n    html {\n      font-size: 37.5%; } }\n  @media only screen and (min-width: 112.5em) {\n    html {\n      font-size: 75%; } }\n\nbody {\n  box-sizing: border-box;\n  overflow-x: hidden !important;\n  -webkit-font-smoothing: antialiased;\n  color: #333;\n  font-family: "Roboto", sans-serif;\n  font-size: 1.6rem; }\n  @media only screen and (max-width: 56.25em) {\n    body {\n      padding: 0; } }\n\nimg {\n  width: 100%; }\n\nfigure {\n  margin: 0; }\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  margin: 0;\n  color: inherit;\n  font-size: inherit;\n  font-family: inherit;\n  line-height: inherit; }\n\ntextarea {\n  touch-action: manipulation;\n  -webkit-appearance: none;\n  overflow: auto;\n  resize: vertical; }\n\na {\n  text-decoration: none;\n  color: #333; }\n\np {\n  margin: 0; }\n\n.u-center-text {\n  text-align: center !important; }\n\n.u-center-right {\n  text-align: right !important; }\n\n.u-center-flex-cross {\n  align-self: center; }\n\n.u-margin-bottom-nano {\n  margin-bottom: 1rem !important; }\n\n.u-margin-bottom-small {\n  margin-bottom: 1.5rem !important; }\n\n.u-margin-bottom-medium {\n  margin-bottom: 3rem !important; }\n  @media only screen and (max-width: 56.25em) {\n    .u-margin-bottom-medium {\n      margin-bottom: 3rem !important; } }\n\n.u-margin-bottom-large {\n  margin-bottom: 6rem !important; }\n  @media only screen and (max-width: 56.25em) {\n    .u-margin-bottom-large {\n      margin-bottom: 6rem !important; } }\n\n.u-margin-bottom-big {\n  margin-bottom: 8rem !important; }\n  @media only screen and (max-width: 56.25em) {\n    .u-margin-bottom-big {\n      margin-bottom: 8rem !important; } }\n\n.u-margin-bottom-huge {\n  margin-bottom: 10rem !important; }\n\n.u-margin-top-big {\n  margin-top: 8rem !important; }\n\n.u-margin-top-huge {\n  margin-top: 10rem !important; }\n\n/*\n* Text utilities\n*/\n.bold {\n  font-weight: 700; }\n\n.regular {\n  font-weight: 400; }\n\n@keyframes rotate {\n  0% {\n    transform: rotateZ(0); }\n  50% {\n    transform: rotateZ(45deg); }\n  100% {\n    transform: rotateZ(360deg); } }\n\n.button {\n  align-items: center;\n  background: transparent;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  display: inline-flex;\n  font-family: "Roboto", sans-serif;\n  font-weight: 500;\n  height: 4rem;\n  justify-content: center;\n  line-height: 1.62;\n  padding: 0 2rem;\n  transition: all 0.2s cubic-bezier(0.17, 0.67, 0.83, 0.67);\n  width: fit-content;\n  outline: none; }\n  .button__animation {\n    display: flex; }\n  .button__text {\n    display: flex;\n    align-items: center; }\n  .button__animation .button__loading {\n    width: 1.6rem;\n    height: 1.6rem;\n    border-radius: 50%;\n    border: 0.15rem solid #fff;\n    border-top-color: transparent; }\n  .button--default {\n    background: #f8faff;\n    color: #0e63f4; }\n    .button--default:hover {\n      background-color: #0e63f4;\n      color: #fff; }\n  .button--default .button__loading {\n    border-color: #0e63f4;\n    border-top-color: #f8faff; }\n  .button--primary {\n    background-color: #0e63f4;\n    color: #fff; }\n    .button--primary:hover {\n      background-color: #124fd5; }\n  .button--danger {\n    background-color: #e74c3c;\n    color: #fff; }\n    .button--danger:hover {\n      background-color: #c72918; }\n  .button--success {\n    background-color: #67cb8b;\n    color: #fff; }\n    .button--success:hover {\n      background-color: #41be6e; }\n  .button--grey {\n    background-color: #e0e1e2;\n    color: #333; }\n    .button--grey:hover {\n      background-color: #cacbcd; }\n  .button--grey .button__loading {\n    border-color: currentColor;\n    border-top-color: #e0e1e2; }\n  .button--text {\n    background-color: transparent;\n    color: #333;\n    flex-direction: column;\n    padding: 0 1rem; }\n    .button--text::after {\n      background: #333;\n      content: \' \';\n      height: 2px;\n      opacity: 0;\n      width: 100%;\n      transition: all 0.1s cubic-bezier(0.17, 0.67, 0.83, 0.67); }\n    .button--text:hover::after {\n      opacity: 1; }\n  .button[disabled], .button:disabled {\n    background-color: #e0e1e2;\n    color: #333;\n    cursor: not-allowed; }\n';
styleInject(css_248z);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function () {
  __assign =
    Object.assign ||
    function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
    };
  return __assign.apply(this, arguments);
};

function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++)
    s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
      r[k] = a[j];
  return r;
}

var css_248z$1 =
  '@import url("https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@500;700&family=Roboto:wght@300;400;500&display=swap");\n/*\n0 - 400px:    Mini - phone\n400 - 600px:    Phone\n600 - 900px:    Tablet portrait\n900 - 1200px:   Tablet landscape\n[1200 - 1800] is where our normal styles apply\n1800px + :      Big desktop\n$breakpoint arguement choices:\n- mini-phone\n- phone\n- tab-port\n- tab-land\n- big-desktop\nORDER: Base + typography > general layout + grid > page layout > components\n1em = 16px\n*/\n*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n  position: relative; }\n\nol,\nul,\ndl {\n  margin: 0; }\n\nhtml {\n  font-size: 62.5%;\n  scroll-behavior: smooth; }\n  @media only screen and (max-width: 75em) {\n    html {\n      font-size: 56.25%; } }\n  @media only screen and (max-width: 56.25em) {\n    html {\n      font-size: 50%; } }\n  @media only screen and (max-width: 25em) {\n    html {\n      font-size: 37.5%; } }\n  @media only screen and (min-width: 112.5em) {\n    html {\n      font-size: 75%; } }\n\nbody {\n  box-sizing: border-box;\n  overflow-x: hidden !important;\n  -webkit-font-smoothing: antialiased;\n  color: #333;\n  font-family: "Roboto", sans-serif;\n  font-size: 1.6rem; }\n  @media only screen and (max-width: 56.25em) {\n    body {\n      padding: 0; } }\n\nimg {\n  width: 100%; }\n\nfigure {\n  margin: 0; }\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  margin: 0;\n  color: inherit;\n  font-size: inherit;\n  font-family: inherit;\n  line-height: inherit; }\n\ntextarea {\n  touch-action: manipulation;\n  -webkit-appearance: none;\n  overflow: auto;\n  resize: vertical; }\n\na {\n  text-decoration: none;\n  color: #333; }\n\np {\n  margin: 0; }\n\n.u-center-text {\n  text-align: center !important; }\n\n.u-center-right {\n  text-align: right !important; }\n\n.u-center-flex-cross {\n  align-self: center; }\n\n.u-margin-bottom-nano {\n  margin-bottom: 1rem !important; }\n\n.u-margin-bottom-small {\n  margin-bottom: 1.5rem !important; }\n\n.u-margin-bottom-medium {\n  margin-bottom: 3rem !important; }\n  @media only screen and (max-width: 56.25em) {\n    .u-margin-bottom-medium {\n      margin-bottom: 3rem !important; } }\n\n.u-margin-bottom-large {\n  margin-bottom: 6rem !important; }\n  @media only screen and (max-width: 56.25em) {\n    .u-margin-bottom-large {\n      margin-bottom: 6rem !important; } }\n\n.u-margin-bottom-big {\n  margin-bottom: 8rem !important; }\n  @media only screen and (max-width: 56.25em) {\n    .u-margin-bottom-big {\n      margin-bottom: 8rem !important; } }\n\n.u-margin-bottom-huge {\n  margin-bottom: 10rem !important; }\n\n.u-margin-top-big {\n  margin-top: 8rem !important; }\n\n.u-margin-top-huge {\n  margin-top: 10rem !important; }\n\n/*\n* Text utilities\n*/\n.bold {\n  font-weight: 700; }\n\n.regular {\n  font-weight: 400; }\n\n@keyframes rotate {\n  0% {\n    transform: rotateZ(0); }\n  50% {\n    transform: rotateZ(45deg); }\n  100% {\n    transform: rotateZ(360deg); } }\n\n.loading {\n  display: inline-flex; }\n  .loading--default {\n    width: 3rem;\n    height: 3rem;\n    border-radius: 50%;\n    border: 0.3rem solid #cacbcd;\n    border-top-color: #333;\n    animation: 0.8s spin infinite linear; }\n    .loading--default--light {\n      border: 0.3rem solid #333;\n      border-top-color: transparent; }\n  .loading--modern svg {\n    width: 3rem;\n    height: 3rem;\n    fill: #333; }\n  .loading--modern--light svg {\n    fill: #cacbcd; }\n  .loading--line {\n    justify-content: center; }\n    .loading--line div {\n      width: 1rem;\n      height: 1rem;\n      margin: 0.3rem;\n      margin-top: 2rem;\n      background: #333;\n      border-radius: 50%;\n      animation: 0.9s bounce infinite alternate; }\n      .loading--line div:nth-child(2) {\n        animation-delay: 0.3s; }\n      .loading--line div:nth-child(3) {\n        animation-delay: 0.6s; }\n\n@keyframes spin {\n  to {\n    transform: rotate(360deg); } }\n\n@keyframes bounce {\n  to {\n    opacity: 0.3;\n    transform: translate3d(0, -1rem, 0); } }\n';
styleInject(css_248z$1);

var Loading = function (props) {
  switch (props.type) {
    case "modern":
      return React__default["default"].createElement(
        Modern,
        __assign({}, props)
      );
    case "line":
      return React__default["default"].createElement(Line, __assign({}, props));
    default:
      return React__default["default"].createElement("div", {
        className:
          "loading loading--default loading--default--" +
          props.shade +
          " " +
          props.className,
      });
  }
};
var Modern = function (props) {
  return React__default["default"].createElement(
    "div",
    {
      className:
        "loading loading--modern loading--modern--" +
        props.shade +
        " " +
        props.className,
    },
    React__default["default"].createElement(
      "svg",
      {
        version: "1.1",
        id: "L7",
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        x: "0px",
        y: "0px",
        viewBox: "0 0 100 100",
        "enable-background": "new 0 0 100 100",
        xmlSpace: "preserve",
      },
      React__default["default"].createElement(
        "path",
        {
          d:
            "M31.6,3.5C5.9,13.6-6.6,42.7,3.5,68.4c10.1,25.7,39.2,38.3,64.9,28.1l-3.1-7.9c-21.3,8.4-45.4-2-53.8-23.3\nc-8.4-21.3,2-45.4,23.3-53.8L31.6,3.5z",
        },
        React__default["default"].createElement("animateTransform", {
          attributeName: "transform",
          attributeType: "XML",
          type: "rotate",
          dur: "1s",
          from: "0 50 50",
          to: "360 50 50",
          repeatCount: "indefinite",
        })
      ),
      React__default["default"].createElement(
        "path",
        {
          d:
            "M42.3,39.6c5.7-4.3,13.9-3.1,18.1,2.7c4.3,5.7,3.1,13.9-2.7,18.1l4.1,5.5c8.8-6.5,10.6-19,4.1-27.7\nc-6.5-8.8-19-10.6-27.7-4.1L42.3,39.6z",
        },
        React__default["default"].createElement("animateTransform", {
          attributeName: "transform",
          attributeType: "XML",
          type: "rotate",
          dur: "1s",
          from: "0 50 50",
          to: "-360 50 50",
          repeatCount: "indefinite",
        })
      ),
      React__default["default"].createElement(
        "path",
        {
          d:
            "M82,35.7C74.1,18,53.4,10.1,35.7,18S10.1,46.6,18,64.3l7.6-3.4c-6-13.5,0-29.3,13.5-35.3s29.3,0,35.3,13.5\nL82,35.7z",
        },
        React__default["default"].createElement("animateTransform", {
          attributeName: "transform",
          attributeType: "XML",
          type: "rotate",
          dur: "1s",
          from: "0 50 50",
          to: "360 50 50",
          repeatCount: "indefinite",
        })
      )
    )
  );
};
var Line = function (props) {
  return React__default["default"].createElement(
    "div",
    { className: "loading loading--line " + props.className },
    React__default["default"].createElement("div", null),
    React__default["default"].createElement("div", null),
    React__default["default"].createElement("div", null)
  );
};

var Button = function (_a) {
  var type = _a.type,
    onClick = _a.onClick,
    children = _a.children,
    disabled = _a.disabled,
    className = _a.className,
    _b = _a.loading,
    loading = _b === void 0 ? false : _b;
  // Call the onClick from the parent
  var onButtonClick = function () {
    // do not execute if the button is in loading state
    if (loading) return;
    !!onClick && onClick();
  };
  return React__default["default"].createElement(
    "button",
    {
      disabled: disabled,
      onClick: onButtonClick,
      className: "button button--" + type + " " + className,
    },
    loading
      ? React__default["default"].createElement(
          "span",
          { className: "button__animation" },
          React__default["default"].createElement(Loading, {
            type: "default",
            className: "button__loading",
          })
        )
      : React__default["default"].createElement(
          "span",
          { className: "button__text" },
          children
        )
  );
};

var css_248z$2 =
  '@import url("https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@500;700&family=Roboto:wght@300;400;500&display=swap");\n/*\n0 - 400px:    Mini - phone\n400 - 600px:    Phone\n600 - 900px:    Tablet portrait\n900 - 1200px:   Tablet landscape\n[1200 - 1800] is where our normal styles apply\n1800px + :      Big desktop\n$breakpoint arguement choices:\n- mini-phone\n- phone\n- tab-port\n- tab-land\n- big-desktop\nORDER: Base + typography > general layout + grid > page layout > components\n1em = 16px\n*/\n*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n  position: relative; }\n\nol,\nul,\ndl {\n  margin: 0; }\n\nhtml {\n  font-size: 62.5%;\n  scroll-behavior: smooth; }\n  @media only screen and (max-width: 75em) {\n    html {\n      font-size: 56.25%; } }\n  @media only screen and (max-width: 56.25em) {\n    html {\n      font-size: 50%; } }\n  @media only screen and (max-width: 25em) {\n    html {\n      font-size: 37.5%; } }\n  @media only screen and (min-width: 112.5em) {\n    html {\n      font-size: 75%; } }\n\nbody {\n  box-sizing: border-box;\n  overflow-x: hidden !important;\n  -webkit-font-smoothing: antialiased;\n  color: #333;\n  font-family: "Roboto", sans-serif;\n  font-size: 1.6rem; }\n  @media only screen and (max-width: 56.25em) {\n    body {\n      padding: 0; } }\n\nimg {\n  width: 100%; }\n\nfigure {\n  margin: 0; }\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  margin: 0;\n  color: inherit;\n  font-size: inherit;\n  font-family: inherit;\n  line-height: inherit; }\n\ntextarea {\n  touch-action: manipulation;\n  -webkit-appearance: none;\n  overflow: auto;\n  resize: vertical; }\n\na {\n  text-decoration: none;\n  color: #333; }\n\np {\n  margin: 0; }\n\n.u-center-text {\n  text-align: center !important; }\n\n.u-center-right {\n  text-align: right !important; }\n\n.u-center-flex-cross {\n  align-self: center; }\n\n.u-margin-bottom-nano {\n  margin-bottom: 1rem !important; }\n\n.u-margin-bottom-small {\n  margin-bottom: 1.5rem !important; }\n\n.u-margin-bottom-medium {\n  margin-bottom: 3rem !important; }\n  @media only screen and (max-width: 56.25em) {\n    .u-margin-bottom-medium {\n      margin-bottom: 3rem !important; } }\n\n.u-margin-bottom-large {\n  margin-bottom: 6rem !important; }\n  @media only screen and (max-width: 56.25em) {\n    .u-margin-bottom-large {\n      margin-bottom: 6rem !important; } }\n\n.u-margin-bottom-big {\n  margin-bottom: 8rem !important; }\n  @media only screen and (max-width: 56.25em) {\n    .u-margin-bottom-big {\n      margin-bottom: 8rem !important; } }\n\n.u-margin-bottom-huge {\n  margin-bottom: 10rem !important; }\n\n.u-margin-top-big {\n  margin-top: 8rem !important; }\n\n.u-margin-top-huge {\n  margin-top: 10rem !important; }\n\n/*\n* Text utilities\n*/\n.bold {\n  font-weight: 700; }\n\n.regular {\n  font-weight: 400; }\n\n@keyframes rotate {\n  0% {\n    transform: rotateZ(0); }\n  50% {\n    transform: rotateZ(45deg); }\n  100% {\n    transform: rotateZ(360deg); } }\n\n.heading {\n  font-family: "Roboto Slab", serif;\n  font-weight: 700;\n  line-height: 1.3; }\n  .heading--jumbo {\n    font-size: 11.1rem; }\n  .heading--primary {\n    font-size: 6.8rem; }\n  .heading--secondary {\n    font-size: 4.2rem; }\n  .heading--tertiary {\n    font-size: 2.6rem; }\n  .heading--regular {\n    font-size: 2rem; }\n\n.paragraph {\n  font-family: "Roboto", sans-serif;\n  font-size: 1.6rem;\n  line-height: 2;\n  max-width: 70rem; }\n  .paragraph:not(:last-child) {\n    margin-bottom: 1rem; }\n';
styleInject(css_248z$2);

var H1 = function (props) {
  return React__default["default"].createElement(
    "h1",
    __assign({}, props, {
      className: "heading heading--primary " + props.className,
    }),
    props.children
  );
};

var H2 = function (props) {
  return React__default["default"].createElement(
    "h2",
    __assign({}, props, {
      className: "heading heading--secondary " + props.className,
    }),
    props.children
  );
};

var H3 = function (props) {
  return React__default["default"].createElement(
    "h3",
    __assign({}, props, {
      className: "heading heading--tertiary " + props.className,
    }),
    props.children
  );
};

var H4 = function (props) {
  return React__default["default"].createElement(
    "h4",
    __assign({}, props, {
      className: "heading heading--regular " + props.className,
    }),
    props.children
  );
};

var Paragraph = function (props) {
  return React__default["default"].createElement(
    "p",
    __assign({}, props, { className: "paragraph " + props.className }),
    props.children
  );
};

var css_248z$3 =
  '@import url("https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@500;700&family=Roboto:wght@300;400;500&display=swap");\n/*\n0 - 400px:    Mini - phone\n400 - 600px:    Phone\n600 - 900px:    Tablet portrait\n900 - 1200px:   Tablet landscape\n[1200 - 1800] is where our normal styles apply\n1800px + :      Big desktop\n$breakpoint arguement choices:\n- mini-phone\n- phone\n- tab-port\n- tab-land\n- big-desktop\nORDER: Base + typography > general layout + grid > page layout > components\n1em = 16px\n*/\n*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n  position: relative; }\n\nol,\nul,\ndl {\n  margin: 0; }\n\nhtml {\n  font-size: 62.5%;\n  scroll-behavior: smooth; }\n  @media only screen and (max-width: 75em) {\n    html {\n      font-size: 56.25%; } }\n  @media only screen and (max-width: 56.25em) {\n    html {\n      font-size: 50%; } }\n  @media only screen and (max-width: 25em) {\n    html {\n      font-size: 37.5%; } }\n  @media only screen and (min-width: 112.5em) {\n    html {\n      font-size: 75%; } }\n\nbody {\n  box-sizing: border-box;\n  overflow-x: hidden !important;\n  -webkit-font-smoothing: antialiased;\n  color: #333;\n  font-family: "Roboto", sans-serif;\n  font-size: 1.6rem; }\n  @media only screen and (max-width: 56.25em) {\n    body {\n      padding: 0; } }\n\nimg {\n  width: 100%; }\n\nfigure {\n  margin: 0; }\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  margin: 0;\n  color: inherit;\n  font-size: inherit;\n  font-family: inherit;\n  line-height: inherit; }\n\ntextarea {\n  touch-action: manipulation;\n  -webkit-appearance: none;\n  overflow: auto;\n  resize: vertical; }\n\na {\n  text-decoration: none;\n  color: #333; }\n\np {\n  margin: 0; }\n\n.u-center-text {\n  text-align: center !important; }\n\n.u-center-right {\n  text-align: right !important; }\n\n.u-center-flex-cross {\n  align-self: center; }\n\n.u-margin-bottom-nano {\n  margin-bottom: 1rem !important; }\n\n.u-margin-bottom-small {\n  margin-bottom: 1.5rem !important; }\n\n.u-margin-bottom-medium {\n  margin-bottom: 3rem !important; }\n  @media only screen and (max-width: 56.25em) {\n    .u-margin-bottom-medium {\n      margin-bottom: 3rem !important; } }\n\n.u-margin-bottom-large {\n  margin-bottom: 6rem !important; }\n  @media only screen and (max-width: 56.25em) {\n    .u-margin-bottom-large {\n      margin-bottom: 6rem !important; } }\n\n.u-margin-bottom-big {\n  margin-bottom: 8rem !important; }\n  @media only screen and (max-width: 56.25em) {\n    .u-margin-bottom-big {\n      margin-bottom: 8rem !important; } }\n\n.u-margin-bottom-huge {\n  margin-bottom: 10rem !important; }\n\n.u-margin-top-big {\n  margin-top: 8rem !important; }\n\n.u-margin-top-huge {\n  margin-top: 10rem !important; }\n\n/*\n* Text utilities\n*/\n.bold {\n  font-weight: 700; }\n\n.regular {\n  font-weight: 400; }\n\n@keyframes rotate {\n  0% {\n    transform: rotateZ(0); }\n  50% {\n    transform: rotateZ(45deg); }\n  100% {\n    transform: rotateZ(360deg); } }\n\n.nav {\n  display: flex;\n  height: 8rem;\n  align-items: center;\n  max-width: 100%;\n  width: 100%;\n  overflow: hidden;\n  border-bottom: 1px solid #d9d9d9; }\n  .nav__menu {\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    max-width: 50%;\n    width: 50%;\n    overflow: hidden;\n    transition: all 0.1s cubic-bezier(0.17, 0.67, 0.83, 0.67); }\n    @media only screen and (max-width: 37.5em) {\n      .nav__menu {\n        position: fixed;\n        transform: scale(0);\n        opacity: 0;\n        display: flex;\n        flex-direction: column;\n        top: 0;\n        left: 0;\n        max-width: 100%;\n        width: 100vw;\n        height: 100vh;\n        background: #fff; } }\n    .nav__menu > * {\n      font-size: 1.4rem; }\n      @media only screen and (max-width: 37.5em) {\n        .nav__menu > * {\n          font-size: 2.8rem; } }\n    .nav__menu > *:not(:last-child) {\n      margin-right: 1rem; }\n      @media only screen and (max-width: 37.5em) {\n        .nav__menu > *:not(:last-child) {\n          margin-right: 0;\n          margin-bottom: 5rem; } }\n  .nav__actions {\n    display: flex;\n    align-items: center; }\n    @media only screen and (max-width: 37.5em) {\n      .nav__actions {\n        position: fixed;\n        bottom: 0;\n        left: 0;\n        display: flex;\n        justify-content: center;\n        width: 100vw;\n        margin-bottom: 2rem;\n        opacity: 0;\n        transform: scale(0); } }\n    .nav__actions > * {\n      font-size: 1.4rem; }\n      @media only screen and (max-width: 37.5em) {\n        .nav__actions > * {\n          font-size: 2rem; } }\n    .nav__actions > *:not(:last-child) {\n      margin-right: 1rem; }\n      @media only screen and (max-width: 37.5em) {\n        .nav__actions > *:not(:last-child) {\n          margin-right: 4rem; } }\n  @media only screen and (max-width: 37.5em) {\n    .nav__open .nav__menu {\n      transform: scale(1);\n      opacity: 1; } }\n  @media only screen and (max-width: 37.5em) {\n    .nav__open .nav__actions {\n      transform: scale(1);\n      opacity: 1; } }\n  .nav--side, .nav--center {\n    justify-content: space-between; }\n  .nav--center .nav__menu {\n    justify-content: center; }\n  .nav--side .nav__actions {\n    display: none; }\n  .nav__icon {\n    display: none;\n    cursor: pointer; }\n    .nav__icon svg {\n      width: 1.6rem;\n      height: 1.6rem; }\n    @media only screen and (max-width: 37.5em) {\n      .nav__icon {\n        display: initial; } }\n\n.sidebar {\n  flex-shrink: 0;\n  width: 24rem;\n  overflow: hidden;\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n  transition: all 0.2s ease; }\n  .sidebar__logo {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 0 2rem;\n    height: 8rem;\n    box-shadow: 0 0px 1px rgba(0, 0, 0, 0.1); }\n  .sidebar__control svg {\n    fill: #cacbcd;\n    width: 2rem;\n    height: 2rem;\n    cursor: pointer;\n    transform: rotate(180deg); }\n  .sidebar--collapsed {\n    width: 6.5rem; }\n  .sidebar--collapsed .sidebar__logo div {\n    visibility: hidden; }\n  .sidebar--collapsed .sidebar__control svg {\n    transform: rotate(0deg); }\n  .sidebar--right .sidebar__control svg {\n    transform: rotate(0deg); }\n  .sidebar--collapsed.sidebar--right .sidebar__control svg {\n    transform: rotate(180deg); }\n  .sidebar--right .sidebar__logo span {\n    order: -1; }\n  .sidebar--light {\n    background: #fff; }\n\n.sidemenu {\n  display: flex;\n  flex-direction: column;\n  margin-top: 2rem; }\n  .sidemenu__item {\n    min-height: 6rem;\n    display: flex;\n    align-items: center;\n    font-family: "Roboto Slab", serif;\n    font-size: 1.4rem;\n    transition: all 0.2s ease;\n    margin-bottom: 0.5rem; }\n    .sidemenu__item > * {\n      display: flex;\n      /* justify-content: center; */\n      align-items: center;\n      width: 100%;\n      height: 100%;\n      padding-left: 2rem;\n      color: #333; }\n    .sidemenu__item--active {\n      background: #f8faff;\n      font-weight: 600; }\n    .sidemenu__item:hover {\n      background: #f8faff;\n      cursor: pointer; }\n  .sidebar--left .sidemenu__item--active:after {\n    position: absolute;\n    top: 0;\n    right: 0;\n    content: \'\';\n    width: 3px;\n    height: 100%;\n    background: #0e63f4; }\n  .sidebar--right .sidemenu__item--active:before {\n    position: absolute;\n    top: 0;\n    left: 0;\n    content: \'\';\n    width: 3px;\n    height: 100%;\n    background: #0e63f4; }\n  .sidemenu__item svg {\n    width: 1.6rem;\n    height: 1.6rem;\n    margin-right: 1.5rem;\n    fill: #333;\n    transition: all 0.2s ease; }\n  .sidebar--collapsed .sidemenu__item {\n    min-height: 6rem;\n    padding: 0;\n    display: flex;\n    justify-content: center; }\n    .sidebar--collapsed .sidemenu__item span {\n      display: none; }\n    .sidebar--collapsed .sidemenu__item svg {\n      width: 2rem;\n      height: 2rem;\n      margin-right: 0rem; }\n';
styleInject(css_248z$3);

var NavContext = React__default["default"].createContext(false);
var Nav = function (_a) {
  var logo = _a.logo,
    children = _a.children,
    className = _a.className,
    _b = _a.type,
    type = _b === void 0 ? "side" : _b;
  var _c = React.useState(false),
    menu = _c[0],
    toggleMenu = _c[1];
  var menuClassName = menu ? "nav__open" : "nav__close";
  return React__default["default"].createElement(
    NavContext.Provider,
    { value: menu },
    React__default["default"].createElement(
      "div",
      {
        className: "nav nav--" + type + " " + className + " " + menuClassName,
        onClick: function () {
          return toggleMenu(false);
        },
      },
      React__default["default"].createElement(
        "div",
        { className: "nav__logo" },
        logo
      ),
      children,
      React__default["default"].createElement(
        "div",
        { className: "nav__icon" },
        menu
          ? React__default["default"].createElement(ai.AiOutlineClose, {
              onClick: function (e) {
                e.stopPropagation();
                return toggleMenu(false);
              },
            })
          : React__default["default"].createElement(fi.FiMenu, {
              onClick: function (e) {
                e.stopPropagation();
                return toggleMenu(true);
              },
            })
      )
    )
  );
};

var NavActions = function (_a) {
  var children = _a.children,
    className = _a.className;
  return React__default["default"].createElement(
    "div",
    { className: "nav__actions " + className },
    children
  );
};

var NavMenu = function (_a) {
  var children = _a.children,
    className = _a.className;
  return React__default["default"].createElement(
    "div",
    { className: "nav__menu " + className },
    children
  );
};

var Sidebar = function (_a) {
  var children = _a.children,
    collapsed = _a.collapsed,
    logo = _a.logo,
    onCollapsed = _a.onCollapsed,
    _b = _a.className,
    className = _b === void 0 ? "" : _b,
    _c = _a.type,
    type = _c === void 0 ? "light" : _c,
    _d = _a.direction,
    direction = _d === void 0 ? "left" : _d;
  var sidebarOpen = !collapsed ? "" : "sidebar--collapsed";
  var myDirection = direction === "left" ? "sidebar--left" : "sidebar--right";
  return React__default["default"].createElement(
    "div",
    {
      className:
        "sidebar sidebar--" +
        type +
        " " +
        sidebarOpen +
        " " +
        myDirection +
        " " +
        className +
        " ",
    },
    React__default["default"].createElement(
      "div",
      { className: "sidebar__logo" },
      logo,
      React__default["default"].createElement(
        "span",
        {
          className: "sidebar__control",
          onClick: function () {
            return onCollapsed();
          },
        },
        React__default["default"].createElement(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
          React__default["default"].createElement("path", {
            d:
              "M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z",
          })
        )
      )
    ),
    children
  );
};

var MenuContext = React__default["default"].createContext("");
var Menu = function (_a) {
  var children = _a.children,
    active = _a.active,
    title = _a.title;
  return React__default["default"].createElement(
    MenuContext.Provider,
    { value: active },
    React__default["default"].createElement(
      "div",
      { className: "sidemenu" },
      children
    )
  );
};

var MenuItem = function (_a) {
  var children = _a.children,
    value = _a.value,
    _b = _a.className,
    className = _b === void 0 ? "" : _b;
  var active = React.useContext(MenuContext);
  var activeClass = !!value && value === active ? "sidemenu__item--active" : "";
  return React__default["default"].createElement(
    "span",
    { className: "sidemenu__item " + activeClass + " " + className },
    children
  );
};

var css_248z$4 =
  '@import url("https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@500;700&family=Roboto:wght@300;400;500&display=swap");\n/*\n0 - 400px:    Mini - phone\n400 - 600px:    Phone\n600 - 900px:    Tablet portrait\n900 - 1200px:   Tablet landscape\n[1200 - 1800] is where our normal styles apply\n1800px + :      Big desktop\n$breakpoint arguement choices:\n- mini-phone\n- phone\n- tab-port\n- tab-land\n- big-desktop\nORDER: Base + typography > general layout + grid > page layout > components\n1em = 16px\n*/\n*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n  position: relative; }\n\nol,\nul,\ndl {\n  margin: 0; }\n\nhtml {\n  font-size: 62.5%;\n  scroll-behavior: smooth; }\n  @media only screen and (max-width: 75em) {\n    html {\n      font-size: 56.25%; } }\n  @media only screen and (max-width: 56.25em) {\n    html {\n      font-size: 50%; } }\n  @media only screen and (max-width: 25em) {\n    html {\n      font-size: 37.5%; } }\n  @media only screen and (min-width: 112.5em) {\n    html {\n      font-size: 75%; } }\n\nbody {\n  box-sizing: border-box;\n  overflow-x: hidden !important;\n  -webkit-font-smoothing: antialiased;\n  color: #333;\n  font-family: "Roboto", sans-serif;\n  font-size: 1.6rem; }\n  @media only screen and (max-width: 56.25em) {\n    body {\n      padding: 0; } }\n\nimg {\n  width: 100%; }\n\nfigure {\n  margin: 0; }\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  margin: 0;\n  color: inherit;\n  font-size: inherit;\n  font-family: inherit;\n  line-height: inherit; }\n\ntextarea {\n  touch-action: manipulation;\n  -webkit-appearance: none;\n  overflow: auto;\n  resize: vertical; }\n\na {\n  text-decoration: none;\n  color: #333; }\n\np {\n  margin: 0; }\n\n.u-center-text {\n  text-align: center !important; }\n\n.u-center-right {\n  text-align: right !important; }\n\n.u-center-flex-cross {\n  align-self: center; }\n\n.u-margin-bottom-nano {\n  margin-bottom: 1rem !important; }\n\n.u-margin-bottom-small {\n  margin-bottom: 1.5rem !important; }\n\n.u-margin-bottom-medium {\n  margin-bottom: 3rem !important; }\n  @media only screen and (max-width: 56.25em) {\n    .u-margin-bottom-medium {\n      margin-bottom: 3rem !important; } }\n\n.u-margin-bottom-large {\n  margin-bottom: 6rem !important; }\n  @media only screen and (max-width: 56.25em) {\n    .u-margin-bottom-large {\n      margin-bottom: 6rem !important; } }\n\n.u-margin-bottom-big {\n  margin-bottom: 8rem !important; }\n  @media only screen and (max-width: 56.25em) {\n    .u-margin-bottom-big {\n      margin-bottom: 8rem !important; } }\n\n.u-margin-bottom-huge {\n  margin-bottom: 10rem !important; }\n\n.u-margin-top-big {\n  margin-top: 8rem !important; }\n\n.u-margin-top-huge {\n  margin-top: 10rem !important; }\n\n/*\n* Text utilities\n*/\n.bold {\n  font-weight: 700; }\n\n.regular {\n  font-weight: 400; }\n\n@keyframes rotate {\n  0% {\n    transform: rotateZ(0); }\n  50% {\n    transform: rotateZ(45deg); }\n  100% {\n    transform: rotateZ(360deg); } }\n\n.modal {\n  background: rgba(0, 0, 0, 0.85);\n  height: 100vh;\n  left: 0;\n  position: fixed;\n  top: 0;\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  visibility: hidden;\n  z-index: 9999; }\n  .modal__ui {\n    background: #fff;\n    width: 50vw;\n    max-height: 80vh;\n    overflow: hidden;\n    min-height: 20vh;\n    border-radius: 4px;\n    transform: scale(0); }\n  .modal--open {\n    visibility: initial; }\n  .modal--open .modal__ui {\n    transform: scale(1); }\n  .modal__heading {\n    padding: 1.5rem 2rem;\n    border-bottom: 1px solid #d9d9d9; }\n  .modal__main {\n    border-bottom: 1px solid #d9d9d9;\n    max-height: 60vh;\n    overflow-y: auto;\n    padding: 1.5rem 2rem; }\n  .modal__footer {\n    padding: 1rem 2rem;\n    display: flex;\n    justify-content: flex-end;\n    background: #f9fafb; }\n    .modal__footer > *:not(:last-child) {\n      margin-right: 1rem; }\n  .modal--small .modal__ui {\n    height: fit-content;\n    width: 50rem; }\n  .modal--small .modal__main {\n    height: fit-content;\n    padding: 2rem; }\n  .modal--empty .modal__main {\n    padding: 0;\n    border: none;\n    height: 100%;\n    max-height: fit-content;\n    width: fit-content;\n    max-width: 100%; }\n  .modal--empty .modal__ui {\n    width: fit-content;\n    max-height: fit-content; }\n';
styleInject(css_248z$4);

var Modal = function (props) {
  // Handle empty className
  var className = props.className || "";
  var wrapperClassName = props.wrapperClassName || "";
  switch (props.type) {
    case "empty":
      return React__default["default"].createElement(
        ModalEmpty,
        __assign({}, props)
      );
    case "small":
      return React__default["default"].createElement(
        ModalDefault,
        __assign({}, props, {
          className: className,
          wrapperClassName: wrapperClassName + "modal--small",
        })
      );
    case "default":
    default:
      return React__default["default"].createElement(
        ModalDefault,
        __assign({}, props)
      );
  }
};
var ModalDefault = function (props) {
  var collapsed = props.collapsed,
    onClose = props.onClose;
  // if the state is false, do not show it
  var open = collapsed ? "modal--open" : "";
  var onClickMain = function (e) {
    onClose();
  };
  var onClickUi = function (e) {
    // Do not close if the click is inside the box
    e.stopPropagation();
  };
  return React__default["default"].createElement(
    "div",
    {
      className: "modal " + open + " " + props.wrapperClassName,
      onClick: onClickMain,
    },
    React__default["default"].createElement(
      "div",
      { className: "modal__ui " + props.className, onClick: onClickUi },
      React__default["default"].createElement(
        "div",
        { className: "modal__heading" },
        React__default["default"].createElement(H4, null, props.heading)
      ),
      React__default["default"].createElement(
        "div",
        { className: "modal__main" },
        props.children
      ),
      React__default["default"].createElement(
        "div",
        { className: "modal__footer" },
        props.action
      )
    )
  );
};
var ModalEmpty = function (props) {
  var collapsed = props.collapsed,
    onClose = props.onClose;
  // if the state is false, do not show it
  var open = collapsed ? "modal--open" : "";
  var onClickMain = function (e) {
    onClose();
  };
  var onClickUi = function (e) {
    // Do not close if the click is inside the box
    e.stopPropagation();
  };
  return React__default["default"].createElement(
    "div",
    {
      className: "modal modal--empty " + open + " " + props.wrapperClassName,
      onClick: onClickMain,
    },
    React__default["default"].createElement(
      "div",
      { className: "modal__ui " + props.className, onClick: onClickUi },
      React__default["default"].createElement(
        "div",
        { className: "modal__main" },
        props.children
      )
    )
  );
};

var OList = function (props) {
  return React__default["default"].createElement(
    "ol",
    __assign({}, props, { className: "olist " + props.className }),
    props.children
  );
};

var UList = function (props) {
  return React__default["default"].createElement(
    "ul",
    __assign({}, props, { className: "ulist " + props.className }),
    props.children
  );
};

var Li = function (props) {
  return React__default["default"].createElement(
    "li",
    __assign({}, props, {
      className: "li u-margin-bottom-nano " + props.className,
    }),
    props.children
  );
};

var css_248z$5 =
  '@import url("https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@500;700&family=Roboto:wght@300;400;500&display=swap");\n/*\n0 - 400px:    Mini - phone\n400 - 600px:    Phone\n600 - 900px:    Tablet portrait\n900 - 1200px:   Tablet landscape\n[1200 - 1800] is where our normal styles apply\n1800px + :      Big desktop\n$breakpoint arguement choices:\n- mini-phone\n- phone\n- tab-port\n- tab-land\n- big-desktop\nORDER: Base + typography > general layout + grid > page layout > components\n1em = 16px\n*/\n*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n  position: relative; }\n\nol,\nul,\ndl {\n  margin: 0; }\n\nhtml {\n  font-size: 62.5%;\n  scroll-behavior: smooth; }\n  @media only screen and (max-width: 75em) {\n    html {\n      font-size: 56.25%; } }\n  @media only screen and (max-width: 56.25em) {\n    html {\n      font-size: 50%; } }\n  @media only screen and (max-width: 25em) {\n    html {\n      font-size: 37.5%; } }\n  @media only screen and (min-width: 112.5em) {\n    html {\n      font-size: 75%; } }\n\nbody {\n  box-sizing: border-box;\n  overflow-x: hidden !important;\n  -webkit-font-smoothing: antialiased;\n  color: #333;\n  font-family: "Roboto", sans-serif;\n  font-size: 1.6rem; }\n  @media only screen and (max-width: 56.25em) {\n    body {\n      padding: 0; } }\n\nimg {\n  width: 100%; }\n\nfigure {\n  margin: 0; }\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  margin: 0;\n  color: inherit;\n  font-size: inherit;\n  font-family: inherit;\n  line-height: inherit; }\n\ntextarea {\n  touch-action: manipulation;\n  -webkit-appearance: none;\n  overflow: auto;\n  resize: vertical; }\n\na {\n  text-decoration: none;\n  color: #333; }\n\np {\n  margin: 0; }\n\n.u-center-text {\n  text-align: center !important; }\n\n.u-center-right {\n  text-align: right !important; }\n\n.u-center-flex-cross {\n  align-self: center; }\n\n.u-margin-bottom-nano {\n  margin-bottom: 1rem !important; }\n\n.u-margin-bottom-small {\n  margin-bottom: 1.5rem !important; }\n\n.u-margin-bottom-medium {\n  margin-bottom: 3rem !important; }\n  @media only screen and (max-width: 56.25em) {\n    .u-margin-bottom-medium {\n      margin-bottom: 3rem !important; } }\n\n.u-margin-bottom-large {\n  margin-bottom: 6rem !important; }\n  @media only screen and (max-width: 56.25em) {\n    .u-margin-bottom-large {\n      margin-bottom: 6rem !important; } }\n\n.u-margin-bottom-big {\n  margin-bottom: 8rem !important; }\n  @media only screen and (max-width: 56.25em) {\n    .u-margin-bottom-big {\n      margin-bottom: 8rem !important; } }\n\n.u-margin-bottom-huge {\n  margin-bottom: 10rem !important; }\n\n.u-margin-top-big {\n  margin-top: 8rem !important; }\n\n.u-margin-top-huge {\n  margin-top: 10rem !important; }\n\n/*\n* Text utilities\n*/\n.bold {\n  font-weight: 700; }\n\n.regular {\n  font-weight: 400; }\n\n@keyframes rotate {\n  0% {\n    transform: rotateZ(0); }\n  50% {\n    transform: rotateZ(45deg); }\n  100% {\n    transform: rotateZ(360deg); } }\n\n/* Change Autocomplete styles in Chrome*/\ninput:-webkit-autofill,\ninput:-webkit-autofill:hover,\ninput:-webkit-autofill:focus,\ntextarea:-webkit-autofill,\ntextarea:-webkit-autofill:hover,\ntextarea:-webkit-autofill:focus,\nselect:-webkit-autofill,\nselect:-webkit-autofill:hover,\nselect:-webkit-autofill:focus {\n  -webkit-text-fill-color: #333;\n  -webkit-box-shadow: 0 0 0px 1000px transparent inset;\n  transition: background-color 5000s ease-in-out 0s; }\n\n.errmsg {\n  color: #e74c3c;\n  font-size: 1.3rem;\n  padding: 1rem 1rem 0.5rem; }\n\n.input {\n  height: 4.8rem;\n  min-width: 30rem;\n  width: 100%;\n  outline: none;\n  background: transparent;\n  color: #333;\n  border: 1px solid #999;\n  padding: 1rem 1rem 1rem 2rem;\n  z-index: 10;\n  font-size: 1.4rem;\n  border-radius: 1rem; }\n  .input--error {\n    border: 1px solid #e74c3c; }\n  .input--success {\n    border: 1px solid #67cb8b; }\n  .input::placeholder {\n    color: #333;\n    text-transform: capitalize; }\n  .input__group {\n    display: inline-flex;\n    flex-direction: column; }\n  .input__main {\n    display: inline-flex; }\n  .input__label {\n    opacity: 1;\n    position: absolute;\n    top: 50%;\n    left: 2rem;\n    text-transform: uppercase;\n    font-size: 1.2rem;\n    letter-spacing: 2px;\n    transform: translateY(-50%);\n    padding: 0 1rem;\n    z-index: 9;\n    transition: all 0.1s cubic-bezier(0.17, 0.67, 0.83, 0.67); }\n  .input__with-label:focus + .input__label,\n  .input__with-label:valid + .input__label {\n    top: 2px;\n    left: 2rem;\n    font-weight: 500;\n    opacity: 1;\n    background: #fff;\n    z-index: 11; }\n  .input__with-icon {\n    padding: 1rem 1rem 1rem 4.8rem; }\n  .input__icon {\n    position: absolute;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    top: 50%;\n    left: 2rem;\n    transform: translateY(-50%);\n    z-index: 11; }\n\n/* \n  Radio Group\n*/\n.radio__group {\n  display: inline-flex;\n  flex-direction: column; }\n  .radio__group--full {\n    width: 100%; }\n\n.radio__main {\n  display: flex;\n  border: 1px solid #f8faff;\n  min-height: 4.8rem;\n  justify-content: center;\n  align-items: center;\n  border-radius: 1rem;\n  padding: 0 2rem; }\n  .radio__main--full {\n    flex-direction: column;\n    width: 100%;\n    flex-wrap: wrap;\n    border: none;\n    min-height: fit-content;\n    justify-content: flex-start;\n    align-items: flex-start;\n    border-radius: 0;\n    padding: 0; }\n\n.radio__container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.4rem; }\n  .radio__container:not(:last-child) {\n    margin-right: 2rem; }\n  .radio__container--full {\n    width: 100%;\n    min-height: 6rem;\n    font-size: 2rem;\n    line-height: 1.6;\n    border: 1px solid #eee;\n    border-radius: 1rem;\n    padding: 0 2rem;\n    align-items: center;\n    justify-content: stretch; }\n    .radio__container--full:not(:last-child) {\n      margin-right: 0;\n      margin-bottom: 1rem; }\n    .radio__container--full .radio__label {\n      padding: 1rem;\n      width: 100%; }\n\n.radio__input {\n  margin-right: 1rem; }\n\n.radio__label {\n  color: #333;\n  padding: 2rem 1rem; }\n\n.radio__group .input__label {\n  top: 2px;\n  left: 2rem;\n  font-weight: 500;\n  opacity: 1;\n  background: #fff;\n  z-index: 11; }\n\n.radio__icon {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 1rem; }\n\n.file {\n  display: flex;\n  flex-direction: column;\n  border: 1px solid #f8faff;\n  border-radius: 1rem;\n  padding: 1.5rem 1rem 1rem; }\n  .file__icon {\n    width: 2rem;\n    height: 2rem;\n    margin-right: 1rem; }\n  .file__button {\n    position: relative;\n    overflow: hidden; }\n  .file__buttons {\n    display: flex; }\n  .file__input {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    opacity: 0;\n    cursor: pointer; }\n  .file__preview {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    border-bottom: 1px solid #f8faff;\n    padding-bottom: 1rem;\n    margin-bottom: 1rem; }\n    .file__preview img {\n      width: 100%;\n      height: 20rem;\n      object-fit: cover;\n      margin-bottom: 1rem;\n      border-radius: 1rem; }\n  .file .input__label {\n    top: 2px;\n    left: 2rem;\n    font-weight: 500;\n    opacity: 1;\n    background: #fff;\n    z-index: 11; }\n  .file__name {\n    font-style: italic;\n    font-size: 1.4rem;\n    font-weight: 300; }\n  .file .errmsg {\n    padding: 1rem 0rem 0.5rem; }\n\n.search__group {\n  display: flex;\n  align-items: center;\n  font-size: 1.4rem;\n  color: #333; }\n\n.search__text {\n  border: 1px solid #f9fafb;\n  border-top-left-radius: 2.4rem;\n  border-bottom-left-radius: 2.4rem;\n  padding: 0 3rem;\n  height: 4.8rem;\n  display: flex;\n  align-items: center;\n  font-weight: 500;\n  color: #333; }\n\n.search__input {\n  border: 1px solid #f9fafb;\n  border-top-right-radius: 2.4rem;\n  border-bottom-right-radius: 2.4rem;\n  padding: 0 2rem;\n  height: 4.8rem;\n  min-width: 30rem;\n  width: 100%;\n  outline: none;\n  background: transparent;\n  padding: 1rem 1rem 1rem 2rem;\n  z-index: 10;\n  margin-left: -1px; }\n  .search__input::placeholder {\n    font-style: italic; }\n\n.search__icon {\n  position: absolute;\n  color: currentColor;\n  top: 50%;\n  right: 3rem;\n  transform: translateY(-50%); }\n';
styleInject(css_248z$5);

var ErrMsg = function (_a) {
  var msg = _a.msg;
  return React__default["default"].createElement(
    "div",
    { className: "errmsg" },
    msg
  );
};

// All utilities functions
var checkErrors = function (value, setErrMsg, rules) {
  // No rules, do not execute any thing
  if (!rules) {
    return;
  }
  var errors = [];
  // Handle all rules
  for (var i = 0; i < rules.length && errors.length === 0; i++) {
    var _a = rules[i],
      limiter = _a.limiter,
      errMsg = _a.errMsg,
      type = _a.type,
      min = _a.min,
      max = _a.max,
      maxSize = _a.maxSize,
      matchValue = _a.matchValue;
    switch (type) {
      case "required":
        if (typeof value === "string" && value.length === 0) {
          errors.push(errMsg);
        }
        break;
      case "min":
        if (
          typeof value !== "string" ||
          typeof min !== "number" ||
          min === undefined
        )
          break;
        if (parseInt(value) < min) {
          errors.push(errMsg);
        }
        break;
      case "max":
        if (
          typeof value !== "string" ||
          typeof max !== "number" ||
          max === undefined
        )
          break;
        if (parseInt(value) > max) {
          errors.push(errMsg);
        }
        break;
      case "regex":
        if (!limiter || typeof value !== "string") return;
        var regex = new RegExp(limiter);
        if (!regex.test(value)) {
          errors.push(errMsg);
        }
        break;
      case "maxSize":
        if (!maxSize || typeof value === "string") return;
        if (value.size / 1024 > maxSize) {
          errors.push(errMsg);
        }
        break;
      case "match":
        if (!matchValue || typeof value !== "string") return;
        if (matchValue !== value) {
          errors.push(errMsg);
        }
        break;
    }
  }
  setErrMsg(errors);
  return errors.length === 0;
};

// 1. Need to upload the image - Done
// 2. Handle upload image - Done
// 2.1 Get the file uploaded as a file
// 2.2 Get the file as an object
// 3. Decide if you handle upload or let the user handle it
// 4. Call the parent handler on upload
// 5. Display the preview
// 6. Make it pretty
var File = function (props) {
  var _a = React.useState([]),
    errMsg = _a[0],
    setErrMsg = _a[1];
  var name = props.name,
    rules = props.rules,
    accept = props.accept,
    label = props.label,
    value = props.value;
  var fileReader = new FileReader();
  var _b = React.useState(value),
    imageBlob = _b[0],
    setImageBlob = _b[1];
  var _c = React.useState({}),
    image = _c[0],
    setImage = _c[1];
  var fileInputElement = React.useRef(null);
  fileReader.onload = function (_a) {
    var target = _a.target;
    if (!target) return;
    var result = target.result;
    setImageBlob(!!result ? result : {});
  };
  var onChange = function (e) {
    var files = e.target.files;
    if (!files) return;
    if (files.length > 0) {
      // If the file size is greater than the max file
      // size dont upload
      // Handle all the rules
      var isValid = checkErrors(files[0], setErrMsg, rules);
      if (!isValid) {
        fileReader.readAsDataURL(files[0]);
        setImage(files[0]);
        return props.onChange({ value: files[0], isValid: isValid });
      }
    }
  };
  // Clear the image from blob and from the parent
  var clearImage = function () {
    props.onChange({ value: "", isValid: !!errMsg.length });
    setImageBlob("");
    setErrMsg([]);
    // Clear the value of the input element
    if (fileInputElement.current) {
      fileInputElement.current.value = "";
    }
  };
  return React__default["default"].createElement(
    "div",
    { className: "file" },
    React__default["default"].createElement(
      "div",
      { className: "file__main" },
      !!imageBlob
        ? React__default["default"].createElement(
            "div",
            { className: "file__preview" },
            React__default["default"].createElement("img", {
              src: imageBlob,
              alt: name,
            }),
            React__default["default"].createElement(
              "span",
              { className: "file__name" },
              image.name
            )
          )
        : "",
      React__default["default"].createElement(
        "div",
        { className: "file__buttons" },
        React__default["default"].createElement(
          "div",
          { className: "file__button" },
          React__default["default"].createElement(
            "div",
            { className: "file__overlay" },
            React__default["default"].createElement(
              Button,
              { type: "grey" },
              React__default["default"].createElement(
                "span",
                { className: "file__icon" },
                React__default["default"].createElement(
                  "svg",
                  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
                  React__default["default"].createElement("path", {
                    d:
                      "M16 16h-3v5h-2v-5h-3l4-4 4 4zm3.479-5.908c-.212-3.951-3.473-7.092-7.479-7.092s-7.267 3.141-7.479 7.092c-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h3.5v-2h-3.5c-1.93 0-3.5-1.57-3.5-3.5 0-2.797 2.479-3.833 4.433-3.72-.167-4.218 2.208-6.78 5.567-6.78 3.453 0 5.891 2.797 5.567 6.78 1.745-.046 4.433.751 4.433 3.72 0 1.93-1.57 3.5-3.5 3.5h-3.5v2h3.5c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.521-5.408z",
                  })
                )
              ),
              "Upload"
            )
          ),
          React__default["default"].createElement("input", {
            className: "file__input",
            type: "file",
            onChange: onChange,
            accept: accept,
            ref: fileInputElement,
          })
        ),
        !!imageBlob
          ? React__default["default"].createElement(
              "div",
              { className: "file__clear" },
              React__default["default"].createElement(
                Button,
                { type: "text", onClick: clearImage },
                "Clear"
              )
            )
          : ""
      ),
      React__default["default"].createElement(
        "div",
        { className: "input__err" },
        errMsg.map(function (msg) {
          return React__default["default"].createElement(ErrMsg, {
            key: msg,
            msg: msg,
          });
        })
      )
    ),
    React__default["default"].createElement(
      "div",
      { className: "input__label" },
      label
    )
  );
};

/*
  Usage:

  ## With Label

  <Input type="text" label="Username" name="username"
  rules={[
          type: 'required', errMsg: 'Username is required' },
          {
            type: 'regex',
            errMsg: 'Username does not match the required items',
            limiter:
              '/^(?=.*d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/',
          },
  ]}
  className=""
  value=""
  onChange=""
  />

  ## With Icon

  <Input type="text" label="Username" name="username"
  rules={[
          type: 'required', errMsg: 'Username is required' },
          {
            type: 'regex',
            errMsg: 'Username does not match the required items',
            limiter:
              '/^(?=.*d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/',
          },
  ]}
  className=""
  value=""
  onChange=""
  icon={<svg></svg>}
  />

*/
var Text = function (props) {
  var _a = React.useState([]),
    errMsg = _a[0],
    setErrMsg = _a[1];
  var _b = React.useState(false),
    touched = _b[0],
    setTouched = _b[1];
  var rules = props.rules,
    label = props.label,
    icon = props.icon,
    name = props.name,
    className = props.className,
    type = props.type,
    autoFocus = props.autoFocus,
    value = props.value;
  var onChange = function (e) {
    var value = e.target.value;
    // Handle all the rules
    var isValid = checkErrors(value, setErrMsg, rules);
    // Touched state
    setTouched(true);
    return props.onChange({
      value: value,
      isValid: isValid,
    });
  };
  // If touched and error show the error border, else success border
  var showErrState = touched
    ? errMsg.length > 0
      ? "input--error"
      : "input--success"
    : "";
  // If icon is provided, show the icon text
  if (!!icon) {
    return React__default["default"].createElement(
      "div",
      { className: "input__group" },
      React__default["default"].createElement(
        "div",
        { className: "input__main" },
        React__default["default"].createElement("input", {
          autoFocus: autoFocus,
          value: value,
          type: type,
          name: name,
          className:
            "input  input--text input__with-icon " +
            showErrState +
            " " +
            className,
          onChange: onChange,
          placeholder: label,
          required: true,
        }),
        React__default["default"].createElement(
          "span",
          { className: "input__icon" },
          icon
        )
      ),
      React__default["default"].createElement(
        "div",
        { className: "input__err" },
        errMsg.map(function (msg) {
          return React__default["default"].createElement(ErrMsg, {
            key: msg,
            msg: msg,
          });
        })
      )
    );
  }
  // show the label format
  return React__default["default"].createElement(
    "div",
    { className: "input__group" },
    React__default["default"].createElement(
      "div",
      { className: "input__main" },
      React__default["default"].createElement("input", {
        type: type,
        name: name,
        value: value,
        className:
          "input input--" +
          type +
          " input__with-label " +
          showErrState +
          " " +
          className,
        onChange: onChange,
        required: true,
      }),
      React__default["default"].createElement(
        "span",
        { className: "input__label" },
        label
      )
    ),
    React__default["default"].createElement(
      "div",
      { className: "input__err" },
      errMsg.map(function (msg) {
        return React__default["default"].createElement(ErrMsg, {
          key: msg,
          msg: msg,
        });
      })
    )
  );
};

var Radio = function (props) {
  var label = props.label,
    name = props.name,
    className = props.className,
    type = props.type,
    options = props.options,
    value = props.value,
    full = props.full;
  var onCheckboxChange = function (e) {
    var value = e.target.value;
    if (!Array.isArray(props.value)) return;
    // Either add or remove the clicked element
    if (props.value.indexOf(value) < 0) {
      return props.onChange({
        value: __spreadArrays(props.value, [value]),
        isValid: true,
      });
    } else {
      return props.onChange({
        value: props.value.filter(function (v) {
          return v !== value;
        }),
        isValid: true,
      });
    }
  };
  var onRadioChange = function (e) {
    var value = e.target.value;
    return props.onChange({ value: value, isValid: true });
  };
  var fullWidthContainer = !!full ? "radio__container--full" : "";
  var fullWidthMain = !!full ? "radio__main--full" : "";
  var fullWidthGroup = !!full ? "radio__group--full" : "";
  // If icon is provided, show the icon
  if (type === "checkbox") {
    return React__default["default"].createElement(
      "div",
      { className: "radio__group " + className + " " + fullWidthGroup },
      React__default["default"].createElement(
        "div",
        { className: "radio__main " + fullWidthMain },
        !!options
          ? options.map(function (opt) {
              var id = opt.value + Math.random() * 10;
              var active =
                Array.isArray(value) && value.indexOf(opt.value) >= 0;
              var activeClass = active ? "radio__active" : "";
              return React__default["default"].createElement(
                "div",
                {
                  className:
                    "radio__container " +
                    activeClass +
                    " " +
                    fullWidthContainer,
                  key: opt.value,
                },
                React__default["default"].createElement("input", {
                  className: "radio__input ",
                  type: "checkbox",
                  id: id,
                  name: name,
                  value: opt.value,
                  checked: active,
                  onChange: onCheckboxChange,
                }),
                React__default["default"].createElement("label", {
                  className: "radio__label",
                  htmlFor: id,
                  dangerouslySetInnerHTML: {
                    __html: opt.label,
                  },
                })
              );
            })
          : ""
      ),
      !full
        ? React__default["default"].createElement(
            "span",
            { className: "input__label" },
            label
          )
        : ""
    );
  }
  return React__default["default"].createElement(
    "div",
    { className: "radio__group " + className + " " + fullWidthGroup },
    React__default["default"].createElement(
      "div",
      { className: "radio__main " + fullWidthMain },
      !!options
        ? options.map(function (opt) {
            var active = value === opt.value;
            var activeClass = active ? "radio__active" : "";
            return React__default["default"].createElement(
              "div",
              {
                className:
                  "radio__container " + activeClass + " " + fullWidthContainer,
                key: opt.value,
              },
              React__default["default"].createElement("input", {
                className: "radio__input ",
                type: "radio",
                id: opt.value,
                name: name,
                value: opt.value,
                checked: active,
                onChange: onRadioChange,
              }),
              React__default["default"].createElement("label", {
                className: "radio__label",
                dangerouslySetInnerHTML: {
                  __html: opt.label,
                },
                htmlFor: opt.value,
              })
            );
          })
        : ""
    ),
    React__default["default"].createElement(
      "span",
      { className: "input__label" },
      label
    )
  );
};

/*
  Usage:


  <Input type="search" label="Search" name="search"
  placeholder=""
  className=""
  value=""
  onChange=""
  />
*/
var Search = function (props) {
  var _a = React.useState([]),
    errMsg = _a[0],
    setErrMsg = _a[1];
  var placeholder = props.placeholder,
    name = props.name,
    className = props.className,
    type = props.type,
    autoFocus = props.autoFocus,
    value = props.value;
  var onChange = function (e) {
    var value = e.target.value;
    // Handle all the rules
    var isValid = checkErrors(value, setErrMsg, [
      { type: "required", errMsg: "" },
    ]);
    return props.onChange({ value: value, isValid: isValid });
  };
  // If icon is provided, show the icon text
  return React__default["default"].createElement(
    "div",
    { className: "search__group" },
    React__default["default"].createElement(
      "span",
      { className: "search__text" },
      "Search"
    ),
    React__default["default"].createElement("input", {
      autoFocus: autoFocus,
      value: value,
      type: type,
      name: name,
      className: "search__input  " + className,
      onChange: onChange,
      placeholder: placeholder,
      required: true,
    }),
    React__default["default"].createElement(
      "span",
      { className: "search__icon" },
      React__default["default"].createElement(gr.GrSearch, null)
    )
  );
};

var Input = function (props) {
  switch (props.type) {
    case "file":
      return React__default["default"].createElement(File, __assign({}, props));
    case "search":
      return React__default["default"].createElement(
        Search,
        __assign({}, props)
      );
    case "checkbox":
    case "radio":
      return React__default["default"].createElement(
        Radio,
        __assign({}, props)
      );
    default:
      return React__default["default"].createElement(Text, __assign({}, props));
  }
};

var css_248z$6 =
  '@import url("https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@500;700&family=Roboto:wght@300;400;500&display=swap");\n/*\n0 - 400px:    Mini - phone\n400 - 600px:    Phone\n600 - 900px:    Tablet portrait\n900 - 1200px:   Tablet landscape\n[1200 - 1800] is where our normal styles apply\n1800px + :      Big desktop\n$breakpoint arguement choices:\n- mini-phone\n- phone\n- tab-port\n- tab-land\n- big-desktop\nORDER: Base + typography > general layout + grid > page layout > components\n1em = 16px\n*/\n*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n  position: relative; }\n\nol,\nul,\ndl {\n  margin: 0; }\n\nhtml {\n  font-size: 62.5%;\n  scroll-behavior: smooth; }\n  @media only screen and (max-width: 75em) {\n    html {\n      font-size: 56.25%; } }\n  @media only screen and (max-width: 56.25em) {\n    html {\n      font-size: 50%; } }\n  @media only screen and (max-width: 25em) {\n    html {\n      font-size: 37.5%; } }\n  @media only screen and (min-width: 112.5em) {\n    html {\n      font-size: 75%; } }\n\nbody {\n  box-sizing: border-box;\n  overflow-x: hidden !important;\n  -webkit-font-smoothing: antialiased;\n  color: #333;\n  font-family: "Roboto", sans-serif;\n  font-size: 1.6rem; }\n  @media only screen and (max-width: 56.25em) {\n    body {\n      padding: 0; } }\n\nimg {\n  width: 100%; }\n\nfigure {\n  margin: 0; }\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  margin: 0;\n  color: inherit;\n  font-size: inherit;\n  font-family: inherit;\n  line-height: inherit; }\n\ntextarea {\n  touch-action: manipulation;\n  -webkit-appearance: none;\n  overflow: auto;\n  resize: vertical; }\n\na {\n  text-decoration: none;\n  color: #333; }\n\np {\n  margin: 0; }\n\n.u-center-text {\n  text-align: center !important; }\n\n.u-center-right {\n  text-align: right !important; }\n\n.u-center-flex-cross {\n  align-self: center; }\n\n.u-margin-bottom-nano {\n  margin-bottom: 1rem !important; }\n\n.u-margin-bottom-small {\n  margin-bottom: 1.5rem !important; }\n\n.u-margin-bottom-medium {\n  margin-bottom: 3rem !important; }\n  @media only screen and (max-width: 56.25em) {\n    .u-margin-bottom-medium {\n      margin-bottom: 3rem !important; } }\n\n.u-margin-bottom-large {\n  margin-bottom: 6rem !important; }\n  @media only screen and (max-width: 56.25em) {\n    .u-margin-bottom-large {\n      margin-bottom: 6rem !important; } }\n\n.u-margin-bottom-big {\n  margin-bottom: 8rem !important; }\n  @media only screen and (max-width: 56.25em) {\n    .u-margin-bottom-big {\n      margin-bottom: 8rem !important; } }\n\n.u-margin-bottom-huge {\n  margin-bottom: 10rem !important; }\n\n.u-margin-top-big {\n  margin-top: 8rem !important; }\n\n.u-margin-top-huge {\n  margin-top: 10rem !important; }\n\n/*\n* Text utilities\n*/\n.bold {\n  font-weight: 700; }\n\n.regular {\n  font-weight: 400; }\n\n@keyframes rotate {\n  0% {\n    transform: rotateZ(0); }\n  50% {\n    transform: rotateZ(45deg); }\n  100% {\n    transform: rotateZ(360deg); } }\n\n.row {\n  display: flex;\n  margin: 0 auto;\n  max-width: 114rem;\n  position: relative;\n  width: 100%;\n  max-height: fit-content;\n  flex-wrap: wrap; }\n  .row:not(:last-child) {\n    margin-bottom: 2rem; }\n\n.col {\n  align-items: stretch; }\n  .col:not(:last-child) {\n    margin-right: 3rem; }\n  .col-1-of-1 {\n    flex-basis: 100%; }\n  .col-1-of-2 {\n    flex-basis: calc((100% - 3rem) / 2); }\n  .col-1-of-3 {\n    flex-basis: calc((100% - 2 * 3rem) / 3); }\n  .col-2-of-3 {\n    flex-basis: calc( 2 * ((100% - 2 * 3rem) / 3) + 3rem); }\n  .col-1-of-4 {\n    flex-basis: calc((100% - 3 * 3rem) / 4); }\n  .col-2-of-4 {\n    flex-basis: calc( 2 * ((100% - 3 * 3rem) / 4) + 3rem); }\n  .col-3-of-4 {\n    flex-basis: calc( 3 * ((100% - 3 * 3rem) / 4) + 2 * 3rem); }\n  .col-1-of-5 {\n    flex-basis: calc((100% - 4 * 3rem) / 5); }\n  .col-2-of-5 {\n    flex-basis: calc( 2 * calc((100% - 4 * 3rem) / 5) + 3rem); }\n  .col-3-of-5 {\n    flex-basis: calc( 3 * calc((100% - 4 * 3rem) / 5) + 2 * 3rem); }\n  .col .col-4-of-5 {\n    flex-basis: calc( 4 * ((100% - 4 * 3rem) / 5) + 3 * 3rem); }\n';
styleInject(css_248z$6);

var Row = function (props) {
  return React__default["default"].createElement(
    "div",
    __assign({}, props, { className: "row " + props.className }),
    props.children
  );
};

var Col = function (props) {
  return React__default["default"].createElement(
    "div",
    __assign({}, props, {
      className:
        "col col-" + props.span + "-of-" + props.total + " " + props.className,
    }),
    props.children
  );
};

var css_248z$7 =
  '@import url("https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@500;700&family=Roboto:wght@300;400;500&display=swap");\n/*\n0 - 400px:    Mini - phone\n400 - 600px:    Phone\n600 - 900px:    Tablet portrait\n900 - 1200px:   Tablet landscape\n[1200 - 1800] is where our normal styles apply\n1800px + :      Big desktop\n$breakpoint arguement choices:\n- mini-phone\n- phone\n- tab-port\n- tab-land\n- big-desktop\nORDER: Base + typography > general layout + grid > page layout > components\n1em = 16px\n*/\n*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n  position: relative; }\n\nol,\nul,\ndl {\n  margin: 0; }\n\nhtml {\n  font-size: 62.5%;\n  scroll-behavior: smooth; }\n  @media only screen and (max-width: 75em) {\n    html {\n      font-size: 56.25%; } }\n  @media only screen and (max-width: 56.25em) {\n    html {\n      font-size: 50%; } }\n  @media only screen and (max-width: 25em) {\n    html {\n      font-size: 37.5%; } }\n  @media only screen and (min-width: 112.5em) {\n    html {\n      font-size: 75%; } }\n\nbody {\n  box-sizing: border-box;\n  overflow-x: hidden !important;\n  -webkit-font-smoothing: antialiased;\n  color: #333;\n  font-family: "Roboto", sans-serif;\n  font-size: 1.6rem; }\n  @media only screen and (max-width: 56.25em) {\n    body {\n      padding: 0; } }\n\nimg {\n  width: 100%; }\n\nfigure {\n  margin: 0; }\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  margin: 0;\n  color: inherit;\n  font-size: inherit;\n  font-family: inherit;\n  line-height: inherit; }\n\ntextarea {\n  touch-action: manipulation;\n  -webkit-appearance: none;\n  overflow: auto;\n  resize: vertical; }\n\na {\n  text-decoration: none;\n  color: #333; }\n\np {\n  margin: 0; }\n\n.u-center-text {\n  text-align: center !important; }\n\n.u-center-right {\n  text-align: right !important; }\n\n.u-center-flex-cross {\n  align-self: center; }\n\n.u-margin-bottom-nano {\n  margin-bottom: 1rem !important; }\n\n.u-margin-bottom-small {\n  margin-bottom: 1.5rem !important; }\n\n.u-margin-bottom-medium {\n  margin-bottom: 3rem !important; }\n  @media only screen and (max-width: 56.25em) {\n    .u-margin-bottom-medium {\n      margin-bottom: 3rem !important; } }\n\n.u-margin-bottom-large {\n  margin-bottom: 6rem !important; }\n  @media only screen and (max-width: 56.25em) {\n    .u-margin-bottom-large {\n      margin-bottom: 6rem !important; } }\n\n.u-margin-bottom-big {\n  margin-bottom: 8rem !important; }\n  @media only screen and (max-width: 56.25em) {\n    .u-margin-bottom-big {\n      margin-bottom: 8rem !important; } }\n\n.u-margin-bottom-huge {\n  margin-bottom: 10rem !important; }\n\n.u-margin-top-big {\n  margin-top: 8rem !important; }\n\n.u-margin-top-huge {\n  margin-top: 10rem !important; }\n\n/*\n* Text utilities\n*/\n.bold {\n  font-weight: 700; }\n\n.regular {\n  font-weight: 400; }\n\n@keyframes rotate {\n  0% {\n    transform: rotateZ(0); }\n  50% {\n    transform: rotateZ(45deg); }\n  100% {\n    transform: rotateZ(360deg); } }\n\n.card {\n  padding: 3rem;\n  background: #fff;\n  border-radius: 4px;\n  min-width: 10rem;\n  width: 100%; }\n  .card--border {\n    box-shadow: 0 1px 3px 0 #d9d9d9, 0 0 0 1px #d9d9d9; }\n  .card--shadow {\n    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23); }\n';
styleInject(css_248z$7);

var Card = function (props) {
  return React__default["default"].createElement(
    "div",
    __assign({}, props, {
      className: "card card--" + props.type + " " + props.className,
    }),
    props.children
  );
};

var css_248z$8 =
  '@import url("https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@500;700&family=Roboto:wght@300;400;500&display=swap");\n/*\n0 - 400px:    Mini - phone\n400 - 600px:    Phone\n600 - 900px:    Tablet portrait\n900 - 1200px:   Tablet landscape\n[1200 - 1800] is where our normal styles apply\n1800px + :      Big desktop\n$breakpoint arguement choices:\n- mini-phone\n- phone\n- tab-port\n- tab-land\n- big-desktop\nORDER: Base + typography > general layout + grid > page layout > components\n1em = 16px\n*/\n*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n  position: relative; }\n\nol,\nul,\ndl {\n  margin: 0; }\n\nhtml {\n  font-size: 62.5%;\n  scroll-behavior: smooth; }\n  @media only screen and (max-width: 75em) {\n    html {\n      font-size: 56.25%; } }\n  @media only screen and (max-width: 56.25em) {\n    html {\n      font-size: 50%; } }\n  @media only screen and (max-width: 25em) {\n    html {\n      font-size: 37.5%; } }\n  @media only screen and (min-width: 112.5em) {\n    html {\n      font-size: 75%; } }\n\nbody {\n  box-sizing: border-box;\n  overflow-x: hidden !important;\n  -webkit-font-smoothing: antialiased;\n  color: #333;\n  font-family: "Roboto", sans-serif;\n  font-size: 1.6rem; }\n  @media only screen and (max-width: 56.25em) {\n    body {\n      padding: 0; } }\n\nimg {\n  width: 100%; }\n\nfigure {\n  margin: 0; }\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  margin: 0;\n  color: inherit;\n  font-size: inherit;\n  font-family: inherit;\n  line-height: inherit; }\n\ntextarea {\n  touch-action: manipulation;\n  -webkit-appearance: none;\n  overflow: auto;\n  resize: vertical; }\n\na {\n  text-decoration: none;\n  color: #333; }\n\np {\n  margin: 0; }\n\n.u-center-text {\n  text-align: center !important; }\n\n.u-center-right {\n  text-align: right !important; }\n\n.u-center-flex-cross {\n  align-self: center; }\n\n.u-margin-bottom-nano {\n  margin-bottom: 1rem !important; }\n\n.u-margin-bottom-small {\n  margin-bottom: 1.5rem !important; }\n\n.u-margin-bottom-medium {\n  margin-bottom: 3rem !important; }\n  @media only screen and (max-width: 56.25em) {\n    .u-margin-bottom-medium {\n      margin-bottom: 3rem !important; } }\n\n.u-margin-bottom-large {\n  margin-bottom: 6rem !important; }\n  @media only screen and (max-width: 56.25em) {\n    .u-margin-bottom-large {\n      margin-bottom: 6rem !important; } }\n\n.u-margin-bottom-big {\n  margin-bottom: 8rem !important; }\n  @media only screen and (max-width: 56.25em) {\n    .u-margin-bottom-big {\n      margin-bottom: 8rem !important; } }\n\n.u-margin-bottom-huge {\n  margin-bottom: 10rem !important; }\n\n.u-margin-top-big {\n  margin-top: 8rem !important; }\n\n.u-margin-top-huge {\n  margin-top: 10rem !important; }\n\n/*\n* Text utilities\n*/\n.bold {\n  font-weight: 700; }\n\n.regular {\n  font-weight: 400; }\n\n@keyframes rotate {\n  0% {\n    transform: rotateZ(0); }\n  50% {\n    transform: rotateZ(45deg); }\n  100% {\n    transform: rotateZ(360deg); } }\n\n.notification-container {\n  font-size: 1.4rem;\n  box-sizing: border-box;\n  position: fixed;\n  z-index: 999999; }\n\n.top-right {\n  top: 1.2rem;\n  right: 1.2rem;\n  transition: transform 0.6s ease-in-out;\n  animation: toast-in-right 0.7s; }\n\n.bottom-right {\n  bottom: 1.2rem;\n  right: 1.2rem;\n  transition: transform 0.6s ease-in-out;\n  animation: toast-in-right 0.7s; }\n\n.top-left {\n  top: 1.2rem;\n  left: 1.2rem;\n  transition: transform 0.6s ease-in;\n  animation: toast-in-left 0.7s; }\n\n.bottom-left {\n  bottom: 1.2rem;\n  left: 1.2rem;\n  transition: transform 0.6s ease-in;\n  animation: toast-in-left 0.7s; }\n\n.notification {\n  background: #fff;\n  transition: 0.3s ease;\n  position: relative;\n  pointer-events: auto;\n  overflow: hidden;\n  margin: 0 0 6px;\n  padding: 3rem;\n  margin-bottom: 1.5rem;\n  width: fit-content;\n  border-radius: 3px 3px 3px 3px;\n  box-shadow: 0 0 1rem #999;\n  color: #000;\n  opacity: 0.9;\n  background-position: 1.5rem;\n  background-repeat: no-repeat; }\n\n.notification:hover {\n  box-shadow: 0 0 1.2rem #fff;\n  opacity: 1;\n  cursor: pointer; }\n\n.notification-title {\n  font-weight: 700;\n  font-size: 1.6rem;\n  text-align: left;\n  margin-top: 0;\n  margin-bottom: 1rem;\n  z-index: 1; }\n\n.notification-message {\n  margin: 0;\n  text-align: left;\n  line-height: 1.6;\n  z-index: 2; }\n\n.notification-image {\n  float: left;\n  margin-right: 1.5rem; }\n\n.notification-image img {\n  width: 3rem;\n  height: 3rem; }\n\n.toast {\n  min-height: 5rem;\n  height: fit-content;\n  width: 36rem;\n  color: #fff;\n  padding: 2.5rem; }\n\n.notification-container button {\n  font-weight: 700;\n  color: #fff;\n  outline: none;\n  border: none;\n  text-shadow: 0 1px 0 #fff;\n  opacity: 0.8;\n  line-height: 1;\n  font-size: 1.6rem;\n  padding: 0;\n  cursor: pointer;\n  background: 0 0;\n  border: 0;\n  z-index: 10; }\n\n.notification-close {\n  position: absolute;\n  right: 2rem;\n  top: 2rem;\n  width: 2rem;\n  height: 2rem;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n@keyframes toast-in-right {\n  from {\n    transform: translateX(100%); }\n  to {\n    transform: translateX(0); } }\n\n@keyframes toast-in-left {\n  from {\n    transform: translateX(-100%); }\n  to {\n    transform: translateX(0); } }\n';
styleInject(css_248z$8);

var Notification = function (_a) {
  var toastList = _a.toastList,
    position = _a.position,
    autoDelete = _a.autoDelete,
    dismissTime = _a.dismissTime;
  var _b = React.useState(toastList),
    list = _b[0],
    setList = _b[1];
  React.useEffect(
    function () {
      setList(__spreadArrays(toastList));
      // eslint-disable-next-line
    },
    [toastList]
  );
  React.useEffect(
    function () {
      var interval = setInterval(function () {
        if (autoDelete && toastList.length && list.length) {
          deleteToast(toastList[0].id);
        }
      }, dismissTime);
      return function () {
        clearInterval(interval);
      };
      // eslint-disable-next-line
    },
    [toastList, autoDelete, dismissTime, list]
  );
  var deleteToast = function (id) {
    var listItemIndex = list.findIndex(function (e) {
      return e.id === id;
    });
    var toastListItem = toastList.findIndex(function (e) {
      return e.id === id;
    });
    list.splice(listItemIndex, 1);
    toastList.splice(toastListItem, 1);
    setList(__spreadArrays(list));
  };
  return React__default["default"].createElement(
    React__default["default"].Fragment,
    null,
    React__default["default"].createElement(
      "div",
      { className: "notification-container " + position },
      list.map(function (toast, i) {
        return React__default["default"].createElement(
          "div",
          {
            key: i,
            className: "notification toast " + position,
            style: { backgroundColor: toast.backgroundColor },
          },
          React__default["default"].createElement(
            "div",
            {
              className: "notification-close",
              onClick: function () {
                return deleteToast(toast.id);
              },
            },
            React__default["default"].createElement("button", null, "X")
          ),
          React__default["default"].createElement(
            "div",
            { className: "notification-image" },
            toast.icon
          ),
          React__default["default"].createElement(
            "div",
            null,
            React__default["default"].createElement(
              "p",
              { className: "notification-title" },
              toast.title
            ),
            React__default["default"].createElement(
              "p",
              { className: "notification-message" },
              toast.description
            )
          )
        );
      })
    )
  );
};

exports.Button = Button;
exports.Card = Card;
exports.Col = Col;
exports.ErrMsg = ErrMsg;
exports.File = File;
exports.H1 = H1;
exports.H2 = H2;
exports.H3 = H3;
exports.H4 = H4;
exports.Input = Input;
exports.Li = Li;
exports.Loading = Loading;
exports.Menu = Menu;
exports.MenuItem = MenuItem;
exports.Modal = Modal;
exports.Nav = Nav;
exports.NavActions = NavActions;
exports.NavMenu = NavMenu;
exports.Notification = Notification;
exports.OList = OList;
exports.Paragraph = Paragraph;
exports.Radio = Radio;
exports.Row = Row;
exports.Sidebar = Sidebar;
exports.Text = Text;
exports.UList = UList;
//# sourceMappingURL=index.js.map
