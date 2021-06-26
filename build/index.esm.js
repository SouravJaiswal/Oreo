import React, {
  useState,
  useContext,
  useRef,
  useEffect,
  createElement,
  Component,
  memo,
  useMemo,
  createContext,
  useCallback,
  PureComponent,
  Fragment as Fragment$1,
} from "react";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { GrSearch } from "react-icons/gr";
import _ from "lodash";
import merge from "lodash/merge";
import get$1 from "lodash/get";
import set from "lodash/set";
import last$1 from "lodash/last";
import "lodash/isArray";
import "lodash/isString";
import {
  range,
  bisect,
  tickStep,
  ticks,
  tickIncrement,
  bisector,
} from "d3-array";
import isFunction$1 from "lodash/isFunction";
import without from "lodash/without";
import isEqual from "lodash/isEqual";
import "lodash/partialRight";
import isPlainObject$1 from "lodash/isPlainObject";
import pick from "lodash/pick";
import isNumber from "lodash/isNumber";
import uniq from "lodash/uniq";
import uniqBy from "lodash/uniqBy";
import sortBy from "lodash/sortBy";
import isDate from "lodash/isDate";

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
  '@import url("https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;500;700&family=Roboto:wght@300;400;500&display=swap");\n/*\n0 - 400px:    Mini - phone - xs\n400 - 600px:    Phone - sm\n600 - 900px:    Tablet portrait - md\n900 - 1200px:   Tablet landscape - lg\n[1200 - 1800] is where our normal styles apply\n1800px + :      Big desktop - xl\n$breakpoint arguement choices:\n- mini-phone\n- phone\n- tab-port\n- tab-land\n- big-desktop\nORDER: Base + typography > general layout + grid > page layout > components\n1em = 16px\n*/\n*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  -webkit-box-sizing: inherit;\n          box-sizing: inherit;\n  position: relative; }\n\nol,\nul,\ndl {\n  margin: 0; }\n\nhtml {\n  font-size: 62.5%;\n  scroll-behavior: smooth; }\n  @media only screen and (max-width: 75em) {\n    html {\n      font-size: 56.25%; } }\n  @media only screen and (max-width: 56.25em) {\n    html {\n      font-size: 50%; } }\n  @media only screen and (max-width: 25em) {\n    html {\n      font-size: 37.5%; } }\n  @media only screen and (min-width: 112.5em) {\n    html {\n      font-size: 75%; } }\n\nbody {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  overflow-x: hidden !important;\n  -webkit-font-smoothing: antialiased;\n  color: #333;\n  font-family: "Roboto", sans-serif;\n  font-size: 1.6rem; }\n  @media only screen and (max-width: 75em) {\n    body {\n      font-size: 1.77rem; } }\n  @media only screen and (max-width: 56.25em) {\n    body {\n      font-size: 2rem;\n      padding: 0; } }\n  @media only screen and (max-width: 25em) {\n    body {\n      font-size: 2rem; } }\n  @media only screen and (min-width: 112.5em) {\n    body {\n      font-size: 1.3rem; } }\n\nimg {\n  width: 100%; }\n\nfigure {\n  margin: 0; }\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  margin: 0;\n  color: inherit;\n  font-size: inherit;\n  font-family: inherit;\n  line-height: inherit; }\n\ntextarea {\n  -ms-touch-action: manipulation;\n      touch-action: manipulation;\n  -webkit-appearance: none;\n  overflow: auto;\n  resize: vertical; }\n\na {\n  text-decoration: none;\n  color: #333; }\n\np {\n  margin: 0; }\n\n.u-center-text {\n  text-align: center !important; }\n\n.u-center-right {\n  text-align: right !important; }\n\n.u-center-flex-cross {\n  -ms-flex-item-align: center;\n      align-self: center; }\n\n.u-margin-bottom-nano {\n  margin-bottom: 1rem !important; }\n\n.u-margin-bottom-small {\n  margin-bottom: 1.5rem !important; }\n\n.u-margin-bottom-medium {\n  margin-bottom: 3rem !important; }\n  @media only screen and (max-width: 56.25em) {\n    .u-margin-bottom-medium {\n      margin-bottom: 3rem !important; } }\n\n.u-margin-bottom-large {\n  margin-bottom: 6rem !important; }\n  @media only screen and (max-width: 56.25em) {\n    .u-margin-bottom-large {\n      margin-bottom: 6rem !important; } }\n\n.u-margin-bottom-big {\n  margin-bottom: 8rem !important; }\n  @media only screen and (max-width: 56.25em) {\n    .u-margin-bottom-big {\n      margin-bottom: 8rem !important; } }\n\n.u-margin-bottom-huge {\n  margin-bottom: 10rem !important; }\n\n.u-margin-top-big {\n  margin-top: 8rem !important; }\n\n.u-margin-top-huge {\n  margin-top: 10rem !important; }\n\n/*\n* Text utilities\n*/\n.bold {\n  font-weight: 700; }\n\n.regular {\n  font-weight: 400; }\n\n@-webkit-keyframes rotate {\n  0% {\n    -webkit-transform: rotateZ(0);\n            transform: rotateZ(0); }\n  50% {\n    -webkit-transform: rotateZ(45deg);\n            transform: rotateZ(45deg); }\n  100% {\n    -webkit-transform: rotateZ(360deg);\n            transform: rotateZ(360deg); } }\n\n@keyframes rotate {\n  0% {\n    -webkit-transform: rotateZ(0);\n            transform: rotateZ(0); }\n  50% {\n    -webkit-transform: rotateZ(45deg);\n            transform: rotateZ(45deg); }\n  100% {\n    -webkit-transform: rotateZ(360deg);\n            transform: rotateZ(360deg); } }\n\n.button {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background: transparent;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  font-family: "Roboto", sans-serif;\n  font-weight: 500;\n  height: 4rem;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  line-height: 1.62;\n  padding: 0 2rem;\n  -webkit-transition: all 0.2s cubic-bezier(0.17, 0.67, 0.83, 0.67);\n  transition: all 0.2s cubic-bezier(0.17, 0.67, 0.83, 0.67);\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  outline: none; }\n  .button__animation {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n  .button__text {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  .button__animation .button__loading {\n    width: 1.6rem;\n    height: 1.6rem;\n    border-radius: 50%;\n    border: 0.15rem solid #fff;\n    border-top-color: transparent; }\n  .button--default {\n    background: #f8faff;\n    color: #0e63f4; }\n    .button--default:hover {\n      background-color: #0e63f4;\n      color: #fff; }\n  .button--default .button__loading {\n    border-color: #0e63f4;\n    border-top-color: #f8faff; }\n  .button--primary {\n    background-color: #0e63f4;\n    color: #fff; }\n    .button--primary:hover {\n      background-color: #124fd5; }\n  .button--danger {\n    background-color: #e74c3c;\n    color: #fff; }\n    .button--danger:hover {\n      background-color: #c72918; }\n  .button--success {\n    background-color: #67cb8b;\n    color: #fff; }\n    .button--success:hover {\n      background-color: #41be6e; }\n  .button--grey {\n    background-color: #e0e1e2;\n    color: #333; }\n    .button--grey:hover {\n      background-color: #cacbcd; }\n  .button--grey .button__loading {\n    border-color: currentColor;\n    border-top-color: #e0e1e2; }\n  .button--bordered {\n    border: 1px solid #333;\n    color: #333;\n    background: transparent; }\n    .button--bordered:hover {\n      background-color: #0e63f4;\n      border: #0e63f4;\n      color: #fff; }\n  .button--text {\n    background-color: transparent;\n    color: #333;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    padding: 0 1rem; }\n    .button--text::after {\n      background: #333;\n      content: " ";\n      height: 2px;\n      opacity: 0;\n      width: 100%;\n      -webkit-transition: all 0.1s cubic-bezier(0.17, 0.67, 0.83, 0.67);\n      transition: all 0.1s cubic-bezier(0.17, 0.67, 0.83, 0.67); }\n    .button--text:hover::after {\n      opacity: 1; }\n  .button[disabled], .button:disabled {\n    background-color: #e0e1e2;\n    color: #333;\n    cursor: not-allowed; }\n';
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
/* global Reflect, Promise */

var extendStatics = function (d, b) {
  extendStatics =
    Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array &&
      function (d, b) {
        d.__proto__ = b;
      }) ||
    function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };
  return extendStatics(d, b);
};

function __extends(d, b) {
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype =
    b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
}

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
  '@import url("https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;500;700&family=Roboto:wght@300;400;500&display=swap");\n/*\n0 - 400px:    Mini - phone - xs\n400 - 600px:    Phone - sm\n600 - 900px:    Tablet portrait - md\n900 - 1200px:   Tablet landscape - lg\n[1200 - 1800] is where our normal styles apply\n1800px + :      Big desktop - xl\n$breakpoint arguement choices:\n- mini-phone\n- phone\n- tab-port\n- tab-land\n- big-desktop\nORDER: Base + typography > general layout + grid > page layout > components\n1em = 16px\n*/\n*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  -webkit-box-sizing: inherit;\n          box-sizing: inherit;\n  position: relative; }\n\nol,\nul,\ndl {\n  margin: 0; }\n\nhtml {\n  font-size: 62.5%;\n  scroll-behavior: smooth; }\n  @media only screen and (max-width: 75em) {\n    html {\n      font-size: 56.25%; } }\n  @media only screen and (max-width: 56.25em) {\n    html {\n      font-size: 50%; } }\n  @media only screen and (max-width: 25em) {\n    html {\n      font-size: 37.5%; } }\n  @media only screen and (min-width: 112.5em) {\n    html {\n      font-size: 75%; } }\n\nbody {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  overflow-x: hidden !important;\n  -webkit-font-smoothing: antialiased;\n  color: #333;\n  font-family: "Roboto", sans-serif;\n  font-size: 1.6rem; }\n  @media only screen and (max-width: 75em) {\n    body {\n      font-size: 1.77rem; } }\n  @media only screen and (max-width: 56.25em) {\n    body {\n      font-size: 2rem;\n      padding: 0; } }\n  @media only screen and (max-width: 25em) {\n    body {\n      font-size: 2rem; } }\n  @media only screen and (min-width: 112.5em) {\n    body {\n      font-size: 1.3rem; } }\n\nimg {\n  width: 100%; }\n\nfigure {\n  margin: 0; }\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  margin: 0;\n  color: inherit;\n  font-size: inherit;\n  font-family: inherit;\n  line-height: inherit; }\n\ntextarea {\n  -ms-touch-action: manipulation;\n      touch-action: manipulation;\n  -webkit-appearance: none;\n  overflow: auto;\n  resize: vertical; }\n\na {\n  text-decoration: none;\n  color: #333; }\n\np {\n  margin: 0; }\n\n.u-center-text {\n  text-align: center !important; }\n\n.u-center-right {\n  text-align: right !important; }\n\n.u-center-flex-cross {\n  -ms-flex-item-align: center;\n      align-self: center; }\n\n.u-margin-bottom-nano {\n  margin-bottom: 1rem !important; }\n\n.u-margin-bottom-small {\n  margin-bottom: 1.5rem !important; }\n\n.u-margin-bottom-medium {\n  margin-bottom: 3rem !important; }\n  @media only screen and (max-width: 56.25em) {\n    .u-margin-bottom-medium {\n      margin-bottom: 3rem !important; } }\n\n.u-margin-bottom-large {\n  margin-bottom: 6rem !important; }\n  @media only screen and (max-width: 56.25em) {\n    .u-margin-bottom-large {\n      margin-bottom: 6rem !important; } }\n\n.u-margin-bottom-big {\n  margin-bottom: 8rem !important; }\n  @media only screen and (max-width: 56.25em) {\n    .u-margin-bottom-big {\n      margin-bottom: 8rem !important; } }\n\n.u-margin-bottom-huge {\n  margin-bottom: 10rem !important; }\n\n.u-margin-top-big {\n  margin-top: 8rem !important; }\n\n.u-margin-top-huge {\n  margin-top: 10rem !important; }\n\n/*\n* Text utilities\n*/\n.bold {\n  font-weight: 700; }\n\n.regular {\n  font-weight: 400; }\n\n@-webkit-keyframes rotate {\n  0% {\n    -webkit-transform: rotateZ(0);\n            transform: rotateZ(0); }\n  50% {\n    -webkit-transform: rotateZ(45deg);\n            transform: rotateZ(45deg); }\n  100% {\n    -webkit-transform: rotateZ(360deg);\n            transform: rotateZ(360deg); } }\n\n@keyframes rotate {\n  0% {\n    -webkit-transform: rotateZ(0);\n            transform: rotateZ(0); }\n  50% {\n    -webkit-transform: rotateZ(45deg);\n            transform: rotateZ(45deg); }\n  100% {\n    -webkit-transform: rotateZ(360deg);\n            transform: rotateZ(360deg); } }\n\n.loading {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex; }\n  .loading--default {\n    width: 3rem;\n    height: 3rem;\n    border-radius: 50%;\n    border: 0.3rem solid #cacbcd;\n    border-top-color: #333;\n    -webkit-animation: 0.8s spin infinite linear;\n            animation: 0.8s spin infinite linear; }\n    .loading--default--light {\n      border: 0.3rem solid #333;\n      border-top-color: transparent; }\n  .loading--modern svg {\n    width: 3rem;\n    height: 3rem;\n    fill: #333; }\n  .loading--modern--light svg {\n    fill: #cacbcd; }\n  .loading--line {\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n    .loading--line div {\n      width: 1rem;\n      height: 1rem;\n      margin: 0.3rem;\n      margin-top: 2rem;\n      background: #333;\n      border-radius: 50%;\n      -webkit-animation: 0.6s bounce infinite alternate;\n              animation: 0.6s bounce infinite alternate; }\n      .loading--line div:nth-child(2) {\n        -webkit-animation-delay: 0.3s;\n                animation-delay: 0.3s; }\n      .loading--line div:nth-child(3) {\n        -webkit-animation-delay: 0.6s;\n                animation-delay: 0.6s; }\n\n@-webkit-keyframes spin {\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes spin {\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@-webkit-keyframes bounce {\n  to {\n    opacity: 0.3;\n    -webkit-transform: translate3d(0, -1rem, 0);\n            transform: translate3d(0, -1rem, 0); } }\n\n@keyframes bounce {\n  to {\n    opacity: 0.3;\n    -webkit-transform: translate3d(0, -1rem, 0);\n            transform: translate3d(0, -1rem, 0); } }\n';
styleInject(css_248z$1);

var Loading = function (props) {
  switch (props.type) {
    case "modern":
      return React.createElement(Modern, __assign({}, props));
    case "line":
      return React.createElement(Line, __assign({}, props));
    default:
      return React.createElement("div", {
        className:
          "loading loading--default loading--default--" +
          props.shade +
          " " +
          props.className,
      });
  }
};
var Modern = function (props) {
  return React.createElement(
    "div",
    {
      className:
        "loading loading--modern loading--modern--" +
        props.shade +
        " " +
        props.className,
    },
    React.createElement(
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
      React.createElement(
        "path",
        {
          d:
            "M31.6,3.5C5.9,13.6-6.6,42.7,3.5,68.4c10.1,25.7,39.2,38.3,64.9,28.1l-3.1-7.9c-21.3,8.4-45.4-2-53.8-23.3\nc-8.4-21.3,2-45.4,23.3-53.8L31.6,3.5z",
        },
        React.createElement("animateTransform", {
          attributeName: "transform",
          attributeType: "XML",
          type: "rotate",
          dur: "1s",
          from: "0 50 50",
          to: "360 50 50",
          repeatCount: "indefinite",
        })
      ),
      React.createElement(
        "path",
        {
          d:
            "M42.3,39.6c5.7-4.3,13.9-3.1,18.1,2.7c4.3,5.7,3.1,13.9-2.7,18.1l4.1,5.5c8.8-6.5,10.6-19,4.1-27.7\nc-6.5-8.8-19-10.6-27.7-4.1L42.3,39.6z",
        },
        React.createElement("animateTransform", {
          attributeName: "transform",
          attributeType: "XML",
          type: "rotate",
          dur: "1s",
          from: "0 50 50",
          to: "-360 50 50",
          repeatCount: "indefinite",
        })
      ),
      React.createElement(
        "path",
        {
          d:
            "M82,35.7C74.1,18,53.4,10.1,35.7,18S10.1,46.6,18,64.3l7.6-3.4c-6-13.5,0-29.3,13.5-35.3s29.3,0,35.3,13.5\nL82,35.7z",
        },
        React.createElement("animateTransform", {
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
  return React.createElement(
    "div",
    { className: "loading loading--line " + props.className },
    React.createElement("div", null),
    React.createElement("div", null),
    React.createElement("div", null)
  );
};

var Button = function (_a) {
  var type = _a.type,
    _b = _a.htmlType,
    htmlType = _b === void 0 ? "button" : _b,
    onClick = _a.onClick,
    children = _a.children,
    disabled = _a.disabled,
    className = _a.className,
    _c = _a.loading,
    loading = _c === void 0 ? false : _c;
  // Call the onClick from the parent
  var onButtonClick = function () {
    // do not execute if the button is in loading state
    if (loading) return;
    !!onClick && onClick();
  };
  return React.createElement(
    "button",
    {
      disabled: disabled,
      onClick: onButtonClick,
      className: "button button--" + type + " " + className,
      type: htmlType,
    },
    loading
      ? React.createElement(
          "span",
          { className: "button__animation" },
          React.createElement(Loading, {
            type: "default",
            className: "button__loading",
          })
        )
      : React.createElement("span", { className: "button__text" }, children)
  );
};

var css_248z$2 =
  '@import url("https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;500;700&family=Roboto:wght@300;400;500&display=swap");\n/*\n0 - 400px:    Mini - phone - xs\n400 - 600px:    Phone - sm\n600 - 900px:    Tablet portrait - md\n900 - 1200px:   Tablet landscape - lg\n[1200 - 1800] is where our normal styles apply\n1800px + :      Big desktop - xl\n$breakpoint arguement choices:\n- mini-phone\n- phone\n- tab-port\n- tab-land\n- big-desktop\nORDER: Base + typography > general layout + grid > page layout > components\n1em = 16px\n*/\n*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  -webkit-box-sizing: inherit;\n          box-sizing: inherit;\n  position: relative; }\n\nol,\nul,\ndl {\n  margin: 0; }\n\nhtml {\n  font-size: 62.5%;\n  scroll-behavior: smooth; }\n  @media only screen and (max-width: 75em) {\n    html {\n      font-size: 56.25%; } }\n  @media only screen and (max-width: 56.25em) {\n    html {\n      font-size: 50%; } }\n  @media only screen and (max-width: 25em) {\n    html {\n      font-size: 37.5%; } }\n  @media only screen and (min-width: 112.5em) {\n    html {\n      font-size: 75%; } }\n\nbody {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  overflow-x: hidden !important;\n  -webkit-font-smoothing: antialiased;\n  color: #333;\n  font-family: "Roboto", sans-serif;\n  font-size: 1.6rem; }\n  @media only screen and (max-width: 75em) {\n    body {\n      font-size: 1.77rem; } }\n  @media only screen and (max-width: 56.25em) {\n    body {\n      font-size: 2rem;\n      padding: 0; } }\n  @media only screen and (max-width: 25em) {\n    body {\n      font-size: 2rem; } }\n  @media only screen and (min-width: 112.5em) {\n    body {\n      font-size: 1.3rem; } }\n\nimg {\n  width: 100%; }\n\nfigure {\n  margin: 0; }\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  margin: 0;\n  color: inherit;\n  font-size: inherit;\n  font-family: inherit;\n  line-height: inherit; }\n\ntextarea {\n  -ms-touch-action: manipulation;\n      touch-action: manipulation;\n  -webkit-appearance: none;\n  overflow: auto;\n  resize: vertical; }\n\na {\n  text-decoration: none;\n  color: #333; }\n\np {\n  margin: 0; }\n\n.u-center-text {\n  text-align: center !important; }\n\n.u-center-right {\n  text-align: right !important; }\n\n.u-center-flex-cross {\n  -ms-flex-item-align: center;\n      align-self: center; }\n\n.u-margin-bottom-nano {\n  margin-bottom: 1rem !important; }\n\n.u-margin-bottom-small {\n  margin-bottom: 1.5rem !important; }\n\n.u-margin-bottom-medium {\n  margin-bottom: 3rem !important; }\n  @media only screen and (max-width: 56.25em) {\n    .u-margin-bottom-medium {\n      margin-bottom: 3rem !important; } }\n\n.u-margin-bottom-large {\n  margin-bottom: 6rem !important; }\n  @media only screen and (max-width: 56.25em) {\n    .u-margin-bottom-large {\n      margin-bottom: 6rem !important; } }\n\n.u-margin-bottom-big {\n  margin-bottom: 8rem !important; }\n  @media only screen and (max-width: 56.25em) {\n    .u-margin-bottom-big {\n      margin-bottom: 8rem !important; } }\n\n.u-margin-bottom-huge {\n  margin-bottom: 10rem !important; }\n\n.u-margin-top-big {\n  margin-top: 8rem !important; }\n\n.u-margin-top-huge {\n  margin-top: 10rem !important; }\n\n/*\n* Text utilities\n*/\n.bold {\n  font-weight: 700; }\n\n.regular {\n  font-weight: 400; }\n\n@-webkit-keyframes rotate {\n  0% {\n    -webkit-transform: rotateZ(0);\n            transform: rotateZ(0); }\n  50% {\n    -webkit-transform: rotateZ(45deg);\n            transform: rotateZ(45deg); }\n  100% {\n    -webkit-transform: rotateZ(360deg);\n            transform: rotateZ(360deg); } }\n\n@keyframes rotate {\n  0% {\n    -webkit-transform: rotateZ(0);\n            transform: rotateZ(0); }\n  50% {\n    -webkit-transform: rotateZ(45deg);\n            transform: rotateZ(45deg); }\n  100% {\n    -webkit-transform: rotateZ(360deg);\n            transform: rotateZ(360deg); } }\n\n.heading {\n  font-family: "Roboto Slab", serif;\n  font-weight: 700;\n  line-height: 1.3; }\n  .heading--jumbo {\n    font-size: 11.1rem; }\n  .heading--primary {\n    font-size: 6.8rem; }\n  .heading--secondary {\n    font-size: 4.2rem; }\n  .heading--tertiary {\n    font-size: 2.6rem; }\n  .heading--regular {\n    font-size: 2rem; }\n\n.paragraph {\n  font-family: "Roboto", sans-serif;\n  font-size: 1.6rem;\n  line-height: 2;\n  max-width: 70rem; }\n  .paragraph:not(:last-child) {\n    margin-bottom: 1rem; }\n';
styleInject(css_248z$2);

var H1 = function (props) {
  return React.createElement(
    "h1",
    __assign({}, props, {
      className: "heading heading--primary " + props.className,
    }),
    props.children
  );
};

var H2 = function (props) {
  return React.createElement(
    "h2",
    __assign({}, props, {
      className: "heading heading--secondary " + props.className,
    }),
    props.children
  );
};

var H3 = function (props) {
  return React.createElement(
    "h3",
    __assign({}, props, {
      className: "heading heading--tertiary " + props.className,
    }),
    props.children
  );
};

var H4 = function (props) {
  return React.createElement(
    "h4",
    __assign({}, props, {
      className: "heading heading--regular " + props.className,
    }),
    props.children
  );
};

var Paragraph = function (props) {
  return React.createElement(
    "p",
    __assign({}, props, { className: "paragraph " + props.className }),
    props.children
  );
};

var css_248z$3 =
  '@import url("https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;500;700&family=Roboto:wght@300;400;500&display=swap");\n/*\n0 - 400px:    Mini - phone - xs\n400 - 600px:    Phone - sm\n600 - 900px:    Tablet portrait - md\n900 - 1200px:   Tablet landscape - lg\n[1200 - 1800] is where our normal styles apply\n1800px + :      Big desktop - xl\n$breakpoint arguement choices:\n- mini-phone\n- phone\n- tab-port\n- tab-land\n- big-desktop\nORDER: Base + typography > general layout + grid > page layout > components\n1em = 16px\n*/\n*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  -webkit-box-sizing: inherit;\n          box-sizing: inherit;\n  position: relative; }\n\nol,\nul,\ndl {\n  margin: 0; }\n\nhtml {\n  font-size: 62.5%;\n  scroll-behavior: smooth; }\n  @media only screen and (max-width: 75em) {\n    html {\n      font-size: 56.25%; } }\n  @media only screen and (max-width: 56.25em) {\n    html {\n      font-size: 50%; } }\n  @media only screen and (max-width: 25em) {\n    html {\n      font-size: 37.5%; } }\n  @media only screen and (min-width: 112.5em) {\n    html {\n      font-size: 75%; } }\n\nbody {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  overflow-x: hidden !important;\n  -webkit-font-smoothing: antialiased;\n  color: #333;\n  font-family: "Roboto", sans-serif;\n  font-size: 1.6rem; }\n  @media only screen and (max-width: 75em) {\n    body {\n      font-size: 1.77rem; } }\n  @media only screen and (max-width: 56.25em) {\n    body {\n      font-size: 2rem;\n      padding: 0; } }\n  @media only screen and (max-width: 25em) {\n    body {\n      font-size: 2rem; } }\n  @media only screen and (min-width: 112.5em) {\n    body {\n      font-size: 1.3rem; } }\n\nimg {\n  width: 100%; }\n\nfigure {\n  margin: 0; }\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  margin: 0;\n  color: inherit;\n  font-size: inherit;\n  font-family: inherit;\n  line-height: inherit; }\n\ntextarea {\n  -ms-touch-action: manipulation;\n      touch-action: manipulation;\n  -webkit-appearance: none;\n  overflow: auto;\n  resize: vertical; }\n\na {\n  text-decoration: none;\n  color: #333; }\n\np {\n  margin: 0; }\n\n.u-center-text {\n  text-align: center !important; }\n\n.u-center-right {\n  text-align: right !important; }\n\n.u-center-flex-cross {\n  -ms-flex-item-align: center;\n      align-self: center; }\n\n.u-margin-bottom-nano {\n  margin-bottom: 1rem !important; }\n\n.u-margin-bottom-small {\n  margin-bottom: 1.5rem !important; }\n\n.u-margin-bottom-medium {\n  margin-bottom: 3rem !important; }\n  @media only screen and (max-width: 56.25em) {\n    .u-margin-bottom-medium {\n      margin-bottom: 3rem !important; } }\n\n.u-margin-bottom-large {\n  margin-bottom: 6rem !important; }\n  @media only screen and (max-width: 56.25em) {\n    .u-margin-bottom-large {\n      margin-bottom: 6rem !important; } }\n\n.u-margin-bottom-big {\n  margin-bottom: 8rem !important; }\n  @media only screen and (max-width: 56.25em) {\n    .u-margin-bottom-big {\n      margin-bottom: 8rem !important; } }\n\n.u-margin-bottom-huge {\n  margin-bottom: 10rem !important; }\n\n.u-margin-top-big {\n  margin-top: 8rem !important; }\n\n.u-margin-top-huge {\n  margin-top: 10rem !important; }\n\n/*\n* Text utilities\n*/\n.bold {\n  font-weight: 700; }\n\n.regular {\n  font-weight: 400; }\n\n@-webkit-keyframes rotate {\n  0% {\n    -webkit-transform: rotateZ(0);\n            transform: rotateZ(0); }\n  50% {\n    -webkit-transform: rotateZ(45deg);\n            transform: rotateZ(45deg); }\n  100% {\n    -webkit-transform: rotateZ(360deg);\n            transform: rotateZ(360deg); } }\n\n@keyframes rotate {\n  0% {\n    -webkit-transform: rotateZ(0);\n            transform: rotateZ(0); }\n  50% {\n    -webkit-transform: rotateZ(45deg);\n            transform: rotateZ(45deg); }\n  100% {\n    -webkit-transform: rotateZ(360deg);\n            transform: rotateZ(360deg); } }\n\n.nav {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 8rem;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  max-width: 100%;\n  width: 100%;\n  overflow: hidden;\n  border-bottom: 1px solid #d9d9d9; }\n  .nav__menu {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    max-width: 50%;\n    width: 50%;\n    overflow: hidden;\n    -webkit-transition: all 0.1s cubic-bezier(0.17, 0.67, 0.83, 0.67);\n    transition: all 0.1s cubic-bezier(0.17, 0.67, 0.83, 0.67); }\n    @media only screen and (max-width: 37.5em) {\n      .nav__menu {\n        position: fixed;\n        -webkit-transform: scale(0);\n                transform: scale(0);\n        opacity: 0;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        top: 0;\n        left: 0;\n        max-width: 100%;\n        width: 100vw;\n        height: 100vh;\n        background: #fff; } }\n    .nav__menu > * {\n      font-size: 1.4rem; }\n      @media only screen and (max-width: 37.5em) {\n        .nav__menu > * {\n          font-size: 2.8rem; } }\n    .nav__menu > *:not(:last-child) {\n      margin-right: 1rem; }\n      @media only screen and (max-width: 37.5em) {\n        .nav__menu > *:not(:last-child) {\n          margin-right: 0;\n          margin-bottom: 5rem; } }\n  .nav__actions {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n    @media only screen and (max-width: 37.5em) {\n      .nav__actions {\n        position: fixed;\n        bottom: 0;\n        left: 0;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        width: 100vw;\n        margin-bottom: 2rem;\n        opacity: 0;\n        -webkit-transform: scale(0);\n                transform: scale(0); } }\n    .nav__actions > * {\n      font-size: 1.4rem; }\n      @media only screen and (max-width: 37.5em) {\n        .nav__actions > * {\n          font-size: 2rem; } }\n    .nav__actions > *:not(:last-child) {\n      margin-right: 1rem; }\n      @media only screen and (max-width: 37.5em) {\n        .nav__actions > *:not(:last-child) {\n          margin-right: 4rem; } }\n  @media only screen and (max-width: 37.5em) {\n    .nav__open .nav__menu {\n      -webkit-transform: scale(1);\n              transform: scale(1);\n      opacity: 1; } }\n  @media only screen and (max-width: 37.5em) {\n    .nav__open .nav__actions {\n      -webkit-transform: scale(1);\n              transform: scale(1);\n      opacity: 1; } }\n  .nav--side, .nav--center {\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between; }\n  .nav--center .nav__menu {\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n  .nav--side .nav__actions {\n    display: none; }\n  .nav__icon {\n    display: none;\n    cursor: pointer; }\n    .nav__icon svg {\n      width: 1.6rem;\n      height: 1.6rem;\n      width: 3.2rem;\n      height: 3.2rem; }\n    @media only screen and (max-width: 37.5em) {\n      .nav__icon {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center; } }\n    .nav__icon * > *:first-child {\n      margin-right: 1rem; }\n    @media only screen and (max-width: 37.5em) {\n      .nav__icon > * {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center; } }\n\n.sidebar {\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  width: 24rem;\n  overflow: hidden;\n  min-height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-transition: all 0.2s ease;\n  transition: all 0.2s ease; }\n  .sidebar__logo {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    padding: 0 1rem;\n    height: 8rem;\n    -webkit-box-shadow: 0 0px 1px rgba(0, 0, 0, 0.1);\n            box-shadow: 0 0px 1px rgba(0, 0, 0, 0.1); }\n  .sidebar__control svg {\n    fill: #cacbcd;\n    width: 1.2rem;\n    height: 1.2rem;\n    cursor: pointer;\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg); }\n  .sidebar--collapsed {\n    width: 9rem; }\n  .sidebar--collapsed .sidebar__control svg {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  .sidebar--right .sidebar__control svg {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  .sidebar--collapsed.sidebar--right .sidebar__control svg {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg); }\n  .sidebar--right .sidebar__logo span {\n    -webkit-box-ordinal-group: 0;\n        -ms-flex-order: -1;\n            order: -1; }\n  .sidebar--light {\n    background: #fff; }\n\n.sidemenu {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin-top: 4rem; }\n  .sidemenu__item {\n    min-height: 5rem;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    font-family: Roboto;\n    font-size: 1.4rem;\n    -webkit-transition: all 0.2s ease;\n    transition: all 0.2s ease;\n    margin-bottom: 1.5rem;\n    padding: 0px 2rem; }\n    .sidemenu__item > * {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      /* justify-content: center; */\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      cursor: pointer;\n      padding-left: 3rem;\n      border-radius: 2rem;\n      width: 19rem;\n      height: 100%;\n      -webkit-transition: 0.1s all;\n      transition: 0.1s all; }\n      .sidemenu__item > *:hover {\n        background: #eee;\n        font-weight: 500; }\n    .sidemenu__item--active > * {\n      background: #262728;\n      color: #fff;\n      font-weight: 400;\n      height: 100%; }\n      .sidemenu__item--active > *:hover {\n        background: #262728; }\n  .sidebar--left .sidemenu__item--active {\n    /*\n    &:after {\n      position: absolute;\n      top: 0;\n      right: 0;\n      content: "";\n      width: 3px;\n      height: 100%;\n      //background: $color-primary;\n    }*/ }\n  .sidebar--right .sidemenu__item--active:before {\n    position: absolute;\n    top: 0;\n    left: 0;\n    content: "";\n    width: 3px;\n    height: 100%;\n    background: #0e63f4; }\n  .sidemenu__item svg {\n    /*\n    width: 1.6rem;\n    height: 1.6rem;\n    margin-right: 1.5rem;\n    fill: $color-grey-dark-3;\n    transition: all 0.2s ease;\n    */\n    width: 1.6rem;\n    height: 1.6rem;\n    margin-right: 1.5rem;\n    fill: #262728;\n    -webkit-transition: all 0.2s ease;\n    transition: all 0.2s ease; }\n  .sidemenu__item--active svg {\n    fill: #eee; }\n  .sidebar--collapsed .sidemenu__item {\n    min-height: 5rem;\n    width: 5rem;\n    padding: 0;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n    .sidebar--collapsed .sidemenu__item > * {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      padding: 0; }\n    .sidebar--collapsed .sidemenu__item span {\n      display: none; }\n    .sidebar--collapsed .sidemenu__item svg {\n      width: 1.6rem;\n      height: 1.6rem;\n      margin-right: 0rem; }\n';
styleInject(css_248z$3);

var NavContext = React.createContext(false);
var Nav = function (_a) {
  var logo = _a.logo,
    children = _a.children,
    className = _a.className,
    _b = _a.type,
    type = _b === void 0 ? "side" : _b;
  var _c = useState(false),
    menu = _c[0],
    toggleMenu = _c[1];
  var menuClassName = menu ? "nav__open" : "nav__close";
  return React.createElement(
    NavContext.Provider,
    { value: menu },
    React.createElement(
      "div",
      {
        className: "nav nav--" + type + " " + className + " " + menuClassName,
        onClick: function () {
          return toggleMenu(false);
        },
      },
      React.createElement("div", { className: "nav__logo" }, logo),
      children,
      React.createElement(
        "div",
        { className: "nav__icon" },
        menu
          ? React.createElement(AiOutlineClose, {
              onClick: function (e) {
                e.stopPropagation();
                return toggleMenu(false);
              },
            })
          : React.createElement(
              "span",
              {
                onClick: function (e) {
                  e.stopPropagation();
                  return toggleMenu(true);
                },
              },
              React.createElement(FiMenu, null),
              " ",
              React.createElement("span", null, "Menu")
            )
      )
    )
  );
};

var NavActions = function (_a) {
  var children = _a.children,
    className = _a.className;
  return React.createElement(
    "div",
    { className: "nav__actions " + className },
    children
  );
};

var NavMenu = function (_a) {
  var children = _a.children,
    className = _a.className;
  return React.createElement(
    "div",
    { className: "nav__menu " + className },
    children
  );
};

var Sidebar = function (_a) {
  var children = _a.children,
    collapsed = _a.collapsed,
    longLogo = _a.longLogo,
    shortLogo = _a.shortLogo,
    onCollapsed = _a.onCollapsed,
    _b = _a.className,
    className = _b === void 0 ? "" : _b,
    _c = _a.type,
    type = _c === void 0 ? "light" : _c,
    _d = _a.direction,
    direction = _d === void 0 ? "left" : _d;
  var sidebarOpen = !collapsed ? "" : "sidebar--collapsed";
  var myDirection = direction === "left" ? "sidebar--left" : "sidebar--right";
  return React.createElement(
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
    React.createElement(
      "div",
      { className: "sidebar__logo" },
      !sidebarOpen ? longLogo : shortLogo,
      React.createElement(
        "span",
        {
          className: "sidebar__control",
          onClick: function () {
            return onCollapsed();
          },
        },
        React.createElement(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
          React.createElement("path", {
            d:
              "M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z",
          })
        )
      )
    ),
    children
  );
};

var MenuContext = React.createContext("");
var Menu = function (_a) {
  var children = _a.children,
    active = _a.active,
    title = _a.title;
  return React.createElement(
    MenuContext.Provider,
    { value: active },
    React.createElement("div", { className: "sidemenu" }, children)
  );
};

var MenuItem = function (_a) {
  var children = _a.children,
    value = _a.value,
    _b = _a.className,
    className = _b === void 0 ? "" : _b;
  var active = useContext(MenuContext);
  var activeClass = !!value && value === active ? "sidemenu__item--active" : "";
  return React.createElement(
    "span",
    { className: "sidemenu__item " + activeClass + " " + className },
    children
  );
};

var css_248z$4 =
  '@import url("https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;500;700&family=Roboto:wght@300;400;500&display=swap");\n/*\n0 - 400px:    Mini - phone - xs\n400 - 600px:    Phone - sm\n600 - 900px:    Tablet portrait - md\n900 - 1200px:   Tablet landscape - lg\n[1200 - 1800] is where our normal styles apply\n1800px + :      Big desktop - xl\n$breakpoint arguement choices:\n- mini-phone\n- phone\n- tab-port\n- tab-land\n- big-desktop\nORDER: Base + typography > general layout + grid > page layout > components\n1em = 16px\n*/\n*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  -webkit-box-sizing: inherit;\n          box-sizing: inherit;\n  position: relative; }\n\nol,\nul,\ndl {\n  margin: 0; }\n\nhtml {\n  font-size: 62.5%;\n  scroll-behavior: smooth; }\n  @media only screen and (max-width: 75em) {\n    html {\n      font-size: 56.25%; } }\n  @media only screen and (max-width: 56.25em) {\n    html {\n      font-size: 50%; } }\n  @media only screen and (max-width: 25em) {\n    html {\n      font-size: 37.5%; } }\n  @media only screen and (min-width: 112.5em) {\n    html {\n      font-size: 75%; } }\n\nbody {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  overflow-x: hidden !important;\n  -webkit-font-smoothing: antialiased;\n  color: #333;\n  font-family: "Roboto", sans-serif;\n  font-size: 1.6rem; }\n  @media only screen and (max-width: 75em) {\n    body {\n      font-size: 1.77rem; } }\n  @media only screen and (max-width: 56.25em) {\n    body {\n      font-size: 2rem;\n      padding: 0; } }\n  @media only screen and (max-width: 25em) {\n    body {\n      font-size: 2rem; } }\n  @media only screen and (min-width: 112.5em) {\n    body {\n      font-size: 1.3rem; } }\n\nimg {\n  width: 100%; }\n\nfigure {\n  margin: 0; }\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  margin: 0;\n  color: inherit;\n  font-size: inherit;\n  font-family: inherit;\n  line-height: inherit; }\n\ntextarea {\n  -ms-touch-action: manipulation;\n      touch-action: manipulation;\n  -webkit-appearance: none;\n  overflow: auto;\n  resize: vertical; }\n\na {\n  text-decoration: none;\n  color: #333; }\n\np {\n  margin: 0; }\n\n.u-center-text {\n  text-align: center !important; }\n\n.u-center-right {\n  text-align: right !important; }\n\n.u-center-flex-cross {\n  -ms-flex-item-align: center;\n      align-self: center; }\n\n.u-margin-bottom-nano {\n  margin-bottom: 1rem !important; }\n\n.u-margin-bottom-small {\n  margin-bottom: 1.5rem !important; }\n\n.u-margin-bottom-medium {\n  margin-bottom: 3rem !important; }\n  @media only screen and (max-width: 56.25em) {\n    .u-margin-bottom-medium {\n      margin-bottom: 3rem !important; } }\n\n.u-margin-bottom-large {\n  margin-bottom: 6rem !important; }\n  @media only screen and (max-width: 56.25em) {\n    .u-margin-bottom-large {\n      margin-bottom: 6rem !important; } }\n\n.u-margin-bottom-big {\n  margin-bottom: 8rem !important; }\n  @media only screen and (max-width: 56.25em) {\n    .u-margin-bottom-big {\n      margin-bottom: 8rem !important; } }\n\n.u-margin-bottom-huge {\n  margin-bottom: 10rem !important; }\n\n.u-margin-top-big {\n  margin-top: 8rem !important; }\n\n.u-margin-top-huge {\n  margin-top: 10rem !important; }\n\n/*\n* Text utilities\n*/\n.bold {\n  font-weight: 700; }\n\n.regular {\n  font-weight: 400; }\n\n@-webkit-keyframes rotate {\n  0% {\n    -webkit-transform: rotateZ(0);\n            transform: rotateZ(0); }\n  50% {\n    -webkit-transform: rotateZ(45deg);\n            transform: rotateZ(45deg); }\n  100% {\n    -webkit-transform: rotateZ(360deg);\n            transform: rotateZ(360deg); } }\n\n@keyframes rotate {\n  0% {\n    -webkit-transform: rotateZ(0);\n            transform: rotateZ(0); }\n  50% {\n    -webkit-transform: rotateZ(45deg);\n            transform: rotateZ(45deg); }\n  100% {\n    -webkit-transform: rotateZ(360deg);\n            transform: rotateZ(360deg); } }\n\n.modal {\n  background: rgba(0, 0, 0, 0.85);\n  height: 100vh;\n  left: 0;\n  position: fixed;\n  top: 0;\n  width: 100vw;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  visibility: hidden;\n  z-index: 9999; }\n  .modal__ui {\n    background: #fff;\n    width: 50vw;\n    max-height: 80vh;\n    overflow: hidden;\n    min-height: 20vh;\n    border-radius: 4px;\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  .modal--open {\n    visibility: initial; }\n  .modal--open .modal__ui {\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  .modal__heading {\n    padding: 1.5rem 2rem;\n    border-bottom: 1px solid #d9d9d9; }\n  .modal__main {\n    border-bottom: 1px solid #d9d9d9;\n    max-height: 60vh;\n    overflow-y: auto;\n    padding: 1.5rem 2rem; }\n  .modal__footer {\n    padding: 1rem 2rem;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    background: #f9fafb; }\n    .modal__footer > *:not(:last-child) {\n      margin-right: 1rem; }\n  .modal--small .modal__ui {\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    width: 50rem; }\n  .modal--small .modal__main {\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    padding: 2rem; }\n  .modal--empty .modal__main {\n    padding: 0;\n    border: none;\n    height: 100%;\n    max-height: -webkit-fit-content;\n    max-height: -moz-fit-content;\n    max-height: fit-content;\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    max-width: 100%; }\n  .modal--empty .modal__ui {\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    max-height: -webkit-fit-content;\n    max-height: -moz-fit-content;\n    max-height: fit-content; }\n';
styleInject(css_248z$4);

var Modal = function (props) {
  // Handle empty className
  var className = props.className || "";
  var wrapperClassName = props.wrapperClassName || "";
  switch (props.type) {
    case "empty":
      return React.createElement(ModalEmpty, __assign({}, props));
    case "small":
      return React.createElement(
        ModalDefault,
        __assign({}, props, {
          className: className,
          wrapperClassName: wrapperClassName + "modal--small",
        })
      );
    case "default":
    default:
      return React.createElement(ModalDefault, __assign({}, props));
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
  return React.createElement(
    "div",
    {
      className: "modal " + open + " " + props.wrapperClassName,
      onClick: onClickMain,
    },
    React.createElement(
      "div",
      { className: "modal__ui " + props.className, onClick: onClickUi },
      React.createElement(
        "div",
        { className: "modal__heading" },
        React.createElement(H4, null, props.heading)
      ),
      React.createElement("div", { className: "modal__main" }, props.children),
      React.createElement("div", { className: "modal__footer" }, props.action)
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
  return React.createElement(
    "div",
    {
      className: "modal modal--empty " + open + " " + props.wrapperClassName,
      onClick: onClickMain,
    },
    React.createElement(
      "div",
      { className: "modal__ui " + props.className, onClick: onClickUi },
      React.createElement("div", { className: "modal__main" }, props.children)
    )
  );
};

var OList = function (props) {
  return React.createElement(
    "ol",
    __assign({}, props, { className: "olist " + props.className }),
    props.children
  );
};

var UList = function (props) {
  return React.createElement(
    "ul",
    __assign({}, props, { className: "ulist " + props.className }),
    props.children
  );
};

var Li = function (props) {
  return React.createElement(
    "li",
    __assign({}, props, {
      className: "li u-margin-bottom-nano " + props.className,
    }),
    props.children
  );
};

var css_248z$5 =
  '@import url("https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;500;700&family=Roboto:wght@300;400;500&display=swap");\n/*\n0 - 400px:    Mini - phone - xs\n400 - 600px:    Phone - sm\n600 - 900px:    Tablet portrait - md\n900 - 1200px:   Tablet landscape - lg\n[1200 - 1800] is where our normal styles apply\n1800px + :      Big desktop - xl\n$breakpoint arguement choices:\n- mini-phone\n- phone\n- tab-port\n- tab-land\n- big-desktop\nORDER: Base + typography > general layout + grid > page layout > components\n1em = 16px\n*/\n*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  -webkit-box-sizing: inherit;\n          box-sizing: inherit;\n  position: relative; }\n\nol,\nul,\ndl {\n  margin: 0; }\n\nhtml {\n  font-size: 62.5%;\n  scroll-behavior: smooth; }\n  @media only screen and (max-width: 75em) {\n    html {\n      font-size: 56.25%; } }\n  @media only screen and (max-width: 56.25em) {\n    html {\n      font-size: 50%; } }\n  @media only screen and (max-width: 25em) {\n    html {\n      font-size: 37.5%; } }\n  @media only screen and (min-width: 112.5em) {\n    html {\n      font-size: 75%; } }\n\nbody {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  overflow-x: hidden !important;\n  -webkit-font-smoothing: antialiased;\n  color: #333;\n  font-family: "Roboto", sans-serif;\n  font-size: 1.6rem; }\n  @media only screen and (max-width: 75em) {\n    body {\n      font-size: 1.77rem; } }\n  @media only screen and (max-width: 56.25em) {\n    body {\n      font-size: 2rem;\n      padding: 0; } }\n  @media only screen and (max-width: 25em) {\n    body {\n      font-size: 2rem; } }\n  @media only screen and (min-width: 112.5em) {\n    body {\n      font-size: 1.3rem; } }\n\nimg {\n  width: 100%; }\n\nfigure {\n  margin: 0; }\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  margin: 0;\n  color: inherit;\n  font-size: inherit;\n  font-family: inherit;\n  line-height: inherit; }\n\ntextarea {\n  -ms-touch-action: manipulation;\n      touch-action: manipulation;\n  -webkit-appearance: none;\n  overflow: auto;\n  resize: vertical; }\n\na {\n  text-decoration: none;\n  color: #333; }\n\np {\n  margin: 0; }\n\n.u-center-text {\n  text-align: center !important; }\n\n.u-center-right {\n  text-align: right !important; }\n\n.u-center-flex-cross {\n  -ms-flex-item-align: center;\n      align-self: center; }\n\n.u-margin-bottom-nano {\n  margin-bottom: 1rem !important; }\n\n.u-margin-bottom-small {\n  margin-bottom: 1.5rem !important; }\n\n.u-margin-bottom-medium {\n  margin-bottom: 3rem !important; }\n  @media only screen and (max-width: 56.25em) {\n    .u-margin-bottom-medium {\n      margin-bottom: 3rem !important; } }\n\n.u-margin-bottom-large {\n  margin-bottom: 6rem !important; }\n  @media only screen and (max-width: 56.25em) {\n    .u-margin-bottom-large {\n      margin-bottom: 6rem !important; } }\n\n.u-margin-bottom-big {\n  margin-bottom: 8rem !important; }\n  @media only screen and (max-width: 56.25em) {\n    .u-margin-bottom-big {\n      margin-bottom: 8rem !important; } }\n\n.u-margin-bottom-huge {\n  margin-bottom: 10rem !important; }\n\n.u-margin-top-big {\n  margin-top: 8rem !important; }\n\n.u-margin-top-huge {\n  margin-top: 10rem !important; }\n\n/*\n* Text utilities\n*/\n.bold {\n  font-weight: 700; }\n\n.regular {\n  font-weight: 400; }\n\n@-webkit-keyframes rotate {\n  0% {\n    -webkit-transform: rotateZ(0);\n            transform: rotateZ(0); }\n  50% {\n    -webkit-transform: rotateZ(45deg);\n            transform: rotateZ(45deg); }\n  100% {\n    -webkit-transform: rotateZ(360deg);\n            transform: rotateZ(360deg); } }\n\n@keyframes rotate {\n  0% {\n    -webkit-transform: rotateZ(0);\n            transform: rotateZ(0); }\n  50% {\n    -webkit-transform: rotateZ(45deg);\n            transform: rotateZ(45deg); }\n  100% {\n    -webkit-transform: rotateZ(360deg);\n            transform: rotateZ(360deg); } }\n\n/* Change Autocomplete styles in Chrome*/\ninput:-webkit-autofill,\ninput:-webkit-autofill:hover,\ninput:-webkit-autofill:focus,\ntextarea:-webkit-autofill,\ntextarea:-webkit-autofill:hover,\ntextarea:-webkit-autofill:focus,\nselect:-webkit-autofill,\nselect:-webkit-autofill:hover,\nselect:-webkit-autofill:focus {\n  -webkit-text-fill-color: #333;\n  -webkit-box-shadow: 0 0 0px 1000px transparent inset;\n  -webkit-transition: background-color 5000s ease-in-out 0s;\n  transition: background-color 5000s ease-in-out 0s; }\n\n.errmsg {\n  color: #e74c3c;\n  font-size: 1.3rem;\n  padding: 1rem 1rem 0.5rem;\n  line-height: 1.4; }\n\n.input {\n  height: 4.8rem;\n  min-width: 30rem;\n  width: 100%;\n  outline: none;\n  background: transparent;\n  color: #333;\n  border: 1px solid #999;\n  padding: 1rem 1rem 1rem 2rem;\n  z-index: 10;\n  font-size: 1.4rem;\n  border-radius: 1rem; }\n  .input--error {\n    border: 1px solid #e74c3c; }\n  .input--success {\n    border: 1px solid #67cb8b; }\n  .input::-webkit-input-placeholder {\n    color: #333;\n    text-transform: capitalize; }\n  .input::-moz-placeholder {\n    color: #333;\n    text-transform: capitalize; }\n  .input::-ms-input-placeholder {\n    color: #333;\n    text-transform: capitalize; }\n  .input::placeholder {\n    color: #333;\n    text-transform: capitalize; }\n  .input__group {\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n  .input__main {\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex; }\n  .input__label {\n    opacity: 1;\n    position: absolute;\n    top: 50%;\n    left: 2rem;\n    text-transform: uppercase;\n    font-size: 1.2rem;\n    letter-spacing: 2px;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    padding: 0 1rem;\n    z-index: 9;\n    -webkit-transition: all 0.1s cubic-bezier(0.17, 0.67, 0.83, 0.67);\n    transition: all 0.1s cubic-bezier(0.17, 0.67, 0.83, 0.67); }\n  .input__with-label:focus + .input__label,\n  .input__with-label:valid + .input__label {\n    top: 2px;\n    left: 2rem;\n    font-weight: 500;\n    opacity: 1;\n    background: #fff;\n    z-index: 11; }\n  .input__with-icon {\n    padding: 1rem 1rem 1rem 4.8rem; }\n  .input__icon {\n    position: absolute;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    top: 50%;\n    left: 2rem;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    z-index: 11; }\n  .input:disabled {\n    background: #eee;\n    z-index: 0;\n    cursor: not-allowed; }\n  .input--textarea {\n    line-height: 2.1rem; }\n\n/* \n  Radio Group\n*/\n.radio__group {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  .radio__group--full {\n    width: 100%; }\n\n.radio__main {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  border: 1px solid #eee;\n  min-height: 4.8rem;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border-radius: 1rem;\n  padding: 0 2rem; }\n  .radio__main--full {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    width: 100%;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    border: none;\n    min-height: -webkit-fit-content;\n    min-height: -moz-fit-content;\n    min-height: fit-content;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n    border-radius: 0;\n    padding: 0; }\n\n.radio__container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  font-size: 1.4rem; }\n  .radio__container:not(:last-child) {\n    margin-right: 2rem; }\n  .radio__container--full {\n    width: 100%;\n    min-height: 6rem;\n    font-size: 2rem;\n    line-height: 1.6;\n    border: 1px solid #eee;\n    border-radius: 1rem;\n    padding: 0 2rem;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: stretch;\n        -ms-flex-pack: stretch;\n            justify-content: stretch; }\n    .radio__container--full:not(:last-child) {\n      margin-right: 0;\n      margin-bottom: 1rem; }\n    .radio__container--full .radio__label {\n      padding: 1rem;\n      width: 100%; }\n\n.radio__input {\n  margin-right: 1rem; }\n\n.radio__label {\n  color: #333;\n  padding: 2rem 1rem; }\n\n.radio__group .input__label {\n  top: 2px;\n  left: 2rem;\n  font-weight: 500;\n  opacity: 1;\n  background: #fff;\n  z-index: 11; }\n\n.radio__icon {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  margin-right: 1rem; }\n\n.file {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  border: 1px solid #f8faff;\n  border-radius: 1rem;\n  padding: 1.5rem 1rem 1rem;\n  width: 100%;\n  overflow: hidden; }\n  .file__icon {\n    width: 2rem;\n    height: 2rem;\n    margin-right: 1rem; }\n  .file__button {\n    position: relative;\n    overflow: hidden; }\n    .file__button svg {\n      fill: #fff; }\n  .file__buttons {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n    .file__buttons > *:not(:last-child) {\n      margin-right: 2rem; }\n  .file__input {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    opacity: 0;\n    cursor: pointer; }\n  .file__preview {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    border-bottom: 1px solid #f8faff;\n    max-width: 100%;\n    padding-bottom: 1rem;\n    margin-bottom: 1rem; }\n    .file__preview img {\n      max-width: 100%;\n      height: 20rem;\n      -o-object-fit: contain;\n         object-fit: contain;\n      margin-bottom: 1rem;\n      border-radius: 1rem; }\n  .file .input__label {\n    top: 2px;\n    left: 2rem;\n    font-weight: 500;\n    opacity: 1;\n    background: #fff;\n    z-index: 11; }\n  .file__name {\n    font-style: italic;\n    font-size: 1.4rem;\n    font-weight: 300; }\n  .file .errmsg {\n    padding: 1rem 0rem 0.5rem; }\n\n.search__group {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 1.4rem;\n  color: #333; }\n\n.search__text {\n  border: 1px solid #f9fafb;\n  border-top-left-radius: 2.4rem;\n  border-bottom-left-radius: 2.4rem;\n  padding: 0 3rem;\n  height: 4.8rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-weight: 500;\n  color: #333; }\n\n.search__input {\n  border: 1px solid #f9fafb;\n  border-top-right-radius: 2.4rem;\n  border-bottom-right-radius: 2.4rem;\n  padding: 0 2rem;\n  height: 4.8rem;\n  min-width: 30rem;\n  width: 100%;\n  outline: none;\n  background: transparent;\n  padding: 1rem 1rem 1rem 2rem;\n  z-index: 10;\n  margin-left: -1px; }\n  .search__input::-webkit-input-placeholder {\n    font-style: italic; }\n  .search__input::-moz-placeholder {\n    font-style: italic; }\n  .search__input::-ms-input-placeholder {\n    font-style: italic; }\n  .search__input::placeholder {\n    font-style: italic; }\n\n.search__icon {\n  position: absolute;\n  color: currentColor;\n  top: 50%;\n  right: 3rem;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%); }\n';
styleInject(css_248z$5);

var ErrMsg = function (_a) {
  var msg = _a.msg;
  return React.createElement("div", { className: "errmsg" }, msg);
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
        // For file
        if (!maxSize || typeof value === "string" || typeof value === "number")
          return;
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
  var _a = useState([]),
    errMsg = _a[0],
    setErrMsg = _a[1];
  var name = props.name,
    rules = props.rules,
    accept = props.accept,
    label = props.label,
    value = props.value;
  var fileReader = new FileReader();
  var _b = useState(""),
    imageBlob = _b[0],
    setImageBlob = _b[1];
  var _c = useState({}),
    image = _c[0],
    setImage = _c[1];
  var fileInputElement = useRef(null);
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
      if (isValid) {
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
  return React.createElement(
    "div",
    { className: "file" },
    React.createElement(
      "div",
      { className: "file__main" },
      !!imageBlob
        ? React.createElement(
            "div",
            { className: "file__preview" },
            React.createElement("img", { src: imageBlob, alt: name }),
            React.createElement("span", { className: "file__name" }, image.name)
          )
        : "",
      React.createElement(
        "div",
        { className: "file__buttons" },
        React.createElement(
          "div",
          { className: "file__button" },
          React.createElement(
            "div",
            { className: "file__overlay" },
            React.createElement(
              Button,
              { type: "primary" },
              React.createElement(
                "span",
                { className: "file__icon" },
                React.createElement(
                  "svg",
                  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
                  React.createElement("path", {
                    d:
                      "M16 16h-3v5h-2v-5h-3l4-4 4 4zm3.479-5.908c-.212-3.951-3.473-7.092-7.479-7.092s-7.267 3.141-7.479 7.092c-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h3.5v-2h-3.5c-1.93 0-3.5-1.57-3.5-3.5 0-2.797 2.479-3.833 4.433-3.72-.167-4.218 2.208-6.78 5.567-6.78 3.453 0 5.891 2.797 5.567 6.78 1.745-.046 4.433.751 4.433 3.72 0 1.93-1.57 3.5-3.5 3.5h-3.5v2h3.5c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.521-5.408z",
                  })
                )
              ),
              "Upload"
            )
          ),
          React.createElement("input", {
            className: "file__input",
            type: "file",
            onChange: onChange,
            accept: accept,
            ref: fileInputElement,
          })
        ),
        !!imageBlob
          ? React.createElement(
              "div",
              { className: "file__clear" },
              React.createElement(
                Button,
                { type: "text", onClick: clearImage },
                "Clear"
              )
            )
          : ""
      ),
      React.createElement(
        "div",
        { className: "input__err" },
        errMsg.map(function (msg) {
          return React.createElement(ErrMsg, { key: msg, msg: msg });
        })
      )
    ),
    React.createElement("div", { className: "input__label" }, label)
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
  var _a = useState([]),
    errMsg = _a[0],
    setErrMsg = _a[1];
  var _b = useState(false),
    touched = _b[0],
    setTouched = _b[1];
  var rules = props.rules,
    label = props.label,
    icon = props.icon,
    name = props.name,
    className = props.className,
    type = props.type,
    autoFocus = props.autoFocus,
    value = props.value,
    disabled = props.disabled;
  // On first load, if value is provided, set the error
  useEffect(function () {
    if ((typeof value === "string" || typeof value === "number") && !!value) {
      props.onChange({
        value: value,
        isValid: checkErrors(value, setErrMsg, rules),
      });
    }
  }, []);
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
    return React.createElement(
      "div",
      { className: "input__group" },
      React.createElement(
        "div",
        { className: "input__main" },
        React.createElement("input", {
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
          disabled: disabled,
        }),
        React.createElement("span", { className: "input__icon" }, icon)
      ),
      React.createElement(
        "div",
        { className: "input__err" },
        errMsg.map(function (msg) {
          return React.createElement(ErrMsg, { key: msg, msg: msg });
        })
      )
    );
  }
  // show the label format
  return React.createElement(
    "div",
    { className: "input__group" },
    React.createElement(
      "div",
      { className: "input__main" },
      React.createElement("input", {
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
        disabled: disabled,
      }),
      React.createElement("span", { className: "input__label" }, label)
    ),
    React.createElement(
      "div",
      { className: "input__err" },
      errMsg.map(function (msg) {
        return React.createElement(ErrMsg, { key: msg, msg: msg });
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
    full = props.full,
    disabled = props.disabled;
  var onCheckboxChange = function (e) {
    var value = e.target.value;
    // If the system is disabled, return.
    // Do not allow change
    if (disabled) {
      return;
    }
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
    if (disabled) {
      return;
    }
    return props.onChange({ value: value, isValid: true });
  };
  var fullWidthContainer = !!full ? "radio__container--full" : "";
  var fullWidthMain = !!full ? "radio__main--full" : "";
  var fullWidthGroup = !!full ? "radio__group--full" : "";
  // If icon is provided, show the icon
  if (type === "checkbox") {
    return React.createElement(
      "div",
      { className: "radio__group " + className + " " + fullWidthGroup },
      React.createElement(
        "div",
        { className: "radio__main " + fullWidthMain },
        !!options
          ? options.map(function (opt) {
              var id = opt.value + Math.random() * 10;
              var active =
                Array.isArray(value) && value.indexOf(opt.value) >= 0;
              var activeClass = active ? "radio__active" : "";
              return React.createElement(
                "div",
                {
                  className:
                    "radio__container " +
                    activeClass +
                    " " +
                    fullWidthContainer +
                    " " +
                    opt.className,
                  key: opt.value,
                },
                React.createElement("input", {
                  className: "radio__input ",
                  type: "checkbox",
                  id: id,
                  name: name,
                  value: opt.value,
                  checked: active,
                  onChange: onCheckboxChange,
                }),
                React.createElement(
                  "label",
                  { className: "radio__label", htmlFor: id },
                  opt.label
                )
              );
            })
          : ""
      ),
      !full
        ? React.createElement("span", { className: "input__label" }, label)
        : ""
    );
  }
  return React.createElement(
    "div",
    { className: "radio__group " + className + " " + fullWidthGroup },
    React.createElement(
      "div",
      { className: "radio__main " + fullWidthMain },
      !!options
        ? options.map(function (opt) {
            var active = value === opt.value;
            var activeClass = active ? "radio__active" : "";
            return React.createElement(
              "div",
              {
                className:
                  "radio__container " +
                  activeClass +
                  " " +
                  fullWidthContainer +
                  " " +
                  opt.className,
                key: opt.value,
              },
              React.createElement("input", {
                className: "radio__input ",
                type: "radio",
                id: opt.value,
                name: name,
                value: opt.value,
                checked: active,
                onChange: onRadioChange,
              }),
              React.createElement(
                "label",
                { className: "radio__label", htmlFor: opt.value },
                opt.label
              )
            );
          })
        : ""
    ),
    React.createElement("span", { className: "input__label" }, label)
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
  var _a = useState([]),
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
  return React.createElement(
    "div",
    { className: "search__group" },
    React.createElement("span", { className: "search__text" }, "Search"),
    React.createElement("input", {
      autoFocus: autoFocus,
      value: value,
      type: type,
      name: name,
      className: "search__input  " + className,
      onChange: onChange,
      placeholder: placeholder,
      required: true,
    }),
    React.createElement(
      "span",
      { className: "search__icon" },
      React.createElement(GrSearch, null)
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
var Textarea = function (props) {
  var _a = useState([]),
    errMsg = _a[0],
    setErrMsg = _a[1];
  var _b = useState(false),
    touched = _b[0],
    setTouched = _b[1];
  var rules = props.rules,
    label = props.label,
    name = props.name,
    className = props.className,
    type = props.type,
    autoFocus = props.autoFocus,
    value = props.value,
    disabled = props.disabled;
  // On first load, if value is provided, set the error
  useEffect(function () {
    if ((typeof value === "string" || typeof value === "number") && !!value) {
      props.onChange({
        value: value,
        isValid: checkErrors(value, setErrMsg, rules),
      });
    }
  }, []);
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
  // show the label format
  return React.createElement(
    "div",
    { className: "input__group" },
    React.createElement(
      "div",
      { className: "input__main" },
      React.createElement(
        "textarea",
        {
          name: name,
          className:
            "input input--" +
            type +
            " input__with-label " +
            showErrState +
            " " +
            className,
          onChange: onChange,
          disabled: disabled,
          autoFocus: autoFocus,
        },
        value
      ),
      React.createElement("span", { className: "input__label" }, label)
    ),
    React.createElement(
      "div",
      { className: "input__err" },
      errMsg.map(function (msg) {
        return React.createElement(ErrMsg, { key: msg, msg: msg });
      })
    )
  );
};

var Input = function (props) {
  switch (props.type) {
    case "file":
      return React.createElement(File, __assign({}, props));
    case "search":
      return React.createElement(Search, __assign({}, props));
    case "textarea":
      return React.createElement(Textarea, __assign({}, props));
    case "checkbox":
    case "radio":
      return React.createElement(Radio, __assign({}, props));
    default:
      return React.createElement(Text, __assign({}, props));
  }
};

var css_248z$6 =
  '@import url("https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;500;700&family=Roboto:wght@300;400;500&display=swap");\n/*\n0 - 400px:    Mini - phone - xs\n400 - 600px:    Phone - sm\n600 - 900px:    Tablet portrait - md\n900 - 1200px:   Tablet landscape - lg\n[1200 - 1800] is where our normal styles apply\n1800px + :      Big desktop - xl\n$breakpoint arguement choices:\n- mini-phone\n- phone\n- tab-port\n- tab-land\n- big-desktop\nORDER: Base + typography > general layout + grid > page layout > components\n1em = 16px\n*/\n*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  -webkit-box-sizing: inherit;\n          box-sizing: inherit;\n  position: relative; }\n\nol,\nul,\ndl {\n  margin: 0; }\n\nhtml {\n  font-size: 62.5%;\n  scroll-behavior: smooth; }\n  @media only screen and (max-width: 75em) {\n    html {\n      font-size: 56.25%; } }\n  @media only screen and (max-width: 56.25em) {\n    html {\n      font-size: 50%; } }\n  @media only screen and (max-width: 25em) {\n    html {\n      font-size: 37.5%; } }\n  @media only screen and (min-width: 112.5em) {\n    html {\n      font-size: 75%; } }\n\nbody {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  overflow-x: hidden !important;\n  -webkit-font-smoothing: antialiased;\n  color: #333;\n  font-family: "Roboto", sans-serif;\n  font-size: 1.6rem; }\n  @media only screen and (max-width: 75em) {\n    body {\n      font-size: 1.77rem; } }\n  @media only screen and (max-width: 56.25em) {\n    body {\n      font-size: 2rem;\n      padding: 0; } }\n  @media only screen and (max-width: 25em) {\n    body {\n      font-size: 2rem; } }\n  @media only screen and (min-width: 112.5em) {\n    body {\n      font-size: 1.3rem; } }\n\nimg {\n  width: 100%; }\n\nfigure {\n  margin: 0; }\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  margin: 0;\n  color: inherit;\n  font-size: inherit;\n  font-family: inherit;\n  line-height: inherit; }\n\ntextarea {\n  -ms-touch-action: manipulation;\n      touch-action: manipulation;\n  -webkit-appearance: none;\n  overflow: auto;\n  resize: vertical; }\n\na {\n  text-decoration: none;\n  color: #333; }\n\np {\n  margin: 0; }\n\n.u-center-text {\n  text-align: center !important; }\n\n.u-center-right {\n  text-align: right !important; }\n\n.u-center-flex-cross {\n  -ms-flex-item-align: center;\n      align-self: center; }\n\n.u-margin-bottom-nano {\n  margin-bottom: 1rem !important; }\n\n.u-margin-bottom-small {\n  margin-bottom: 1.5rem !important; }\n\n.u-margin-bottom-medium {\n  margin-bottom: 3rem !important; }\n  @media only screen and (max-width: 56.25em) {\n    .u-margin-bottom-medium {\n      margin-bottom: 3rem !important; } }\n\n.u-margin-bottom-large {\n  margin-bottom: 6rem !important; }\n  @media only screen and (max-width: 56.25em) {\n    .u-margin-bottom-large {\n      margin-bottom: 6rem !important; } }\n\n.u-margin-bottom-big {\n  margin-bottom: 8rem !important; }\n  @media only screen and (max-width: 56.25em) {\n    .u-margin-bottom-big {\n      margin-bottom: 8rem !important; } }\n\n.u-margin-bottom-huge {\n  margin-bottom: 10rem !important; }\n\n.u-margin-top-big {\n  margin-top: 8rem !important; }\n\n.u-margin-top-huge {\n  margin-top: 10rem !important; }\n\n/*\n* Text utilities\n*/\n.bold {\n  font-weight: 700; }\n\n.regular {\n  font-weight: 400; }\n\n@-webkit-keyframes rotate {\n  0% {\n    -webkit-transform: rotateZ(0);\n            transform: rotateZ(0); }\n  50% {\n    -webkit-transform: rotateZ(45deg);\n            transform: rotateZ(45deg); }\n  100% {\n    -webkit-transform: rotateZ(360deg);\n            transform: rotateZ(360deg); } }\n\n@keyframes rotate {\n  0% {\n    -webkit-transform: rotateZ(0);\n            transform: rotateZ(0); }\n  50% {\n    -webkit-transform: rotateZ(45deg);\n            transform: rotateZ(45deg); }\n  100% {\n    -webkit-transform: rotateZ(360deg);\n            transform: rotateZ(360deg); } }\n\n.row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin: 0 auto;\n  max-width: 114rem;\n  position: relative;\n  width: 100%;\n  max-height: -webkit-fit-content;\n  max-height: -moz-fit-content;\n  max-height: fit-content;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n  .row:not(:last-child) {\n    margin-bottom: 2rem; }\n\n.col {\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch; }\n  .col:not(:last-child) {\n    margin-right: 3rem; }\n    @media only screen and (max-width: 37.5em) {\n      .col:not(:last-child) {\n        margin: 0; } }\n  .col-1-of-1 {\n    -ms-flex-preferred-size: 100%;\n        flex-basis: 100%; }\n  .col-1-of-2 {\n    -ms-flex-preferred-size: calc((100% - 3rem) / 2);\n        flex-basis: calc((100% - 3rem) / 2); }\n    @media only screen and (max-width: 37.5em) {\n      .col-1-of-2 {\n        -ms-flex-preferred-size: 100%;\n            flex-basis: 100%; } }\n  .col-1-of-3 {\n    -ms-flex-preferred-size: calc((100% - 2 * 3rem) / 3);\n        flex-basis: calc((100% - 2 * 3rem) / 3); }\n    @media only screen and (max-width: 37.5em) {\n      .col-1-of-3 {\n        -ms-flex-preferred-size: 100%;\n            flex-basis: 100%; } }\n  .col-2-of-3 {\n    -ms-flex-preferred-size: calc( 2 * ((100% - 2 * 3rem) / 3) + 3rem);\n        flex-basis: calc( 2 * ((100% - 2 * 3rem) / 3) + 3rem); }\n    @media only screen and (max-width: 37.5em) {\n      .col-2-of-3 {\n        -ms-flex-preferred-size: 100%;\n            flex-basis: 100%; } }\n  .col-1-of-4 {\n    -ms-flex-preferred-size: calc((100% - 3 * 3rem) / 4);\n        flex-basis: calc((100% - 3 * 3rem) / 4); }\n    @media only screen and (max-width: 37.5em) {\n      .col-1-of-4 {\n        -ms-flex-preferred-size: 100%;\n            flex-basis: 100%; } }\n  .col-2-of-4 {\n    -ms-flex-preferred-size: calc( 2 * ((100% - 3 * 3rem) / 4) + 3rem);\n        flex-basis: calc( 2 * ((100% - 3 * 3rem) / 4) + 3rem); }\n    @media only screen and (max-width: 37.5em) {\n      .col-2-of-4 {\n        -ms-flex-preferred-size: 100%;\n            flex-basis: 100%; } }\n  .col-3-of-4 {\n    -ms-flex-preferred-size: calc( 3 * ((100% - 3 * 3rem) / 4) + 2 * 3rem);\n        flex-basis: calc( 3 * ((100% - 3 * 3rem) / 4) + 2 * 3rem); }\n    @media only screen and (max-width: 37.5em) {\n      .col-3-of-4 {\n        -ms-flex-preferred-size: 100%;\n            flex-basis: 100%; } }\n  .col-1-of-5 {\n    -ms-flex-preferred-size: calc((100% - 4 * 3rem) / 5);\n        flex-basis: calc((100% - 4 * 3rem) / 5); }\n    @media only screen and (max-width: 37.5em) {\n      .col-1-of-5 {\n        -ms-flex-preferred-size: 100%;\n            flex-basis: 100%; } }\n  .col-2-of-5 {\n    -ms-flex-preferred-size: calc( 2 * calc((100% - 4 * 3rem) / 5) + 3rem);\n        flex-basis: calc( 2 * calc((100% - 4 * 3rem) / 5) + 3rem); }\n    @media only screen and (max-width: 37.5em) {\n      .col-2-of-5 {\n        -ms-flex-preferred-size: 100%;\n            flex-basis: 100%; } }\n  .col-3-of-5 {\n    -ms-flex-preferred-size: calc( 3 * calc((100% - 4 * 3rem) / 5) + 2 * 3rem);\n        flex-basis: calc( 3 * calc((100% - 4 * 3rem) / 5) + 2 * 3rem); }\n    @media only screen and (max-width: 37.5em) {\n      .col-3-of-5 {\n        -ms-flex-preferred-size: 100%;\n            flex-basis: 100%; } }\n  .col-4-of-5 {\n    -ms-flex-preferred-size: calc( 4 * ((100% - 4 * 3rem) / 5) + 3 * 3rem);\n        flex-basis: calc( 4 * ((100% - 4 * 3rem) / 5) + 3 * 3rem); }\n    @media only screen and (max-width: 37.5em) {\n      .col-4-of-5 {\n        -ms-flex-preferred-size: 100%;\n            flex-basis: 100%; } }\n\n/*\n *  Based on 12 column Grid system.\n */\n.col-12-layout {\n  width: 100%; }\n\n@media only screen and (min-width: 25em) {\n  .col-xs-1 {\n    width: calc( (calc((100% - (11 * 3rem)) / 12) * 1) + (3rem * (1 - 1))); }\n    .col-xs-1:not(:last-child) {\n      margin-right: 3rem; } }\n\n@media only screen and (min-width: 25em) {\n  .col-xs-2 {\n    width: calc( (calc((100% - (11 * 3rem)) / 12) * 2) + (3rem * (2 - 1))); }\n    .col-xs-2:not(:last-child) {\n      margin-right: 3rem; } }\n\n@media only screen and (min-width: 25em) {\n  .col-xs-3 {\n    width: calc( (calc((100% - (11 * 3rem)) / 12) * 3) + (3rem * (3 - 1))); }\n    .col-xs-3:not(:last-child) {\n      margin-right: 3rem; } }\n\n@media only screen and (min-width: 25em) {\n  .col-xs-4 {\n    width: calc( (calc((100% - (11 * 3rem)) / 12) * 4) + (3rem * (4 - 1))); }\n    .col-xs-4:not(:last-child) {\n      margin-right: 3rem; } }\n\n@media only screen and (min-width: 25em) {\n  .col-xs-5 {\n    width: calc( (calc((100% - (11 * 3rem)) / 12) * 5) + (3rem * (5 - 1))); }\n    .col-xs-5:not(:last-child) {\n      margin-right: 3rem; } }\n\n@media only screen and (min-width: 25em) {\n  .col-xs-6 {\n    width: calc( (calc((100% - (11 * 3rem)) / 12) * 6) + (3rem * (6 - 1))); }\n    .col-xs-6:not(:last-child) {\n      margin-right: 3rem; } }\n\n@media only screen and (min-width: 25em) {\n  .col-xs-7 {\n    width: calc( (calc((100% - (11 * 3rem)) / 12) * 7) + (3rem * (7 - 1))); }\n    .col-xs-7:not(:last-child) {\n      margin-right: 3rem; } }\n\n@media only screen and (min-width: 25em) {\n  .col-xs-8 {\n    width: calc( (calc((100% - (11 * 3rem)) / 12) * 8) + (3rem * (8 - 1))); }\n    .col-xs-8:not(:last-child) {\n      margin-right: 3rem; } }\n\n@media only screen and (min-width: 25em) {\n  .col-xs-9 {\n    width: calc( (calc((100% - (11 * 3rem)) / 12) * 9) + (3rem * (9 - 1))); }\n    .col-xs-9:not(:last-child) {\n      margin-right: 3rem; } }\n\n@media only screen and (min-width: 25em) {\n  .col-xs-10 {\n    width: calc( (calc((100% - (11 * 3rem)) / 12) * 10) + (3rem * (10 - 1))); }\n    .col-xs-10:not(:last-child) {\n      margin-right: 3rem; } }\n\n@media only screen and (min-width: 25em) {\n  .col-xs-11 {\n    width: calc( (calc((100% - (11 * 3rem)) / 12) * 11) + (3rem * (11 - 1))); }\n    .col-xs-11:not(:last-child) {\n      margin-right: 3rem; } }\n\n@media only screen and (min-width: 25em) {\n  .col-xs-12 {\n    width: calc( (calc((100% - (11 * 3rem)) / 12) * 12) + (3rem * (12 - 1))); } }\n\n@media only screen and (min-width: 37.5em) {\n  .col-sm-1 {\n    width: calc( (calc((100% - (11 * 3rem)) / 12) * 1) + (3rem * (1 - 1))); }\n    .col-sm-1:not(:last-child) {\n      margin-right: 3rem; } }\n\n@media only screen and (min-width: 37.5em) {\n  .col-sm-2 {\n    width: calc( (calc((100% - (11 * 3rem)) / 12) * 2) + (3rem * (2 - 1))); }\n    .col-sm-2:not(:last-child) {\n      margin-right: 3rem; } }\n\n@media only screen and (min-width: 37.5em) {\n  .col-sm-3 {\n    width: calc( (calc((100% - (11 * 3rem)) / 12) * 3) + (3rem * (3 - 1))); }\n    .col-sm-3:not(:last-child) {\n      margin-right: 3rem; } }\n\n@media only screen and (min-width: 37.5em) {\n  .col-sm-4 {\n    width: calc( (calc((100% - (11 * 3rem)) / 12) * 4) + (3rem * (4 - 1))); }\n    .col-sm-4:not(:last-child) {\n      margin-right: 3rem; } }\n\n@media only screen and (min-width: 37.5em) {\n  .col-sm-5 {\n    width: calc( (calc((100% - (11 * 3rem)) / 12) * 5) + (3rem * (5 - 1))); }\n    .col-sm-5:not(:last-child) {\n      margin-right: 3rem; } }\n\n@media only screen and (min-width: 37.5em) {\n  .col-sm-6 {\n    width: calc( (calc((100% - (11 * 3rem)) / 12) * 6) + (3rem * (6 - 1))); }\n    .col-sm-6:not(:last-child) {\n      margin-right: 3rem; } }\n\n@media only screen and (min-width: 37.5em) {\n  .col-sm-7 {\n    width: calc( (calc((100% - (11 * 3rem)) / 12) * 7) + (3rem * (7 - 1))); }\n    .col-sm-7:not(:last-child) {\n      margin-right: 3rem; } }\n\n@media only screen and (min-width: 37.5em) {\n  .col-sm-8 {\n    width: calc( (calc((100% - (11 * 3rem)) / 12) * 8) + (3rem * (8 - 1))); }\n    .col-sm-8:not(:last-child) {\n      margin-right: 3rem; } }\n\n@media only screen and (min-width: 37.5em) {\n  .col-sm-9 {\n    width: calc( (calc((100% - (11 * 3rem)) / 12) * 9) + (3rem * (9 - 1))); }\n    .col-sm-9:not(:last-child) {\n      margin-right: 3rem; } }\n\n@media only screen and (min-width: 37.5em) {\n  .col-sm-10 {\n    width: calc( (calc((100% - (11 * 3rem)) / 12) * 10) + (3rem * (10 - 1))); }\n    .col-sm-10:not(:last-child) {\n      margin-right: 3rem; } }\n\n@media only screen and (min-width: 37.5em) {\n  .col-sm-11 {\n    width: calc( (calc((100% - (11 * 3rem)) / 12) * 11) + (3rem * (11 - 1))); }\n    .col-sm-11:not(:last-child) {\n      margin-right: 3rem; } }\n\n@media only screen and (min-width: 37.5em) {\n  .col-sm-12 {\n    width: calc( (calc((100% - (11 * 3rem)) / 12) * 12) + (3rem * (12 - 1))); } }\n\n@media only screen and (min-width: 56.25em) {\n  .col-md-1 {\n    width: calc( (calc((100% - (11 * 3rem)) / 12) * 1) + (3rem * (1 - 1))); }\n    .col-md-1:not(:last-child) {\n      margin-right: 3rem; } }\n\n@media only screen and (min-width: 56.25em) {\n  .col-md-2 {\n    width: calc( (calc((100% - (11 * 3rem)) / 12) * 2) + (3rem * (2 - 1))); }\n    .col-md-2:not(:last-child) {\n      margin-right: 3rem; } }\n\n@media only screen and (min-width: 56.25em) {\n  .col-md-3 {\n    width: calc( (calc((100% - (11 * 3rem)) / 12) * 3) + (3rem * (3 - 1))); }\n    .col-md-3:not(:last-child) {\n      margin-right: 3rem; } }\n\n@media only screen and (min-width: 56.25em) {\n  .col-md-4 {\n    width: calc( (calc((100% - (11 * 3rem)) / 12) * 4) + (3rem * (4 - 1))); }\n    .col-md-4:not(:last-child) {\n      margin-right: 3rem; } }\n\n@media only screen and (min-width: 56.25em) {\n  .col-md-5 {\n    width: calc( (calc((100% - (11 * 3rem)) / 12) * 5) + (3rem * (5 - 1))); }\n    .col-md-5:not(:last-child) {\n      margin-right: 3rem; } }\n\n@media only screen and (min-width: 56.25em) {\n  .col-md-6 {\n    width: calc( (calc((100% - (11 * 3rem)) / 12) * 6) + (3rem * (6 - 1))); }\n    .col-md-6:not(:last-child) {\n      margin-right: 3rem; } }\n\n@media only screen and (min-width: 56.25em) {\n  .col-md-7 {\n    width: calc( (calc((100% - (11 * 3rem)) / 12) * 7) + (3rem * (7 - 1))); }\n    .col-md-7:not(:last-child) {\n      margin-right: 3rem; } }\n\n@media only screen and (min-width: 56.25em) {\n  .col-md-8 {\n    width: calc( (calc((100% - (11 * 3rem)) / 12) * 8) + (3rem * (8 - 1))); }\n    .col-md-8:not(:last-child) {\n      margin-right: 3rem; } }\n\n@media only screen and (min-width: 56.25em) {\n  .col-md-9 {\n    width: calc( (calc((100% - (11 * 3rem)) / 12) * 9) + (3rem * (9 - 1))); }\n    .col-md-9:not(:last-child) {\n      margin-right: 3rem; } }\n\n@media only screen and (min-width: 56.25em) {\n  .col-md-10 {\n    width: calc( (calc((100% - (11 * 3rem)) / 12) * 10) + (3rem * (10 - 1))); }\n    .col-md-10:not(:last-child) {\n      margin-right: 3rem; } }\n\n@media only screen and (min-width: 56.25em) {\n  .col-md-11 {\n    width: calc( (calc((100% - (11 * 3rem)) / 12) * 11) + (3rem * (11 - 1))); }\n    .col-md-11:not(:last-child) {\n      margin-right: 3rem; } }\n\n@media only screen and (min-width: 56.25em) {\n  .col-md-12 {\n    width: calc( (calc((100% - (11 * 3rem)) / 12) * 12) + (3rem * (12 - 1))); } }\n\n@media only screen and (min-width: 75em) {\n  .col-lg-1 {\n    width: calc( (calc((100% - (11 * 3rem)) / 12) * 1) + (3rem * (1 - 1))); }\n    .col-lg-1:not(:last-child) {\n      margin-right: 3rem; } }\n\n@media only screen and (min-width: 75em) {\n  .col-lg-2 {\n    width: calc( (calc((100% - (11 * 3rem)) / 12) * 2) + (3rem * (2 - 1))); }\n    .col-lg-2:not(:last-child) {\n      margin-right: 3rem; } }\n\n@media only screen and (min-width: 75em) {\n  .col-lg-3 {\n    width: calc( (calc((100% - (11 * 3rem)) / 12) * 3) + (3rem * (3 - 1))); }\n    .col-lg-3:not(:last-child) {\n      margin-right: 3rem; } }\n\n@media only screen and (min-width: 75em) {\n  .col-lg-4 {\n    width: calc( (calc((100% - (11 * 3rem)) / 12) * 4) + (3rem * (4 - 1))); }\n    .col-lg-4:not(:last-child) {\n      margin-right: 3rem; } }\n\n@media only screen and (min-width: 75em) {\n  .col-lg-5 {\n    width: calc( (calc((100% - (11 * 3rem)) / 12) * 5) + (3rem * (5 - 1))); }\n    .col-lg-5:not(:last-child) {\n      margin-right: 3rem; } }\n\n@media only screen and (min-width: 75em) {\n  .col-lg-6 {\n    width: calc( (calc((100% - (11 * 3rem)) / 12) * 6) + (3rem * (6 - 1))); }\n    .col-lg-6:not(:last-child) {\n      margin-right: 3rem; } }\n\n@media only screen and (min-width: 75em) {\n  .col-lg-7 {\n    width: calc( (calc((100% - (11 * 3rem)) / 12) * 7) + (3rem * (7 - 1))); }\n    .col-lg-7:not(:last-child) {\n      margin-right: 3rem; } }\n\n@media only screen and (min-width: 75em) {\n  .col-lg-8 {\n    width: calc( (calc((100% - (11 * 3rem)) / 12) * 8) + (3rem * (8 - 1))); }\n    .col-lg-8:not(:last-child) {\n      margin-right: 3rem; } }\n\n@media only screen and (min-width: 75em) {\n  .col-lg-9 {\n    width: calc( (calc((100% - (11 * 3rem)) / 12) * 9) + (3rem * (9 - 1))); }\n    .col-lg-9:not(:last-child) {\n      margin-right: 3rem; } }\n\n@media only screen and (min-width: 75em) {\n  .col-lg-10 {\n    width: calc( (calc((100% - (11 * 3rem)) / 12) * 10) + (3rem * (10 - 1))); }\n    .col-lg-10:not(:last-child) {\n      margin-right: 3rem; } }\n\n@media only screen and (min-width: 75em) {\n  .col-lg-11 {\n    width: calc( (calc((100% - (11 * 3rem)) / 12) * 11) + (3rem * (11 - 1))); }\n    .col-lg-11:not(:last-child) {\n      margin-right: 3rem; } }\n\n@media only screen and (min-width: 75em) {\n  .col-lg-12 {\n    width: calc( (calc((100% - (11 * 3rem)) / 12) * 12) + (3rem * (12 - 1))); } }\n\n.col-xl-1 {\n  width: calc( (calc((100% - (11 * 3rem)) / 12) * 1) + (3rem * (1 - 1))); }\n  .col-xl-1:not(:last-child) {\n    margin-right: 3rem; }\n\n.col-xl-2 {\n  width: calc( (calc((100% - (11 * 3rem)) / 12) * 2) + (3rem * (2 - 1))); }\n  .col-xl-2:not(:last-child) {\n    margin-right: 3rem; }\n\n.col-xl-3 {\n  width: calc( (calc((100% - (11 * 3rem)) / 12) * 3) + (3rem * (3 - 1))); }\n  .col-xl-3:not(:last-child) {\n    margin-right: 3rem; }\n\n.col-xl-4 {\n  width: calc( (calc((100% - (11 * 3rem)) / 12) * 4) + (3rem * (4 - 1))); }\n  .col-xl-4:not(:last-child) {\n    margin-right: 3rem; }\n\n.col-xl-5 {\n  width: calc( (calc((100% - (11 * 3rem)) / 12) * 5) + (3rem * (5 - 1))); }\n  .col-xl-5:not(:last-child) {\n    margin-right: 3rem; }\n\n.col-xl-6 {\n  width: calc( (calc((100% - (11 * 3rem)) / 12) * 6) + (3rem * (6 - 1))); }\n  .col-xl-6:not(:last-child) {\n    margin-right: 3rem; }\n\n.col-xl-7 {\n  width: calc( (calc((100% - (11 * 3rem)) / 12) * 7) + (3rem * (7 - 1))); }\n  .col-xl-7:not(:last-child) {\n    margin-right: 3rem; }\n\n.col-xl-8 {\n  width: calc( (calc((100% - (11 * 3rem)) / 12) * 8) + (3rem * (8 - 1))); }\n  .col-xl-8:not(:last-child) {\n    margin-right: 3rem; }\n\n.col-xl-9 {\n  width: calc( (calc((100% - (11 * 3rem)) / 12) * 9) + (3rem * (9 - 1))); }\n  .col-xl-9:not(:last-child) {\n    margin-right: 3rem; }\n\n.col-xl-10 {\n  width: calc( (calc((100% - (11 * 3rem)) / 12) * 10) + (3rem * (10 - 1))); }\n  .col-xl-10:not(:last-child) {\n    margin-right: 3rem; }\n\n.col-xl-11 {\n  width: calc( (calc((100% - (11 * 3rem)) / 12) * 11) + (3rem * (11 - 1))); }\n  .col-xl-11:not(:last-child) {\n    margin-right: 3rem; }\n\n.col-xl-12 {\n  width: calc( (calc((100% - (11 * 3rem)) / 12) * 12) + (3rem * (12 - 1))); }\n';
styleInject(css_248z$6);

var Row = function (props) {
  return React.createElement(
    "div",
    __assign({}, props, { className: "row " + props.className }),
    props.children
  );
};

var Col = function (props) {
  var xs = props.xs,
    sm = props.sm,
    md = props.md,
    lg = props.lg,
    xl = props.xl;
  if (props.span && props.total) {
    return React.createElement(
      "div",
      __assign({}, props, {
        className:
          "col col-" +
          props.span +
          "-of-" +
          props.total +
          " " +
          props.className,
      }),
      props.children
    );
  } else {
    var layoutClasses = "col-12-layout ";
    if (xs) {
      layoutClasses += "col-xs-" + xs + " ";
    }
    if (sm) {
      layoutClasses += "col-sm-" + sm + " ";
    }
    if (md) {
      layoutClasses += "col-md-" + md + " ";
    }
    if (lg) {
      layoutClasses += "col-lg-" + lg + " ";
    }
    if (md) {
      layoutClasses += "col-xl-" + xl;
    }
    return React.createElement(
      "div",
      __assign({}, props, { className: layoutClasses + " " + props.className }),
      props.children
    );
  }
};

var css_248z$7 =
  '@import url("https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;500;700&family=Roboto:wght@300;400;500&display=swap");\n/*\n0 - 400px:    Mini - phone - xs\n400 - 600px:    Phone - sm\n600 - 900px:    Tablet portrait - md\n900 - 1200px:   Tablet landscape - lg\n[1200 - 1800] is where our normal styles apply\n1800px + :      Big desktop - xl\n$breakpoint arguement choices:\n- mini-phone\n- phone\n- tab-port\n- tab-land\n- big-desktop\nORDER: Base + typography > general layout + grid > page layout > components\n1em = 16px\n*/\n*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  -webkit-box-sizing: inherit;\n          box-sizing: inherit;\n  position: relative; }\n\nol,\nul,\ndl {\n  margin: 0; }\n\nhtml {\n  font-size: 62.5%;\n  scroll-behavior: smooth; }\n  @media only screen and (max-width: 75em) {\n    html {\n      font-size: 56.25%; } }\n  @media only screen and (max-width: 56.25em) {\n    html {\n      font-size: 50%; } }\n  @media only screen and (max-width: 25em) {\n    html {\n      font-size: 37.5%; } }\n  @media only screen and (min-width: 112.5em) {\n    html {\n      font-size: 75%; } }\n\nbody {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  overflow-x: hidden !important;\n  -webkit-font-smoothing: antialiased;\n  color: #333;\n  font-family: "Roboto", sans-serif;\n  font-size: 1.6rem; }\n  @media only screen and (max-width: 75em) {\n    body {\n      font-size: 1.77rem; } }\n  @media only screen and (max-width: 56.25em) {\n    body {\n      font-size: 2rem;\n      padding: 0; } }\n  @media only screen and (max-width: 25em) {\n    body {\n      font-size: 2rem; } }\n  @media only screen and (min-width: 112.5em) {\n    body {\n      font-size: 1.3rem; } }\n\nimg {\n  width: 100%; }\n\nfigure {\n  margin: 0; }\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  margin: 0;\n  color: inherit;\n  font-size: inherit;\n  font-family: inherit;\n  line-height: inherit; }\n\ntextarea {\n  -ms-touch-action: manipulation;\n      touch-action: manipulation;\n  -webkit-appearance: none;\n  overflow: auto;\n  resize: vertical; }\n\na {\n  text-decoration: none;\n  color: #333; }\n\np {\n  margin: 0; }\n\n.u-center-text {\n  text-align: center !important; }\n\n.u-center-right {\n  text-align: right !important; }\n\n.u-center-flex-cross {\n  -ms-flex-item-align: center;\n      align-self: center; }\n\n.u-margin-bottom-nano {\n  margin-bottom: 1rem !important; }\n\n.u-margin-bottom-small {\n  margin-bottom: 1.5rem !important; }\n\n.u-margin-bottom-medium {\n  margin-bottom: 3rem !important; }\n  @media only screen and (max-width: 56.25em) {\n    .u-margin-bottom-medium {\n      margin-bottom: 3rem !important; } }\n\n.u-margin-bottom-large {\n  margin-bottom: 6rem !important; }\n  @media only screen and (max-width: 56.25em) {\n    .u-margin-bottom-large {\n      margin-bottom: 6rem !important; } }\n\n.u-margin-bottom-big {\n  margin-bottom: 8rem !important; }\n  @media only screen and (max-width: 56.25em) {\n    .u-margin-bottom-big {\n      margin-bottom: 8rem !important; } }\n\n.u-margin-bottom-huge {\n  margin-bottom: 10rem !important; }\n\n.u-margin-top-big {\n  margin-top: 8rem !important; }\n\n.u-margin-top-huge {\n  margin-top: 10rem !important; }\n\n/*\n* Text utilities\n*/\n.bold {\n  font-weight: 700; }\n\n.regular {\n  font-weight: 400; }\n\n@-webkit-keyframes rotate {\n  0% {\n    -webkit-transform: rotateZ(0);\n            transform: rotateZ(0); }\n  50% {\n    -webkit-transform: rotateZ(45deg);\n            transform: rotateZ(45deg); }\n  100% {\n    -webkit-transform: rotateZ(360deg);\n            transform: rotateZ(360deg); } }\n\n@keyframes rotate {\n  0% {\n    -webkit-transform: rotateZ(0);\n            transform: rotateZ(0); }\n  50% {\n    -webkit-transform: rotateZ(45deg);\n            transform: rotateZ(45deg); }\n  100% {\n    -webkit-transform: rotateZ(360deg);\n            transform: rotateZ(360deg); } }\n\n.card {\n  padding: 3rem;\n  background: #fff;\n  border-radius: 4px;\n  min-width: 10rem;\n  width: 100%; }\n  .card--border {\n    -webkit-box-shadow: 0 1px 3px 0 #d9d9d9, 0 0 0 1px #d9d9d9;\n            box-shadow: 0 1px 3px 0 #d9d9d9, 0 0 0 1px #d9d9d9; }\n  .card--shadow {\n    -webkit-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23); }\n';
styleInject(css_248z$7);

var Card = function (props) {
  return React.createElement(
    "div",
    __assign({}, props, {
      className: "card card--" + props.type + " " + props.className,
    }),
    props.children
  );
};

var css_248z$8 =
  '@import url("https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;500;700&family=Roboto:wght@300;400;500&display=swap");\n/*\n0 - 400px:    Mini - phone - xs\n400 - 600px:    Phone - sm\n600 - 900px:    Tablet portrait - md\n900 - 1200px:   Tablet landscape - lg\n[1200 - 1800] is where our normal styles apply\n1800px + :      Big desktop - xl\n$breakpoint arguement choices:\n- mini-phone\n- phone\n- tab-port\n- tab-land\n- big-desktop\nORDER: Base + typography > general layout + grid > page layout > components\n1em = 16px\n*/\n*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  -webkit-box-sizing: inherit;\n          box-sizing: inherit;\n  position: relative; }\n\nol,\nul,\ndl {\n  margin: 0; }\n\nhtml {\n  font-size: 62.5%;\n  scroll-behavior: smooth; }\n  @media only screen and (max-width: 75em) {\n    html {\n      font-size: 56.25%; } }\n  @media only screen and (max-width: 56.25em) {\n    html {\n      font-size: 50%; } }\n  @media only screen and (max-width: 25em) {\n    html {\n      font-size: 37.5%; } }\n  @media only screen and (min-width: 112.5em) {\n    html {\n      font-size: 75%; } }\n\nbody {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  overflow-x: hidden !important;\n  -webkit-font-smoothing: antialiased;\n  color: #333;\n  font-family: "Roboto", sans-serif;\n  font-size: 1.6rem; }\n  @media only screen and (max-width: 75em) {\n    body {\n      font-size: 1.77rem; } }\n  @media only screen and (max-width: 56.25em) {\n    body {\n      font-size: 2rem;\n      padding: 0; } }\n  @media only screen and (max-width: 25em) {\n    body {\n      font-size: 2rem; } }\n  @media only screen and (min-width: 112.5em) {\n    body {\n      font-size: 1.3rem; } }\n\nimg {\n  width: 100%; }\n\nfigure {\n  margin: 0; }\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  margin: 0;\n  color: inherit;\n  font-size: inherit;\n  font-family: inherit;\n  line-height: inherit; }\n\ntextarea {\n  -ms-touch-action: manipulation;\n      touch-action: manipulation;\n  -webkit-appearance: none;\n  overflow: auto;\n  resize: vertical; }\n\na {\n  text-decoration: none;\n  color: #333; }\n\np {\n  margin: 0; }\n\n.u-center-text {\n  text-align: center !important; }\n\n.u-center-right {\n  text-align: right !important; }\n\n.u-center-flex-cross {\n  -ms-flex-item-align: center;\n      align-self: center; }\n\n.u-margin-bottom-nano {\n  margin-bottom: 1rem !important; }\n\n.u-margin-bottom-small {\n  margin-bottom: 1.5rem !important; }\n\n.u-margin-bottom-medium {\n  margin-bottom: 3rem !important; }\n  @media only screen and (max-width: 56.25em) {\n    .u-margin-bottom-medium {\n      margin-bottom: 3rem !important; } }\n\n.u-margin-bottom-large {\n  margin-bottom: 6rem !important; }\n  @media only screen and (max-width: 56.25em) {\n    .u-margin-bottom-large {\n      margin-bottom: 6rem !important; } }\n\n.u-margin-bottom-big {\n  margin-bottom: 8rem !important; }\n  @media only screen and (max-width: 56.25em) {\n    .u-margin-bottom-big {\n      margin-bottom: 8rem !important; } }\n\n.u-margin-bottom-huge {\n  margin-bottom: 10rem !important; }\n\n.u-margin-top-big {\n  margin-top: 8rem !important; }\n\n.u-margin-top-huge {\n  margin-top: 10rem !important; }\n\n/*\n* Text utilities\n*/\n.bold {\n  font-weight: 700; }\n\n.regular {\n  font-weight: 400; }\n\n@-webkit-keyframes rotate {\n  0% {\n    -webkit-transform: rotateZ(0);\n            transform: rotateZ(0); }\n  50% {\n    -webkit-transform: rotateZ(45deg);\n            transform: rotateZ(45deg); }\n  100% {\n    -webkit-transform: rotateZ(360deg);\n            transform: rotateZ(360deg); } }\n\n@keyframes rotate {\n  0% {\n    -webkit-transform: rotateZ(0);\n            transform: rotateZ(0); }\n  50% {\n    -webkit-transform: rotateZ(45deg);\n            transform: rotateZ(45deg); }\n  100% {\n    -webkit-transform: rotateZ(360deg);\n            transform: rotateZ(360deg); } }\n\n.notification-container {\n  font-size: 1.4rem;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  position: fixed;\n  z-index: 999999; }\n\n.top-right {\n  top: 1.2rem;\n  right: 1.2rem;\n  -webkit-transition: -webkit-transform 0.6s ease-in-out;\n  transition: -webkit-transform 0.6s ease-in-out;\n  transition: transform 0.6s ease-in-out;\n  transition: transform 0.6s ease-in-out, -webkit-transform 0.6s ease-in-out;\n  -webkit-animation: toast-in-right 0.7s;\n          animation: toast-in-right 0.7s; }\n\n.bottom-right {\n  bottom: 1.2rem;\n  right: 1.2rem;\n  -webkit-transition: -webkit-transform 0.6s ease-in-out;\n  transition: -webkit-transform 0.6s ease-in-out;\n  transition: transform 0.6s ease-in-out;\n  transition: transform 0.6s ease-in-out, -webkit-transform 0.6s ease-in-out;\n  -webkit-animation: toast-in-right 0.7s;\n          animation: toast-in-right 0.7s; }\n\n.top-left {\n  top: 1.2rem;\n  left: 1.2rem;\n  -webkit-transition: -webkit-transform 0.6s ease-in;\n  transition: -webkit-transform 0.6s ease-in;\n  transition: transform 0.6s ease-in;\n  transition: transform 0.6s ease-in, -webkit-transform 0.6s ease-in;\n  -webkit-animation: toast-in-left 0.7s;\n          animation: toast-in-left 0.7s; }\n\n.bottom-left {\n  bottom: 1.2rem;\n  left: 1.2rem;\n  -webkit-transition: -webkit-transform 0.6s ease-in;\n  transition: -webkit-transform 0.6s ease-in;\n  transition: transform 0.6s ease-in;\n  transition: transform 0.6s ease-in, -webkit-transform 0.6s ease-in;\n  -webkit-animation: toast-in-left 0.7s;\n          animation: toast-in-left 0.7s; }\n\n.notification {\n  background: #fff;\n  -webkit-transition: 0.3s ease;\n  transition: 0.3s ease;\n  position: relative;\n  pointer-events: auto;\n  overflow: hidden;\n  margin: 0 0 6px;\n  padding: 3rem;\n  margin-bottom: 1.5rem;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  border-radius: 3px 3px 3px 3px;\n  -webkit-box-shadow: 0 0 1rem #999;\n          box-shadow: 0 0 1rem #999;\n  color: #000;\n  opacity: 0.9;\n  background-position: 1.5rem;\n  background-repeat: no-repeat; }\n\n.notification:hover {\n  -webkit-box-shadow: 0 0 1.2rem #fff;\n          box-shadow: 0 0 1.2rem #fff;\n  opacity: 1;\n  cursor: pointer; }\n\n.notification-title {\n  font-weight: 700;\n  font-size: 1.6rem;\n  text-align: left;\n  margin-top: 0;\n  margin-bottom: 1rem;\n  z-index: 1; }\n\n.notification-message {\n  margin: 0;\n  text-align: left;\n  line-height: 1.6;\n  z-index: 2; }\n\n.notification-image {\n  float: left;\n  margin-right: 1.5rem; }\n\n.notification-image img {\n  width: 3rem;\n  height: 3rem; }\n\n.toast {\n  min-height: 5rem;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  width: 36rem;\n  color: #fff;\n  padding: 2.5rem; }\n\n.notification-container button {\n  font-weight: 700;\n  color: #fff;\n  outline: none;\n  border: none;\n  text-shadow: 0 1px 0 #fff;\n  opacity: 0.8;\n  line-height: 1;\n  font-size: 1.6rem;\n  padding: 0;\n  cursor: pointer;\n  background: 0 0;\n  border: 0;\n  z-index: 10; }\n\n.notification-close {\n  position: absolute;\n  right: 2rem;\n  top: 2rem;\n  width: 2rem;\n  height: 2rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n@-webkit-keyframes toast-in-right {\n  from {\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%); }\n  to {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); } }\n\n@keyframes toast-in-right {\n  from {\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%); }\n  to {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); } }\n\n@-webkit-keyframes toast-in-left {\n  from {\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%); }\n  to {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); } }\n\n@keyframes toast-in-left {\n  from {\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%); }\n  to {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); } }\n';
styleInject(css_248z$8);

var Notification = function (_a) {
  var toastList = _a.toastList,
    position = _a.position,
    autoDelete = _a.autoDelete,
    dismissTime = _a.dismissTime;
  var _b = useState(toastList),
    list = _b[0],
    setList = _b[1];
  useEffect(
    function () {
      setList(__spreadArrays(toastList));
      // eslint-disable-next-line
    },
    [toastList]
  );
  useEffect(
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
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      "div",
      { className: "notification-container " + position },
      list.map(function (toast, i) {
        return React.createElement(
          "div",
          {
            key: i,
            className: "notification toast " + position,
            style: { backgroundColor: toast.backgroundColor },
          },
          React.createElement(
            "div",
            {
              className: "notification-close",
              onClick: function () {
                return deleteToast(toast.id);
              },
            },
            React.createElement("button", null, "X")
          ),
          React.createElement(
            "div",
            { className: "notification-image" },
            toast.icon
          ),
          React.createElement(
            "div",
            null,
            React.createElement(
              "p",
              { className: "notification-title" },
              toast.title
            ),
            React.createElement(
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

var css_248z$9 =
  '@import url("https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;500;700&family=Roboto:wght@300;400;500&display=swap");\n/*\n0 - 400px:    Mini - phone - xs\n400 - 600px:    Phone - sm\n600 - 900px:    Tablet portrait - md\n900 - 1200px:   Tablet landscape - lg\n[1200 - 1800] is where our normal styles apply\n1800px + :      Big desktop - xl\n$breakpoint arguement choices:\n- mini-phone\n- phone\n- tab-port\n- tab-land\n- big-desktop\nORDER: Base + typography > general layout + grid > page layout > components\n1em = 16px\n*/\n*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  -webkit-box-sizing: inherit;\n          box-sizing: inherit;\n  position: relative; }\n\nol,\nul,\ndl {\n  margin: 0; }\n\nhtml {\n  font-size: 62.5%;\n  scroll-behavior: smooth; }\n  @media only screen and (max-width: 75em) {\n    html {\n      font-size: 56.25%; } }\n  @media only screen and (max-width: 56.25em) {\n    html {\n      font-size: 50%; } }\n  @media only screen and (max-width: 25em) {\n    html {\n      font-size: 37.5%; } }\n  @media only screen and (min-width: 112.5em) {\n    html {\n      font-size: 75%; } }\n\nbody {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  overflow-x: hidden !important;\n  -webkit-font-smoothing: antialiased;\n  color: #333;\n  font-family: "Roboto", sans-serif;\n  font-size: 1.6rem; }\n  @media only screen and (max-width: 75em) {\n    body {\n      font-size: 1.77rem; } }\n  @media only screen and (max-width: 56.25em) {\n    body {\n      font-size: 2rem;\n      padding: 0; } }\n  @media only screen and (max-width: 25em) {\n    body {\n      font-size: 2rem; } }\n  @media only screen and (min-width: 112.5em) {\n    body {\n      font-size: 1.3rem; } }\n\nimg {\n  width: 100%; }\n\nfigure {\n  margin: 0; }\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  margin: 0;\n  color: inherit;\n  font-size: inherit;\n  font-family: inherit;\n  line-height: inherit; }\n\ntextarea {\n  -ms-touch-action: manipulation;\n      touch-action: manipulation;\n  -webkit-appearance: none;\n  overflow: auto;\n  resize: vertical; }\n\na {\n  text-decoration: none;\n  color: #333; }\n\np {\n  margin: 0; }\n\n.u-center-text {\n  text-align: center !important; }\n\n.u-center-right {\n  text-align: right !important; }\n\n.u-center-flex-cross {\n  -ms-flex-item-align: center;\n      align-self: center; }\n\n.u-margin-bottom-nano {\n  margin-bottom: 1rem !important; }\n\n.u-margin-bottom-small {\n  margin-bottom: 1.5rem !important; }\n\n.u-margin-bottom-medium {\n  margin-bottom: 3rem !important; }\n  @media only screen and (max-width: 56.25em) {\n    .u-margin-bottom-medium {\n      margin-bottom: 3rem !important; } }\n\n.u-margin-bottom-large {\n  margin-bottom: 6rem !important; }\n  @media only screen and (max-width: 56.25em) {\n    .u-margin-bottom-large {\n      margin-bottom: 6rem !important; } }\n\n.u-margin-bottom-big {\n  margin-bottom: 8rem !important; }\n  @media only screen and (max-width: 56.25em) {\n    .u-margin-bottom-big {\n      margin-bottom: 8rem !important; } }\n\n.u-margin-bottom-huge {\n  margin-bottom: 10rem !important; }\n\n.u-margin-top-big {\n  margin-top: 8rem !important; }\n\n.u-margin-top-huge {\n  margin-top: 10rem !important; }\n\n/*\n* Text utilities\n*/\n.bold {\n  font-weight: 700; }\n\n.regular {\n  font-weight: 400; }\n\n@-webkit-keyframes rotate {\n  0% {\n    -webkit-transform: rotateZ(0);\n            transform: rotateZ(0); }\n  50% {\n    -webkit-transform: rotateZ(45deg);\n            transform: rotateZ(45deg); }\n  100% {\n    -webkit-transform: rotateZ(360deg);\n            transform: rotateZ(360deg); } }\n\n@keyframes rotate {\n  0% {\n    -webkit-transform: rotateZ(0);\n            transform: rotateZ(0); }\n  50% {\n    -webkit-transform: rotateZ(45deg);\n            transform: rotateZ(45deg); }\n  100% {\n    -webkit-transform: rotateZ(360deg);\n            transform: rotateZ(360deg); } }\n\n.table {\n  border: 1px solid #eeeeee;\n  border-radius: 5px;\n  width: 100%;\n  border-spacing: 0;\n  border-collapse: collapse; }\n  .table td {\n    font-size: 1.4rem;\n    font-weight: 100;\n    color: #32312f; }\n  .table th,\n  .table td {\n    text-align: center;\n    padding: 2rem;\n    border-bottom: 1px solid #eee;\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    white-space: nowrap; }\n    .table th:not(:last-child),\n    .table td:not(:last-child) {\n      border-right: 1px solid #eee; }\n  .table th,\n  .table .table__heading {\n    font-size: 1.4rem;\n    font-weight: 400;\n    color: #32312f;\n    line-height: 1.6; }\n  .table td {\n    padding: 3rem;\n    border-bottom: 1px solid #eee; }\n    .table td:not(:last-child) {\n      border-right: 1px solid #eee; }\n  .table th {\n    background: #fcfcfc; }\n';
styleInject(css_248z$9);

var Table = function (_a) {
  var headings = _a.headings,
    values = _a.values,
    className = _a.className;
  var headingJsx = [];
  var bodyJsx = [];
  _.map(headings, function (heading, index) {
    headingJsx.push(React.createElement("th", null, heading));
    bodyJsx.push(
      React.createElement(
        "tr",
        null,
        _.map(values[index], function (data) {
          return !!data.render
            ? React.createElement(
                "td",
                { className: data.isHeading ? "table__heading" : "" },
                data.render(data.value)
              )
            : React.createElement(
                "td",
                { className: data.isHeading ? "table__heading" : "" },
                data.value
              );
        })
      )
    );
  });
  return React.createElement(
    "table",
    { className: "table " + className },
    React.createElement(
      "thead",
      { className: "table__head" },
      React.createElement("tr", null, headingJsx)
    ),
    React.createElement("tbody", { className: "table__body" }, bodyJsx)
  );
};

var css_248z$a =
  '@import url("https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;500;700&family=Roboto:wght@300;400;500&display=swap");\n/*\n0 - 400px:    Mini - phone - xs\n400 - 600px:    Phone - sm\n600 - 900px:    Tablet portrait - md\n900 - 1200px:   Tablet landscape - lg\n[1200 - 1800] is where our normal styles apply\n1800px + :      Big desktop - xl\n$breakpoint arguement choices:\n- mini-phone\n- phone\n- tab-port\n- tab-land\n- big-desktop\nORDER: Base + typography > general layout + grid > page layout > components\n1em = 16px\n*/\n*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  -webkit-box-sizing: inherit;\n          box-sizing: inherit;\n  position: relative; }\n\nol,\nul,\ndl {\n  margin: 0; }\n\nhtml {\n  font-size: 62.5%;\n  scroll-behavior: smooth; }\n  @media only screen and (max-width: 75em) {\n    html {\n      font-size: 56.25%; } }\n  @media only screen and (max-width: 56.25em) {\n    html {\n      font-size: 50%; } }\n  @media only screen and (max-width: 25em) {\n    html {\n      font-size: 37.5%; } }\n  @media only screen and (min-width: 112.5em) {\n    html {\n      font-size: 75%; } }\n\nbody {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  overflow-x: hidden !important;\n  -webkit-font-smoothing: antialiased;\n  color: #333;\n  font-family: "Roboto", sans-serif;\n  font-size: 1.6rem; }\n  @media only screen and (max-width: 75em) {\n    body {\n      font-size: 1.77rem; } }\n  @media only screen and (max-width: 56.25em) {\n    body {\n      font-size: 2rem;\n      padding: 0; } }\n  @media only screen and (max-width: 25em) {\n    body {\n      font-size: 2rem; } }\n  @media only screen and (min-width: 112.5em) {\n    body {\n      font-size: 1.3rem; } }\n\nimg {\n  width: 100%; }\n\nfigure {\n  margin: 0; }\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  margin: 0;\n  color: inherit;\n  font-size: inherit;\n  font-family: inherit;\n  line-height: inherit; }\n\ntextarea {\n  -ms-touch-action: manipulation;\n      touch-action: manipulation;\n  -webkit-appearance: none;\n  overflow: auto;\n  resize: vertical; }\n\na {\n  text-decoration: none;\n  color: #333; }\n\np {\n  margin: 0; }\n\n.u-center-text {\n  text-align: center !important; }\n\n.u-center-right {\n  text-align: right !important; }\n\n.u-center-flex-cross {\n  -ms-flex-item-align: center;\n      align-self: center; }\n\n.u-margin-bottom-nano {\n  margin-bottom: 1rem !important; }\n\n.u-margin-bottom-small {\n  margin-bottom: 1.5rem !important; }\n\n.u-margin-bottom-medium {\n  margin-bottom: 3rem !important; }\n  @media only screen and (max-width: 56.25em) {\n    .u-margin-bottom-medium {\n      margin-bottom: 3rem !important; } }\n\n.u-margin-bottom-large {\n  margin-bottom: 6rem !important; }\n  @media only screen and (max-width: 56.25em) {\n    .u-margin-bottom-large {\n      margin-bottom: 6rem !important; } }\n\n.u-margin-bottom-big {\n  margin-bottom: 8rem !important; }\n  @media only screen and (max-width: 56.25em) {\n    .u-margin-bottom-big {\n      margin-bottom: 8rem !important; } }\n\n.u-margin-bottom-huge {\n  margin-bottom: 10rem !important; }\n\n.u-margin-top-big {\n  margin-top: 8rem !important; }\n\n.u-margin-top-huge {\n  margin-top: 10rem !important; }\n\n/*\n* Text utilities\n*/\n.bold {\n  font-weight: 700; }\n\n.regular {\n  font-weight: 400; }\n\n@-webkit-keyframes rotate {\n  0% {\n    -webkit-transform: rotateZ(0);\n            transform: rotateZ(0); }\n  50% {\n    -webkit-transform: rotateZ(45deg);\n            transform: rotateZ(45deg); }\n  100% {\n    -webkit-transform: rotateZ(360deg);\n            transform: rotateZ(360deg); } }\n\n@keyframes rotate {\n  0% {\n    -webkit-transform: rotateZ(0);\n            transform: rotateZ(0); }\n  50% {\n    -webkit-transform: rotateZ(45deg);\n            transform: rotateZ(45deg); }\n  100% {\n    -webkit-transform: rotateZ(360deg);\n            transform: rotateZ(360deg); } }\n\n.dimmer {\n  position: relative; }\n  .dimmer__bg {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, 0.85);\n    z-index: 9; }\n  .dimmer__loading {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    z-index: 10; }\n';
styleInject(css_248z$a);

var Dimmer = function (props) {
  var isLoading = props.isLoading === undefined ? true : props.isLoading;
  return React.createElement(
    "div",
    { className: "dimmer" },
    isLoading
      ? React.createElement("div", { className: "dimmer__bg" })
      : React.createElement(React.Fragment, null),
    props.children,
    isLoading
      ? React.createElement(
          "div",
          { className: "dimmer__loading" },
          props.loading
        )
      : React.createElement(React.Fragment, null)
  );
};

var css_248z$b =
  '@import url("https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;500;700&family=Roboto:wght@300;400;500&display=swap");\n/*\n0 - 400px:    Mini - phone - xs\n400 - 600px:    Phone - sm\n600 - 900px:    Tablet portrait - md\n900 - 1200px:   Tablet landscape - lg\n[1200 - 1800] is where our normal styles apply\n1800px + :      Big desktop - xl\n$breakpoint arguement choices:\n- mini-phone\n- phone\n- tab-port\n- tab-land\n- big-desktop\nORDER: Base + typography > general layout + grid > page layout > components\n1em = 16px\n*/\n*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  -webkit-box-sizing: inherit;\n          box-sizing: inherit;\n  position: relative; }\n\nol,\nul,\ndl {\n  margin: 0; }\n\nhtml {\n  font-size: 62.5%;\n  scroll-behavior: smooth; }\n  @media only screen and (max-width: 75em) {\n    html {\n      font-size: 56.25%; } }\n  @media only screen and (max-width: 56.25em) {\n    html {\n      font-size: 50%; } }\n  @media only screen and (max-width: 25em) {\n    html {\n      font-size: 37.5%; } }\n  @media only screen and (min-width: 112.5em) {\n    html {\n      font-size: 75%; } }\n\nbody {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  overflow-x: hidden !important;\n  -webkit-font-smoothing: antialiased;\n  color: #333;\n  font-family: "Roboto", sans-serif;\n  font-size: 1.6rem; }\n  @media only screen and (max-width: 75em) {\n    body {\n      font-size: 1.77rem; } }\n  @media only screen and (max-width: 56.25em) {\n    body {\n      font-size: 2rem;\n      padding: 0; } }\n  @media only screen and (max-width: 25em) {\n    body {\n      font-size: 2rem; } }\n  @media only screen and (min-width: 112.5em) {\n    body {\n      font-size: 1.3rem; } }\n\nimg {\n  width: 100%; }\n\nfigure {\n  margin: 0; }\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  margin: 0;\n  color: inherit;\n  font-size: inherit;\n  font-family: inherit;\n  line-height: inherit; }\n\ntextarea {\n  -ms-touch-action: manipulation;\n      touch-action: manipulation;\n  -webkit-appearance: none;\n  overflow: auto;\n  resize: vertical; }\n\na {\n  text-decoration: none;\n  color: #333; }\n\np {\n  margin: 0; }\n\n.u-center-text {\n  text-align: center !important; }\n\n.u-center-right {\n  text-align: right !important; }\n\n.u-center-flex-cross {\n  -ms-flex-item-align: center;\n      align-self: center; }\n\n.u-margin-bottom-nano {\n  margin-bottom: 1rem !important; }\n\n.u-margin-bottom-small {\n  margin-bottom: 1.5rem !important; }\n\n.u-margin-bottom-medium {\n  margin-bottom: 3rem !important; }\n  @media only screen and (max-width: 56.25em) {\n    .u-margin-bottom-medium {\n      margin-bottom: 3rem !important; } }\n\n.u-margin-bottom-large {\n  margin-bottom: 6rem !important; }\n  @media only screen and (max-width: 56.25em) {\n    .u-margin-bottom-large {\n      margin-bottom: 6rem !important; } }\n\n.u-margin-bottom-big {\n  margin-bottom: 8rem !important; }\n  @media only screen and (max-width: 56.25em) {\n    .u-margin-bottom-big {\n      margin-bottom: 8rem !important; } }\n\n.u-margin-bottom-huge {\n  margin-bottom: 10rem !important; }\n\n.u-margin-top-big {\n  margin-top: 8rem !important; }\n\n.u-margin-top-huge {\n  margin-top: 10rem !important; }\n\n/*\n* Text utilities\n*/\n.bold {\n  font-weight: 700; }\n\n.regular {\n  font-weight: 400; }\n\n@-webkit-keyframes rotate {\n  0% {\n    -webkit-transform: rotateZ(0);\n            transform: rotateZ(0); }\n  50% {\n    -webkit-transform: rotateZ(45deg);\n            transform: rotateZ(45deg); }\n  100% {\n    -webkit-transform: rotateZ(360deg);\n            transform: rotateZ(360deg); } }\n\n@keyframes rotate {\n  0% {\n    -webkit-transform: rotateZ(0);\n            transform: rotateZ(0); }\n  50% {\n    -webkit-transform: rotateZ(45deg);\n            transform: rotateZ(45deg); }\n  100% {\n    -webkit-transform: rotateZ(360deg);\n            transform: rotateZ(360deg); } }\n\n.chart__box {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  font-size: 1.2rem;\n  color: #fff;\n  min-width: 28rem;\n  color: rgba(255, 255, 255, 0.8); }\n  .chart__box > * {\n    padding: 1.5rem 2rem; }\n  .chart__box-heading {\n    background: #192147;\n    border-top-left-radius: 4px;\n    border-top-right-radius: 4px;\n    border-bottom: 0.5px solid rgba(255, 255, 255, 0.1);\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n    .chart__box-heading > *:first-child {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center; }\n  .chart__box-body {\n    background: #12193f;\n    border-bottom-left-radius: 4px;\n    border-bottom-right-radius: 4px;\n    font-size: 1.8rem;\n    padding: 2rem 0rem;\n    text-align: center;\n    color: rgba(255, 255, 255, 0.9);\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n    .chart__box-body > *:first-child {\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex; }\n      .chart__box-body > *:first-child > * {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column; }\n      .chart__box-body > *:first-child > *:not(:last-child) {\n        margin-right: 1.5rem;\n        padding-right: 1.5rem;\n        border-right: 0.5px solid rgba(255, 255, 255, 0.1); }\n  .chart__box-date {\n    margin-top: 1.5rem;\n    font-size: 1.2rem;\n    color: #67cb8b; }\n\n.chart__text {\n  margin-top: 0.5rem;\n  font-size: 1.2rem;\n  color: rgba(255, 255, 255, 0.7); }\n\n.charts {\n  display: initial; }\n  @media only screen and (max-width: 56.25em) {\n    .charts {\n      display: none; } }\n  .charts--mobile {\n    display: none; }\n    @media only screen and (max-width: 37.5em) {\n      .charts--mobile {\n        display: block; } }\n';
styleInject(css_248z$b);

var commonjsGlobal =
  typeof globalThis !== "undefined"
    ? globalThis
    : typeof window !== "undefined"
    ? window
    : typeof global !== "undefined"
    ? global
    : typeof self !== "undefined"
    ? self
    : {};

function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default")
    ? x["default"]
    : x;
}

function createCommonjsModule(fn, basedir, module) {
  return (
    (module = {
      path: basedir,
      exports: {},
      require: function (path, base) {
        return commonjsRequire(
          path,
          base === undefined || base === null ? module.path : base
        );
      },
    }),
    fn(module, module.exports),
    module.exports
  );
}

function getAugmentedNamespace(n) {
  if (n.__esModule) return n;
  var a = Object.defineProperty({}, "__esModule", { value: true });
  Object.keys(n).forEach(function (k) {
    var d = Object.getOwnPropertyDescriptor(n, k);
    Object.defineProperty(
      a,
      k,
      d.get
        ? d
        : {
            enumerable: true,
            get: function () {
              return n[k];
            },
          }
    );
  });
  return a;
}

function commonjsRequire() {
  throw new Error(
    "Dynamic requires are not currently supported by @rollup/plugin-commonjs"
  );
}

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b = "function" === typeof Symbol && Symbol.for,
  c = b ? Symbol.for("react.element") : 60103,
  d = b ? Symbol.for("react.portal") : 60106,
  e = b ? Symbol.for("react.fragment") : 60107,
  f = b ? Symbol.for("react.strict_mode") : 60108,
  g = b ? Symbol.for("react.profiler") : 60114,
  h = b ? Symbol.for("react.provider") : 60109,
  k = b ? Symbol.for("react.context") : 60110,
  l = b ? Symbol.for("react.async_mode") : 60111,
  m = b ? Symbol.for("react.concurrent_mode") : 60111,
  n = b ? Symbol.for("react.forward_ref") : 60112,
  p = b ? Symbol.for("react.suspense") : 60113,
  q = b ? Symbol.for("react.suspense_list") : 60120,
  r = b ? Symbol.for("react.memo") : 60115,
  t = b ? Symbol.for("react.lazy") : 60116,
  v = b ? Symbol.for("react.block") : 60121,
  w = b ? Symbol.for("react.fundamental") : 60117,
  x = b ? Symbol.for("react.responder") : 60118,
  y = b ? Symbol.for("react.scope") : 60119;
function z(a) {
  if ("object" === typeof a && null !== a) {
    var u = a.$$typeof;
    switch (u) {
      case c:
        switch (((a = a.type), a)) {
          case l:
          case m:
          case e:
          case g:
          case f:
          case p:
            return a;
          default:
            switch (((a = a && a.$$typeof), a)) {
              case k:
              case n:
              case t:
              case r:
              case h:
                return a;
              default:
                return u;
            }
        }
      case d:
        return u;
    }
  }
}
function A(a) {
  return z(a) === m;
}
var AsyncMode = l;
var ConcurrentMode = m;
var ContextConsumer = k;
var ContextProvider = h;
var Element$1 = c;
var ForwardRef = n;
var Fragment = e;
var Lazy = t;
var Memo = r;
var Portal = d;
var Profiler = g;
var StrictMode = f;
var Suspense = p;
var isAsyncMode = function (a) {
  return A(a) || z(a) === l;
};
var isConcurrentMode = A;
var isContextConsumer = function (a) {
  return z(a) === k;
};
var isContextProvider = function (a) {
  return z(a) === h;
};
var isElement = function (a) {
  return "object" === typeof a && null !== a && a.$$typeof === c;
};
var isForwardRef = function (a) {
  return z(a) === n;
};
var isFragment = function (a) {
  return z(a) === e;
};
var isLazy = function (a) {
  return z(a) === t;
};
var isMemo = function (a) {
  return z(a) === r;
};
var isPortal = function (a) {
  return z(a) === d;
};
var isProfiler = function (a) {
  return z(a) === g;
};
var isStrictMode = function (a) {
  return z(a) === f;
};
var isSuspense = function (a) {
  return z(a) === p;
};
var isValidElementType = function (a) {
  return (
    "string" === typeof a ||
    "function" === typeof a ||
    a === e ||
    a === m ||
    a === g ||
    a === f ||
    a === p ||
    a === q ||
    ("object" === typeof a &&
      null !== a &&
      (a.$$typeof === t ||
        a.$$typeof === r ||
        a.$$typeof === h ||
        a.$$typeof === k ||
        a.$$typeof === n ||
        a.$$typeof === w ||
        a.$$typeof === x ||
        a.$$typeof === y ||
        a.$$typeof === v))
  );
};
var typeOf = z;

var reactIs_production_min = {
  AsyncMode: AsyncMode,
  ConcurrentMode: ConcurrentMode,
  ContextConsumer: ContextConsumer,
  ContextProvider: ContextProvider,
  Element: Element$1,
  ForwardRef: ForwardRef,
  Fragment: Fragment,
  Lazy: Lazy,
  Memo: Memo,
  Portal: Portal,
  Profiler: Profiler,
  StrictMode: StrictMode,
  Suspense: Suspense,
  isAsyncMode: isAsyncMode,
  isConcurrentMode: isConcurrentMode,
  isContextConsumer: isContextConsumer,
  isContextProvider: isContextProvider,
  isElement: isElement,
  isForwardRef: isForwardRef,
  isFragment: isFragment,
  isLazy: isLazy,
  isMemo: isMemo,
  isPortal: isPortal,
  isProfiler: isProfiler,
  isStrictMode: isStrictMode,
  isSuspense: isSuspense,
  isValidElementType: isValidElementType,
  typeOf: typeOf,
};

var reactIs_development = createCommonjsModule(function (module, exports) {
  if (process.env.NODE_ENV !== "production") {
    (function () {
      // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
      // nor polyfill, then a plain number is used for performance.
      var hasSymbol = typeof Symbol === "function" && Symbol.for;
      var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 0xeac7;
      var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 0xeaca;
      var REACT_FRAGMENT_TYPE = hasSymbol
        ? Symbol.for("react.fragment")
        : 0xeacb;
      var REACT_STRICT_MODE_TYPE = hasSymbol
        ? Symbol.for("react.strict_mode")
        : 0xeacc;
      var REACT_PROFILER_TYPE = hasSymbol
        ? Symbol.for("react.profiler")
        : 0xead2;
      var REACT_PROVIDER_TYPE = hasSymbol
        ? Symbol.for("react.provider")
        : 0xeacd;
      var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
      // (unstable) APIs that have been removed. Can we remove the symbols?

      var REACT_ASYNC_MODE_TYPE = hasSymbol
        ? Symbol.for("react.async_mode")
        : 0xeacf;
      var REACT_CONCURRENT_MODE_TYPE = hasSymbol
        ? Symbol.for("react.concurrent_mode")
        : 0xeacf;
      var REACT_FORWARD_REF_TYPE = hasSymbol
        ? Symbol.for("react.forward_ref")
        : 0xead0;
      var REACT_SUSPENSE_TYPE = hasSymbol
        ? Symbol.for("react.suspense")
        : 0xead1;
      var REACT_SUSPENSE_LIST_TYPE = hasSymbol
        ? Symbol.for("react.suspense_list")
        : 0xead8;
      var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 0xead3;
      var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 0xead4;
      var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 0xead9;
      var REACT_FUNDAMENTAL_TYPE = hasSymbol
        ? Symbol.for("react.fundamental")
        : 0xead5;
      var REACT_RESPONDER_TYPE = hasSymbol
        ? Symbol.for("react.responder")
        : 0xead6;
      var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 0xead7;

      function isValidElementType(type) {
        return (
          typeof type === "string" ||
          typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
          type === REACT_FRAGMENT_TYPE ||
          type === REACT_CONCURRENT_MODE_TYPE ||
          type === REACT_PROFILER_TYPE ||
          type === REACT_STRICT_MODE_TYPE ||
          type === REACT_SUSPENSE_TYPE ||
          type === REACT_SUSPENSE_LIST_TYPE ||
          (typeof type === "object" &&
            type !== null &&
            (type.$$typeof === REACT_LAZY_TYPE ||
              type.$$typeof === REACT_MEMO_TYPE ||
              type.$$typeof === REACT_PROVIDER_TYPE ||
              type.$$typeof === REACT_CONTEXT_TYPE ||
              type.$$typeof === REACT_FORWARD_REF_TYPE ||
              type.$$typeof === REACT_FUNDAMENTAL_TYPE ||
              type.$$typeof === REACT_RESPONDER_TYPE ||
              type.$$typeof === REACT_SCOPE_TYPE ||
              type.$$typeof === REACT_BLOCK_TYPE))
        );
      }

      function typeOf(object) {
        if (typeof object === "object" && object !== null) {
          var $$typeof = object.$$typeof;

          switch ($$typeof) {
            case REACT_ELEMENT_TYPE:
              var type = object.type;

              switch (type) {
                case REACT_ASYNC_MODE_TYPE:
                case REACT_CONCURRENT_MODE_TYPE:
                case REACT_FRAGMENT_TYPE:
                case REACT_PROFILER_TYPE:
                case REACT_STRICT_MODE_TYPE:
                case REACT_SUSPENSE_TYPE:
                  return type;

                default:
                  var $$typeofType = type && type.$$typeof;

                  switch ($$typeofType) {
                    case REACT_CONTEXT_TYPE:
                    case REACT_FORWARD_REF_TYPE:
                    case REACT_LAZY_TYPE:
                    case REACT_MEMO_TYPE:
                    case REACT_PROVIDER_TYPE:
                      return $$typeofType;

                    default:
                      return $$typeof;
                  }
              }

            case REACT_PORTAL_TYPE:
              return $$typeof;
          }
        }

        return undefined;
      } // AsyncMode is deprecated along with isAsyncMode

      var AsyncMode = REACT_ASYNC_MODE_TYPE;
      var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
      var ContextConsumer = REACT_CONTEXT_TYPE;
      var ContextProvider = REACT_PROVIDER_TYPE;
      var Element = REACT_ELEMENT_TYPE;
      var ForwardRef = REACT_FORWARD_REF_TYPE;
      var Fragment = REACT_FRAGMENT_TYPE;
      var Lazy = REACT_LAZY_TYPE;
      var Memo = REACT_MEMO_TYPE;
      var Portal = REACT_PORTAL_TYPE;
      var Profiler = REACT_PROFILER_TYPE;
      var StrictMode = REACT_STRICT_MODE_TYPE;
      var Suspense = REACT_SUSPENSE_TYPE;
      var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

      function isAsyncMode(object) {
        {
          if (!hasWarnedAboutDeprecatedIsAsyncMode) {
            hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

            console["warn"](
              "The ReactIs.isAsyncMode() alias has been deprecated, " +
                "and will be removed in React 17+. Update your code to use " +
                "ReactIs.isConcurrentMode() instead. It has the exact same API."
            );
          }
        }

        return (
          isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE
        );
      }
      function isConcurrentMode(object) {
        return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
      }
      function isContextConsumer(object) {
        return typeOf(object) === REACT_CONTEXT_TYPE;
      }
      function isContextProvider(object) {
        return typeOf(object) === REACT_PROVIDER_TYPE;
      }
      function isElement(object) {
        return (
          typeof object === "object" &&
          object !== null &&
          object.$$typeof === REACT_ELEMENT_TYPE
        );
      }
      function isForwardRef(object) {
        return typeOf(object) === REACT_FORWARD_REF_TYPE;
      }
      function isFragment(object) {
        return typeOf(object) === REACT_FRAGMENT_TYPE;
      }
      function isLazy(object) {
        return typeOf(object) === REACT_LAZY_TYPE;
      }
      function isMemo(object) {
        return typeOf(object) === REACT_MEMO_TYPE;
      }
      function isPortal(object) {
        return typeOf(object) === REACT_PORTAL_TYPE;
      }
      function isProfiler(object) {
        return typeOf(object) === REACT_PROFILER_TYPE;
      }
      function isStrictMode(object) {
        return typeOf(object) === REACT_STRICT_MODE_TYPE;
      }
      function isSuspense(object) {
        return typeOf(object) === REACT_SUSPENSE_TYPE;
      }

      exports.AsyncMode = AsyncMode;
      exports.ConcurrentMode = ConcurrentMode;
      exports.ContextConsumer = ContextConsumer;
      exports.ContextProvider = ContextProvider;
      exports.Element = Element;
      exports.ForwardRef = ForwardRef;
      exports.Fragment = Fragment;
      exports.Lazy = Lazy;
      exports.Memo = Memo;
      exports.Portal = Portal;
      exports.Profiler = Profiler;
      exports.StrictMode = StrictMode;
      exports.Suspense = Suspense;
      exports.isAsyncMode = isAsyncMode;
      exports.isConcurrentMode = isConcurrentMode;
      exports.isContextConsumer = isContextConsumer;
      exports.isContextProvider = isContextProvider;
      exports.isElement = isElement;
      exports.isForwardRef = isForwardRef;
      exports.isFragment = isFragment;
      exports.isLazy = isLazy;
      exports.isMemo = isMemo;
      exports.isPortal = isPortal;
      exports.isProfiler = isProfiler;
      exports.isStrictMode = isStrictMode;
      exports.isSuspense = isSuspense;
      exports.isValidElementType = isValidElementType;
      exports.typeOf = typeOf;
    })();
  }
});

var reactIs = createCommonjsModule(function (module) {
  if (process.env.NODE_ENV === "production") {
    module.exports = reactIs_production_min;
  } else {
    module.exports = reactIs_development;
  }
});

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError(
      "Object.assign cannot be called with null or undefined"
    );
  }

  return Object(val);
}

function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    }

    // Detect buggy property enumeration order in older V8 versions.

    // https://bugs.chromium.org/p/v8/issues/detail?id=4118
    var test1 = new String("abc"); // eslint-disable-line no-new-wrappers
    test1[5] = "de";
    if (Object.getOwnPropertyNames(test1)[0] === "5") {
      return false;
    }

    // https://bugs.chromium.org/p/v8/issues/detail?id=3056
    var test2 = {};
    for (var i = 0; i < 10; i++) {
      test2["_" + String.fromCharCode(i)] = i;
    }
    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });
    if (order2.join("") !== "0123456789") {
      return false;
    }

    // https://bugs.chromium.org/p/v8/issues/detail?id=3056
    var test3 = {};
    "abcdefghijklmnopqrst".split("").forEach(function (letter) {
      test3[letter] = letter;
    });
    if (
      Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst"
    ) {
      return false;
    }

    return true;
  } catch (err) {
    // We don't expect any of the above to throw, but better to be safe.
    return false;
  }
}

var objectAssign = shouldUseNative()
  ? Object.assign
  : function (target, source) {
      var from;
      var to = toObject(target);
      var symbols;

      for (var s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);

        for (var key in from) {
          if (hasOwnProperty.call(from, key)) {
            to[key] = from[key];
          }
        }

        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from);
          for (var i = 0; i < symbols.length; i++) {
            if (propIsEnumerable.call(from, symbols[i])) {
              to[symbols[i]] = from[symbols[i]];
            }
          }
        }
      }

      return to;
    };

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

var printWarning = function () {};

if (process.env.NODE_ENV !== "production") {
  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function (text) {
    var message = "Warning: " + text;
    if (typeof console !== "undefined") {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== "production") {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== "function") {
            var err = Error(
              (componentName || "React class") +
                ": " +
                location +
                " type `" +
                typeSpecName +
                "` is invalid; " +
                "it must be a function, usually from the `prop-types` package, but received `" +
                typeof typeSpecs[typeSpecName] +
                "`."
            );
            err.name = "Invariant Violation";
            throw err;
          }
          error = typeSpecs[typeSpecName](
            values,
            typeSpecName,
            componentName,
            location,
            null,
            ReactPropTypesSecret$1
          );
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || "React class") +
              ": type specification of " +
              location +
              " `" +
              typeSpecName +
              "` is invalid; the type checker " +
              "function must return `null` or an `Error` but returned a " +
              typeof error +
              ". " +
              "You may have forgotten to pass an argument to the type checker " +
              "creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and " +
              "shape all require an argument)."
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : "";

          printWarning(
            "Failed " +
              location +
              " type: " +
              error.message +
              (stack != null ? stack : "")
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function () {
  if (process.env.NODE_ENV !== "production") {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes;

var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning$1 = function () {};

if (process.env.NODE_ENV !== "production") {
  printWarning$1 = function (text) {
    var message = "Warning: " + text;
    if (typeof console !== "undefined") {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function (isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = "@@iterator"; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn =
      maybeIterable &&
      ((ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL]) ||
        maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === "function") {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = "<<anonymous>>";

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker("array"),
    bool: createPrimitiveTypeChecker("boolean"),
    func: createPrimitiveTypeChecker("function"),
    number: createPrimitiveTypeChecker("number"),
    object: createPrimitiveTypeChecker("object"),
    string: createPrimitiveTypeChecker("string"),
    symbol: createPrimitiveTypeChecker("symbol"),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = "";
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== "production") {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(
      isRequired,
      props,
      propName,
      componentName,
      location,
      propFullName,
      secret
    ) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret_1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            "Calling PropTypes validators directly is not supported by the `prop-types` package. " +
              "Use `PropTypes.checkPropTypes()` to call them. " +
              "Read more at http://fb.me/use-check-prop-types"
          );
          err.name = "Invariant Violation";
          throw err;
        } else if (
          process.env.NODE_ENV !== "production" &&
          typeof console !== "undefined"
        ) {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ":" + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning$1(
              "You are manually calling a React.PropTypes validation " +
                "function for the `" +
                propFullName +
                "` prop on `" +
                componentName +
                "`. This is deprecated " +
                "and will throw in the standalone `prop-types` package. " +
                "You may be seeing this warning due to a third-party PropTypes " +
                "library. See https://fb.me/react-warning-dont-call-proptypes " +
                "for details."
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError(
              "The " +
                location +
                " `" +
                propFullName +
                "` is marked as required " +
                ("in `" + componentName + "`, but its value is `null`.")
            );
          }
          return new PropTypeError(
            "The " +
              location +
              " `" +
              propFullName +
              "` is marked as required in " +
              ("`" + componentName + "`, but its value is `undefined`.")
          );
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(
      props,
      propName,
      componentName,
      location,
      propFullName,
      secret
    ) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError(
          "Invalid " +
            location +
            " `" +
            propFullName +
            "` of type " +
            ("`" +
              preciseType +
              "` supplied to `" +
              componentName +
              "`, expected ") +
            ("`" + expectedType + "`.")
        );
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== "function") {
        return new PropTypeError(
          "Property `" +
            propFullName +
            "` of component `" +
            componentName +
            "` has invalid PropType notation inside arrayOf."
        );
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError(
          "Invalid " +
            location +
            " `" +
            propFullName +
            "` of type " +
            ("`" +
              propType +
              "` supplied to `" +
              componentName +
              "`, expected an array.")
        );
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(
          propValue,
          i,
          componentName,
          location,
          propFullName + "[" + i + "]",
          ReactPropTypesSecret_1
        );
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError(
          "Invalid " +
            location +
            " `" +
            propFullName +
            "` of type " +
            ("`" +
              propType +
              "` supplied to `" +
              componentName +
              "`, expected a single ReactElement.")
        );
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!reactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError(
          "Invalid " +
            location +
            " `" +
            propFullName +
            "` of type " +
            ("`" +
              propType +
              "` supplied to `" +
              componentName +
              "`, expected a single ReactElement type.")
        );
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError(
          "Invalid " +
            location +
            " `" +
            propFullName +
            "` of type " +
            ("`" +
              actualClassName +
              "` supplied to `" +
              componentName +
              "`, expected ") +
            ("instance of `" + expectedClassName + "`.")
        );
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (process.env.NODE_ENV !== "production") {
        if (arguments.length > 1) {
          printWarning$1(
            "Invalid arguments supplied to oneOf, expected an array, got " +
              arguments.length +
              " arguments. " +
              "A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
          );
        } else {
          printWarning$1(
            "Invalid argument supplied to oneOf, expected an array."
          );
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(
        key,
        value
      ) {
        var type = getPreciseType(value);
        if (type === "symbol") {
          return String(value);
        }
        return value;
      });
      return new PropTypeError(
        "Invalid " +
          location +
          " `" +
          propFullName +
          "` of value `" +
          String(propValue) +
          "` " +
          ("supplied to `" +
            componentName +
            "`, expected one of " +
            valuesString +
            ".")
      );
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== "function") {
        return new PropTypeError(
          "Property `" +
            propFullName +
            "` of component `" +
            componentName +
            "` has invalid PropType notation inside objectOf."
        );
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== "object") {
        return new PropTypeError(
          "Invalid " +
            location +
            " `" +
            propFullName +
            "` of type " +
            ("`" +
              propType +
              "` supplied to `" +
              componentName +
              "`, expected an object.")
        );
      }
      for (var key in propValue) {
        if (has$1(propValue, key)) {
          var error = typeChecker(
            propValue,
            key,
            componentName,
            location,
            propFullName + "." + key,
            ReactPropTypesSecret_1
          );
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== "production"
        ? printWarning$1(
            "Invalid argument supplied to oneOfType, expected an instance of array."
          )
        : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== "function") {
        printWarning$1(
          "Invalid argument supplied to oneOfType. Expected an array of check functions, but " +
            "received " +
            getPostfixForTypeWarning(checker) +
            " at index " +
            i +
            "."
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (
          checker(
            props,
            propName,
            componentName,
            location,
            propFullName,
            ReactPropTypesSecret_1
          ) == null
        ) {
          return null;
        }
      }

      return new PropTypeError(
        "Invalid " +
          location +
          " `" +
          propFullName +
          "` supplied to " +
          ("`" + componentName + "`.")
      );
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError(
          "Invalid " +
            location +
            " `" +
            propFullName +
            "` supplied to " +
            ("`" + componentName + "`, expected a ReactNode.")
        );
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== "object") {
        return new PropTypeError(
          "Invalid " +
            location +
            " `" +
            propFullName +
            "` of type `" +
            propType +
            "` " +
            ("supplied to `" + componentName + "`, expected `object`.")
        );
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(
          propValue,
          key,
          componentName,
          location,
          propFullName + "." + key,
          ReactPropTypesSecret_1
        );
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== "object") {
        return new PropTypeError(
          "Invalid " +
            location +
            " `" +
            propFullName +
            "` of type `" +
            propType +
            "` " +
            ("supplied to `" + componentName + "`, expected `object`.")
        );
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = objectAssign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            "Invalid " +
              location +
              " `" +
              propFullName +
              "` key `" +
              key +
              "` supplied to `" +
              componentName +
              "`." +
              "\nBad object: " +
              JSON.stringify(props[propName], null, "  ") +
              "\nValid keys: " +
              JSON.stringify(Object.keys(shapeTypes), null, "  ")
          );
        }
        var error = checker(
          propValue,
          key,
          componentName,
          location,
          propFullName + "." + key,
          ReactPropTypesSecret_1
        );
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case "number":
      case "string":
      case "undefined":
        return true;
      case "boolean":
        return !propValue;
      case "object":
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === "symbol") {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue["@@toStringTag"] === "Symbol") {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === "function" && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return "array";
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return "object";
    }
    if (isSymbol(propType, propValue)) {
      return "symbol";
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === "undefined" || propValue === null) {
      return "" + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === "object") {
      if (propValue instanceof Date) {
        return "date";
      } else if (propValue instanceof RegExp) {
        return "regexp";
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case "array":
      case "object":
        return "an " + type;
      case "boolean":
      case "date":
      case "regexp":
        return "a " + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function () {
  function shim(
    props,
    propName,
    componentName,
    location,
    propFullName,
    secret
  ) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      "Calling PropTypes validators directly is not supported by the `prop-types` package. " +
        "Use PropTypes.checkPropTypes() to call them. " +
        "Read more at http://fb.me/use-check-prop-types"
    );
    err.name = "Invariant Violation";
    throw err;
  }
  shim.isRequired = shim;
  function getShim() {
    return shim;
  } // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction,
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  if (process.env.NODE_ENV !== "production") {
    var ReactIs = reactIs;

    // By explicitly using `prop-types` you are opting into new development behavior.
    // http://fb.me/prop-types-in-prod
    var throwOnDirectAccess = true;
    module.exports = factoryWithTypeCheckers(
      ReactIs.isElement,
      throwOnDirectAccess
    );
  } else {
    // By explicitly using `prop-types` you are opting into new production behavior.
    // http://fb.me/prop-types-in-prod
    module.exports = factoryWithThrowingShims();
  }
});

function _extends() {
  _extends =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/**
 * A collection of shims that provide minimal functionality of the ES6 collections.
 *
 * These implementations are not meant to be used outside of the ResizeObserver
 * modules as they cover only a limited range of use cases.
 */
/* eslint-disable require-jsdoc, valid-jsdoc */
var MapShim = (function () {
  if (typeof Map !== "undefined") {
    return Map;
  }
  /**
   * Returns index in provided array that matches the specified key.
   *
   * @param {Array<Array>} arr
   * @param {*} key
   * @returns {number}
   */
  function getIndex(arr, key) {
    var result = -1;
    arr.some(function (entry, index) {
      if (entry[0] === key) {
        result = index;
        return true;
      }
      return false;
    });
    return result;
  }
  return /** @class */ (function () {
    function class_1() {
      this.__entries__ = [];
    }
    Object.defineProperty(class_1.prototype, "size", {
      /**
       * @returns {boolean}
       */
      get: function () {
        return this.__entries__.length;
      },
      enumerable: true,
      configurable: true,
    });
    /**
     * @param {*} key
     * @returns {*}
     */
    class_1.prototype.get = function (key) {
      var index = getIndex(this.__entries__, key);
      var entry = this.__entries__[index];
      return entry && entry[1];
    };
    /**
     * @param {*} key
     * @param {*} value
     * @returns {void}
     */
    class_1.prototype.set = function (key, value) {
      var index = getIndex(this.__entries__, key);
      if (~index) {
        this.__entries__[index][1] = value;
      } else {
        this.__entries__.push([key, value]);
      }
    };
    /**
     * @param {*} key
     * @returns {void}
     */
    class_1.prototype.delete = function (key) {
      var entries = this.__entries__;
      var index = getIndex(entries, key);
      if (~index) {
        entries.splice(index, 1);
      }
    };
    /**
     * @param {*} key
     * @returns {void}
     */
    class_1.prototype.has = function (key) {
      return !!~getIndex(this.__entries__, key);
    };
    /**
     * @returns {void}
     */
    class_1.prototype.clear = function () {
      this.__entries__.splice(0);
    };
    /**
     * @param {Function} callback
     * @param {*} [ctx=null]
     * @returns {void}
     */
    class_1.prototype.forEach = function (callback, ctx) {
      if (ctx === void 0) {
        ctx = null;
      }
      for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
        var entry = _a[_i];
        callback.call(ctx, entry[1], entry[0]);
      }
    };
    return class_1;
  })();
})();

/**
 * Detects whether window and document objects are available in current environment.
 */
var isBrowser =
  typeof window !== "undefined" &&
  typeof document !== "undefined" &&
  window.document === document;

// Returns global object of a current environment.
var global$1 = (function () {
  if (typeof global !== "undefined" && global.Math === Math) {
    return global;
  }
  if (typeof self !== "undefined" && self.Math === Math) {
    return self;
  }
  if (typeof window !== "undefined" && window.Math === Math) {
    return window;
  }
  // eslint-disable-next-line no-new-func
  return Function("return this")();
})();

/**
 * A shim for the requestAnimationFrame which falls back to the setTimeout if
 * first one is not supported.
 *
 * @returns {number} Requests' identifier.
 */
var requestAnimationFrame$1 = (function () {
  if (typeof requestAnimationFrame === "function") {
    // It's required to use a bounded function because IE sometimes throws
    // an "Invalid calling object" error if rAF is invoked without the global
    // object on the left hand side.
    return requestAnimationFrame.bind(global$1);
  }
  return function (callback) {
    return setTimeout(function () {
      return callback(Date.now());
    }, 1000 / 60);
  };
})();

// Defines minimum timeout before adding a trailing call.
var trailingTimeout = 2;
/**
 * Creates a wrapper function which ensures that provided callback will be
 * invoked only once during the specified delay period.
 *
 * @param {Function} callback - Function to be invoked after the delay period.
 * @param {number} delay - Delay after which to invoke callback.
 * @returns {Function}
 */
function throttle(callback, delay) {
  var leadingCall = false,
    trailingCall = false,
    lastCallTime = 0;
  /**
   * Invokes the original callback function and schedules new invocation if
   * the "proxy" was called during current request.
   *
   * @returns {void}
   */
  function resolvePending() {
    if (leadingCall) {
      leadingCall = false;
      callback();
    }
    if (trailingCall) {
      proxy();
    }
  }
  /**
   * Callback invoked after the specified delay. It will further postpone
   * invocation of the original function delegating it to the
   * requestAnimationFrame.
   *
   * @returns {void}
   */
  function timeoutCallback() {
    requestAnimationFrame$1(resolvePending);
  }
  /**
   * Schedules invocation of the original function.
   *
   * @returns {void}
   */
  function proxy() {
    var timeStamp = Date.now();
    if (leadingCall) {
      // Reject immediately following calls.
      if (timeStamp - lastCallTime < trailingTimeout) {
        return;
      }
      // Schedule new call to be in invoked when the pending one is resolved.
      // This is important for "transitions" which never actually start
      // immediately so there is a chance that we might miss one if change
      // happens amids the pending invocation.
      trailingCall = true;
    } else {
      leadingCall = true;
      trailingCall = false;
      setTimeout(timeoutCallback, delay);
    }
    lastCallTime = timeStamp;
  }
  return proxy;
}

// Minimum delay before invoking the update of observers.
var REFRESH_DELAY = 20;
// A list of substrings of CSS properties used to find transition events that
// might affect dimensions of observed elements.
var transitionKeys = [
  "top",
  "right",
  "bottom",
  "left",
  "width",
  "height",
  "size",
  "weight",
];
// Check if MutationObserver is available.
var mutationObserverSupported = typeof MutationObserver !== "undefined";
/**
 * Singleton controller class which handles updates of ResizeObserver instances.
 */
var ResizeObserverController = /** @class */ (function () {
  /**
   * Creates a new instance of ResizeObserverController.
   *
   * @private
   */
  function ResizeObserverController() {
    /**
     * Indicates whether DOM listeners have been added.
     *
     * @private {boolean}
     */
    this.connected_ = false;
    /**
     * Tells that controller has subscribed for Mutation Events.
     *
     * @private {boolean}
     */
    this.mutationEventsAdded_ = false;
    /**
     * Keeps reference to the instance of MutationObserver.
     *
     * @private {MutationObserver}
     */
    this.mutationsObserver_ = null;
    /**
     * A list of connected observers.
     *
     * @private {Array<ResizeObserverSPI>}
     */
    this.observers_ = [];
    this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
    this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
  }
  /**
   * Adds observer to observers list.
   *
   * @param {ResizeObserverSPI} observer - Observer to be added.
   * @returns {void}
   */
  ResizeObserverController.prototype.addObserver = function (observer) {
    if (!~this.observers_.indexOf(observer)) {
      this.observers_.push(observer);
    }
    // Add listeners if they haven't been added yet.
    if (!this.connected_) {
      this.connect_();
    }
  };
  /**
   * Removes observer from observers list.
   *
   * @param {ResizeObserverSPI} observer - Observer to be removed.
   * @returns {void}
   */
  ResizeObserverController.prototype.removeObserver = function (observer) {
    var observers = this.observers_;
    var index = observers.indexOf(observer);
    // Remove observer if it's present in registry.
    if (~index) {
      observers.splice(index, 1);
    }
    // Remove listeners if controller has no connected observers.
    if (!observers.length && this.connected_) {
      this.disconnect_();
    }
  };
  /**
   * Invokes the update of observers. It will continue running updates insofar
   * it detects changes.
   *
   * @returns {void}
   */
  ResizeObserverController.prototype.refresh = function () {
    var changesDetected = this.updateObservers_();
    // Continue running updates if changes have been detected as there might
    // be future ones caused by CSS transitions.
    if (changesDetected) {
      this.refresh();
    }
  };
  /**
   * Updates every observer from observers list and notifies them of queued
   * entries.
   *
   * @private
   * @returns {boolean} Returns "true" if any observer has detected changes in
   *      dimensions of it's elements.
   */
  ResizeObserverController.prototype.updateObservers_ = function () {
    // Collect observers that have active observations.
    var activeObservers = this.observers_.filter(function (observer) {
      return observer.gatherActive(), observer.hasActive();
    });
    // Deliver notifications in a separate cycle in order to avoid any
    // collisions between observers, e.g. when multiple instances of
    // ResizeObserver are tracking the same element and the callback of one
    // of them changes content dimensions of the observed target. Sometimes
    // this may result in notifications being blocked for the rest of observers.
    activeObservers.forEach(function (observer) {
      return observer.broadcastActive();
    });
    return activeObservers.length > 0;
  };
  /**
   * Initializes DOM listeners.
   *
   * @private
   * @returns {void}
   */
  ResizeObserverController.prototype.connect_ = function () {
    // Do nothing if running in a non-browser environment or if listeners
    // have been already added.
    if (!isBrowser || this.connected_) {
      return;
    }
    // Subscription to the "Transitionend" event is used as a workaround for
    // delayed transitions. This way it's possible to capture at least the
    // final state of an element.
    document.addEventListener("transitionend", this.onTransitionEnd_);
    window.addEventListener("resize", this.refresh);
    if (mutationObserverSupported) {
      this.mutationsObserver_ = new MutationObserver(this.refresh);
      this.mutationsObserver_.observe(document, {
        attributes: true,
        childList: true,
        characterData: true,
        subtree: true,
      });
    } else {
      document.addEventListener("DOMSubtreeModified", this.refresh);
      this.mutationEventsAdded_ = true;
    }
    this.connected_ = true;
  };
  /**
   * Removes DOM listeners.
   *
   * @private
   * @returns {void}
   */
  ResizeObserverController.prototype.disconnect_ = function () {
    // Do nothing if running in a non-browser environment or if listeners
    // have been already removed.
    if (!isBrowser || !this.connected_) {
      return;
    }
    document.removeEventListener("transitionend", this.onTransitionEnd_);
    window.removeEventListener("resize", this.refresh);
    if (this.mutationsObserver_) {
      this.mutationsObserver_.disconnect();
    }
    if (this.mutationEventsAdded_) {
      document.removeEventListener("DOMSubtreeModified", this.refresh);
    }
    this.mutationsObserver_ = null;
    this.mutationEventsAdded_ = false;
    this.connected_ = false;
  };
  /**
   * "Transitionend" event handler.
   *
   * @private
   * @param {TransitionEvent} event
   * @returns {void}
   */
  ResizeObserverController.prototype.onTransitionEnd_ = function (_a) {
    var _b = _a.propertyName,
      propertyName = _b === void 0 ? "" : _b;
    // Detect whether transition may affect dimensions of an element.
    var isReflowProperty = transitionKeys.some(function (key) {
      return !!~propertyName.indexOf(key);
    });
    if (isReflowProperty) {
      this.refresh();
    }
  };
  /**
   * Returns instance of the ResizeObserverController.
   *
   * @returns {ResizeObserverController}
   */
  ResizeObserverController.getInstance = function () {
    if (!this.instance_) {
      this.instance_ = new ResizeObserverController();
    }
    return this.instance_;
  };
  /**
   * Holds reference to the controller's instance.
   *
   * @private {ResizeObserverController}
   */
  ResizeObserverController.instance_ = null;
  return ResizeObserverController;
})();

/**
 * Defines non-writable/enumerable properties of the provided target object.
 *
 * @param {Object} target - Object for which to define properties.
 * @param {Object} props - Properties to be defined.
 * @returns {Object} Target object.
 */
var defineConfigurable = function (target, props) {
  for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
    var key = _a[_i];
    Object.defineProperty(target, key, {
      value: props[key],
      enumerable: false,
      writable: false,
      configurable: true,
    });
  }
  return target;
};

/**
 * Returns the global object associated with provided element.
 *
 * @param {Object} target
 * @returns {Object}
 */
var getWindowOf = function (target) {
  // Assume that the element is an instance of Node, which means that it
  // has the "ownerDocument" property from which we can retrieve a
  // corresponding global object.
  var ownerGlobal =
    target && target.ownerDocument && target.ownerDocument.defaultView;
  // Return the local global object if it's not possible extract one from
  // provided element.
  return ownerGlobal || global$1;
};

// Placeholder of an empty content rectangle.
var emptyRect = createRectInit(0, 0, 0, 0);
/**
 * Converts provided string to a number.
 *
 * @param {number|string} value
 * @returns {number}
 */
function toFloat(value) {
  return parseFloat(value) || 0;
}
/**
 * Extracts borders size from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @param {...string} positions - Borders positions (top, right, ...)
 * @returns {number}
 */
function getBordersSize(styles) {
  var positions = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    positions[_i - 1] = arguments[_i];
  }
  return positions.reduce(function (size, position) {
    var value = styles["border-" + position + "-width"];
    return size + toFloat(value);
  }, 0);
}
/**
 * Extracts paddings sizes from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @returns {Object} Paddings box.
 */
function getPaddings(styles) {
  var positions = ["top", "right", "bottom", "left"];
  var paddings = {};
  for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
    var position = positions_1[_i];
    var value = styles["padding-" + position];
    paddings[position] = toFloat(value);
  }
  return paddings;
}
/**
 * Calculates content rectangle of provided SVG element.
 *
 * @param {SVGGraphicsElement} target - Element content rectangle of which needs
 *      to be calculated.
 * @returns {DOMRectInit}
 */
function getSVGContentRect(target) {
  var bbox = target.getBBox();
  return createRectInit(0, 0, bbox.width, bbox.height);
}
/**
 * Calculates content rectangle of provided HTMLElement.
 *
 * @param {HTMLElement} target - Element for which to calculate the content rectangle.
 * @returns {DOMRectInit}
 */
function getHTMLElementContentRect(target) {
  // Client width & height properties can't be
  // used exclusively as they provide rounded values.
  var clientWidth = target.clientWidth,
    clientHeight = target.clientHeight;
  // By this condition we can catch all non-replaced inline, hidden and
  // detached elements. Though elements with width & height properties less
  // than 0.5 will be discarded as well.
  //
  // Without it we would need to implement separate methods for each of
  // those cases and it's not possible to perform a precise and performance
  // effective test for hidden elements. E.g. even jQuery's ':visible' filter
  // gives wrong results for elements with width & height less than 0.5.
  if (!clientWidth && !clientHeight) {
    return emptyRect;
  }
  var styles = getWindowOf(target).getComputedStyle(target);
  var paddings = getPaddings(styles);
  var horizPad = paddings.left + paddings.right;
  var vertPad = paddings.top + paddings.bottom;
  // Computed styles of width & height are being used because they are the
  // only dimensions available to JS that contain non-rounded values. It could
  // be possible to utilize the getBoundingClientRect if only it's data wasn't
  // affected by CSS transformations let alone paddings, borders and scroll bars.
  var width = toFloat(styles.width),
    height = toFloat(styles.height);
  // Width & height include paddings and borders when the 'border-box' box
  // model is applied (except for IE).
  if (styles.boxSizing === "border-box") {
    // Following conditions are required to handle Internet Explorer which
    // doesn't include paddings and borders to computed CSS dimensions.
    //
    // We can say that if CSS dimensions + paddings are equal to the "client"
    // properties then it's either IE, and thus we don't need to subtract
    // anything, or an element merely doesn't have paddings/borders styles.
    if (Math.round(width + horizPad) !== clientWidth) {
      width -= getBordersSize(styles, "left", "right") + horizPad;
    }
    if (Math.round(height + vertPad) !== clientHeight) {
      height -= getBordersSize(styles, "top", "bottom") + vertPad;
    }
  }
  // Following steps can't be applied to the document's root element as its
  // client[Width/Height] properties represent viewport area of the window.
  // Besides, it's as well not necessary as the <html> itself neither has
  // rendered scroll bars nor it can be clipped.
  if (!isDocumentElement(target)) {
    // In some browsers (only in Firefox, actually) CSS width & height
    // include scroll bars size which can be removed at this step as scroll
    // bars are the only difference between rounded dimensions + paddings
    // and "client" properties, though that is not always true in Chrome.
    var vertScrollbar = Math.round(width + horizPad) - clientWidth;
    var horizScrollbar = Math.round(height + vertPad) - clientHeight;
    // Chrome has a rather weird rounding of "client" properties.
    // E.g. for an element with content width of 314.2px it sometimes gives
    // the client width of 315px and for the width of 314.7px it may give
    // 314px. And it doesn't happen all the time. So just ignore this delta
    // as a non-relevant.
    if (Math.abs(vertScrollbar) !== 1) {
      width -= vertScrollbar;
    }
    if (Math.abs(horizScrollbar) !== 1) {
      height -= horizScrollbar;
    }
  }
  return createRectInit(paddings.left, paddings.top, width, height);
}
/**
 * Checks whether provided element is an instance of the SVGGraphicsElement.
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
var isSVGGraphicsElement = (function () {
  // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
  // interface.
  if (typeof SVGGraphicsElement !== "undefined") {
    return function (target) {
      return target instanceof getWindowOf(target).SVGGraphicsElement;
    };
  }
  // If it's so, then check that element is at least an instance of the
  // SVGElement and that it has the "getBBox" method.
  // eslint-disable-next-line no-extra-parens
  return function (target) {
    return (
      target instanceof getWindowOf(target).SVGElement &&
      typeof target.getBBox === "function"
    );
  };
})();
/**
 * Checks whether provided element is a document element (<html>).
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
function isDocumentElement(target) {
  return target === getWindowOf(target).document.documentElement;
}
/**
 * Calculates an appropriate content rectangle for provided html or svg element.
 *
 * @param {Element} target - Element content rectangle of which needs to be calculated.
 * @returns {DOMRectInit}
 */
function getContentRect(target) {
  if (!isBrowser) {
    return emptyRect;
  }
  if (isSVGGraphicsElement(target)) {
    return getSVGContentRect(target);
  }
  return getHTMLElementContentRect(target);
}
/**
 * Creates rectangle with an interface of the DOMRectReadOnly.
 * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
 *
 * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
 * @returns {DOMRectReadOnly}
 */
function createReadOnlyRect(_a) {
  var x = _a.x,
    y = _a.y,
    width = _a.width,
    height = _a.height;
  // If DOMRectReadOnly is available use it as a prototype for the rectangle.
  var Constr =
    typeof DOMRectReadOnly !== "undefined" ? DOMRectReadOnly : Object;
  var rect = Object.create(Constr.prototype);
  // Rectangle's properties are not writable and non-enumerable.
  defineConfigurable(rect, {
    x: x,
    y: y,
    width: width,
    height: height,
    top: y,
    right: x + width,
    bottom: height + y,
    left: x,
  });
  return rect;
}
/**
 * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
 * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
 *
 * @param {number} x - X coordinate.
 * @param {number} y - Y coordinate.
 * @param {number} width - Rectangle's width.
 * @param {number} height - Rectangle's height.
 * @returns {DOMRectInit}
 */
function createRectInit(x, y, width, height) {
  return { x: x, y: y, width: width, height: height };
}

/**
 * Class that is responsible for computations of the content rectangle of
 * provided DOM element and for keeping track of it's changes.
 */
var ResizeObservation = /** @class */ (function () {
  /**
   * Creates an instance of ResizeObservation.
   *
   * @param {Element} target - Element to be observed.
   */
  function ResizeObservation(target) {
    /**
     * Broadcasted width of content rectangle.
     *
     * @type {number}
     */
    this.broadcastWidth = 0;
    /**
     * Broadcasted height of content rectangle.
     *
     * @type {number}
     */
    this.broadcastHeight = 0;
    /**
     * Reference to the last observed content rectangle.
     *
     * @private {DOMRectInit}
     */
    this.contentRect_ = createRectInit(0, 0, 0, 0);
    this.target = target;
  }
  /**
   * Updates content rectangle and tells whether it's width or height properties
   * have changed since the last broadcast.
   *
   * @returns {boolean}
   */
  ResizeObservation.prototype.isActive = function () {
    var rect = getContentRect(this.target);
    this.contentRect_ = rect;
    return (
      rect.width !== this.broadcastWidth || rect.height !== this.broadcastHeight
    );
  };
  /**
   * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
   * from the corresponding properties of the last observed content rectangle.
   *
   * @returns {DOMRectInit} Last observed content rectangle.
   */
  ResizeObservation.prototype.broadcastRect = function () {
    var rect = this.contentRect_;
    this.broadcastWidth = rect.width;
    this.broadcastHeight = rect.height;
    return rect;
  };
  return ResizeObservation;
})();

var ResizeObserverEntry = /** @class */ (function () {
  /**
   * Creates an instance of ResizeObserverEntry.
   *
   * @param {Element} target - Element that is being observed.
   * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
   */
  function ResizeObserverEntry(target, rectInit) {
    var contentRect = createReadOnlyRect(rectInit);
    // According to the specification following properties are not writable
    // and are also not enumerable in the native implementation.
    //
    // Property accessors are not being used as they'd require to define a
    // private WeakMap storage which may cause memory leaks in browsers that
    // don't support this type of collections.
    defineConfigurable(this, { target: target, contentRect: contentRect });
  }
  return ResizeObserverEntry;
})();

var ResizeObserverSPI = /** @class */ (function () {
  /**
   * Creates a new instance of ResizeObserver.
   *
   * @param {ResizeObserverCallback} callback - Callback function that is invoked
   *      when one of the observed elements changes it's content dimensions.
   * @param {ResizeObserverController} controller - Controller instance which
   *      is responsible for the updates of observer.
   * @param {ResizeObserver} callbackCtx - Reference to the public
   *      ResizeObserver instance which will be passed to callback function.
   */
  function ResizeObserverSPI(callback, controller, callbackCtx) {
    /**
     * Collection of resize observations that have detected changes in dimensions
     * of elements.
     *
     * @private {Array<ResizeObservation>}
     */
    this.activeObservations_ = [];
    /**
     * Registry of the ResizeObservation instances.
     *
     * @private {Map<Element, ResizeObservation>}
     */
    this.observations_ = new MapShim();
    if (typeof callback !== "function") {
      throw new TypeError(
        "The callback provided as parameter 1 is not a function."
      );
    }
    this.callback_ = callback;
    this.controller_ = controller;
    this.callbackCtx_ = callbackCtx;
  }
  /**
   * Starts observing provided element.
   *
   * @param {Element} target - Element to be observed.
   * @returns {void}
   */
  ResizeObserverSPI.prototype.observe = function (target) {
    if (!arguments.length) {
      throw new TypeError("1 argument required, but only 0 present.");
    }
    // Do nothing if current environment doesn't have the Element interface.
    if (typeof Element === "undefined" || !(Element instanceof Object)) {
      return;
    }
    if (!(target instanceof getWindowOf(target).Element)) {
      throw new TypeError('parameter 1 is not of type "Element".');
    }
    var observations = this.observations_;
    // Do nothing if element is already being observed.
    if (observations.has(target)) {
      return;
    }
    observations.set(target, new ResizeObservation(target));
    this.controller_.addObserver(this);
    // Force the update of observations.
    this.controller_.refresh();
  };
  /**
   * Stops observing provided element.
   *
   * @param {Element} target - Element to stop observing.
   * @returns {void}
   */
  ResizeObserverSPI.prototype.unobserve = function (target) {
    if (!arguments.length) {
      throw new TypeError("1 argument required, but only 0 present.");
    }
    // Do nothing if current environment doesn't have the Element interface.
    if (typeof Element === "undefined" || !(Element instanceof Object)) {
      return;
    }
    if (!(target instanceof getWindowOf(target).Element)) {
      throw new TypeError('parameter 1 is not of type "Element".');
    }
    var observations = this.observations_;
    // Do nothing if element is not being observed.
    if (!observations.has(target)) {
      return;
    }
    observations.delete(target);
    if (!observations.size) {
      this.controller_.removeObserver(this);
    }
  };
  /**
   * Stops observing all elements.
   *
   * @returns {void}
   */
  ResizeObserverSPI.prototype.disconnect = function () {
    this.clearActive();
    this.observations_.clear();
    this.controller_.removeObserver(this);
  };
  /**
   * Collects observation instances the associated element of which has changed
   * it's content rectangle.
   *
   * @returns {void}
   */
  ResizeObserverSPI.prototype.gatherActive = function () {
    var _this = this;
    this.clearActive();
    this.observations_.forEach(function (observation) {
      if (observation.isActive()) {
        _this.activeObservations_.push(observation);
      }
    });
  };
  /**
   * Invokes initial callback function with a list of ResizeObserverEntry
   * instances collected from active resize observations.
   *
   * @returns {void}
   */
  ResizeObserverSPI.prototype.broadcastActive = function () {
    // Do nothing if observer doesn't have active observations.
    if (!this.hasActive()) {
      return;
    }
    var ctx = this.callbackCtx_;
    // Create ResizeObserverEntry instance for every active observation.
    var entries = this.activeObservations_.map(function (observation) {
      return new ResizeObserverEntry(
        observation.target,
        observation.broadcastRect()
      );
    });
    this.callback_.call(ctx, entries, ctx);
    this.clearActive();
  };
  /**
   * Clears the collection of active observations.
   *
   * @returns {void}
   */
  ResizeObserverSPI.prototype.clearActive = function () {
    this.activeObservations_.splice(0);
  };
  /**
   * Tells whether observer has active observations.
   *
   * @returns {boolean}
   */
  ResizeObserverSPI.prototype.hasActive = function () {
    return this.activeObservations_.length > 0;
  };
  return ResizeObserverSPI;
})();

// Registry of internal observers. If WeakMap is not available use current shim
// for the Map collection as it has all required methods and because WeakMap
// can't be fully polyfilled anyway.
var observers = typeof WeakMap !== "undefined" ? new WeakMap() : new MapShim();
/**
 * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
 * exposing only those methods and properties that are defined in the spec.
 */
var ResizeObserver = /** @class */ (function () {
  /**
   * Creates a new instance of ResizeObserver.
   *
   * @param {ResizeObserverCallback} callback - Callback that is invoked when
   *      dimensions of the observed elements change.
   */
  function ResizeObserver(callback) {
    if (!(this instanceof ResizeObserver)) {
      throw new TypeError("Cannot call a class as a function.");
    }
    if (!arguments.length) {
      throw new TypeError("1 argument required, but only 0 present.");
    }
    var controller = ResizeObserverController.getInstance();
    var observer = new ResizeObserverSPI(callback, controller, this);
    observers.set(this, observer);
  }
  return ResizeObserver;
})();
// Expose public methods of ResizeObserver.
["observe", "unobserve", "disconnect"].forEach(function (method) {
  ResizeObserver.prototype[method] = function () {
    var _a;
    return (_a = observers.get(this))[method].apply(_a, arguments);
  };
});

var index = (function () {
  // Export existing implementation if available.
  if (typeof global$1.ResizeObserver !== "undefined") {
    return global$1.ResizeObserver;
  }
  return ResizeObserver;
})();

var types = ["client", "offset", "scroll", "bounds", "margin"];
function getTypes(props) {
  var allowedTypes = [];
  types.forEach(function (type) {
    if (props[type]) {
      allowedTypes.push(type);
    }
  });
  return allowedTypes;
}

function getContentRect$1(node, types) {
  var calculations = {};

  if (types.indexOf("client") > -1) {
    calculations.client = {
      top: node.clientTop,
      left: node.clientLeft,
      width: node.clientWidth,
      height: node.clientHeight,
    };
  }

  if (types.indexOf("offset") > -1) {
    calculations.offset = {
      top: node.offsetTop,
      left: node.offsetLeft,
      width: node.offsetWidth,
      height: node.offsetHeight,
    };
  }

  if (types.indexOf("scroll") > -1) {
    calculations.scroll = {
      top: node.scrollTop,
      left: node.scrollLeft,
      width: node.scrollWidth,
      height: node.scrollHeight,
    };
  }

  if (types.indexOf("bounds") > -1) {
    var rect = node.getBoundingClientRect();
    calculations.bounds = {
      top: rect.top,
      right: rect.right,
      bottom: rect.bottom,
      left: rect.left,
      width: rect.width,
      height: rect.height,
    };
  }

  if (types.indexOf("margin") > -1) {
    var styles = getComputedStyle(node);
    calculations.margin = {
      top: styles ? parseInt(styles.marginTop) : 0,
      right: styles ? parseInt(styles.marginRight) : 0,
      bottom: styles ? parseInt(styles.marginBottom) : 0,
      left: styles ? parseInt(styles.marginLeft) : 0,
    };
  }

  return calculations;
}

/**
 * Returns the global window object associated with provided element.
 */
function getWindowOf$1(target) {
  // Assume that the element is an instance of Node, which means that it
  // has the "ownerDocument" property from which we can retrieve a
  // corresponding global object.
  var ownerGlobal =
    target && target.ownerDocument && target.ownerDocument.defaultView; // Return the local window object if it's not possible extract one from
  // provided element.

  return ownerGlobal || window;
}

function withContentRect(types) {
  return function (WrappedComponent) {
    var _class, _temp;

    return (
      (_temp = _class =
        /*#__PURE__*/
        (function (_Component) {
          _inheritsLoose(WithContentRect, _Component);

          function WithContentRect() {
            var _this;

            for (
              var _len = arguments.length, args = new Array(_len), _key = 0;
              _key < _len;
              _key++
            ) {
              args[_key] = arguments[_key];
            }

            _this =
              _Component.call.apply(_Component, [this].concat(args)) || this;
            _this.state = {
              contentRect: {
                entry: {},
                client: {},
                offset: {},
                scroll: {},
                bounds: {},
                margin: {},
              },
            };
            _this._animationFrameID = null;
            _this._resizeObserver = null;
            _this._node = null;
            _this._window = null;

            _this.measure = function (entries) {
              var contentRect = getContentRect$1(
                _this._node,
                types || getTypes(_this.props)
              );

              if (entries) {
                contentRect.entry = entries[0].contentRect;
              }

              _this._animationFrameID = _this._window.requestAnimationFrame(
                function () {
                  if (_this._resizeObserver !== null) {
                    _this.setState({
                      contentRect: contentRect,
                    });

                    if (typeof _this.props.onResize === "function") {
                      _this.props.onResize(contentRect);
                    }
                  }
                }
              );
            };

            _this._handleRef = function (node) {
              if (_this._resizeObserver !== null && _this._node !== null) {
                _this._resizeObserver.unobserve(_this._node);
              }

              _this._node = node;
              _this._window = getWindowOf$1(_this._node);
              var innerRef = _this.props.innerRef;

              if (innerRef) {
                if (typeof innerRef === "function") {
                  innerRef(_this._node);
                } else {
                  innerRef.current = _this._node;
                }
              }

              if (_this._resizeObserver !== null && _this._node !== null) {
                _this._resizeObserver.observe(_this._node);
              }
            };

            return _this;
          }

          var _proto = WithContentRect.prototype;

          _proto.componentDidMount = function componentDidMount() {
            this._resizeObserver =
              this._window !== null && this._window.ResizeObserver
                ? new this._window.ResizeObserver(this.measure)
                : new index(this.measure);

            if (this._node !== null) {
              this._resizeObserver.observe(this._node);

              if (typeof this.props.onResize === "function") {
                this.props.onResize(
                  getContentRect$1(this._node, types || getTypes(this.props))
                );
              }
            }
          };

          _proto.componentWillUnmount = function componentWillUnmount() {
            if (this._window !== null) {
              this._window.cancelAnimationFrame(this._animationFrameID);
            }

            if (this._resizeObserver !== null) {
              this._resizeObserver.disconnect();

              this._resizeObserver = null;
            }
          };

          _proto.render = function render() {
            var _this$props = this.props,
              innerRef = _this$props.innerRef,
              onResize = _this$props.onResize,
              props = _objectWithoutPropertiesLoose(_this$props, [
                "innerRef",
                "onResize",
              ]);

            return createElement(
              WrappedComponent,
              _extends({}, props, {
                measureRef: this._handleRef,
                measure: this.measure,
                contentRect: this.state.contentRect,
              })
            );
          };

          return WithContentRect;
        })(Component)),
      (_class.propTypes = {
        client: propTypes.bool,
        offset: propTypes.bool,
        scroll: propTypes.bool,
        bounds: propTypes.bool,
        margin: propTypes.bool,
        innerRef: propTypes.oneOfType([propTypes.object, propTypes.func]),
        onResize: propTypes.func,
      }),
      _temp
    );
  };
}

var Measure = withContentRect()(function (_ref) {
  var measure = _ref.measure,
    measureRef = _ref.measureRef,
    contentRect = _ref.contentRect,
    children = _ref.children;
  return children({
    measure: measure,
    measureRef: measureRef,
    contentRect: contentRect,
  });
});
Measure.displayName = "Measure";
Measure.propTypes.children = propTypes.func;

var mapToZero_1 = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;
  exports["default"] = mapToZero;

  function mapToZero(obj) {
    var ret = {};
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        ret[key] = 0;
      }
    }
    return ret;
  }

  module.exports = exports["default"];
});

var stripStyle_1 = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;
  exports["default"] = stripStyle;

  function stripStyle(style) {
    var ret = {};
    for (var key in style) {
      if (!Object.prototype.hasOwnProperty.call(style, key)) {
        continue;
      }
      ret[key] = typeof style[key] === "number" ? style[key] : style[key].val;
    }
    return ret;
  }

  module.exports = exports["default"];
});

var stepper_1 = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;
  exports["default"] = stepper;

  var reusedTuple = [0, 0];

  function stepper(secondPerFrame, x, v, destX, k, b, precision) {
    // Spring stiffness, in kg / s^2

    // for animations, destX is really spring length (spring at rest). initial
    // position is considered as the stretched/compressed position of a spring
    var Fspring = -k * (x - destX);

    // Damping, in kg / s
    var Fdamper = -b * v;

    // usually we put mass here, but for animation purposes, specifying mass is a
    // bit redundant. you could simply adjust k and b accordingly
    // let a = (Fspring + Fdamper) / mass;
    var a = Fspring + Fdamper;

    var newV = v + a * secondPerFrame;
    var newX = x + newV * secondPerFrame;

    if (Math.abs(newV) < precision && Math.abs(newX - destX) < precision) {
      reusedTuple[0] = destX;
      reusedTuple[1] = 0;
      return reusedTuple;
    }

    reusedTuple[0] = newX;
    reusedTuple[1] = newV;
    return reusedTuple;
  }

  module.exports = exports["default"];
  // array reference around.
});

var performanceNow = createCommonjsModule(function (module) {
  // Generated by CoffeeScript 1.7.1
  (function () {
    var getNanoSeconds, hrtime, loadTime;

    if (
      typeof performance !== "undefined" &&
      performance !== null &&
      performance.now
    ) {
      module.exports = function () {
        return performance.now();
      };
    } else if (
      typeof process !== "undefined" &&
      process !== null &&
      process.hrtime
    ) {
      module.exports = function () {
        return (getNanoSeconds() - loadTime) / 1e6;
      };
      hrtime = process.hrtime;
      getNanoSeconds = function () {
        var hr;
        hr = hrtime();
        return hr[0] * 1e9 + hr[1];
      };
      loadTime = getNanoSeconds();
    } else if (Date.now) {
      module.exports = function () {
        return Date.now() - loadTime;
      };
      loadTime = Date.now();
    } else {
      module.exports = function () {
        return new Date().getTime() - loadTime;
      };
      loadTime = new Date().getTime();
    }
  }.call(commonjsGlobal));
});

var performanceNow$1 = createCommonjsModule(function (module) {
  // Generated by CoffeeScript 1.12.2
  (function () {
    var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;

    if (
      typeof performance !== "undefined" &&
      performance !== null &&
      performance.now
    ) {
      module.exports = function () {
        return performance.now();
      };
    } else if (
      typeof process !== "undefined" &&
      process !== null &&
      process.hrtime
    ) {
      module.exports = function () {
        return (getNanoSeconds() - nodeLoadTime) / 1e6;
      };
      hrtime = process.hrtime;
      getNanoSeconds = function () {
        var hr;
        hr = hrtime();
        return hr[0] * 1e9 + hr[1];
      };
      moduleLoadTime = getNanoSeconds();
      upTime = process.uptime() * 1e9;
      nodeLoadTime = moduleLoadTime - upTime;
    } else if (Date.now) {
      module.exports = function () {
        return Date.now() - loadTime;
      };
      loadTime = Date.now();
    } else {
      module.exports = function () {
        return new Date().getTime() - loadTime;
      };
      loadTime = new Date().getTime();
    }
  }.call(commonjsGlobal));
});

var root = typeof window === "undefined" ? commonjsGlobal : window,
  vendors = ["moz", "webkit"],
  suffix = "AnimationFrame",
  raf = root["request" + suffix],
  caf = root["cancel" + suffix] || root["cancelRequest" + suffix];

for (var i = 0; !raf && i < vendors.length; i++) {
  raf = root[vendors[i] + "Request" + suffix];
  caf =
    root[vendors[i] + "Cancel" + suffix] ||
    root[vendors[i] + "CancelRequest" + suffix];
}

// Some versions of FF have rAF but not cAF
if (!raf || !caf) {
  var last = 0,
    id = 0,
    queue = [],
    frameDuration = 1000 / 60;

  raf = function (callback) {
    if (queue.length === 0) {
      var _now = performanceNow$1(),
        next = Math.max(0, frameDuration - (_now - last));
      last = next + _now;
      setTimeout(function () {
        var cp = queue.slice(0);
        // Clear queue here to prevent
        // callbacks from appending listeners
        // to the current frame's queue
        queue.length = 0;
        for (var i = 0; i < cp.length; i++) {
          if (!cp[i].cancelled) {
            try {
              cp[i].callback(last);
            } catch (e) {
              setTimeout(function () {
                throw e;
              }, 0);
            }
          }
        }
      }, Math.round(next));
    }
    queue.push({
      handle: ++id,
      callback: callback,
      cancelled: false,
    });
    return id;
  };

  caf = function (handle) {
    for (var i = 0; i < queue.length; i++) {
      if (queue[i].handle === handle) {
        queue[i].cancelled = true;
      }
    }
  };
}

var raf_1 = function (fn) {
  // Wrap in a new function to prevent
  // `cancel` potentially being assigned
  // to the native rAF function
  return raf.call(root, fn);
};
var cancel = function () {
  caf.apply(root, arguments);
};
var polyfill = function (object) {
  if (!object) {
    object = root;
  }
  object.requestAnimationFrame = raf;
  object.cancelAnimationFrame = caf;
};
raf_1.cancel = cancel;
raf_1.polyfill = polyfill;

var shouldStopAnimation_1 = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;
  exports["default"] = shouldStopAnimation;

  function shouldStopAnimation(currentStyle, style, currentVelocity) {
    for (var key in style) {
      if (!Object.prototype.hasOwnProperty.call(style, key)) {
        continue;
      }

      if (currentVelocity[key] !== 0) {
        return false;
      }

      var styleValue =
        typeof style[key] === "number" ? style[key] : style[key].val;
      // stepper will have already taken care of rounding precision errors, so
      // won't have such thing as 0.9999 !=== 1
      if (currentStyle[key] !== styleValue) {
        return false;
      }
    }

    return true;
  }

  module.exports = exports["default"];
});

var Motion_1 = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;

  var _extends =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };

  var _createClass = (function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  })();

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError(
        "Super expression must either be null or a function, not " +
          typeof superClass
      );
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true,
      },
    });
    if (superClass)
      Object.setPrototypeOf
        ? Object.setPrototypeOf(subClass, superClass)
        : (subClass.__proto__ = superClass);
  }

  var _mapToZero2 = _interopRequireDefault(mapToZero_1);

  var _stripStyle2 = _interopRequireDefault(stripStyle_1);

  var _stepper4 = _interopRequireDefault(stepper_1);

  var _performanceNow2 = _interopRequireDefault(performanceNow);

  var _raf2 = _interopRequireDefault(raf_1);

  var _shouldStopAnimation2 = _interopRequireDefault(shouldStopAnimation_1);

  var _react2 = _interopRequireDefault(React);

  var _propTypes2 = _interopRequireDefault(propTypes);

  var msPerFrame = 1000 / 60;

  var Motion = (function (_React$Component) {
    _inherits(Motion, _React$Component);

    _createClass(Motion, null, [
      {
        key: "propTypes",
        value: {
          // TOOD: warn against putting a config in here
          defaultStyle: _propTypes2["default"].objectOf(
            _propTypes2["default"].number
          ),
          style: _propTypes2["default"].objectOf(
            _propTypes2["default"].oneOfType([
              _propTypes2["default"].number,
              _propTypes2["default"].object,
            ])
          ).isRequired,
          children: _propTypes2["default"].func.isRequired,
          onRest: _propTypes2["default"].func,
        },
        enumerable: true,
      },
    ]);

    function Motion(props) {
      var _this = this;

      _classCallCheck(this, Motion);

      _React$Component.call(this, props);
      this.wasAnimating = false;
      this.animationID = null;
      this.prevTime = 0;
      this.accumulatedTime = 0;
      this.unreadPropStyle = null;

      this.clearUnreadPropStyle = function (destStyle) {
        var dirty = false;
        var _state = _this.state;
        var currentStyle = _state.currentStyle;
        var currentVelocity = _state.currentVelocity;
        var lastIdealStyle = _state.lastIdealStyle;
        var lastIdealVelocity = _state.lastIdealVelocity;

        for (var key in destStyle) {
          if (!Object.prototype.hasOwnProperty.call(destStyle, key)) {
            continue;
          }

          var styleValue = destStyle[key];
          if (typeof styleValue === "number") {
            if (!dirty) {
              dirty = true;
              currentStyle = _extends({}, currentStyle);
              currentVelocity = _extends({}, currentVelocity);
              lastIdealStyle = _extends({}, lastIdealStyle);
              lastIdealVelocity = _extends({}, lastIdealVelocity);
            }

            currentStyle[key] = styleValue;
            currentVelocity[key] = 0;
            lastIdealStyle[key] = styleValue;
            lastIdealVelocity[key] = 0;
          }
        }

        if (dirty) {
          _this.setState({
            currentStyle: currentStyle,
            currentVelocity: currentVelocity,
            lastIdealStyle: lastIdealStyle,
            lastIdealVelocity: lastIdealVelocity,
          });
        }
      };

      this.startAnimationIfNecessary = function () {
        // TODO: when config is {a: 10} and dest is {a: 10} do we raf once and
        // call cb? No, otherwise accidental parent rerender causes cb trigger
        _this.animationID = _raf2["default"](function (timestamp) {
          // check if we need to animate in the first place
          var propsStyle = _this.props.style;
          if (
            _shouldStopAnimation2["default"](
              _this.state.currentStyle,
              propsStyle,
              _this.state.currentVelocity
            )
          ) {
            if (_this.wasAnimating && _this.props.onRest) {
              _this.props.onRest();
            }

            // no need to cancel animationID here; shouldn't have any in flight
            _this.animationID = null;
            _this.wasAnimating = false;
            _this.accumulatedTime = 0;
            return;
          }

          _this.wasAnimating = true;

          var currentTime = timestamp || _performanceNow2["default"]();
          var timeDelta = currentTime - _this.prevTime;
          _this.prevTime = currentTime;
          _this.accumulatedTime = _this.accumulatedTime + timeDelta;
          // more than 10 frames? prolly switched browser tab. Restart
          if (_this.accumulatedTime > msPerFrame * 10) {
            _this.accumulatedTime = 0;
          }

          if (_this.accumulatedTime === 0) {
            // no need to cancel animationID here; shouldn't have any in flight
            _this.animationID = null;
            _this.startAnimationIfNecessary();
            return;
          }

          var currentFrameCompletion =
            (_this.accumulatedTime -
              Math.floor(_this.accumulatedTime / msPerFrame) * msPerFrame) /
            msPerFrame;
          var framesToCatchUp = Math.floor(_this.accumulatedTime / msPerFrame);

          var newLastIdealStyle = {};
          var newLastIdealVelocity = {};
          var newCurrentStyle = {};
          var newCurrentVelocity = {};

          for (var key in propsStyle) {
            if (!Object.prototype.hasOwnProperty.call(propsStyle, key)) {
              continue;
            }

            var styleValue = propsStyle[key];
            if (typeof styleValue === "number") {
              newCurrentStyle[key] = styleValue;
              newCurrentVelocity[key] = 0;
              newLastIdealStyle[key] = styleValue;
              newLastIdealVelocity[key] = 0;
            } else {
              var newLastIdealStyleValue = _this.state.lastIdealStyle[key];
              var newLastIdealVelocityValue =
                _this.state.lastIdealVelocity[key];
              for (var i = 0; i < framesToCatchUp; i++) {
                var _stepper = _stepper4["default"](
                  msPerFrame / 1000,
                  newLastIdealStyleValue,
                  newLastIdealVelocityValue,
                  styleValue.val,
                  styleValue.stiffness,
                  styleValue.damping,
                  styleValue.precision
                );

                newLastIdealStyleValue = _stepper[0];
                newLastIdealVelocityValue = _stepper[1];
              }

              var _stepper2 = _stepper4["default"](
                msPerFrame / 1000,
                newLastIdealStyleValue,
                newLastIdealVelocityValue,
                styleValue.val,
                styleValue.stiffness,
                styleValue.damping,
                styleValue.precision
              );

              var nextIdealX = _stepper2[0];
              var nextIdealV = _stepper2[1];

              newCurrentStyle[key] =
                newLastIdealStyleValue +
                (nextIdealX - newLastIdealStyleValue) * currentFrameCompletion;
              newCurrentVelocity[key] =
                newLastIdealVelocityValue +
                (nextIdealV - newLastIdealVelocityValue) *
                  currentFrameCompletion;
              newLastIdealStyle[key] = newLastIdealStyleValue;
              newLastIdealVelocity[key] = newLastIdealVelocityValue;
            }
          }

          _this.animationID = null;
          // the amount we're looped over above
          _this.accumulatedTime -= framesToCatchUp * msPerFrame;

          _this.setState({
            currentStyle: newCurrentStyle,
            currentVelocity: newCurrentVelocity,
            lastIdealStyle: newLastIdealStyle,
            lastIdealVelocity: newLastIdealVelocity,
          });

          _this.unreadPropStyle = null;

          _this.startAnimationIfNecessary();
        });
      };

      this.state = this.defaultState();
    }

    Motion.prototype.defaultState = function defaultState() {
      var _props = this.props;
      var defaultStyle = _props.defaultStyle;
      var style = _props.style;

      var currentStyle = defaultStyle || _stripStyle2["default"](style);
      var currentVelocity = _mapToZero2["default"](currentStyle);
      return {
        currentStyle: currentStyle,
        currentVelocity: currentVelocity,
        lastIdealStyle: currentStyle,
        lastIdealVelocity: currentVelocity,
      };
    };

    // it's possible that currentStyle's value is stale: if props is immediately
    // changed from 0 to 400 to spring(0) again, the async currentStyle is still
    // at 0 (didn't have time to tick and interpolate even once). If we naively
    // compare currentStyle with destVal it'll be 0 === 0 (no animation, stop).
    // In reality currentStyle should be 400

    Motion.prototype.componentDidMount = function componentDidMount() {
      this.prevTime = _performanceNow2["default"]();
      this.startAnimationIfNecessary();
    };

    Motion.prototype.componentWillReceiveProps = function componentWillReceiveProps(
      props
    ) {
      if (this.unreadPropStyle != null) {
        // previous props haven't had the chance to be set yet; set them here
        this.clearUnreadPropStyle(this.unreadPropStyle);
      }

      this.unreadPropStyle = props.style;
      if (this.animationID == null) {
        this.prevTime = _performanceNow2["default"]();
        this.startAnimationIfNecessary();
      }
    };

    Motion.prototype.componentWillUnmount = function componentWillUnmount() {
      if (this.animationID != null) {
        _raf2["default"].cancel(this.animationID);
        this.animationID = null;
      }
    };

    Motion.prototype.render = function render() {
      var renderedChildren = this.props.children(this.state.currentStyle);
      return (
        renderedChildren && _react2["default"].Children.only(renderedChildren)
      );
    };

    return Motion;
  })(_react2["default"].Component);

  exports["default"] = Motion;
  module.exports = exports["default"];

  // after checking for unreadPropStyle != null, we manually go set the
  // non-interpolating values (those that are a number, without a spring
  // config)
});

var StaggeredMotion_1 = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;

  var _extends =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };

  var _createClass = (function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  })();

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError(
        "Super expression must either be null or a function, not " +
          typeof superClass
      );
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true,
      },
    });
    if (superClass)
      Object.setPrototypeOf
        ? Object.setPrototypeOf(subClass, superClass)
        : (subClass.__proto__ = superClass);
  }

  var _mapToZero2 = _interopRequireDefault(mapToZero_1);

  var _stripStyle2 = _interopRequireDefault(stripStyle_1);

  var _stepper4 = _interopRequireDefault(stepper_1);

  var _performanceNow2 = _interopRequireDefault(performanceNow);

  var _raf2 = _interopRequireDefault(raf_1);

  var _shouldStopAnimation2 = _interopRequireDefault(shouldStopAnimation_1);

  var _react2 = _interopRequireDefault(React);

  var _propTypes2 = _interopRequireDefault(propTypes);

  var msPerFrame = 1000 / 60;

  function shouldStopAnimationAll(currentStyles, styles, currentVelocities) {
    for (var i = 0; i < currentStyles.length; i++) {
      if (
        !_shouldStopAnimation2["default"](
          currentStyles[i],
          styles[i],
          currentVelocities[i]
        )
      ) {
        return false;
      }
    }
    return true;
  }

  var StaggeredMotion = (function (_React$Component) {
    _inherits(StaggeredMotion, _React$Component);

    _createClass(StaggeredMotion, null, [
      {
        key: "propTypes",
        value: {
          // TOOD: warn against putting a config in here
          defaultStyles: _propTypes2["default"].arrayOf(
            _propTypes2["default"].objectOf(_propTypes2["default"].number)
          ),
          styles: _propTypes2["default"].func.isRequired,
          children: _propTypes2["default"].func.isRequired,
        },
        enumerable: true,
      },
    ]);

    function StaggeredMotion(props) {
      var _this = this;

      _classCallCheck(this, StaggeredMotion);

      _React$Component.call(this, props);
      this.animationID = null;
      this.prevTime = 0;
      this.accumulatedTime = 0;
      this.unreadPropStyles = null;

      this.clearUnreadPropStyle = function (unreadPropStyles) {
        var _state = _this.state;
        var currentStyles = _state.currentStyles;
        var currentVelocities = _state.currentVelocities;
        var lastIdealStyles = _state.lastIdealStyles;
        var lastIdealVelocities = _state.lastIdealVelocities;

        var someDirty = false;
        for (var i = 0; i < unreadPropStyles.length; i++) {
          var unreadPropStyle = unreadPropStyles[i];
          var dirty = false;

          for (var key in unreadPropStyle) {
            if (!Object.prototype.hasOwnProperty.call(unreadPropStyle, key)) {
              continue;
            }

            var styleValue = unreadPropStyle[key];
            if (typeof styleValue === "number") {
              if (!dirty) {
                dirty = true;
                someDirty = true;
                currentStyles[i] = _extends({}, currentStyles[i]);
                currentVelocities[i] = _extends({}, currentVelocities[i]);
                lastIdealStyles[i] = _extends({}, lastIdealStyles[i]);
                lastIdealVelocities[i] = _extends({}, lastIdealVelocities[i]);
              }
              currentStyles[i][key] = styleValue;
              currentVelocities[i][key] = 0;
              lastIdealStyles[i][key] = styleValue;
              lastIdealVelocities[i][key] = 0;
            }
          }
        }

        if (someDirty) {
          _this.setState({
            currentStyles: currentStyles,
            currentVelocities: currentVelocities,
            lastIdealStyles: lastIdealStyles,
            lastIdealVelocities: lastIdealVelocities,
          });
        }
      };

      this.startAnimationIfNecessary = function () {
        // TODO: when config is {a: 10} and dest is {a: 10} do we raf once and
        // call cb? No, otherwise accidental parent rerender causes cb trigger
        _this.animationID = _raf2["default"](function (timestamp) {
          var destStyles = _this.props.styles(_this.state.lastIdealStyles);

          // check if we need to animate in the first place
          if (
            shouldStopAnimationAll(
              _this.state.currentStyles,
              destStyles,
              _this.state.currentVelocities
            )
          ) {
            // no need to cancel animationID here; shouldn't have any in flight
            _this.animationID = null;
            _this.accumulatedTime = 0;
            return;
          }

          var currentTime = timestamp || _performanceNow2["default"]();
          var timeDelta = currentTime - _this.prevTime;
          _this.prevTime = currentTime;
          _this.accumulatedTime = _this.accumulatedTime + timeDelta;
          // more than 10 frames? prolly switched browser tab. Restart
          if (_this.accumulatedTime > msPerFrame * 10) {
            _this.accumulatedTime = 0;
          }

          if (_this.accumulatedTime === 0) {
            // no need to cancel animationID here; shouldn't have any in flight
            _this.animationID = null;
            _this.startAnimationIfNecessary();
            return;
          }

          var currentFrameCompletion =
            (_this.accumulatedTime -
              Math.floor(_this.accumulatedTime / msPerFrame) * msPerFrame) /
            msPerFrame;
          var framesToCatchUp = Math.floor(_this.accumulatedTime / msPerFrame);

          var newLastIdealStyles = [];
          var newLastIdealVelocities = [];
          var newCurrentStyles = [];
          var newCurrentVelocities = [];

          for (var i = 0; i < destStyles.length; i++) {
            var destStyle = destStyles[i];
            var newCurrentStyle = {};
            var newCurrentVelocity = {};
            var newLastIdealStyle = {};
            var newLastIdealVelocity = {};

            for (var key in destStyle) {
              if (!Object.prototype.hasOwnProperty.call(destStyle, key)) {
                continue;
              }

              var styleValue = destStyle[key];
              if (typeof styleValue === "number") {
                newCurrentStyle[key] = styleValue;
                newCurrentVelocity[key] = 0;
                newLastIdealStyle[key] = styleValue;
                newLastIdealVelocity[key] = 0;
              } else {
                var newLastIdealStyleValue =
                  _this.state.lastIdealStyles[i][key];
                var newLastIdealVelocityValue =
                  _this.state.lastIdealVelocities[i][key];
                for (var j = 0; j < framesToCatchUp; j++) {
                  var _stepper = _stepper4["default"](
                    msPerFrame / 1000,
                    newLastIdealStyleValue,
                    newLastIdealVelocityValue,
                    styleValue.val,
                    styleValue.stiffness,
                    styleValue.damping,
                    styleValue.precision
                  );

                  newLastIdealStyleValue = _stepper[0];
                  newLastIdealVelocityValue = _stepper[1];
                }

                var _stepper2 = _stepper4["default"](
                  msPerFrame / 1000,
                  newLastIdealStyleValue,
                  newLastIdealVelocityValue,
                  styleValue.val,
                  styleValue.stiffness,
                  styleValue.damping,
                  styleValue.precision
                );

                var nextIdealX = _stepper2[0];
                var nextIdealV = _stepper2[1];

                newCurrentStyle[key] =
                  newLastIdealStyleValue +
                  (nextIdealX - newLastIdealStyleValue) *
                    currentFrameCompletion;
                newCurrentVelocity[key] =
                  newLastIdealVelocityValue +
                  (nextIdealV - newLastIdealVelocityValue) *
                    currentFrameCompletion;
                newLastIdealStyle[key] = newLastIdealStyleValue;
                newLastIdealVelocity[key] = newLastIdealVelocityValue;
              }
            }

            newCurrentStyles[i] = newCurrentStyle;
            newCurrentVelocities[i] = newCurrentVelocity;
            newLastIdealStyles[i] = newLastIdealStyle;
            newLastIdealVelocities[i] = newLastIdealVelocity;
          }

          _this.animationID = null;
          // the amount we're looped over above
          _this.accumulatedTime -= framesToCatchUp * msPerFrame;

          _this.setState({
            currentStyles: newCurrentStyles,
            currentVelocities: newCurrentVelocities,
            lastIdealStyles: newLastIdealStyles,
            lastIdealVelocities: newLastIdealVelocities,
          });

          _this.unreadPropStyles = null;

          _this.startAnimationIfNecessary();
        });
      };

      this.state = this.defaultState();
    }

    StaggeredMotion.prototype.defaultState = function defaultState() {
      var _props = this.props;
      var defaultStyles = _props.defaultStyles;
      var styles = _props.styles;

      var currentStyles =
        defaultStyles || styles().map(_stripStyle2["default"]);
      var currentVelocities = currentStyles.map(function (currentStyle) {
        return _mapToZero2["default"](currentStyle);
      });
      return {
        currentStyles: currentStyles,
        currentVelocities: currentVelocities,
        lastIdealStyles: currentStyles,
        lastIdealVelocities: currentVelocities,
      };
    };

    StaggeredMotion.prototype.componentDidMount = function componentDidMount() {
      this.prevTime = _performanceNow2["default"]();
      this.startAnimationIfNecessary();
    };

    StaggeredMotion.prototype.componentWillReceiveProps = function componentWillReceiveProps(
      props
    ) {
      if (this.unreadPropStyles != null) {
        // previous props haven't had the chance to be set yet; set them here
        this.clearUnreadPropStyle(this.unreadPropStyles);
      }

      this.unreadPropStyles = props.styles(this.state.lastIdealStyles);
      if (this.animationID == null) {
        this.prevTime = _performanceNow2["default"]();
        this.startAnimationIfNecessary();
      }
    };

    StaggeredMotion.prototype.componentWillUnmount = function componentWillUnmount() {
      if (this.animationID != null) {
        _raf2["default"].cancel(this.animationID);
        this.animationID = null;
      }
    };

    StaggeredMotion.prototype.render = function render() {
      var renderedChildren = this.props.children(this.state.currentStyles);
      return (
        renderedChildren && _react2["default"].Children.only(renderedChildren)
      );
    };

    return StaggeredMotion;
  })(_react2["default"].Component);

  exports["default"] = StaggeredMotion;
  module.exports = exports["default"];

  // it's possible that currentStyle's value is stale: if props is immediately
  // changed from 0 to 400 to spring(0) again, the async currentStyle is still
  // at 0 (didn't have time to tick and interpolate even once). If we naively
  // compare currentStyle with destVal it'll be 0 === 0 (no animation, stop).
  // In reality currentStyle should be 400

  // after checking for unreadPropStyles != null, we manually go set the
  // non-interpolating values (those that are a number, without a spring
  // config)
});

var mergeDiff_1 = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;
  exports["default"] = mergeDiff;

  function mergeDiff(prev, next, onRemove) {
    // bookkeeping for easier access of a key's index below. This is 2 allocations +
    // potentially triggering chrome hash map mode for objs (so it might be faster

    var prevKeyIndex = {};
    for (var i = 0; i < prev.length; i++) {
      prevKeyIndex[prev[i].key] = i;
    }
    var nextKeyIndex = {};
    for (var i = 0; i < next.length; i++) {
      nextKeyIndex[next[i].key] = i;
    }

    // first, an overly elaborate way of merging prev and next, eliminating
    // duplicates (in terms of keys). If there's dupe, keep the item in next).
    // This way of writing it saves allocations
    var ret = [];
    for (var i = 0; i < next.length; i++) {
      ret[i] = next[i];
    }
    for (var i = 0; i < prev.length; i++) {
      if (!Object.prototype.hasOwnProperty.call(nextKeyIndex, prev[i].key)) {
        // this is called my TM's `mergeAndSync`, which calls willLeave. We don't
        // merge in keys that the user desires to kill
        var fill = onRemove(i, prev[i]);
        if (fill != null) {
          ret.push(fill);
        }
      }
    }

    // now all the items all present. Core sorting logic to have the right order
    return ret.sort(function (a, b) {
      var nextOrderA = nextKeyIndex[a.key];
      var nextOrderB = nextKeyIndex[b.key];
      var prevOrderA = prevKeyIndex[a.key];
      var prevOrderB = prevKeyIndex[b.key];

      if (nextOrderA != null && nextOrderB != null) {
        // both keys in next
        return nextKeyIndex[a.key] - nextKeyIndex[b.key];
      } else if (prevOrderA != null && prevOrderB != null) {
        // both keys in prev
        return prevKeyIndex[a.key] - prevKeyIndex[b.key];
      } else if (nextOrderA != null) {
        // key a in next, key b in prev

        // how to determine the order between a and b? We find a "pivot" (term
        // abuse), a key present in both prev and next, that is sandwiched between
        // a and b. In the context of our above example, if we're comparing a and
        // d, b's (the only) pivot
        for (var i = 0; i < next.length; i++) {
          var pivot = next[i].key;
          if (!Object.prototype.hasOwnProperty.call(prevKeyIndex, pivot)) {
            continue;
          }

          if (
            nextOrderA < nextKeyIndex[pivot] &&
            prevOrderB > prevKeyIndex[pivot]
          ) {
            return -1;
          } else if (
            nextOrderA > nextKeyIndex[pivot] &&
            prevOrderB < prevKeyIndex[pivot]
          ) {
            return 1;
          }
        }
        // pluggable. default to: next bigger than prev
        return 1;
      }
      // prevOrderA, nextOrderB
      for (var i = 0; i < next.length; i++) {
        var pivot = next[i].key;
        if (!Object.prototype.hasOwnProperty.call(prevKeyIndex, pivot)) {
          continue;
        }
        if (
          nextOrderB < nextKeyIndex[pivot] &&
          prevOrderA > prevKeyIndex[pivot]
        ) {
          return 1;
        } else if (
          nextOrderB > nextKeyIndex[pivot] &&
          prevOrderA < prevKeyIndex[pivot]
        ) {
          return -1;
        }
      }
      // pluggable. default to: next bigger than prev
      return -1;
    });
  }

  module.exports = exports["default"];
  // to loop through and find a key's index each time), but I no longer care
});

var TransitionMotion_1 = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;

  var _extends =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };

  var _createClass = (function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  })();

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError(
        "Super expression must either be null or a function, not " +
          typeof superClass
      );
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true,
      },
    });
    if (superClass)
      Object.setPrototypeOf
        ? Object.setPrototypeOf(subClass, superClass)
        : (subClass.__proto__ = superClass);
  }

  var _mapToZero2 = _interopRequireDefault(mapToZero_1);

  var _stripStyle2 = _interopRequireDefault(stripStyle_1);

  var _stepper4 = _interopRequireDefault(stepper_1);

  var _mergeDiff2 = _interopRequireDefault(mergeDiff_1);

  var _performanceNow2 = _interopRequireDefault(performanceNow);

  var _raf2 = _interopRequireDefault(raf_1);

  var _shouldStopAnimation2 = _interopRequireDefault(shouldStopAnimation_1);

  var _react2 = _interopRequireDefault(React);

  var _propTypes2 = _interopRequireDefault(propTypes);

  var msPerFrame = 1000 / 60;

  // the children function & (potential) styles function asks as param an
  // Array<TransitionPlainStyle>, where each TransitionPlainStyle is of the format
  // {key: string, data?: any, style: PlainStyle}. However, the way we keep
  // internal states doesn't contain such a data structure (check the state and
  // TransitionMotionState). So when children function and others ask for such
  // data we need to generate them on the fly by combining mergedPropsStyles and
  // currentStyles/lastIdealStyles
  function rehydrateStyles(mergedPropsStyles, unreadPropStyles, plainStyles) {
    // Copy the value to a `const` so that Flow understands that the const won't
    // change and will be non-nullable in the callback below.
    var cUnreadPropStyles = unreadPropStyles;
    if (cUnreadPropStyles == null) {
      return mergedPropsStyles.map(function (mergedPropsStyle, i) {
        return {
          key: mergedPropsStyle.key,
          data: mergedPropsStyle.data,
          style: plainStyles[i],
        };
      });
    }
    return mergedPropsStyles.map(function (mergedPropsStyle, i) {
      for (var j = 0; j < cUnreadPropStyles.length; j++) {
        if (cUnreadPropStyles[j].key === mergedPropsStyle.key) {
          return {
            key: cUnreadPropStyles[j].key,
            data: cUnreadPropStyles[j].data,
            style: plainStyles[i],
          };
        }
      }
      return {
        key: mergedPropsStyle.key,
        data: mergedPropsStyle.data,
        style: plainStyles[i],
      };
    });
  }

  function shouldStopAnimationAll(
    currentStyles,
    destStyles,
    currentVelocities,
    mergedPropsStyles
  ) {
    if (mergedPropsStyles.length !== destStyles.length) {
      return false;
    }

    for (var i = 0; i < mergedPropsStyles.length; i++) {
      if (mergedPropsStyles[i].key !== destStyles[i].key) {
        return false;
      }
    }

    // we have the invariant that mergedPropsStyles and
    // currentStyles/currentVelocities/last* are synced in terms of cells, see
    // mergeAndSync comment for more info
    for (var i = 0; i < mergedPropsStyles.length; i++) {
      if (
        !_shouldStopAnimation2["default"](
          currentStyles[i],
          destStyles[i].style,
          currentVelocities[i]
        )
      ) {
        return false;
      }
    }

    return true;
  }

  // core key merging logic

  // things to do: say previously merged style is {a, b}, dest style (prop) is {b,
  // c}, previous current (interpolating) style is {a, b}
  // **invariant**: current[i] corresponds to merged[i] in terms of key

  // steps:
  // turn merged style into {a?, b, c}
  //    add c, value of c is destStyles.c
  //    maybe remove a, aka call willLeave(a), then merged is either {b, c} or {a, b, c}
  // turn current (interpolating) style from {a, b} into {a?, b, c}
  //    maybe remove a
  //    certainly add c, value of c is willEnter(c)
  // loop over merged and construct new current
  // dest doesn't change, that's owner's
  function mergeAndSync(
    willEnter,
    willLeave,
    didLeave,
    oldMergedPropsStyles,
    destStyles,
    oldCurrentStyles,
    oldCurrentVelocities,
    oldLastIdealStyles,
    oldLastIdealVelocities
  ) {
    var newMergedPropsStyles = _mergeDiff2["default"](
      oldMergedPropsStyles,
      destStyles,
      function (oldIndex, oldMergedPropsStyle) {
        var leavingStyle = willLeave(oldMergedPropsStyle);
        if (leavingStyle == null) {
          didLeave({
            key: oldMergedPropsStyle.key,
            data: oldMergedPropsStyle.data,
          });
          return null;
        }
        if (
          _shouldStopAnimation2["default"](
            oldCurrentStyles[oldIndex],
            leavingStyle,
            oldCurrentVelocities[oldIndex]
          )
        ) {
          didLeave({
            key: oldMergedPropsStyle.key,
            data: oldMergedPropsStyle.data,
          });
          return null;
        }
        return {
          key: oldMergedPropsStyle.key,
          data: oldMergedPropsStyle.data,
          style: leavingStyle,
        };
      }
    );

    var newCurrentStyles = [];
    var newCurrentVelocities = [];
    var newLastIdealStyles = [];
    var newLastIdealVelocities = [];
    for (var i = 0; i < newMergedPropsStyles.length; i++) {
      var newMergedPropsStyleCell = newMergedPropsStyles[i];
      var foundOldIndex = null;
      for (var j = 0; j < oldMergedPropsStyles.length; j++) {
        if (oldMergedPropsStyles[j].key === newMergedPropsStyleCell.key) {
          foundOldIndex = j;
          break;
        }
      }
      // TODO: key search code
      if (foundOldIndex == null) {
        var plainStyle = willEnter(newMergedPropsStyleCell);
        newCurrentStyles[i] = plainStyle;
        newLastIdealStyles[i] = plainStyle;

        var velocity = _mapToZero2["default"](newMergedPropsStyleCell.style);
        newCurrentVelocities[i] = velocity;
        newLastIdealVelocities[i] = velocity;
      } else {
        newCurrentStyles[i] = oldCurrentStyles[foundOldIndex];
        newLastIdealStyles[i] = oldLastIdealStyles[foundOldIndex];
        newCurrentVelocities[i] = oldCurrentVelocities[foundOldIndex];
        newLastIdealVelocities[i] = oldLastIdealVelocities[foundOldIndex];
      }
    }

    return [
      newMergedPropsStyles,
      newCurrentStyles,
      newCurrentVelocities,
      newLastIdealStyles,
      newLastIdealVelocities,
    ];
  }

  var TransitionMotion = (function (_React$Component) {
    _inherits(TransitionMotion, _React$Component);

    _createClass(TransitionMotion, null, [
      {
        key: "propTypes",
        value: {
          defaultStyles: _propTypes2["default"].arrayOf(
            _propTypes2["default"].shape({
              key: _propTypes2["default"].string.isRequired,
              data: _propTypes2["default"].any,
              style: _propTypes2["default"].objectOf(
                _propTypes2["default"].number
              ).isRequired,
            })
          ),
          styles: _propTypes2["default"].oneOfType([
            _propTypes2["default"].func,
            _propTypes2["default"].arrayOf(
              _propTypes2["default"].shape({
                key: _propTypes2["default"].string.isRequired,
                data: _propTypes2["default"].any,
                style: _propTypes2["default"].objectOf(
                  _propTypes2["default"].oneOfType([
                    _propTypes2["default"].number,
                    _propTypes2["default"].object,
                  ])
                ).isRequired,
              })
            ),
          ]).isRequired,
          children: _propTypes2["default"].func.isRequired,
          willEnter: _propTypes2["default"].func,
          willLeave: _propTypes2["default"].func,
          didLeave: _propTypes2["default"].func,
        },
        enumerable: true,
      },
      {
        key: "defaultProps",
        value: {
          willEnter: function willEnter(styleThatEntered) {
            return _stripStyle2["default"](styleThatEntered.style);
          },
          // recall: returning null makes the current unmounting TransitionStyle
          // disappear immediately
          willLeave: function willLeave() {
            return null;
          },
          didLeave: function didLeave() {},
        },
        enumerable: true,
      },
    ]);

    function TransitionMotion(props) {
      var _this = this;

      _classCallCheck(this, TransitionMotion);

      _React$Component.call(this, props);
      this.unmounting = false;
      this.animationID = null;
      this.prevTime = 0;
      this.accumulatedTime = 0;
      this.unreadPropStyles = null;

      this.clearUnreadPropStyle = function (unreadPropStyles) {
        var _mergeAndSync = mergeAndSync(
          _this.props.willEnter,
          _this.props.willLeave,
          _this.props.didLeave,
          _this.state.mergedPropsStyles,
          unreadPropStyles,
          _this.state.currentStyles,
          _this.state.currentVelocities,
          _this.state.lastIdealStyles,
          _this.state.lastIdealVelocities
        );

        var mergedPropsStyles = _mergeAndSync[0];
        var currentStyles = _mergeAndSync[1];
        var currentVelocities = _mergeAndSync[2];
        var lastIdealStyles = _mergeAndSync[3];
        var lastIdealVelocities = _mergeAndSync[4];

        for (var i = 0; i < unreadPropStyles.length; i++) {
          var unreadPropStyle = unreadPropStyles[i].style;
          var dirty = false;

          for (var key in unreadPropStyle) {
            if (!Object.prototype.hasOwnProperty.call(unreadPropStyle, key)) {
              continue;
            }

            var styleValue = unreadPropStyle[key];
            if (typeof styleValue === "number") {
              if (!dirty) {
                dirty = true;
                currentStyles[i] = _extends({}, currentStyles[i]);
                currentVelocities[i] = _extends({}, currentVelocities[i]);
                lastIdealStyles[i] = _extends({}, lastIdealStyles[i]);
                lastIdealVelocities[i] = _extends({}, lastIdealVelocities[i]);
                mergedPropsStyles[i] = {
                  key: mergedPropsStyles[i].key,
                  data: mergedPropsStyles[i].data,
                  style: _extends({}, mergedPropsStyles[i].style),
                };
              }
              currentStyles[i][key] = styleValue;
              currentVelocities[i][key] = 0;
              lastIdealStyles[i][key] = styleValue;
              lastIdealVelocities[i][key] = 0;
              mergedPropsStyles[i].style[key] = styleValue;
            }
          }
        }

        // unlike the other 2 components, we can't detect staleness and optionally
        // opt out of setState here. each style object's data might contain new
        // stuff we're not/cannot compare
        _this.setState({
          currentStyles: currentStyles,
          currentVelocities: currentVelocities,
          mergedPropsStyles: mergedPropsStyles,
          lastIdealStyles: lastIdealStyles,
          lastIdealVelocities: lastIdealVelocities,
        });
      };

      this.startAnimationIfNecessary = function () {
        if (_this.unmounting) {
          return;
        }

        // TODO: when config is {a: 10} and dest is {a: 10} do we raf once and
        // call cb? No, otherwise accidental parent rerender causes cb trigger
        _this.animationID = _raf2["default"](function (timestamp) {
          // https://github.com/chenglou/react-motion/pull/420
          // > if execution passes the conditional if (this.unmounting), then
          // executes async defaultRaf and after that component unmounts and after
          // that the callback of defaultRaf is called, then setState will be called
          // on unmounted component.
          if (_this.unmounting) {
            return;
          }

          var propStyles = _this.props.styles;
          var destStyles =
            typeof propStyles === "function"
              ? propStyles(
                  rehydrateStyles(
                    _this.state.mergedPropsStyles,
                    _this.unreadPropStyles,
                    _this.state.lastIdealStyles
                  )
                )
              : propStyles;

          // check if we need to animate in the first place
          if (
            shouldStopAnimationAll(
              _this.state.currentStyles,
              destStyles,
              _this.state.currentVelocities,
              _this.state.mergedPropsStyles
            )
          ) {
            // no need to cancel animationID here; shouldn't have any in flight
            _this.animationID = null;
            _this.accumulatedTime = 0;
            return;
          }

          var currentTime = timestamp || _performanceNow2["default"]();
          var timeDelta = currentTime - _this.prevTime;
          _this.prevTime = currentTime;
          _this.accumulatedTime = _this.accumulatedTime + timeDelta;
          // more than 10 frames? prolly switched browser tab. Restart
          if (_this.accumulatedTime > msPerFrame * 10) {
            _this.accumulatedTime = 0;
          }

          if (_this.accumulatedTime === 0) {
            // no need to cancel animationID here; shouldn't have any in flight
            _this.animationID = null;
            _this.startAnimationIfNecessary();
            return;
          }

          var currentFrameCompletion =
            (_this.accumulatedTime -
              Math.floor(_this.accumulatedTime / msPerFrame) * msPerFrame) /
            msPerFrame;
          var framesToCatchUp = Math.floor(_this.accumulatedTime / msPerFrame);

          var _mergeAndSync2 = mergeAndSync(
            _this.props.willEnter,
            _this.props.willLeave,
            _this.props.didLeave,
            _this.state.mergedPropsStyles,
            destStyles,
            _this.state.currentStyles,
            _this.state.currentVelocities,
            _this.state.lastIdealStyles,
            _this.state.lastIdealVelocities
          );

          var newMergedPropsStyles = _mergeAndSync2[0];
          var newCurrentStyles = _mergeAndSync2[1];
          var newCurrentVelocities = _mergeAndSync2[2];
          var newLastIdealStyles = _mergeAndSync2[3];
          var newLastIdealVelocities = _mergeAndSync2[4];

          for (var i = 0; i < newMergedPropsStyles.length; i++) {
            var newMergedPropsStyle = newMergedPropsStyles[i].style;
            var newCurrentStyle = {};
            var newCurrentVelocity = {};
            var newLastIdealStyle = {};
            var newLastIdealVelocity = {};

            for (var key in newMergedPropsStyle) {
              if (
                !Object.prototype.hasOwnProperty.call(newMergedPropsStyle, key)
              ) {
                continue;
              }

              var styleValue = newMergedPropsStyle[key];
              if (typeof styleValue === "number") {
                newCurrentStyle[key] = styleValue;
                newCurrentVelocity[key] = 0;
                newLastIdealStyle[key] = styleValue;
                newLastIdealVelocity[key] = 0;
              } else {
                var newLastIdealStyleValue = newLastIdealStyles[i][key];
                var newLastIdealVelocityValue = newLastIdealVelocities[i][key];
                for (var j = 0; j < framesToCatchUp; j++) {
                  var _stepper = _stepper4["default"](
                    msPerFrame / 1000,
                    newLastIdealStyleValue,
                    newLastIdealVelocityValue,
                    styleValue.val,
                    styleValue.stiffness,
                    styleValue.damping,
                    styleValue.precision
                  );

                  newLastIdealStyleValue = _stepper[0];
                  newLastIdealVelocityValue = _stepper[1];
                }

                var _stepper2 = _stepper4["default"](
                  msPerFrame / 1000,
                  newLastIdealStyleValue,
                  newLastIdealVelocityValue,
                  styleValue.val,
                  styleValue.stiffness,
                  styleValue.damping,
                  styleValue.precision
                );

                var nextIdealX = _stepper2[0];
                var nextIdealV = _stepper2[1];

                newCurrentStyle[key] =
                  newLastIdealStyleValue +
                  (nextIdealX - newLastIdealStyleValue) *
                    currentFrameCompletion;
                newCurrentVelocity[key] =
                  newLastIdealVelocityValue +
                  (nextIdealV - newLastIdealVelocityValue) *
                    currentFrameCompletion;
                newLastIdealStyle[key] = newLastIdealStyleValue;
                newLastIdealVelocity[key] = newLastIdealVelocityValue;
              }
            }

            newLastIdealStyles[i] = newLastIdealStyle;
            newLastIdealVelocities[i] = newLastIdealVelocity;
            newCurrentStyles[i] = newCurrentStyle;
            newCurrentVelocities[i] = newCurrentVelocity;
          }

          _this.animationID = null;
          // the amount we're looped over above
          _this.accumulatedTime -= framesToCatchUp * msPerFrame;

          _this.setState({
            currentStyles: newCurrentStyles,
            currentVelocities: newCurrentVelocities,
            lastIdealStyles: newLastIdealStyles,
            lastIdealVelocities: newLastIdealVelocities,
            mergedPropsStyles: newMergedPropsStyles,
          });

          _this.unreadPropStyles = null;

          _this.startAnimationIfNecessary();
        });
      };

      this.state = this.defaultState();
    }

    TransitionMotion.prototype.defaultState = function defaultState() {
      var _props = this.props;
      var defaultStyles = _props.defaultStyles;
      var styles = _props.styles;
      var willEnter = _props.willEnter;
      var willLeave = _props.willLeave;
      var didLeave = _props.didLeave;

      var destStyles =
        typeof styles === "function" ? styles(defaultStyles) : styles;

      // this is special. for the first time around, we don't have a comparison
      // between last (no last) and current merged props. we'll compute last so:
      // say default is {a, b} and styles (dest style) is {b, c}, we'll
      // fabricate last as {a, b}
      var oldMergedPropsStyles = undefined;
      if (defaultStyles == null) {
        oldMergedPropsStyles = destStyles;
      } else {
        oldMergedPropsStyles = defaultStyles.map(function (defaultStyleCell) {
          // TODO: key search code
          for (var i = 0; i < destStyles.length; i++) {
            if (destStyles[i].key === defaultStyleCell.key) {
              return destStyles[i];
            }
          }
          return defaultStyleCell;
        });
      }
      var oldCurrentStyles =
        defaultStyles == null
          ? destStyles.map(function (s) {
              return _stripStyle2["default"](s.style);
            })
          : defaultStyles.map(function (s) {
              return _stripStyle2["default"](s.style);
            });
      var oldCurrentVelocities =
        defaultStyles == null
          ? destStyles.map(function (s) {
              return _mapToZero2["default"](s.style);
            })
          : defaultStyles.map(function (s) {
              return _mapToZero2["default"](s.style);
            });

      var _mergeAndSync3 = mergeAndSync(
        // Because this is an old-style createReactClass component, Flow doesn't
        // understand that the willEnter and willLeave props have default values
        // and will always be present.
        willEnter,
        willLeave,
        didLeave,
        oldMergedPropsStyles,
        destStyles,
        oldCurrentStyles,
        oldCurrentVelocities,
        oldCurrentStyles, // oldLastIdealStyles really
        oldCurrentVelocities
      );

      var mergedPropsStyles = _mergeAndSync3[0];
      var currentStyles = _mergeAndSync3[1];
      var currentVelocities = _mergeAndSync3[2];
      var lastIdealStyles = _mergeAndSync3[3];
      var lastIdealVelocities = _mergeAndSync3[4];
      // oldLastIdealVelocities really

      return {
        currentStyles: currentStyles,
        currentVelocities: currentVelocities,
        lastIdealStyles: lastIdealStyles,
        lastIdealVelocities: lastIdealVelocities,
        mergedPropsStyles: mergedPropsStyles,
      };
    };

    // after checking for unreadPropStyles != null, we manually go set the
    // non-interpolating values (those that are a number, without a spring
    // config)

    TransitionMotion.prototype.componentDidMount = function componentDidMount() {
      this.prevTime = _performanceNow2["default"]();
      this.startAnimationIfNecessary();
    };

    TransitionMotion.prototype.componentWillReceiveProps = function componentWillReceiveProps(
      props
    ) {
      if (this.unreadPropStyles) {
        // previous props haven't had the chance to be set yet; set them here
        this.clearUnreadPropStyle(this.unreadPropStyles);
      }

      var styles = props.styles;
      if (typeof styles === "function") {
        this.unreadPropStyles = styles(
          rehydrateStyles(
            this.state.mergedPropsStyles,
            this.unreadPropStyles,
            this.state.lastIdealStyles
          )
        );
      } else {
        this.unreadPropStyles = styles;
      }

      if (this.animationID == null) {
        this.prevTime = _performanceNow2["default"]();
        this.startAnimationIfNecessary();
      }
    };

    TransitionMotion.prototype.componentWillUnmount = function componentWillUnmount() {
      this.unmounting = true;
      if (this.animationID != null) {
        _raf2["default"].cancel(this.animationID);
        this.animationID = null;
      }
    };

    TransitionMotion.prototype.render = function render() {
      var hydratedStyles = rehydrateStyles(
        this.state.mergedPropsStyles,
        this.unreadPropStyles,
        this.state.currentStyles
      );
      var renderedChildren = this.props.children(hydratedStyles);
      return (
        renderedChildren && _react2["default"].Children.only(renderedChildren)
      );
    };

    return TransitionMotion;
  })(_react2["default"].Component);

  exports["default"] = TransitionMotion;
  module.exports = exports["default"];

  // list of styles, each containing interpolating values. Part of what's passed
  // to children function. Notice that this is
  // Array<ActualInterpolatingStyleObject>, without the wrapper that is {key: ...,
  // data: ... style: ActualInterpolatingStyleObject}. Only mergedPropsStyles
  // contains the key & data info (so that we only have a single source of truth
  // for these, and to save space). Check the comment for `rehydrateStyles` to
  // see how we regenerate the entirety of what's passed to children function

  // the array that keeps track of currently rendered stuff! Including stuff
  // that you've unmounted but that's still animating. This is where it lives

  // it's possible that currentStyle's value is stale: if props is immediately
  // changed from 0 to 400 to spring(0) again, the async currentStyle is still
  // at 0 (didn't have time to tick and interpolate even once). If we naively
  // compare currentStyle with destVal it'll be 0 === 0 (no animation, stop).
  // In reality currentStyle should be 400
});

var presets = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;
  exports["default"] = {
    noWobble: { stiffness: 170, damping: 26 }, // the default, if nothing provided
    gentle: { stiffness: 120, damping: 14 },
    wobbly: { stiffness: 180, damping: 12 },
    stiff: { stiffness: 210, damping: 20 },
  };
  module.exports = exports["default"];
});

var spring_1 = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;

  var _extends =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };

  exports["default"] = spring;

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  var _presets2 = _interopRequireDefault(presets);

  var defaultConfig = _extends({}, _presets2["default"].noWobble, {
    precision: 0.01,
  });

  function spring(val, config) {
    return _extends({}, defaultConfig, config, { val: val });
  }

  module.exports = exports["default"];
});

var reorderKeys_1 = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;
  exports["default"] = reorderKeys;

  var hasWarned = false;

  function reorderKeys() {
    if (process.env.NODE_ENV === "development") {
      if (!hasWarned) {
        hasWarned = true;
        console.error(
          "`reorderKeys` has been removed, since it is no longer needed for TransitionMotion's new styles array API."
        );
      }
    }
  }

  module.exports = exports["default"];
});

var reactMotion = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;

  function _interopRequire(obj) {
    return obj && obj.__esModule ? obj["default"] : obj;
  }

  exports.Motion = _interopRequire(Motion_1);

  exports.StaggeredMotion = _interopRequire(StaggeredMotion_1);

  exports.TransitionMotion = _interopRequire(TransitionMotion_1);

  exports.spring = _interopRequire(spring_1);

  exports.presets = _interopRequire(presets);

  exports.stripStyle = _interopRequire(stripStyle_1);

  // deprecated, dummy warning function

  exports.reorderKeys = _interopRequire(reorderKeys_1);
});

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(Object(source));
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(
        Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        })
      );
    }
    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest()
  );
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
function _iterableToArrayLimit(arr, i) {
  if (
    !(
      Symbol.iterator in Object(arr) ||
      Object.prototype.toString.call(arr) === "[object Arguments]"
    )
  ) {
    return;
  }
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;
  try {
    for (
      var _i = arr[Symbol.iterator](), _s;
      !(_n = (_s = _i.next()).done);
      _n = true
    ) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
var TOOLTIP_OFFSET = 14;
var tooltipStyle = {
  pointerEvents: "none",
  position: "absolute",
  zIndex: 10,
  top: 0,
  left: 0,
};
var TooltipWrapper = memo(function (_ref) {
  var position = _ref.position,
    anchor = _ref.anchor,
    children = _ref.children;
  var _useState = useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    dimensions = _useState2[0],
    setDimensions = _useState2[1];
  var theme = useTheme();
  var _useMotionConfig = useMotionConfig(),
    animate = _useMotionConfig.animate,
    springConfig = _useMotionConfig.springConfig;
  var x = Math.round(position[0]);
  var y = Math.round(position[1]);
  if (dimensions !== null) {
    if (anchor === "top") {
      x -= dimensions[0] / 2;
      y -= dimensions[1] + TOOLTIP_OFFSET;
    } else if (anchor === "right") {
      x += TOOLTIP_OFFSET;
      y -= dimensions[1] / 2;
    } else if (anchor === "bottom") {
      x -= dimensions[0] / 2;
      y += TOOLTIP_OFFSET;
    } else if (anchor === "left") {
      x -= dimensions[0] + TOOLTIP_OFFSET;
      y -= dimensions[1] / 2;
    } else if (anchor === "center") {
      x -= dimensions[0] / 2;
      y -= dimensions[1] / 2;
    }
  }
  var style = useMemo(
    function () {
      return _objectSpread({}, tooltipStyle, theme.tooltip, {
        transform: "translate(".concat(x, "px, ").concat(y, "px)"),
        opacity: dimensions === null ? 0 : 1,
      });
    },
    [x, y, dimensions, theme.tooltip]
  );
  if (animate !== true || dimensions === null) {
    return React.createElement(
      Measure,
      {
        client: false,
        offset: false,
        bounds: true,
        margin: false,
        onResize: function onResize(_ref2) {
          var bounds = _ref2.bounds;
          setDimensions([bounds.width, bounds.height]);
        },
      },
      function (_ref3) {
        var measureRef = _ref3.measureRef;
        return React.createElement(
          "div",
          {
            ref: measureRef,
            style: style,
          },
          children
        );
      }
    );
  }
  return React.createElement(
    reactMotion.Motion,
    {
      style: {
        x: reactMotion.spring(x, springConfig),
        y: reactMotion.spring(y, springConfig),
      },
    },
    function (animatedPosition) {
      return React.createElement(
        Measure,
        {
          client: false,
          offset: false,
          bounds: true,
          margin: false,
          onResize: function onResize(_ref4) {
            var bounds = _ref4.bounds;
            setDimensions([bounds.width, bounds.height]);
          },
        },
        function (_ref5) {
          var measureRef = _ref5.measureRef;
          return React.createElement(
            "div",
            {
              ref: measureRef,
              style: _objectSpread({}, tooltipStyle, theme.tooltip, {
                transform: "translate3d("
                  .concat(animatedPosition.x, "px, ")
                  .concat(animatedPosition.y, "px, 0)"),
              }),
            },
            children
          );
        }
      );
    }
  );
});
TooltipWrapper.displayName = "TooltipWrapper";
TooltipWrapper.propTypes = {
  position: propTypes.array.isRequired,
  anchor: propTypes.oneOf(["top", "right", "bottom", "left", "center"])
    .isRequired,
  children: propTypes.node.isRequired,
};
TooltipWrapper.defaultProps = {
  anchor: "top",
};

function _objectSpread$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(Object(source));
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(
        Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        })
      );
    }
    ownKeys.forEach(function (key) {
      _defineProperty$1(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
var Chip = memo(function (_ref) {
  var size = _ref.size,
    color = _ref.color,
    style = _ref.style;
  return React.createElement("span", {
    style: _objectSpread$1(
      {
        display: "block",
        width: size,
        height: size,
        background: color,
      },
      style
    ),
  });
});
Chip.propTypes = {
  size: propTypes.number.isRequired,
  color: propTypes.string.isRequired,
  style: propTypes.object.isRequired,
};
Chip.defaultProps = {
  size: 12,
  style: {},
};
Chip.displayName = "Chip";

var BasicTooltip = memo(function (_ref) {
  var id = _ref.id,
    _value = _ref.value,
    format = _ref.format,
    enableChip = _ref.enableChip,
    color = _ref.color,
    renderContent = _ref.renderContent;
  var theme = useTheme();
  var formatValue = useValueFormatter(format);
  var content;
  if (typeof renderContent === "function") {
    content = renderContent();
  } else {
    var value = _value;
    if (formatValue !== undefined && value !== undefined) {
      value = formatValue(value);
    }
    content = React.createElement(
      "div",
      {
        style: theme.tooltip.basic,
      },
      enableChip &&
        React.createElement(Chip, {
          color: color,
          style: theme.tooltip.chip,
        }),
      value !== undefined
        ? React.createElement(
            "span",
            null,
            id,
            ": ",
            React.createElement(
              "strong",
              null,
              isNaN(value) ? String(value) : value
            )
          )
        : id
    );
  }
  return React.createElement(
    "div",
    {
      style: theme.tooltip.container,
    },
    content
  );
});
BasicTooltip.displayName = "BasicTooltip";
BasicTooltip.propTypes = {
  id: propTypes.node.isRequired,
  value: propTypes.oneOfType([propTypes.string, propTypes.number]),
  enableChip: propTypes.bool.isRequired,
  color: propTypes.string,
  format: propTypes.oneOfType([propTypes.string, propTypes.func]),
  renderContent: propTypes.func,
};
BasicTooltip.defaultProps = {
  enableChip: false,
};

function _objectSpread$2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(Object(source));
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(
        Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        })
      );
    }
    ownKeys.forEach(function (key) {
      _defineProperty$2(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$2(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
var tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
};
var TableTooltip = memo(function (_ref) {
  var title = _ref.title,
    rows = _ref.rows,
    renderContent = _ref.renderContent;
  var theme = useTheme();
  if (!rows.length) return null;
  var content;
  if (typeof renderContent === "function") {
    content = renderContent();
  } else {
    content = React.createElement(
      "div",
      null,
      title && title,
      React.createElement(
        "table",
        {
          style: _objectSpread$2({}, tableStyle, theme.tooltip.table),
        },
        React.createElement(
          "tbody",
          null,
          rows.map(function (row, i) {
            return React.createElement(
              "tr",
              {
                key: i,
              },
              row.map(function (column, j) {
                return React.createElement(
                  "td",
                  {
                    key: j,
                    style: theme.tooltip.tableCell,
                  },
                  column
                );
              })
            );
          })
        )
      )
    );
  }
  return React.createElement(
    "div",
    {
      style: theme.tooltip.container,
    },
    content
  );
});
TableTooltip.propTypes = {
  title: propTypes.node,
  rows: propTypes.arrayOf(propTypes.arrayOf(propTypes.node)).isRequired,
  renderContent: propTypes.func,
};
TableTooltip.displayName = "TableTooltip";

var crosshairTypes = [
  "x",
  "y",
  "top-left",
  "top",
  "top-right",
  "right",
  "bottom-right",
  "bottom",
  "bottom-left",
  "left",
  "cross",
];
var crosshairPropTypes = {
  type: propTypes.oneOf(crosshairTypes),
};

function _objectSpread$3(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(Object(source));
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(
        Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        })
      );
    }
    ownKeys.forEach(function (key) {
      _defineProperty$3(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$3(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
var CrosshairLine = memo(function (_ref) {
  var x0 = _ref.x0,
    x1 = _ref.x1,
    y0 = _ref.y0,
    y1 = _ref.y1;
  var theme = useTheme();
  var _useMotionConfig = useMotionConfig(),
    animate = _useMotionConfig.animate,
    springConfig = _useMotionConfig.springConfig;
  var style = useMemo(
    function () {
      return _objectSpread$3({}, theme.crosshair.line, {
        pointerEvents: "none",
      });
    },
    [theme.crosshair.line]
  );
  if (animate !== true) {
    return React.createElement("line", {
      x1: x0,
      x2: x1,
      y1: y0,
      y2: y1,
      fill: "none",
      style: style,
    });
  }
  return React.createElement(
    reactMotion.Motion,
    {
      style: {
        x0: reactMotion.spring(x0, springConfig),
        x1: reactMotion.spring(x1, springConfig),
        y0: reactMotion.spring(y0, springConfig),
        y1: reactMotion.spring(y1, springConfig),
      },
    },
    function (line) {
      return React.createElement("line", {
        x1: line.x0,
        x2: line.x1,
        y1: line.y0,
        y2: line.y1,
        fill: "none",
        style: style,
      });
    }
  );
});
CrosshairLine.displayName = "CrosshairLine";
CrosshairLine.propTypes = {
  x0: propTypes.number.isRequired,
  x1: propTypes.number.isRequired,
  y0: propTypes.number.isRequired,
  y1: propTypes.number.isRequired,
};

var Crosshair = memo(function (_ref) {
  var width = _ref.width,
    height = _ref.height,
    type = _ref.type,
    x = _ref.x,
    y = _ref.y;
  var xLine;
  var yLine;
  if (type === "cross") {
    xLine = {
      x0: x,
      x1: x,
      y0: 0,
      y1: height,
    };
    yLine = {
      x0: 0,
      x1: width,
      y0: y,
      y1: y,
    };
  } else if (type === "top-left") {
    xLine = {
      x0: x,
      x1: x,
      y0: 0,
      y1: y,
    };
    yLine = {
      x0: 0,
      x1: x,
      y0: y,
      y1: y,
    };
  } else if (type === "top") {
    xLine = {
      x0: x,
      x1: x,
      y0: 0,
      y1: y,
    };
  } else if (type === "top-right") {
    xLine = {
      x0: x,
      x1: x,
      y0: 0,
      y1: y,
    };
    yLine = {
      x0: x,
      x1: width,
      y0: y,
      y1: y,
    };
  } else if (type === "right") {
    yLine = {
      x0: x,
      x1: width,
      y0: y,
      y1: y,
    };
  } else if (type === "bottom-right") {
    xLine = {
      x0: x,
      x1: x,
      y0: y,
      y1: height,
    };
    yLine = {
      x0: x,
      x1: width,
      y0: y,
      y1: y,
    };
  } else if (type === "bottom") {
    xLine = {
      x0: x,
      x1: x,
      y0: y,
      y1: height,
    };
  } else if (type === "bottom-left") {
    xLine = {
      x0: x,
      x1: x,
      y0: y,
      y1: height,
    };
    yLine = {
      x0: 0,
      x1: x,
      y0: y,
      y1: y,
    };
  } else if (type === "left") {
    yLine = {
      x0: 0,
      x1: x,
      y0: y,
      y1: y,
    };
  } else if (type === "x") {
    xLine = {
      x0: x,
      x1: x,
      y0: 0,
      y1: height,
    };
  } else if (type === "y") {
    yLine = {
      x0: 0,
      x1: width,
      y0: y,
      y1: y,
    };
  }
  return React.createElement(
    React.Fragment,
    null,
    xLine &&
      React.createElement(CrosshairLine, {
        x0: xLine.x0,
        x1: xLine.x1,
        y0: xLine.y0,
        y1: xLine.y1,
      }),
    yLine &&
      React.createElement(CrosshairLine, {
        x0: yLine.x0,
        x1: yLine.x1,
        y0: yLine.y0,
        y1: yLine.y1,
      })
  );
});
Crosshair.displayName = "Crosshair";
Crosshair.propTypes = {
  width: propTypes.number.isRequired,
  height: propTypes.number.isRequired,
  x: propTypes.number.isRequired,
  y: propTypes.number.isRequired,
  type: crosshairPropTypes.type.isRequired,
};
Crosshair.defaultProps = {
  type: "cross",
};

var tooltipContext = createContext();

function _slicedToArray$1(arr, i) {
  return (
    _arrayWithHoles$1(arr) ||
    _iterableToArrayLimit$1(arr, i) ||
    _nonIterableRest$1()
  );
}
function _nonIterableRest$1() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
function _iterableToArrayLimit$1(arr, i) {
  if (
    !(
      Symbol.iterator in Object(arr) ||
      Object.prototype.toString.call(arr) === "[object Arguments]"
    )
  ) {
    return;
  }
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;
  try {
    for (
      var _i = arr[Symbol.iterator](), _s;
      !(_n = (_s = _i.next()).done);
      _n = true
    ) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles$1(arr) {
  if (Array.isArray(arr)) return arr;
}
var useTooltipHandlers = function useTooltipHandlers(container) {
  var _useState = useState({
      isVisible: false,
      content: null,
      position: {},
    }),
    _useState2 = _slicedToArray$1(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];
  var showTooltipAt = useCallback(function (content, _ref, anchor) {
    var _ref2 = _slicedToArray$1(_ref, 2),
      x = _ref2[0],
      y = _ref2[1];
    setState({
      isVisible: true,
      position: [x, y],
      anchor: anchor,
      content: content,
    });
  }, []);
  var showTooltipFromEvent = useCallback(
    function (content, event, anchor) {
      var bounds = container.current.getBoundingClientRect();
      var x = event.clientX - bounds.left;
      var y = event.clientY - bounds.top;
      if (anchor === "left" || anchor === "right") {
        if (x < bounds.width / 2) anchor = "right";
        else anchor = "left";
      }
      setState({
        isVisible: true,
        position: [x, y],
        anchor: anchor,
        content: content,
      });
    },
    [container]
  );
  var hideTooltip = useCallback(function () {
    setState({
      isVisible: false,
      content: null,
    });
  });
  return {
    showTooltipAt: showTooltipAt,
    showTooltipFromEvent: showTooltipFromEvent,
    hideTooltip: hideTooltip,
    isTooltipVisible: state.isVisible,
    tooltipPosition: state.position,
    tooltipAnchor: state.anchor,
    tooltipContent: state.content,
  };
};
var useTooltip = function useTooltip() {
  return useContext(tooltipContext);
};

function initRange(domain, range) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(domain);
      break;
    default:
      this.range(range).domain(domain);
      break;
  }
  return this;
}

const implicit = Symbol("implicit");

function ordinal() {
  var index = new Map(),
    domain = [],
    range = [],
    unknown = implicit;

  function scale(d) {
    var key = d + "",
      i = index.get(key);
    if (!i) {
      if (unknown !== implicit) return unknown;
      index.set(key, (i = domain.push(d)));
    }
    return range[(i - 1) % range.length];
  }

  scale.domain = function (_) {
    if (!arguments.length) return domain.slice();
    (domain = []), (index = new Map());
    for (const value of _) {
      const key = value + "";
      if (index.has(key)) continue;
      index.set(key, domain.push(value));
    }
    return scale;
  };

  scale.range = function (_) {
    return arguments.length ? ((range = Array.from(_)), scale) : range.slice();
  };

  scale.unknown = function (_) {
    return arguments.length ? ((unknown = _), scale) : unknown;
  };

  scale.copy = function () {
    return ordinal(domain, range).unknown(unknown);
  };

  initRange.apply(scale, arguments);

  return scale;
}

function band() {
  var scale = ordinal().unknown(undefined),
    domain = scale.domain,
    ordinalRange = scale.range,
    r0 = 0,
    r1 = 1,
    step,
    bandwidth,
    round = false,
    paddingInner = 0,
    paddingOuter = 0,
    align = 0.5;

  delete scale.unknown;

  function rescale() {
    var n = domain().length,
      reverse = r1 < r0,
      start = reverse ? r1 : r0,
      stop = reverse ? r0 : r1;
    step = (stop - start) / Math.max(1, n - paddingInner + paddingOuter * 2);
    if (round) step = Math.floor(step);
    start += (stop - start - step * (n - paddingInner)) * align;
    bandwidth = step * (1 - paddingInner);
    if (round) (start = Math.round(start)), (bandwidth = Math.round(bandwidth));
    var values = range(n).map(function (i) {
      return start + step * i;
    });
    return ordinalRange(reverse ? values.reverse() : values);
  }

  scale.domain = function (_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };

  scale.range = function (_) {
    return arguments.length
      ? (([r0, r1] = _), (r0 = +r0), (r1 = +r1), rescale())
      : [r0, r1];
  };

  scale.rangeRound = function (_) {
    return ([r0, r1] = _), (r0 = +r0), (r1 = +r1), (round = true), rescale();
  };

  scale.bandwidth = function () {
    return bandwidth;
  };

  scale.step = function () {
    return step;
  };

  scale.round = function (_) {
    return arguments.length ? ((round = !!_), rescale()) : round;
  };

  scale.padding = function (_) {
    return arguments.length
      ? ((paddingInner = Math.min(1, (paddingOuter = +_))), rescale())
      : paddingInner;
  };

  scale.paddingInner = function (_) {
    return arguments.length
      ? ((paddingInner = Math.min(1, _)), rescale())
      : paddingInner;
  };

  scale.paddingOuter = function (_) {
    return arguments.length ? ((paddingOuter = +_), rescale()) : paddingOuter;
  };

  scale.align = function (_) {
    return arguments.length
      ? ((align = Math.max(0, Math.min(1, _))), rescale())
      : align;
  };

  scale.copy = function () {
    return band(domain(), [r0, r1])
      .round(round)
      .paddingInner(paddingInner)
      .paddingOuter(paddingOuter)
      .align(align);
  };

  return initRange.apply(rescale(), arguments);
}

function pointish(scale) {
  var copy = scale.copy;

  scale.padding = scale.paddingOuter;
  delete scale.paddingInner;
  delete scale.paddingOuter;

  scale.copy = function () {
    return pointish(copy());
  };

  return scale;
}

function point() {
  return pointish(band.apply(null, arguments).paddingInner(1));
}

function define(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
}

function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition) prototype[key] = definition[key];
  return prototype;
}

function Color() {}

var darker = 0.7;
var brighter = 1 / darker;

var reI = "\\s*([+-]?\\d+)\\s*",
  reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
  reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
  reHex = /^#([0-9a-f]{3,8})$/,
  reRgbInteger = new RegExp("^rgb\\(" + [reI, reI, reI] + "\\)$"),
  reRgbPercent = new RegExp("^rgb\\(" + [reP, reP, reP] + "\\)$"),
  reRgbaInteger = new RegExp("^rgba\\(" + [reI, reI, reI, reN] + "\\)$"),
  reRgbaPercent = new RegExp("^rgba\\(" + [reP, reP, reP, reN] + "\\)$"),
  reHslPercent = new RegExp("^hsl\\(" + [reN, reP, reP] + "\\)$"),
  reHslaPercent = new RegExp("^hsla\\(" + [reN, reP, reP, reN] + "\\)$");

var named = {
  aliceblue: 0xf0f8ff,
  antiquewhite: 0xfaebd7,
  aqua: 0x00ffff,
  aquamarine: 0x7fffd4,
  azure: 0xf0ffff,
  beige: 0xf5f5dc,
  bisque: 0xffe4c4,
  black: 0x000000,
  blanchedalmond: 0xffebcd,
  blue: 0x0000ff,
  blueviolet: 0x8a2be2,
  brown: 0xa52a2a,
  burlywood: 0xdeb887,
  cadetblue: 0x5f9ea0,
  chartreuse: 0x7fff00,
  chocolate: 0xd2691e,
  coral: 0xff7f50,
  cornflowerblue: 0x6495ed,
  cornsilk: 0xfff8dc,
  crimson: 0xdc143c,
  cyan: 0x00ffff,
  darkblue: 0x00008b,
  darkcyan: 0x008b8b,
  darkgoldenrod: 0xb8860b,
  darkgray: 0xa9a9a9,
  darkgreen: 0x006400,
  darkgrey: 0xa9a9a9,
  darkkhaki: 0xbdb76b,
  darkmagenta: 0x8b008b,
  darkolivegreen: 0x556b2f,
  darkorange: 0xff8c00,
  darkorchid: 0x9932cc,
  darkred: 0x8b0000,
  darksalmon: 0xe9967a,
  darkseagreen: 0x8fbc8f,
  darkslateblue: 0x483d8b,
  darkslategray: 0x2f4f4f,
  darkslategrey: 0x2f4f4f,
  darkturquoise: 0x00ced1,
  darkviolet: 0x9400d3,
  deeppink: 0xff1493,
  deepskyblue: 0x00bfff,
  dimgray: 0x696969,
  dimgrey: 0x696969,
  dodgerblue: 0x1e90ff,
  firebrick: 0xb22222,
  floralwhite: 0xfffaf0,
  forestgreen: 0x228b22,
  fuchsia: 0xff00ff,
  gainsboro: 0xdcdcdc,
  ghostwhite: 0xf8f8ff,
  gold: 0xffd700,
  goldenrod: 0xdaa520,
  gray: 0x808080,
  green: 0x008000,
  greenyellow: 0xadff2f,
  grey: 0x808080,
  honeydew: 0xf0fff0,
  hotpink: 0xff69b4,
  indianred: 0xcd5c5c,
  indigo: 0x4b0082,
  ivory: 0xfffff0,
  khaki: 0xf0e68c,
  lavender: 0xe6e6fa,
  lavenderblush: 0xfff0f5,
  lawngreen: 0x7cfc00,
  lemonchiffon: 0xfffacd,
  lightblue: 0xadd8e6,
  lightcoral: 0xf08080,
  lightcyan: 0xe0ffff,
  lightgoldenrodyellow: 0xfafad2,
  lightgray: 0xd3d3d3,
  lightgreen: 0x90ee90,
  lightgrey: 0xd3d3d3,
  lightpink: 0xffb6c1,
  lightsalmon: 0xffa07a,
  lightseagreen: 0x20b2aa,
  lightskyblue: 0x87cefa,
  lightslategray: 0x778899,
  lightslategrey: 0x778899,
  lightsteelblue: 0xb0c4de,
  lightyellow: 0xffffe0,
  lime: 0x00ff00,
  limegreen: 0x32cd32,
  linen: 0xfaf0e6,
  magenta: 0xff00ff,
  maroon: 0x800000,
  mediumaquamarine: 0x66cdaa,
  mediumblue: 0x0000cd,
  mediumorchid: 0xba55d3,
  mediumpurple: 0x9370db,
  mediumseagreen: 0x3cb371,
  mediumslateblue: 0x7b68ee,
  mediumspringgreen: 0x00fa9a,
  mediumturquoise: 0x48d1cc,
  mediumvioletred: 0xc71585,
  midnightblue: 0x191970,
  mintcream: 0xf5fffa,
  mistyrose: 0xffe4e1,
  moccasin: 0xffe4b5,
  navajowhite: 0xffdead,
  navy: 0x000080,
  oldlace: 0xfdf5e6,
  olive: 0x808000,
  olivedrab: 0x6b8e23,
  orange: 0xffa500,
  orangered: 0xff4500,
  orchid: 0xda70d6,
  palegoldenrod: 0xeee8aa,
  palegreen: 0x98fb98,
  paleturquoise: 0xafeeee,
  palevioletred: 0xdb7093,
  papayawhip: 0xffefd5,
  peachpuff: 0xffdab9,
  peru: 0xcd853f,
  pink: 0xffc0cb,
  plum: 0xdda0dd,
  powderblue: 0xb0e0e6,
  purple: 0x800080,
  rebeccapurple: 0x663399,
  red: 0xff0000,
  rosybrown: 0xbc8f8f,
  royalblue: 0x4169e1,
  saddlebrown: 0x8b4513,
  salmon: 0xfa8072,
  sandybrown: 0xf4a460,
  seagreen: 0x2e8b57,
  seashell: 0xfff5ee,
  sienna: 0xa0522d,
  silver: 0xc0c0c0,
  skyblue: 0x87ceeb,
  slateblue: 0x6a5acd,
  slategray: 0x708090,
  slategrey: 0x708090,
  snow: 0xfffafa,
  springgreen: 0x00ff7f,
  steelblue: 0x4682b4,
  tan: 0xd2b48c,
  teal: 0x008080,
  thistle: 0xd8bfd8,
  tomato: 0xff6347,
  turquoise: 0x40e0d0,
  violet: 0xee82ee,
  wheat: 0xf5deb3,
  white: 0xffffff,
  whitesmoke: 0xf5f5f5,
  yellow: 0xffff00,
  yellowgreen: 0x9acd32,
};

define(Color, color, {
  copy: function (channels) {
    return Object.assign(new this.constructor(), this, channels);
  },
  displayable: function () {
    return this.rgb().displayable();
  },
  hex: color_formatHex, // Deprecated! Use color.formatHex.
  formatHex: color_formatHex,
  formatHsl: color_formatHsl,
  formatRgb: color_formatRgb,
  toString: color_formatRgb,
});

function color_formatHex() {
  return this.rgb().formatHex();
}

function color_formatHsl() {
  return hslConvert(this).formatHsl();
}

function color_formatRgb() {
  return this.rgb().formatRgb();
}

function color(format) {
  var m, l;
  format = (format + "").trim().toLowerCase();
  return (m = reHex.exec(format))
    ? ((l = m[1].length),
      (m = parseInt(m[1], 16)),
      l === 6
        ? rgbn(m) // #ff0000
        : l === 3
        ? new Rgb(
            ((m >> 8) & 0xf) | ((m >> 4) & 0xf0),
            ((m >> 4) & 0xf) | (m & 0xf0),
            ((m & 0xf) << 4) | (m & 0xf),
            1
          ) // #f00
        : l === 8
        ? rgba(
            (m >> 24) & 0xff,
            (m >> 16) & 0xff,
            (m >> 8) & 0xff,
            (m & 0xff) / 0xff
          ) // #ff000000
        : l === 4
        ? rgba(
            ((m >> 12) & 0xf) | ((m >> 8) & 0xf0),
            ((m >> 8) & 0xf) | ((m >> 4) & 0xf0),
            ((m >> 4) & 0xf) | (m & 0xf0),
            (((m & 0xf) << 4) | (m & 0xf)) / 0xff
          ) // #f000
        : null) // invalid hex
    : (m = reRgbInteger.exec(format))
    ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
    : (m = reRgbPercent.exec(format))
    ? new Rgb((m[1] * 255) / 100, (m[2] * 255) / 100, (m[3] * 255) / 100, 1) // rgb(100%, 0%, 0%)
    : (m = reRgbaInteger.exec(format))
    ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
    : (m = reRgbaPercent.exec(format))
    ? rgba((m[1] * 255) / 100, (m[2] * 255) / 100, (m[3] * 255) / 100, m[4]) // rgb(100%, 0%, 0%, 1)
    : (m = reHslPercent.exec(format))
    ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
    : (m = reHslaPercent.exec(format))
    ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
    : named.hasOwnProperty(format)
    ? rgbn(named[format]) // eslint-disable-line no-prototype-builtins
    : format === "transparent"
    ? new Rgb(NaN, NaN, NaN, 0)
    : null;
}

function rgbn(n) {
  return new Rgb((n >> 16) & 0xff, (n >> 8) & 0xff, n & 0xff, 1);
}

function rgba(r, g, b, a) {
  if (a <= 0) r = g = b = NaN;
  return new Rgb(r, g, b, a);
}

function rgbConvert(o) {
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Rgb();
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}

function rgb(r, g, b, opacity) {
  return arguments.length === 1
    ? rgbConvert(r)
    : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}

function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}

define(Rgb, rgb, extend(Color, {
  brighter: function (k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker: function (k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb: function () {
    return this;
  },
  displayable: function () {
    return (
      -0.5 <= this.r &&
      this.r < 255.5 &&
      -0.5 <= this.g &&
      this.g < 255.5 &&
      -0.5 <= this.b &&
      this.b < 255.5 &&
      0 <= this.opacity &&
      this.opacity <= 1
    );
  },
  hex: rgb_formatHex, // Deprecated! Use color.formatHex.
  formatHex: rgb_formatHex,
  formatRgb: rgb_formatRgb,
  toString: rgb_formatRgb,
}));

function rgb_formatHex() {
  return "#" + hex(this.r) + hex(this.g) + hex(this.b);
}

function rgb_formatRgb() {
  var a = this.opacity;
  a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
  return (
    (a === 1 ? "rgb(" : "rgba(") +
    Math.max(0, Math.min(255, Math.round(this.r) || 0)) +
    ", " +
    Math.max(0, Math.min(255, Math.round(this.g) || 0)) +
    ", " +
    Math.max(0, Math.min(255, Math.round(this.b) || 0)) +
    (a === 1 ? ")" : ", " + a + ")")
  );
}

function hex(value) {
  value = Math.max(0, Math.min(255, Math.round(value) || 0));
  return (value < 16 ? "0" : "") + value.toString(16);
}

function hsla(h, s, l, a) {
  if (a <= 0) h = s = l = NaN;
  else if (l <= 0 || l >= 1) h = s = NaN;
  else if (s <= 0) h = NaN;
  return new Hsl(h, s, l, a);
}

function hslConvert(o) {
  if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Hsl();
  if (o instanceof Hsl) return o;
  o = o.rgb();
  var r = o.r / 255,
    g = o.g / 255,
    b = o.b / 255,
    min = Math.min(r, g, b),
    max = Math.max(r, g, b),
    h = NaN,
    s = max - min,
    l = (max + min) / 2;
  if (s) {
    if (r === max) h = (g - b) / s + (g < b) * 6;
    else if (g === max) h = (b - r) / s + 2;
    else h = (r - g) / s + 4;
    s /= l < 0.5 ? max + min : 2 - max - min;
    h *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h;
  }
  return new Hsl(h, s, l, o.opacity);
}

function hsl(h, s, l, opacity) {
  return arguments.length === 1
    ? hslConvert(h)
    : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}

function Hsl(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

define(Hsl, hsl, extend(Color, {
  brighter: function (k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function (k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function () {
    var h = (this.h % 360) + (this.h < 0) * 360,
      s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
      l = this.l,
      m2 = l + (l < 0.5 ? l : 1 - l) * s,
      m1 = 2 * l - m2;
    return new Rgb(
      hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
      hsl2rgb(h, m1, m2),
      hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
      this.opacity
    );
  },
  displayable: function () {
    return (
      ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
      0 <= this.l &&
      this.l <= 1 &&
      0 <= this.opacity &&
      this.opacity <= 1
    );
  },
  formatHsl: function () {
    var a = this.opacity;
    a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
    return (
      (a === 1 ? "hsl(" : "hsla(") +
      (this.h || 0) +
      ", " +
      (this.s || 0) * 100 +
      "%, " +
      (this.l || 0) * 100 +
      "%" +
      (a === 1 ? ")" : ", " + a + ")")
    );
  },
}));

/* From FvD 13.37, CSS Color Module Level 3 */
function hsl2rgb(h, m1, m2) {
  return (
    (h < 60
      ? m1 + ((m2 - m1) * h) / 60
      : h < 180
      ? m2
      : h < 240
      ? m1 + ((m2 - m1) * (240 - h)) / 60
      : m1) * 255
  );
}

var constant = (x) => () => x;

function linear(a, d) {
  return function (t) {
    return a + t * d;
  };
}

function exponential(a, b, y) {
  return (
    (a = Math.pow(a, y)),
    (b = Math.pow(b, y) - a),
    (y = 1 / y),
    function (t) {
      return Math.pow(a + t * b, y);
    }
  );
}

function gamma(y) {
  return (y = +y) === 1
    ? nogamma
    : function (a, b) {
        return b - a ? exponential(a, b, y) : constant(isNaN(a) ? b : a);
      };
}

function nogamma(a, b) {
  var d = b - a;
  return d ? linear(a, d) : constant(isNaN(a) ? b : a);
}

var rgb$1 = (function rgbGamma(y) {
  var color = gamma(y);

  function rgb$1(start, end) {
    var r = color((start = rgb(start)).r, (end = rgb(end)).r),
      g = color(start.g, end.g),
      b = color(start.b, end.b),
      opacity = nogamma(start.opacity, end.opacity);
    return function (t) {
      start.r = r(t);
      start.g = g(t);
      start.b = b(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }

  rgb$1.gamma = rgbGamma;

  return rgb$1;
})(1);

function numberArray(a, b) {
  if (!b) b = [];
  var n = a ? Math.min(b.length, a.length) : 0,
    c = b.slice(),
    i;
  return function (t) {
    for (i = 0; i < n; ++i) c[i] = a[i] * (1 - t) + b[i] * t;
    return c;
  };
}

function isNumberArray(x) {
  return ArrayBuffer.isView(x) && !(x instanceof DataView);
}

function genericArray(a, b) {
  var nb = b ? b.length : 0,
    na = a ? Math.min(nb, a.length) : 0,
    x = new Array(na),
    c = new Array(nb),
    i;

  for (i = 0; i < na; ++i) x[i] = interpolate(a[i], b[i]);
  for (; i < nb; ++i) c[i] = b[i];

  return function (t) {
    for (i = 0; i < na; ++i) c[i] = x[i](t);
    return c;
  };
}

function date(a, b) {
  var d = new Date();
  return (
    (a = +a),
    (b = +b),
    function (t) {
      return d.setTime(a * (1 - t) + b * t), d;
    }
  );
}

function interpolateNumber(a, b) {
  return (
    (a = +a),
    (b = +b),
    function (t) {
      return a * (1 - t) + b * t;
    }
  );
}

function object(a, b) {
  var i = {},
    c = {},
    k;

  if (a === null || typeof a !== "object") a = {};
  if (b === null || typeof b !== "object") b = {};

  for (k in b) {
    if (k in a) {
      i[k] = interpolate(a[k], b[k]);
    } else {
      c[k] = b[k];
    }
  }

  return function (t) {
    for (k in i) c[k] = i[k](t);
    return c;
  };
}

var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
  reB = new RegExp(reA.source, "g");

function zero(b) {
  return function () {
    return b;
  };
}

function one(b) {
  return function (t) {
    return b(t) + "";
  };
}

function string(a, b) {
  var bi = (reA.lastIndex = reB.lastIndex = 0), // scan index for next number in b
    am, // current match in a
    bm, // current match in b
    bs, // string preceding current number in b, if any
    i = -1, // index in s
    s = [], // string constants and placeholders
    q = []; // number interpolators

  // Coerce inputs to strings.
  (a = a + ""), (b = b + "");

  // Interpolate pairs of numbers in a & b.
  while ((am = reA.exec(a)) && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) {
      // a string precedes the next number in b
      bs = b.slice(bi, bs);
      if (s[i]) s[i] += bs;
      // coalesce with previous string
      else s[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) {
      // numbers in a & b match
      if (s[i]) s[i] += bm;
      // coalesce with previous string
      else s[++i] = bm;
    } else {
      // interpolate non-matching numbers
      s[++i] = null;
      q.push({ i: i, x: interpolateNumber(am, bm) });
    }
    bi = reB.lastIndex;
  }

  // Add remains of b.
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i]) s[i] += bs;
    // coalesce with previous string
    else s[++i] = bs;
  }

  // Special optimization for only a single match.
  // Otherwise, interpolate each of the numbers and rejoin the string.
  return s.length < 2
    ? q[0]
      ? one(q[0].x)
      : zero(b)
    : ((b = q.length),
      function (t) {
        for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
        return s.join("");
      });
}

function interpolate(a, b) {
  var t = typeof b,
    c;
  return b == null || t === "boolean"
    ? constant(b)
    : (t === "number"
        ? interpolateNumber
        : t === "string"
        ? (c = color(b))
          ? ((b = c), rgb$1)
          : string
        : b instanceof color
        ? rgb$1
        : b instanceof Date
        ? date
        : isNumberArray(b)
        ? numberArray
        : Array.isArray(b)
        ? genericArray
        : (typeof b.valueOf !== "function" &&
            typeof b.toString !== "function") ||
          isNaN(b)
        ? object
        : interpolateNumber)(a, b);
}

function interpolateRound(a, b) {
  return (
    (a = +a),
    (b = +b),
    function (t) {
      return Math.round(a * (1 - t) + b * t);
    }
  );
}

function constants(x) {
  return function () {
    return x;
  };
}

function number(x) {
  return +x;
}

var unit = [0, 1];

function identity(x) {
  return x;
}

function normalize(a, b) {
  return (b -= a = +a)
    ? function (x) {
        return (x - a) / b;
      }
    : constants(isNaN(b) ? NaN : 0.5);
}

function clamper(a, b) {
  var t;
  if (a > b) (t = a), (a = b), (b = t);
  return function (x) {
    return Math.max(a, Math.min(b, x));
  };
}

// normalize(a, b)(x) takes a domain value x in [a,b] and returns the corresponding parameter t in [0,1].
// interpolate(a, b)(t) takes a parameter t in [0,1] and returns the corresponding range value x in [a,b].
function bimap(domain, range, interpolate) {
  var d0 = domain[0],
    d1 = domain[1],
    r0 = range[0],
    r1 = range[1];
  if (d1 < d0) (d0 = normalize(d1, d0)), (r0 = interpolate(r1, r0));
  else (d0 = normalize(d0, d1)), (r0 = interpolate(r0, r1));
  return function (x) {
    return r0(d0(x));
  };
}

function polymap(domain, range, interpolate) {
  var j = Math.min(domain.length, range.length) - 1,
    d = new Array(j),
    r = new Array(j),
    i = -1;

  // Reverse descending domains.
  if (domain[j] < domain[0]) {
    domain = domain.slice().reverse();
    range = range.slice().reverse();
  }

  while (++i < j) {
    d[i] = normalize(domain[i], domain[i + 1]);
    r[i] = interpolate(range[i], range[i + 1]);
  }

  return function (x) {
    var i = bisect(domain, x, 1, j) - 1;
    return r[i](d[i](x));
  };
}

function copy(source, target) {
  return target
    .domain(source.domain())
    .range(source.range())
    .interpolate(source.interpolate())
    .clamp(source.clamp())
    .unknown(source.unknown());
}

function transformer() {
  var domain = unit,
    range = unit,
    interpolate$1 = interpolate,
    transform,
    untransform,
    unknown,
    clamp = identity,
    piecewise,
    output,
    input;

  function rescale() {
    var n = Math.min(domain.length, range.length);
    if (clamp !== identity) clamp = clamper(domain[0], domain[n - 1]);
    piecewise = n > 2 ? polymap : bimap;
    output = input = null;
    return scale;
  }

  function scale(x) {
    return isNaN((x = +x))
      ? unknown
      : (
          output ||
          (output = piecewise(domain.map(transform), range, interpolate$1))
        )(transform(clamp(x)));
  }

  scale.invert = function (y) {
    return clamp(
      untransform(
        (
          input ||
          (input = piecewise(range, domain.map(transform), interpolateNumber))
        )(y)
      )
    );
  };

  scale.domain = function (_) {
    return arguments.length
      ? ((domain = Array.from(_, number)), rescale())
      : domain.slice();
  };

  scale.range = function (_) {
    return arguments.length
      ? ((range = Array.from(_)), rescale())
      : range.slice();
  };

  scale.rangeRound = function (_) {
    return (
      (range = Array.from(_)), (interpolate$1 = interpolateRound), rescale()
    );
  };

  scale.clamp = function (_) {
    return arguments.length
      ? ((clamp = _ ? true : identity), rescale())
      : clamp !== identity;
  };

  scale.interpolate = function (_) {
    return arguments.length ? ((interpolate$1 = _), rescale()) : interpolate$1;
  };

  scale.unknown = function (_) {
    return arguments.length ? ((unknown = _), scale) : unknown;
  };

  return function (t, u) {
    (transform = t), (untransform = u);
    return rescale();
  };
}

function continuous() {
  return transformer()(identity, identity);
}

function formatDecimal(x) {
  return Math.abs((x = Math.round(x))) >= 1e21
    ? x.toLocaleString("en").replace(/,/g, "")
    : x.toString(10);
}

// Computes the decimal coefficient and exponent of the specified number x with
// significant digits p, where x is positive and p is in [1, 21] or undefined.
// For example, formatDecimalParts(1.23) returns ["123", 0].
function formatDecimalParts(x, p) {
  if (
    (i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf("e")) < 0
  )
    return null; // NaN, ±Infinity
  var i,
    coefficient = x.slice(0, i);

  // The string returned by toExponential either has the form \d\.\d+e[-+]\d+
  // (e.g., 1.2e+3) or the form \de[-+]\d+ (e.g., 1e+3).
  return [
    coefficient.length > 1
      ? coefficient[0] + coefficient.slice(2)
      : coefficient,
    +x.slice(i + 1),
  ];
}

function exponent(x) {
  return (x = formatDecimalParts(Math.abs(x))), x ? x[1] : NaN;
}

function formatGroup(grouping, thousands) {
  return function (value, width) {
    var i = value.length,
      t = [],
      j = 0,
      g = grouping[0],
      length = 0;

    while (i > 0 && g > 0) {
      if (length + g + 1 > width) g = Math.max(1, width - length);
      t.push(value.substring((i -= g), i + g));
      if ((length += g + 1) > width) break;
      g = grouping[(j = (j + 1) % grouping.length)];
    }

    return t.reverse().join(thousands);
  };
}

function formatNumerals(numerals) {
  return function (value) {
    return value.replace(/[0-9]/g, function (i) {
      return numerals[+i];
    });
  };
}

// [[fill]align][sign][symbol][0][width][,][.precision][~][type]
var re = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

function formatSpecifier(specifier) {
  if (!(match = re.exec(specifier)))
    throw new Error("invalid format: " + specifier);
  var match;
  return new FormatSpecifier({
    fill: match[1],
    align: match[2],
    sign: match[3],
    symbol: match[4],
    zero: match[5],
    width: match[6],
    comma: match[7],
    precision: match[8] && match[8].slice(1),
    trim: match[9],
    type: match[10],
  });
}

formatSpecifier.prototype = FormatSpecifier.prototype; // instanceof

function FormatSpecifier(specifier) {
  this.fill = specifier.fill === undefined ? " " : specifier.fill + "";
  this.align = specifier.align === undefined ? ">" : specifier.align + "";
  this.sign = specifier.sign === undefined ? "-" : specifier.sign + "";
  this.symbol = specifier.symbol === undefined ? "" : specifier.symbol + "";
  this.zero = !!specifier.zero;
  this.width = specifier.width === undefined ? undefined : +specifier.width;
  this.comma = !!specifier.comma;
  this.precision =
    specifier.precision === undefined ? undefined : +specifier.precision;
  this.trim = !!specifier.trim;
  this.type = specifier.type === undefined ? "" : specifier.type + "";
}

FormatSpecifier.prototype.toString = function () {
  return (
    this.fill +
    this.align +
    this.sign +
    this.symbol +
    (this.zero ? "0" : "") +
    (this.width === undefined ? "" : Math.max(1, this.width | 0)) +
    (this.comma ? "," : "") +
    (this.precision === undefined
      ? ""
      : "." + Math.max(0, this.precision | 0)) +
    (this.trim ? "~" : "") +
    this.type
  );
};

// Trims insignificant zeros, e.g., replaces 1.2000k with 1.2k.
function formatTrim(s) {
  out: for (var n = s.length, i = 1, i0 = -1, i1; i < n; ++i) {
    switch (s[i]) {
      case ".":
        i0 = i1 = i;
        break;
      case "0":
        if (i0 === 0) i0 = i;
        i1 = i;
        break;
      default:
        if (!+s[i]) break out;
        if (i0 > 0) i0 = 0;
        break;
    }
  }
  return i0 > 0 ? s.slice(0, i0) + s.slice(i1 + 1) : s;
}

var prefixExponent;

function formatPrefixAuto(x, p) {
  var d = formatDecimalParts(x, p);
  if (!d) return x + "";
  var coefficient = d[0],
    exponent = d[1],
    i =
      exponent -
      (prefixExponent =
        Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) +
      1,
    n = coefficient.length;
  return i === n
    ? coefficient
    : i > n
    ? coefficient + new Array(i - n + 1).join("0")
    : i > 0
    ? coefficient.slice(0, i) + "." + coefficient.slice(i)
    : "0." +
      new Array(1 - i).join("0") +
      formatDecimalParts(x, Math.max(0, p + i - 1))[0]; // less than 1y!
}

function formatRounded(x, p) {
  var d = formatDecimalParts(x, p);
  if (!d) return x + "";
  var coefficient = d[0],
    exponent = d[1];
  return exponent < 0
    ? "0." + new Array(-exponent).join("0") + coefficient
    : coefficient.length > exponent + 1
    ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1)
    : coefficient + new Array(exponent - coefficient.length + 2).join("0");
}

var formatTypes = {
  "%": (x, p) => (x * 100).toFixed(p),
  b: (x) => Math.round(x).toString(2),
  c: (x) => x + "",
  d: formatDecimal,
  e: (x, p) => x.toExponential(p),
  f: (x, p) => x.toFixed(p),
  g: (x, p) => x.toPrecision(p),
  o: (x) => Math.round(x).toString(8),
  p: (x, p) => formatRounded(x * 100, p),
  r: formatRounded,
  s: formatPrefixAuto,
  X: (x) => Math.round(x).toString(16).toUpperCase(),
  x: (x) => Math.round(x).toString(16),
};

function identity$1(x) {
  return x;
}

var map = Array.prototype.map,
  prefixes = [
    "y",
    "z",
    "a",
    "f",
    "p",
    "n",
    "µ",
    "m",
    "",
    "k",
    "M",
    "G",
    "T",
    "P",
    "E",
    "Z",
    "Y",
  ];

function formatLocale(locale) {
  var group =
      locale.grouping === undefined || locale.thousands === undefined
        ? identity$1
        : formatGroup(map.call(locale.grouping, Number), locale.thousands + ""),
    currencyPrefix =
      locale.currency === undefined ? "" : locale.currency[0] + "",
    currencySuffix =
      locale.currency === undefined ? "" : locale.currency[1] + "",
    decimal = locale.decimal === undefined ? "." : locale.decimal + "",
    numerals =
      locale.numerals === undefined
        ? identity$1
        : formatNumerals(map.call(locale.numerals, String)),
    percent = locale.percent === undefined ? "%" : locale.percent + "",
    minus = locale.minus === undefined ? "−" : locale.minus + "",
    nan = locale.nan === undefined ? "NaN" : locale.nan + "";

  function newFormat(specifier) {
    specifier = formatSpecifier(specifier);

    var fill = specifier.fill,
      align = specifier.align,
      sign = specifier.sign,
      symbol = specifier.symbol,
      zero = specifier.zero,
      width = specifier.width,
      comma = specifier.comma,
      precision = specifier.precision,
      trim = specifier.trim,
      type = specifier.type;

    // The "n" type is an alias for ",g".
    if (type === "n") (comma = true), (type = "g");
    // The "" type, and any invalid type, is an alias for ".12~g".
    else if (!formatTypes[type])
      precision === undefined && (precision = 12), (trim = true), (type = "g");

    // If zero fill is specified, padding goes after sign and before digits.
    if (zero || (fill === "0" && align === "="))
      (zero = true), (fill = "0"), (align = "=");

    // Compute the prefix and suffix.
    // For SI-prefix, the suffix is lazily computed.
    var prefix =
        symbol === "$"
          ? currencyPrefix
          : symbol === "#" && /[boxX]/.test(type)
          ? "0" + type.toLowerCase()
          : "",
      suffix =
        symbol === "$" ? currencySuffix : /[%p]/.test(type) ? percent : "";

    // What format function should we use?
    // Is this an integer type?
    // Can this type generate exponential notation?
    var formatType = formatTypes[type],
      maybeSuffix = /[defgprs%]/.test(type);

    // Set the default precision if not specified,
    // or clamp the specified precision to the supported range.
    // For significant precision, it must be in [1, 21].
    // For fixed precision, it must be in [0, 20].
    precision =
      precision === undefined
        ? 6
        : /[gprs]/.test(type)
        ? Math.max(1, Math.min(21, precision))
        : Math.max(0, Math.min(20, precision));

    function format(value) {
      var valuePrefix = prefix,
        valueSuffix = suffix,
        i,
        n,
        c;

      if (type === "c") {
        valueSuffix = formatType(value) + valueSuffix;
        value = "";
      } else {
        value = +value;

        // Determine the sign. -0 is not less than 0, but 1 / -0 is!
        var valueNegative = value < 0 || 1 / value < 0;

        // Perform the initial formatting.
        value = isNaN(value) ? nan : formatType(Math.abs(value), precision);

        // Trim insignificant zeros.
        if (trim) value = formatTrim(value);

        // If a negative value rounds to zero after formatting, and no explicit positive sign is requested, hide the sign.
        if (valueNegative && +value === 0 && sign !== "+")
          valueNegative = false;

        // Compute the prefix and suffix.
        valuePrefix =
          (valueNegative
            ? sign === "("
              ? sign
              : minus
            : sign === "-" || sign === "("
            ? ""
            : sign) + valuePrefix;
        valueSuffix =
          (type === "s" ? prefixes[8 + prefixExponent / 3] : "") +
          valueSuffix +
          (valueNegative && sign === "(" ? ")" : "");

        // Break the formatted value into the integer “value” part that can be
        // grouped, and fractional or exponential “suffix” part that is not.
        if (maybeSuffix) {
          (i = -1), (n = value.length);
          while (++i < n) {
            if (((c = value.charCodeAt(i)), 48 > c || c > 57)) {
              valueSuffix =
                (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) +
                valueSuffix;
              value = value.slice(0, i);
              break;
            }
          }
        }
      }

      // If the fill character is not "0", grouping is applied before padding.
      if (comma && !zero) value = group(value, Infinity);

      // Compute the padding.
      var length = valuePrefix.length + value.length + valueSuffix.length,
        padding =
          length < width ? new Array(width - length + 1).join(fill) : "";

      // If the fill character is "0", grouping is applied after padding.
      if (comma && zero)
        (value = group(
          padding + value,
          padding.length ? width - valueSuffix.length : Infinity
        )),
          (padding = "");

      // Reconstruct the final output based on the desired alignment.
      switch (align) {
        case "<":
          value = valuePrefix + value + valueSuffix + padding;
          break;
        case "=":
          value = valuePrefix + padding + value + valueSuffix;
          break;
        case "^":
          value =
            padding.slice(0, (length = padding.length >> 1)) +
            valuePrefix +
            value +
            valueSuffix +
            padding.slice(length);
          break;
        default:
          value = padding + valuePrefix + value + valueSuffix;
          break;
      }

      return numerals(value);
    }

    format.toString = function () {
      return specifier + "";
    };

    return format;
  }

  function formatPrefix(specifier, value) {
    var f = newFormat(
        ((specifier = formatSpecifier(specifier)),
        (specifier.type = "f"),
        specifier)
      ),
      e = Math.max(-8, Math.min(8, Math.floor(exponent(value) / 3))) * 3,
      k = Math.pow(10, -e),
      prefix = prefixes[8 + e / 3];
    return function (value) {
      return f(k * value) + prefix;
    };
  }

  return {
    format: newFormat,
    formatPrefix: formatPrefix,
  };
}

var locale;
var format;
var formatPrefix;

defaultLocale({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""],
});

function defaultLocale(definition) {
  locale = formatLocale(definition);
  format = locale.format;
  formatPrefix = locale.formatPrefix;
  return locale;
}

function precisionFixed(step) {
  return Math.max(0, -exponent(Math.abs(step)));
}

function precisionPrefix(step, value) {
  return Math.max(
    0,
    Math.max(-8, Math.min(8, Math.floor(exponent(value) / 3))) * 3 -
      exponent(Math.abs(step))
  );
}

function precisionRound(step, max) {
  (step = Math.abs(step)), (max = Math.abs(max) - step);
  return Math.max(0, exponent(max) - exponent(step)) + 1;
}

function tickFormat(start, stop, count, specifier) {
  var step = tickStep(start, stop, count),
    precision;
  specifier = formatSpecifier(specifier == null ? ",f" : specifier);
  switch (specifier.type) {
    case "s": {
      var value = Math.max(Math.abs(start), Math.abs(stop));
      if (
        specifier.precision == null &&
        !isNaN((precision = precisionPrefix(step, value)))
      )
        specifier.precision = precision;
      return formatPrefix(specifier, value);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      if (
        specifier.precision == null &&
        !isNaN(
          (precision = precisionRound(
            step,
            Math.max(Math.abs(start), Math.abs(stop))
          ))
        )
      )
        specifier.precision = precision - (specifier.type === "e");
      break;
    }
    case "f":
    case "%": {
      if (
        specifier.precision == null &&
        !isNaN((precision = precisionFixed(step)))
      )
        specifier.precision = precision - (specifier.type === "%") * 2;
      break;
    }
  }
  return format(specifier);
}

function linearish(scale) {
  var domain = scale.domain;

  scale.ticks = function (count) {
    var d = domain();
    return ticks(d[0], d[d.length - 1], count == null ? 10 : count);
  };

  scale.tickFormat = function (count, specifier) {
    var d = domain();
    return tickFormat(
      d[0],
      d[d.length - 1],
      count == null ? 10 : count,
      specifier
    );
  };

  scale.nice = function (count) {
    if (count == null) count = 10;

    var d = domain();
    var i0 = 0;
    var i1 = d.length - 1;
    var start = d[i0];
    var stop = d[i1];
    var prestep;
    var step;
    var maxIter = 10;

    if (stop < start) {
      (step = start), (start = stop), (stop = step);
      (step = i0), (i0 = i1), (i1 = step);
    }

    while (maxIter-- > 0) {
      step = tickIncrement(start, stop, count);
      if (step === prestep) {
        d[i0] = start;
        d[i1] = stop;
        return domain(d);
      } else if (step > 0) {
        start = Math.floor(start / step) * step;
        stop = Math.ceil(stop / step) * step;
      } else if (step < 0) {
        start = Math.ceil(start * step) / step;
        stop = Math.floor(stop * step) / step;
      } else {
        break;
      }
      prestep = step;
    }

    return scale;
  };

  return scale;
}

function linear$1() {
  var scale = continuous();

  scale.copy = function () {
    return copy(scale, linear$1());
  };

  initRange.apply(scale, arguments);

  return linearish(scale);
}

function nice(domain, interval) {
  domain = domain.slice();

  var i0 = 0,
    i1 = domain.length - 1,
    x0 = domain[i0],
    x1 = domain[i1],
    t;

  if (x1 < x0) {
    (t = i0), (i0 = i1), (i1 = t);
    (t = x0), (x0 = x1), (x1 = t);
  }

  domain[i0] = interval.floor(x0);
  domain[i1] = interval.ceil(x1);
  return domain;
}

function transformLog(x) {
  return Math.log(x);
}

function transformExp(x) {
  return Math.exp(x);
}

function transformLogn(x) {
  return -Math.log(-x);
}

function transformExpn(x) {
  return -Math.exp(-x);
}

function pow10(x) {
  return isFinite(x) ? +("1e" + x) : x < 0 ? 0 : x;
}

function powp(base) {
  return base === 10
    ? pow10
    : base === Math.E
    ? Math.exp
    : function (x) {
        return Math.pow(base, x);
      };
}

function logp(base) {
  return base === Math.E
    ? Math.log
    : (base === 10 && Math.log10) ||
        (base === 2 && Math.log2) ||
        ((base = Math.log(base)),
        function (x) {
          return Math.log(x) / base;
        });
}

function reflect(f) {
  return function (x) {
    return -f(-x);
  };
}

function loggish(transform) {
  var scale = transform(transformLog, transformExp),
    domain = scale.domain,
    base = 10,
    logs,
    pows;

  function rescale() {
    (logs = logp(base)), (pows = powp(base));
    if (domain()[0] < 0) {
      (logs = reflect(logs)), (pows = reflect(pows));
      transform(transformLogn, transformExpn);
    } else {
      transform(transformLog, transformExp);
    }
    return scale;
  }

  scale.base = function (_) {
    return arguments.length ? ((base = +_), rescale()) : base;
  };

  scale.domain = function (_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };

  scale.ticks = function (count) {
    var d = domain(),
      u = d[0],
      v = d[d.length - 1],
      r;

    if ((r = v < u)) (i = u), (u = v), (v = i);

    var i = logs(u),
      j = logs(v),
      p,
      k,
      t,
      n = count == null ? 10 : +count,
      z = [];

    if (!(base % 1) && j - i < n) {
      (i = Math.floor(i)), (j = Math.ceil(j));
      if (u > 0)
        for (; i <= j; ++i) {
          for (k = 1, p = pows(i); k < base; ++k) {
            t = p * k;
            if (t < u) continue;
            if (t > v) break;
            z.push(t);
          }
        }
      else
        for (; i <= j; ++i) {
          for (k = base - 1, p = pows(i); k >= 1; --k) {
            t = p * k;
            if (t < u) continue;
            if (t > v) break;
            z.push(t);
          }
        }
      if (z.length * 2 < n) z = ticks(u, v, n);
    } else {
      z = ticks(i, j, Math.min(j - i, n)).map(pows);
    }

    return r ? z.reverse() : z;
  };

  scale.tickFormat = function (count, specifier) {
    if (specifier == null) specifier = base === 10 ? ".0e" : ",";
    if (typeof specifier !== "function") specifier = format(specifier);
    if (count === Infinity) return specifier;
    if (count == null) count = 10;
    var k = Math.max(1, (base * count) / scale.ticks().length); // TODO fast estimate?
    return function (d) {
      var i = d / pows(Math.round(logs(d)));
      if (i * base < base - 0.5) i *= base;
      return i <= k ? specifier(d) : "";
    };
  };

  scale.nice = function () {
    return domain(
      nice(domain(), {
        floor: function (x) {
          return pows(Math.floor(logs(x)));
        },
        ceil: function (x) {
          return pows(Math.ceil(logs(x)));
        },
      })
    );
  };

  return scale;
}

function log() {
  var scale = loggish(transformer()).domain([1, 10]);

  scale.copy = function () {
    return copy(scale, log()).base(scale.base());
  };

  initRange.apply(scale, arguments);

  return scale;
}

var t0 = new Date(),
  t1 = new Date();

function newInterval(floori, offseti, count, field) {
  function interval(date) {
    return (
      floori((date = arguments.length === 0 ? new Date() : new Date(+date))),
      date
    );
  }

  interval.floor = function (date) {
    return floori((date = new Date(+date))), date;
  };

  interval.ceil = function (date) {
    return (
      floori((date = new Date(date - 1))), offseti(date, 1), floori(date), date
    );
  };

  interval.round = function (date) {
    var d0 = interval(date),
      d1 = interval.ceil(date);
    return date - d0 < d1 - date ? d0 : d1;
  };

  interval.offset = function (date, step) {
    return (
      offseti((date = new Date(+date)), step == null ? 1 : Math.floor(step)),
      date
    );
  };

  interval.range = function (start, stop, step) {
    var range = [],
      previous;
    start = interval.ceil(start);
    step = step == null ? 1 : Math.floor(step);
    if (!(start < stop) || !(step > 0)) return range; // also handles Invalid Date
    do
      range.push((previous = new Date(+start))),
        offseti(start, step),
        floori(start);
    while (previous < start && start < stop);
    return range;
  };

  interval.filter = function (test) {
    return newInterval(
      function (date) {
        if (date >= date)
          while ((floori(date), !test(date))) date.setTime(date - 1);
      },
      function (date, step) {
        if (date >= date) {
          if (step < 0)
            while (++step <= 0) {
              while ((offseti(date, -1), !test(date))) {} // eslint-disable-line no-empty
            }
          else
            while (--step >= 0) {
              while ((offseti(date, +1), !test(date))) {} // eslint-disable-line no-empty
            }
        }
      }
    );
  };

  if (count) {
    interval.count = function (start, end) {
      t0.setTime(+start), t1.setTime(+end);
      floori(t0), floori(t1);
      return Math.floor(count(t0, t1));
    };

    interval.every = function (step) {
      step = Math.floor(step);
      return !isFinite(step) || !(step > 0)
        ? null
        : !(step > 1)
        ? interval
        : interval.filter(
            field
              ? function (d) {
                  return field(d) % step === 0;
                }
              : function (d) {
                  return interval.count(0, d) % step === 0;
                }
          );
    };
  }

  return interval;
}

var millisecond = newInterval(
  function () {
    // noop
  },
  function (date, step) {
    date.setTime(+date + step);
  },
  function (start, end) {
    return end - start;
  }
);

// An optimized implementation for this simple case.
millisecond.every = function (k) {
  k = Math.floor(k);
  if (!isFinite(k) || !(k > 0)) return null;
  if (!(k > 1)) return millisecond;
  return newInterval(
    function (date) {
      date.setTime(Math.floor(date / k) * k);
    },
    function (date, step) {
      date.setTime(+date + step * k);
    },
    function (start, end) {
      return (end - start) / k;
    }
  );
};

var durationSecond = 1e3;
var durationMinute = 6e4;
var durationHour = 36e5;
var durationDay = 864e5;
var durationWeek = 6048e5;

var second = newInterval(
  function (date) {
    date.setTime(date - date.getMilliseconds());
  },
  function (date, step) {
    date.setTime(+date + step * durationSecond);
  },
  function (start, end) {
    return (end - start) / durationSecond;
  },
  function (date) {
    return date.getUTCSeconds();
  }
);

var minute = newInterval(
  function (date) {
    date.setTime(
      date - date.getMilliseconds() - date.getSeconds() * durationSecond
    );
  },
  function (date, step) {
    date.setTime(+date + step * durationMinute);
  },
  function (start, end) {
    return (end - start) / durationMinute;
  },
  function (date) {
    return date.getMinutes();
  }
);

var hour = newInterval(
  function (date) {
    date.setTime(
      date -
        date.getMilliseconds() -
        date.getSeconds() * durationSecond -
        date.getMinutes() * durationMinute
    );
  },
  function (date, step) {
    date.setTime(+date + step * durationHour);
  },
  function (start, end) {
    return (end - start) / durationHour;
  },
  function (date) {
    return date.getHours();
  }
);

var day = newInterval(
  (date) => date.setHours(0, 0, 0, 0),
  (date, step) => date.setDate(date.getDate() + step),
  (start, end) =>
    (end -
      start -
      (end.getTimezoneOffset() - start.getTimezoneOffset()) * durationMinute) /
    durationDay,
  (date) => date.getDate() - 1
);

function weekday(i) {
  return newInterval(
    function (date) {
      date.setDate(date.getDate() - ((date.getDay() + 7 - i) % 7));
      date.setHours(0, 0, 0, 0);
    },
    function (date, step) {
      date.setDate(date.getDate() + step * 7);
    },
    function (start, end) {
      return (
        (end -
          start -
          (end.getTimezoneOffset() - start.getTimezoneOffset()) *
            durationMinute) /
        durationWeek
      );
    }
  );
}

var sunday = weekday(0);
var monday = weekday(1);
var tuesday = weekday(2);
var wednesday = weekday(3);
var thursday = weekday(4);
var friday = weekday(5);
var saturday = weekday(6);

var month = newInterval(
  function (date) {
    date.setDate(1);
    date.setHours(0, 0, 0, 0);
  },
  function (date, step) {
    date.setMonth(date.getMonth() + step);
  },
  function (start, end) {
    return (
      end.getMonth() -
      start.getMonth() +
      (end.getFullYear() - start.getFullYear()) * 12
    );
  },
  function (date) {
    return date.getMonth();
  }
);

var year = newInterval(
  function (date) {
    date.setMonth(0, 1);
    date.setHours(0, 0, 0, 0);
  },
  function (date, step) {
    date.setFullYear(date.getFullYear() + step);
  },
  function (start, end) {
    return end.getFullYear() - start.getFullYear();
  },
  function (date) {
    return date.getFullYear();
  }
);

// An optimized implementation for this simple case.
year.every = function (k) {
  return !isFinite((k = Math.floor(k))) || !(k > 0)
    ? null
    : newInterval(
        function (date) {
          date.setFullYear(Math.floor(date.getFullYear() / k) * k);
          date.setMonth(0, 1);
          date.setHours(0, 0, 0, 0);
        },
        function (date, step) {
          date.setFullYear(date.getFullYear() + step * k);
        }
      );
};

var utcMinute = newInterval(
  function (date) {
    date.setUTCSeconds(0, 0);
  },
  function (date, step) {
    date.setTime(+date + step * durationMinute);
  },
  function (start, end) {
    return (end - start) / durationMinute;
  },
  function (date) {
    return date.getUTCMinutes();
  }
);

var utcHour = newInterval(
  function (date) {
    date.setUTCMinutes(0, 0, 0);
  },
  function (date, step) {
    date.setTime(+date + step * durationHour);
  },
  function (start, end) {
    return (end - start) / durationHour;
  },
  function (date) {
    return date.getUTCHours();
  }
);

var utcDay = newInterval(
  function (date) {
    date.setUTCHours(0, 0, 0, 0);
  },
  function (date, step) {
    date.setUTCDate(date.getUTCDate() + step);
  },
  function (start, end) {
    return (end - start) / durationDay;
  },
  function (date) {
    return date.getUTCDate() - 1;
  }
);

function utcWeekday(i) {
  return newInterval(
    function (date) {
      date.setUTCDate(date.getUTCDate() - ((date.getUTCDay() + 7 - i) % 7));
      date.setUTCHours(0, 0, 0, 0);
    },
    function (date, step) {
      date.setUTCDate(date.getUTCDate() + step * 7);
    },
    function (start, end) {
      return (end - start) / durationWeek;
    }
  );
}

var utcSunday = utcWeekday(0);
var utcMonday = utcWeekday(1);
var utcTuesday = utcWeekday(2);
var utcWednesday = utcWeekday(3);
var utcThursday = utcWeekday(4);
var utcFriday = utcWeekday(5);
var utcSaturday = utcWeekday(6);

var utcMonth = newInterval(
  function (date) {
    date.setUTCDate(1);
    date.setUTCHours(0, 0, 0, 0);
  },
  function (date, step) {
    date.setUTCMonth(date.getUTCMonth() + step);
  },
  function (start, end) {
    return (
      end.getUTCMonth() -
      start.getUTCMonth() +
      (end.getUTCFullYear() - start.getUTCFullYear()) * 12
    );
  },
  function (date) {
    return date.getUTCMonth();
  }
);

var utcYear = newInterval(
  function (date) {
    date.setUTCMonth(0, 1);
    date.setUTCHours(0, 0, 0, 0);
  },
  function (date, step) {
    date.setUTCFullYear(date.getUTCFullYear() + step);
  },
  function (start, end) {
    return end.getUTCFullYear() - start.getUTCFullYear();
  },
  function (date) {
    return date.getUTCFullYear();
  }
);

// An optimized implementation for this simple case.
utcYear.every = function (k) {
  return !isFinite((k = Math.floor(k))) || !(k > 0)
    ? null
    : newInterval(
        function (date) {
          date.setUTCFullYear(Math.floor(date.getUTCFullYear() / k) * k);
          date.setUTCMonth(0, 1);
          date.setUTCHours(0, 0, 0, 0);
        },
        function (date, step) {
          date.setUTCFullYear(date.getUTCFullYear() + step * k);
        }
      );
};

function localDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date = new Date(-1, d.m, d.d, d.H, d.M, d.S, d.L);
    date.setFullYear(d.y);
    return date;
  }
  return new Date(d.y, d.m, d.d, d.H, d.M, d.S, d.L);
}

function utcDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date = new Date(Date.UTC(-1, d.m, d.d, d.H, d.M, d.S, d.L));
    date.setUTCFullYear(d.y);
    return date;
  }
  return new Date(Date.UTC(d.y, d.m, d.d, d.H, d.M, d.S, d.L));
}

function newDate(y, m, d) {
  return { y: y, m: m, d: d, H: 0, M: 0, S: 0, L: 0 };
}

function formatLocale$1(locale) {
  var locale_dateTime = locale.dateTime,
    locale_date = locale.date,
    locale_time = locale.time,
    locale_periods = locale.periods,
    locale_weekdays = locale.days,
    locale_shortWeekdays = locale.shortDays,
    locale_months = locale.months,
    locale_shortMonths = locale.shortMonths;

  var periodRe = formatRe(locale_periods),
    periodLookup = formatLookup(locale_periods),
    weekdayRe = formatRe(locale_weekdays),
    weekdayLookup = formatLookup(locale_weekdays),
    shortWeekdayRe = formatRe(locale_shortWeekdays),
    shortWeekdayLookup = formatLookup(locale_shortWeekdays),
    monthRe = formatRe(locale_months),
    monthLookup = formatLookup(locale_months),
    shortMonthRe = formatRe(locale_shortMonths),
    shortMonthLookup = formatLookup(locale_shortMonths);

  var formats = {
    a: formatShortWeekday,
    A: formatWeekday,
    b: formatShortMonth,
    B: formatMonth,
    c: null,
    d: formatDayOfMonth,
    e: formatDayOfMonth,
    f: formatMicroseconds,
    g: formatYearISO,
    G: formatFullYearISO,
    H: formatHour24,
    I: formatHour12,
    j: formatDayOfYear,
    L: formatMilliseconds,
    m: formatMonthNumber,
    M: formatMinutes,
    p: formatPeriod,
    q: formatQuarter,
    Q: formatUnixTimestamp,
    s: formatUnixTimestampSeconds,
    S: formatSeconds,
    u: formatWeekdayNumberMonday,
    U: formatWeekNumberSunday,
    V: formatWeekNumberISO,
    w: formatWeekdayNumberSunday,
    W: formatWeekNumberMonday,
    x: null,
    X: null,
    y: formatYear,
    Y: formatFullYear,
    Z: formatZone,
    "%": formatLiteralPercent,
  };

  var utcFormats = {
    a: formatUTCShortWeekday,
    A: formatUTCWeekday,
    b: formatUTCShortMonth,
    B: formatUTCMonth,
    c: null,
    d: formatUTCDayOfMonth,
    e: formatUTCDayOfMonth,
    f: formatUTCMicroseconds,
    g: formatUTCYearISO,
    G: formatUTCFullYearISO,
    H: formatUTCHour24,
    I: formatUTCHour12,
    j: formatUTCDayOfYear,
    L: formatUTCMilliseconds,
    m: formatUTCMonthNumber,
    M: formatUTCMinutes,
    p: formatUTCPeriod,
    q: formatUTCQuarter,
    Q: formatUnixTimestamp,
    s: formatUnixTimestampSeconds,
    S: formatUTCSeconds,
    u: formatUTCWeekdayNumberMonday,
    U: formatUTCWeekNumberSunday,
    V: formatUTCWeekNumberISO,
    w: formatUTCWeekdayNumberSunday,
    W: formatUTCWeekNumberMonday,
    x: null,
    X: null,
    y: formatUTCYear,
    Y: formatUTCFullYear,
    Z: formatUTCZone,
    "%": formatLiteralPercent,
  };

  var parses = {
    a: parseShortWeekday,
    A: parseWeekday,
    b: parseShortMonth,
    B: parseMonth,
    c: parseLocaleDateTime,
    d: parseDayOfMonth,
    e: parseDayOfMonth,
    f: parseMicroseconds,
    g: parseYear,
    G: parseFullYear,
    H: parseHour24,
    I: parseHour24,
    j: parseDayOfYear,
    L: parseMilliseconds,
    m: parseMonthNumber,
    M: parseMinutes,
    p: parsePeriod,
    q: parseQuarter,
    Q: parseUnixTimestamp,
    s: parseUnixTimestampSeconds,
    S: parseSeconds,
    u: parseWeekdayNumberMonday,
    U: parseWeekNumberSunday,
    V: parseWeekNumberISO,
    w: parseWeekdayNumberSunday,
    W: parseWeekNumberMonday,
    x: parseLocaleDate,
    X: parseLocaleTime,
    y: parseYear,
    Y: parseFullYear,
    Z: parseZone,
    "%": parseLiteralPercent,
  };

  // These recursive directive definitions must be deferred.
  formats.x = newFormat(locale_date, formats);
  formats.X = newFormat(locale_time, formats);
  formats.c = newFormat(locale_dateTime, formats);
  utcFormats.x = newFormat(locale_date, utcFormats);
  utcFormats.X = newFormat(locale_time, utcFormats);
  utcFormats.c = newFormat(locale_dateTime, utcFormats);

  function newFormat(specifier, formats) {
    return function (date) {
      var string = [],
        i = -1,
        j = 0,
        n = specifier.length,
        c,
        pad,
        format;

      if (!(date instanceof Date)) date = new Date(+date);

      while (++i < n) {
        if (specifier.charCodeAt(i) === 37) {
          string.push(specifier.slice(j, i));
          if ((pad = pads[(c = specifier.charAt(++i))]) != null)
            c = specifier.charAt(++i);
          else pad = c === "e" ? " " : "0";
          if ((format = formats[c])) c = format(date, pad);
          string.push(c);
          j = i + 1;
        }
      }

      string.push(specifier.slice(j, i));
      return string.join("");
    };
  }

  function newParse(specifier, Z) {
    return function (string) {
      var d = newDate(1900, undefined, 1),
        i = parseSpecifier(d, specifier, (string += ""), 0),
        week,
        day$1;
      if (i != string.length) return null;

      // If a UNIX timestamp is specified, return it.
      if ("Q" in d) return new Date(d.Q);
      if ("s" in d) return new Date(d.s * 1000 + ("L" in d ? d.L : 0));

      // If this is utcParse, never use the local timezone.
      if (Z && !("Z" in d)) d.Z = 0;

      // The am-pm flag is 0 for AM, and 1 for PM.
      if ("p" in d) d.H = (d.H % 12) + d.p * 12;

      // If the month was not specified, inherit from the quarter.
      if (d.m === undefined) d.m = "q" in d ? d.q : 0;

      // Convert day-of-week and week-of-year to day-of-year.
      if ("V" in d) {
        if (d.V < 1 || d.V > 53) return null;
        if (!("w" in d)) d.w = 1;
        if ("Z" in d) {
          (week = utcDate(newDate(d.y, 0, 1))), (day$1 = week.getUTCDay());
          week =
            day$1 > 4 || day$1 === 0 ? utcMonday.ceil(week) : utcMonday(week);
          week = utcDay.offset(week, (d.V - 1) * 7);
          d.y = week.getUTCFullYear();
          d.m = week.getUTCMonth();
          d.d = week.getUTCDate() + ((d.w + 6) % 7);
        } else {
          (week = localDate(newDate(d.y, 0, 1))), (day$1 = week.getDay());
          week = day$1 > 4 || day$1 === 0 ? monday.ceil(week) : monday(week);
          week = day.offset(week, (d.V - 1) * 7);
          d.y = week.getFullYear();
          d.m = week.getMonth();
          d.d = week.getDate() + ((d.w + 6) % 7);
        }
      } else if ("W" in d || "U" in d) {
        if (!("w" in d)) d.w = "u" in d ? d.u % 7 : "W" in d ? 1 : 0;
        day$1 =
          "Z" in d
            ? utcDate(newDate(d.y, 0, 1)).getUTCDay()
            : localDate(newDate(d.y, 0, 1)).getDay();
        d.m = 0;
        d.d =
          "W" in d
            ? ((d.w + 6) % 7) + d.W * 7 - ((day$1 + 5) % 7)
            : d.w + d.U * 7 - ((day$1 + 6) % 7);
      }

      // If a time zone is specified, all fields are interpreted as UTC and then
      // offset according to the specified time zone.
      if ("Z" in d) {
        d.H += (d.Z / 100) | 0;
        d.M += d.Z % 100;
        return utcDate(d);
      }

      // Otherwise, all fields are in local time.
      return localDate(d);
    };
  }

  function parseSpecifier(d, specifier, string, j) {
    var i = 0,
      n = specifier.length,
      m = string.length,
      c,
      parse;

    while (i < n) {
      if (j >= m) return -1;
      c = specifier.charCodeAt(i++);
      if (c === 37) {
        c = specifier.charAt(i++);
        parse = parses[c in pads ? specifier.charAt(i++) : c];
        if (!parse || (j = parse(d, string, j)) < 0) return -1;
      } else if (c != string.charCodeAt(j++)) {
        return -1;
      }
    }

    return j;
  }

  function parsePeriod(d, string, i) {
    var n = periodRe.exec(string.slice(i));
    return n
      ? ((d.p = periodLookup.get(n[0].toLowerCase())), i + n[0].length)
      : -1;
  }

  function parseShortWeekday(d, string, i) {
    var n = shortWeekdayRe.exec(string.slice(i));
    return n
      ? ((d.w = shortWeekdayLookup.get(n[0].toLowerCase())), i + n[0].length)
      : -1;
  }

  function parseWeekday(d, string, i) {
    var n = weekdayRe.exec(string.slice(i));
    return n
      ? ((d.w = weekdayLookup.get(n[0].toLowerCase())), i + n[0].length)
      : -1;
  }

  function parseShortMonth(d, string, i) {
    var n = shortMonthRe.exec(string.slice(i));
    return n
      ? ((d.m = shortMonthLookup.get(n[0].toLowerCase())), i + n[0].length)
      : -1;
  }

  function parseMonth(d, string, i) {
    var n = monthRe.exec(string.slice(i));
    return n
      ? ((d.m = monthLookup.get(n[0].toLowerCase())), i + n[0].length)
      : -1;
  }

  function parseLocaleDateTime(d, string, i) {
    return parseSpecifier(d, locale_dateTime, string, i);
  }

  function parseLocaleDate(d, string, i) {
    return parseSpecifier(d, locale_date, string, i);
  }

  function parseLocaleTime(d, string, i) {
    return parseSpecifier(d, locale_time, string, i);
  }

  function formatShortWeekday(d) {
    return locale_shortWeekdays[d.getDay()];
  }

  function formatWeekday(d) {
    return locale_weekdays[d.getDay()];
  }

  function formatShortMonth(d) {
    return locale_shortMonths[d.getMonth()];
  }

  function formatMonth(d) {
    return locale_months[d.getMonth()];
  }

  function formatPeriod(d) {
    return locale_periods[+(d.getHours() >= 12)];
  }

  function formatQuarter(d) {
    return 1 + ~~(d.getMonth() / 3);
  }

  function formatUTCShortWeekday(d) {
    return locale_shortWeekdays[d.getUTCDay()];
  }

  function formatUTCWeekday(d) {
    return locale_weekdays[d.getUTCDay()];
  }

  function formatUTCShortMonth(d) {
    return locale_shortMonths[d.getUTCMonth()];
  }

  function formatUTCMonth(d) {
    return locale_months[d.getUTCMonth()];
  }

  function formatUTCPeriod(d) {
    return locale_periods[+(d.getUTCHours() >= 12)];
  }

  function formatUTCQuarter(d) {
    return 1 + ~~(d.getUTCMonth() / 3);
  }

  return {
    format: function (specifier) {
      var f = newFormat((specifier += ""), formats);
      f.toString = function () {
        return specifier;
      };
      return f;
    },
    parse: function (specifier) {
      var p = newParse((specifier += ""), false);
      p.toString = function () {
        return specifier;
      };
      return p;
    },
    utcFormat: function (specifier) {
      var f = newFormat((specifier += ""), utcFormats);
      f.toString = function () {
        return specifier;
      };
      return f;
    },
    utcParse: function (specifier) {
      var p = newParse((specifier += ""), true);
      p.toString = function () {
        return specifier;
      };
      return p;
    },
  };
}

var pads = { "-": "", _: " ", 0: "0" },
  numberRe = /^\s*\d+/, // note: ignores next directive
  percentRe = /^%/,
  requoteRe = /[\\^$*+?|[\]().{}]/g;

function pad(value, fill, width) {
  var sign = value < 0 ? "-" : "",
    string = (sign ? -value : value) + "",
    length = string.length;
  return (
    sign +
    (length < width
      ? new Array(width - length + 1).join(fill) + string
      : string)
  );
}

function requote(s) {
  return s.replace(requoteRe, "\\$&");
}

function formatRe(names) {
  return new RegExp("^(?:" + names.map(requote).join("|") + ")", "i");
}

function formatLookup(names) {
  return new Map(names.map((name, i) => [name.toLowerCase(), i]));
}

function parseWeekdayNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? ((d.w = +n[0]), i + n[0].length) : -1;
}

function parseWeekdayNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? ((d.u = +n[0]), i + n[0].length) : -1;
}

function parseWeekNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? ((d.U = +n[0]), i + n[0].length) : -1;
}

function parseWeekNumberISO(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? ((d.V = +n[0]), i + n[0].length) : -1;
}

function parseWeekNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? ((d.W = +n[0]), i + n[0].length) : -1;
}

function parseFullYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 4));
  return n ? ((d.y = +n[0]), i + n[0].length) : -1;
}

function parseYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? ((d.y = +n[0] + (+n[0] > 68 ? 1900 : 2000)), i + n[0].length) : -1;
}

function parseZone(d, string, i) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(string.slice(i, i + 6));
  return n
    ? ((d.Z = n[1] ? 0 : -(n[2] + (n[3] || "00"))), i + n[0].length)
    : -1;
}

function parseQuarter(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? ((d.q = n[0] * 3 - 3), i + n[0].length) : -1;
}

function parseMonthNumber(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? ((d.m = n[0] - 1), i + n[0].length) : -1;
}

function parseDayOfMonth(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? ((d.d = +n[0]), i + n[0].length) : -1;
}

function parseDayOfYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? ((d.m = 0), (d.d = +n[0]), i + n[0].length) : -1;
}

function parseHour24(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? ((d.H = +n[0]), i + n[0].length) : -1;
}

function parseMinutes(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? ((d.M = +n[0]), i + n[0].length) : -1;
}

function parseSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? ((d.S = +n[0]), i + n[0].length) : -1;
}

function parseMilliseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? ((d.L = +n[0]), i + n[0].length) : -1;
}

function parseMicroseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 6));
  return n ? ((d.L = Math.floor(n[0] / 1000)), i + n[0].length) : -1;
}

function parseLiteralPercent(d, string, i) {
  var n = percentRe.exec(string.slice(i, i + 1));
  return n ? i + n[0].length : -1;
}

function parseUnixTimestamp(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? ((d.Q = +n[0]), i + n[0].length) : -1;
}

function parseUnixTimestampSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? ((d.s = +n[0]), i + n[0].length) : -1;
}

function formatDayOfMonth(d, p) {
  return pad(d.getDate(), p, 2);
}

function formatHour24(d, p) {
  return pad(d.getHours(), p, 2);
}

function formatHour12(d, p) {
  return pad(d.getHours() % 12 || 12, p, 2);
}

function formatDayOfYear(d, p) {
  return pad(1 + day.count(year(d), d), p, 3);
}

function formatMilliseconds(d, p) {
  return pad(d.getMilliseconds(), p, 3);
}

function formatMicroseconds(d, p) {
  return formatMilliseconds(d, p) + "000";
}

function formatMonthNumber(d, p) {
  return pad(d.getMonth() + 1, p, 2);
}

function formatMinutes(d, p) {
  return pad(d.getMinutes(), p, 2);
}

function formatSeconds(d, p) {
  return pad(d.getSeconds(), p, 2);
}

function formatWeekdayNumberMonday(d) {
  var day = d.getDay();
  return day === 0 ? 7 : day;
}

function formatWeekNumberSunday(d, p) {
  return pad(sunday.count(year(d) - 1, d), p, 2);
}

function dISO(d) {
  var day = d.getDay();
  return day >= 4 || day === 0 ? thursday(d) : thursday.ceil(d);
}

function formatWeekNumberISO(d, p) {
  d = dISO(d);
  return pad(thursday.count(year(d), d) + (year(d).getDay() === 4), p, 2);
}

function formatWeekdayNumberSunday(d) {
  return d.getDay();
}

function formatWeekNumberMonday(d, p) {
  return pad(monday.count(year(d) - 1, d), p, 2);
}

function formatYear(d, p) {
  return pad(d.getFullYear() % 100, p, 2);
}

function formatYearISO(d, p) {
  d = dISO(d);
  return pad(d.getFullYear() % 100, p, 2);
}

function formatFullYear(d, p) {
  return pad(d.getFullYear() % 10000, p, 4);
}

function formatFullYearISO(d, p) {
  var day = d.getDay();
  d = day >= 4 || day === 0 ? thursday(d) : thursday.ceil(d);
  return pad(d.getFullYear() % 10000, p, 4);
}

function formatZone(d) {
  var z = d.getTimezoneOffset();
  return (
    (z > 0 ? "-" : ((z *= -1), "+")) +
    pad((z / 60) | 0, "0", 2) +
    pad(z % 60, "0", 2)
  );
}

function formatUTCDayOfMonth(d, p) {
  return pad(d.getUTCDate(), p, 2);
}

function formatUTCHour24(d, p) {
  return pad(d.getUTCHours(), p, 2);
}

function formatUTCHour12(d, p) {
  return pad(d.getUTCHours() % 12 || 12, p, 2);
}

function formatUTCDayOfYear(d, p) {
  return pad(1 + utcDay.count(utcYear(d), d), p, 3);
}

function formatUTCMilliseconds(d, p) {
  return pad(d.getUTCMilliseconds(), p, 3);
}

function formatUTCMicroseconds(d, p) {
  return formatUTCMilliseconds(d, p) + "000";
}

function formatUTCMonthNumber(d, p) {
  return pad(d.getUTCMonth() + 1, p, 2);
}

function formatUTCMinutes(d, p) {
  return pad(d.getUTCMinutes(), p, 2);
}

function formatUTCSeconds(d, p) {
  return pad(d.getUTCSeconds(), p, 2);
}

function formatUTCWeekdayNumberMonday(d) {
  var dow = d.getUTCDay();
  return dow === 0 ? 7 : dow;
}

function formatUTCWeekNumberSunday(d, p) {
  return pad(utcSunday.count(utcYear(d) - 1, d), p, 2);
}

function UTCdISO(d) {
  var day = d.getUTCDay();
  return day >= 4 || day === 0 ? utcThursday(d) : utcThursday.ceil(d);
}

function formatUTCWeekNumberISO(d, p) {
  d = UTCdISO(d);
  return pad(
    utcThursday.count(utcYear(d), d) + (utcYear(d).getUTCDay() === 4),
    p,
    2
  );
}

function formatUTCWeekdayNumberSunday(d) {
  return d.getUTCDay();
}

function formatUTCWeekNumberMonday(d, p) {
  return pad(utcMonday.count(utcYear(d) - 1, d), p, 2);
}

function formatUTCYear(d, p) {
  return pad(d.getUTCFullYear() % 100, p, 2);
}

function formatUTCYearISO(d, p) {
  d = UTCdISO(d);
  return pad(d.getUTCFullYear() % 100, p, 2);
}

function formatUTCFullYear(d, p) {
  return pad(d.getUTCFullYear() % 10000, p, 4);
}

function formatUTCFullYearISO(d, p) {
  var day = d.getUTCDay();
  d = day >= 4 || day === 0 ? utcThursday(d) : utcThursday.ceil(d);
  return pad(d.getUTCFullYear() % 10000, p, 4);
}

function formatUTCZone() {
  return "+0000";
}

function formatLiteralPercent() {
  return "%";
}

function formatUnixTimestamp(d) {
  return +d;
}

function formatUnixTimestampSeconds(d) {
  return Math.floor(+d / 1000);
}

var locale$1;
var timeFormat;
var timeParse;
var utcFormat;
var utcParse;

defaultLocale$1({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  shortMonths: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
});

function defaultLocale$1(definition) {
  locale$1 = formatLocale$1(definition);
  timeFormat = locale$1.format;
  timeParse = locale$1.parse;
  utcFormat = locale$1.utcFormat;
  utcParse = locale$1.utcParse;
  return locale$1;
}

var durationSecond$1 = 1000,
  durationMinute$1 = durationSecond$1 * 60,
  durationHour$1 = durationMinute$1 * 60,
  durationDay$1 = durationHour$1 * 24,
  durationWeek$1 = durationDay$1 * 7,
  durationMonth = durationDay$1 * 30,
  durationYear = durationDay$1 * 365;

function date$1(t) {
  return new Date(t);
}

function number$1(t) {
  return t instanceof Date ? +t : +new Date(+t);
}

function calendar(
  year,
  month,
  week,
  day,
  hour,
  minute,
  second,
  millisecond,
  format
) {
  var scale = continuous(),
    invert = scale.invert,
    domain = scale.domain;

  var formatMillisecond = format(".%L"),
    formatSecond = format(":%S"),
    formatMinute = format("%I:%M"),
    formatHour = format("%I %p"),
    formatDay = format("%a %d"),
    formatWeek = format("%b %d"),
    formatMonth = format("%B"),
    formatYear = format("%Y");

  var tickIntervals = [
    [second, 1, durationSecond$1],
    [second, 5, 5 * durationSecond$1],
    [second, 15, 15 * durationSecond$1],
    [second, 30, 30 * durationSecond$1],
    [minute, 1, durationMinute$1],
    [minute, 5, 5 * durationMinute$1],
    [minute, 15, 15 * durationMinute$1],
    [minute, 30, 30 * durationMinute$1],
    [hour, 1, durationHour$1],
    [hour, 3, 3 * durationHour$1],
    [hour, 6, 6 * durationHour$1],
    [hour, 12, 12 * durationHour$1],
    [day, 1, durationDay$1],
    [day, 2, 2 * durationDay$1],
    [week, 1, durationWeek$1],
    [month, 1, durationMonth],
    [month, 3, 3 * durationMonth],
    [year, 1, durationYear],
  ];

  function tickFormat(date) {
    return (second(date) < date
      ? formatMillisecond
      : minute(date) < date
      ? formatSecond
      : hour(date) < date
      ? formatMinute
      : day(date) < date
      ? formatHour
      : month(date) < date
      ? week(date) < date
        ? formatDay
        : formatWeek
      : year(date) < date
      ? formatMonth
      : formatYear)(date);
  }

  function tickInterval(interval, start, stop) {
    if (interval == null) interval = 10;

    // If a desired tick count is specified, pick a reasonable tick interval
    // based on the extent of the domain and a rough estimate of tick size.
    // Otherwise, assume interval is already a time interval and use it.
    if (typeof interval === "number") {
      var target = Math.abs(stop - start) / interval,
        i = bisector(function (i) {
          return i[2];
        }).right(tickIntervals, target),
        step;
      if (i === tickIntervals.length) {
        step = tickStep(start / durationYear, stop / durationYear, interval);
        interval = year;
      } else if (i) {
        i =
          tickIntervals[
            target / tickIntervals[i - 1][2] < tickIntervals[i][2] / target
              ? i - 1
              : i
          ];
        step = i[1];
        interval = i[0];
      } else {
        step = Math.max(tickStep(start, stop, interval), 1);
        interval = millisecond;
      }
      return interval.every(step);
    }

    return interval;
  }

  scale.invert = function (y) {
    return new Date(invert(y));
  };

  scale.domain = function (_) {
    return arguments.length
      ? domain(Array.from(_, number$1))
      : domain().map(date$1);
  };

  scale.ticks = function (interval) {
    var d = domain(),
      t0 = d[0],
      t1 = d[d.length - 1],
      r = t1 < t0,
      t;
    if (r) (t = t0), (t0 = t1), (t1 = t);
    t = tickInterval(interval, t0, t1);
    t = t ? t.range(t0, t1 + 1) : []; // inclusive stop
    return r ? t.reverse() : t;
  };

  scale.tickFormat = function (count, specifier) {
    return specifier == null ? tickFormat : format(specifier);
  };

  scale.nice = function (interval) {
    var d = domain();
    return (interval = tickInterval(interval, d[0], d[d.length - 1]))
      ? domain(nice(d, interval))
      : scale;
  };

  scale.copy = function () {
    return copy(
      scale,
      calendar(
        year,
        month,
        week,
        day,
        hour,
        minute,
        second,
        millisecond,
        format
      )
    );
  };

  return scale;
}

function time() {
  return initRange.apply(
    calendar(
      year,
      month,
      sunday,
      day,
      hour,
      minute,
      second,
      millisecond,
      timeFormat
    ).domain([new Date(2000, 0, 1), new Date(2000, 0, 2)]),
    arguments
  );
}

function utcTime() {
  return initRange.apply(
    calendar(
      utcYear,
      utcMonth,
      utcSunday,
      utcDay,
      utcHour,
      utcMinute,
      second,
      millisecond,
      utcFormat
    ).domain([Date.UTC(2000, 0, 1), Date.UTC(2000, 0, 2)]),
    arguments
  );
}

function colors(specifier) {
  var n = (specifier.length / 6) | 0,
    colors = new Array(n),
    i = 0;
  while (i < n) colors[i] = "#" + specifier.slice(i * 6, ++i * 6);
  return colors;
}

var schemeCategory10 = colors(
  "1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"
);

var schemeAccent = colors("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666");

var schemeDark2 = colors("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666");

var schemePaired = colors(
  "a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928"
);

var schemePastel1 = colors(
  "fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2"
);

var schemePastel2 = colors("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc");

var schemeSet1 = colors(
  "e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999"
);

var schemeSet2 = colors("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3");

var schemeSet3 = colors(
  "8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f"
);

function define$1(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
}

function extend$1(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition) prototype[key] = definition[key];
  return prototype;
}

function Color$1() {}

var darker$1 = 0.7;
var brighter$1 = 1 / darker$1;

var reI$1 = "\\s*([+-]?\\d+)\\s*",
  reN$1 = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
  reP$1 = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
  reHex$1 = /^#([0-9a-f]{3,8})$/,
  reRgbInteger$1 = new RegExp("^rgb\\(" + [reI$1, reI$1, reI$1] + "\\)$"),
  reRgbPercent$1 = new RegExp("^rgb\\(" + [reP$1, reP$1, reP$1] + "\\)$"),
  reRgbaInteger$1 = new RegExp(
    "^rgba\\(" + [reI$1, reI$1, reI$1, reN$1] + "\\)$"
  ),
  reRgbaPercent$1 = new RegExp(
    "^rgba\\(" + [reP$1, reP$1, reP$1, reN$1] + "\\)$"
  ),
  reHslPercent$1 = new RegExp("^hsl\\(" + [reN$1, reP$1, reP$1] + "\\)$"),
  reHslaPercent$1 = new RegExp(
    "^hsla\\(" + [reN$1, reP$1, reP$1, reN$1] + "\\)$"
  );

var named$1 = {
  aliceblue: 0xf0f8ff,
  antiquewhite: 0xfaebd7,
  aqua: 0x00ffff,
  aquamarine: 0x7fffd4,
  azure: 0xf0ffff,
  beige: 0xf5f5dc,
  bisque: 0xffe4c4,
  black: 0x000000,
  blanchedalmond: 0xffebcd,
  blue: 0x0000ff,
  blueviolet: 0x8a2be2,
  brown: 0xa52a2a,
  burlywood: 0xdeb887,
  cadetblue: 0x5f9ea0,
  chartreuse: 0x7fff00,
  chocolate: 0xd2691e,
  coral: 0xff7f50,
  cornflowerblue: 0x6495ed,
  cornsilk: 0xfff8dc,
  crimson: 0xdc143c,
  cyan: 0x00ffff,
  darkblue: 0x00008b,
  darkcyan: 0x008b8b,
  darkgoldenrod: 0xb8860b,
  darkgray: 0xa9a9a9,
  darkgreen: 0x006400,
  darkgrey: 0xa9a9a9,
  darkkhaki: 0xbdb76b,
  darkmagenta: 0x8b008b,
  darkolivegreen: 0x556b2f,
  darkorange: 0xff8c00,
  darkorchid: 0x9932cc,
  darkred: 0x8b0000,
  darksalmon: 0xe9967a,
  darkseagreen: 0x8fbc8f,
  darkslateblue: 0x483d8b,
  darkslategray: 0x2f4f4f,
  darkslategrey: 0x2f4f4f,
  darkturquoise: 0x00ced1,
  darkviolet: 0x9400d3,
  deeppink: 0xff1493,
  deepskyblue: 0x00bfff,
  dimgray: 0x696969,
  dimgrey: 0x696969,
  dodgerblue: 0x1e90ff,
  firebrick: 0xb22222,
  floralwhite: 0xfffaf0,
  forestgreen: 0x228b22,
  fuchsia: 0xff00ff,
  gainsboro: 0xdcdcdc,
  ghostwhite: 0xf8f8ff,
  gold: 0xffd700,
  goldenrod: 0xdaa520,
  gray: 0x808080,
  green: 0x008000,
  greenyellow: 0xadff2f,
  grey: 0x808080,
  honeydew: 0xf0fff0,
  hotpink: 0xff69b4,
  indianred: 0xcd5c5c,
  indigo: 0x4b0082,
  ivory: 0xfffff0,
  khaki: 0xf0e68c,
  lavender: 0xe6e6fa,
  lavenderblush: 0xfff0f5,
  lawngreen: 0x7cfc00,
  lemonchiffon: 0xfffacd,
  lightblue: 0xadd8e6,
  lightcoral: 0xf08080,
  lightcyan: 0xe0ffff,
  lightgoldenrodyellow: 0xfafad2,
  lightgray: 0xd3d3d3,
  lightgreen: 0x90ee90,
  lightgrey: 0xd3d3d3,
  lightpink: 0xffb6c1,
  lightsalmon: 0xffa07a,
  lightseagreen: 0x20b2aa,
  lightskyblue: 0x87cefa,
  lightslategray: 0x778899,
  lightslategrey: 0x778899,
  lightsteelblue: 0xb0c4de,
  lightyellow: 0xffffe0,
  lime: 0x00ff00,
  limegreen: 0x32cd32,
  linen: 0xfaf0e6,
  magenta: 0xff00ff,
  maroon: 0x800000,
  mediumaquamarine: 0x66cdaa,
  mediumblue: 0x0000cd,
  mediumorchid: 0xba55d3,
  mediumpurple: 0x9370db,
  mediumseagreen: 0x3cb371,
  mediumslateblue: 0x7b68ee,
  mediumspringgreen: 0x00fa9a,
  mediumturquoise: 0x48d1cc,
  mediumvioletred: 0xc71585,
  midnightblue: 0x191970,
  mintcream: 0xf5fffa,
  mistyrose: 0xffe4e1,
  moccasin: 0xffe4b5,
  navajowhite: 0xffdead,
  navy: 0x000080,
  oldlace: 0xfdf5e6,
  olive: 0x808000,
  olivedrab: 0x6b8e23,
  orange: 0xffa500,
  orangered: 0xff4500,
  orchid: 0xda70d6,
  palegoldenrod: 0xeee8aa,
  palegreen: 0x98fb98,
  paleturquoise: 0xafeeee,
  palevioletred: 0xdb7093,
  papayawhip: 0xffefd5,
  peachpuff: 0xffdab9,
  peru: 0xcd853f,
  pink: 0xffc0cb,
  plum: 0xdda0dd,
  powderblue: 0xb0e0e6,
  purple: 0x800080,
  rebeccapurple: 0x663399,
  red: 0xff0000,
  rosybrown: 0xbc8f8f,
  royalblue: 0x4169e1,
  saddlebrown: 0x8b4513,
  salmon: 0xfa8072,
  sandybrown: 0xf4a460,
  seagreen: 0x2e8b57,
  seashell: 0xfff5ee,
  sienna: 0xa0522d,
  silver: 0xc0c0c0,
  skyblue: 0x87ceeb,
  slateblue: 0x6a5acd,
  slategray: 0x708090,
  slategrey: 0x708090,
  snow: 0xfffafa,
  springgreen: 0x00ff7f,
  steelblue: 0x4682b4,
  tan: 0xd2b48c,
  teal: 0x008080,
  thistle: 0xd8bfd8,
  tomato: 0xff6347,
  turquoise: 0x40e0d0,
  violet: 0xee82ee,
  wheat: 0xf5deb3,
  white: 0xffffff,
  whitesmoke: 0xf5f5f5,
  yellow: 0xffff00,
  yellowgreen: 0x9acd32,
};

define$1(Color$1, color$1, {
  copy: function (channels) {
    return Object.assign(new this.constructor(), this, channels);
  },
  displayable: function () {
    return this.rgb().displayable();
  },
  hex: color_formatHex$1, // Deprecated! Use color.formatHex.
  formatHex: color_formatHex$1,
  formatHsl: color_formatHsl$1,
  formatRgb: color_formatRgb$1,
  toString: color_formatRgb$1,
});

function color_formatHex$1() {
  return this.rgb().formatHex();
}

function color_formatHsl$1() {
  return hslConvert$1(this).formatHsl();
}

function color_formatRgb$1() {
  return this.rgb().formatRgb();
}

function color$1(format) {
  var m, l;
  format = (format + "").trim().toLowerCase();
  return (m = reHex$1.exec(format))
    ? ((l = m[1].length),
      (m = parseInt(m[1], 16)),
      l === 6
        ? rgbn$1(m) // #ff0000
        : l === 3
        ? new Rgb$1(
            ((m >> 8) & 0xf) | ((m >> 4) & 0xf0),
            ((m >> 4) & 0xf) | (m & 0xf0),
            ((m & 0xf) << 4) | (m & 0xf),
            1
          ) // #f00
        : l === 8
        ? rgba$1(
            (m >> 24) & 0xff,
            (m >> 16) & 0xff,
            (m >> 8) & 0xff,
            (m & 0xff) / 0xff
          ) // #ff000000
        : l === 4
        ? rgba$1(
            ((m >> 12) & 0xf) | ((m >> 8) & 0xf0),
            ((m >> 8) & 0xf) | ((m >> 4) & 0xf0),
            ((m >> 4) & 0xf) | (m & 0xf0),
            (((m & 0xf) << 4) | (m & 0xf)) / 0xff
          ) // #f000
        : null) // invalid hex
    : (m = reRgbInteger$1.exec(format))
    ? new Rgb$1(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
    : (m = reRgbPercent$1.exec(format))
    ? new Rgb$1((m[1] * 255) / 100, (m[2] * 255) / 100, (m[3] * 255) / 100, 1) // rgb(100%, 0%, 0%)
    : (m = reRgbaInteger$1.exec(format))
    ? rgba$1(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
    : (m = reRgbaPercent$1.exec(format))
    ? rgba$1((m[1] * 255) / 100, (m[2] * 255) / 100, (m[3] * 255) / 100, m[4]) // rgb(100%, 0%, 0%, 1)
    : (m = reHslPercent$1.exec(format))
    ? hsla$1(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
    : (m = reHslaPercent$1.exec(format))
    ? hsla$1(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
    : named$1.hasOwnProperty(format)
    ? rgbn$1(named$1[format]) // eslint-disable-line no-prototype-builtins
    : format === "transparent"
    ? new Rgb$1(NaN, NaN, NaN, 0)
    : null;
}

function rgbn$1(n) {
  return new Rgb$1((n >> 16) & 0xff, (n >> 8) & 0xff, n & 0xff, 1);
}

function rgba$1(r, g, b, a) {
  if (a <= 0) r = g = b = NaN;
  return new Rgb$1(r, g, b, a);
}

function rgbConvert$1(o) {
  if (!(o instanceof Color$1)) o = color$1(o);
  if (!o) return new Rgb$1();
  o = o.rgb();
  return new Rgb$1(o.r, o.g, o.b, o.opacity);
}

function rgb$2(r, g, b, opacity) {
  return arguments.length === 1
    ? rgbConvert$1(r)
    : new Rgb$1(r, g, b, opacity == null ? 1 : opacity);
}

function Rgb$1(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}

define$1(
  Rgb$1,
  rgb$2,
  extend$1(Color$1, {
    brighter: function (k) {
      k = k == null ? brighter$1 : Math.pow(brighter$1, k);
      return new Rgb$1(this.r * k, this.g * k, this.b * k, this.opacity);
    },
    darker: function (k) {
      k = k == null ? darker$1 : Math.pow(darker$1, k);
      return new Rgb$1(this.r * k, this.g * k, this.b * k, this.opacity);
    },
    rgb: function () {
      return this;
    },
    displayable: function () {
      return (
        -0.5 <= this.r &&
        this.r < 255.5 &&
        -0.5 <= this.g &&
        this.g < 255.5 &&
        -0.5 <= this.b &&
        this.b < 255.5 &&
        0 <= this.opacity &&
        this.opacity <= 1
      );
    },
    hex: rgb_formatHex$1, // Deprecated! Use color.formatHex.
    formatHex: rgb_formatHex$1,
    formatRgb: rgb_formatRgb$1,
    toString: rgb_formatRgb$1,
  })
);

function rgb_formatHex$1() {
  return "#" + hex$1(this.r) + hex$1(this.g) + hex$1(this.b);
}

function rgb_formatRgb$1() {
  var a = this.opacity;
  a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
  return (
    (a === 1 ? "rgb(" : "rgba(") +
    Math.max(0, Math.min(255, Math.round(this.r) || 0)) +
    ", " +
    Math.max(0, Math.min(255, Math.round(this.g) || 0)) +
    ", " +
    Math.max(0, Math.min(255, Math.round(this.b) || 0)) +
    (a === 1 ? ")" : ", " + a + ")")
  );
}

function hex$1(value) {
  value = Math.max(0, Math.min(255, Math.round(value) || 0));
  return (value < 16 ? "0" : "") + value.toString(16);
}

function hsla$1(h, s, l, a) {
  if (a <= 0) h = s = l = NaN;
  else if (l <= 0 || l >= 1) h = s = NaN;
  else if (s <= 0) h = NaN;
  return new Hsl$1(h, s, l, a);
}

function hslConvert$1(o) {
  if (o instanceof Hsl$1) return new Hsl$1(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color$1)) o = color$1(o);
  if (!o) return new Hsl$1();
  if (o instanceof Hsl$1) return o;
  o = o.rgb();
  var r = o.r / 255,
    g = o.g / 255,
    b = o.b / 255,
    min = Math.min(r, g, b),
    max = Math.max(r, g, b),
    h = NaN,
    s = max - min,
    l = (max + min) / 2;
  if (s) {
    if (r === max) h = (g - b) / s + (g < b) * 6;
    else if (g === max) h = (b - r) / s + 2;
    else h = (r - g) / s + 4;
    s /= l < 0.5 ? max + min : 2 - max - min;
    h *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h;
  }
  return new Hsl$1(h, s, l, o.opacity);
}

function hsl$1(h, s, l, opacity) {
  return arguments.length === 1
    ? hslConvert$1(h)
    : new Hsl$1(h, s, l, opacity == null ? 1 : opacity);
}

function Hsl$1(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

define$1(
  Hsl$1,
  hsl$1,
  extend$1(Color$1, {
    brighter: function (k) {
      k = k == null ? brighter$1 : Math.pow(brighter$1, k);
      return new Hsl$1(this.h, this.s, this.l * k, this.opacity);
    },
    darker: function (k) {
      k = k == null ? darker$1 : Math.pow(darker$1, k);
      return new Hsl$1(this.h, this.s, this.l * k, this.opacity);
    },
    rgb: function () {
      var h = (this.h % 360) + (this.h < 0) * 360,
        s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
        l = this.l,
        m2 = l + (l < 0.5 ? l : 1 - l) * s,
        m1 = 2 * l - m2;
      return new Rgb$1(
        hsl2rgb$1(h >= 240 ? h - 240 : h + 120, m1, m2),
        hsl2rgb$1(h, m1, m2),
        hsl2rgb$1(h < 120 ? h + 240 : h - 120, m1, m2),
        this.opacity
      );
    },
    displayable: function () {
      return (
        ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
        0 <= this.l &&
        this.l <= 1 &&
        0 <= this.opacity &&
        this.opacity <= 1
      );
    },
    formatHsl: function () {
      var a = this.opacity;
      a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
      return (
        (a === 1 ? "hsl(" : "hsla(") +
        (this.h || 0) +
        ", " +
        (this.s || 0) * 100 +
        "%, " +
        (this.l || 0) * 100 +
        "%" +
        (a === 1 ? ")" : ", " + a + ")")
      );
    },
  })
);

/* From FvD 13.37, CSS Color Module Level 3 */
function hsl2rgb$1(h, m1, m2) {
  return (
    (h < 60
      ? m1 + ((m2 - m1) * h) / 60
      : h < 180
      ? m2
      : h < 240
      ? m1 + ((m2 - m1) * (240 - h)) / 60
      : m1) * 255
  );
}

function basis(t1, v0, v1, v2, v3) {
  var t2 = t1 * t1,
    t3 = t2 * t1;
  return (
    ((1 - 3 * t1 + 3 * t2 - t3) * v0 +
      (4 - 6 * t2 + 3 * t3) * v1 +
      (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2 +
      t3 * v3) /
    6
  );
}

function basis$1(values) {
  var n = values.length - 1;
  return function (t) {
    var i = t <= 0 ? (t = 0) : t >= 1 ? ((t = 1), n - 1) : Math.floor(t * n),
      v1 = values[i],
      v2 = values[i + 1],
      v0 = i > 0 ? values[i - 1] : 2 * v1 - v2,
      v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
}

function constant$1(x) {
  return function () {
    return x;
  };
}

function linear$2(a, d) {
  return function (t) {
    return a + t * d;
  };
}

function exponential$1(a, b, y) {
  return (
    (a = Math.pow(a, y)),
    (b = Math.pow(b, y) - a),
    (y = 1 / y),
    function (t) {
      return Math.pow(a + t * b, y);
    }
  );
}

function gamma$1(y) {
  return (y = +y) === 1
    ? nogamma$1
    : function (a, b) {
        return b - a ? exponential$1(a, b, y) : constant$1(isNaN(a) ? b : a);
      };
}

function nogamma$1(a, b) {
  var d = b - a;
  return d ? linear$2(a, d) : constant$1(isNaN(a) ? b : a);
}

var rgb$3 = (function rgbGamma(y) {
  var color = gamma$1(y);

  function rgb(start, end) {
    var r = color((start = rgb$2(start)).r, (end = rgb$2(end)).r),
      g = color(start.g, end.g),
      b = color(start.b, end.b),
      opacity = nogamma$1(start.opacity, end.opacity);
    return function (t) {
      start.r = r(t);
      start.g = g(t);
      start.b = b(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }

  rgb.gamma = rgbGamma;

  return rgb;
})(1);

function rgbSpline(spline) {
  return function (colors) {
    var n = colors.length,
      r = new Array(n),
      g = new Array(n),
      b = new Array(n),
      i,
      color;
    for (i = 0; i < n; ++i) {
      color = rgb$2(colors[i]);
      r[i] = color.r || 0;
      g[i] = color.g || 0;
      b[i] = color.b || 0;
    }
    r = spline(r);
    g = spline(g);
    b = spline(b);
    color.opacity = 1;
    return function (t) {
      color.r = r(t);
      color.g = g(t);
      color.b = b(t);
      return color + "";
    };
  };
}

var rgbBasis = rgbSpline(basis$1);

function numberArray$1(a, b) {
  if (!b) b = [];
  var n = a ? Math.min(b.length, a.length) : 0,
    c = b.slice(),
    i;
  return function (t) {
    for (i = 0; i < n; ++i) c[i] = a[i] * (1 - t) + b[i] * t;
    return c;
  };
}

function isNumberArray$1(x) {
  return ArrayBuffer.isView(x) && !(x instanceof DataView);
}

function genericArray$1(a, b) {
  var nb = b ? b.length : 0,
    na = a ? Math.min(nb, a.length) : 0,
    x = new Array(na),
    c = new Array(nb),
    i;

  for (i = 0; i < na; ++i) x[i] = interpolate$1(a[i], b[i]);
  for (; i < nb; ++i) c[i] = b[i];

  return function (t) {
    for (i = 0; i < na; ++i) c[i] = x[i](t);
    return c;
  };
}

function date$2(a, b) {
  var d = new Date();
  return (
    (a = +a),
    (b = +b),
    function (t) {
      return d.setTime(a * (1 - t) + b * t), d;
    }
  );
}

function number$2(a, b) {
  return (
    (a = +a),
    (b = +b),
    function (t) {
      return a * (1 - t) + b * t;
    }
  );
}

function object$1(a, b) {
  var i = {},
    c = {},
    k;

  if (a === null || typeof a !== "object") a = {};
  if (b === null || typeof b !== "object") b = {};

  for (k in b) {
    if (k in a) {
      i[k] = interpolate$1(a[k], b[k]);
    } else {
      c[k] = b[k];
    }
  }

  return function (t) {
    for (k in i) c[k] = i[k](t);
    return c;
  };
}

var reA$1 = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
  reB$1 = new RegExp(reA$1.source, "g");

function zero$1(b) {
  return function () {
    return b;
  };
}

function one$1(b) {
  return function (t) {
    return b(t) + "";
  };
}

function string$1(a, b) {
  var bi = (reA$1.lastIndex = reB$1.lastIndex = 0), // scan index for next number in b
    am, // current match in a
    bm, // current match in b
    bs, // string preceding current number in b, if any
    i = -1, // index in s
    s = [], // string constants and placeholders
    q = []; // number interpolators

  // Coerce inputs to strings.
  (a = a + ""), (b = b + "");

  // Interpolate pairs of numbers in a & b.
  while ((am = reA$1.exec(a)) && (bm = reB$1.exec(b))) {
    if ((bs = bm.index) > bi) {
      // a string precedes the next number in b
      bs = b.slice(bi, bs);
      if (s[i]) s[i] += bs;
      // coalesce with previous string
      else s[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) {
      // numbers in a & b match
      if (s[i]) s[i] += bm;
      // coalesce with previous string
      else s[++i] = bm;
    } else {
      // interpolate non-matching numbers
      s[++i] = null;
      q.push({ i: i, x: number$2(am, bm) });
    }
    bi = reB$1.lastIndex;
  }

  // Add remains of b.
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i]) s[i] += bs;
    // coalesce with previous string
    else s[++i] = bs;
  }

  // Special optimization for only a single match.
  // Otherwise, interpolate each of the numbers and rejoin the string.
  return s.length < 2
    ? q[0]
      ? one$1(q[0].x)
      : zero$1(b)
    : ((b = q.length),
      function (t) {
        for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
        return s.join("");
      });
}

function interpolate$1(a, b) {
  var t = typeof b,
    c;
  return b == null || t === "boolean"
    ? constant$1(b)
    : (t === "number"
        ? number$2
        : t === "string"
        ? (c = color$1(b))
          ? ((b = c), rgb$3)
          : string$1
        : b instanceof color$1
        ? rgb$3
        : b instanceof Date
        ? date$2
        : isNumberArray$1(b)
        ? numberArray$1
        : Array.isArray(b)
        ? genericArray$1
        : (typeof b.valueOf !== "function" &&
            typeof b.toString !== "function") ||
          isNaN(b)
        ? object$1
        : number$2)(a, b);
}

function ramp(scheme) {
  return rgbBasis(scheme[scheme.length - 1]);
}

var scheme = new Array(3)
  .concat(
    "d8b365f5f5f55ab4ac",
    "a6611adfc27d80cdc1018571",
    "a6611adfc27df5f5f580cdc1018571",
    "8c510ad8b365f6e8c3c7eae55ab4ac01665e",
    "8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e",
    "8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e",
    "8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e",
    "5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30",
    "5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30"
  )
  .map(colors);

ramp(scheme);

var scheme$1 = new Array(3)
  .concat(
    "af8dc3f7f7f77fbf7b",
    "7b3294c2a5cfa6dba0008837",
    "7b3294c2a5cff7f7f7a6dba0008837",
    "762a83af8dc3e7d4e8d9f0d37fbf7b1b7837",
    "762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837",
    "762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837",
    "762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837",
    "40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b",
    "40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b"
  )
  .map(colors);

ramp(scheme$1);

var scheme$2 = new Array(3)
  .concat(
    "e9a3c9f7f7f7a1d76a",
    "d01c8bf1b6dab8e1864dac26",
    "d01c8bf1b6daf7f7f7b8e1864dac26",
    "c51b7de9a3c9fde0efe6f5d0a1d76a4d9221",
    "c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221",
    "c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221",
    "c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221",
    "8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419",
    "8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419"
  )
  .map(colors);

ramp(scheme$2);

var scheme$3 = new Array(3)
  .concat(
    "998ec3f7f7f7f1a340",
    "5e3c99b2abd2fdb863e66101",
    "5e3c99b2abd2f7f7f7fdb863e66101",
    "542788998ec3d8daebfee0b6f1a340b35806",
    "542788998ec3d8daebf7f7f7fee0b6f1a340b35806",
    "5427888073acb2abd2d8daebfee0b6fdb863e08214b35806",
    "5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806",
    "2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08",
    "2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08"
  )
  .map(colors);

ramp(scheme$3);

var scheme$4 = new Array(3)
  .concat(
    "ef8a62f7f7f767a9cf",
    "ca0020f4a58292c5de0571b0",
    "ca0020f4a582f7f7f792c5de0571b0",
    "b2182bef8a62fddbc7d1e5f067a9cf2166ac",
    "b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac",
    "b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac",
    "b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac",
    "67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061",
    "67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061"
  )
  .map(colors);

ramp(scheme$4);

var scheme$5 = new Array(3)
  .concat(
    "ef8a62ffffff999999",
    "ca0020f4a582bababa404040",
    "ca0020f4a582ffffffbababa404040",
    "b2182bef8a62fddbc7e0e0e09999994d4d4d",
    "b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d",
    "b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d",
    "b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d",
    "67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a",
    "67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a"
  )
  .map(colors);

ramp(scheme$5);

var scheme$6 = new Array(3)
  .concat(
    "fc8d59ffffbf91bfdb",
    "d7191cfdae61abd9e92c7bb6",
    "d7191cfdae61ffffbfabd9e92c7bb6",
    "d73027fc8d59fee090e0f3f891bfdb4575b4",
    "d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4",
    "d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4",
    "d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4",
    "a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695",
    "a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695"
  )
  .map(colors);

ramp(scheme$6);

var scheme$7 = new Array(3)
  .concat(
    "fc8d59ffffbf91cf60",
    "d7191cfdae61a6d96a1a9641",
    "d7191cfdae61ffffbfa6d96a1a9641",
    "d73027fc8d59fee08bd9ef8b91cf601a9850",
    "d73027fc8d59fee08bffffbfd9ef8b91cf601a9850",
    "d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850",
    "d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850",
    "a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837",
    "a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837"
  )
  .map(colors);

ramp(scheme$7);

var scheme$8 = new Array(3)
  .concat(
    "fc8d59ffffbf99d594",
    "d7191cfdae61abdda42b83ba",
    "d7191cfdae61ffffbfabdda42b83ba",
    "d53e4ffc8d59fee08be6f59899d5943288bd",
    "d53e4ffc8d59fee08bffffbfe6f59899d5943288bd",
    "d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd",
    "d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd",
    "9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2",
    "9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2"
  )
  .map(colors);

ramp(scheme$8);

var scheme$9 = new Array(3)
  .concat(
    "e5f5f999d8c92ca25f",
    "edf8fbb2e2e266c2a4238b45",
    "edf8fbb2e2e266c2a42ca25f006d2c",
    "edf8fbccece699d8c966c2a42ca25f006d2c",
    "edf8fbccece699d8c966c2a441ae76238b45005824",
    "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824",
    "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b"
  )
  .map(colors);

ramp(scheme$9);

var scheme$a = new Array(3)
  .concat(
    "e0ecf49ebcda8856a7",
    "edf8fbb3cde38c96c688419d",
    "edf8fbb3cde38c96c68856a7810f7c",
    "edf8fbbfd3e69ebcda8c96c68856a7810f7c",
    "edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b",
    "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b",
    "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b"
  )
  .map(colors);

ramp(scheme$a);

var scheme$b = new Array(3)
  .concat(
    "e0f3dba8ddb543a2ca",
    "f0f9e8bae4bc7bccc42b8cbe",
    "f0f9e8bae4bc7bccc443a2ca0868ac",
    "f0f9e8ccebc5a8ddb57bccc443a2ca0868ac",
    "f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e",
    "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e",
    "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081"
  )
  .map(colors);

ramp(scheme$b);

var scheme$c = new Array(3)
  .concat(
    "fee8c8fdbb84e34a33",
    "fef0d9fdcc8afc8d59d7301f",
    "fef0d9fdcc8afc8d59e34a33b30000",
    "fef0d9fdd49efdbb84fc8d59e34a33b30000",
    "fef0d9fdd49efdbb84fc8d59ef6548d7301f990000",
    "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000",
    "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000"
  )
  .map(colors);

ramp(scheme$c);

var scheme$d = new Array(3)
  .concat(
    "ece2f0a6bddb1c9099",
    "f6eff7bdc9e167a9cf02818a",
    "f6eff7bdc9e167a9cf1c9099016c59",
    "f6eff7d0d1e6a6bddb67a9cf1c9099016c59",
    "f6eff7d0d1e6a6bddb67a9cf3690c002818a016450",
    "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450",
    "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636"
  )
  .map(colors);

ramp(scheme$d);

var scheme$e = new Array(3)
  .concat(
    "ece7f2a6bddb2b8cbe",
    "f1eef6bdc9e174a9cf0570b0",
    "f1eef6bdc9e174a9cf2b8cbe045a8d",
    "f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d",
    "f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b",
    "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b",
    "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858"
  )
  .map(colors);

ramp(scheme$e);

var scheme$f = new Array(3)
  .concat(
    "e7e1efc994c7dd1c77",
    "f1eef6d7b5d8df65b0ce1256",
    "f1eef6d7b5d8df65b0dd1c77980043",
    "f1eef6d4b9dac994c7df65b0dd1c77980043",
    "f1eef6d4b9dac994c7df65b0e7298ace125691003f",
    "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f",
    "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f"
  )
  .map(colors);

ramp(scheme$f);

var scheme$g = new Array(3)
  .concat(
    "fde0ddfa9fb5c51b8a",
    "feebe2fbb4b9f768a1ae017e",
    "feebe2fbb4b9f768a1c51b8a7a0177",
    "feebe2fcc5c0fa9fb5f768a1c51b8a7a0177",
    "feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177",
    "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177",
    "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a"
  )
  .map(colors);

ramp(scheme$g);

var scheme$h = new Array(3)
  .concat(
    "edf8b17fcdbb2c7fb8",
    "ffffcca1dab441b6c4225ea8",
    "ffffcca1dab441b6c42c7fb8253494",
    "ffffccc7e9b47fcdbb41b6c42c7fb8253494",
    "ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84",
    "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84",
    "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58"
  )
  .map(colors);

ramp(scheme$h);

var scheme$i = new Array(3)
  .concat(
    "f7fcb9addd8e31a354",
    "ffffccc2e69978c679238443",
    "ffffccc2e69978c67931a354006837",
    "ffffccd9f0a3addd8e78c67931a354006837",
    "ffffccd9f0a3addd8e78c67941ab5d238443005a32",
    "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32",
    "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529"
  )
  .map(colors);

ramp(scheme$i);

var scheme$j = new Array(3)
  .concat(
    "fff7bcfec44fd95f0e",
    "ffffd4fed98efe9929cc4c02",
    "ffffd4fed98efe9929d95f0e993404",
    "ffffd4fee391fec44ffe9929d95f0e993404",
    "ffffd4fee391fec44ffe9929ec7014cc4c028c2d04",
    "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04",
    "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506"
  )
  .map(colors);

ramp(scheme$j);

var scheme$k = new Array(3)
  .concat(
    "ffeda0feb24cf03b20",
    "ffffb2fecc5cfd8d3ce31a1c",
    "ffffb2fecc5cfd8d3cf03b20bd0026",
    "ffffb2fed976feb24cfd8d3cf03b20bd0026",
    "ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026",
    "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026",
    "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026"
  )
  .map(colors);

ramp(scheme$k);

var scheme$l = new Array(3)
  .concat(
    "deebf79ecae13182bd",
    "eff3ffbdd7e76baed62171b5",
    "eff3ffbdd7e76baed63182bd08519c",
    "eff3ffc6dbef9ecae16baed63182bd08519c",
    "eff3ffc6dbef9ecae16baed64292c62171b5084594",
    "f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594",
    "f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b"
  )
  .map(colors);

ramp(scheme$l);

var scheme$m = new Array(3)
  .concat(
    "e5f5e0a1d99b31a354",
    "edf8e9bae4b374c476238b45",
    "edf8e9bae4b374c47631a354006d2c",
    "edf8e9c7e9c0a1d99b74c47631a354006d2c",
    "edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32",
    "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32",
    "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b"
  )
  .map(colors);

ramp(scheme$m);

var scheme$n = new Array(3)
  .concat(
    "f0f0f0bdbdbd636363",
    "f7f7f7cccccc969696525252",
    "f7f7f7cccccc969696636363252525",
    "f7f7f7d9d9d9bdbdbd969696636363252525",
    "f7f7f7d9d9d9bdbdbd969696737373525252252525",
    "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525",
    "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000"
  )
  .map(colors);

ramp(scheme$n);

var scheme$o = new Array(3)
  .concat(
    "efedf5bcbddc756bb1",
    "f2f0f7cbc9e29e9ac86a51a3",
    "f2f0f7cbc9e29e9ac8756bb154278f",
    "f2f0f7dadaebbcbddc9e9ac8756bb154278f",
    "f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486",
    "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486",
    "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d"
  )
  .map(colors);

ramp(scheme$o);

var scheme$p = new Array(3)
  .concat(
    "fee0d2fc9272de2d26",
    "fee5d9fcae91fb6a4acb181d",
    "fee5d9fcae91fb6a4ade2d26a50f15",
    "fee5d9fcbba1fc9272fb6a4ade2d26a50f15",
    "fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d",
    "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d",
    "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d"
  )
  .map(colors);

ramp(scheme$p);

var scheme$q = new Array(3)
  .concat(
    "fee6cefdae6be6550d",
    "feeddefdbe85fd8d3cd94701",
    "feeddefdbe85fd8d3ce6550da63603",
    "feeddefdd0a2fdae6bfd8d3ce6550da63603",
    "feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04",
    "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04",
    "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704"
  )
  .map(colors);

ramp(scheme$q);

var pi = Math.PI,
  tau = 2 * pi,
  epsilon = 1e-6,
  tauEpsilon = tau - epsilon;

function Path() {
  this._x0 = this._y0 = this._x1 = this._y1 = null; // start of current subpath // end of current subpath
  this._ = "";
}

function path() {
  return new Path();
}

Path.prototype = path.prototype = {
  constructor: Path,
  moveTo: function (x, y) {
    this._ +=
      "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y);
  },
  closePath: function () {
    if (this._x1 !== null) {
      (this._x1 = this._x0), (this._y1 = this._y0);
      this._ += "Z";
    }
  },
  lineTo: function (x, y) {
    this._ += "L" + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  quadraticCurveTo: function (x1, y1, x, y) {
    this._ +=
      "Q" + +x1 + "," + +y1 + "," + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  bezierCurveTo: function (x1, y1, x2, y2, x, y) {
    this._ +=
      "C" +
      +x1 +
      "," +
      +y1 +
      "," +
      +x2 +
      "," +
      +y2 +
      "," +
      (this._x1 = +x) +
      "," +
      (this._y1 = +y);
  },
  arcTo: function (x1, y1, x2, y2, r) {
    (x1 = +x1), (y1 = +y1), (x2 = +x2), (y2 = +y2), (r = +r);
    var x0 = this._x1,
      y0 = this._y1,
      x21 = x2 - x1,
      y21 = y2 - y1,
      x01 = x0 - x1,
      y01 = y0 - y1,
      l01_2 = x01 * x01 + y01 * y01;

    // Is the radius negative? Error.
    if (r < 0) throw new Error("negative radius: " + r);

    // Is this path empty? Move to (x1,y1).
    if (this._x1 === null) {
      this._ += "M" + (this._x1 = x1) + "," + (this._y1 = y1);
    }

    // Or, is (x1,y1) coincident with (x0,y0)? Do nothing.
    else if (!(l01_2 > epsilon));
    else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon) || !r) {
      // Or, are (x0,y0), (x1,y1) and (x2,y2) collinear?
      // Equivalently, is (x1,y1) coincident with (x2,y2)?
      // Or, is the radius zero? Line to (x1,y1).
      this._ += "L" + (this._x1 = x1) + "," + (this._y1 = y1);
    }

    // Otherwise, draw an arc!
    else {
      var x20 = x2 - x0,
        y20 = y2 - y0,
        l21_2 = x21 * x21 + y21 * y21,
        l20_2 = x20 * x20 + y20 * y20,
        l21 = Math.sqrt(l21_2),
        l01 = Math.sqrt(l01_2),
        l =
          r *
          Math.tan(
            (pi - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2
          ),
        t01 = l / l01,
        t21 = l / l21;

      // If the start tangent is not coincident with (x0,y0), line to.
      if (Math.abs(t01 - 1) > epsilon) {
        this._ += "L" + (x1 + t01 * x01) + "," + (y1 + t01 * y01);
      }

      this._ +=
        "A" +
        r +
        "," +
        r +
        ",0,0," +
        +(y01 * x20 > x01 * y20) +
        "," +
        (this._x1 = x1 + t21 * x21) +
        "," +
        (this._y1 = y1 + t21 * y21);
    }
  },
  arc: function (x, y, r, a0, a1, ccw) {
    (x = +x), (y = +y), (r = +r), (ccw = !!ccw);
    var dx = r * Math.cos(a0),
      dy = r * Math.sin(a0),
      x0 = x + dx,
      y0 = y + dy,
      cw = 1 ^ ccw,
      da = ccw ? a0 - a1 : a1 - a0;

    // Is the radius negative? Error.
    if (r < 0) throw new Error("negative radius: " + r);

    // Is this path empty? Move to (x0,y0).
    if (this._x1 === null) {
      this._ += "M" + x0 + "," + y0;
    }

    // Or, is (x0,y0) not coincident with the previous point? Line to (x0,y0).
    else if (
      Math.abs(this._x1 - x0) > epsilon ||
      Math.abs(this._y1 - y0) > epsilon
    ) {
      this._ += "L" + x0 + "," + y0;
    }

    // Is this arc empty? We’re done.
    if (!r) return;

    // Does the angle go the wrong way? Flip the direction.
    if (da < 0) da = (da % tau) + tau;

    // Is this a complete circle? Draw two arcs to complete the circle.
    if (da > tauEpsilon) {
      this._ +=
        "A" +
        r +
        "," +
        r +
        ",0,1," +
        cw +
        "," +
        (x - dx) +
        "," +
        (y - dy) +
        "A" +
        r +
        "," +
        r +
        ",0,1," +
        cw +
        "," +
        (this._x1 = x0) +
        "," +
        (this._y1 = y0);
    }

    // Is this arc non-empty? Draw an arc!
    else if (da > epsilon) {
      this._ +=
        "A" +
        r +
        "," +
        r +
        ",0," +
        +(da >= pi) +
        "," +
        cw +
        "," +
        (this._x1 = x + r * Math.cos(a1)) +
        "," +
        (this._y1 = y + r * Math.sin(a1));
    }
  },
  rect: function (x, y, w, h) {
    this._ +=
      "M" +
      (this._x0 = this._x1 = +x) +
      "," +
      (this._y0 = this._y1 = +y) +
      "h" +
      +w +
      "v" +
      +h +
      "h" +
      -w +
      "Z";
  },
  toString: function () {
    return this._;
  },
};

function constant$2(x) {
  return function constant() {
    return x;
  };
}

var epsilon$1 = 1e-12;

function Linear(context) {
  this._context = context;
}

Linear.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    this._point = 0;
  },
  lineEnd: function () {
    if (this._line || (this._line !== 0 && this._point === 1))
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function (x, y) {
    (x = +x), (y = +y);
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
        break;
      case 1:
        this._point = 2; // proceed
      default:
        this._context.lineTo(x, y);
        break;
    }
  },
};

function curveLinear(context) {
  return new Linear(context);
}

function x$1(p) {
  return p[0];
}

function y$1(p) {
  return p[1];
}

function line() {
  var x = x$1,
    y = y$1,
    defined = constant$2(true),
    context = null,
    curve = curveLinear,
    output = null;

  function line(data) {
    var i,
      n = data.length,
      d,
      defined0 = false,
      buffer;

    if (context == null) output = curve((buffer = path()));

    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined((d = data[i]), i, data)) === defined0) {
        if ((defined0 = !defined0)) output.lineStart();
        else output.lineEnd();
      }
      if (defined0) output.point(+x(d, i, data), +y(d, i, data));
    }

    if (buffer) return (output = null), buffer + "" || null;
  }

  line.x = function (_) {
    return arguments.length
      ? ((x = typeof _ === "function" ? _ : constant$2(+_)), line)
      : x;
  };

  line.y = function (_) {
    return arguments.length
      ? ((y = typeof _ === "function" ? _ : constant$2(+_)), line)
      : y;
  };

  line.defined = function (_) {
    return arguments.length
      ? ((defined = typeof _ === "function" ? _ : constant$2(!!_)), line)
      : defined;
  };

  line.curve = function (_) {
    return arguments.length
      ? ((curve = _), context != null && (output = curve(context)), line)
      : curve;
  };

  line.context = function (_) {
    return arguments.length
      ? (_ == null
          ? (context = output = null)
          : (output = curve((context = _))),
        line)
      : context;
  };

  return line;
}

function area() {
  var x0 = x$1,
    x1 = null,
    y0 = constant$2(0),
    y1 = y$1,
    defined = constant$2(true),
    context = null,
    curve = curveLinear,
    output = null;

  function area(data) {
    var i,
      j,
      k,
      n = data.length,
      d,
      defined0 = false,
      buffer,
      x0z = new Array(n),
      y0z = new Array(n);

    if (context == null) output = curve((buffer = path()));

    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined((d = data[i]), i, data)) === defined0) {
        if ((defined0 = !defined0)) {
          j = i;
          output.areaStart();
          output.lineStart();
        } else {
          output.lineEnd();
          output.lineStart();
          for (k = i - 1; k >= j; --k) {
            output.point(x0z[k], y0z[k]);
          }
          output.lineEnd();
          output.areaEnd();
        }
      }
      if (defined0) {
        (x0z[i] = +x0(d, i, data)), (y0z[i] = +y0(d, i, data));
        output.point(
          x1 ? +x1(d, i, data) : x0z[i],
          y1 ? +y1(d, i, data) : y0z[i]
        );
      }
    }

    if (buffer) return (output = null), buffer + "" || null;
  }

  function arealine() {
    return line().defined(defined).curve(curve).context(context);
  }

  area.x = function (_) {
    return arguments.length
      ? ((x0 = typeof _ === "function" ? _ : constant$2(+_)), (x1 = null), area)
      : x0;
  };

  area.x0 = function (_) {
    return arguments.length
      ? ((x0 = typeof _ === "function" ? _ : constant$2(+_)), area)
      : x0;
  };

  area.x1 = function (_) {
    return arguments.length
      ? ((x1 = _ == null ? null : typeof _ === "function" ? _ : constant$2(+_)),
        area)
      : x1;
  };

  area.y = function (_) {
    return arguments.length
      ? ((y0 = typeof _ === "function" ? _ : constant$2(+_)), (y1 = null), area)
      : y0;
  };

  area.y0 = function (_) {
    return arguments.length
      ? ((y0 = typeof _ === "function" ? _ : constant$2(+_)), area)
      : y0;
  };

  area.y1 = function (_) {
    return arguments.length
      ? ((y1 = _ == null ? null : typeof _ === "function" ? _ : constant$2(+_)),
        area)
      : y1;
  };

  area.lineX0 = area.lineY0 = function () {
    return arealine().x(x0).y(y0);
  };

  area.lineY1 = function () {
    return arealine().x(x0).y(y1);
  };

  area.lineX1 = function () {
    return arealine().x(x1).y(y0);
  };

  area.defined = function (_) {
    return arguments.length
      ? ((defined = typeof _ === "function" ? _ : constant$2(!!_)), area)
      : defined;
  };

  area.curve = function (_) {
    return arguments.length
      ? ((curve = _), context != null && (output = curve(context)), area)
      : curve;
  };

  area.context = function (_) {
    return arguments.length
      ? (_ == null
          ? (context = output = null)
          : (output = curve((context = _))),
        area)
      : context;
  };

  return area;
}

function noop() {}

function point$1(that, x, y) {
  that._context.bezierCurveTo(
    (2 * that._x0 + that._x1) / 3,
    (2 * that._y0 + that._y1) / 3,
    (that._x0 + 2 * that._x1) / 3,
    (that._y0 + 2 * that._y1) / 3,
    (that._x0 + 4 * that._x1 + x) / 6,
    (that._y0 + 4 * that._y1 + y) / 6
  );
}

function Basis(context) {
  this._context = context;
}

Basis.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function () {
    switch (this._point) {
      case 3:
        point$1(this, this._x1, this._y1); // proceed
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
    }
    if (this._line || (this._line !== 0 && this._point === 1))
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function (x, y) {
    (x = +x), (y = +y);
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        this._context.lineTo(
          (5 * this._x0 + this._x1) / 6,
          (5 * this._y0 + this._y1) / 6
        ); // proceed
      default:
        point$1(this, x, y);
        break;
    }
    (this._x0 = this._x1), (this._x1 = x);
    (this._y0 = this._y1), (this._y1 = y);
  },
};

function curveBasis(context) {
  return new Basis(context);
}

function BasisClosed(context) {
  this._context = context;
}

BasisClosed.prototype = {
  areaStart: noop,
  areaEnd: noop,
  lineStart: function () {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN;
    this._point = 0;
  },
  lineEnd: function () {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo(
          (this._x2 + 2 * this._x3) / 3,
          (this._y2 + 2 * this._y3) / 3
        );
        this._context.lineTo(
          (this._x3 + 2 * this._x2) / 3,
          (this._y3 + 2 * this._y2) / 3
        );
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2);
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function (x, y) {
    (x = +x), (y = +y);
    switch (this._point) {
      case 0:
        this._point = 1;
        (this._x2 = x), (this._y2 = y);
        break;
      case 1:
        this._point = 2;
        (this._x3 = x), (this._y3 = y);
        break;
      case 2:
        this._point = 3;
        (this._x4 = x), (this._y4 = y);
        this._context.moveTo(
          (this._x0 + 4 * this._x1 + x) / 6,
          (this._y0 + 4 * this._y1 + y) / 6
        );
        break;
      default:
        point$1(this, x, y);
        break;
    }
    (this._x0 = this._x1), (this._x1 = x);
    (this._y0 = this._y1), (this._y1 = y);
  },
};

function curveBasisClosed(context) {
  return new BasisClosed(context);
}

function BasisOpen(context) {
  this._context = context;
}

BasisOpen.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function () {
    if (this._line || (this._line !== 0 && this._point === 3))
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function (x, y) {
    (x = +x), (y = +y);
    switch (this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        var x0 = (this._x0 + 4 * this._x1 + x) / 6,
          y0 = (this._y0 + 4 * this._y1 + y) / 6;
        this._line
          ? this._context.lineTo(x0, y0)
          : this._context.moveTo(x0, y0);
        break;
      case 3:
        this._point = 4; // proceed
      default:
        point$1(this, x, y);
        break;
    }
    (this._x0 = this._x1), (this._x1 = x);
    (this._y0 = this._y1), (this._y1 = y);
  },
};

function curveBasisOpen(context) {
  return new BasisOpen(context);
}

function Bundle(context, beta) {
  this._basis = new Basis(context);
  this._beta = beta;
}

Bundle.prototype = {
  lineStart: function () {
    this._x = [];
    this._y = [];
    this._basis.lineStart();
  },
  lineEnd: function () {
    var x = this._x,
      y = this._y,
      j = x.length - 1;

    if (j > 0) {
      var x0 = x[0],
        y0 = y[0],
        dx = x[j] - x0,
        dy = y[j] - y0,
        i = -1,
        t;

      while (++i <= j) {
        t = i / j;
        this._basis.point(
          this._beta * x[i] + (1 - this._beta) * (x0 + t * dx),
          this._beta * y[i] + (1 - this._beta) * (y0 + t * dy)
        );
      }
    }

    this._x = this._y = null;
    this._basis.lineEnd();
  },
  point: function (x, y) {
    this._x.push(+x);
    this._y.push(+y);
  },
};

var curveBundle = (function custom(beta) {
  function bundle(context) {
    return beta === 1 ? new Basis(context) : new Bundle(context, beta);
  }

  bundle.beta = function (beta) {
    return custom(+beta);
  };

  return bundle;
})(0.85);

function point$2(that, x, y) {
  that._context.bezierCurveTo(
    that._x1 + that._k * (that._x2 - that._x0),
    that._y1 + that._k * (that._y2 - that._y0),
    that._x2 + that._k * (that._x1 - x),
    that._y2 + that._k * (that._y1 - y),
    that._x2,
    that._y2
  );
}

function Cardinal(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}

Cardinal.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
    this._point = 0;
  },
  lineEnd: function () {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        point$2(this, this._x1, this._y1);
        break;
    }
    if (this._line || (this._line !== 0 && this._point === 1))
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function (x, y) {
    (x = +x), (y = +y);
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
        break;
      case 1:
        this._point = 2;
        (this._x1 = x), (this._y1 = y);
        break;
      case 2:
        this._point = 3; // proceed
      default:
        point$2(this, x, y);
        break;
    }
    (this._x0 = this._x1), (this._x1 = this._x2), (this._x2 = x);
    (this._y0 = this._y1), (this._y1 = this._y2), (this._y2 = y);
  },
};

var curveCardinal = (function custom(tension) {
  function cardinal(context) {
    return new Cardinal(context, tension);
  }

  cardinal.tension = function (tension) {
    return custom(+tension);
  };

  return cardinal;
})(0);

function CardinalClosed(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}

CardinalClosed.prototype = {
  areaStart: noop,
  areaEnd: noop,
  lineStart: function () {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
    this._point = 0;
  },
  lineEnd: function () {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function (x, y) {
    (x = +x), (y = +y);
    switch (this._point) {
      case 0:
        this._point = 1;
        (this._x3 = x), (this._y3 = y);
        break;
      case 1:
        this._point = 2;
        this._context.moveTo((this._x4 = x), (this._y4 = y));
        break;
      case 2:
        this._point = 3;
        (this._x5 = x), (this._y5 = y);
        break;
      default:
        point$2(this, x, y);
        break;
    }
    (this._x0 = this._x1), (this._x1 = this._x2), (this._x2 = x);
    (this._y0 = this._y1), (this._y1 = this._y2), (this._y2 = y);
  },
};

var curveCardinalClosed = (function custom(tension) {
  function cardinal(context) {
    return new CardinalClosed(context, tension);
  }

  cardinal.tension = function (tension) {
    return custom(+tension);
  };

  return cardinal;
})(0);

function CardinalOpen(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}

CardinalOpen.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
    this._point = 0;
  },
  lineEnd: function () {
    if (this._line || (this._line !== 0 && this._point === 3))
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function (x, y) {
    (x = +x), (y = +y);
    switch (this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        this._line
          ? this._context.lineTo(this._x2, this._y2)
          : this._context.moveTo(this._x2, this._y2);
        break;
      case 3:
        this._point = 4; // proceed
      default:
        point$2(this, x, y);
        break;
    }
    (this._x0 = this._x1), (this._x1 = this._x2), (this._x2 = x);
    (this._y0 = this._y1), (this._y1 = this._y2), (this._y2 = y);
  },
};

var curveCardinalOpen = (function custom(tension) {
  function cardinal(context) {
    return new CardinalOpen(context, tension);
  }

  cardinal.tension = function (tension) {
    return custom(+tension);
  };

  return cardinal;
})(0);

function point$3(that, x, y) {
  var x1 = that._x1,
    y1 = that._y1,
    x2 = that._x2,
    y2 = that._y2;

  if (that._l01_a > epsilon$1) {
    var a = 2 * that._l01_2a + 3 * that._l01_a * that._l12_a + that._l12_2a,
      n = 3 * that._l01_a * (that._l01_a + that._l12_a);
    x1 = (x1 * a - that._x0 * that._l12_2a + that._x2 * that._l01_2a) / n;
    y1 = (y1 * a - that._y0 * that._l12_2a + that._y2 * that._l01_2a) / n;
  }

  if (that._l23_a > epsilon$1) {
    var b = 2 * that._l23_2a + 3 * that._l23_a * that._l12_a + that._l12_2a,
      m = 3 * that._l23_a * (that._l23_a + that._l12_a);
    x2 = (x2 * b + that._x1 * that._l23_2a - x * that._l12_2a) / m;
    y2 = (y2 * b + that._y1 * that._l23_2a - y * that._l12_2a) / m;
  }

  that._context.bezierCurveTo(x1, y1, x2, y2, that._x2, that._y2);
}

function CatmullRom(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}

CatmullRom.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
    this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function () {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        this.point(this._x2, this._y2);
        break;
    }
    if (this._line || (this._line !== 0 && this._point === 1))
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function (x, y) {
    (x = +x), (y = +y);

    if (this._point) {
      var x23 = this._x2 - x,
        y23 = this._y2 - y;
      this._l23_a = Math.sqrt(
        (this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha))
      );
    }

    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3; // proceed
      default:
        point$3(this, x, y);
        break;
    }

    (this._l01_a = this._l12_a), (this._l12_a = this._l23_a);
    (this._l01_2a = this._l12_2a), (this._l12_2a = this._l23_2a);
    (this._x0 = this._x1), (this._x1 = this._x2), (this._x2 = x);
    (this._y0 = this._y1), (this._y1 = this._y2), (this._y2 = y);
  },
};

var curveCatmullRom = (function custom(alpha) {
  function catmullRom(context) {
    return alpha ? new CatmullRom(context, alpha) : new Cardinal(context, 0);
  }

  catmullRom.alpha = function (alpha) {
    return custom(+alpha);
  };

  return catmullRom;
})(0.5);

function CatmullRomClosed(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}

CatmullRomClosed.prototype = {
  areaStart: noop,
  areaEnd: noop,
  lineStart: function () {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
    this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function () {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function (x, y) {
    (x = +x), (y = +y);

    if (this._point) {
      var x23 = this._x2 - x,
        y23 = this._y2 - y;
      this._l23_a = Math.sqrt(
        (this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha))
      );
    }

    switch (this._point) {
      case 0:
        this._point = 1;
        (this._x3 = x), (this._y3 = y);
        break;
      case 1:
        this._point = 2;
        this._context.moveTo((this._x4 = x), (this._y4 = y));
        break;
      case 2:
        this._point = 3;
        (this._x5 = x), (this._y5 = y);
        break;
      default:
        point$3(this, x, y);
        break;
    }

    (this._l01_a = this._l12_a), (this._l12_a = this._l23_a);
    (this._l01_2a = this._l12_2a), (this._l12_2a = this._l23_2a);
    (this._x0 = this._x1), (this._x1 = this._x2), (this._x2 = x);
    (this._y0 = this._y1), (this._y1 = this._y2), (this._y2 = y);
  },
};

var curveCatmullRomClosed = (function custom(alpha) {
  function catmullRom(context) {
    return alpha
      ? new CatmullRomClosed(context, alpha)
      : new CardinalClosed(context, 0);
  }

  catmullRom.alpha = function (alpha) {
    return custom(+alpha);
  };

  return catmullRom;
})(0.5);

function CatmullRomOpen(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}

CatmullRomOpen.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
    this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function () {
    if (this._line || (this._line !== 0 && this._point === 3))
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function (x, y) {
    (x = +x), (y = +y);

    if (this._point) {
      var x23 = this._x2 - x,
        y23 = this._y2 - y;
      this._l23_a = Math.sqrt(
        (this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha))
      );
    }

    switch (this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        this._line
          ? this._context.lineTo(this._x2, this._y2)
          : this._context.moveTo(this._x2, this._y2);
        break;
      case 3:
        this._point = 4; // proceed
      default:
        point$3(this, x, y);
        break;
    }

    (this._l01_a = this._l12_a), (this._l12_a = this._l23_a);
    (this._l01_2a = this._l12_2a), (this._l12_2a = this._l23_2a);
    (this._x0 = this._x1), (this._x1 = this._x2), (this._x2 = x);
    (this._y0 = this._y1), (this._y1 = this._y2), (this._y2 = y);
  },
};

var curveCatmullRomOpen = (function custom(alpha) {
  function catmullRom(context) {
    return alpha
      ? new CatmullRomOpen(context, alpha)
      : new CardinalOpen(context, 0);
  }

  catmullRom.alpha = function (alpha) {
    return custom(+alpha);
  };

  return catmullRom;
})(0.5);

function LinearClosed(context) {
  this._context = context;
}

LinearClosed.prototype = {
  areaStart: noop,
  areaEnd: noop,
  lineStart: function () {
    this._point = 0;
  },
  lineEnd: function () {
    if (this._point) this._context.closePath();
  },
  point: function (x, y) {
    (x = +x), (y = +y);
    if (this._point) this._context.lineTo(x, y);
    else (this._point = 1), this._context.moveTo(x, y);
  },
};

function curveLinearClosed(context) {
  return new LinearClosed(context);
}

function sign(x) {
  return x < 0 ? -1 : 1;
}

// Calculate the slopes of the tangents (Hermite-type interpolation) based on
// the following paper: Steffen, M. 1990. A Simple Method for Monotonic
// Interpolation in One Dimension. Astronomy and Astrophysics, Vol. 239, NO.
// NOV(II), P. 443, 1990.
function slope3(that, x2, y2) {
  var h0 = that._x1 - that._x0,
    h1 = x2 - that._x1,
    s0 = (that._y1 - that._y0) / (h0 || (h1 < 0 && -0)),
    s1 = (y2 - that._y1) / (h1 || (h0 < 0 && -0)),
    p = (s0 * h1 + s1 * h0) / (h0 + h1);
  return (
    (sign(s0) + sign(s1)) *
      Math.min(Math.abs(s0), Math.abs(s1), 0.5 * Math.abs(p)) || 0
  );
}

// Calculate a one-sided slope.
function slope2(that, t) {
  var h = that._x1 - that._x0;
  return h ? ((3 * (that._y1 - that._y0)) / h - t) / 2 : t;
}

// According to https://en.wikipedia.org/wiki/Cubic_Hermite_spline#Representations
// "you can express cubic Hermite interpolation in terms of cubic Bézier curves
// with respect to the four values p0, p0 + m0 / 3, p1 - m1 / 3, p1".
function point$4(that, t0, t1) {
  var x0 = that._x0,
    y0 = that._y0,
    x1 = that._x1,
    y1 = that._y1,
    dx = (x1 - x0) / 3;
  that._context.bezierCurveTo(
    x0 + dx,
    y0 + dx * t0,
    x1 - dx,
    y1 - dx * t1,
    x1,
    y1
  );
}

function MonotoneX(context) {
  this._context = context;
}

MonotoneX.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN;
    this._point = 0;
  },
  lineEnd: function () {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        point$4(this, this._t0, slope2(this, this._t0));
        break;
    }
    if (this._line || (this._line !== 0 && this._point === 1))
      this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function (x, y) {
    var t1 = NaN;

    (x = +x), (y = +y);
    if (x === this._x1 && y === this._y1) return; // Ignore coincident points.
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        point$4(this, slope2(this, (t1 = slope3(this, x, y))), t1);
        break;
      default:
        point$4(this, this._t0, (t1 = slope3(this, x, y)));
        break;
    }

    (this._x0 = this._x1), (this._x1 = x);
    (this._y0 = this._y1), (this._y1 = y);
    this._t0 = t1;
  },
};

function MonotoneY(context) {
  this._context = new ReflectContext(context);
}

(MonotoneY.prototype = Object.create(MonotoneX.prototype)).point = function (
  x,
  y
) {
  MonotoneX.prototype.point.call(this, y, x);
};

function ReflectContext(context) {
  this._context = context;
}

ReflectContext.prototype = {
  moveTo: function (x, y) {
    this._context.moveTo(y, x);
  },
  closePath: function () {
    this._context.closePath();
  },
  lineTo: function (x, y) {
    this._context.lineTo(y, x);
  },
  bezierCurveTo: function (x1, y1, x2, y2, x, y) {
    this._context.bezierCurveTo(y1, x1, y2, x2, y, x);
  },
};

function monotoneX(context) {
  return new MonotoneX(context);
}

function monotoneY(context) {
  return new MonotoneY(context);
}

function Natural(context) {
  this._context = context;
}

Natural.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    this._x = [];
    this._y = [];
  },
  lineEnd: function () {
    var x = this._x,
      y = this._y,
      n = x.length;

    if (n) {
      this._line
        ? this._context.lineTo(x[0], y[0])
        : this._context.moveTo(x[0], y[0]);
      if (n === 2) {
        this._context.lineTo(x[1], y[1]);
      } else {
        var px = controlPoints(x),
          py = controlPoints(y);
        for (var i0 = 0, i1 = 1; i1 < n; ++i0, ++i1) {
          this._context.bezierCurveTo(
            px[0][i0],
            py[0][i0],
            px[1][i0],
            py[1][i0],
            x[i1],
            y[i1]
          );
        }
      }
    }

    if (this._line || (this._line !== 0 && n === 1)) this._context.closePath();
    this._line = 1 - this._line;
    this._x = this._y = null;
  },
  point: function (x, y) {
    this._x.push(+x);
    this._y.push(+y);
  },
};

// See https://www.particleincell.com/2012/bezier-splines/ for derivation.
function controlPoints(x) {
  var i,
    n = x.length - 1,
    m,
    a = new Array(n),
    b = new Array(n),
    r = new Array(n);
  (a[0] = 0), (b[0] = 2), (r[0] = x[0] + 2 * x[1]);
  for (i = 1; i < n - 1; ++i)
    (a[i] = 1), (b[i] = 4), (r[i] = 4 * x[i] + 2 * x[i + 1]);
  (a[n - 1] = 2), (b[n - 1] = 7), (r[n - 1] = 8 * x[n - 1] + x[n]);
  for (i = 1; i < n; ++i)
    (m = a[i] / b[i - 1]), (b[i] -= m), (r[i] -= m * r[i - 1]);
  a[n - 1] = r[n - 1] / b[n - 1];
  for (i = n - 2; i >= 0; --i) a[i] = (r[i] - a[i + 1]) / b[i];
  b[n - 1] = (x[n] + a[n - 1]) / 2;
  for (i = 0; i < n - 1; ++i) b[i] = 2 * x[i + 1] - a[i + 1];
  return [a, b];
}

function curveNatural(context) {
  return new Natural(context);
}

function Step(context, t) {
  this._context = context;
  this._t = t;
}

Step.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    this._x = this._y = NaN;
    this._point = 0;
  },
  lineEnd: function () {
    if (0 < this._t && this._t < 1 && this._point === 2)
      this._context.lineTo(this._x, this._y);
    if (this._line || (this._line !== 0 && this._point === 1))
      this._context.closePath();
    if (this._line >= 0) (this._t = 1 - this._t), (this._line = 1 - this._line);
  },
  point: function (x, y) {
    (x = +x), (y = +y);
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
        break;
      case 1:
        this._point = 2; // proceed
      default: {
        if (this._t <= 0) {
          this._context.lineTo(this._x, y);
          this._context.lineTo(x, y);
        } else {
          var x1 = this._x * (1 - this._t) + x * this._t;
          this._context.lineTo(x1, this._y);
          this._context.lineTo(x1, y);
        }
        break;
      }
    }
    (this._x = x), (this._y = y);
  },
};

function curveStep(context) {
  return new Step(context, 0.5);
}

function stepBefore(context) {
  return new Step(context, 0);
}

function stepAfter(context) {
  return new Step(context, 1);
}

function stackOffsetNone(series, order) {
  if (!((n = series.length) > 1)) return;
  for (var i = 1, j, s0, s1 = series[order[0]], n, m = s1.length; i < n; ++i) {
    (s0 = s1), (s1 = series[order[i]]);
    for (j = 0; j < m; ++j) {
      s1[j][1] += s1[j][0] = isNaN(s0[j][1]) ? s0[j][0] : s0[j][1];
    }
  }
}

function stackOrderNone(series) {
  var n = series.length,
    o = new Array(n);
  while (--n >= 0) o[n] = n;
  return o;
}

function stackOffsetExpand(series, order) {
  if (!((n = series.length) > 0)) return;
  for (var i, n, j = 0, m = series[0].length, y; j < m; ++j) {
    for (y = i = 0; i < n; ++i) y += series[i][j][1] || 0;
    if (y) for (i = 0; i < n; ++i) series[i][j][1] /= y;
  }
  stackOffsetNone(series, order);
}

function stackOffsetDiverging(series, order) {
  if (!((n = series.length) > 0)) return;
  for (
    var i, j = 0, d, dy, yp, yn, n, m = series[order[0]].length;
    j < m;
    ++j
  ) {
    for (yp = yn = 0, i = 0; i < n; ++i) {
      if ((dy = (d = series[order[i]][j])[1] - d[0]) > 0) {
        (d[0] = yp), (d[1] = yp += dy);
      } else if (dy < 0) {
        (d[1] = yn), (d[0] = yn += dy);
      } else {
        (d[0] = 0), (d[1] = dy);
      }
    }
  }
}

function stackOffsetSilhouette(series, order) {
  if (!((n = series.length) > 0)) return;
  for (var j = 0, s0 = series[order[0]], n, m = s0.length; j < m; ++j) {
    for (var i = 0, y = 0; i < n; ++i) y += series[i][j][1] || 0;
    s0[j][1] += s0[j][0] = -y / 2;
  }
  stackOffsetNone(series, order);
}

function stackOffsetWiggle(series, order) {
  if (!((n = series.length) > 0) || !((m = (s0 = series[order[0]]).length) > 0))
    return;
  for (var y = 0, j = 1, s0, m, n; j < m; ++j) {
    for (var i = 0, s1 = 0, s2 = 0; i < n; ++i) {
      var si = series[order[i]],
        sij0 = si[j][1] || 0,
        sij1 = si[j - 1][1] || 0,
        s3 = (sij0 - sij1) / 2;
      for (var k = 0; k < i; ++k) {
        var sk = series[order[k]],
          skj0 = sk[j][1] || 0,
          skj1 = sk[j - 1][1] || 0;
        s3 += skj0 - skj1;
      }
      (s1 += sij0), (s2 += s3 * sij0);
    }
    s0[j - 1][1] += s0[j - 1][0] = y;
    if (s1) y -= s2 / s1;
  }
  s0[j - 1][1] += s0[j - 1][0] = y;
  stackOffsetNone(series, order);
}

function appearance(series) {
  var peaks = series.map(peak);
  return stackOrderNone(series).sort(function (a, b) {
    return peaks[a] - peaks[b];
  });
}

function peak(series) {
  var i = -1,
    j = 0,
    n = series.length,
    vi,
    vj = -Infinity;
  while (++i < n) if ((vi = +series[i][1]) > vj) (vj = vi), (j = i);
  return j;
}

function stackOrderAscending(series) {
  var sums = series.map(sum);
  return stackOrderNone(series).sort(function (a, b) {
    return sums[a] - sums[b];
  });
}

function sum(series) {
  var s = 0,
    i = -1,
    n = series.length,
    v;
  while (++i < n) if ((v = +series[i][1])) s += v;
  return s;
}

function stackOrderDescending(series) {
  return stackOrderAscending(series).reverse();
}

function stackOrderInsideOut(series) {
  var n = series.length,
    i,
    j,
    sums = series.map(sum),
    order = appearance(series),
    top = 0,
    bottom = 0,
    tops = [],
    bottoms = [];

  for (i = 0; i < n; ++i) {
    j = order[i];
    if (top < bottom) {
      top += sums[j];
      tops.push(j);
    } else {
      bottom += sums[j];
      bottoms.push(j);
    }
  }

  return bottoms.reverse().concat(tops);
}

function stackOrderReverse(series) {
  return stackOrderNone(series).reverse();
}

function treemapDice(parent, x0, y0, x1, y1) {
  var nodes = parent.children,
    node,
    i = -1,
    n = nodes.length,
    k = parent.value && (x1 - x0) / parent.value;

  while (++i < n) {
    (node = nodes[i]), (node.y0 = y0), (node.y1 = y1);
    (node.x0 = x0), (node.x1 = x0 += node.value * k);
  }
}

function treemapSlice(parent, x0, y0, x1, y1) {
  var nodes = parent.children,
    node,
    i = -1,
    n = nodes.length,
    k = parent.value && (y1 - y0) / parent.value;

  while (++i < n) {
    (node = nodes[i]), (node.x0 = x0), (node.x1 = x1);
    (node.y0 = y0), (node.y1 = y0 += node.value * k);
  }
}

var phi = (1 + Math.sqrt(5)) / 2;

function squarifyRatio(ratio, parent, x0, y0, x1, y1) {
  var rows = [],
    nodes = parent.children,
    row,
    nodeValue,
    i0 = 0,
    i1 = 0,
    n = nodes.length,
    dx,
    dy,
    value = parent.value,
    sumValue,
    minValue,
    maxValue,
    newRatio,
    minRatio,
    alpha,
    beta;

  while (i0 < n) {
    (dx = x1 - x0), (dy = y1 - y0);

    // Find the next non-empty node.
    do sumValue = nodes[i1++].value;
    while (!sumValue && i1 < n);
    minValue = maxValue = sumValue;
    alpha = Math.max(dy / dx, dx / dy) / (value * ratio);
    beta = sumValue * sumValue * alpha;
    minRatio = Math.max(maxValue / beta, beta / minValue);

    // Keep adding nodes while the aspect ratio maintains or improves.
    for (; i1 < n; ++i1) {
      sumValue += nodeValue = nodes[i1].value;
      if (nodeValue < minValue) minValue = nodeValue;
      if (nodeValue > maxValue) maxValue = nodeValue;
      beta = sumValue * sumValue * alpha;
      newRatio = Math.max(maxValue / beta, beta / minValue);
      if (newRatio > minRatio) {
        sumValue -= nodeValue;
        break;
      }
      minRatio = newRatio;
    }

    // Position and record the row orientation.
    rows.push(
      (row = { value: sumValue, dice: dx < dy, children: nodes.slice(i0, i1) })
    );
    if (row.dice)
      treemapDice(
        row,
        x0,
        y0,
        x1,
        value ? (y0 += (dy * sumValue) / value) : y1
      );
    else
      treemapSlice(
        row,
        x0,
        y0,
        value ? (x0 += (dx * sumValue) / value) : x1,
        y1
      );
    (value -= sumValue), (i0 = i1);
  }

  return rows;
}

var treemapSquarify = (function custom(ratio) {
  function squarify(parent, x0, y0, x1, y1) {
    squarifyRatio(ratio, parent, x0, y0, x1, y1);
  }

  squarify.ratio = function (x) {
    return custom((x = +x) > 1 ? x : 1);
  };

  return squarify;
})(phi);

function treemapBinary(parent, x0, y0, x1, y1) {
  var nodes = parent.children,
    i,
    n = nodes.length,
    sum,
    sums = new Array(n + 1);

  for (sums[0] = sum = i = 0; i < n; ++i) {
    sums[i + 1] = sum += nodes[i].value;
  }

  partition(0, n, parent.value, x0, y0, x1, y1);

  function partition(i, j, value, x0, y0, x1, y1) {
    if (i >= j - 1) {
      var node = nodes[i];
      (node.x0 = x0), (node.y0 = y0);
      (node.x1 = x1), (node.y1 = y1);
      return;
    }

    var valueOffset = sums[i],
      valueTarget = value / 2 + valueOffset,
      k = i + 1,
      hi = j - 1;

    while (k < hi) {
      var mid = (k + hi) >>> 1;
      if (sums[mid] < valueTarget) k = mid + 1;
      else hi = mid;
    }

    if (valueTarget - sums[k - 1] < sums[k] - valueTarget && i + 1 < k) --k;

    var valueLeft = sums[k] - valueOffset,
      valueRight = value - valueLeft;

    if (x1 - x0 > y1 - y0) {
      var xk = (x0 * valueRight + x1 * valueLeft) / value;
      partition(i, k, valueLeft, x0, y0, xk, y1);
      partition(k, j, valueRight, xk, y0, x1, y1);
    } else {
      var yk = (y0 * valueRight + y1 * valueLeft) / value;
      partition(i, k, valueLeft, x0, y0, x1, yk);
      partition(k, j, valueRight, x0, yk, x1, y1);
    }
  }
}

function treemapSliceDice(parent, x0, y0, x1, y1) {
  (parent.depth & 1 ? treemapSlice : treemapDice)(parent, x0, y0, x1, y1);
}

var treemapResquarify = (function custom(ratio) {
  function resquarify(parent, x0, y0, x1, y1) {
    if ((rows = parent._squarify) && rows.ratio === ratio) {
      var rows,
        row,
        nodes,
        i,
        j = -1,
        n,
        m = rows.length,
        value = parent.value;

      while (++j < m) {
        (row = rows[j]), (nodes = row.children);
        for (i = row.value = 0, n = nodes.length; i < n; ++i)
          row.value += nodes[i].value;
        if (row.dice)
          treemapDice(row, x0, y0, x1, (y0 += ((y1 - y0) * row.value) / value));
        else
          treemapSlice(
            row,
            x0,
            y0,
            (x0 += ((x1 - x0) * row.value) / value),
            y1
          );
        value -= row.value;
      }
    } else {
      parent._squarify = rows = squarifyRatio(ratio, parent, x0, y0, x1, y1);
      rows.ratio = ratio;
    }
  }

  resquarify.ratio = function (x) {
    return custom((x = +x) > 1 ? x : 1);
  };

  return resquarify;
})(phi);

function formatDecimal$1(x) {
  return Math.abs((x = Math.round(x))) >= 1e21
    ? x.toLocaleString("en").replace(/,/g, "")
    : x.toString(10);
}

// Computes the decimal coefficient and exponent of the specified number x with
// significant digits p, where x is positive and p is in [1, 21] or undefined.
// For example, formatDecimalParts(1.23) returns ["123", 0].
function formatDecimalParts$1(x, p) {
  if (
    (i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf("e")) < 0
  )
    return null; // NaN, ±Infinity
  var i,
    coefficient = x.slice(0, i);

  // The string returned by toExponential either has the form \d\.\d+e[-+]\d+
  // (e.g., 1.2e+3) or the form \de[-+]\d+ (e.g., 1e+3).
  return [
    coefficient.length > 1
      ? coefficient[0] + coefficient.slice(2)
      : coefficient,
    +x.slice(i + 1),
  ];
}

function exponent$1(x) {
  return (x = formatDecimalParts$1(Math.abs(x))), x ? x[1] : NaN;
}

function formatGroup$1(grouping, thousands) {
  return function (value, width) {
    var i = value.length,
      t = [],
      j = 0,
      g = grouping[0],
      length = 0;

    while (i > 0 && g > 0) {
      if (length + g + 1 > width) g = Math.max(1, width - length);
      t.push(value.substring((i -= g), i + g));
      if ((length += g + 1) > width) break;
      g = grouping[(j = (j + 1) % grouping.length)];
    }

    return t.reverse().join(thousands);
  };
}

function formatNumerals$1(numerals) {
  return function (value) {
    return value.replace(/[0-9]/g, function (i) {
      return numerals[+i];
    });
  };
}

// [[fill]align][sign][symbol][0][width][,][.precision][~][type]
var re$1 = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

function formatSpecifier$1(specifier) {
  if (!(match = re$1.exec(specifier)))
    throw new Error("invalid format: " + specifier);
  var match;
  return new FormatSpecifier$1({
    fill: match[1],
    align: match[2],
    sign: match[3],
    symbol: match[4],
    zero: match[5],
    width: match[6],
    comma: match[7],
    precision: match[8] && match[8].slice(1),
    trim: match[9],
    type: match[10],
  });
}

formatSpecifier$1.prototype = FormatSpecifier$1.prototype; // instanceof

function FormatSpecifier$1(specifier) {
  this.fill = specifier.fill === undefined ? " " : specifier.fill + "";
  this.align = specifier.align === undefined ? ">" : specifier.align + "";
  this.sign = specifier.sign === undefined ? "-" : specifier.sign + "";
  this.symbol = specifier.symbol === undefined ? "" : specifier.symbol + "";
  this.zero = !!specifier.zero;
  this.width = specifier.width === undefined ? undefined : +specifier.width;
  this.comma = !!specifier.comma;
  this.precision =
    specifier.precision === undefined ? undefined : +specifier.precision;
  this.trim = !!specifier.trim;
  this.type = specifier.type === undefined ? "" : specifier.type + "";
}

FormatSpecifier$1.prototype.toString = function () {
  return (
    this.fill +
    this.align +
    this.sign +
    this.symbol +
    (this.zero ? "0" : "") +
    (this.width === undefined ? "" : Math.max(1, this.width | 0)) +
    (this.comma ? "," : "") +
    (this.precision === undefined
      ? ""
      : "." + Math.max(0, this.precision | 0)) +
    (this.trim ? "~" : "") +
    this.type
  );
};

// Trims insignificant zeros, e.g., replaces 1.2000k with 1.2k.
function formatTrim$1(s) {
  out: for (var n = s.length, i = 1, i0 = -1, i1; i < n; ++i) {
    switch (s[i]) {
      case ".":
        i0 = i1 = i;
        break;
      case "0":
        if (i0 === 0) i0 = i;
        i1 = i;
        break;
      default:
        if (!+s[i]) break out;
        if (i0 > 0) i0 = 0;
        break;
    }
  }
  return i0 > 0 ? s.slice(0, i0) + s.slice(i1 + 1) : s;
}

var prefixExponent$1;

function formatPrefixAuto$1(x, p) {
  var d = formatDecimalParts$1(x, p);
  if (!d) return x + "";
  var coefficient = d[0],
    exponent = d[1],
    i =
      exponent -
      (prefixExponent$1 =
        Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) +
      1,
    n = coefficient.length;
  return i === n
    ? coefficient
    : i > n
    ? coefficient + new Array(i - n + 1).join("0")
    : i > 0
    ? coefficient.slice(0, i) + "." + coefficient.slice(i)
    : "0." +
      new Array(1 - i).join("0") +
      formatDecimalParts$1(x, Math.max(0, p + i - 1))[0]; // less than 1y!
}

function formatRounded$1(x, p) {
  var d = formatDecimalParts$1(x, p);
  if (!d) return x + "";
  var coefficient = d[0],
    exponent = d[1];
  return exponent < 0
    ? "0." + new Array(-exponent).join("0") + coefficient
    : coefficient.length > exponent + 1
    ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1)
    : coefficient + new Array(exponent - coefficient.length + 2).join("0");
}

var formatTypes$1 = {
  "%": function (x, p) {
    return (x * 100).toFixed(p);
  },
  b: function (x) {
    return Math.round(x).toString(2);
  },
  c: function (x) {
    return x + "";
  },
  d: formatDecimal$1,
  e: function (x, p) {
    return x.toExponential(p);
  },
  f: function (x, p) {
    return x.toFixed(p);
  },
  g: function (x, p) {
    return x.toPrecision(p);
  },
  o: function (x) {
    return Math.round(x).toString(8);
  },
  p: function (x, p) {
    return formatRounded$1(x * 100, p);
  },
  r: formatRounded$1,
  s: formatPrefixAuto$1,
  X: function (x) {
    return Math.round(x).toString(16).toUpperCase();
  },
  x: function (x) {
    return Math.round(x).toString(16);
  },
};

function identity$2(x) {
  return x;
}

var map$1 = Array.prototype.map,
  prefixes$1 = [
    "y",
    "z",
    "a",
    "f",
    "p",
    "n",
    "µ",
    "m",
    "",
    "k",
    "M",
    "G",
    "T",
    "P",
    "E",
    "Z",
    "Y",
  ];

function formatLocale$2(locale) {
  var group =
      locale.grouping === undefined || locale.thousands === undefined
        ? identity$2
        : formatGroup$1(
            map$1.call(locale.grouping, Number),
            locale.thousands + ""
          ),
    currencyPrefix =
      locale.currency === undefined ? "" : locale.currency[0] + "",
    currencySuffix =
      locale.currency === undefined ? "" : locale.currency[1] + "",
    decimal = locale.decimal === undefined ? "." : locale.decimal + "",
    numerals =
      locale.numerals === undefined
        ? identity$2
        : formatNumerals$1(map$1.call(locale.numerals, String)),
    percent = locale.percent === undefined ? "%" : locale.percent + "",
    minus = locale.minus === undefined ? "-" : locale.minus + "",
    nan = locale.nan === undefined ? "NaN" : locale.nan + "";

  function newFormat(specifier) {
    specifier = formatSpecifier$1(specifier);

    var fill = specifier.fill,
      align = specifier.align,
      sign = specifier.sign,
      symbol = specifier.symbol,
      zero = specifier.zero,
      width = specifier.width,
      comma = specifier.comma,
      precision = specifier.precision,
      trim = specifier.trim,
      type = specifier.type;

    // The "n" type is an alias for ",g".
    if (type === "n") (comma = true), (type = "g");
    // The "" type, and any invalid type, is an alias for ".12~g".
    else if (!formatTypes$1[type])
      precision === undefined && (precision = 12), (trim = true), (type = "g");

    // If zero fill is specified, padding goes after sign and before digits.
    if (zero || (fill === "0" && align === "="))
      (zero = true), (fill = "0"), (align = "=");

    // Compute the prefix and suffix.
    // For SI-prefix, the suffix is lazily computed.
    var prefix =
        symbol === "$"
          ? currencyPrefix
          : symbol === "#" && /[boxX]/.test(type)
          ? "0" + type.toLowerCase()
          : "",
      suffix =
        symbol === "$" ? currencySuffix : /[%p]/.test(type) ? percent : "";

    // What format function should we use?
    // Is this an integer type?
    // Can this type generate exponential notation?
    var formatType = formatTypes$1[type],
      maybeSuffix = /[defgprs%]/.test(type);

    // Set the default precision if not specified,
    // or clamp the specified precision to the supported range.
    // For significant precision, it must be in [1, 21].
    // For fixed precision, it must be in [0, 20].
    precision =
      precision === undefined
        ? 6
        : /[gprs]/.test(type)
        ? Math.max(1, Math.min(21, precision))
        : Math.max(0, Math.min(20, precision));

    function format(value) {
      var valuePrefix = prefix,
        valueSuffix = suffix,
        i,
        n,
        c;

      if (type === "c") {
        valueSuffix = formatType(value) + valueSuffix;
        value = "";
      } else {
        value = +value;

        // Determine the sign. -0 is not less than 0, but 1 / -0 is!
        var valueNegative = value < 0 || 1 / value < 0;

        // Perform the initial formatting.
        value = isNaN(value) ? nan : formatType(Math.abs(value), precision);

        // Trim insignificant zeros.
        if (trim) value = formatTrim$1(value);

        // If a negative value rounds to zero after formatting, and no explicit positive sign is requested, hide the sign.
        if (valueNegative && +value === 0 && sign !== "+")
          valueNegative = false;

        // Compute the prefix and suffix.
        valuePrefix =
          (valueNegative
            ? sign === "("
              ? sign
              : minus
            : sign === "-" || sign === "("
            ? ""
            : sign) + valuePrefix;
        valueSuffix =
          (type === "s" ? prefixes$1[8 + prefixExponent$1 / 3] : "") +
          valueSuffix +
          (valueNegative && sign === "(" ? ")" : "");

        // Break the formatted value into the integer “value” part that can be
        // grouped, and fractional or exponential “suffix” part that is not.
        if (maybeSuffix) {
          (i = -1), (n = value.length);
          while (++i < n) {
            if (((c = value.charCodeAt(i)), 48 > c || c > 57)) {
              valueSuffix =
                (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) +
                valueSuffix;
              value = value.slice(0, i);
              break;
            }
          }
        }
      }

      // If the fill character is not "0", grouping is applied before padding.
      if (comma && !zero) value = group(value, Infinity);

      // Compute the padding.
      var length = valuePrefix.length + value.length + valueSuffix.length,
        padding =
          length < width ? new Array(width - length + 1).join(fill) : "";

      // If the fill character is "0", grouping is applied after padding.
      if (comma && zero)
        (value = group(
          padding + value,
          padding.length ? width - valueSuffix.length : Infinity
        )),
          (padding = "");

      // Reconstruct the final output based on the desired alignment.
      switch (align) {
        case "<":
          value = valuePrefix + value + valueSuffix + padding;
          break;
        case "=":
          value = valuePrefix + padding + value + valueSuffix;
          break;
        case "^":
          value =
            padding.slice(0, (length = padding.length >> 1)) +
            valuePrefix +
            value +
            valueSuffix +
            padding.slice(length);
          break;
        default:
          value = padding + valuePrefix + value + valueSuffix;
          break;
      }

      return numerals(value);
    }

    format.toString = function () {
      return specifier + "";
    };

    return format;
  }

  function formatPrefix(specifier, value) {
    var f = newFormat(
        ((specifier = formatSpecifier$1(specifier)),
        (specifier.type = "f"),
        specifier)
      ),
      e = Math.max(-8, Math.min(8, Math.floor(exponent$1(value) / 3))) * 3,
      k = Math.pow(10, -e),
      prefix = prefixes$1[8 + e / 3];
    return function (value) {
      return f(k * value) + prefix;
    };
  }

  return {
    format: newFormat,
    formatPrefix: formatPrefix,
  };
}

var locale$2;
var format$1;
var formatPrefix$1;

defaultLocale$2({
  decimal: ".",
  thousands: ",",
  grouping: [3],
  currency: ["$", ""],
  minus: "-",
});

function defaultLocale$2(definition) {
  locale$2 = formatLocale$2(definition);
  format$1 = locale$2.format;
  formatPrefix$1 = locale$2.formatPrefix;
  return locale$2;
}

var t0$1 = new Date(),
  t1$1 = new Date();

function newInterval$1(floori, offseti, count, field) {
  function interval(date) {
    return (
      floori((date = arguments.length === 0 ? new Date() : new Date(+date))),
      date
    );
  }

  interval.floor = function (date) {
    return floori((date = new Date(+date))), date;
  };

  interval.ceil = function (date) {
    return (
      floori((date = new Date(date - 1))), offseti(date, 1), floori(date), date
    );
  };

  interval.round = function (date) {
    var d0 = interval(date),
      d1 = interval.ceil(date);
    return date - d0 < d1 - date ? d0 : d1;
  };

  interval.offset = function (date, step) {
    return (
      offseti((date = new Date(+date)), step == null ? 1 : Math.floor(step)),
      date
    );
  };

  interval.range = function (start, stop, step) {
    var range = [],
      previous;
    start = interval.ceil(start);
    step = step == null ? 1 : Math.floor(step);
    if (!(start < stop) || !(step > 0)) return range; // also handles Invalid Date
    do
      range.push((previous = new Date(+start))),
        offseti(start, step),
        floori(start);
    while (previous < start && start < stop);
    return range;
  };

  interval.filter = function (test) {
    return newInterval$1(
      function (date) {
        if (date >= date)
          while ((floori(date), !test(date))) date.setTime(date - 1);
      },
      function (date, step) {
        if (date >= date) {
          if (step < 0)
            while (++step <= 0) {
              while ((offseti(date, -1), !test(date))) {} // eslint-disable-line no-empty
            }
          else
            while (--step >= 0) {
              while ((offseti(date, +1), !test(date))) {} // eslint-disable-line no-empty
            }
        }
      }
    );
  };

  if (count) {
    interval.count = function (start, end) {
      t0$1.setTime(+start), t1$1.setTime(+end);
      floori(t0$1), floori(t1$1);
      return Math.floor(count(t0$1, t1$1));
    };

    interval.every = function (step) {
      step = Math.floor(step);
      return !isFinite(step) || !(step > 0)
        ? null
        : !(step > 1)
        ? interval
        : interval.filter(
            field
              ? function (d) {
                  return field(d) % step === 0;
                }
              : function (d) {
                  return interval.count(0, d) % step === 0;
                }
          );
    };
  }

  return interval;
}

var millisecond$1 = newInterval$1(
  function () {
    // noop
  },
  function (date, step) {
    date.setTime(+date + step);
  },
  function (start, end) {
    return end - start;
  }
);

// An optimized implementation for this simple case.
millisecond$1.every = function (k) {
  k = Math.floor(k);
  if (!isFinite(k) || !(k > 0)) return null;
  if (!(k > 1)) return millisecond$1;
  return newInterval$1(
    function (date) {
      date.setTime(Math.floor(date / k) * k);
    },
    function (date, step) {
      date.setTime(+date + step * k);
    },
    function (start, end) {
      return (end - start) / k;
    }
  );
};

var durationSecond$2 = 1e3;
var durationMinute$2 = 6e4;
var durationHour$2 = 36e5;
var durationDay$2 = 864e5;
var durationWeek$2 = 6048e5;

var second$1 = newInterval$1(
  function (date) {
    date.setTime(date - date.getMilliseconds());
  },
  function (date, step) {
    date.setTime(+date + step * durationSecond$2);
  },
  function (start, end) {
    return (end - start) / durationSecond$2;
  },
  function (date) {
    return date.getUTCSeconds();
  }
);

var minute$1 = newInterval$1(
  function (date) {
    date.setTime(
      date - date.getMilliseconds() - date.getSeconds() * durationSecond$2
    );
  },
  function (date, step) {
    date.setTime(+date + step * durationMinute$2);
  },
  function (start, end) {
    return (end - start) / durationMinute$2;
  },
  function (date) {
    return date.getMinutes();
  }
);

var hour$1 = newInterval$1(
  function (date) {
    date.setTime(
      date -
        date.getMilliseconds() -
        date.getSeconds() * durationSecond$2 -
        date.getMinutes() * durationMinute$2
    );
  },
  function (date, step) {
    date.setTime(+date + step * durationHour$2);
  },
  function (start, end) {
    return (end - start) / durationHour$2;
  },
  function (date) {
    return date.getHours();
  }
);

var day$1 = newInterval$1(
  function (date) {
    date.setHours(0, 0, 0, 0);
  },
  function (date, step) {
    date.setDate(date.getDate() + step);
  },
  function (start, end) {
    return (
      (end -
        start -
        (end.getTimezoneOffset() - start.getTimezoneOffset()) *
          durationMinute$2) /
      durationDay$2
    );
  },
  function (date) {
    return date.getDate() - 1;
  }
);

function weekday$1(i) {
  return newInterval$1(
    function (date) {
      date.setDate(date.getDate() - ((date.getDay() + 7 - i) % 7));
      date.setHours(0, 0, 0, 0);
    },
    function (date, step) {
      date.setDate(date.getDate() + step * 7);
    },
    function (start, end) {
      return (
        (end -
          start -
          (end.getTimezoneOffset() - start.getTimezoneOffset()) *
            durationMinute$2) /
        durationWeek$2
      );
    }
  );
}

var sunday$1 = weekday$1(0);
var monday$1 = weekday$1(1);
var tuesday$1 = weekday$1(2);
var wednesday$1 = weekday$1(3);
var thursday$1 = weekday$1(4);
var friday$1 = weekday$1(5);
var saturday$1 = weekday$1(6);

var month$1 = newInterval$1(
  function (date) {
    date.setDate(1);
    date.setHours(0, 0, 0, 0);
  },
  function (date, step) {
    date.setMonth(date.getMonth() + step);
  },
  function (start, end) {
    return (
      end.getMonth() -
      start.getMonth() +
      (end.getFullYear() - start.getFullYear()) * 12
    );
  },
  function (date) {
    return date.getMonth();
  }
);

var year$1 = newInterval$1(
  function (date) {
    date.setMonth(0, 1);
    date.setHours(0, 0, 0, 0);
  },
  function (date, step) {
    date.setFullYear(date.getFullYear() + step);
  },
  function (start, end) {
    return end.getFullYear() - start.getFullYear();
  },
  function (date) {
    return date.getFullYear();
  }
);

// An optimized implementation for this simple case.
year$1.every = function (k) {
  return !isFinite((k = Math.floor(k))) || !(k > 0)
    ? null
    : newInterval$1(
        function (date) {
          date.setFullYear(Math.floor(date.getFullYear() / k) * k);
          date.setMonth(0, 1);
          date.setHours(0, 0, 0, 0);
        },
        function (date, step) {
          date.setFullYear(date.getFullYear() + step * k);
        }
      );
};

var utcMinute$1 = newInterval$1(
  function (date) {
    date.setUTCSeconds(0, 0);
  },
  function (date, step) {
    date.setTime(+date + step * durationMinute$2);
  },
  function (start, end) {
    return (end - start) / durationMinute$2;
  },
  function (date) {
    return date.getUTCMinutes();
  }
);

var utcHour$1 = newInterval$1(
  function (date) {
    date.setUTCMinutes(0, 0, 0);
  },
  function (date, step) {
    date.setTime(+date + step * durationHour$2);
  },
  function (start, end) {
    return (end - start) / durationHour$2;
  },
  function (date) {
    return date.getUTCHours();
  }
);

var utcDay$1 = newInterval$1(
  function (date) {
    date.setUTCHours(0, 0, 0, 0);
  },
  function (date, step) {
    date.setUTCDate(date.getUTCDate() + step);
  },
  function (start, end) {
    return (end - start) / durationDay$2;
  },
  function (date) {
    return date.getUTCDate() - 1;
  }
);

function utcWeekday$1(i) {
  return newInterval$1(
    function (date) {
      date.setUTCDate(date.getUTCDate() - ((date.getUTCDay() + 7 - i) % 7));
      date.setUTCHours(0, 0, 0, 0);
    },
    function (date, step) {
      date.setUTCDate(date.getUTCDate() + step * 7);
    },
    function (start, end) {
      return (end - start) / durationWeek$2;
    }
  );
}

var utcSunday$1 = utcWeekday$1(0);
var utcMonday$1 = utcWeekday$1(1);
var utcTuesday$1 = utcWeekday$1(2);
var utcWednesday$1 = utcWeekday$1(3);
var utcThursday$1 = utcWeekday$1(4);
var utcFriday$1 = utcWeekday$1(5);
var utcSaturday$1 = utcWeekday$1(6);

var utcMonth$1 = newInterval$1(
  function (date) {
    date.setUTCDate(1);
    date.setUTCHours(0, 0, 0, 0);
  },
  function (date, step) {
    date.setUTCMonth(date.getUTCMonth() + step);
  },
  function (start, end) {
    return (
      end.getUTCMonth() -
      start.getUTCMonth() +
      (end.getUTCFullYear() - start.getUTCFullYear()) * 12
    );
  },
  function (date) {
    return date.getUTCMonth();
  }
);

var utcYear$1 = newInterval$1(
  function (date) {
    date.setUTCMonth(0, 1);
    date.setUTCHours(0, 0, 0, 0);
  },
  function (date, step) {
    date.setUTCFullYear(date.getUTCFullYear() + step);
  },
  function (start, end) {
    return end.getUTCFullYear() - start.getUTCFullYear();
  },
  function (date) {
    return date.getUTCFullYear();
  }
);

// An optimized implementation for this simple case.
utcYear$1.every = function (k) {
  return !isFinite((k = Math.floor(k))) || !(k > 0)
    ? null
    : newInterval$1(
        function (date) {
          date.setUTCFullYear(Math.floor(date.getUTCFullYear() / k) * k);
          date.setUTCMonth(0, 1);
          date.setUTCHours(0, 0, 0, 0);
        },
        function (date, step) {
          date.setUTCFullYear(date.getUTCFullYear() + step * k);
        }
      );
};

function localDate$1(d) {
  if (0 <= d.y && d.y < 100) {
    var date = new Date(-1, d.m, d.d, d.H, d.M, d.S, d.L);
    date.setFullYear(d.y);
    return date;
  }
  return new Date(d.y, d.m, d.d, d.H, d.M, d.S, d.L);
}

function utcDate$1(d) {
  if (0 <= d.y && d.y < 100) {
    var date = new Date(Date.UTC(-1, d.m, d.d, d.H, d.M, d.S, d.L));
    date.setUTCFullYear(d.y);
    return date;
  }
  return new Date(Date.UTC(d.y, d.m, d.d, d.H, d.M, d.S, d.L));
}

function newDate$1(y, m, d) {
  return { y: y, m: m, d: d, H: 0, M: 0, S: 0, L: 0 };
}

function formatLocale$3(locale) {
  var locale_dateTime = locale.dateTime,
    locale_date = locale.date,
    locale_time = locale.time,
    locale_periods = locale.periods,
    locale_weekdays = locale.days,
    locale_shortWeekdays = locale.shortDays,
    locale_months = locale.months,
    locale_shortMonths = locale.shortMonths;

  var periodRe = formatRe$1(locale_periods),
    periodLookup = formatLookup$1(locale_periods),
    weekdayRe = formatRe$1(locale_weekdays),
    weekdayLookup = formatLookup$1(locale_weekdays),
    shortWeekdayRe = formatRe$1(locale_shortWeekdays),
    shortWeekdayLookup = formatLookup$1(locale_shortWeekdays),
    monthRe = formatRe$1(locale_months),
    monthLookup = formatLookup$1(locale_months),
    shortMonthRe = formatRe$1(locale_shortMonths),
    shortMonthLookup = formatLookup$1(locale_shortMonths);

  var formats = {
    a: formatShortWeekday,
    A: formatWeekday,
    b: formatShortMonth,
    B: formatMonth,
    c: null,
    d: formatDayOfMonth$1,
    e: formatDayOfMonth$1,
    f: formatMicroseconds$1,
    g: formatYearISO$1,
    G: formatFullYearISO$1,
    H: formatHour24$1,
    I: formatHour12$1,
    j: formatDayOfYear$1,
    L: formatMilliseconds$1,
    m: formatMonthNumber$1,
    M: formatMinutes$1,
    p: formatPeriod,
    q: formatQuarter,
    Q: formatUnixTimestamp$1,
    s: formatUnixTimestampSeconds$1,
    S: formatSeconds$1,
    u: formatWeekdayNumberMonday$1,
    U: formatWeekNumberSunday$1,
    V: formatWeekNumberISO$1,
    w: formatWeekdayNumberSunday$1,
    W: formatWeekNumberMonday$1,
    x: null,
    X: null,
    y: formatYear$1,
    Y: formatFullYear$1,
    Z: formatZone$1,
    "%": formatLiteralPercent$1,
  };

  var utcFormats = {
    a: formatUTCShortWeekday,
    A: formatUTCWeekday,
    b: formatUTCShortMonth,
    B: formatUTCMonth,
    c: null,
    d: formatUTCDayOfMonth$1,
    e: formatUTCDayOfMonth$1,
    f: formatUTCMicroseconds$1,
    g: formatUTCYearISO$1,
    G: formatUTCFullYearISO$1,
    H: formatUTCHour24$1,
    I: formatUTCHour12$1,
    j: formatUTCDayOfYear$1,
    L: formatUTCMilliseconds$1,
    m: formatUTCMonthNumber$1,
    M: formatUTCMinutes$1,
    p: formatUTCPeriod,
    q: formatUTCQuarter,
    Q: formatUnixTimestamp$1,
    s: formatUnixTimestampSeconds$1,
    S: formatUTCSeconds$1,
    u: formatUTCWeekdayNumberMonday$1,
    U: formatUTCWeekNumberSunday$1,
    V: formatUTCWeekNumberISO$1,
    w: formatUTCWeekdayNumberSunday$1,
    W: formatUTCWeekNumberMonday$1,
    x: null,
    X: null,
    y: formatUTCYear$1,
    Y: formatUTCFullYear$1,
    Z: formatUTCZone$1,
    "%": formatLiteralPercent$1,
  };

  var parses = {
    a: parseShortWeekday,
    A: parseWeekday,
    b: parseShortMonth,
    B: parseMonth,
    c: parseLocaleDateTime,
    d: parseDayOfMonth$1,
    e: parseDayOfMonth$1,
    f: parseMicroseconds$1,
    g: parseYear$1,
    G: parseFullYear$1,
    H: parseHour24$1,
    I: parseHour24$1,
    j: parseDayOfYear$1,
    L: parseMilliseconds$1,
    m: parseMonthNumber$1,
    M: parseMinutes$1,
    p: parsePeriod,
    q: parseQuarter$1,
    Q: parseUnixTimestamp$1,
    s: parseUnixTimestampSeconds$1,
    S: parseSeconds$1,
    u: parseWeekdayNumberMonday$1,
    U: parseWeekNumberSunday$1,
    V: parseWeekNumberISO$1,
    w: parseWeekdayNumberSunday$1,
    W: parseWeekNumberMonday$1,
    x: parseLocaleDate,
    X: parseLocaleTime,
    y: parseYear$1,
    Y: parseFullYear$1,
    Z: parseZone$1,
    "%": parseLiteralPercent$1,
  };

  // These recursive directive definitions must be deferred.
  formats.x = newFormat(locale_date, formats);
  formats.X = newFormat(locale_time, formats);
  formats.c = newFormat(locale_dateTime, formats);
  utcFormats.x = newFormat(locale_date, utcFormats);
  utcFormats.X = newFormat(locale_time, utcFormats);
  utcFormats.c = newFormat(locale_dateTime, utcFormats);

  function newFormat(specifier, formats) {
    return function (date) {
      var string = [],
        i = -1,
        j = 0,
        n = specifier.length,
        c,
        pad,
        format;

      if (!(date instanceof Date)) date = new Date(+date);

      while (++i < n) {
        if (specifier.charCodeAt(i) === 37) {
          string.push(specifier.slice(j, i));
          if ((pad = pads$1[(c = specifier.charAt(++i))]) != null)
            c = specifier.charAt(++i);
          else pad = c === "e" ? " " : "0";
          if ((format = formats[c])) c = format(date, pad);
          string.push(c);
          j = i + 1;
        }
      }

      string.push(specifier.slice(j, i));
      return string.join("");
    };
  }

  function newParse(specifier, Z) {
    return function (string) {
      var d = newDate$1(1900, undefined, 1),
        i = parseSpecifier(d, specifier, (string += ""), 0),
        week,
        day;
      if (i != string.length) return null;

      // If a UNIX timestamp is specified, return it.
      if ("Q" in d) return new Date(d.Q);
      if ("s" in d) return new Date(d.s * 1000 + ("L" in d ? d.L : 0));

      // If this is utcParse, never use the local timezone.
      if (Z && !("Z" in d)) d.Z = 0;

      // The am-pm flag is 0 for AM, and 1 for PM.
      if ("p" in d) d.H = (d.H % 12) + d.p * 12;

      // If the month was not specified, inherit from the quarter.
      if (d.m === undefined) d.m = "q" in d ? d.q : 0;

      // Convert day-of-week and week-of-year to day-of-year.
      if ("V" in d) {
        if (d.V < 1 || d.V > 53) return null;
        if (!("w" in d)) d.w = 1;
        if ("Z" in d) {
          (week = utcDate$1(newDate$1(d.y, 0, 1))), (day = week.getUTCDay());
          week =
            day > 4 || day === 0 ? utcMonday$1.ceil(week) : utcMonday$1(week);
          week = utcDay$1.offset(week, (d.V - 1) * 7);
          d.y = week.getUTCFullYear();
          d.m = week.getUTCMonth();
          d.d = week.getUTCDate() + ((d.w + 6) % 7);
        } else {
          (week = localDate$1(newDate$1(d.y, 0, 1))), (day = week.getDay());
          week = day > 4 || day === 0 ? monday$1.ceil(week) : monday$1(week);
          week = day$1.offset(week, (d.V - 1) * 7);
          d.y = week.getFullYear();
          d.m = week.getMonth();
          d.d = week.getDate() + ((d.w + 6) % 7);
        }
      } else if ("W" in d || "U" in d) {
        if (!("w" in d)) d.w = "u" in d ? d.u % 7 : "W" in d ? 1 : 0;
        day =
          "Z" in d
            ? utcDate$1(newDate$1(d.y, 0, 1)).getUTCDay()
            : localDate$1(newDate$1(d.y, 0, 1)).getDay();
        d.m = 0;
        d.d =
          "W" in d
            ? ((d.w + 6) % 7) + d.W * 7 - ((day + 5) % 7)
            : d.w + d.U * 7 - ((day + 6) % 7);
      }

      // If a time zone is specified, all fields are interpreted as UTC and then
      // offset according to the specified time zone.
      if ("Z" in d) {
        d.H += (d.Z / 100) | 0;
        d.M += d.Z % 100;
        return utcDate$1(d);
      }

      // Otherwise, all fields are in local time.
      return localDate$1(d);
    };
  }

  function parseSpecifier(d, specifier, string, j) {
    var i = 0,
      n = specifier.length,
      m = string.length,
      c,
      parse;

    while (i < n) {
      if (j >= m) return -1;
      c = specifier.charCodeAt(i++);
      if (c === 37) {
        c = specifier.charAt(i++);
        parse = parses[c in pads$1 ? specifier.charAt(i++) : c];
        if (!parse || (j = parse(d, string, j)) < 0) return -1;
      } else if (c != string.charCodeAt(j++)) {
        return -1;
      }
    }

    return j;
  }

  function parsePeriod(d, string, i) {
    var n = periodRe.exec(string.slice(i));
    return n ? ((d.p = periodLookup[n[0].toLowerCase()]), i + n[0].length) : -1;
  }

  function parseShortWeekday(d, string, i) {
    var n = shortWeekdayRe.exec(string.slice(i));
    return n
      ? ((d.w = shortWeekdayLookup[n[0].toLowerCase()]), i + n[0].length)
      : -1;
  }

  function parseWeekday(d, string, i) {
    var n = weekdayRe.exec(string.slice(i));
    return n
      ? ((d.w = weekdayLookup[n[0].toLowerCase()]), i + n[0].length)
      : -1;
  }

  function parseShortMonth(d, string, i) {
    var n = shortMonthRe.exec(string.slice(i));
    return n
      ? ((d.m = shortMonthLookup[n[0].toLowerCase()]), i + n[0].length)
      : -1;
  }

  function parseMonth(d, string, i) {
    var n = monthRe.exec(string.slice(i));
    return n ? ((d.m = monthLookup[n[0].toLowerCase()]), i + n[0].length) : -1;
  }

  function parseLocaleDateTime(d, string, i) {
    return parseSpecifier(d, locale_dateTime, string, i);
  }

  function parseLocaleDate(d, string, i) {
    return parseSpecifier(d, locale_date, string, i);
  }

  function parseLocaleTime(d, string, i) {
    return parseSpecifier(d, locale_time, string, i);
  }

  function formatShortWeekday(d) {
    return locale_shortWeekdays[d.getDay()];
  }

  function formatWeekday(d) {
    return locale_weekdays[d.getDay()];
  }

  function formatShortMonth(d) {
    return locale_shortMonths[d.getMonth()];
  }

  function formatMonth(d) {
    return locale_months[d.getMonth()];
  }

  function formatPeriod(d) {
    return locale_periods[+(d.getHours() >= 12)];
  }

  function formatQuarter(d) {
    return 1 + ~~(d.getMonth() / 3);
  }

  function formatUTCShortWeekday(d) {
    return locale_shortWeekdays[d.getUTCDay()];
  }

  function formatUTCWeekday(d) {
    return locale_weekdays[d.getUTCDay()];
  }

  function formatUTCShortMonth(d) {
    return locale_shortMonths[d.getUTCMonth()];
  }

  function formatUTCMonth(d) {
    return locale_months[d.getUTCMonth()];
  }

  function formatUTCPeriod(d) {
    return locale_periods[+(d.getUTCHours() >= 12)];
  }

  function formatUTCQuarter(d) {
    return 1 + ~~(d.getUTCMonth() / 3);
  }

  return {
    format: function (specifier) {
      var f = newFormat((specifier += ""), formats);
      f.toString = function () {
        return specifier;
      };
      return f;
    },
    parse: function (specifier) {
      var p = newParse((specifier += ""), false);
      p.toString = function () {
        return specifier;
      };
      return p;
    },
    utcFormat: function (specifier) {
      var f = newFormat((specifier += ""), utcFormats);
      f.toString = function () {
        return specifier;
      };
      return f;
    },
    utcParse: function (specifier) {
      var p = newParse((specifier += ""), true);
      p.toString = function () {
        return specifier;
      };
      return p;
    },
  };
}

var pads$1 = { "-": "", _: " ", 0: "0" },
  numberRe$1 = /^\s*\d+/, // note: ignores next directive
  percentRe$1 = /^%/,
  requoteRe$1 = /[\\^$*+?|[\]().{}]/g;

function pad$1(value, fill, width) {
  var sign = value < 0 ? "-" : "",
    string = (sign ? -value : value) + "",
    length = string.length;
  return (
    sign +
    (length < width
      ? new Array(width - length + 1).join(fill) + string
      : string)
  );
}

function requote$1(s) {
  return s.replace(requoteRe$1, "\\$&");
}

function formatRe$1(names) {
  return new RegExp("^(?:" + names.map(requote$1).join("|") + ")", "i");
}

function formatLookup$1(names) {
  var map = {},
    i = -1,
    n = names.length;
  while (++i < n) map[names[i].toLowerCase()] = i;
  return map;
}

function parseWeekdayNumberSunday$1(d, string, i) {
  var n = numberRe$1.exec(string.slice(i, i + 1));
  return n ? ((d.w = +n[0]), i + n[0].length) : -1;
}

function parseWeekdayNumberMonday$1(d, string, i) {
  var n = numberRe$1.exec(string.slice(i, i + 1));
  return n ? ((d.u = +n[0]), i + n[0].length) : -1;
}

function parseWeekNumberSunday$1(d, string, i) {
  var n = numberRe$1.exec(string.slice(i, i + 2));
  return n ? ((d.U = +n[0]), i + n[0].length) : -1;
}

function parseWeekNumberISO$1(d, string, i) {
  var n = numberRe$1.exec(string.slice(i, i + 2));
  return n ? ((d.V = +n[0]), i + n[0].length) : -1;
}

function parseWeekNumberMonday$1(d, string, i) {
  var n = numberRe$1.exec(string.slice(i, i + 2));
  return n ? ((d.W = +n[0]), i + n[0].length) : -1;
}

function parseFullYear$1(d, string, i) {
  var n = numberRe$1.exec(string.slice(i, i + 4));
  return n ? ((d.y = +n[0]), i + n[0].length) : -1;
}

function parseYear$1(d, string, i) {
  var n = numberRe$1.exec(string.slice(i, i + 2));
  return n ? ((d.y = +n[0] + (+n[0] > 68 ? 1900 : 2000)), i + n[0].length) : -1;
}

function parseZone$1(d, string, i) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(string.slice(i, i + 6));
  return n
    ? ((d.Z = n[1] ? 0 : -(n[2] + (n[3] || "00"))), i + n[0].length)
    : -1;
}

function parseQuarter$1(d, string, i) {
  var n = numberRe$1.exec(string.slice(i, i + 1));
  return n ? ((d.q = n[0] * 3 - 3), i + n[0].length) : -1;
}

function parseMonthNumber$1(d, string, i) {
  var n = numberRe$1.exec(string.slice(i, i + 2));
  return n ? ((d.m = n[0] - 1), i + n[0].length) : -1;
}

function parseDayOfMonth$1(d, string, i) {
  var n = numberRe$1.exec(string.slice(i, i + 2));
  return n ? ((d.d = +n[0]), i + n[0].length) : -1;
}

function parseDayOfYear$1(d, string, i) {
  var n = numberRe$1.exec(string.slice(i, i + 3));
  return n ? ((d.m = 0), (d.d = +n[0]), i + n[0].length) : -1;
}

function parseHour24$1(d, string, i) {
  var n = numberRe$1.exec(string.slice(i, i + 2));
  return n ? ((d.H = +n[0]), i + n[0].length) : -1;
}

function parseMinutes$1(d, string, i) {
  var n = numberRe$1.exec(string.slice(i, i + 2));
  return n ? ((d.M = +n[0]), i + n[0].length) : -1;
}

function parseSeconds$1(d, string, i) {
  var n = numberRe$1.exec(string.slice(i, i + 2));
  return n ? ((d.S = +n[0]), i + n[0].length) : -1;
}

function parseMilliseconds$1(d, string, i) {
  var n = numberRe$1.exec(string.slice(i, i + 3));
  return n ? ((d.L = +n[0]), i + n[0].length) : -1;
}

function parseMicroseconds$1(d, string, i) {
  var n = numberRe$1.exec(string.slice(i, i + 6));
  return n ? ((d.L = Math.floor(n[0] / 1000)), i + n[0].length) : -1;
}

function parseLiteralPercent$1(d, string, i) {
  var n = percentRe$1.exec(string.slice(i, i + 1));
  return n ? i + n[0].length : -1;
}

function parseUnixTimestamp$1(d, string, i) {
  var n = numberRe$1.exec(string.slice(i));
  return n ? ((d.Q = +n[0]), i + n[0].length) : -1;
}

function parseUnixTimestampSeconds$1(d, string, i) {
  var n = numberRe$1.exec(string.slice(i));
  return n ? ((d.s = +n[0]), i + n[0].length) : -1;
}

function formatDayOfMonth$1(d, p) {
  return pad$1(d.getDate(), p, 2);
}

function formatHour24$1(d, p) {
  return pad$1(d.getHours(), p, 2);
}

function formatHour12$1(d, p) {
  return pad$1(d.getHours() % 12 || 12, p, 2);
}

function formatDayOfYear$1(d, p) {
  return pad$1(1 + day$1.count(year$1(d), d), p, 3);
}

function formatMilliseconds$1(d, p) {
  return pad$1(d.getMilliseconds(), p, 3);
}

function formatMicroseconds$1(d, p) {
  return formatMilliseconds$1(d, p) + "000";
}

function formatMonthNumber$1(d, p) {
  return pad$1(d.getMonth() + 1, p, 2);
}

function formatMinutes$1(d, p) {
  return pad$1(d.getMinutes(), p, 2);
}

function formatSeconds$1(d, p) {
  return pad$1(d.getSeconds(), p, 2);
}

function formatWeekdayNumberMonday$1(d) {
  var day = d.getDay();
  return day === 0 ? 7 : day;
}

function formatWeekNumberSunday$1(d, p) {
  return pad$1(sunday$1.count(year$1(d) - 1, d), p, 2);
}

function dISO$1(d) {
  var day = d.getDay();
  return day >= 4 || day === 0 ? thursday$1(d) : thursday$1.ceil(d);
}

function formatWeekNumberISO$1(d, p) {
  d = dISO$1(d);
  return pad$1(
    thursday$1.count(year$1(d), d) + (year$1(d).getDay() === 4),
    p,
    2
  );
}

function formatWeekdayNumberSunday$1(d) {
  return d.getDay();
}

function formatWeekNumberMonday$1(d, p) {
  return pad$1(monday$1.count(year$1(d) - 1, d), p, 2);
}

function formatYear$1(d, p) {
  return pad$1(d.getFullYear() % 100, p, 2);
}

function formatYearISO$1(d, p) {
  d = dISO$1(d);
  return pad$1(d.getFullYear() % 100, p, 2);
}

function formatFullYear$1(d, p) {
  return pad$1(d.getFullYear() % 10000, p, 4);
}

function formatFullYearISO$1(d, p) {
  var day = d.getDay();
  d = day >= 4 || day === 0 ? thursday$1(d) : thursday$1.ceil(d);
  return pad$1(d.getFullYear() % 10000, p, 4);
}

function formatZone$1(d) {
  var z = d.getTimezoneOffset();
  return (
    (z > 0 ? "-" : ((z *= -1), "+")) +
    pad$1((z / 60) | 0, "0", 2) +
    pad$1(z % 60, "0", 2)
  );
}

function formatUTCDayOfMonth$1(d, p) {
  return pad$1(d.getUTCDate(), p, 2);
}

function formatUTCHour24$1(d, p) {
  return pad$1(d.getUTCHours(), p, 2);
}

function formatUTCHour12$1(d, p) {
  return pad$1(d.getUTCHours() % 12 || 12, p, 2);
}

function formatUTCDayOfYear$1(d, p) {
  return pad$1(1 + utcDay$1.count(utcYear$1(d), d), p, 3);
}

function formatUTCMilliseconds$1(d, p) {
  return pad$1(d.getUTCMilliseconds(), p, 3);
}

function formatUTCMicroseconds$1(d, p) {
  return formatUTCMilliseconds$1(d, p) + "000";
}

function formatUTCMonthNumber$1(d, p) {
  return pad$1(d.getUTCMonth() + 1, p, 2);
}

function formatUTCMinutes$1(d, p) {
  return pad$1(d.getUTCMinutes(), p, 2);
}

function formatUTCSeconds$1(d, p) {
  return pad$1(d.getUTCSeconds(), p, 2);
}

function formatUTCWeekdayNumberMonday$1(d) {
  var dow = d.getUTCDay();
  return dow === 0 ? 7 : dow;
}

function formatUTCWeekNumberSunday$1(d, p) {
  return pad$1(utcSunday$1.count(utcYear$1(d) - 1, d), p, 2);
}

function UTCdISO$1(d) {
  var day = d.getUTCDay();
  return day >= 4 || day === 0 ? utcThursday$1(d) : utcThursday$1.ceil(d);
}

function formatUTCWeekNumberISO$1(d, p) {
  d = UTCdISO$1(d);
  return pad$1(
    utcThursday$1.count(utcYear$1(d), d) + (utcYear$1(d).getUTCDay() === 4),
    p,
    2
  );
}

function formatUTCWeekdayNumberSunday$1(d) {
  return d.getUTCDay();
}

function formatUTCWeekNumberMonday$1(d, p) {
  return pad$1(utcMonday$1.count(utcYear$1(d) - 1, d), p, 2);
}

function formatUTCYear$1(d, p) {
  return pad$1(d.getUTCFullYear() % 100, p, 2);
}

function formatUTCYearISO$1(d, p) {
  d = UTCdISO$1(d);
  return pad$1(d.getUTCFullYear() % 100, p, 2);
}

function formatUTCFullYear$1(d, p) {
  return pad$1(d.getUTCFullYear() % 10000, p, 4);
}

function formatUTCFullYearISO$1(d, p) {
  var day = d.getUTCDay();
  d = day >= 4 || day === 0 ? utcThursday$1(d) : utcThursday$1.ceil(d);
  return pad$1(d.getUTCFullYear() % 10000, p, 4);
}

function formatUTCZone$1() {
  return "+0000";
}

function formatLiteralPercent$1() {
  return "%";
}

function formatUnixTimestamp$1(d) {
  return +d;
}

function formatUnixTimestampSeconds$1(d) {
  return Math.floor(+d / 1000);
}

var locale$3;
var timeFormat$1;
var timeParse$1;
var utcFormat$1;
var utcParse$1;

defaultLocale$3({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  shortMonths: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
});

function defaultLocale$3(definition) {
  locale$3 = formatLocale$3(definition);
  timeFormat$1 = locale$3.format;
  timeParse$1 = locale$3.parse;
  utcFormat$1 = locale$3.utcFormat;
  utcParse$1 = locale$3.utcParse;
  return locale$3;
}

var interopRequireDefault = createCommonjsModule(function (module) {
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule
      ? obj
      : {
          default: obj,
        };
  }

  module.exports = _interopRequireDefault;
});

var _extends_1 = createCommonjsModule(function (module) {
  function _extends() {
    module.exports = _extends =
      Object.assign ||
      function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      };

    return _extends.apply(this, arguments);
  }

  module.exports = _extends;
});

var getDisplayName_1 = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;
  exports.default = void 0;

  var getDisplayName = function getDisplayName(Component) {
    if (typeof Component === "string") {
      return Component;
    }

    if (!Component) {
      return undefined;
    }

    return Component.displayName || Component.name || "Component";
  };

  var _default = getDisplayName;
  exports.default = _default;
});

var wrapDisplayName_1 = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;
  exports.default = void 0;

  var _getDisplayName = interopRequireDefault(getDisplayName_1);

  var wrapDisplayName = function wrapDisplayName(BaseComponent, hocName) {
    return hocName + "(" + (0, _getDisplayName.default)(BaseComponent) + ")";
  };

  var _default = wrapDisplayName;
  exports.default = _default;
});

var setStatic_1 = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;
  exports.default = void 0;

  var setStatic = function setStatic(key, value) {
    return function (BaseComponent) {
      /* eslint-disable no-param-reassign */
      BaseComponent[key] = value;
      /* eslint-enable no-param-reassign */

      return BaseComponent;
    };
  };

  var _default = setStatic;
  exports.default = _default;
});

var setDisplayName_1 = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;
  exports.default = void 0;

  var _setStatic = interopRequireDefault(setStatic_1);

  var setDisplayName = function setDisplayName(displayName) {
    return (0, _setStatic.default)("displayName", displayName);
  };

  var _default = setDisplayName;
  exports.default = _default;
});

var mapProps_1 = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;
  exports.default = void 0;

  var _setDisplayName = interopRequireDefault(setDisplayName_1);

  var _wrapDisplayName = interopRequireDefault(wrapDisplayName_1);

  var mapProps = function mapProps(propsMapper) {
    return function (BaseComponent) {
      var factory = (0, React.createFactory)(BaseComponent);

      var MapProps = function MapProps(props) {
        return factory(propsMapper(props));
      };

      if (process.env.NODE_ENV !== "production") {
        return (0, _setDisplayName.default)(
          (0, _wrapDisplayName.default)(BaseComponent, "mapProps")
        )(MapProps);
      }

      return MapProps;
    };
  };

  var _default = mapProps;
  exports.default = _default;
});

var withProps_1 = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;
  exports.default = void 0;

  var _extends2 = interopRequireDefault(_extends_1);

  var _wrapDisplayName = interopRequireDefault(wrapDisplayName_1);

  var _setDisplayName = interopRequireDefault(setDisplayName_1);

  var _mapProps = interopRequireDefault(mapProps_1);

  var withProps = function withProps(input) {
    var hoc = (0, _mapProps.default)(function (props) {
      return (0,
      _extends2.default)({}, props, typeof input === "function" ? input(props) : input);
    });

    if (process.env.NODE_ENV !== "production") {
      return function (BaseComponent) {
        return (0, _setDisplayName.default)(
          (0, _wrapDisplayName.default)(BaseComponent, "withProps")
        )(hoc(BaseComponent));
      };
    }

    return hoc;
  };

  var _default = withProps;
  exports.default = _default;
});

var compose_1 = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;
  exports.default = void 0;

  var compose = function compose() {
    for (
      var _len = arguments.length, funcs = new Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      funcs[_key] = arguments[_key];
    }

    return funcs.reduce(
      function (a, b) {
        return function () {
          return a(b.apply(void 0, arguments));
        };
      },
      function (arg) {
        return arg;
      }
    );
  };

  var _default = compose;
  exports.default = _default;
});

var compose = /*@__PURE__*/ getDefaultExportFromCjs(compose_1);

var setPropTypes_1 = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;
  exports.default = void 0;

  var _setStatic = interopRequireDefault(setStatic_1);

  var setPropTypes = function setPropTypes(propTypes) {
    return (0, _setStatic.default)("propTypes", propTypes);
  };

  var _default = setPropTypes;
  exports.default = _default;
});

var setPropTypes = /*@__PURE__*/ getDefaultExportFromCjs(setPropTypes_1);

var defaultProps_1 = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;
  exports.default = void 0;

  var _setDisplayName = interopRequireDefault(setDisplayName_1);

  var _wrapDisplayName = interopRequireDefault(wrapDisplayName_1);

  var defaultProps = function defaultProps(props) {
    return function (BaseComponent) {
      var factory = (0, React.createFactory)(BaseComponent);

      var DefaultProps = function DefaultProps(ownerProps) {
        return factory(ownerProps);
      };

      DefaultProps.defaultProps = props;

      if (process.env.NODE_ENV !== "production") {
        return (0, _setDisplayName.default)(
          (0, _wrapDisplayName.default)(BaseComponent, "defaultProps")
        )(DefaultProps);
      }

      return DefaultProps;
    };
  };

  var _default = defaultProps;
  exports.default = _default;
});

var defaultProps = /*@__PURE__*/ getDefaultExportFromCjs(defaultProps_1);

function _inheritsLoose$1(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var inheritsLoose = _inheritsLoose$1;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function componentWillMount() {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}

function componentWillReceiveProps(nextProps) {
  // Call this.constructor.gDSFP to support sub-classes.
  // Use the setState() updater to ensure state isn't stale in certain edge cases.
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== undefined ? state : null;
  }
  // Binding "this" is important for shallow renderer support.
  this.setState(updater.bind(this));
}

function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      prevProps,
      prevState
    );
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}

// React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;

function polyfill$1(Component) {
  var prototype = Component.prototype;

  if (!prototype || !prototype.isReactComponent) {
    throw new Error("Can only polyfill class components");
  }

  if (
    typeof Component.getDerivedStateFromProps !== "function" &&
    typeof prototype.getSnapshotBeforeUpdate !== "function"
  ) {
    return Component;
  }

  // If new component APIs are defined, "unsafe" lifecycles won't be called.
  // Error if any of these lifecycles are present,
  // Because they would work differently between older and newer (16.3+) versions of React.
  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;
  if (typeof prototype.componentWillMount === "function") {
    foundWillMountName = "componentWillMount";
  } else if (typeof prototype.UNSAFE_componentWillMount === "function") {
    foundWillMountName = "UNSAFE_componentWillMount";
  }
  if (typeof prototype.componentWillReceiveProps === "function") {
    foundWillReceivePropsName = "componentWillReceiveProps";
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === "function") {
    foundWillReceivePropsName = "UNSAFE_componentWillReceiveProps";
  }
  if (typeof prototype.componentWillUpdate === "function") {
    foundWillUpdateName = "componentWillUpdate";
  } else if (typeof prototype.UNSAFE_componentWillUpdate === "function") {
    foundWillUpdateName = "UNSAFE_componentWillUpdate";
  }
  if (
    foundWillMountName !== null ||
    foundWillReceivePropsName !== null ||
    foundWillUpdateName !== null
  ) {
    var componentName = Component.displayName || Component.name;
    var newApiName =
      typeof Component.getDerivedStateFromProps === "function"
        ? "getDerivedStateFromProps()"
        : "getSnapshotBeforeUpdate()";

    throw Error(
      "Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n" +
        componentName +
        " uses " +
        newApiName +
        " but also contains the following legacy lifecycles:" +
        (foundWillMountName !== null ? "\n  " + foundWillMountName : "") +
        (foundWillReceivePropsName !== null
          ? "\n  " + foundWillReceivePropsName
          : "") +
        (foundWillUpdateName !== null ? "\n  " + foundWillUpdateName : "") +
        "\n\nThe above lifecycles should be removed. Learn more about this warning here:\n" +
        "https://fb.me/react-async-component-lifecycle-hooks"
    );
  }

  // React <= 16.2 does not support static getDerivedStateFromProps.
  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
  // Newer versions of React will ignore these lifecycles if gDSFP exists.
  if (typeof Component.getDerivedStateFromProps === "function") {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  }

  // React <= 16.2 does not support getSnapshotBeforeUpdate.
  // As a workaround, use cWU to invoke the new lifecycle.
  // Newer versions of React will ignore that lifecycle if gSBU exists.
  if (typeof prototype.getSnapshotBeforeUpdate === "function") {
    if (typeof prototype.componentDidUpdate !== "function") {
      throw new Error(
        "Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype"
      );
    }

    prototype.componentWillUpdate = componentWillUpdate;

    var componentDidUpdate = prototype.componentDidUpdate;

    prototype.componentDidUpdate = function componentDidUpdatePolyfill(
      prevProps,
      prevState,
      maybeSnapshot
    ) {
      // 16.3+ will not execute our will-update method;
      // It will pass a snapshot value to did-update though.
      // Older versions will require our polyfilled will-update value.
      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
      // Because for <= 15.x versions this might be a "prevContext" object.
      // We also can't just check "__reactInternalSnapshot",
      // Because get-snapshot might return a falsy value.
      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
      var snapshot = this.__reactInternalSnapshotFlag
        ? this.__reactInternalSnapshot
        : maybeSnapshot;

      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }

  return Component;
}

var reactLifecyclesCompat_es = /*#__PURE__*/ Object.freeze({
  __proto__: null,
  polyfill: polyfill$1,
});

var pick_1 = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;
  exports.default = void 0;

  var pick = function pick(obj, keys) {
    var result = {};

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (obj.hasOwnProperty(key)) {
        result[key] = obj[key];
      }
    }

    return result;
  };

  var _default = pick;
  exports.default = _default;
});

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 *
 */

var hasOwnProperty$1 = Object.prototype.hasOwnProperty;

/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function is(x, y) {
  // SameValue algorithm
  if (x === y) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    // Added the nonzero y check to make Flow happy, but it is redundant
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    // Step 6.a: NaN == NaN
    return x !== x && y !== y;
  }
}

/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 */
function shallowEqual(objA, objB) {
  if (is(objA, objB)) {
    return true;
  }

  if (
    typeof objA !== "object" ||
    objA === null ||
    typeof objB !== "object" ||
    objB === null
  ) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  for (var i = 0; i < keysA.length; i++) {
    if (
      !hasOwnProperty$1.call(objB, keysA[i]) ||
      !is(objA[keysA[i]], objB[keysA[i]])
    ) {
      return false;
    }
  }

  return true;
}

var shallowEqual_1 = shallowEqual;

var shallowEqual$1 = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;
  exports.default = void 0;

  var _shallowEqual = interopRequireDefault(shallowEqual_1);

  var _default = _shallowEqual.default;
  exports.default = _default;
});

var _reactLifecyclesCompat = /*@__PURE__*/ getAugmentedNamespace(
  reactLifecyclesCompat_es
);

var withPropsOnChange_1 = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;
  exports.default = void 0;

  var _extends2 = interopRequireDefault(_extends_1);

  var _inheritsLoose2 = interopRequireDefault(inheritsLoose);

  var _pick = interopRequireDefault(pick_1);

  var _shallowEqual = interopRequireDefault(shallowEqual$1);

  var _setDisplayName = interopRequireDefault(setDisplayName_1);

  var _wrapDisplayName = interopRequireDefault(wrapDisplayName_1);

  var withPropsOnChange = function withPropsOnChange(
    shouldMapOrKeys,
    propsMapper
  ) {
    return function (BaseComponent) {
      var factory = (0, React.createFactory)(BaseComponent);
      var shouldMap =
        typeof shouldMapOrKeys === "function"
          ? shouldMapOrKeys
          : function (props, nextProps) {
              return !(0, _shallowEqual.default)(
                (0, _pick.default)(props, shouldMapOrKeys),
                (0, _pick.default)(nextProps, shouldMapOrKeys)
              );
            };

      var WithPropsOnChange =
        /*#__PURE__*/
        (function (_Component) {
          (0, _inheritsLoose2.default)(WithPropsOnChange, _Component);

          function WithPropsOnChange() {
            var _this;

            for (
              var _len = arguments.length, args = new Array(_len), _key = 0;
              _key < _len;
              _key++
            ) {
              args[_key] = arguments[_key];
            }

            _this =
              _Component.call.apply(_Component, [this].concat(args)) || this;
            _this.state = {
              computedProps: propsMapper(_this.props),
              prevProps: _this.props,
            };
            return _this;
          }

          WithPropsOnChange.getDerivedStateFromProps = function getDerivedStateFromProps(
            nextProps,
            prevState
          ) {
            if (shouldMap(prevState.prevProps, nextProps)) {
              return {
                computedProps: propsMapper(nextProps),
                prevProps: nextProps,
              };
            }

            return {
              prevProps: nextProps,
            };
          };

          var _proto = WithPropsOnChange.prototype;

          _proto.render = function render() {
            return factory(
              (0, _extends2.default)({}, this.props, this.state.computedProps)
            );
          };

          return WithPropsOnChange;
        })(React.Component);

      (0, _reactLifecyclesCompat.polyfill)(WithPropsOnChange);

      if (process.env.NODE_ENV !== "production") {
        return (0, _setDisplayName.default)(
          (0, _wrapDisplayName.default)(BaseComponent, "withPropsOnChange")
        )(WithPropsOnChange);
      }

      return WithPropsOnChange;
    };
  };

  var _default = withPropsOnChange;
  exports.default = _default;
});

var withPropsOnChange = /*@__PURE__*/ getDefaultExportFromCjs(
  withPropsOnChange_1
);

var noop$1 = function () {};

function _objectSpread$4(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(Object(source));
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(
        Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        })
      );
    }
    ownKeys.forEach(function (key) {
      _defineProperty$4(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$4(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
var textProps = {
  fill: propTypes.string,
  fontSize: propTypes.number,
  fontFamily: propTypes.string,
};
var axisThemePropType = propTypes.shape({
  domain: propTypes.shape({
    line: propTypes.shape({
      stroke: propTypes.string.isRequired,
      strokeWidth: propTypes.number.isRequired,
      strokeDasharray: propTypes.string,
    }).isRequired,
  }).isRequired,
  ticks: propTypes.shape({
    line: propTypes.shape({
      stroke: propTypes.string.isRequired,
      strokeWidth: propTypes.number.isRequired,
      strokeDasharray: propTypes.string,
    }).isRequired,
    text: propTypes.shape(_objectSpread$4({}, textProps)).isRequired,
  }).isRequired,
  legend: propTypes.shape({
    text: propTypes.shape(_objectSpread$4({}, textProps)).isRequired,
  }).isRequired,
});
var gridThemePropType = propTypes.shape({
  line: propTypes.shape({
    stroke: propTypes.string.isRequired,
    strokeWidth: propTypes.number.isRequired,
    strokeDasharray: propTypes.string,
  }).isRequired,
});
var legendsThemePropType = propTypes.shape({
  text: propTypes.shape(_objectSpread$4({}, textProps)).isRequired,
});
var labelsThemePropType = propTypes.shape({
  text: propTypes.shape(_objectSpread$4({}, textProps)).isRequired,
});
var dotsThemePropType = propTypes.shape({
  text: propTypes.shape(_objectSpread$4({}, textProps)).isRequired,
});
var markersThemePropType = propTypes.shape({
  text: propTypes.shape(_objectSpread$4({}, textProps)).isRequired,
});
var crosshairPropType = propTypes.shape({
  line: propTypes.shape({
    stroke: propTypes.string.isRequired,
    strokeWidth: propTypes.number.isRequired,
    strokeDasharray: propTypes.string,
  }).isRequired,
});
var annotationsPropType = propTypes.shape({
  text: propTypes.shape(
    _objectSpread$4({}, textProps, {
      outlineWidth: propTypes.number.isRequired,
      outlineColor: propTypes.string.isRequired,
    })
  ).isRequired,
  link: propTypes.shape({
    stroke: propTypes.string.isRequired,
    strokeWidth: propTypes.number.isRequired,
    outlineWidth: propTypes.number.isRequired,
    outlineColor: propTypes.string.isRequired,
  }).isRequired,
  outline: propTypes.shape({
    stroke: propTypes.string.isRequired,
    strokeWidth: propTypes.number.isRequired,
    outlineWidth: propTypes.number.isRequired,
    outlineColor: propTypes.string.isRequired,
  }).isRequired,
  symbol: propTypes.shape({
    fill: propTypes.string.isRequired,
    outlineWidth: propTypes.number.isRequired,
    outlineColor: propTypes.string.isRequired,
  }).isRequired,
});
var themePropType = propTypes.shape({
  background: propTypes.string.isRequired,
  fontFamily: propTypes.string.isRequired,
  fontSize: propTypes.number.isRequired,
  textColor: propTypes.string.isRequired,
  axis: axisThemePropType.isRequired,
  grid: gridThemePropType.isRequired,
  legends: legendsThemePropType.isRequired,
  labels: labelsThemePropType.isRequired,
  dots: dotsThemePropType.isRequired,
  markers: markersThemePropType,
  crosshair: crosshairPropType.isRequired,
  annotations: annotationsPropType.isRequired,
});

var defaultTheme = {
  background: "transparent",
  fontFamily: "sans-serif",
  fontSize: 11,
  textColor: "#333333",
  axis: {
    domain: {
      line: {
        stroke: "transparent",
        strokeWidth: 1,
      },
    },
    ticks: {
      line: {
        stroke: "#777777",
        strokeWidth: 1,
      },
      text: {},
    },
    legend: {
      text: {
        fontSize: 12,
      },
    },
  },
  grid: {
    line: {
      stroke: "#dddddd",
      strokeWidth: 1,
    },
  },
  legends: {
    text: {
      fill: "#333333",
    },
  },
  labels: {
    text: {},
  },
  markers: {
    lineColor: "#000000",
    lineStrokeWidth: 1,
    text: {},
  },
  dots: {
    text: {},
  },
  tooltip: {
    container: {
      background: "white",
      color: "inherit",
      fontSize: "inherit",
      borderRadius: "2px",
      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.25)",
      padding: "5px 9px",
    },
    basic: {
      whiteSpace: "pre",
      display: "flex",
      alignItems: "center",
    },
    chip: {
      marginRight: 7,
    },
    table: {},
    tableCell: {
      padding: "3px 5px",
    },
  },
  crosshair: {
    line: {
      stroke: "#000000",
      strokeWidth: 1,
      strokeOpacity: 0.75,
      strokeDasharray: "6 6",
    },
  },
  annotations: {
    text: {
      fontSize: 13,
      outlineWidth: 2,
      outlineColor: "#ffffff",
    },
    link: {
      stroke: "#000000",
      strokeWidth: 1,
      outlineWidth: 2,
      outlineColor: "#ffffff",
    },
    outline: {
      fill: "none",
      stroke: "#000000",
      strokeWidth: 2,
      outlineWidth: 2,
      outlineColor: "#ffffff",
    },
    symbol: {
      fill: "#000000",
      outlineWidth: 2,
      outlineColor: "#ffffff",
    },
  },
};

var fontProps = [
  "axis.ticks.text",
  "axis.legend.text",
  "legends.text",
  "labels.text",
  "dots.text",
  "markers.text",
  "annotations.text",
];
var extendDefaultTheme = function extendDefaultTheme(
  defaultTheme,
  customTheme
) {
  var theme = merge({}, defaultTheme, customTheme);
  fontProps.forEach(function (prop) {
    if (get$1(theme, "".concat(prop, ".fontFamily")) === undefined) {
      set(theme, "".concat(prop, ".fontFamily"), theme.fontFamily);
    }
    if (get$1(theme, "".concat(prop, ".fontSize")) === undefined) {
      set(theme, "".concat(prop, ".fontSize"), theme.fontSize);
    }
    if (get$1(theme, "".concat(prop, ".fill")) === undefined) {
      set(theme, "".concat(prop, ".fill"), theme.textColor);
    }
  });
  return theme;
};

var quantizeColorScales = {
  nivo: ["#d76445", "#f47560", "#e8c1a0", "#97e3d5", "#61cdbb", "#00b0a7"],
  BrBG: last$1(scheme),
  PRGn: last$1(scheme$1),
  PiYG: last$1(scheme$2),
  PuOr: last$1(scheme$3),
  RdBu: last$1(scheme$4),
  RdGy: last$1(scheme$5),
  RdYlBu: last$1(scheme$6),
  RdYlGn: last$1(scheme$7),
  spectral: last$1(scheme$8),
  blues: last$1(scheme$l),
  greens: last$1(scheme$m),
  greys: last$1(scheme$n),
  oranges: last$1(scheme$q),
  purples: last$1(scheme$o),
  reds: last$1(scheme$p),
  BuGn: last$1(scheme$9),
  BuPu: last$1(scheme$a),
  GnBu: last$1(scheme$b),
  OrRd: last$1(scheme$c),
  PuBuGn: last$1(scheme$d),
  PuBu: last$1(scheme$e),
  PuRd: last$1(scheme$f),
  RdPu: last$1(scheme$g),
  YlGnBu: last$1(scheme$h),
  YlGn: last$1(scheme$i),
  YlOrBr: last$1(scheme$j),
  YlOrRd: last$1(scheme$k),
};
var quantizeColorScalesKeys = Object.keys(quantizeColorScales);

var colorSchemes = {
  nivo: ["#e8c1a0", "#f47560", "#f1e15b", "#e8a838", "#61cdbb", "#97e3d5"],
  category10: schemeCategory10,
  accent: schemeAccent,
  dark2: schemeDark2,
  paired: schemePaired,
  pastel1: schemePastel1,
  pastel2: schemePastel2,
  set1: schemeSet1,
  set2: schemeSet2,
  set3: schemeSet3,
  brown_blueGreen: last$1(scheme),
  purpleRed_green: last$1(scheme$1),
  pink_yellowGreen: last$1(scheme$2),
  purple_orange: last$1(scheme$3),
  red_blue: last$1(scheme$4),
  red_grey: last$1(scheme$5),
  red_yellow_blue: last$1(scheme$6),
  red_yellow_green: last$1(scheme$7),
  spectral: last$1(scheme$8),
  blues: last$1(scheme$l),
  greens: last$1(scheme$m),
  greys: last$1(scheme$n),
  oranges: last$1(scheme$q),
  purples: last$1(scheme$o),
  reds: last$1(scheme$p),
  blue_green: last$1(scheme$9),
  blue_purple: last$1(scheme$a),
  green_blue: last$1(scheme$b),
  orange_red: last$1(scheme$c),
  purple_blue_green: last$1(scheme$d),
  purple_blue: last$1(scheme$e),
  purple_red: last$1(scheme$f),
  red_purple: last$1(scheme$g),
  yellow_green_blue: last$1(scheme$h),
  yellow_green: last$1(scheme$i),
  yellow_orange_brown: last$1(scheme$j),
  yellow_orange_red: last$1(scheme$k),
};

var quantizeColorScalePropType = propTypes.oneOfType([
  propTypes.oneOf(quantizeColorScalesKeys),
  propTypes.func,
  propTypes.arrayOf(propTypes.string),
]);

var curvePropMapping = {
  basis: curveBasis,
  basisClosed: curveBasisClosed,
  basisOpen: curveBasisOpen,
  bundle: curveBundle,
  cardinal: curveCardinal,
  cardinalClosed: curveCardinalClosed,
  cardinalOpen: curveCardinalOpen,
  catmullRom: curveCatmullRom,
  catmullRomClosed: curveCatmullRomClosed,
  catmullRomOpen: curveCatmullRomOpen,
  linear: curveLinear,
  linearClosed: curveLinearClosed,
  monotoneX: monotoneX,
  monotoneY: monotoneY,
  natural: curveNatural,
  step: curveStep,
  stepAfter: stepAfter,
  stepBefore: stepBefore,
};
var curvePropKeys = Object.keys(curvePropMapping);
var curvePropType = propTypes.oneOf(curvePropKeys);
var closedCurvePropKeys = curvePropKeys.filter(function (c) {
  return c.endsWith("Closed");
});
var closedCurvePropType = propTypes.oneOf(closedCurvePropKeys);
var areaCurvePropKeys = without(
  curvePropKeys,
  "bundle",
  "basisClosed",
  "basisOpen",
  "cardinalClosed",
  "cardinalOpen",
  "catmullRomClosed",
  "catmullRomOpen",
  "linearClosed"
);
var areaCurvePropType = propTypes.oneOf(areaCurvePropKeys);
var lineCurvePropKeys = without(
  curvePropKeys,
  "bundle",
  "basisClosed",
  "basisOpen",
  "cardinalClosed",
  "cardinalOpen",
  "catmullRomClosed",
  "catmullRomOpen",
  "linearClosed"
);
var lineCurvePropType = propTypes.oneOf(lineCurvePropKeys);
var curveFromProp = function curveFromProp(id) {
  var curveInterpolator = curvePropMapping[id];
  if (!curveInterpolator) {
    throw new TypeError(
      "'".concat(id, "', is not a valid curve interpolator identifier.")
    );
  }
  return curvePropMapping[id];
};

var defsPropTypes = {
  defs: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
    })
  ).isRequired,
  fill: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      match: propTypes.oneOfType([
        propTypes.oneOf(["*"]),
        propTypes.object,
        propTypes.func,
      ]).isRequired,
    })
  ).isRequired,
};

var stackOrderPropMapping = {
  ascending: stackOrderAscending,
  descending: stackOrderDescending,
  insideOut: stackOrderInsideOut,
  none: stackOrderNone,
  reverse: stackOrderReverse,
};
var stackOrderPropKeys = Object.keys(stackOrderPropMapping);
var stackOrderPropType = propTypes.oneOf(stackOrderPropKeys);
var stackOffsetPropMapping = {
  expand: stackOffsetExpand,
  diverging: stackOffsetDiverging,
  none: stackOffsetNone,
  silhouette: stackOffsetSilhouette,
  wiggle: stackOffsetWiggle,
};
var stackOffsetPropKeys = Object.keys(stackOffsetPropMapping);
var stackOffsetPropType = propTypes.oneOf(stackOffsetPropKeys);

var treeMapTilePropMapping = {
  binary: treemapBinary,
  dice: treemapDice,
  slice: treemapSlice,
  sliceDice: treemapSliceDice,
  squarify: treemapSquarify,
  resquarify: treemapResquarify,
};
var treeMapTilePropKeys = Object.keys(treeMapTilePropMapping);
var treeMapTilePropType = propTypes.oneOf(treeMapTilePropKeys);

var marginPropType = propTypes.shape({
  top: propTypes.number,
  right: propTypes.number,
  bottom: propTypes.number,
  left: propTypes.number,
}).isRequired;
var motionPropTypes = {
  animate: propTypes.bool.isRequired,
  motionStiffness: propTypes.number.isRequired,
  motionDamping: propTypes.number.isRequired,
};
var blendModes = [
  "normal",
  "multiply",
  "screen",
  "overlay",
  "darken",
  "lighten",
  "color-dodge",
  "color-burn",
  "hard-light",
  "soft-light",
  "difference",
  "exclusion",
  "hue",
  "saturation",
  "color",
  "luminosity",
];
var blendModePropType = propTypes.oneOf(blendModes);
var defaultColorRange = ordinal(schemeSet3);
var defaultMargin = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
};

function _objectSpread$1$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(Object(source));
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(
        Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        })
      );
    }
    ownKeys.forEach(function (key) {
      _defineProperty$1$1(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$1$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
var useDimensions = function useDimensions(width, height) {
  var partialMargin =
    arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return useMemo(
    function () {
      var margin = _objectSpread$1$1({}, defaultMargin, partialMargin);
      return {
        margin: margin,
        innerWidth: width - margin.left - margin.right,
        innerHeight: height - margin.top - margin.bottom,
        outerWidth: width,
        outerHeight: height,
      };
    },
    [
      width,
      height,
      partialMargin.top,
      partialMargin.right,
      partialMargin.bottom,
      partialMargin.left,
    ]
  );
};

var usePartialTheme = function usePartialTheme(partialTheme) {
  return useMemo(
    function () {
      return extendDefaultTheme(defaultTheme, partialTheme);
    },
    [partialTheme]
  );
};

var getValueFormatter = function getValueFormatter(format$1$1) {
  if (typeof format$1$1 === "function") return format$1$1;
  if (typeof format$1$1 === "string") {
    if (format$1$1.indexOf("time:") === 0) {
      return timeFormat$1(format$1$1.slice("5"));
    }
    return format$1(format$1$1);
  }
  return function (v) {
    return v;
  };
};
var useValueFormatter = function useValueFormatter(format) {
  return useMemo(
    function () {
      return getValueFormatter(format);
    },
    [format]
  );
};

var themeContext = createContext();
var defaultPartialTheme = {};
var ThemeProvider = function ThemeProvider(_ref) {
  var _ref$theme = _ref.theme,
    partialTheme = _ref$theme === void 0 ? defaultPartialTheme : _ref$theme,
    children = _ref.children;
  var theme = usePartialTheme(partialTheme);
  return React.createElement(
    themeContext.Provider,
    {
      value: theme,
    },
    children
  );
};
ThemeProvider.propTypes = {
  children: propTypes.node.isRequired,
  theme: propTypes.object,
};
var useTheme = function useTheme() {
  return useContext(themeContext);
};

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj &&
        typeof Symbol === "function" &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? "symbol"
        : typeof obj;
    };
  }
  return _typeof(obj);
}
function _extends$1() {
  _extends$1 =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$1.apply(this, arguments);
}
function _objectSpread$2$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(Object(source));
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(
        Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        })
      );
    }
    ownKeys.forEach(function (key) {
      _defineProperty$2$1(target, key, source[key]);
    });
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$1(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$1(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized(self);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return self;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, writable: true, configurable: true },
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf =
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
  return _setPrototypeOf(o, p);
}
function _defineProperty$2$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
var enhancedSpring = function enhancedSpring(value, config) {
  if (typeof value !== "number") {
    return {
      value: value,
      config: config,
      interpolator:
        config && config.interpolator ? config.interpolator : interpolate$1,
    };
  }
  return reactMotion.spring(value, config);
};
var SmartMotion = (function (_PureComponent) {
  _inherits(SmartMotion, _PureComponent);
  function SmartMotion() {
    var _getPrototypeOf2;
    var _this;
    _classCallCheck(this, SmartMotion);
    for (
      var _len = arguments.length, args = new Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key];
    }
    _this = _possibleConstructorReturn(
      this,
      (_getPrototypeOf2 = _getPrototypeOf(SmartMotion)).call.apply(
        _getPrototypeOf2,
        [this].concat(args)
      )
    );
    _defineProperty$2$1(_assertThisInitialized(_this), "oldValues", {});
    _defineProperty$2$1(_assertThisInitialized(_this), "newInters", {});
    _defineProperty$2$1(_assertThisInitialized(_this), "currentStepValues", {});
    _defineProperty$2$1(_assertThisInitialized(_this), "stepValues", {});
    _defineProperty$2$1(_assertThisInitialized(_this), "stepInterpolators", {});
    return _this;
  }
  _createClass(SmartMotion, [
    {
      key: "render",
      value: function render() {
        var _this2 = this;
        var _this$props = this.props,
          style = _this$props.style,
          children = _this$props.children,
          rest = _objectWithoutProperties(_this$props, ["style", "children"]);
        var resolvedStyle = style(enhancedSpring);
        for (var key in resolvedStyle) {
          if (resolvedStyle[key] && resolvedStyle[key].interpolator) {
            this.currentStepValues[key] = this.currentStepValues[key] || 0;
            if (
              typeof this.newInters[key] === "undefined" ||
              resolvedStyle[key].value !== this.newInters[key].value
            ) {
              this.newInters[key] = resolvedStyle[key];
              this.stepValues[key] = this.currentStepValues[key] + 1;
              this.stepInterpolators[key] = this.newInters[key].interpolator(
                this.oldValues[key],
                this.newInters[key].value
              );
            }
            resolvedStyle[key] = reactMotion.spring(
              this.stepValues[key],
              this.newInters[key].config
            );
          }
        }
        return React.createElement(
          reactMotion.Motion,
          _extends$1({}, rest, {
            style: resolvedStyle,
          }),
          function (values) {
            var newValues = {};
            for (var _key2 in values) {
              if (_this2.stepValues[_key2]) {
                _this2.currentStepValues[_key2] = values[_key2];
                var percentage =
                  _this2.currentStepValues[_key2] -
                  _this2.stepValues[_key2] +
                  1;
                _this2.oldValues[_key2] = newValues[
                  _key2
                ] = _this2.stepInterpolators[_key2](percentage);
              }
            }
            return children(_objectSpread$2$1({}, values, newValues));
          }
        );
      },
    },
  ]);
  return SmartMotion;
})(PureComponent);
_defineProperty$2$1(SmartMotion, "propTypes", {
  children: propTypes.func.isRequired,
  style: propTypes.func.isRequired,
});

var motionConfigContext = createContext();
var MotionConfigProvider = function MotionConfigProvider(_ref) {
  var children = _ref.children,
    animate = _ref.animate,
    stiffness = _ref.stiffness,
    damping = _ref.damping;
  var value = useMemo(
    function () {
      return {
        animate: animate,
        springConfig: {
          stiffness: stiffness,
          damping: damping,
        },
      };
    },
    [animate, stiffness, damping]
  );
  return React.createElement(
    motionConfigContext.Provider,
    {
      value: value,
    },
    children
  );
};
MotionConfigProvider.propTypes = {
  children: propTypes.node.isRequired,
  animate: propTypes.bool.isRequired,
  stiffness: propTypes.number.isRequired,
  damping: propTypes.number.isRequired,
};
MotionConfigProvider.defaultProps = {
  animate: true,
  stiffness: 90,
  damping: 15,
};

var useMotionConfig = function useMotionConfig() {
  return useContext(motionConfigContext);
};

function _objectSpread$3$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(Object(source));
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(
        Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        })
      );
    }
    ownKeys.forEach(function (key) {
      _defineProperty$3$1(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$3$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _slicedToArray$2(arr, i) {
  return (
    _arrayWithHoles$2(arr) ||
    _iterableToArrayLimit$2(arr, i) ||
    _nonIterableRest$2()
  );
}
function _nonIterableRest$2() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
function _iterableToArrayLimit$2(arr, i) {
  if (
    !(
      Symbol.iterator in Object(arr) ||
      Object.prototype.toString.call(arr) === "[object Arguments]"
    )
  ) {
    return;
  }
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;
  try {
    for (
      var _i = arr[Symbol.iterator](), _s;
      !(_n = (_s = _i.next()).done);
      _n = true
    ) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles$2(arr) {
  if (Array.isArray(arr)) return arr;
}
var containerStyle = {
  position: "relative",
};
var tooltipStyle$1 = {
  pointerEvents: "none",
  position: "absolute",
  zIndex: 10,
};
var Container = function Container(_ref) {
  var children = _ref.children,
    theme = _ref.theme,
    _ref$isInteractive = _ref.isInteractive,
    isInteractive = _ref$isInteractive === void 0 ? true : _ref$isInteractive,
    animate = _ref.animate,
    motionStiffness = _ref.motionStiffness,
    motionDamping = _ref.motionDamping;
  var containerEl = useRef(null);
  var _useState = useState({
      isTooltipVisible: false,
      tooltipContent: null,
      position: {},
    }),
    _useState2 = _slicedToArray$2(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];
  var showTooltip = useCallback(
    function (content, event) {
      if (!containerEl) return;
      var bounds = containerEl.current.getBoundingClientRect();
      var clientX = event.clientX,
        clientY = event.clientY;
      var x = clientX - bounds.left;
      var y = clientY - bounds.top;
      var position = {};
      if (x < bounds.width / 2) position.left = x + 20;
      else position.right = bounds.width - x + 20;
      if (y < bounds.height / 2) position.top = y - 12;
      else position.bottom = bounds.height - y - 12;
      setState({
        isTooltipVisible: true,
        tooltipContent: content,
        position: position,
      });
    },
    [containerEl]
  );
  var hideTooltip = useCallback(function () {
    setState({
      isTooltipVisible: false,
      tooltipContent: null,
    });
  });
  var isTooltipVisible = state.isTooltipVisible,
    tooltipContent = state.tooltipContent,
    position = state.position;
  var content;
  if (isInteractive === true) {
    content = React.createElement(
      "div",
      {
        style: containerStyle,
        ref: containerEl,
      },
      children({
        showTooltip: isInteractive ? showTooltip : noop$1,
        hideTooltip: isInteractive ? hideTooltip : noop$1,
      }),
      isTooltipVisible &&
        React.createElement(
          "div",
          {
            style: _objectSpread$3$1(
              {},
              tooltipStyle$1,
              position,
              theme.tooltip
            ),
          },
          tooltipContent
        )
    );
  } else {
    content = children({
      showTooltip: isInteractive ? showTooltip : noop$1,
      hideTooltip: isInteractive ? hideTooltip : noop$1,
    });
  }
  return React.createElement(
    themeContext.Provider,
    {
      value: theme,
    },
    React.createElement(
      MotionConfigProvider,
      {
        animate: animate,
        stiffness: motionStiffness,
        damping: motionDamping,
      },
      React.createElement(
        tooltipContext.Provider,
        {
          value: [showTooltip, hideTooltip],
        },
        content
      )
    )
  );
};
Container.propTypes = {
  children: propTypes.func.isRequired,
  isInteractive: propTypes.bool,
  theme: propTypes.object.isRequired,
  animate: propTypes.bool.isRequired,
  motionStiffness: propTypes.number,
  motionDamping: propTypes.number,
};

function _typeof$1(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$1 = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof$1 = function _typeof(obj) {
      return obj &&
        typeof Symbol === "function" &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? "symbol"
        : typeof obj;
    };
  }
  return _typeof$1(obj);
}
function _classCallCheck$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$1(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$1(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$1(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties$1(Constructor, staticProps);
  return Constructor;
}
function _possibleConstructorReturn$1(self, call) {
  if (call && (_typeof$1(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized$1(self);
}
function _getPrototypeOf$1(o) {
  _getPrototypeOf$1 = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf$1(o);
}
function _assertThisInitialized$1(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return self;
}
function _inherits$1(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, writable: true, configurable: true },
  });
  if (superClass) _setPrototypeOf$1(subClass, superClass);
}
function _setPrototypeOf$1(o, p) {
  _setPrototypeOf$1 =
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
  return _setPrototypeOf$1(o, p);
}
function _defineProperty$4$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
var ResponsiveWrapper = (function (_Component) {
  _inherits$1(ResponsiveWrapper, _Component);
  function ResponsiveWrapper() {
    var _getPrototypeOf2;
    var _this;
    _classCallCheck$1(this, ResponsiveWrapper);
    for (
      var _len = arguments.length, args = new Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key];
    }
    _this = _possibleConstructorReturn$1(
      this,
      (_getPrototypeOf2 = _getPrototypeOf$1(ResponsiveWrapper)).call.apply(
        _getPrototypeOf2,
        [this].concat(args)
      )
    );
    _defineProperty$4$1(_assertThisInitialized$1(_this), "state", {
      dimensions: {
        width: -1,
        height: -1,
      },
    });
    return _this;
  }
  _createClass$1(ResponsiveWrapper, [
    {
      key: "render",
      value: function render() {
        var _this2 = this;
        var _this$state$dimension = this.state.dimensions,
          width = _this$state$dimension.width,
          height = _this$state$dimension.height;
        var shouldRender = width > 0 && height > 0;
        return React.createElement(
          Measure,
          {
            bounds: true,
            onResize: function onResize(contentRect) {
              _this2.setState({
                dimensions: contentRect.bounds,
              });
            },
          },
          function (_ref) {
            var measureRef = _ref.measureRef;
            return React.createElement(
              "div",
              {
                ref: measureRef,
                style: {
                  width: "100%",
                  height: "100%",
                },
              },
              shouldRender &&
                _this2.props.children({
                  width: width,
                  height: height,
                })
            );
          }
        );
      },
    },
  ]);
  return ResponsiveWrapper;
})(Component);
_defineProperty$4$1(ResponsiveWrapper, "propTypes", {
  children: propTypes.func.isRequired,
});
var LinearGradient = function LinearGradient(_ref) {
  var id = _ref.id,
    colors = _ref.colors;
  return React.createElement(
    "linearGradient",
    {
      id: id,
      x1: 0,
      x2: 0,
      y1: 0,
      y2: 1,
    },
    colors.map(function (_ref2) {
      var offset = _ref2.offset,
        color = _ref2.color,
        opacity = _ref2.opacity;
      return React.createElement("stop", {
        key: offset,
        offset: "".concat(offset, "%"),
        stopColor: color,
        stopOpacity: opacity !== undefined ? opacity : 1,
      });
    })
  );
};
LinearGradient.propTypes = {
  id: propTypes.string.isRequired,
  colors: propTypes.arrayOf(
    propTypes.shape({
      offset: propTypes.number.isRequired,
      color: propTypes.string.isRequired,
    })
  ).isRequired,
};

var gradientTypes = {
  linearGradient: LinearGradient,
};
var PatternDots = memo(function (_ref) {
  var id = _ref.id,
    background = _ref.background,
    color = _ref.color,
    size = _ref.size,
    padding = _ref.padding,
    stagger = _ref.stagger;
  var fullSize = size + padding;
  var radius = size / 2;
  var halfPadding = padding / 2;
  if (stagger === true) {
    fullSize = size * 2 + padding * 2;
  }
  return React.createElement(
    "pattern",
    {
      id: id,
      width: fullSize,
      height: fullSize,
      patternUnits: "userSpaceOnUse",
    },
    React.createElement("rect", {
      width: fullSize,
      height: fullSize,
      fill: background,
    }),
    React.createElement("circle", {
      cx: halfPadding + radius,
      cy: halfPadding + radius,
      r: radius,
      fill: color,
    }),
    stagger &&
      React.createElement("circle", {
        cx: padding * 1.5 + size + radius,
        cy: padding * 1.5 + size + radius,
        r: radius,
        fill: color,
      })
  );
});
PatternDots.displayName = "PatternDots";
PatternDots.propTypes = {
  id: propTypes.string.isRequired,
  color: propTypes.string.isRequired,
  background: propTypes.string.isRequired,
  size: propTypes.number.isRequired,
  padding: propTypes.number.isRequired,
  stagger: propTypes.bool.isRequired,
};
PatternDots.defaultProps = {
  color: "#000000",
  background: "#ffffff",
  size: 4,
  padding: 4,
  stagger: false,
};
var degreesToRadians = function degreesToRadians(degrees) {
  return (degrees * Math.PI) / 180;
};

var textPropsByEngine = {
  svg: {
    align: {
      left: "start",
      center: "middle",
      right: "end",
    },
    baseline: {
      top: "text-before-edge",
      center: "central",
      bottom: "alphabetic",
    },
  },
  canvas: {
    align: {
      left: "left",
      center: "center",
      right: "right",
    },
    baseline: {
      top: "top",
      center: "middle",
      bottom: "bottom",
    },
  },
};
var PatternLines = memo(function (_ref) {
  var id = _ref.id,
    _spacing = _ref.spacing,
    _rotation = _ref.rotation,
    background = _ref.background,
    color = _ref.color,
    lineWidth = _ref.lineWidth;
  var rotation = Math.round(_rotation) % 360;
  var spacing = Math.abs(_spacing);
  if (rotation > 180) rotation = rotation - 360;
  else if (rotation > 90) rotation = rotation - 180;
  else if (rotation < -180) rotation = rotation + 360;
  else if (rotation < -90) rotation = rotation + 180;
  var width = spacing;
  var height = spacing;
  var path;
  if (rotation === 0) {
    path = "\n                M 0 0 L "
      .concat(width, " 0\n                M 0 ")
      .concat(height, " L ")
      .concat(width, " ")
      .concat(height, "\n            ");
  } else if (rotation === 90) {
    path = "\n                M 0 0 L 0 "
      .concat(height, "\n                M ")
      .concat(width, " 0 L ")
      .concat(width, " ")
      .concat(height, "\n            ");
  } else {
    width = Math.abs(spacing / Math.sin(degreesToRadians(rotation)));
    height = spacing / Math.sin(degreesToRadians(90 - rotation));
    if (rotation > 0) {
      path = "\n                    M 0 "
        .concat(-height, " L ")
        .concat(width * 2, " ")
        .concat(height, "\n                    M ")
        .concat(-width, " ")
        .concat(-height, " L ")
        .concat(width, " ")
        .concat(height, "\n                    M ")
        .concat(-width, " 0 L ")
        .concat(width, " ")
        .concat(height * 2, "\n                ");
    } else {
      path = "\n                    M "
        .concat(-width, " ")
        .concat(height, " L ")
        .concat(width, " ")
        .concat(-height, "\n                    M ")
        .concat(-width, " ")
        .concat(height * 2, " L ")
        .concat(width * 2, " ")
        .concat(-height, "\n                    M 0 ")
        .concat(height * 2, " L ")
        .concat(width * 2, " 0\n                ");
    }
  }
  return React.createElement(
    "pattern",
    {
      id: id,
      width: width,
      height: height,
      patternUnits: "userSpaceOnUse",
    },
    React.createElement("rect", {
      width: width,
      height: height,
      fill: background,
      stroke: "rgba(255, 0, 0, 0.1)",
      strokeWidth: 0,
    }),
    React.createElement("path", {
      d: path,
      strokeWidth: lineWidth,
      stroke: color,
      strokeLinecap: "square",
    })
  );
});
PatternLines.displayName = "PatternLines";
PatternLines.propTypes = {
  id: propTypes.string.isRequired,
  spacing: propTypes.number.isRequired,
  rotation: propTypes.number.isRequired,
  background: propTypes.string.isRequired,
  color: propTypes.string.isRequired,
  lineWidth: propTypes.number.isRequired,
};
PatternLines.defaultProps = {
  spacing: 5,
  rotation: 0,
  color: "#000000",
  background: "#ffffff",
  lineWidth: 2,
};
var PatternSquares = memo(function (_ref) {
  var id = _ref.id,
    background = _ref.background,
    color = _ref.color,
    size = _ref.size,
    padding = _ref.padding,
    stagger = _ref.stagger;
  var fullSize = size + padding;
  var halfPadding = padding / 2;
  if (stagger === true) {
    fullSize = size * 2 + padding * 2;
  }
  return React.createElement(
    "pattern",
    {
      id: id,
      width: fullSize,
      height: fullSize,
      patternUnits: "userSpaceOnUse",
    },
    React.createElement("rect", {
      width: fullSize,
      height: fullSize,
      fill: background,
    }),
    React.createElement("rect", {
      x: halfPadding,
      y: halfPadding,
      width: size,
      height: size,
      fill: color,
    }),
    stagger &&
      React.createElement("rect", {
        x: padding * 1.5 + size,
        y: padding * 1.5 + size,
        width: size,
        height: size,
        fill: color,
      })
  );
});
PatternSquares.displayName = "PatternSquares";
PatternSquares.propTypes = {
  id: propTypes.string.isRequired,
  color: propTypes.string.isRequired,
  background: propTypes.string.isRequired,
  size: propTypes.number.isRequired,
  padding: propTypes.number.isRequired,
  stagger: propTypes.bool.isRequired,
};
PatternSquares.defaultProps = {
  color: "#000000",
  background: "#ffffff",
  size: 4,
  padding: 4,
  stagger: false,
};

var patternTypes = {
  patternDots: PatternDots,
  patternLines: PatternLines,
  patternSquares: PatternSquares,
};

function _objectWithoutProperties$1(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$1$1(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$1$1(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function _objectSpread$8(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(Object(source));
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(
        Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        })
      );
    }
    ownKeys.forEach(function (key) {
      _defineProperty$9(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$9(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
var defsMapping = _objectSpread$8({}, gradientTypes, patternTypes);
var Defs = function Defs(_ref) {
  var definitions = _ref.defs;
  if (!definitions || definitions.length < 1) return null;
  return React.createElement(
    "defs",
    null,
    definitions.map(function (_ref2) {
      var type = _ref2.type,
        def = _objectWithoutProperties$1(_ref2, ["type"]);
      if (defsMapping[type])
        return React.createElement(
          defsMapping[type],
          _objectSpread$8(
            {
              key: def.id,
            },
            def
          )
        );
      return null;
    })
  );
};
Defs.propTypes = {
  defs: propTypes.arrayOf(
    propTypes.shape({
      type: propTypes.oneOf(Object.keys(defsMapping)).isRequired,
      id: propTypes.string.isRequired,
    })
  ),
};
var Defs$1 = memo(Defs);

var SvgWrapper = function SvgWrapper(_ref) {
  var width = _ref.width,
    height = _ref.height,
    margin = _ref.margin,
    defs = _ref.defs,
    children = _ref.children;
  var theme = useTheme();
  return React.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      role: "img",
      width: width,
      height: height,
    },
    React.createElement(Defs$1, {
      defs: defs,
    }),
    React.createElement("rect", {
      width: width,
      height: height,
      fill: theme.background,
    }),
    React.createElement(
      "g",
      {
        transform: "translate("
          .concat(margin.left, ",")
          .concat(margin.top, ")"),
      },
      children
    )
  );
};
SvgWrapper.propTypes = {
  width: propTypes.number.isRequired,
  height: propTypes.number.isRequired,
  margin: propTypes.shape({
    top: propTypes.number.isRequired,
    left: propTypes.number.isRequired,
  }).isRequired,
  defs: propTypes.array,
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]).isRequired,
};

var DotsItemSymbol = function DotsItemSymbol(_ref) {
  var size = _ref.size,
    color = _ref.color,
    borderWidth = _ref.borderWidth,
    borderColor = _ref.borderColor;
  return React.createElement("circle", {
    r: size / 2,
    fill: color,
    stroke: borderColor,
    strokeWidth: borderWidth,
    style: {
      pointerEvents: "none",
    },
  });
};
DotsItemSymbol.propTypes = {
  size: propTypes.number.isRequired,
  color: propTypes.string.isRequired,
  borderWidth: propTypes.number.isRequired,
  borderColor: propTypes.string.isRequired,
};
var DotsItemSymbol$1 = memo(DotsItemSymbol);

var DotsItem = function DotsItem(_ref) {
  var x = _ref.x,
    y = _ref.y,
    symbol = _ref.symbol,
    size = _ref.size,
    datum = _ref.datum,
    color = _ref.color,
    borderWidth = _ref.borderWidth,
    borderColor = _ref.borderColor,
    label = _ref.label,
    labelTextAnchor = _ref.labelTextAnchor,
    labelYOffset = _ref.labelYOffset,
    theme = _ref.theme;
  return React.createElement(
    "g",
    {
      transform: "translate(".concat(x, ", ").concat(y, ")"),
      style: {
        pointerEvents: "none",
      },
    },
    React.createElement(symbol, {
      size: size,
      color: color,
      datum: datum,
      borderWidth: borderWidth,
      borderColor: borderColor,
    }),
    label &&
      React.createElement(
        "text",
        {
          textAnchor: labelTextAnchor,
          y: labelYOffset,
          style: theme.dots.text,
        },
        label
      )
  );
};
DotsItem.propTypes = {
  x: propTypes.number.isRequired,
  y: propTypes.number.isRequired,
  datum: propTypes.object.isRequired,
  size: propTypes.number.isRequired,
  color: propTypes.string.isRequired,
  borderWidth: propTypes.number.isRequired,
  borderColor: propTypes.string.isRequired,
  symbol: propTypes.oneOfType([propTypes.func, propTypes.object]),
  label: propTypes.oneOfType([propTypes.string, propTypes.number]),
  labelTextAnchor: propTypes.oneOf(["start", "middle", "end"]),
  labelYOffset: propTypes.number.isRequired,
  theme: propTypes.shape({
    dots: dotsThemePropType.isRequired,
  }).isRequired,
};
var DotsItemDefaultProps = {
  symbol: DotsItemSymbol$1,
  labelTextAnchor: "middle",
  labelYOffset: -12,
};
DotsItem.defaultProps = DotsItemDefaultProps;
var DotsItem$1 = memo(DotsItem);

var computeLabel = function computeLabel(_ref) {
  var axis = _ref.axis,
    width = _ref.width,
    height = _ref.height,
    position = _ref.position,
    offsetX = _ref.offsetX,
    offsetY = _ref.offsetY,
    orientation = _ref.orientation;
  var x = 0;
  var y = 0;
  var rotation = orientation === "vertical" ? -90 : 0;
  var textAnchor = "start";
  if (axis === "x") {
    switch (position) {
      case "top-left":
        x = -offsetX;
        y = offsetY;
        textAnchor = "end";
        break;
      case "top":
        y = -offsetY;
        if (orientation === "horizontal") {
          textAnchor = "middle";
        } else {
          textAnchor = "start";
        }
        break;
      case "top-right":
        x = offsetX;
        y = offsetY;
        if (orientation === "horizontal") {
          textAnchor = "start";
        } else {
          textAnchor = "end";
        }
        break;
      case "right":
        x = offsetX;
        y = height / 2;
        if (orientation === "horizontal") {
          textAnchor = "start";
        } else {
          textAnchor = "middle";
        }
        break;
      case "bottom-right":
        x = offsetX;
        y = height - offsetY;
        textAnchor = "start";
        break;
      case "bottom":
        y = height + offsetY;
        if (orientation === "horizontal") {
          textAnchor = "middle";
        } else {
          textAnchor = "end";
        }
        break;
      case "bottom-left":
        y = height - offsetY;
        x = -offsetX;
        if (orientation === "horizontal") {
          textAnchor = "end";
        } else {
          textAnchor = "start";
        }
        break;
      case "left":
        x = -offsetX;
        y = height / 2;
        if (orientation === "horizontal") {
          textAnchor = "end";
        } else {
          textAnchor = "middle";
        }
        break;
    }
  } else {
    switch (position) {
      case "top-left":
        x = offsetX;
        y = -offsetY;
        textAnchor = "start";
        break;
      case "top":
        x = width / 2;
        y = -offsetY;
        if (orientation === "horizontal") {
          textAnchor = "middle";
        } else {
          textAnchor = "start";
        }
        break;
      case "top-right":
        x = width - offsetX;
        y = -offsetY;
        if (orientation === "horizontal") {
          textAnchor = "end";
        } else {
          textAnchor = "start";
        }
        break;
      case "right":
        x = width + offsetX;
        if (orientation === "horizontal") {
          textAnchor = "start";
        } else {
          textAnchor = "middle";
        }
        break;
      case "bottom-right":
        x = width - offsetX;
        y = offsetY;
        textAnchor = "end";
        break;
      case "bottom":
        x = width / 2;
        y = offsetY;
        if (orientation === "horizontal") {
          textAnchor = "middle";
        } else {
          textAnchor = "end";
        }
        break;
      case "bottom-left":
        x = offsetX;
        y = offsetY;
        if (orientation === "horizontal") {
          textAnchor = "start";
        } else {
          textAnchor = "end";
        }
        break;
      case "left":
        x = -offsetX;
        if (orientation === "horizontal") {
          textAnchor = "end";
        } else {
          textAnchor = "middle";
        }
        break;
    }
  }
  return {
    x: x,
    y: y,
    rotation: rotation,
    textAnchor: textAnchor,
  };
};
var CartesianMarkersItem = function CartesianMarkersItem(_ref2) {
  var width = _ref2.width,
    height = _ref2.height,
    axis = _ref2.axis,
    scale = _ref2.scale,
    value = _ref2.value,
    lineStyle = _ref2.lineStyle,
    textStyle = _ref2.textStyle,
    legend = _ref2.legend,
    legendPosition = _ref2.legendPosition,
    legendOffsetX = _ref2.legendOffsetX,
    legendOffsetY = _ref2.legendOffsetY,
    legendOrientation = _ref2.legendOrientation;
  var theme = useTheme();
  var x = 0;
  var x2 = 0;
  var y = 0;
  var y2 = 0;
  if (axis === "y") {
    y = scale(value);
    x2 = width;
  } else {
    x = scale(value);
    y2 = height;
  }
  var legendNode = null;
  if (legend) {
    var legendProps = computeLabel({
      axis: axis,
      width: width,
      height: height,
      position: legendPosition,
      offsetX: legendOffsetX,
      offsetY: legendOffsetY,
      orientation: legendOrientation,
    });
    legendNode = React.createElement(
      "text",
      {
        transform: "translate("
          .concat(legendProps.x, ", ")
          .concat(legendProps.y, ") rotate(")
          .concat(legendProps.rotation, ")"),
        textAnchor: legendProps.textAnchor,
        dominantBaseline: "central",
        style: textStyle,
      },
      legend
    );
  }
  return React.createElement(
    "g",
    {
      transform: "translate(".concat(x, ", ").concat(y, ")"),
    },
    React.createElement("line", {
      x1: 0,
      x2: x2,
      y1: 0,
      y2: y2,
      stroke: theme.markers.lineColor,
      strokeWidth: theme.markers.lineStrokeWidth,
      style: lineStyle,
    }),
    legendNode
  );
};
CartesianMarkersItem.propTypes = {
  width: propTypes.number.isRequired,
  height: propTypes.number.isRequired,
  axis: propTypes.oneOf(["x", "y"]).isRequired,
  scale: propTypes.func.isRequired,
  value: propTypes.oneOfType([
    propTypes.number,
    propTypes.string,
    propTypes.instanceOf(Date),
  ]).isRequired,
  lineStyle: propTypes.object,
  textStyle: propTypes.object,
  legend: propTypes.string,
  legendPosition: propTypes.oneOf([
    "top-left",
    "top",
    "top-right",
    "right",
    "bottom-right",
    "bottom",
    "bottom-left",
    "left",
  ]),
  legendOffsetX: propTypes.number.isRequired,
  legendOffsetY: propTypes.number.isRequired,
  legendOrientation: propTypes.oneOf(["horizontal", "vertical"]).isRequired,
};
CartesianMarkersItem.defaultProps = {
  legendPosition: "top-right",
  legendOffsetX: 14,
  legendOffsetY: 14,
  legendOrientation: "horizontal",
};
var CartesianMarkersItem$1 = memo(CartesianMarkersItem);

function _extends$1$1() {
  _extends$1$1 =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$1$1.apply(this, arguments);
}
var CartesianMarkers = function CartesianMarkers(_ref) {
  var markers = _ref.markers,
    width = _ref.width,
    height = _ref.height,
    xScale = _ref.xScale,
    yScale = _ref.yScale;
  if (!markers || markers.length === 0) return null;
  return markers.map(function (marker, i) {
    return React.createElement(
      CartesianMarkersItem$1,
      _extends$1$1(
        {
          key: i,
        },
        marker,
        {
          width: width,
          height: height,
          scale: marker.axis === "y" ? yScale : xScale,
        }
      )
    );
  });
};
CartesianMarkers.propTypes = {
  width: propTypes.number.isRequired,
  height: propTypes.number.isRequired,
  xScale: propTypes.func.isRequired,
  yScale: propTypes.func.isRequired,
  markers: propTypes.arrayOf(
    propTypes.shape({
      axis: propTypes.oneOf(["x", "y"]).isRequired,
      value: propTypes.oneOfType([
        propTypes.number,
        propTypes.string,
        propTypes.instanceOf(Date),
      ]).isRequired,
      lineStyle: propTypes.object,
      textStyle: propTypes.object,
    })
  ),
};
var CartesianMarkers$1 = memo(CartesianMarkers);

var withDimensions = function () {
  return compose(
    defaultProps({
      margin: defaultMargin,
    }),
    setPropTypes({
      width: propTypes.number.isRequired,
      height: propTypes.number.isRequired,
      margin: marginPropType,
    }),
    withPropsOnChange(
      function (props, nextProps) {
        return (
          props.width !== nextProps.width ||
          props.height !== nextProps.height ||
          !isEqual(props.margin, nextProps.margin)
        );
      },
      function (props) {
        var margin = Object.assign({}, defaultMargin, props.margin);
        return {
          margin: margin,
          width: props.width - margin.left - margin.right,
          height: props.height - margin.top - margin.bottom,
          outerWidth: props.width,
          outerHeight: props.height,
        };
      }
    )
  );
};

var getLabelGenerator = function getLabelGenerator(_label, labelFormat) {
  var getRawLabel = isFunction$1(_label)
    ? _label
    : function (d) {
        return get$1(d, _label);
      };
  var formatter;
  if (labelFormat) {
    formatter = isFunction$1(labelFormat) ? labelFormat : format$1(labelFormat);
  }
  if (formatter)
    return function (d) {
      return formatter(getRawLabel(d));
    };
  return getRawLabel;
};

function _defineProperty$c(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
var withTheme = function () {
  var _ref =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref$srcKey = _ref.srcKey,
    srcKey = _ref$srcKey === void 0 ? "theme" : _ref$srcKey,
    _ref$destKey = _ref.destKey,
    destKey = _ref$destKey === void 0 ? "theme" : _ref$destKey;
  return compose(
    setPropTypes(_defineProperty$c({}, srcKey, propTypes.object)),
    withPropsOnChange([srcKey], function (props) {
      return _defineProperty$c(
        {},
        destKey,
        extendDefaultTheme(defaultTheme, props[srcKey])
      );
    })
  );
};

function _typeof$2(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$2 = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof$2 = function _typeof(obj) {
      return obj &&
        typeof Symbol === "function" &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? "symbol"
        : typeof obj;
    };
  }
  return _typeof$2(obj);
}
function _objectWithoutProperties$2(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$2(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$2(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function _classCallCheck$2(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$2(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$2(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$2(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties$2(Constructor, staticProps);
  return Constructor;
}
function _possibleConstructorReturn$2(self, call) {
  if (call && (_typeof$2(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized$2(self);
}
function _assertThisInitialized$2(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return self;
}
function _getPrototypeOf$2(o) {
  _getPrototypeOf$2 = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf$2(o);
}
function _inherits$2(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, writable: true, configurable: true },
  });
  if (superClass) _setPrototypeOf$2(subClass, superClass);
}
function _setPrototypeOf$2(o, p) {
  _setPrototypeOf$2 =
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
  return _setPrototypeOf$2(o, p);
}
var containerStyle$1 = {
  position: "relative",
};
var Container$1 = function Container(_ref) {
  var theme = _ref.theme,
    _ref$renderWrapper = _ref.renderWrapper,
    renderWrapper = _ref$renderWrapper === void 0 ? true : _ref$renderWrapper,
    children = _ref.children,
    animate = _ref.animate,
    motionStiffness = _ref.motionStiffness,
    motionDamping = _ref.motionDamping;
  var container = useRef(null);
  var _useTooltipHandlers = useTooltipHandlers(container),
    showTooltipAt = _useTooltipHandlers.showTooltipAt,
    showTooltipFromEvent = _useTooltipHandlers.showTooltipFromEvent,
    hideTooltip = _useTooltipHandlers.hideTooltip,
    isTooltipVisible = _useTooltipHandlers.isTooltipVisible,
    tooltipContent = _useTooltipHandlers.tooltipContent,
    tooltipPosition = _useTooltipHandlers.tooltipPosition,
    tooltipAnchor = _useTooltipHandlers.tooltipAnchor;
  return React.createElement(
    ThemeProvider,
    {
      theme: theme,
    },
    React.createElement(
      MotionConfigProvider,
      {
        animate: animate,
        stiffness: motionStiffness,
        damping: motionDamping,
      },
      React.createElement(
        tooltipContext.Provider,
        {
          value: {
            showTooltipAt: showTooltipAt,
            showTooltipFromEvent: showTooltipFromEvent,
            hideTooltip: hideTooltip,
          },
        },
        renderWrapper === true &&
          React.createElement(
            "div",
            {
              style: containerStyle$1,
              ref: container,
            },
            children,
            isTooltipVisible &&
              React.createElement(
                TooltipWrapper,
                {
                  position: tooltipPosition,
                  anchor: tooltipAnchor,
                },
                tooltipContent
              )
          ),
        renderWrapper !== true && children
      )
    )
  );
};
Container$1.propTypes = {
  children: propTypes.node.isRequired,
  theme: propTypes.object,
  animate: propTypes.bool,
  motionStiffness: propTypes.number,
  motionDamping: propTypes.number,
  renderWrapper: propTypes.bool,
};
var withContainer = function withContainer(WrappedComponent) {
  return (function (_Component) {
    _inherits$2(_class, _Component);
    function _class() {
      _classCallCheck$2(this, _class);
      return _possibleConstructorReturn$2(
        this,
        _getPrototypeOf$2(_class).apply(this, arguments)
      );
    }
    _createClass$2(_class, [
      {
        key: "render",
        value: function render() {
          var _this$props = this.props,
            theme = _this$props.theme,
            renderWrapper = _this$props.renderWrapper,
            childProps = _objectWithoutProperties$2(_this$props, [
              "theme",
              "renderWrapper",
            ]);
          return React.createElement(
            Container$1,
            {
              theme: theme,
              renderWrapper: renderWrapper,
              animate: childProps.animate,
              motionStiffness: childProps.motionStiffness,
              motionDamping: childProps.motionDamping,
            },
            React.createElement(WrappedComponent, childProps)
          );
        },
      },
    ]);
    return _class;
  })(Component);
};
var isCursorInRect = function isCursorInRect(
  x,
  y,
  width,
  height,
  cursorX,
  cursorY
) {
  return (
    x <= cursorX &&
    cursorX <= x + width &&
    y <= cursorY &&
    cursorY <= y + height
  );
};

var getRelativeCursor = function getRelativeCursor(el, event) {
  var clientX = event.clientX,
    clientY = event.clientY;
  var bounds = el.getBoundingClientRect();
  return [clientX - bounds.left, clientY - bounds.top];
};

function _objectSpread$9(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(Object(source));
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(
        Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        })
      );
    }
    ownKeys.forEach(function (key) {
      _defineProperty$d(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$d(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toConsumableArray$1(arr) {
  return (
    _arrayWithoutHoles$1(arr) ||
    _iterableToArray$1(arr) ||
    _nonIterableSpread$1()
  );
}
function _nonIterableSpread$1() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
function _iterableToArray$1(iter) {
  if (
    Symbol.iterator in Object(iter) ||
    Object.prototype.toString.call(iter) === "[object Arguments]"
  )
    return Array.from(iter);
}
function _arrayWithoutHoles$1(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
}
var gradientKeys = Object.keys(gradientTypes);
var patternKeys = Object.keys(patternTypes);
var isMatchingDef = function isMatchingDef(predicate, node, dataKey) {
  if (predicate === "*") {
    return true;
  } else if (isFunction$1(predicate)) {
    return predicate(node);
  } else if (isPlainObject$1(predicate)) {
    var data = dataKey ? get$1(node, dataKey) : node;
    return isEqual(pick(data, Object.keys(predicate)), predicate);
  }
  return false;
};
var bindDefs = function bindDefs(defs, nodes, rules) {
  var _ref =
      arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
    dataKey = _ref.dataKey,
    _ref$colorKey = _ref.colorKey,
    colorKey = _ref$colorKey === void 0 ? "color" : _ref$colorKey,
    _ref$targetKey = _ref.targetKey,
    targetKey = _ref$targetKey === void 0 ? "fill" : _ref$targetKey;
  var boundDefs = [];
  var generatedIds = {};
  if (defs.length && nodes.length) {
    boundDefs = _toConsumableArray$1(defs);
    nodes.forEach(function (node) {
      var _loop = function _loop(i) {
        var _rules$i = rules[i],
          id = _rules$i.id,
          match = _rules$i.match;
        if (isMatchingDef(match, node, dataKey)) {
          var def = defs.find(function (_ref2) {
            var defId = _ref2.id;
            return defId === id;
          });
          if (def) {
            if (patternKeys.includes(def.type)) {
              if (def.background === "inherit" || def.color === "inherit") {
                var nodeColor = get$1(node, colorKey);
                var background = def.background;
                var color = def.color;
                var inheritedId = id;
                if (def.background === "inherit") {
                  inheritedId = ""
                    .concat(inheritedId, ".bg.")
                    .concat(nodeColor);
                  background = nodeColor;
                }
                if (def.color === "inherit") {
                  inheritedId = ""
                    .concat(inheritedId, ".fg.")
                    .concat(nodeColor);
                  color = nodeColor;
                }
                set(node, targetKey, "url(#".concat(inheritedId, ")"));
                if (!generatedIds[inheritedId]) {
                  boundDefs.push(
                    _objectSpread$9({}, def, {
                      id: inheritedId,
                      background: background,
                      color: color,
                    })
                  );
                  generatedIds[inheritedId] = 1;
                }
              } else {
                set(node, targetKey, "url(#".concat(id, ")"));
              }
            } else if (gradientKeys.includes(def.type)) {
              var allColors = def.colors.map(function (_ref3) {
                var color = _ref3.color;
                return color;
              });
              if (allColors.includes("inherit")) {
                var _nodeColor = get$1(node, colorKey);
                var _inheritedId = id;
                var inheritedDef = _objectSpread$9({}, def, {
                  colors: def.colors.map(function (colorStop, i) {
                    if (colorStop.color !== "inherit") return colorStop;
                    _inheritedId = ""
                      .concat(_inheritedId, ".")
                      .concat(i, ".")
                      .concat(_nodeColor);
                    return _objectSpread$9({}, colorStop, {
                      color:
                        colorStop.color === "inherit"
                          ? _nodeColor
                          : colorStop.color,
                    });
                  }),
                });
                inheritedDef.id = _inheritedId;
                set(node, targetKey, "url(#".concat(_inheritedId, ")"));
                if (!generatedIds[_inheritedId]) {
                  boundDefs.push(inheritedDef);
                  generatedIds[_inheritedId] = 1;
                }
              } else {
                set(node, targetKey, "url(#".concat(id, ")"));
              }
            }
          }
          return "break";
        }
      };
      for (var i = 0; i < rules.length; i++) {
        var _ret = _loop(i);
        if (_ret === "break") break;
      }
    });
  }
  return boundDefs;
};

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = "Expected a function";

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = "__lodash_hash_undefined__";

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** `Object#toString` result references. */
var funcTag = "[object Function]",
  genTag = "[object GeneratorFunction]",
  symbolTag = "[object Symbol]";

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  reIsPlainProp = /^\w*$/,
  reLeadingDot = /^\./,
  rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Detect free variable `global` from Node.js. */
var freeGlobal =
  typeof commonjsGlobal == "object" &&
  commonjsGlobal &&
  commonjsGlobal.Object === Object &&
  commonjsGlobal;

/** Detect free variable `self`. */
var freeSelf =
  typeof self == "object" && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root$1 = freeGlobal || freeSelf || Function("return this")();

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != "function") {
    try {
      result = !!(value + "");
    } catch (e) {}
  }
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
  funcProto = Function.prototype,
  objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root$1["__core-js_shared__"];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function () {
  var uid = /[^.]+$/.exec(
    (coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO) || ""
  );
  return uid ? "Symbol(src)_1." + uid : "";
})();

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp(
  "^" +
    funcToString
      .call(hasOwnProperty$2)
      .replace(reRegExpChar, "\\$&")
      .replace(
        /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
        "$1.*?"
      ) +
    "$"
);

/** Built-in value references. */
var Symbol$1 = root$1.Symbol,
  splice = arrayProto.splice;

/* Built-in method references that are verified to be native. */
var Map$1 = getNative(root$1, "Map"),
  nativeCreate = getNative(Object, "create");

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol$1 ? Symbol$1.prototype : undefined,
  symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
    length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty$2.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate
    ? data[key] !== undefined
    : hasOwnProperty$2.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype["delete"] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
    length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
    index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
    index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
    index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype["delete"] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
    length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    hash: new Hash(),
    map: new (Map$1 || ListCache)(),
    string: new Hash(),
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)["delete"](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype["delete"] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = isKey(path, object) ? [path] : castPath(path);

  var index = 0,
    length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return index && index == length ? object : undefined;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern =
    isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == "string") {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : "";
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY ? "-0" : result;
}

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value) {
  return isArray(value) ? value : stringToPath(value);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == "string" ? "string" : "hash"]
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (
    type == "number" ||
    type == "symbol" ||
    type == "boolean" ||
    value == null ||
    isSymbol(value)
  ) {
    return true;
  }
  return (
    reIsPlainProp.test(value) ||
    !reIsDeepProp.test(value) ||
    (object != null && value in Object(object))
  );
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return type == "string" ||
    type == "number" ||
    type == "symbol" ||
    type == "boolean"
    ? value !== "__proto__"
    : value === null;
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoize(function (string) {
  string = toString(string);

  var result = [];
  if (reLeadingDot.test(string)) {
    result.push("");
  }
  string.replace(rePropName, function (match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, "$1") : number || match);
  });
  return result;
});

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == "string" || isSymbol(value)) {
    return value;
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY ? "-0" : result;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return func + "";
    } catch (e) {}
  }
  return "";
}

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (
    typeof func != "function" ||
    (resolver && typeof resolver != "function")
  ) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function () {
    var args = arguments,
      key = resolver ? resolver.apply(this, args) : args[0],
      cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache)();
  return memoized;
}

// Assign cache to `_.memoize`.
memoize.Cache = MapCache;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : "";
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == "object" || type == "function");
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == "object";
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return (
    typeof value == "symbol" ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag)
  );
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? "" : baseToString(value);
}

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

var lodash_get = get;

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** `Object#toString` result references. */
var objectTag = "[object Object]";

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject$1(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != "function") {
    try {
      result = !!(value + "");
    } catch (e) {}
  }
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}

/** Used for built-in method references. */
var funcProto$1 = Function.prototype,
  objectProto$1 = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$1 = funcProto$1.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$3 = objectProto$1.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString$1.call(Object);

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString$1 = objectProto$1.toString;

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike$1(value) {
  return !!value && typeof value == "object";
}

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (
    !isObjectLike$1(value) ||
    objectToString$1.call(value) != objectTag ||
    isHostObject$1(value)
  ) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty$3.call(proto, "constructor") && proto.constructor;
  return (
    typeof Ctor == "function" &&
    Ctor instanceof Ctor &&
    funcToString$1.call(Ctor) == objectCtorString
  );
}

var lodash_isplainobject = isPlainObject;

function _objectSpread$5(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(Object(source));
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(
        Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        })
      );
    }
    ownKeys.forEach(function (key) {
      _defineProperty$5(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$5(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
var categoricalColorSchemes = {
  nivo: ["#e8c1a0", "#f47560", "#f1e15b", "#e8a838", "#61cdbb", "#97e3d5"],
  category10: schemeCategory10,
  accent: schemeAccent,
  dark2: schemeDark2,
  paired: schemePaired,
  pastel1: schemePastel1,
  pastel2: schemePastel2,
  set1: schemeSet1,
  set2: schemeSet2,
  set3: schemeSet3,
};
var categoricalColorSchemeIds = Object.keys(categoricalColorSchemes);
var isCategoricalColorScheme = function isCategoricalColorScheme(scheme) {
  return categoricalColorSchemeIds.includes(scheme);
};
var divergingColorSchemes = {
  brown_blueGreen: scheme,
  purpleRed_green: scheme$1,
  pink_yellowGreen: scheme$2,
  purple_orange: scheme$3,
  red_blue: scheme$4,
  red_grey: scheme$5,
  red_yellow_blue: scheme$6,
  red_yellow_green: scheme$7,
  spectral: scheme$8,
};
var divergingColorSchemeIds = Object.keys(divergingColorSchemes);
var isDivergingColorScheme = function isDivergingColorScheme(scheme) {
  return divergingColorSchemeIds.includes(scheme);
};
var sequentialColorSchemes = {
  blues: scheme$l,
  greens: scheme$m,
  greys: scheme$n,
  oranges: scheme$q,
  purples: scheme$o,
  reds: scheme$p,
  blue_green: scheme$9,
  blue_purple: scheme$a,
  green_blue: scheme$b,
  orange_red: scheme$c,
  purple_blue_green: scheme$d,
  purple_blue: scheme$e,
  purple_red: scheme$f,
  red_purple: scheme$g,
  yellow_green_blue: scheme$h,
  yellow_green: scheme$i,
  yellow_orange_brown: scheme$j,
  yellow_orange_red: scheme$k,
};
var sequentialColorSchemeIds = Object.keys(sequentialColorSchemes);
var isSequentialColorScheme = function isSequentialColorScheme(scheme) {
  return sequentialColorSchemeIds.includes(scheme);
};
var colorSchemes$1 = _objectSpread$5(
  {},
  categoricalColorSchemes,
  divergingColorSchemes,
  sequentialColorSchemes
);
var colorSchemeIds = Object.keys(colorSchemes$1);

var getOrdinalColorScale = function getOrdinalColorScale(
  instruction,
  identity
) {
  if (typeof instruction === "function") return instruction;
  var getIdentity =
    typeof identity === "function"
      ? identity
      : function (d) {
          return lodash_get(d, identity);
        };
  if (Array.isArray(instruction)) {
    var scale = ordinal(instruction);
    var generator = function generator(d) {
      return scale(getIdentity(d));
    };
    generator.scale = scale;
    return generator;
  }
  if (lodash_isplainobject(instruction)) {
    if (instruction.datum !== undefined) {
      return function (datum) {
        return lodash_get(datum, instruction.datum);
      };
    }
    if (instruction.scheme !== undefined) {
      if (isCategoricalColorScheme(instruction.scheme)) {
        var _scale = ordinal(colorSchemes$1[instruction.scheme]);
        var _generator = function _generator(d) {
          return _scale(getIdentity(d));
        };
        _generator.scale = _scale;
        return _generator;
      }
      if (isDivergingColorScheme(instruction.scheme)) {
        if (
          instruction.size !== undefined &&
          (instruction.size < 3 || instruction.size > 11)
        ) {
          throw new Error(
            "Invalid size '"
              .concat(instruction.size, "' for diverging color scheme '")
              .concat(instruction.scheme, "', must be between 3~11")
          );
        }
        var _scale2 = ordinal(
          colorSchemes$1[instruction.scheme][instruction.size || 11]
        );
        var _generator2 = function _generator2(d) {
          return _scale2(getIdentity(d));
        };
        _generator2.scale = _scale2;
        return _generator2;
      }
      if (isSequentialColorScheme(instruction.scheme)) {
        if (
          instruction.size !== undefined &&
          (instruction.size < 3 || instruction.size > 9)
        ) {
          throw new Error(
            "Invalid size '"
              .concat(instruction.size, "' for sequential color scheme '")
              .concat(instruction.scheme, "', must be between 3~9")
          );
        }
        var _scale3 = ordinal(
          colorSchemes$1[instruction.scheme][instruction.size || 9]
        );
        var _generator3 = function _generator3(d) {
          return _scale3(getIdentity(d));
        };
        _generator3.scale = _scale3;
        return _generator3;
      }
    }
    throw new Error(
      "Invalid colors, when using an object, you should either pass a 'datum' or a 'scheme' property"
    );
  }
  return function () {
    return instruction;
  };
};
var useOrdinalColorScale = function useOrdinalColorScale(
  instruction,
  identity
) {
  return useMemo(
    function () {
      return getOrdinalColorScale(instruction, identity);
    },
    [instruction, identity]
  );
};

function _slicedToArray$3(arr, i) {
  return (
    _arrayWithHoles$3(arr) ||
    _iterableToArrayLimit$3(arr, i) ||
    _nonIterableRest$3()
  );
}
function _nonIterableRest$3() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
function _iterableToArrayLimit$3(arr, i) {
  if (
    !(
      Symbol.iterator in Object(arr) ||
      Object.prototype.toString.call(arr) === "[object Arguments]"
    )
  ) {
    return;
  }
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;
  try {
    for (
      var _i = arr[Symbol.iterator](), _s;
      !(_n = (_s = _i.next()).done);
      _n = true
    ) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles$3(arr) {
  if (Array.isArray(arr)) return arr;
}
var getInheritedColorGenerator = function getInheritedColorGenerator(
  inheritedColor,
  theme
) {
  if (typeof inheritedColor === "function")
    return function (node) {
      return inheritedColor(node);
    };
  if (lodash_isplainobject(inheritedColor)) {
    if (inheritedColor.theme !== undefined) {
      if (theme === undefined) {
        throw new Error(
          "Unable to use color from theme as no theme was provided"
        );
      }
      var themeColor = lodash_get(theme, inheritedColor.theme);
      if (themeColor === undefined) {
        throw new Error(
          "Color from theme is undefined at path: '".concat(
            inheritedColor.theme,
            "'"
          )
        );
      }
      return function () {
        return themeColor;
      };
    }
    if (inheritedColor.from !== undefined) {
      var getColor = function getColor(datum) {
        return lodash_get(datum, inheritedColor.from);
      };
      if (Array.isArray(inheritedColor.modifiers)) {
        var modifiers = [];
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;
        try {
          var _loop = function _loop() {
            var modifier = _step.value;
            var _modifier = _slicedToArray$3(modifier, 2),
              modifierType = _modifier[0],
              amount = _modifier[1];
            if (modifierType === "brighter") {
              modifiers.push(function (color) {
                return color.brighter(amount);
              });
            } else if (modifierType === "darker") {
              modifiers.push(function (color) {
                return color.darker(amount);
              });
            } else if (modifierType === "opacity") {
              modifiers.push(function (color) {
                color.opacity = amount;
                return color;
              });
            } else {
              throw new Error(
                "Invalid color modifier: '".concat(
                  modifierType,
                  "', must be one of: 'brighter', 'darker', 'opacity'"
                )
              );
            }
          };
          for (
            var _iterator = inheritedColor.modifiers[Symbol.iterator](), _step;
            !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
            _iteratorNormalCompletion = true
          ) {
            _loop();
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
        if (modifiers.length === 0) return getColor;
        return function (datum) {
          return modifiers
            .reduce(function (color, modify) {
              return modify(color);
            }, rgb$2(getColor(datum)))
            .toString();
        };
      }
      return getColor;
    }
    throw new Error(
      "Invalid color spec, you should either specify 'theme' or 'from' when using a config object"
    );
  }
  return function () {
    return inheritedColor;
  };
};
var useInheritedColor = function useInheritedColor(parentColor, theme) {
  return useMemo(
    function () {
      return getInheritedColorGenerator(parentColor, theme);
    },
    [parentColor, theme]
  );
};

var ordinalColorsPropType = propTypes.oneOfType([
  propTypes.func,
  propTypes.arrayOf(propTypes.string),
  propTypes.shape({
    scheme: propTypes.oneOf(colorSchemeIds).isRequired,
    size: propTypes.number,
  }),
  propTypes.shape({
    datum: propTypes.string.isRequired,
  }),
  propTypes.string,
]);
var colorPropertyAccessorPropType = propTypes.oneOfType([
  propTypes.func,
  propTypes.string,
]);
var inheritedColorPropType = propTypes.oneOfType([
  propTypes.string,
  propTypes.func,
  propTypes.shape({
    theme: propTypes.string.isRequired,
  }),
  propTypes.shape({
    from: propTypes.string.isRequired,
    modifiers: propTypes.arrayOf(propTypes.array),
  }),
]);

function _objectSpread$6(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(Object(source));
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(
        Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        })
      );
    }
    ownKeys.forEach(function (key) {
      _defineProperty$6(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$6(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
var centerScale = function centerScale(scale) {
  var bandwidth = scale.bandwidth();
  if (bandwidth === 0) return scale;
  var offset = bandwidth / 2;
  if (scale.round()) {
    offset = Math.round(offset);
  }
  return function (d) {
    return scale(d) + offset;
  };
};
var timeByType = {
  millisecond: [millisecond$1, millisecond$1],
  second: [second$1, second$1],
  minute: [minute$1, utcMinute$1],
  hour: [hour$1, utcHour$1],
  day: [day$1, utcDay$1],
  week: [sunday$1, utcSunday$1],
  sunday: [sunday$1, utcSunday$1],
  monday: [monday$1, utcMonday$1],
  tuesday: [tuesday$1, utcTuesday$1],
  wednesday: [wednesday$1, utcWednesday$1],
  thursday: [thursday$1, utcThursday$1],
  friday: [friday$1, utcFriday$1],
  saturday: [saturday$1, utcSaturday$1],
  month: [month$1, utcMonth$1],
  year: [year$1, utcYear$1],
};
var timeTypes = Object.keys(timeByType);
var timeIntervalRegexp = new RegExp(
  "^every\\s*(\\d+)?\\s*(".concat(timeTypes.join("|"), ")s?$"),
  "i"
);
var getScaleTicks = function getScaleTicks(scale, spec) {
  if (Array.isArray(spec)) {
    return spec;
  }
  if (scale.ticks) {
    if (spec === undefined) {
      return scale.ticks();
    }
    if (isNumber(spec)) {
      return scale.ticks(spec);
    }
    if (typeof spec === "string") {
      var matches = spec.match(timeIntervalRegexp);
      if (matches) {
        var timeType = timeByType[matches[2]][scale.useUTC ? 1 : 0];
        if (matches[1] === undefined) {
          return scale.ticks(timeType);
        }
        return scale.ticks(timeType.every(Number(matches[1])));
      }
      throw new Error("Invalid tickValues: ".concat(spec));
    }
  }
  return scale.domain();
};
var computeCartesianTicks = function computeCartesianTicks(_ref) {
  var axis = _ref.axis,
    scale = _ref.scale,
    ticksPosition = _ref.ticksPosition,
    tickValues = _ref.tickValues,
    tickSize = _ref.tickSize,
    tickPadding = _ref.tickPadding,
    tickRotation = _ref.tickRotation,
    _ref$engine = _ref.engine,
    engine = _ref$engine === void 0 ? "svg" : _ref$engine;
  var values = getScaleTicks(scale, tickValues);
  var textProps = textPropsByEngine[engine];
  var position = scale.bandwidth ? centerScale(scale) : scale;
  var line = {
    lineX: 0,
    lineY: 0,
  };
  var text = {
    textX: 0,
    textY: 0,
  };
  var translate;
  var textAlign = textProps.align.center;
  var textBaseline = textProps.baseline.center;
  if (axis === "x") {
    translate = function translate(d) {
      return {
        x: position(d),
        y: 0,
      };
    };
    line.lineY = tickSize * (ticksPosition === "after" ? 1 : -1);
    text.textY =
      (tickSize + tickPadding) * (ticksPosition === "after" ? 1 : -1);
    if (ticksPosition === "after") {
      textBaseline = textProps.baseline.top;
    } else {
      textBaseline = textProps.baseline.bottom;
    }
    if (tickRotation === 0) {
      textAlign = textProps.align.center;
    } else if (
      (ticksPosition === "after" && tickRotation < 0) ||
      (ticksPosition === "before" && tickRotation > 0)
    ) {
      textAlign = textProps.align.right;
      textBaseline = textProps.baseline.center;
    } else if (
      (ticksPosition === "after" && tickRotation > 0) ||
      (ticksPosition === "before" && tickRotation < 0)
    ) {
      textAlign = textProps.align.left;
      textBaseline = textProps.baseline.center;
    }
  } else {
    translate = function translate(d) {
      return {
        x: 0,
        y: position(d),
      };
    };
    line.lineX = tickSize * (ticksPosition === "after" ? 1 : -1);
    text.textX =
      (tickSize + tickPadding) * (ticksPosition === "after" ? 1 : -1);
    if (ticksPosition === "after") {
      textAlign = textProps.align.left;
    } else {
      textAlign = textProps.align.right;
    }
  }
  var ticks = values.map(function (value) {
    return _objectSpread$6(
      {
        key: value,
        value: value,
      },
      translate(value),
      line,
      text
    );
  });
  return {
    ticks: ticks,
    textAlign: textAlign,
    textBaseline: textBaseline,
  };
};
var getFormatter = function getFormatter(format$1$1, scale) {
  if (!format$1$1 || typeof format$1$1 === "function") return format$1$1;
  if (scale.type === "time") {
    var f = timeFormat$1(format$1$1);
    return function (d) {
      return f(new Date(d));
    };
  }
  return format$1(format$1$1);
};
var computeGridLines = function computeGridLines(_ref2) {
  var width = _ref2.width,
    height = _ref2.height,
    scale = _ref2.scale,
    axis = _ref2.axis,
    _values = _ref2.values;
  var lineValues = Array.isArray(_values) ? _values : undefined;
  var lineCount = isNumber(_values) ? _values : undefined;
  var values = lineValues || getScaleTicks(scale, lineCount);
  var position = scale.bandwidth ? centerScale(scale) : scale;
  var lines;
  if (axis === "x") {
    lines = values.map(function (v) {
      return {
        key: "".concat(v),
        x1: position(v),
        x2: position(v),
        y1: 0,
        y2: height,
      };
    });
  } else if (axis === "y") {
    lines = values.map(function (v) {
      return {
        key: "".concat(v),
        x1: 0,
        x2: width,
        y1: position(v),
        y2: position(v),
      };
    });
  }
  return lines;
};

var axisPropTypes = {
  ticksPosition: propTypes.oneOf(["before", "after"]),
  tickValues: propTypes.oneOfType([
    propTypes.number,
    propTypes.arrayOf(
      propTypes.oneOfType([
        propTypes.number,
        propTypes.string,
        propTypes.instanceOf(Date),
      ])
    ),
    propTypes.string,
  ]),
  tickSize: propTypes.number,
  tickPadding: propTypes.number,
  tickRotation: propTypes.number,
  format: propTypes.oneOfType([propTypes.func, propTypes.string]),
  renderTick: propTypes.func,
  legend: propTypes.node,
  legendPosition: propTypes.oneOf(["start", "middle", "end"]),
  legendOffset: propTypes.number,
};
var axisPropType = propTypes.shape(axisPropTypes);

function _extends$2() {
  _extends$2 =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$2.apply(this, arguments);
}
var AxisTick = function AxisTick(_ref) {
  var _value = _ref.value,
    x = _ref.x,
    y = _ref.y,
    opacity = _ref.opacity,
    rotate = _ref.rotate,
    format = _ref.format,
    lineX = _ref.lineX,
    lineY = _ref.lineY,
    _onClick = _ref.onClick,
    textX = _ref.textX,
    textY = _ref.textY,
    textBaseline = _ref.textBaseline,
    textAnchor = _ref.textAnchor;
  var theme = useTheme();
  var value = _value;
  if (format !== undefined) {
    value = format(value);
  }
  var gStyle = {
    opacity: opacity,
  };
  if (_onClick) {
    gStyle["cursor"] = "pointer";
  }
  return React.createElement(
    "g",
    _extends$2(
      {
        transform: "translate(".concat(x, ",").concat(y, ")"),
      },
      _onClick
        ? {
            onClick: function onClick(e) {
              return _onClick(e, value);
            },
          }
        : {},
      {
        style: gStyle,
      }
    ),
    React.createElement("line", {
      x1: 0,
      x2: lineX,
      y1: 0,
      y2: lineY,
      style: theme.axis.ticks.line,
    }),
    React.createElement(
      "text",
      {
        dominantBaseline: textBaseline,
        textAnchor: textAnchor,
        transform: "translate("
          .concat(textX, ",")
          .concat(textY, ") rotate(")
          .concat(rotate, ")"),
        style: theme.axis.ticks.text,
      },
      value
    )
  );
};
AxisTick.propTypes = {
  value: propTypes.oneOfType([
    propTypes.number,
    propTypes.string,
    propTypes.instanceOf(Date),
  ]).isRequired,
  format: propTypes.func,
  x: propTypes.number.isRequired,
  y: propTypes.number.isRequired,
  lineX: propTypes.number.isRequired,
  lineY: propTypes.number.isRequired,
  textX: propTypes.number.isRequired,
  textY: propTypes.number.isRequired,
  textBaseline: propTypes.string.isRequired,
  textAnchor: propTypes.string.isRequired,
  opacity: propTypes.number.isRequired,
  rotate: propTypes.number.isRequired,
  onClick: propTypes.func,
};
AxisTick.defaultProps = {
  opacity: 1,
  rotate: 0,
};
var AxisTick$1 = memo(AxisTick);

function _extends$1$2() {
  _extends$1$2 =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$1$2.apply(this, arguments);
}
function _objectSpread$1$2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(Object(source));
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(
        Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        })
      );
    }
    ownKeys.forEach(function (key) {
      _defineProperty$1$2(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$1$2(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
var willEnter = function willEnter() {
  return {
    rotate: 0,
    opacity: 0,
    x: 0,
    y: 0,
  };
};
var willLeave = function willLeave(springConfig) {
  return function (_ref) {
    var _ref$style = _ref.style,
      x = _ref$style.x,
      y = _ref$style.y,
      rotate = _ref$style.rotate;
    return {
      rotate: rotate,
      opacity: reactMotion.spring(0, springConfig),
      x: reactMotion.spring(x.val, springConfig),
      y: reactMotion.spring(y.val, springConfig),
    };
  };
};
var defaultTickRenderer = function defaultTickRenderer(props) {
  return React.createElement(AxisTick$1, props);
};
var Axis = function Axis(_ref2) {
  var axis = _ref2.axis,
    scale = _ref2.scale,
    x = _ref2.x,
    y = _ref2.y,
    length = _ref2.length,
    ticksPosition = _ref2.ticksPosition,
    tickValues = _ref2.tickValues,
    tickSize = _ref2.tickSize,
    tickPadding = _ref2.tickPadding,
    tickRotation = _ref2.tickRotation,
    format = _ref2.format,
    renderTick = _ref2.renderTick,
    legend = _ref2.legend,
    legendPosition = _ref2.legendPosition,
    legendOffset = _ref2.legendOffset,
    onClick = _ref2.onClick;
  var theme = useTheme();
  var _useMotionConfig = useMotionConfig(),
    animate = _useMotionConfig.animate,
    springConfig = _useMotionConfig.springConfig;
  var formatValue = useMemo(
    function () {
      return getFormatter(format, scale);
    },
    [format, scale]
  );
  var _computeCartesianTick = computeCartesianTicks({
      axis: axis,
      scale: scale,
      ticksPosition: ticksPosition,
      tickValues: tickValues,
      tickSize: tickSize,
      tickPadding: tickPadding,
      tickRotation: tickRotation,
    }),
    ticks = _computeCartesianTick.ticks,
    textAlign = _computeCartesianTick.textAlign,
    textBaseline = _computeCartesianTick.textBaseline;
  var legendNode = null;
  if (legend !== undefined) {
    var legendX = 0;
    var legendY = 0;
    var legendRotation = 0;
    var textAnchor;
    if (axis === "y") {
      legendRotation = -90;
      legendX = legendOffset;
      if (legendPosition === "start") {
        textAnchor = "start";
        legendY = length;
      } else if (legendPosition === "middle") {
        textAnchor = "middle";
        legendY = length / 2;
      } else if (legendPosition === "end") {
        textAnchor = "end";
      }
    } else {
      legendY = legendOffset;
      if (legendPosition === "start") {
        textAnchor = "start";
      } else if (legendPosition === "middle") {
        textAnchor = "middle";
        legendX = length / 2;
      } else if (legendPosition === "end") {
        textAnchor = "end";
        legendX = length;
      }
    }
    legendNode = React.createElement(
      "text",
      {
        transform: "translate("
          .concat(legendX, ", ")
          .concat(legendY, ") rotate(")
          .concat(legendRotation, ")"),
        textAnchor: textAnchor,
        style: _objectSpread$1$2(
          {
            dominantBaseline: "central",
          },
          theme.axis.legend.text
        ),
      },
      legend
    );
  }
  if (animate !== true) {
    return React.createElement(
      "g",
      {
        transform: "translate(".concat(x, ",").concat(y, ")"),
      },
      ticks.map(function (tick, tickIndex) {
        return React.createElement(
          renderTick,
          _objectSpread$1$2(
            {
              tickIndex: tickIndex,
              format: formatValue,
              rotate: tickRotation,
              textBaseline: textBaseline,
              textAnchor: textAlign,
            },
            tick,
            onClick
              ? {
                  onClick: onClick,
                }
              : {}
          )
        );
      }),
      React.createElement("line", {
        style: theme.axis.domain.line,
        x1: 0,
        x2: axis === "x" ? length : 0,
        y1: 0,
        y2: axis === "x" ? 0 : length,
      }),
      legendNode
    );
  }
  return React.createElement(
    reactMotion.Motion,
    {
      style: {
        x: reactMotion.spring(x, springConfig),
        y: reactMotion.spring(y, springConfig),
      },
    },
    function (xy) {
      return React.createElement(
        "g",
        {
          transform: "translate(".concat(xy.x, ",").concat(xy.y, ")"),
        },
        React.createElement(
          reactMotion.TransitionMotion,
          {
            willEnter: willEnter,
            willLeave: willLeave(springConfig),
            styles: ticks.map(function (tick) {
              return {
                key: "".concat(tick.key),
                data: tick,
                style: {
                  opacity: reactMotion.spring(1, springConfig),
                  x: reactMotion.spring(tick.x, springConfig),
                  y: reactMotion.spring(tick.y, springConfig),
                  rotate: reactMotion.spring(tickRotation, springConfig),
                },
              };
            }),
          },
          function (interpolatedStyles) {
            return React.createElement(
              Fragment$1,
              null,
              interpolatedStyles.map(function (_ref3, tickIndex) {
                var style = _ref3.style,
                  tick = _ref3.data;
                return React.createElement(
                  renderTick,
                  _objectSpread$1$2(
                    {
                      tickIndex: tickIndex,
                      format: formatValue,
                      textBaseline: textBaseline,
                      textAnchor: textAlign,
                    },
                    tick,
                    style,
                    onClick
                      ? {
                          onClick: onClick,
                        }
                      : {}
                  )
                );
              })
            );
          }
        ),
        React.createElement(
          reactMotion.Motion,
          {
            style: {
              x2: reactMotion.spring(axis === "x" ? length : 0, springConfig),
              y2: reactMotion.spring(axis === "x" ? 0 : length, springConfig),
            },
          },
          function (values) {
            return React.createElement(
              "line",
              _extends$1$2(
                {
                  style: theme.axis.domain.line,
                  x1: 0,
                  y1: 0,
                },
                values
              )
            );
          }
        ),
        legendNode
      );
    }
  );
};
Axis.propTypes = {
  axis: propTypes.oneOf(["x", "y"]).isRequired,
  scale: propTypes.func.isRequired,
  x: propTypes.number.isRequired,
  y: propTypes.number.isRequired,
  length: propTypes.number.isRequired,
  ticksPosition: propTypes.oneOf(["before", "after"]).isRequired,
  tickValues: axisPropTypes.tickValues,
  tickSize: propTypes.number.isRequired,
  tickPadding: propTypes.number.isRequired,
  tickRotation: propTypes.number.isRequired,
  format: propTypes.oneOfType([propTypes.func, propTypes.string]),
  renderTick: propTypes.func.isRequired,
  legend: propTypes.node,
  legendPosition: propTypes.oneOf(["start", "middle", "end"]).isRequired,
  legendOffset: propTypes.number.isRequired,
  onClick: propTypes.func,
};
Axis.defaultProps = {
  x: 0,
  y: 0,
  tickSize: 5,
  tickPadding: 5,
  tickRotation: 0,
  renderTick: defaultTickRenderer,
  legendPosition: "end",
  legendOffset: 0,
};
var Axis$1 = memo(Axis);

function _extends$2$1() {
  _extends$2$1 =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$2$1.apply(this, arguments);
}
var positions = ["top", "right", "bottom", "left"];
var Axes = function Axes(_ref) {
  var xScale = _ref.xScale,
    yScale = _ref.yScale,
    width = _ref.width,
    height = _ref.height,
    top = _ref.top,
    right = _ref.right,
    bottom = _ref.bottom,
    left = _ref.left;
  var axes = {
    top: top,
    right: right,
    bottom: bottom,
    left: left,
  };
  return positions.map(function (position) {
    var axis = axes[position];
    if (!axis) return null;
    var isXAxis = position === "top" || position === "bottom";
    var ticksPosition =
      position === "top" || position === "left" ? "before" : "after";
    return React.createElement(
      Axis$1,
      _extends$2$1(
        {
          key: position,
        },
        axis,
        {
          axis: isXAxis ? "x" : "y",
          x: position === "right" ? width : 0,
          y: position === "bottom" ? height : 0,
          scale: isXAxis ? xScale : yScale,
          length: isXAxis ? width : height,
          ticksPosition: ticksPosition,
        }
      )
    );
  });
};
Axes.propTypes = {
  xScale: propTypes.func,
  yScale: propTypes.func,
  width: propTypes.number.isRequired,
  height: propTypes.number.isRequired,
  top: axisPropType,
  right: axisPropType,
  bottom: axisPropType,
  left: axisPropType,
};
var Axes$1 = memo(Axes);

var GridLine = function GridLine(props) {
  return React.createElement("line", props);
};
GridLine.propTypes = {
  x1: propTypes.number.isRequired,
  x2: propTypes.number.isRequired,
  y1: propTypes.number.isRequired,
  y2: propTypes.number.isRequired,
};
GridLine.defaultProps = {
  x1: 0,
  x2: 0,
  y1: 0,
  y2: 0,
};
var GridLine$1 = memo(GridLine);

function _extends$3() {
  _extends$3 =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$3.apply(this, arguments);
}
var GridLines = function GridLines(_ref) {
  var type = _ref.type,
    lines = _ref.lines;
  var theme = useTheme();
  var _useMotionConfig = useMotionConfig(),
    animate = _useMotionConfig.animate,
    springConfig = _useMotionConfig.springConfig;
  var lineWillEnter = useMemo(
    function () {
      return function (_ref2) {
        var style = _ref2.style;
        return {
          opacity: 0,
          x1: type === "x" ? 0 : style.x1.val,
          x2: type === "x" ? 0 : style.x2.val,
          y1: type === "y" ? 0 : style.y1.val,
          y2: type === "y" ? 0 : style.y2.val,
        };
      };
    },
    [type]
  );
  var lineWillLeave = useMemo(
    function () {
      return function (_ref3) {
        var style = _ref3.style;
        return {
          opacity: reactMotion.spring(0, springConfig),
          x1: reactMotion.spring(style.x1.val, springConfig),
          x2: reactMotion.spring(style.x2.val, springConfig),
          y1: reactMotion.spring(style.y1.val, springConfig),
          y2: reactMotion.spring(style.y2.val, springConfig),
        };
      };
    },
    [springConfig]
  );
  if (!animate) {
    return React.createElement(
      "g",
      null,
      lines.map(function (line) {
        return React.createElement(
          GridLine$1,
          _extends$3(
            {
              key: line.key,
            },
            line,
            theme.grid.line
          )
        );
      })
    );
  }
  return React.createElement(
    reactMotion.TransitionMotion,
    {
      willEnter: lineWillEnter,
      willLeave: lineWillLeave,
      styles: lines.map(function (line) {
        return {
          key: line.key,
          style: {
            opacity: reactMotion.spring(1, springConfig),
            x1: reactMotion.spring(line.x1 || 0, springConfig),
            x2: reactMotion.spring(line.x2 || 0, springConfig),
            y1: reactMotion.spring(line.y1 || 0, springConfig),
            y2: reactMotion.spring(line.y2 || 0, springConfig),
          },
        };
      }),
    },
    function (interpolatedStyles) {
      return React.createElement(
        "g",
        null,
        interpolatedStyles.map(function (interpolatedStyle) {
          var key = interpolatedStyle.key,
            style = interpolatedStyle.style;
          return React.createElement(
            GridLine$1,
            _extends$3(
              {
                key: key,
              },
              theme.grid.line,
              style
            )
          );
        })
      );
    }
  );
};
GridLines.propTypes = {
  type: propTypes.oneOf(["x", "y"]).isRequired,
  lines: propTypes.arrayOf(
    propTypes.shape({
      key: propTypes.string.isRequired,
      x1: propTypes.number,
      x2: propTypes.number,
      y1: propTypes.number,
      y2: propTypes.number,
    })
  ).isRequired,
};
var GridLines$1 = memo(GridLines);

var Grid = function Grid(_ref) {
  var width = _ref.width,
    height = _ref.height,
    xScale = _ref.xScale,
    yScale = _ref.yScale,
    xValues = _ref.xValues,
    yValues = _ref.yValues;
  var xLines = useMemo(
    function () {
      if (!xScale) return false;
      return computeGridLines({
        width: width,
        height: height,
        scale: xScale,
        axis: "x",
        values: xValues,
      });
    },
    [xScale, xValues]
  );
  var yLines = yScale
    ? computeGridLines({
        width: width,
        height: height,
        scale: yScale,
        axis: "y",
        values: yValues,
      })
    : false;
  return React.createElement(
    React.Fragment,
    null,
    xLines &&
      React.createElement(GridLines$1, {
        type: "x",
        lines: xLines,
      }),
    yLines &&
      React.createElement(GridLines$1, {
        type: "y",
        lines: yLines,
      })
  );
};
Grid.propTypes = {
  width: propTypes.number.isRequired,
  height: propTypes.number.isRequired,
  xScale: propTypes.func,
  yScale: propTypes.func,
  xValues: propTypes.oneOfType([
    propTypes.number,
    propTypes.arrayOf(
      propTypes.oneOfType([
        propTypes.number,
        propTypes.string,
        propTypes.instanceOf(Date),
      ])
    ),
  ]),
  yValues: propTypes.oneOfType([
    propTypes.number,
    propTypes.arrayOf(
      propTypes.oneOfType([
        propTypes.number,
        propTypes.string,
        propTypes.instanceOf(Date),
      ])
    ),
  ]),
};
var Grid$1 = memo(Grid);

var degreesToRadians$1 = function degreesToRadians(degrees) {
  return (degrees * Math.PI) / 180;
};

function _objectSpread$2$2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(Object(source));
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(
        Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        })
      );
    }
    ownKeys.forEach(function (key) {
      _defineProperty$2$2(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$2$2(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
var renderAxisToCanvas = function renderAxisToCanvas(ctx, _ref) {
  var axis = _ref.axis,
    scale = _ref.scale,
    _ref$x = _ref.x,
    x = _ref$x === void 0 ? 0 : _ref$x,
    _ref$y = _ref.y,
    y = _ref$y === void 0 ? 0 : _ref$y,
    length = _ref.length,
    ticksPosition = _ref.ticksPosition,
    tickValues = _ref.tickValues,
    _ref$tickSize = _ref.tickSize,
    tickSize = _ref$tickSize === void 0 ? 5 : _ref$tickSize,
    _ref$tickPadding = _ref.tickPadding,
    tickPadding = _ref$tickPadding === void 0 ? 5 : _ref$tickPadding,
    _ref$tickRotation = _ref.tickRotation,
    tickRotation = _ref$tickRotation === void 0 ? 0 : _ref$tickRotation,
    format = _ref.format,
    legend = _ref.legend,
    _ref$legendPosition = _ref.legendPosition,
    legendPosition =
      _ref$legendPosition === void 0 ? "end" : _ref$legendPosition,
    _ref$legendOffset = _ref.legendOffset,
    legendOffset = _ref$legendOffset === void 0 ? 0 : _ref$legendOffset,
    theme = _ref.theme;
  var _computeCartesianTick = computeCartesianTicks({
      axis: axis,
      scale: scale,
      ticksPosition: ticksPosition,
      tickValues: tickValues,
      tickSize: tickSize,
      tickPadding: tickPadding,
      tickRotation: tickRotation,
      engine: "canvas",
    }),
    ticks = _computeCartesianTick.ticks,
    textAlign = _computeCartesianTick.textAlign,
    textBaseline = _computeCartesianTick.textBaseline;
  ctx.save();
  ctx.translate(x, y);
  ctx.textAlign = textAlign;
  ctx.textBaseline = textBaseline;
  ctx.font = ""
    .concat(theme.axis.ticks.text.fontSize, "px ")
    .concat(theme.axis.ticks.text.fontFamily);
  if (theme.axis.domain.line.strokeWidth > 0) {
    ctx.lineWidth = theme.axis.domain.line.strokeWidth;
    ctx.lineCap = "square";
    ctx.strokeStyle = theme.axis.domain.line.stroke;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(axis === "x" ? length : 0, axis === "x" ? 0 : length);
    ctx.stroke();
  }
  ticks.forEach(function (tick) {
    if (theme.axis.ticks.line.strokeWidth > 0) {
      ctx.lineWidth = theme.axis.ticks.line.strokeWidth;
      ctx.lineCap = "square";
      ctx.strokeStyle = theme.axis.ticks.line.stroke;
      ctx.beginPath();
      ctx.moveTo(tick.x, tick.y);
      ctx.lineTo(tick.x + tick.lineX, tick.y + tick.lineY);
      ctx.stroke();
    }
    var value = format !== undefined ? format(tick.value) : tick.value;
    ctx.save();
    ctx.translate(tick.x + tick.textX, tick.y + tick.textY);
    ctx.rotate(degreesToRadians$1(tickRotation));
    ctx.fillStyle = theme.axis.ticks.text.fill;
    ctx.fillText(value, 0, 0);
    ctx.restore();
  });
  if (legend !== undefined) {
    var legendX = 0;
    var legendY = 0;
    var legendRotation = 0;
    var _textAlign;
    if (axis === "y") {
      legendRotation = -90;
      legendX = legendOffset;
      if (legendPosition === "start") {
        _textAlign = "start";
        legendY = length;
      } else if (legendPosition === "middle") {
        _textAlign = "center";
        legendY = length / 2;
      } else if (legendPosition === "end") {
        _textAlign = "end";
      }
    } else {
      legendY = legendOffset;
      if (legendPosition === "start") {
        _textAlign = "start";
      } else if (legendPosition === "middle") {
        _textAlign = "center";
        legendX = length / 2;
      } else if (legendPosition === "end") {
        _textAlign = "end";
        legendX = length;
      }
    }
    ctx.translate(legendX, legendY);
    ctx.rotate(degreesToRadians$1(legendRotation));
    ctx.font = ""
      .concat(
        theme.axis.legend.text.fontWeight
          ? "".concat(theme.axis.legend.text.fontWeight, " ")
          : ""
      )
      .concat(theme.axis.legend.text.fontSize, "px ")
      .concat(theme.axis.legend.text.fontFamily);
    ctx.fillStyle = theme.axis.legend.text.fill;
    ctx.textAlign = _textAlign;
    ctx.textBaseline = "middle";
    ctx.fillText(legend, 0, 0);
  }
  ctx.restore();
};
var positions$1 = ["top", "right", "bottom", "left"];
var renderAxesToCanvas = function renderAxesToCanvas(ctx, _ref2) {
  var xScale = _ref2.xScale,
    yScale = _ref2.yScale,
    width = _ref2.width,
    height = _ref2.height,
    top = _ref2.top,
    right = _ref2.right,
    bottom = _ref2.bottom,
    left = _ref2.left,
    theme = _ref2.theme;
  var axes = {
    top: top,
    right: right,
    bottom: bottom,
    left: left,
  };
  positions$1.forEach(function (position) {
    var axis = axes[position];
    if (!axis) return null;
    var isXAxis = position === "top" || position === "bottom";
    var ticksPosition =
      position === "top" || position === "left" ? "before" : "after";
    var scale = isXAxis ? xScale : yScale;
    var format = getFormatter(axis.format, scale);
    renderAxisToCanvas(
      ctx,
      _objectSpread$2$2({}, axis, {
        axis: isXAxis ? "x" : "y",
        x: position === "right" ? width : 0,
        y: position === "bottom" ? height : 0,
        scale: scale,
        format: format,
        length: isXAxis ? width : height,
        ticksPosition: ticksPosition,
        theme: theme,
      })
    );
  });
};
var renderGridLinesToCanvas = function renderGridLinesToCanvas(ctx, _ref3) {
  var width = _ref3.width,
    height = _ref3.height,
    scale = _ref3.scale,
    axis = _ref3.axis,
    values = _ref3.values;
  var lines = computeGridLines({
    width: width,
    height: height,
    scale: scale,
    axis: axis,
    values: values,
  });
  lines.forEach(function (line) {
    ctx.beginPath();
    ctx.moveTo(line.x1, line.y1);
    ctx.lineTo(line.x2, line.y2);
    ctx.stroke();
  });
};

var DIRECTION_ROW = "row";
var DIRECTION_COLUMN = "column";
var ANCHOR_TOP = "top";
var ANCHOR_TOP_RIGHT = "top-right";
var ANCHOR_RIGHT = "right";
var ANCHOR_BOTTOM_RIGHT = "bottom-right";
var ANCHOR_BOTTOM = "bottom";
var ANCHOR_BOTTOM_LEFT = "bottom-left";
var ANCHOR_LEFT = "left";
var ANCHOR_TOP_LEFT = "top-left";
var ANCHOR_CENTER = "center";
var DIRECTION_LEFT_TO_RIGHT = "left-to-right";
var DIRECTION_RIGHT_TO_LEFT = "right-to-left";
var DIRECTION_TOP_TO_BOTTOM = "top-to-bottom";
var DIRECTION_BOTTOM_TO_TOP = "bottom-to-top";

function _objectSpread$7(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(Object(source));
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(
        Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        })
      );
    }
    ownKeys.forEach(function (key) {
      _defineProperty$7(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$7(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
var legendEffectPropType = propTypes.shape({
  on: propTypes.oneOfType([propTypes.oneOf(["hover"])]).isRequired,
  style: propTypes.shape({
    itemTextColor: propTypes.string,
    itemBackground: propTypes.string,
    itemOpacity: propTypes.number,
    symbolSize: propTypes.number,
    symbolBorderWidth: propTypes.number,
    symbolBorderColor: propTypes.string,
  }).isRequired,
});
var symbolPropTypes = {
  symbolShape: propTypes.oneOfType([propTypes.string, propTypes.func]),
  symbolSize: propTypes.number,
  symbolSpacing: propTypes.number,
  symbolBorderWidth: propTypes.number,
  symbolBorderColor: propTypes.string,
};
var interactivityPropTypes = {
  onClick: propTypes.func,
  onMouseEnter: propTypes.func,
  onMouseLeave: propTypes.func,
};
var datumPropType = propTypes.shape({
  id: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,
  label: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,
  color: propTypes.string.isRequired,
  fill: propTypes.string,
});
var LegendPropShape = _objectSpread$7(
  {
    data: propTypes.arrayOf(datumPropType),
    anchor: propTypes.oneOf([
      ANCHOR_TOP,
      ANCHOR_TOP_RIGHT,
      ANCHOR_RIGHT,
      ANCHOR_BOTTOM_RIGHT,
      ANCHOR_BOTTOM,
      ANCHOR_BOTTOM_LEFT,
      ANCHOR_LEFT,
      ANCHOR_TOP_LEFT,
      ANCHOR_CENTER,
    ]).isRequired,
    translateX: propTypes.number,
    translateY: propTypes.number,
    direction: propTypes.oneOf([DIRECTION_ROW, DIRECTION_COLUMN]).isRequired,
    itemsSpacing: propTypes.number,
    itemWidth: propTypes.number.isRequired,
    itemHeight: propTypes.number.isRequired,
    itemDirection: propTypes.oneOf([
      DIRECTION_LEFT_TO_RIGHT,
      DIRECTION_RIGHT_TO_LEFT,
      DIRECTION_TOP_TO_BOTTOM,
      DIRECTION_BOTTOM_TO_TOP,
    ]),
    itemTextColor: propTypes.string,
    itemBackground: propTypes.string,
    itemOpacity: propTypes.number,
  },
  symbolPropTypes,
  interactivityPropTypes,
  {
    effects: propTypes.arrayOf(legendEffectPropType),
  }
);

function _objectSpread$1$3(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(Object(source));
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(
        Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        })
      );
    }
    ownKeys.forEach(function (key) {
      _defineProperty$1$3(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$1$3(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
var zeroPadding = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
};
var computeDimensions = function computeDimensions(_ref) {
  var direction = _ref.direction,
    itemsSpacing = _ref.itemsSpacing,
    _padding = _ref.padding,
    itemCount = _ref.itemCount,
    itemWidth = _ref.itemWidth,
    itemHeight = _ref.itemHeight;
  var padding;
  if (isNumber(_padding)) {
    padding = {
      top: _padding,
      right: _padding,
      bottom: _padding,
      left: _padding,
    };
  } else if (isPlainObject$1(_padding)) {
    padding = _objectSpread$1$3({}, zeroPadding, _padding);
  } else {
    throw new TypeError(
      "Invalid property padding, must be one of: number, object"
    );
  }
  var horizontalPadding = padding.left + padding.right;
  var verticalPadding = padding.top + padding.bottom;
  var width = itemWidth + horizontalPadding;
  var height = itemHeight + verticalPadding;
  var spacing = (itemCount - 1) * itemsSpacing;
  if (direction === DIRECTION_ROW) {
    width = itemWidth * itemCount + spacing + horizontalPadding;
  } else if (direction === DIRECTION_COLUMN) {
    height = itemHeight * itemCount + spacing + verticalPadding;
  }
  return {
    width: width,
    height: height,
    padding: padding,
  };
};
var computePositionFromAnchor = function computePositionFromAnchor(_ref2) {
  var anchor = _ref2.anchor,
    translateX = _ref2.translateX,
    translateY = _ref2.translateY,
    containerWidth = _ref2.containerWidth,
    containerHeight = _ref2.containerHeight,
    width = _ref2.width,
    height = _ref2.height;
  var x = translateX;
  var y = translateY;
  switch (anchor) {
    case ANCHOR_TOP:
      x += (containerWidth - width) / 2;
      break;
    case ANCHOR_TOP_RIGHT:
      x += containerWidth - width;
      break;
    case ANCHOR_RIGHT:
      x += containerWidth - width;
      y += (containerHeight - height) / 2;
      break;
    case ANCHOR_BOTTOM_RIGHT:
      x += containerWidth - width;
      y += containerHeight - height;
      break;
    case ANCHOR_BOTTOM:
      x += (containerWidth - width) / 2;
      y += containerHeight - height;
      break;
    case ANCHOR_BOTTOM_LEFT:
      y += containerHeight - height;
      break;
    case ANCHOR_LEFT:
      y += (containerHeight - height) / 2;
      break;
    case ANCHOR_CENTER:
      x += (containerWidth - width) / 2;
      y += (containerHeight - height) / 2;
      break;
  }
  return {
    x: x,
    y: y,
  };
};
var computeItemLayout = function computeItemLayout(_ref3) {
  var direction = _ref3.direction,
    justify = _ref3.justify,
    symbolSize = _ref3.symbolSize,
    symbolSpacing = _ref3.symbolSpacing,
    width = _ref3.width,
    height = _ref3.height;
  var symbolX;
  var symbolY;
  var labelX;
  var labelY;
  var labelAnchor;
  var labelAlignment;
  switch (direction) {
    case DIRECTION_LEFT_TO_RIGHT:
      symbolX = 0;
      symbolY = (height - symbolSize) / 2;
      labelY = height / 2;
      labelAlignment = "central";
      if (justify === true) {
        labelX = width;
        labelAnchor = "end";
      } else {
        labelX = symbolSize + symbolSpacing;
        labelAnchor = "start";
      }
      break;
    case DIRECTION_RIGHT_TO_LEFT:
      symbolX = width - symbolSize;
      symbolY = (height - symbolSize) / 2;
      labelY = height / 2;
      labelAlignment = "central";
      if (justify === true) {
        labelX = 0;
        labelAnchor = "start";
      } else {
        labelX = width - symbolSize - symbolSpacing;
        labelAnchor = "end";
      }
      break;
    case DIRECTION_TOP_TO_BOTTOM:
      symbolX = (width - symbolSize) / 2;
      symbolY = 0;
      labelX = width / 2;
      labelAnchor = "middle";
      if (justify === true) {
        labelY = height;
        labelAlignment = "alphabetic";
      } else {
        labelY = symbolSize + symbolSpacing;
        labelAlignment = "text-before-edge";
      }
      break;
    case DIRECTION_BOTTOM_TO_TOP:
      symbolX = (width - symbolSize) / 2;
      symbolY = height - symbolSize;
      labelX = width / 2;
      labelAnchor = "middle";
      if (justify === true) {
        labelY = 0;
        labelAlignment = "text-before-edge";
      } else {
        labelY = height - symbolSize - symbolSpacing;
        labelAlignment = "alphabetic";
      }
      break;
  }
  return {
    symbolX: symbolX,
    symbolY: symbolY,
    labelX: labelX,
    labelY: labelY,
    labelAnchor: labelAnchor,
    labelAlignment: labelAlignment,
  };
};

var symbolPropTypes$1 = {
  x: propTypes.number.isRequired,
  y: propTypes.number.isRequired,
  size: propTypes.number.isRequired,
  fill: propTypes.string.isRequired,
  borderWidth: propTypes.number.isRequired,
  borderColor: propTypes.string.isRequired,
};
var symbolDefaultProps = {
  borderWidth: 0,
  borderColor: "transparent",
};

function _objectSpread$2$3(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(Object(source));
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(
        Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        })
      );
    }
    ownKeys.forEach(function (key) {
      _defineProperty$2$3(target, key, source[key]);
    });
  }
  return target;
}
function _typeof$3(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$3 = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof$3 = function _typeof(obj) {
      return obj &&
        typeof Symbol === "function" &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? "symbol"
        : typeof obj;
    };
  }
  return _typeof$3(obj);
}
function _classCallCheck$3(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$3(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$3(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$3(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties$3(Constructor, staticProps);
  return Constructor;
}
function _possibleConstructorReturn$3(self, call) {
  if (call && (_typeof$3(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized$3(self);
}
function _assertThisInitialized$3(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return self;
}
function _getPrototypeOf$3(o) {
  _getPrototypeOf$3 = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf$3(o);
}
function _inherits$3(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, writable: true, configurable: true },
  });
  if (superClass) _setPrototypeOf$3(subClass, superClass);
}
function _setPrototypeOf$3(o, p) {
  _setPrototypeOf$3 =
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
  return _setPrototypeOf$3(o, p);
}
function _defineProperty$2$3(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
var SymbolCircle = (function (_PureComponent) {
  _inherits$3(SymbolCircle, _PureComponent);
  function SymbolCircle() {
    _classCallCheck$3(this, SymbolCircle);
    return _possibleConstructorReturn$3(
      this,
      _getPrototypeOf$3(SymbolCircle).apply(this, arguments)
    );
  }
  _createClass$3(SymbolCircle, [
    {
      key: "render",
      value: function render() {
        var _this$props = this.props,
          x = _this$props.x,
          y = _this$props.y,
          size = _this$props.size,
          fill = _this$props.fill,
          borderWidth = _this$props.borderWidth,
          borderColor = _this$props.borderColor;
        return React.createElement("circle", {
          r: size / 2,
          cx: x + size / 2,
          cy: y + size / 2,
          fill: fill,
          strokeWidth: borderWidth,
          stroke: borderColor,
          style: {
            pointerEvents: "none",
          },
        });
      },
    },
  ]);
  return SymbolCircle;
})(PureComponent);
_defineProperty$2$3(
  SymbolCircle,
  "propTypes",
  _objectSpread$2$3({}, symbolPropTypes$1)
);
_defineProperty$2$3(
  SymbolCircle,
  "defaultProps",
  _objectSpread$2$3({}, symbolDefaultProps)
);

function _objectSpread$3$2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(Object(source));
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(
        Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        })
      );
    }
    ownKeys.forEach(function (key) {
      _defineProperty$3$2(target, key, source[key]);
    });
  }
  return target;
}
function _typeof$1$1(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$1$1 = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof$1$1 = function _typeof(obj) {
      return obj &&
        typeof Symbol === "function" &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? "symbol"
        : typeof obj;
    };
  }
  return _typeof$1$1(obj);
}
function _classCallCheck$1$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$1$1(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$1$1(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$1$1(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties$1$1(Constructor, staticProps);
  return Constructor;
}
function _possibleConstructorReturn$1$1(self, call) {
  if (call && (_typeof$1$1(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized$1$1(self);
}
function _assertThisInitialized$1$1(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return self;
}
function _getPrototypeOf$1$1(o) {
  _getPrototypeOf$1$1 = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf$1$1(o);
}
function _inherits$1$1(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, writable: true, configurable: true },
  });
  if (superClass) _setPrototypeOf$1$1(subClass, superClass);
}
function _setPrototypeOf$1$1(o, p) {
  _setPrototypeOf$1$1 =
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
  return _setPrototypeOf$1$1(o, p);
}
function _defineProperty$3$2(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
var SymbolDiamond = (function (_PureComponent) {
  _inherits$1$1(SymbolDiamond, _PureComponent);
  function SymbolDiamond() {
    _classCallCheck$1$1(this, SymbolDiamond);
    return _possibleConstructorReturn$1$1(
      this,
      _getPrototypeOf$1$1(SymbolDiamond).apply(this, arguments)
    );
  }
  _createClass$1$1(SymbolDiamond, [
    {
      key: "render",
      value: function render() {
        var _this$props = this.props,
          x = _this$props.x,
          y = _this$props.y,
          size = _this$props.size,
          fill = _this$props.fill,
          borderWidth = _this$props.borderWidth,
          borderColor = _this$props.borderColor;
        return React.createElement(
          "g",
          {
            transform: "translate(".concat(x, ",").concat(y, ")"),
          },
          React.createElement("path", {
            d: "\n                    M"
              .concat(size / 2, " 0\n                    L")
              .concat(size * 0.8, " ")
              .concat(size / 2, "\n                    L")
              .concat(size / 2, " ")
              .concat(size, "\n                    L")
              .concat(size * 0.2, " ")
              .concat(size / 2, "\n                    L")
              .concat(size / 2, " 0\n                "),
            fill: fill,
            strokeWidth: borderWidth,
            stroke: borderColor,
            style: {
              pointerEvents: "none",
            },
          })
        );
      },
    },
  ]);
  return SymbolDiamond;
})(PureComponent);
_defineProperty$3$2(
  SymbolDiamond,
  "propTypes",
  _objectSpread$3$2({}, symbolPropTypes$1)
);
_defineProperty$3$2(
  SymbolDiamond,
  "defaultProps",
  _objectSpread$3$2({}, symbolDefaultProps)
);

function _objectSpread$4$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(Object(source));
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(
        Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        })
      );
    }
    ownKeys.forEach(function (key) {
      _defineProperty$4$2(target, key, source[key]);
    });
  }
  return target;
}
function _typeof$2$1(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$2$1 = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof$2$1 = function _typeof(obj) {
      return obj &&
        typeof Symbol === "function" &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? "symbol"
        : typeof obj;
    };
  }
  return _typeof$2$1(obj);
}
function _classCallCheck$2$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$2$1(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$2$1(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$2$1(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties$2$1(Constructor, staticProps);
  return Constructor;
}
function _possibleConstructorReturn$2$1(self, call) {
  if (call && (_typeof$2$1(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized$2$1(self);
}
function _assertThisInitialized$2$1(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return self;
}
function _getPrototypeOf$2$1(o) {
  _getPrototypeOf$2$1 = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf$2$1(o);
}
function _inherits$2$1(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, writable: true, configurable: true },
  });
  if (superClass) _setPrototypeOf$2$1(subClass, superClass);
}
function _setPrototypeOf$2$1(o, p) {
  _setPrototypeOf$2$1 =
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
  return _setPrototypeOf$2$1(o, p);
}
function _defineProperty$4$2(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
var SymbolSquare = (function (_PureComponent) {
  _inherits$2$1(SymbolSquare, _PureComponent);
  function SymbolSquare() {
    _classCallCheck$2$1(this, SymbolSquare);
    return _possibleConstructorReturn$2$1(
      this,
      _getPrototypeOf$2$1(SymbolSquare).apply(this, arguments)
    );
  }
  _createClass$2$1(SymbolSquare, [
    {
      key: "render",
      value: function render() {
        var _this$props = this.props,
          x = _this$props.x,
          y = _this$props.y,
          size = _this$props.size,
          fill = _this$props.fill,
          borderWidth = _this$props.borderWidth,
          borderColor = _this$props.borderColor;
        return React.createElement("rect", {
          x: x,
          y: y,
          fill: fill,
          strokeWidth: borderWidth,
          stroke: borderColor,
          width: size,
          height: size,
          style: {
            pointerEvents: "none",
          },
        });
      },
    },
  ]);
  return SymbolSquare;
})(PureComponent);
_defineProperty$4$2(
  SymbolSquare,
  "propTypes",
  _objectSpread$4$1({}, symbolPropTypes$1)
);
_defineProperty$4$2(
  SymbolSquare,
  "defaultProps",
  _objectSpread$4$1({}, symbolDefaultProps)
);

function _objectSpread$5$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(Object(source));
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(
        Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        })
      );
    }
    ownKeys.forEach(function (key) {
      _defineProperty$5$1(target, key, source[key]);
    });
  }
  return target;
}
function _typeof$3$1(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$3$1 = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof$3$1 = function _typeof(obj) {
      return obj &&
        typeof Symbol === "function" &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? "symbol"
        : typeof obj;
    };
  }
  return _typeof$3$1(obj);
}
function _classCallCheck$3$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$3$1(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$3$1(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$3$1(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties$3$1(Constructor, staticProps);
  return Constructor;
}
function _possibleConstructorReturn$3$1(self, call) {
  if (call && (_typeof$3$1(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized$3$1(self);
}
function _assertThisInitialized$3$1(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return self;
}
function _getPrototypeOf$3$1(o) {
  _getPrototypeOf$3$1 = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf$3$1(o);
}
function _inherits$3$1(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, writable: true, configurable: true },
  });
  if (superClass) _setPrototypeOf$3$1(subClass, superClass);
}
function _setPrototypeOf$3$1(o, p) {
  _setPrototypeOf$3$1 =
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
  return _setPrototypeOf$3$1(o, p);
}
function _defineProperty$5$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
var SymbolTriangle = (function (_PureComponent) {
  _inherits$3$1(SymbolTriangle, _PureComponent);
  function SymbolTriangle() {
    _classCallCheck$3$1(this, SymbolTriangle);
    return _possibleConstructorReturn$3$1(
      this,
      _getPrototypeOf$3$1(SymbolTriangle).apply(this, arguments)
    );
  }
  _createClass$3$1(SymbolTriangle, [
    {
      key: "render",
      value: function render() {
        var _this$props = this.props,
          x = _this$props.x,
          y = _this$props.y,
          size = _this$props.size,
          fill = _this$props.fill,
          borderWidth = _this$props.borderWidth,
          borderColor = _this$props.borderColor;
        return React.createElement(
          "g",
          {
            transform: "translate(".concat(x, ",").concat(y, ")"),
          },
          React.createElement("path", {
            d: "\n                M"
              .concat(size / 2, " 0\n                L")
              .concat(size, " ")
              .concat(size, "\n                L0 ")
              .concat(size, "\n                L")
              .concat(size / 2, " 0\n            "),
            fill: fill,
            strokeWidth: borderWidth,
            stroke: borderColor,
            style: {
              pointerEvents: "none",
            },
          })
        );
      },
    },
  ]);
  return SymbolTriangle;
})(PureComponent);
_defineProperty$5$1(
  SymbolTriangle,
  "propTypes",
  _objectSpread$5$1({}, symbolPropTypes$1)
);
_defineProperty$5$1(
  SymbolTriangle,
  "defaultProps",
  _objectSpread$5$1({}, symbolDefaultProps)
);

function _objectSpread$6$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(Object(source));
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(
        Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        })
      );
    }
    ownKeys.forEach(function (key) {
      _defineProperty$6$1(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$6$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _slicedToArray$4(arr, i) {
  return (
    _arrayWithHoles$4(arr) ||
    _iterableToArrayLimit$4(arr, i) ||
    _nonIterableRest$4()
  );
}
function _nonIterableRest$4() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
function _iterableToArrayLimit$4(arr, i) {
  if (
    !(
      Symbol.iterator in Object(arr) ||
      Object.prototype.toString.call(arr) === "[object Arguments]"
    )
  ) {
    return;
  }
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;
  try {
    for (
      var _i = arr[Symbol.iterator](), _s;
      !(_n = (_s = _i.next()).done);
      _n = true
    ) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles$4(arr) {
  if (Array.isArray(arr)) return arr;
}
var symbolByShape = {
  circle: SymbolCircle,
  diamond: SymbolDiamond,
  square: SymbolSquare,
  triangle: SymbolTriangle,
};
var LegendSvgItem = function LegendSvgItem(_ref) {
  var x = _ref.x,
    y = _ref.y,
    width = _ref.width,
    height = _ref.height,
    data = _ref.data,
    direction = _ref.direction,
    justify = _ref.justify,
    textColor = _ref.textColor,
    background = _ref.background,
    opacity = _ref.opacity,
    symbolShape = _ref.symbolShape,
    symbolSize = _ref.symbolSize,
    symbolSpacing = _ref.symbolSpacing,
    symbolBorderWidth = _ref.symbolBorderWidth,
    symbolBorderColor = _ref.symbolBorderColor,
    onClick = _ref.onClick,
    onMouseEnter = _ref.onMouseEnter,
    onMouseLeave = _ref.onMouseLeave,
    effects = _ref.effects;
  var _useState = useState({}),
    _useState2 = _slicedToArray$4(_useState, 2),
    style = _useState2[0],
    setStyle = _useState2[1];
  var theme = useTheme();
  var handleClick = useCallback(
    function (event) {
      return onClick && onClick(data, event);
    },
    [onClick, data]
  );
  var handleMouseEnter = useCallback(
    function (event) {
      if (effects.length > 0) {
        var applyEffects = effects.filter(function (_ref2) {
          var on = _ref2.on;
          return on === "hover";
        });
        var _style = applyEffects.reduce(function (acc, effect) {
          return _objectSpread$6$1({}, acc, effect.style);
        }, {});
        setStyle(_style);
      }
      if (onMouseEnter === undefined) return;
      onMouseEnter(data, event);
    },
    [onMouseEnter, data, effects]
  );
  var handleMouseLeave = useCallback(
    function () {
      if (effects.length > 0) {
        var applyEffects = effects.filter(function (_ref3) {
          var on = _ref3.on;
          return on !== "hover";
        });
        var _style2 = applyEffects.reduce(function (acc, effect) {
          return _objectSpread$6$1({}, acc, effect.style);
        }, {});
        setStyle(_style2);
      }
      if (onMouseLeave === undefined) return;
      onMouseLeave(data, event);
    },
    [onMouseLeave, data, effects]
  );
  var _computeItemLayout = computeItemLayout({
      direction: direction,
      justify: justify,
      symbolSize: style.symbolSize || symbolSize,
      symbolSpacing: symbolSpacing,
      width: width,
      height: height,
    }),
    symbolX = _computeItemLayout.symbolX,
    symbolY = _computeItemLayout.symbolY,
    labelX = _computeItemLayout.labelX,
    labelY = _computeItemLayout.labelY,
    labelAnchor = _computeItemLayout.labelAnchor,
    labelAlignment = _computeItemLayout.labelAlignment;
  var isInteractive = [onClick, onMouseEnter, onMouseLeave].some(function (
    handler
  ) {
    return handler !== undefined;
  });
  var _Symbol;
  if (isFunction$1(symbolShape)) {
    _Symbol = symbolShape;
  } else {
    _Symbol = symbolByShape[symbolShape];
  }
  return React.createElement(
    "g",
    {
      transform: "translate(".concat(x, ",").concat(y, ")"),
      style: {
        opacity: style.itemOpacity !== undefined ? style.itemOpacity : opacity,
      },
    },
    React.createElement("rect", {
      width: width,
      height: height,
      fill: style.itemBackground || background,
      style: {
        cursor: isInteractive ? "pointer" : "auto",
      },
      onClick: handleClick,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
    }),
    React.createElement(_Symbol, {
      id: data.id,
      x: symbolX,
      y: symbolY,
      size: style.symbolSize || symbolSize,
      fill: data.fill || data.color,
      borderWidth:
        style.symbolBorderWidth !== undefined
          ? style.symbolBorderWidth
          : symbolBorderWidth,
      borderColor: style.symbolBorderColor || symbolBorderColor,
    }),
    React.createElement(
      "text",
      {
        textAnchor: labelAnchor,
        style: _objectSpread$6$1({}, theme.legends.text, {
          fill: style.itemTextColor || textColor,
          dominantBaseline: labelAlignment,
          pointerEvents: "none",
          userSelect: "none",
        }),
        x: labelX,
        y: labelY,
      },
      data.label
    )
  );
};
LegendSvgItem.displayName = "LegendSvgItem";
LegendSvgItem.propTypes = _objectSpread$6$1(
  {
    data: datumPropType.isRequired,
    x: propTypes.number.isRequired,
    y: propTypes.number.isRequired,
    width: propTypes.number.isRequired,
    height: propTypes.number.isRequired,
    textColor: propTypes.string,
    background: propTypes.string,
    opacity: propTypes.number,
    direction: propTypes.oneOf([
      "left-to-right",
      "right-to-left",
      "top-to-bottom",
      "bottom-to-top",
    ]).isRequired,
    justify: propTypes.bool.isRequired,
  },
  symbolPropTypes,
  interactivityPropTypes
);
LegendSvgItem.defaultProps = {
  direction: "left-to-right",
  justify: false,
  textColor: "black",
  background: "transparent",
  opacity: 1,
  symbolShape: "square",
  symbolSize: 16,
  symbolSpacing: 8,
  symbolBorderWidth: 0,
  symbolBorderColor: "transparent",
  effects: [],
};

function _objectSpread$7$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(Object(source));
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(
        Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        })
      );
    }
    ownKeys.forEach(function (key) {
      _defineProperty$7$1(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$7$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
var LegendSvg = function LegendSvg(_ref) {
  var data = _ref.data,
    x = _ref.x,
    y = _ref.y,
    direction = _ref.direction,
    _padding = _ref.padding,
    justify = _ref.justify,
    effects = _ref.effects,
    itemWidth = _ref.itemWidth,
    itemHeight = _ref.itemHeight,
    itemDirection = _ref.itemDirection,
    itemsSpacing = _ref.itemsSpacing,
    itemTextColor = _ref.itemTextColor,
    itemBackground = _ref.itemBackground,
    itemOpacity = _ref.itemOpacity,
    symbolShape = _ref.symbolShape,
    symbolSize = _ref.symbolSize,
    symbolSpacing = _ref.symbolSpacing,
    symbolBorderWidth = _ref.symbolBorderWidth,
    symbolBorderColor = _ref.symbolBorderColor,
    onClick = _ref.onClick,
    onMouseEnter = _ref.onMouseEnter,
    onMouseLeave = _ref.onMouseLeave;
  var _computeDimensions = computeDimensions({
      itemCount: data.length,
      itemWidth: itemWidth,
      itemHeight: itemHeight,
      itemsSpacing: itemsSpacing,
      direction: direction,
      padding: _padding,
    }),
    padding = _computeDimensions.padding;
  var xStep = 0;
  var yStep = 0;
  if (direction === "row") {
    xStep = itemWidth + itemsSpacing;
  } else if (direction === "column") {
    yStep = itemHeight + itemsSpacing;
  }
  return React.createElement(
    "g",
    {
      transform: "translate(".concat(x, ",").concat(y, ")"),
    },
    data.map(function (data, i) {
      return React.createElement(LegendSvgItem, {
        key: i,
        data: data,
        x: i * xStep + padding.left,
        y: i * yStep + padding.top,
        width: itemWidth,
        height: itemHeight,
        direction: itemDirection,
        justify: justify,
        effects: effects,
        textColor: itemTextColor,
        background: itemBackground,
        opacity: itemOpacity,
        symbolShape: symbolShape,
        symbolSize: symbolSize,
        symbolSpacing: symbolSpacing,
        symbolBorderWidth: symbolBorderWidth,
        symbolBorderColor: symbolBorderColor,
        onClick: onClick,
        onMouseEnter: onMouseEnter,
        onMouseLeave: onMouseLeave,
      });
    })
  );
};
LegendSvg.propTypes = _objectSpread$7$1(
  {
    data: propTypes.arrayOf(datumPropType).isRequired,
    x: propTypes.number.isRequired,
    y: propTypes.number.isRequired,
    direction: propTypes.oneOf(["row", "column"]).isRequired,
    padding: propTypes.oneOfType([
      propTypes.number,
      propTypes.shape({
        top: propTypes.number,
        right: propTypes.number,
        bottom: propTypes.number,
        left: propTypes.number,
      }),
    ]).isRequired,
    justify: propTypes.bool.isRequired,
    itemsSpacing: propTypes.number.isRequired,
    itemWidth: propTypes.number.isRequired,
    itemHeight: propTypes.number.isRequired,
    itemDirection: propTypes.oneOf([
      DIRECTION_LEFT_TO_RIGHT,
      DIRECTION_RIGHT_TO_LEFT,
      DIRECTION_TOP_TO_BOTTOM,
      DIRECTION_BOTTOM_TO_TOP,
    ]).isRequired,
    itemTextColor: propTypes.string.isRequired,
    itemBackground: propTypes.string.isRequired,
    itemOpacity: propTypes.number.isRequired,
  },
  symbolPropTypes,
  interactivityPropTypes
);
LegendSvg.defaultProps = {
  padding: 0,
  justify: false,
  itemsSpacing: 0,
  itemDirection: "left-to-right",
  itemTextColor: "black",
  itemBackground: "transparent",
  itemOpacity: 1,
};

function _objectSpread$8$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(Object(source));
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(
        Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        })
      );
    }
    ownKeys.forEach(function (key) {
      _defineProperty$8(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$8(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
var BoxLegendSvg = function BoxLegendSvg(_ref) {
  var data = _ref.data,
    containerWidth = _ref.containerWidth,
    containerHeight = _ref.containerHeight,
    translateX = _ref.translateX,
    translateY = _ref.translateY,
    anchor = _ref.anchor,
    direction = _ref.direction,
    padding = _ref.padding,
    justify = _ref.justify,
    itemsSpacing = _ref.itemsSpacing,
    itemWidth = _ref.itemWidth,
    itemHeight = _ref.itemHeight,
    itemDirection = _ref.itemDirection,
    itemTextColor = _ref.itemTextColor,
    itemBackground = _ref.itemBackground,
    itemOpacity = _ref.itemOpacity,
    symbolShape = _ref.symbolShape,
    symbolSize = _ref.symbolSize,
    symbolSpacing = _ref.symbolSpacing,
    symbolBorderWidth = _ref.symbolBorderWidth,
    symbolBorderColor = _ref.symbolBorderColor,
    onClick = _ref.onClick,
    onMouseEnter = _ref.onMouseEnter,
    onMouseLeave = _ref.onMouseLeave,
    effects = _ref.effects;
  var _computeDimensions = computeDimensions({
      itemCount: data.length,
      itemsSpacing: itemsSpacing,
      itemWidth: itemWidth,
      itemHeight: itemHeight,
      direction: direction,
      padding: padding,
    }),
    width = _computeDimensions.width,
    height = _computeDimensions.height;
  var _computePositionFromA = computePositionFromAnchor({
      anchor: anchor,
      translateX: translateX,
      translateY: translateY,
      containerWidth: containerWidth,
      containerHeight: containerHeight,
      width: width,
      height: height,
    }),
    x = _computePositionFromA.x,
    y = _computePositionFromA.y;
  return React.createElement(LegendSvg, {
    data: data,
    x: x,
    y: y,
    direction: direction,
    padding: padding,
    justify: justify,
    effects: effects,
    itemsSpacing: itemsSpacing,
    itemWidth: itemWidth,
    itemHeight: itemHeight,
    itemDirection: itemDirection,
    itemTextColor: itemTextColor,
    itemBackground: itemBackground,
    itemOpacity: itemOpacity,
    symbolShape: symbolShape,
    symbolSize: symbolSize,
    symbolSpacing: symbolSpacing,
    symbolBorderWidth: symbolBorderWidth,
    symbolBorderColor: symbolBorderColor,
    onClick: onClick,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
  });
};
BoxLegendSvg.propTypes = _objectSpread$8$1(
  {
    data: propTypes.arrayOf(datumPropType).isRequired,
    containerWidth: propTypes.number.isRequired,
    containerHeight: propTypes.number.isRequired,
    translateX: propTypes.number.isRequired,
    translateY: propTypes.number.isRequired,
    anchor: propTypes.oneOf([
      ANCHOR_TOP,
      ANCHOR_TOP_RIGHT,
      ANCHOR_RIGHT,
      ANCHOR_BOTTOM_RIGHT,
      ANCHOR_BOTTOM,
      ANCHOR_BOTTOM_LEFT,
      ANCHOR_LEFT,
      ANCHOR_TOP_LEFT,
      ANCHOR_CENTER,
    ]).isRequired,
    direction: propTypes.oneOf([DIRECTION_ROW, DIRECTION_COLUMN]).isRequired,
    padding: propTypes.oneOfType([
      propTypes.number,
      propTypes.shape({
        top: propTypes.number,
        right: propTypes.number,
        bottom: propTypes.number,
        left: propTypes.number,
      }),
    ]).isRequired,
    justify: propTypes.bool,
    itemWidth: propTypes.number.isRequired,
    itemHeight: propTypes.number.isRequired,
    itemDirection: propTypes.oneOf([
      DIRECTION_LEFT_TO_RIGHT,
      DIRECTION_RIGHT_TO_LEFT,
      DIRECTION_TOP_TO_BOTTOM,
      DIRECTION_BOTTOM_TO_TOP,
    ]),
    itemsSpacing: propTypes.number.isRequired,
    itemTextColor: propTypes.string,
    itemBackground: propTypes.string,
    itemOpacity: propTypes.number,
  },
  symbolPropTypes,
  interactivityPropTypes
);
BoxLegendSvg.defaultProps = {
  translateX: 0,
  translateY: 0,
  itemsSpacing: LegendSvg.defaultProps.itemsSpacing,
  padding: LegendSvg.defaultProps.padding,
};

var textPropsMapping = {
  align: {
    start: "left",
    middle: "center",
    end: "right",
  },
  baseline: {
    hanging: "top",
    middle: "middle",
    central: "middle",
    baseline: "bottom",
  },
};
var renderLegendToCanvas = function renderLegendToCanvas(ctx, _ref) {
  var data = _ref.data,
    containerWidth = _ref.containerWidth,
    containerHeight = _ref.containerHeight,
    _ref$translateX = _ref.translateX,
    translateX =
      _ref$translateX === void 0
        ? BoxLegendSvg.defaultProps.translateX
        : _ref$translateX,
    _ref$translateY = _ref.translateY,
    translateY =
      _ref$translateY === void 0
        ? BoxLegendSvg.defaultProps.translateY
        : _ref$translateY,
    anchor = _ref.anchor,
    direction = _ref.direction,
    _ref$padding = _ref.padding,
    _padding =
      _ref$padding === void 0 ? LegendSvg.defaultProps.padding : _ref$padding,
    _ref$justify = _ref.justify,
    justify =
      _ref$justify === void 0
        ? LegendSvgItem.defaultProps.justify
        : _ref$justify,
    _ref$itemsSpacing = _ref.itemsSpacing,
    itemsSpacing =
      _ref$itemsSpacing === void 0
        ? LegendSvg.defaultProps.itemsSpacing
        : _ref$itemsSpacing,
    itemWidth = _ref.itemWidth,
    itemHeight = _ref.itemHeight,
    _ref$itemDirection = _ref.itemDirection,
    itemDirection =
      _ref$itemDirection === void 0
        ? LegendSvgItem.defaultProps.direction
        : _ref$itemDirection,
    _ref$itemTextColor = _ref.itemTextColor,
    itemTextColor =
      _ref$itemTextColor === void 0
        ? LegendSvg.defaultProps.textColor
        : _ref$itemTextColor,
    _ref$symbolSize = _ref.symbolSize,
    symbolSize =
      _ref$symbolSize === void 0
        ? LegendSvgItem.defaultProps.symbolSize
        : _ref$symbolSize,
    _ref$symbolSpacing = _ref.symbolSpacing,
    symbolSpacing =
      _ref$symbolSpacing === void 0
        ? LegendSvgItem.defaultProps.symbolSpacing
        : _ref$symbolSpacing,
    theme = _ref.theme;
  var _computeDimensions = computeDimensions({
      itemCount: data.length,
      itemWidth: itemWidth,
      itemHeight: itemHeight,
      itemsSpacing: itemsSpacing,
      direction: direction,
      padding: _padding,
    }),
    width = _computeDimensions.width,
    height = _computeDimensions.height,
    padding = _computeDimensions.padding;
  var _computePositionFromA = computePositionFromAnchor({
      anchor: anchor,
      translateX: translateX,
      translateY: translateY,
      containerWidth: containerWidth,
      containerHeight: containerHeight,
      width: width,
      height: height,
    }),
    x = _computePositionFromA.x,
    y = _computePositionFromA.y;
  var xStep = 0;
  var yStep = 0;
  if (direction === DIRECTION_ROW) {
    xStep = itemWidth + itemsSpacing;
  } else if (direction === DIRECTION_COLUMN) {
    yStep = itemHeight + itemsSpacing;
  }
  ctx.save();
  ctx.translate(x, y);
  ctx.font = ""
    .concat(theme.legends.text.fontSize, "px ")
    .concat(theme.legends.text.fontFamily || "sans-serif");
  data.forEach(function (d, i) {
    var itemX = i * xStep + padding.left;
    var itemY = i * yStep + padding.top;
    var _computeItemLayout = computeItemLayout({
        direction: itemDirection,
        justify: justify,
        symbolSize: symbolSize,
        symbolSpacing: symbolSpacing,
        width: itemWidth,
        height: itemHeight,
      }),
      symbolX = _computeItemLayout.symbolX,
      symbolY = _computeItemLayout.symbolY,
      labelX = _computeItemLayout.labelX,
      labelY = _computeItemLayout.labelY,
      labelAnchor = _computeItemLayout.labelAnchor,
      labelAlignment = _computeItemLayout.labelAlignment;
    ctx.fillStyle = d.color;
    ctx.fillRect(itemX + symbolX, itemY + symbolY, symbolSize, symbolSize);
    ctx.textAlign = textPropsMapping.align[labelAnchor];
    ctx.textBaseline = textPropsMapping.baseline[labelAlignment];
    ctx.fillStyle = itemTextColor || theme.legends.text.fill;
    ctx.fillText(d.label, itemX + labelX, itemY + labelY);
  });
  ctx.restore();
};

var linearScale = function linearScale(_ref, xy, width, height) {
  var axis = _ref.axis,
    _ref$min = _ref.min,
    min = _ref$min === void 0 ? 0 : _ref$min,
    _ref$max = _ref.max,
    max = _ref$max === void 0 ? "auto" : _ref$max,
    _ref$stacked = _ref.stacked,
    stacked = _ref$stacked === void 0 ? false : _ref$stacked,
    _ref$reverse = _ref.reverse,
    reverse = _ref$reverse === void 0 ? false : _ref$reverse;
  var values = xy[axis];
  var size = axis === "x" ? width : height;
  var minValue = min;
  if (min === "auto") {
    minValue = stacked === true ? values.minStacked : values.min;
  }
  var maxValue = max;
  if (max === "auto") {
    maxValue = stacked === true ? values.maxStacked : values.max;
  }
  var scale = linear$1().rangeRound(axis === "x" ? [0, size] : [size, 0]);
  if (reverse === true) scale.domain([maxValue, minValue]);
  else scale.domain([minValue, maxValue]);
  scale.type = "linear";
  scale.stacked = stacked;
  return scale;
};
var linearScalePropTypes = {
  type: propTypes.oneOf(["linear"]).isRequired,
  min: propTypes.oneOfType([propTypes.oneOf(["auto"]), propTypes.number]),
  max: propTypes.oneOfType([propTypes.oneOf(["auto"]), propTypes.number]),
  stacked: propTypes.bool,
  reverse: propTypes.bool,
};

var logScale = function logScale(_ref, xy, width, height) {
  var axis = _ref.axis,
    _ref$base = _ref.base,
    base = _ref$base === void 0 ? 10 : _ref$base,
    _ref$min = _ref.min,
    min = _ref$min === void 0 ? "auto" : _ref$min,
    _ref$max = _ref.max,
    max = _ref$max === void 0 ? "auto" : _ref$max;
  var values = xy[axis];
  var size = axis === "x" ? width : height;
  var hasZero = values.all.some(function (v) {
    return v === 0;
  });
  var sign;
  var hasMixedSign = false;
  values.all.forEach(function (v) {
    if (hasMixedSign === true) return;
    if (sign === undefined) {
      sign = Math.sign(v);
    } else if (Math.sign(v) !== sign) {
      hasMixedSign = true;
    }
  });
  if (hasZero || hasMixedSign) {
    throw new Error(
      [
        "a log scale domain must be strictly-positive or strictly-negative,",
        "and must not include or cross zero.",
      ].join("\n")
    );
  }
  var minValue = min;
  if (min === "auto") {
    minValue = values.min;
  }
  var maxValue = max;
  if (max === "auto") {
    maxValue = values.max;
  }
  var scale = log()
    .domain([minValue, maxValue])
    .rangeRound(axis === "x" ? [0, size] : [size, 0])
    .base(base)
    .nice();
  scale.type = "log";
  return scale;
};
var logScalePropTypes = {
  type: propTypes.oneOf(["log"]).isRequired,
  base: propTypes.number,
  min: propTypes.oneOfType([propTypes.oneOf(["auto"]), propTypes.number]),
  max: propTypes.oneOfType([propTypes.oneOf(["auto"]), propTypes.number]),
};

var pointScale = function pointScale(_ref, xy, width, height) {
  var axis = _ref.axis;
  var values = xy[axis];
  var size = axis === "x" ? width : height;
  var scale = point().range([0, size]).domain(values.all);
  scale.type = "point";
  return scale;
};
var pointScalePropTypes = {
  type: propTypes.oneOf(["point"]).isRequired,
};

var _precisionCutOffsByTy;
function _defineProperty$a(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
var TIME_PRECISION_MILLISECOND = "millisecond";
var TIME_PRECISION_SECOND = "second";
var TIME_PRECISION_MINUTE = "minute";
var TIME_PRECISION_HOUR = "hour";
var TIME_PRECISION_DAY = "day";
var TIME_PRECISION_MONTH = "month";
var TIME_PRECISION_YEAR = "year";
var timePrecisions = [
  TIME_PRECISION_MILLISECOND,
  TIME_PRECISION_SECOND,
  TIME_PRECISION_MINUTE,
  TIME_PRECISION_HOUR,
  TIME_PRECISION_DAY,
  TIME_PRECISION_MONTH,
  TIME_PRECISION_YEAR,
];
var precisionCutOffs = [
  function (date) {
    return date.setMilliseconds(0);
  },
  function (date) {
    return date.setSeconds(0);
  },
  function (date) {
    return date.setMinutes(0);
  },
  function (date) {
    return date.setHours(0);
  },
  function (date) {
    return date.setDate(1);
  },
  function (date) {
    return date.setMonth(0);
  },
];
var precisionCutOffsByType =
  ((_precisionCutOffsByTy = {}),
  _defineProperty$a(_precisionCutOffsByTy, TIME_PRECISION_MILLISECOND, []),
  _defineProperty$a(
    _precisionCutOffsByTy,
    TIME_PRECISION_SECOND,
    precisionCutOffs.slice(0, 1)
  ),
  _defineProperty$a(
    _precisionCutOffsByTy,
    TIME_PRECISION_MINUTE,
    precisionCutOffs.slice(0, 2)
  ),
  _defineProperty$a(
    _precisionCutOffsByTy,
    TIME_PRECISION_HOUR,
    precisionCutOffs.slice(0, 3)
  ),
  _defineProperty$a(
    _precisionCutOffsByTy,
    TIME_PRECISION_DAY,
    precisionCutOffs.slice(0, 4)
  ),
  _defineProperty$a(
    _precisionCutOffsByTy,
    TIME_PRECISION_MONTH,
    precisionCutOffs.slice(0, 5)
  ),
  _defineProperty$a(
    _precisionCutOffsByTy,
    TIME_PRECISION_YEAR,
    precisionCutOffs.slice(0, 6)
  ),
  _precisionCutOffsByTy);
var createPrecisionMethod = function createPrecisionMethod(precision) {
  return function (date) {
    precisionCutOffsByType[precision].forEach(function (cutOff) {
      cutOff(date);
    });
    return date;
  };
};
var createDateNormalizer = function createDateNormalizer(_ref) {
  var _ref$format = _ref.format,
    format = _ref$format === void 0 ? "native" : _ref$format,
    _ref$precision = _ref.precision,
    precision = _ref$precision === void 0 ? "millisecond" : _ref$precision,
    _ref$useUTC = _ref.useUTC,
    useUTC = _ref$useUTC === void 0 ? true : _ref$useUTC;
  var precisionFn = createPrecisionMethod(precision);
  if (format === "native")
    return function (v) {
      return precisionFn(v);
    };
  var parseTime = useUTC ? utcParse$1(format) : timeParse$1(format);
  return function (v) {
    return precisionFn(parseTime(v));
  };
};

var timeScale = function timeScale(_ref, xy, width, height) {
  var axis = _ref.axis,
    _ref$format = _ref.format,
    format = _ref$format === void 0 ? "native" : _ref$format,
    _ref$precision = _ref.precision,
    precision =
      _ref$precision === void 0 ? TIME_PRECISION_MILLISECOND : _ref$precision,
    _ref$min = _ref.min,
    min = _ref$min === void 0 ? "auto" : _ref$min,
    _ref$max = _ref.max,
    max = _ref$max === void 0 ? "auto" : _ref$max,
    _ref$useUTC = _ref.useUTC,
    useUTC = _ref$useUTC === void 0 ? true : _ref$useUTC;
  var values = xy[axis];
  var size = axis === "x" ? width : height;
  var normalize = createDateNormalizer({
    format: format,
    precision: precision,
    useUTC: useUTC,
  });
  var minValue = min;
  if (min === "auto") {
    minValue = values.min;
  } else if (format !== "native") {
    minValue = normalize(min);
  }
  var maxValue = max;
  if (max === "auto") {
    maxValue = values.max;
  } else if (format !== "native") {
    maxValue = normalize(max);
  }
  var scale = useUTC ? utcTime() : time();
  scale.domain([minValue, maxValue]).range([0, size]);
  scale.type = "time";
  scale.useUTC = useUTC;
  return scale;
};
var timeScalePropTypes = {
  type: propTypes.oneOf(["time"]).isRequired,
  format: propTypes.string,
  precision: propTypes.oneOf(timePrecisions),
};

function _toConsumableArray(arr) {
  return (
    _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread()
  );
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
function _iterableToArray(iter) {
  if (
    Symbol.iterator in Object(iter) ||
    Object.prototype.toString.call(iter) === "[object Arguments]"
  )
    return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
}
function _objectSpread$a(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(Object(source));
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(
        Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        })
      );
    }
    ownKeys.forEach(function (key) {
      _defineProperty$1$4(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$1$4(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
var getOtherAxis = function getOtherAxis(axis) {
  return axis === "x" ? "y" : "x";
};
var compareValues = function compareValues(a, b) {
  return a === b;
};
var compareDateValues = function compareDateValues(a, b) {
  return a.getTime() === b.getTime();
};
var computeXYScalesForSeries = function computeXYScalesForSeries(
  _series,
  xScaleSpec,
  yScaleSpec,
  width,
  height
) {
  var series = _series.map(function (serie) {
    return _objectSpread$a({}, serie, {
      data: serie.data.map(function (d) {
        return {
          data: _objectSpread$a({}, d),
        };
      }),
    });
  });
  var xy = generateSeriesXY(series, xScaleSpec, yScaleSpec);
  if (xScaleSpec.stacked === true) {
    stackX(yScaleSpec.type, xy, series);
  }
  if (yScaleSpec.stacked === true) {
    stackY(xScaleSpec.type, xy, series);
  }
  var xScale = computeScale(
    _objectSpread$a({}, xScaleSpec, {
      axis: "x",
    }),
    xy,
    width,
    height
  );
  var yScale = computeScale(
    _objectSpread$a({}, yScaleSpec, {
      axis: "y",
    }),
    xy,
    width,
    height
  );
  series.forEach(function (serie) {
    serie.data.forEach(function (d) {
      d.position = {
        x:
          xScale.stacked === true
            ? d.data.xStacked === null
              ? null
              : xScale(d.data.xStacked)
            : d.data.x === null
            ? null
            : xScale(d.data.x),
        y:
          yScale.stacked === true
            ? d.data.yStacked === null
              ? null
              : yScale(d.data.yStacked)
            : d.data.y === null
            ? null
            : yScale(d.data.y),
      };
    });
  });
  return _objectSpread$a({}, xy, {
    series: series,
    xScale: xScale,
    yScale: yScale,
  });
};
var computeScale = function computeScale(spec, xy, width, height) {
  if (spec.type === "linear") return linearScale(spec, xy, width, height);
  else if (spec.type === "point") return pointScale(spec, xy, width, height);
  else if (spec.type === "time") return timeScale(spec, xy, width, height);
  else if (spec.type === "log") return logScale(spec, xy, width, height);
};
var generateSeriesXY = function generateSeriesXY(
  series,
  xScaleSpec,
  yScaleSpec
) {
  return {
    x: generateSeriesAxis(series, "x", xScaleSpec),
    y: generateSeriesAxis(series, "y", yScaleSpec),
  };
};
var generateSeriesAxis = function generateSeriesAxis(series, axis, scaleSpec) {
  var _ref =
      arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
    _ref$getValue = _ref.getValue,
    getValue =
      _ref$getValue === void 0
        ? function (d) {
            return d.data[axis];
          }
        : _ref$getValue,
    _ref$setValue = _ref.setValue,
    setValue =
      _ref$setValue === void 0
        ? function (d, v) {
            d.data[axis] = v;
          }
        : _ref$setValue;
  if (scaleSpec.type === "linear") {
    series.forEach(function (serie) {
      serie.data.forEach(function (d) {
        setValue(d, getValue(d) === null ? null : parseFloat(getValue(d)));
      });
    });
  } else if (scaleSpec.type === "time" && scaleSpec.format !== "native") {
    var parseTime = createDateNormalizer(scaleSpec);
    series.forEach(function (serie) {
      serie.data.forEach(function (d) {
        setValue(d, getValue(d) === null ? null : parseTime(getValue(d)));
      });
    });
  }
  var all = [];
  series.forEach(function (serie) {
    serie.data.forEach(function (d) {
      all.push(getValue(d));
    });
  });
  var min, max;
  if (scaleSpec.type === "linear") {
    all = uniq(all);
    all = sortBy(all, function (v) {
      return v;
    });
    min = Math.min.apply(Math, _toConsumableArray(all));
    max = Math.max.apply(Math, _toConsumableArray(all));
  } else if (scaleSpec.type === "time") {
    all = uniqBy(all, function (v) {
      return v.getTime();
    });
    all = all
      .slice(0)
      .sort(function (a, b) {
        return b - a;
      })
      .reverse();
    min = all[0];
    max = last$1(all);
  } else {
    all = uniq(all);
    min = all[0];
    max = last$1(all);
  }
  return {
    all: all,
    min: min,
    max: max,
  };
};
var stackAxis = function stackAxis(axis, otherType, xy, series) {
  var otherAxis = getOtherAxis(axis);
  var all = [];
  xy[otherAxis].all.forEach(function (v) {
    var compare = isDate(v) ? compareDateValues : compareValues;
    var stack = [];
    series.forEach(function (serie) {
      var datum = serie.data.find(function (d) {
        return compare(d.data[otherAxis], v);
      });
      var value = null;
      var stackValue = null;
      if (datum !== undefined) {
        value = datum.data[axis];
        if (value !== null) {
          var head = last$1(stack);
          if (head === undefined) {
            stackValue = value;
          } else if (head !== null) {
            stackValue = head + value;
          }
        }
        datum.data["".concat(axis, "Stacked")] = stackValue;
      }
      stack.push(stackValue);
      all.push(stackValue);
    });
  });
  all = all.filter(function (v) {
    return v !== null;
  });
  xy[axis].minStacked = Math.min.apply(Math, _toConsumableArray(all));
  xy[axis].maxStacked = Math.max.apply(Math, _toConsumableArray(all));
};
var stackX = function stackX(xy, otherType, series) {
  return stackAxis("x", xy, otherType, series);
};
var stackY = function stackY(xy, otherType, series) {
  return stackAxis("y", xy, otherType, series);
};

var scalePropType = propTypes.oneOfType([
  propTypes.shape(linearScalePropTypes),
  propTypes.shape(pointScalePropTypes),
  propTypes.shape(timeScalePropTypes),
  propTypes.shape(logScalePropTypes),
]);

const EPSILON = Math.pow(2, -52);
const EDGE_STACK = new Uint32Array(512);

class Delaunator {
  static from(points, getX = defaultGetX, getY = defaultGetY) {
    const n = points.length;
    const coords = new Float64Array(n * 2);

    for (let i = 0; i < n; i++) {
      const p = points[i];
      coords[2 * i] = getX(p);
      coords[2 * i + 1] = getY(p);
    }

    return new Delaunator(coords);
  }

  constructor(coords) {
    const n = coords.length >> 1;
    if (n > 0 && typeof coords[0] !== "number")
      throw new Error("Expected coords to contain numbers.");

    this.coords = coords;

    // arrays that will store the triangulation graph
    const maxTriangles = Math.max(2 * n - 5, 0);
    this._triangles = new Uint32Array(maxTriangles * 3);
    this._halfedges = new Int32Array(maxTriangles * 3);

    // temporary arrays for tracking the edges of the advancing convex hull
    this._hashSize = Math.ceil(Math.sqrt(n));
    this._hullPrev = new Uint32Array(n); // edge to prev edge
    this._hullNext = new Uint32Array(n); // edge to next edge
    this._hullTri = new Uint32Array(n); // edge to adjacent triangle
    this._hullHash = new Int32Array(this._hashSize).fill(-1); // angular edge hash

    // temporary arrays for sorting points
    this._ids = new Uint32Array(n);
    this._dists = new Float64Array(n);

    this.update();
  }

  update() {
    const {
      coords,
      _hullPrev: hullPrev,
      _hullNext: hullNext,
      _hullTri: hullTri,
      _hullHash: hullHash,
    } = this;
    const n = coords.length >> 1;

    // populate an array of point indices; calculate input data bbox
    let minX = Infinity;
    let minY = Infinity;
    let maxX = -Infinity;
    let maxY = -Infinity;

    for (let i = 0; i < n; i++) {
      const x = coords[2 * i];
      const y = coords[2 * i + 1];
      if (x < minX) minX = x;
      if (y < minY) minY = y;
      if (x > maxX) maxX = x;
      if (y > maxY) maxY = y;
      this._ids[i] = i;
    }
    const cx = (minX + maxX) / 2;
    const cy = (minY + maxY) / 2;

    let minDist = Infinity;
    let i0, i1, i2;

    // pick a seed point close to the center
    for (let i = 0; i < n; i++) {
      const d = dist(cx, cy, coords[2 * i], coords[2 * i + 1]);
      if (d < minDist) {
        i0 = i;
        minDist = d;
      }
    }
    const i0x = coords[2 * i0];
    const i0y = coords[2 * i0 + 1];

    minDist = Infinity;

    // find the point closest to the seed
    for (let i = 0; i < n; i++) {
      if (i === i0) continue;
      const d = dist(i0x, i0y, coords[2 * i], coords[2 * i + 1]);
      if (d < minDist && d > 0) {
        i1 = i;
        minDist = d;
      }
    }
    let i1x = coords[2 * i1];
    let i1y = coords[2 * i1 + 1];

    let minRadius = Infinity;

    // find the third point which forms the smallest circumcircle with the first two
    for (let i = 0; i < n; i++) {
      if (i === i0 || i === i1) continue;
      const r = circumradius(
        i0x,
        i0y,
        i1x,
        i1y,
        coords[2 * i],
        coords[2 * i + 1]
      );
      if (r < minRadius) {
        i2 = i;
        minRadius = r;
      }
    }
    let i2x = coords[2 * i2];
    let i2y = coords[2 * i2 + 1];

    if (minRadius === Infinity) {
      // order collinear points by dx (or dy if all x are identical)
      // and return the list as a hull
      for (let i = 0; i < n; i++) {
        this._dists[i] =
          coords[2 * i] - coords[0] || coords[2 * i + 1] - coords[1];
      }
      quicksort(this._ids, this._dists, 0, n - 1);
      const hull = new Uint32Array(n);
      let j = 0;
      for (let i = 0, d0 = -Infinity; i < n; i++) {
        const id = this._ids[i];
        if (this._dists[id] > d0) {
          hull[j++] = id;
          d0 = this._dists[id];
        }
      }
      this.hull = hull.subarray(0, j);
      this.triangles = new Uint32Array(0);
      this.halfedges = new Uint32Array(0);
      return;
    }

    // swap the order of the seed points for counter-clockwise orientation
    if (orient(i0x, i0y, i1x, i1y, i2x, i2y)) {
      const i = i1;
      const x = i1x;
      const y = i1y;
      i1 = i2;
      i1x = i2x;
      i1y = i2y;
      i2 = i;
      i2x = x;
      i2y = y;
    }

    const center = circumcenter(i0x, i0y, i1x, i1y, i2x, i2y);
    this._cx = center.x;
    this._cy = center.y;

    for (let i = 0; i < n; i++) {
      this._dists[i] = dist(
        coords[2 * i],
        coords[2 * i + 1],
        center.x,
        center.y
      );
    }

    // sort the points by distance from the seed triangle circumcenter
    quicksort(this._ids, this._dists, 0, n - 1);

    // set up the seed triangle as the starting hull
    this._hullStart = i0;
    let hullSize = 3;

    hullNext[i0] = hullPrev[i2] = i1;
    hullNext[i1] = hullPrev[i0] = i2;
    hullNext[i2] = hullPrev[i1] = i0;

    hullTri[i0] = 0;
    hullTri[i1] = 1;
    hullTri[i2] = 2;

    hullHash.fill(-1);
    hullHash[this._hashKey(i0x, i0y)] = i0;
    hullHash[this._hashKey(i1x, i1y)] = i1;
    hullHash[this._hashKey(i2x, i2y)] = i2;

    this.trianglesLen = 0;
    this._addTriangle(i0, i1, i2, -1, -1, -1);

    for (let k = 0, xp, yp; k < this._ids.length; k++) {
      const i = this._ids[k];
      const x = coords[2 * i];
      const y = coords[2 * i + 1];

      // skip near-duplicate points
      if (k > 0 && Math.abs(x - xp) <= EPSILON && Math.abs(y - yp) <= EPSILON)
        continue;
      xp = x;
      yp = y;

      // skip seed triangle points
      if (i === i0 || i === i1 || i === i2) continue;

      // find a visible edge on the convex hull using edge hash
      let start = 0;
      for (let j = 0, key = this._hashKey(x, y); j < this._hashSize; j++) {
        start = hullHash[(key + j) % this._hashSize];
        if (start !== -1 && start !== hullNext[start]) break;
      }

      start = hullPrev[start];
      let e = start,
        q;
      while (
        ((q = hullNext[e]),
        !orient(
          x,
          y,
          coords[2 * e],
          coords[2 * e + 1],
          coords[2 * q],
          coords[2 * q + 1]
        ))
      ) {
        e = q;
        if (e === start) {
          e = -1;
          break;
        }
      }
      if (e === -1) continue; // likely a near-duplicate point; skip it

      // add the first triangle from the point
      let t = this._addTriangle(e, i, hullNext[e], -1, -1, hullTri[e]);

      // recursively flip triangles from the point until they satisfy the Delaunay condition
      hullTri[i] = this._legalize(t + 2);
      hullTri[e] = t; // keep track of boundary triangles on the hull
      hullSize++;

      // walk forward through the hull, adding more triangles and flipping recursively
      let n = hullNext[e];
      while (
        ((q = hullNext[n]),
        orient(
          x,
          y,
          coords[2 * n],
          coords[2 * n + 1],
          coords[2 * q],
          coords[2 * q + 1]
        ))
      ) {
        t = this._addTriangle(n, i, q, hullTri[i], -1, hullTri[n]);
        hullTri[i] = this._legalize(t + 2);
        hullNext[n] = n; // mark as removed
        hullSize--;
        n = q;
      }

      // walk backward from the other side, adding more triangles and flipping
      if (e === start) {
        while (
          ((q = hullPrev[e]),
          orient(
            x,
            y,
            coords[2 * q],
            coords[2 * q + 1],
            coords[2 * e],
            coords[2 * e + 1]
          ))
        ) {
          t = this._addTriangle(q, i, e, -1, hullTri[e], hullTri[q]);
          this._legalize(t + 2);
          hullTri[q] = t;
          hullNext[e] = e; // mark as removed
          hullSize--;
          e = q;
        }
      }

      // update the hull indices
      this._hullStart = hullPrev[i] = e;
      hullNext[e] = hullPrev[n] = i;
      hullNext[i] = n;

      // save the two new edges in the hash table
      hullHash[this._hashKey(x, y)] = i;
      hullHash[this._hashKey(coords[2 * e], coords[2 * e + 1])] = e;
    }

    this.hull = new Uint32Array(hullSize);
    for (let i = 0, e = this._hullStart; i < hullSize; i++) {
      this.hull[i] = e;
      e = hullNext[e];
    }

    // trim typed triangle mesh arrays
    this.triangles = this._triangles.subarray(0, this.trianglesLen);
    this.halfedges = this._halfedges.subarray(0, this.trianglesLen);
  }

  _hashKey(x, y) {
    return (
      Math.floor(pseudoAngle(x - this._cx, y - this._cy) * this._hashSize) %
      this._hashSize
    );
  }

  _legalize(a) {
    const { _triangles: triangles, _halfedges: halfedges, coords } = this;

    let i = 0;
    let ar = 0;

    // recursion eliminated with a fixed-size stack
    while (true) {
      const b = halfedges[a];

      /* if the pair of triangles doesn't satisfy the Delaunay condition
       * (p1 is inside the circumcircle of [p0, pl, pr]), flip them,
       * then do the same check/flip recursively for the new pair of triangles
       *
       *           pl                    pl
       *          /||\                  /  \
       *       al/ || \bl            al/    \a
       *        /  ||  \              /      \
       *       /  a||b  \    flip    /___ar___\
       *     p0\   ||   /p1   =>   p0\---bl---/p1
       *        \  ||  /              \      /
       *       ar\ || /br             b\    /br
       *          \||/                  \  /
       *           pr                    pr
       */
      const a0 = a - (a % 3);
      ar = a0 + ((a + 2) % 3);

      if (b === -1) {
        // convex hull edge
        if (i === 0) break;
        a = EDGE_STACK[--i];
        continue;
      }

      const b0 = b - (b % 3);
      const al = a0 + ((a + 1) % 3);
      const bl = b0 + ((b + 2) % 3);

      const p0 = triangles[ar];
      const pr = triangles[a];
      const pl = triangles[al];
      const p1 = triangles[bl];

      const illegal = inCircle(
        coords[2 * p0],
        coords[2 * p0 + 1],
        coords[2 * pr],
        coords[2 * pr + 1],
        coords[2 * pl],
        coords[2 * pl + 1],
        coords[2 * p1],
        coords[2 * p1 + 1]
      );

      if (illegal) {
        triangles[a] = p1;
        triangles[b] = p0;

        const hbl = halfedges[bl];

        // edge swapped on the other side of the hull (rare); fix the halfedge reference
        if (hbl === -1) {
          let e = this._hullStart;
          do {
            if (this._hullTri[e] === bl) {
              this._hullTri[e] = a;
              break;
            }
            e = this._hullPrev[e];
          } while (e !== this._hullStart);
        }
        this._link(a, hbl);
        this._link(b, halfedges[ar]);
        this._link(ar, bl);

        const br = b0 + ((b + 1) % 3);

        // don't worry about hitting the cap: it can only happen on extremely degenerate input
        if (i < EDGE_STACK.length) {
          EDGE_STACK[i++] = br;
        }
      } else {
        if (i === 0) break;
        a = EDGE_STACK[--i];
      }
    }

    return ar;
  }

  _link(a, b) {
    this._halfedges[a] = b;
    if (b !== -1) this._halfedges[b] = a;
  }

  // add a new triangle given vertex indices and adjacent half-edge ids
  _addTriangle(i0, i1, i2, a, b, c) {
    const t = this.trianglesLen;

    this._triangles[t] = i0;
    this._triangles[t + 1] = i1;
    this._triangles[t + 2] = i2;

    this._link(t, a);
    this._link(t + 1, b);
    this._link(t + 2, c);

    this.trianglesLen += 3;

    return t;
  }
}

// monotonically increases with real angle, but doesn't need expensive trigonometry
function pseudoAngle(dx, dy) {
  const p = dx / (Math.abs(dx) + Math.abs(dy));
  return (dy > 0 ? 3 - p : 1 + p) / 4; // [0..1]
}

function dist(ax, ay, bx, by) {
  const dx = ax - bx;
  const dy = ay - by;
  return dx * dx + dy * dy;
}

// return 2d orientation sign if we're confident in it through J. Shewchuk's error bound check
function orientIfSure(px, py, rx, ry, qx, qy) {
  const l = (ry - py) * (qx - px);
  const r = (rx - px) * (qy - py);
  return Math.abs(l - r) >= 3.3306690738754716e-16 * Math.abs(l + r)
    ? l - r
    : 0;
}

// a more robust orientation test that's stable in a given triangle (to fix robustness issues)
function orient(rx, ry, qx, qy, px, py) {
  const sign =
    orientIfSure(px, py, rx, ry, qx, qy) ||
    orientIfSure(rx, ry, qx, qy, px, py) ||
    orientIfSure(qx, qy, px, py, rx, ry);
  return sign < 0;
}

function inCircle(ax, ay, bx, by, cx, cy, px, py) {
  const dx = ax - px;
  const dy = ay - py;
  const ex = bx - px;
  const ey = by - py;
  const fx = cx - px;
  const fy = cy - py;

  const ap = dx * dx + dy * dy;
  const bp = ex * ex + ey * ey;
  const cp = fx * fx + fy * fy;

  return (
    dx * (ey * cp - bp * fy) -
      dy * (ex * cp - bp * fx) +
      ap * (ex * fy - ey * fx) <
    0
  );
}

function circumradius(ax, ay, bx, by, cx, cy) {
  const dx = bx - ax;
  const dy = by - ay;
  const ex = cx - ax;
  const ey = cy - ay;

  const bl = dx * dx + dy * dy;
  const cl = ex * ex + ey * ey;
  const d = 0.5 / (dx * ey - dy * ex);

  const x = (ey * bl - dy * cl) * d;
  const y = (dx * cl - ex * bl) * d;

  return x * x + y * y;
}

function circumcenter(ax, ay, bx, by, cx, cy) {
  const dx = bx - ax;
  const dy = by - ay;
  const ex = cx - ax;
  const ey = cy - ay;

  const bl = dx * dx + dy * dy;
  const cl = ex * ex + ey * ey;
  const d = 0.5 / (dx * ey - dy * ex);

  const x = ax + (ey * bl - dy * cl) * d;
  const y = ay + (dx * cl - ex * bl) * d;

  return { x, y };
}

function quicksort(ids, dists, left, right) {
  if (right - left <= 20) {
    for (let i = left + 1; i <= right; i++) {
      const temp = ids[i];
      const tempDist = dists[temp];
      let j = i - 1;
      while (j >= left && dists[ids[j]] > tempDist) ids[j + 1] = ids[j--];
      ids[j + 1] = temp;
    }
  } else {
    const median = (left + right) >> 1;
    let i = left + 1;
    let j = right;
    swap(ids, median, i);
    if (dists[ids[left]] > dists[ids[right]]) swap(ids, left, right);
    if (dists[ids[i]] > dists[ids[right]]) swap(ids, i, right);
    if (dists[ids[left]] > dists[ids[i]]) swap(ids, left, i);

    const temp = ids[i];
    const tempDist = dists[temp];
    while (true) {
      do i++;
      while (dists[ids[i]] < tempDist);
      do j--;
      while (dists[ids[j]] > tempDist);
      if (j < i) break;
      swap(ids, i, j);
    }
    ids[left + 1] = ids[j];
    ids[j] = temp;

    if (right - i + 1 >= j - left) {
      quicksort(ids, dists, i, right);
      quicksort(ids, dists, left, j - 1);
    } else {
      quicksort(ids, dists, left, j - 1);
      quicksort(ids, dists, i, right);
    }
  }
}

function swap(arr, i, j) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

function defaultGetX(p) {
  return p[0];
}
function defaultGetY(p) {
  return p[1];
}

const epsilon$2 = 1e-6;

class Path$1 {
  constructor() {
    this._x0 = this._y0 = this._x1 = this._y1 = null; // start of current subpath // end of current subpath
    this._ = "";
  }
  moveTo(x, y) {
    this._ += `M${(this._x0 = this._x1 = +x)},${(this._y0 = this._y1 = +y)}`;
  }
  closePath() {
    if (this._x1 !== null) {
      (this._x1 = this._x0), (this._y1 = this._y0);
      this._ += "Z";
    }
  }
  lineTo(x, y) {
    this._ += `L${(this._x1 = +x)},${(this._y1 = +y)}`;
  }
  arc(x, y, r) {
    (x = +x), (y = +y), (r = +r);
    const x0 = x + r;
    const y0 = y;
    if (r < 0) throw new Error("negative radius");
    if (this._x1 === null) this._ += `M${x0},${y0}`;
    else if (
      Math.abs(this._x1 - x0) > epsilon$2 ||
      Math.abs(this._y1 - y0) > epsilon$2
    )
      this._ += "L" + x0 + "," + y0;
    if (!r) return;
    this._ += `A${r},${r},0,1,1,${
      x - r
    },${y}A${r},${r},0,1,1,${(this._x1 = x0)},${(this._y1 = y0)}`;
  }
  rect(x, y, w, h) {
    this._ += `M${(this._x0 = this._x1 = +x)},${(this._y0 = this._y1 = +y)}h${+w}v${+h}h${-w}Z`;
  }
  value() {
    return this._ || null;
  }
}

class Polygon {
  constructor() {
    this._ = [];
  }
  moveTo(x, y) {
    this._.push([x, y]);
  }
  closePath() {
    this._.push(this._[0].slice());
  }
  lineTo(x, y) {
    this._.push([x, y]);
  }
  value() {
    return this._.length ? this._ : null;
  }
}

class Voronoi {
  constructor(delaunay, [xmin, ymin, xmax, ymax] = [0, 0, 960, 500]) {
    if (
      !((xmax = +xmax) >= (xmin = +xmin)) ||
      !((ymax = +ymax) >= (ymin = +ymin))
    )
      throw new Error("invalid bounds");
    this.delaunay = delaunay;
    this._circumcenters = new Float64Array(delaunay.points.length * 2);
    this.vectors = new Float64Array(delaunay.points.length * 2);
    (this.xmax = xmax), (this.xmin = xmin);
    (this.ymax = ymax), (this.ymin = ymin);
    this._init();
  }
  update() {
    this.delaunay.update();
    this._init();
    return this;
  }
  _init() {
    const {
      delaunay: { points, hull, triangles },
      vectors,
    } = this;

    // Compute circumcenters.
    const circumcenters = (this.circumcenters = this._circumcenters.subarray(
      0,
      (triangles.length / 3) * 2
    ));
    for (let i = 0, j = 0, n = triangles.length, x, y; i < n; i += 3, j += 2) {
      const t1 = triangles[i] * 2;
      const t2 = triangles[i + 1] * 2;
      const t3 = triangles[i + 2] * 2;
      const x1 = points[t1];
      const y1 = points[t1 + 1];
      const x2 = points[t2];
      const y2 = points[t2 + 1];
      const x3 = points[t3];
      const y3 = points[t3 + 1];

      const dx = x2 - x1;
      const dy = y2 - y1;
      const ex = x3 - x1;
      const ey = y3 - y1;
      const bl = dx * dx + dy * dy;
      const cl = ex * ex + ey * ey;
      const ab = (dx * ey - dy * ex) * 2;

      if (!ab) {
        // degenerate case (collinear diagram)
        x = (x1 + x3) / 2 - 1e8 * ey;
        y = (y1 + y3) / 2 + 1e8 * ex;
      } else if (Math.abs(ab) < 1e-8) {
        // almost equal points (degenerate triangle)
        x = (x1 + x3) / 2;
        y = (y1 + y3) / 2;
      } else {
        const d = 1 / ab;
        x = x1 + (ey * bl - dy * cl) * d;
        y = y1 + (dx * cl - ex * bl) * d;
      }
      circumcenters[j] = x;
      circumcenters[j + 1] = y;
    }

    // Compute exterior cell rays.
    let h = hull[hull.length - 1];
    let p0,
      p1 = h * 4;
    let x0,
      x1 = points[2 * h];
    let y0,
      y1 = points[2 * h + 1];
    vectors.fill(0);
    for (let i = 0; i < hull.length; ++i) {
      h = hull[i];
      (p0 = p1), (x0 = x1), (y0 = y1);
      (p1 = h * 4), (x1 = points[2 * h]), (y1 = points[2 * h + 1]);
      vectors[p0 + 2] = vectors[p1] = y0 - y1;
      vectors[p0 + 3] = vectors[p1 + 1] = x1 - x0;
    }
  }
  render(context) {
    const buffer = context == null ? (context = new Path$1()) : undefined;
    const {
      delaunay: { halfedges, inedges, hull },
      circumcenters,
      vectors,
    } = this;
    if (hull.length <= 1) return null;
    for (let i = 0, n = halfedges.length; i < n; ++i) {
      const j = halfedges[i];
      if (j < i) continue;
      const ti = Math.floor(i / 3) * 2;
      const tj = Math.floor(j / 3) * 2;
      const xi = circumcenters[ti];
      const yi = circumcenters[ti + 1];
      const xj = circumcenters[tj];
      const yj = circumcenters[tj + 1];
      this._renderSegment(xi, yi, xj, yj, context);
    }
    let h0,
      h1 = hull[hull.length - 1];
    for (let i = 0; i < hull.length; ++i) {
      (h0 = h1), (h1 = hull[i]);
      const t = Math.floor(inedges[h1] / 3) * 2;
      const x = circumcenters[t];
      const y = circumcenters[t + 1];
      const v = h0 * 4;
      const p = this._project(x, y, vectors[v + 2], vectors[v + 3]);
      if (p) this._renderSegment(x, y, p[0], p[1], context);
    }
    return buffer && buffer.value();
  }
  renderBounds(context) {
    const buffer = context == null ? (context = new Path$1()) : undefined;
    context.rect(
      this.xmin,
      this.ymin,
      this.xmax - this.xmin,
      this.ymax - this.ymin
    );
    return buffer && buffer.value();
  }
  renderCell(i, context) {
    const buffer = context == null ? (context = new Path$1()) : undefined;
    const points = this._clip(i);
    if (points === null || !points.length) return;
    context.moveTo(points[0], points[1]);
    let n = points.length;
    while (points[0] === points[n - 2] && points[1] === points[n - 1] && n > 1)
      n -= 2;
    for (let i = 2; i < n; i += 2) {
      if (points[i] !== points[i - 2] || points[i + 1] !== points[i - 1])
        context.lineTo(points[i], points[i + 1]);
    }
    context.closePath();
    return buffer && buffer.value();
  }
  *cellPolygons() {
    const {
      delaunay: { points },
    } = this;
    for (let i = 0, n = points.length / 2; i < n; ++i) {
      const cell = this.cellPolygon(i);
      if (cell) (cell.index = i), yield cell;
    }
  }
  cellPolygon(i) {
    const polygon = new Polygon();
    this.renderCell(i, polygon);
    return polygon.value();
  }
  _renderSegment(x0, y0, x1, y1, context) {
    let S;
    const c0 = this._regioncode(x0, y0);
    const c1 = this._regioncode(x1, y1);
    if (c0 === 0 && c1 === 0) {
      context.moveTo(x0, y0);
      context.lineTo(x1, y1);
    } else if ((S = this._clipSegment(x0, y0, x1, y1, c0, c1))) {
      context.moveTo(S[0], S[1]);
      context.lineTo(S[2], S[3]);
    }
  }
  contains(i, x, y) {
    if (((x = +x), x !== x) || ((y = +y), y !== y)) return false;
    return this.delaunay._step(i, x, y) === i;
  }
  *neighbors(i) {
    const ci = this._clip(i);
    if (ci)
      for (const j of this.delaunay.neighbors(i)) {
        const cj = this._clip(j);
        // find the common edge
        if (cj)
          loop: for (let ai = 0, li = ci.length; ai < li; ai += 2) {
            for (let aj = 0, lj = cj.length; aj < lj; aj += 2) {
              if (
                ci[ai] == cj[aj] &&
                ci[ai + 1] == cj[aj + 1] &&
                ci[(ai + 2) % li] == cj[(aj + lj - 2) % lj] &&
                ci[(ai + 3) % li] == cj[(aj + lj - 1) % lj]
              ) {
                yield j;
                break loop;
              }
            }
          }
      }
  }
  _cell(i) {
    const {
      circumcenters,
      delaunay: { inedges, halfedges, triangles },
    } = this;
    const e0 = inedges[i];
    if (e0 === -1) return null; // coincident point
    const points = [];
    let e = e0;
    do {
      const t = Math.floor(e / 3);
      points.push(circumcenters[t * 2], circumcenters[t * 2 + 1]);
      e = e % 3 === 2 ? e - 2 : e + 1;
      if (triangles[e] !== i) break; // bad triangulation
      e = halfedges[e];
    } while (e !== e0 && e !== -1);
    return points;
  }
  _clip(i) {
    // degenerate case (1 valid point: return the box)
    if (i === 0 && this.delaunay.hull.length === 1) {
      return [
        this.xmax,
        this.ymin,
        this.xmax,
        this.ymax,
        this.xmin,
        this.ymax,
        this.xmin,
        this.ymin,
      ];
    }
    const points = this._cell(i);
    if (points === null) return null;
    const { vectors: V } = this;
    const v = i * 4;
    return V[v] || V[v + 1]
      ? this._clipInfinite(i, points, V[v], V[v + 1], V[v + 2], V[v + 3])
      : this._clipFinite(i, points);
  }
  _clipFinite(i, points) {
    const n = points.length;
    let P = null;
    let x0,
      y0,
      x1 = points[n - 2],
      y1 = points[n - 1];
    let c0,
      c1 = this._regioncode(x1, y1);
    let e0, e1;
    for (let j = 0; j < n; j += 2) {
      (x0 = x1), (y0 = y1), (x1 = points[j]), (y1 = points[j + 1]);
      (c0 = c1), (c1 = this._regioncode(x1, y1));
      if (c0 === 0 && c1 === 0) {
        (e0 = e1), (e1 = 0);
        if (P) P.push(x1, y1);
        else P = [x1, y1];
      } else {
        let S, sx0, sy0, sx1, sy1;
        if (c0 === 0) {
          if ((S = this._clipSegment(x0, y0, x1, y1, c0, c1)) === null)
            continue;
          [sx0, sy0, sx1, sy1] = S;
        } else {
          if ((S = this._clipSegment(x1, y1, x0, y0, c1, c0)) === null)
            continue;
          [sx1, sy1, sx0, sy0] = S;
          (e0 = e1), (e1 = this._edgecode(sx0, sy0));
          if (e0 && e1) this._edge(i, e0, e1, P, P.length);
          if (P) P.push(sx0, sy0);
          else P = [sx0, sy0];
        }
        (e0 = e1), (e1 = this._edgecode(sx1, sy1));
        if (e0 && e1) this._edge(i, e0, e1, P, P.length);
        if (P) P.push(sx1, sy1);
        else P = [sx1, sy1];
      }
    }
    if (P) {
      (e0 = e1), (e1 = this._edgecode(P[0], P[1]));
      if (e0 && e1) this._edge(i, e0, e1, P, P.length);
    } else if (
      this.contains(i, (this.xmin + this.xmax) / 2, (this.ymin + this.ymax) / 2)
    ) {
      return [
        this.xmax,
        this.ymin,
        this.xmax,
        this.ymax,
        this.xmin,
        this.ymax,
        this.xmin,
        this.ymin,
      ];
    }
    return P;
  }
  _clipSegment(x0, y0, x1, y1, c0, c1) {
    while (true) {
      if (c0 === 0 && c1 === 0) return [x0, y0, x1, y1];
      if (c0 & c1) return null;
      let x,
        y,
        c = c0 || c1;
      if (c & 0b1000)
        (x = x0 + ((x1 - x0) * (this.ymax - y0)) / (y1 - y0)), (y = this.ymax);
      else if (c & 0b0100)
        (x = x0 + ((x1 - x0) * (this.ymin - y0)) / (y1 - y0)), (y = this.ymin);
      else if (c & 0b0010)
        (y = y0 + ((y1 - y0) * (this.xmax - x0)) / (x1 - x0)), (x = this.xmax);
      else
        (y = y0 + ((y1 - y0) * (this.xmin - x0)) / (x1 - x0)), (x = this.xmin);
      if (c0) (x0 = x), (y0 = y), (c0 = this._regioncode(x0, y0));
      else (x1 = x), (y1 = y), (c1 = this._regioncode(x1, y1));
    }
  }
  _clipInfinite(i, points, vx0, vy0, vxn, vyn) {
    let P = Array.from(points),
      p;
    if ((p = this._project(P[0], P[1], vx0, vy0))) P.unshift(p[0], p[1]);
    if ((p = this._project(P[P.length - 2], P[P.length - 1], vxn, vyn)))
      P.push(p[0], p[1]);
    if ((P = this._clipFinite(i, P))) {
      for (
        let j = 0, n = P.length, c0, c1 = this._edgecode(P[n - 2], P[n - 1]);
        j < n;
        j += 2
      ) {
        (c0 = c1), (c1 = this._edgecode(P[j], P[j + 1]));
        if (c0 && c1) (j = this._edge(i, c0, c1, P, j)), (n = P.length);
      }
    } else if (
      this.contains(i, (this.xmin + this.xmax) / 2, (this.ymin + this.ymax) / 2)
    ) {
      P = [
        this.xmin,
        this.ymin,
        this.xmax,
        this.ymin,
        this.xmax,
        this.ymax,
        this.xmin,
        this.ymax,
      ];
    }
    return P;
  }
  _edge(i, e0, e1, P, j) {
    while (e0 !== e1) {
      let x, y;
      switch (e0) {
        case 0b0101:
          e0 = 0b0100;
          continue; // top-left
        case 0b0100:
          (e0 = 0b0110), (x = this.xmax), (y = this.ymin);
          break; // top
        case 0b0110:
          e0 = 0b0010;
          continue; // top-right
        case 0b0010:
          (e0 = 0b1010), (x = this.xmax), (y = this.ymax);
          break; // right
        case 0b1010:
          e0 = 0b1000;
          continue; // bottom-right
        case 0b1000:
          (e0 = 0b1001), (x = this.xmin), (y = this.ymax);
          break; // bottom
        case 0b1001:
          e0 = 0b0001;
          continue; // bottom-left
        case 0b0001:
          (e0 = 0b0101), (x = this.xmin), (y = this.ymin);
          break; // left
      }
      if ((P[j] !== x || P[j + 1] !== y) && this.contains(i, x, y)) {
        P.splice(j, 0, x, y), (j += 2);
      }
    }
    if (P.length > 4) {
      for (let i = 0; i < P.length; i += 2) {
        const j = (i + 2) % P.length,
          k = (i + 4) % P.length;
        if (
          (P[i] === P[j] && P[j] === P[k]) ||
          (P[i + 1] === P[j + 1] && P[j + 1] === P[k + 1])
        )
          P.splice(j, 2), (i -= 2);
      }
    }
    return j;
  }
  _project(x0, y0, vx, vy) {
    let t = Infinity,
      c,
      x,
      y;
    if (vy < 0) {
      // top
      if (y0 <= this.ymin) return null;
      if ((c = (this.ymin - y0) / vy) < t)
        (y = this.ymin), (x = x0 + (t = c) * vx);
    } else if (vy > 0) {
      // bottom
      if (y0 >= this.ymax) return null;
      if ((c = (this.ymax - y0) / vy) < t)
        (y = this.ymax), (x = x0 + (t = c) * vx);
    }
    if (vx > 0) {
      // right
      if (x0 >= this.xmax) return null;
      if ((c = (this.xmax - x0) / vx) < t)
        (x = this.xmax), (y = y0 + (t = c) * vy);
    } else if (vx < 0) {
      // left
      if (x0 <= this.xmin) return null;
      if ((c = (this.xmin - x0) / vx) < t)
        (x = this.xmin), (y = y0 + (t = c) * vy);
    }
    return [x, y];
  }
  _edgecode(x, y) {
    return (
      (x === this.xmin ? 0b0001 : x === this.xmax ? 0b0010 : 0b0000) |
      (y === this.ymin ? 0b0100 : y === this.ymax ? 0b1000 : 0b0000)
    );
  }
  _regioncode(x, y) {
    return (
      (x < this.xmin ? 0b0001 : x > this.xmax ? 0b0010 : 0b0000) |
      (y < this.ymin ? 0b0100 : y > this.ymax ? 0b1000 : 0b0000)
    );
  }
}

const tau$1 = 2 * Math.PI,
  pow = Math.pow;

function pointX(p) {
  return p[0];
}

function pointY(p) {
  return p[1];
}

// A triangulation is collinear if all its triangles have a non-null area
function collinear(d) {
  const { triangles, coords } = d;
  for (let i = 0; i < triangles.length; i += 3) {
    const a = 2 * triangles[i],
      b = 2 * triangles[i + 1],
      c = 2 * triangles[i + 2],
      cross =
        (coords[c] - coords[a]) * (coords[b + 1] - coords[a + 1]) -
        (coords[b] - coords[a]) * (coords[c + 1] - coords[a + 1]);
    if (cross > 1e-10) return false;
  }
  return true;
}

function jitter(x, y, r) {
  return [x + Math.sin(x + y) * r, y + Math.cos(x - y) * r];
}

class Delaunay {
  static from(points, fx = pointX, fy = pointY, that) {
    return new Delaunay(
      "length" in points
        ? flatArray(points, fx, fy, that)
        : Float64Array.from(flatIterable(points, fx, fy, that))
    );
  }
  constructor(points) {
    this._delaunator = new Delaunator(points);
    this.inedges = new Int32Array(points.length / 2);
    this._hullIndex = new Int32Array(points.length / 2);
    this.points = this._delaunator.coords;
    this._init();
  }
  update() {
    this._delaunator.update();
    this._init();
    return this;
  }
  _init() {
    const d = this._delaunator,
      points = this.points;

    // check for collinear
    if (d.hull && d.hull.length > 2 && collinear(d)) {
      this.collinear = Int32Array.from(
        { length: points.length / 2 },
        (_, i) => i
      ).sort(
        (i, j) =>
          points[2 * i] - points[2 * j] || points[2 * i + 1] - points[2 * j + 1]
      ); // for exact neighbors
      const e = this.collinear[0],
        f = this.collinear[this.collinear.length - 1],
        bounds = [
          points[2 * e],
          points[2 * e + 1],
          points[2 * f],
          points[2 * f + 1],
        ],
        r = 1e-8 * Math.hypot(bounds[3] - bounds[1], bounds[2] - bounds[0]);
      for (let i = 0, n = points.length / 2; i < n; ++i) {
        const p = jitter(points[2 * i], points[2 * i + 1], r);
        points[2 * i] = p[0];
        points[2 * i + 1] = p[1];
      }
      this._delaunator = new Delaunator(points);
    } else {
      delete this.collinear;
    }

    const halfedges = (this.halfedges = this._delaunator.halfedges);
    const hull = (this.hull = this._delaunator.hull);
    const triangles = (this.triangles = this._delaunator.triangles);
    const inedges = this.inedges.fill(-1);
    const hullIndex = this._hullIndex.fill(-1);

    // Compute an index from each point to an (arbitrary) incoming halfedge
    // Used to give the first neighbor of each point; for this reason,
    // on the hull we give priority to exterior halfedges
    for (let e = 0, n = halfedges.length; e < n; ++e) {
      const p = triangles[e % 3 === 2 ? e - 2 : e + 1];
      if (halfedges[e] === -1 || inedges[p] === -1) inedges[p] = e;
    }
    for (let i = 0, n = hull.length; i < n; ++i) {
      hullIndex[hull[i]] = i;
    }

    // degenerate case: 1 or 2 (distinct) points
    if (hull.length <= 2 && hull.length > 0) {
      this.triangles = new Int32Array(3).fill(-1);
      this.halfedges = new Int32Array(3).fill(-1);
      this.triangles[0] = hull[0];
      this.triangles[1] = hull[1];
      this.triangles[2] = hull[1];
      inedges[hull[0]] = 1;
      if (hull.length === 2) inedges[hull[1]] = 0;
    }
  }
  voronoi(bounds) {
    return new Voronoi(this, bounds);
  }
  *neighbors(i) {
    const { inedges, hull, _hullIndex, halfedges, triangles, collinear } = this;

    // degenerate case with several collinear points
    if (collinear) {
      const l = collinear.indexOf(i);
      if (l > 0) yield collinear[l - 1];
      if (l < collinear.length - 1) yield collinear[l + 1];
      return;
    }

    const e0 = inedges[i];
    if (e0 === -1) return; // coincident point
    let e = e0,
      p0 = -1;
    do {
      yield (p0 = triangles[e]);
      e = e % 3 === 2 ? e - 2 : e + 1;
      if (triangles[e] !== i) return; // bad triangulation
      e = halfedges[e];
      if (e === -1) {
        const p = hull[(_hullIndex[i] + 1) % hull.length];
        if (p !== p0) yield p;
        return;
      }
    } while (e !== e0);
  }
  find(x, y, i = 0) {
    if (((x = +x), x !== x) || ((y = +y), y !== y)) return -1;
    const i0 = i;
    let c;
    while ((c = this._step(i, x, y)) >= 0 && c !== i && c !== i0) i = c;
    return c;
  }
  _step(i, x, y) {
    const { inedges, hull, _hullIndex, halfedges, triangles, points } = this;
    if (inedges[i] === -1 || !points.length)
      return (i + 1) % (points.length >> 1);
    let c = i;
    let dc = pow(x - points[i * 2], 2) + pow(y - points[i * 2 + 1], 2);
    const e0 = inedges[i];
    let e = e0;
    do {
      let t = triangles[e];
      const dt = pow(x - points[t * 2], 2) + pow(y - points[t * 2 + 1], 2);
      if (dt < dc) (dc = dt), (c = t);
      e = e % 3 === 2 ? e - 2 : e + 1;
      if (triangles[e] !== i) break; // bad triangulation
      e = halfedges[e];
      if (e === -1) {
        e = hull[(_hullIndex[i] + 1) % hull.length];
        if (e !== t) {
          if (pow(x - points[e * 2], 2) + pow(y - points[e * 2 + 1], 2) < dc)
            return e;
        }
        break;
      }
    } while (e !== e0);
    return c;
  }
  render(context) {
    const buffer = context == null ? (context = new Path$1()) : undefined;
    const { points, halfedges, triangles } = this;
    for (let i = 0, n = halfedges.length; i < n; ++i) {
      const j = halfedges[i];
      if (j < i) continue;
      const ti = triangles[i] * 2;
      const tj = triangles[j] * 2;
      context.moveTo(points[ti], points[ti + 1]);
      context.lineTo(points[tj], points[tj + 1]);
    }
    this.renderHull(context);
    return buffer && buffer.value();
  }
  renderPoints(context, r = 2) {
    const buffer = context == null ? (context = new Path$1()) : undefined;
    const { points } = this;
    for (let i = 0, n = points.length; i < n; i += 2) {
      const x = points[i],
        y = points[i + 1];
      context.moveTo(x + r, y);
      context.arc(x, y, r, 0, tau$1);
    }
    return buffer && buffer.value();
  }
  renderHull(context) {
    const buffer = context == null ? (context = new Path$1()) : undefined;
    const { hull, points } = this;
    const h = hull[0] * 2,
      n = hull.length;
    context.moveTo(points[h], points[h + 1]);
    for (let i = 1; i < n; ++i) {
      const h = 2 * hull[i];
      context.lineTo(points[h], points[h + 1]);
    }
    context.closePath();
    return buffer && buffer.value();
  }
  hullPolygon() {
    const polygon = new Polygon();
    this.renderHull(polygon);
    return polygon.value();
  }
  renderTriangle(i, context) {
    const buffer = context == null ? (context = new Path$1()) : undefined;
    const { points, triangles } = this;
    const t0 = triangles[(i *= 3)] * 2;
    const t1 = triangles[i + 1] * 2;
    const t2 = triangles[i + 2] * 2;
    context.moveTo(points[t0], points[t0 + 1]);
    context.lineTo(points[t1], points[t1 + 1]);
    context.lineTo(points[t2], points[t2 + 1]);
    context.closePath();
    return buffer && buffer.value();
  }
  *trianglePolygons() {
    const { triangles } = this;
    for (let i = 0, n = triangles.length / 3; i < n; ++i) {
      yield this.trianglePolygon(i);
    }
  }
  trianglePolygon(i) {
    const polygon = new Polygon();
    this.renderTriangle(i, polygon);
    return polygon.value();
  }
}

function flatArray(points, fx, fy, that) {
  const n = points.length;
  const array = new Float64Array(n * 2);
  for (let i = 0; i < n; ++i) {
    const p = points[i];
    array[i * 2] = fx.call(that, p, i, points);
    array[i * 2 + 1] = fy.call(that, p, i, points);
  }
  return array;
}

function* flatIterable(points, fx, fy, that) {
  let i = 0;
  for (const p of points) {
    yield fx.call(that, p, i, points);
    yield fy.call(that, p, i, points);
    ++i;
  }
}

var shouldUpdate_1 = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;
  exports.default = void 0;

  var _inheritsLoose2 = interopRequireDefault(inheritsLoose);

  var _setDisplayName = interopRequireDefault(setDisplayName_1);

  var _wrapDisplayName = interopRequireDefault(wrapDisplayName_1);

  var shouldUpdate = function shouldUpdate(test) {
    return function (BaseComponent) {
      var factory = (0, React.createFactory)(BaseComponent);

      var ShouldUpdate =
        /*#__PURE__*/
        (function (_Component) {
          (0, _inheritsLoose2.default)(ShouldUpdate, _Component);

          function ShouldUpdate() {
            return _Component.apply(this, arguments) || this;
          }

          var _proto = ShouldUpdate.prototype;

          _proto.shouldComponentUpdate = function shouldComponentUpdate(
            nextProps
          ) {
            return test(this.props, nextProps);
          };

          _proto.render = function render() {
            return factory(this.props);
          };

          return ShouldUpdate;
        })(React.Component);

      if (process.env.NODE_ENV !== "production") {
        return (0, _setDisplayName.default)(
          (0, _wrapDisplayName.default)(BaseComponent, "shouldUpdate")
        )(ShouldUpdate);
      }

      return ShouldUpdate;
    };
  };

  var _default = shouldUpdate;
  exports.default = _default;
});

var pure_1 = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;
  exports.default = void 0;

  var _shouldUpdate = interopRequireDefault(shouldUpdate_1);

  var _shallowEqual = interopRequireDefault(shallowEqual$1);

  var _setDisplayName = interopRequireDefault(setDisplayName_1);

  var _wrapDisplayName = interopRequireDefault(wrapDisplayName_1);

  var pure = function pure(BaseComponent) {
    var hoc = (0, _shouldUpdate.default)(function (props, nextProps) {
      return !(0, _shallowEqual.default)(props, nextProps);
    });

    if (process.env.NODE_ENV !== "production") {
      return (0, _setDisplayName.default)(
        (0, _wrapDisplayName.default)(BaseComponent, "pure")
      )(hoc(BaseComponent));
    }

    return hoc(BaseComponent);
  };

  var _default = pure;
  exports.default = _default;
});

var pure = /*@__PURE__*/ getDefaultExportFromCjs(pure_1);

var VoronoiPropTypes = {
  data: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,
      x: propTypes.number.isRequired,
      y: propTypes.number.isRequired,
    })
  ).isRequired,
  xDomain: propTypes.arrayOf(propTypes.number).isRequired,
  yDomain: propTypes.arrayOf(propTypes.number).isRequired,
  layers: propTypes.arrayOf(
    propTypes.oneOfType([
      propTypes.oneOf(["links", "cells", "points", "bounds"]),
      propTypes.func,
    ])
  ).isRequired,
  enableLinks: propTypes.bool.isRequired,
  linkLineWidth: propTypes.number.isRequired,
  linkLineColor: propTypes.string.isRequired,
  enableCells: propTypes.bool.isRequired,
  cellLineWidth: propTypes.number.isRequired,
  cellLineColor: propTypes.string.isRequired,
  enablePoints: propTypes.bool.isRequired,
  pointSize: propTypes.number.isRequired,
  pointColor: propTypes.string.isRequired,
  delaunay: propTypes.object.isRequired,
  voronoi: propTypes.object.isRequired,
};
var VoronoiDefaultProps = {
  xDomain: [0, 1],
  yDomain: [0, 1],
  layers: ["links", "cells", "points", "bounds"],
  enableLinks: false,
  linkLineWidth: 1,
  linkLineColor: "#bbb",
  enableCells: true,
  cellLineWidth: 2,
  cellLineColor: "#000",
  enablePoints: true,
  pointSize: 4,
  pointColor: "#666",
};

var enhance = function (Component) {
  return compose(
    defaultProps(VoronoiDefaultProps),
    withTheme(),
    withDimensions(),
    withPropsOnChange(["xDomain", "yDomain", "width", "height"], function (
      _ref
    ) {
      var xDomain = _ref.xDomain,
        yDomain = _ref.yDomain,
        width = _ref.width,
        height = _ref.height;
      return {
        xScale: linear$1().domain(xDomain).range([0, width]),
        yScale: linear$1().domain(yDomain).range([0, height]),
      };
    }),
    withPropsOnChange(["data", "xScale", "yScale"], function (_ref2) {
      var data = _ref2.data,
        xScale = _ref2.xScale,
        yScale = _ref2.yScale;
      return {
        scaledPoints: data.map(function (d) {
          return {
            data: d,
            x: xScale(d.x),
            y: yScale(d.y),
          };
        }),
      };
    }),
    withPropsOnChange(["scaledPoints", "width", "height"], function (_ref3) {
      var scaledPoints = _ref3.scaledPoints,
        width = _ref3.width,
        height = _ref3.height;
      var delaunay = Delaunay.from(
        scaledPoints.map(function (p) {
          return [p.x, p.y];
        })
      );
      var voronoi = delaunay.voronoi([0, 0, width, height]);
      return {
        delaunay: delaunay,
        voronoi: voronoi,
      };
    }),
    pure
  )(Component);
};

var Voronoi$1 = function Voronoi(_ref) {
  var delaunay = _ref.delaunay,
    voronoi = _ref.voronoi,
    data = _ref.data,
    layers = _ref.layers,
    margin = _ref.margin,
    width = _ref.width,
    height = _ref.height,
    outerWidth = _ref.outerWidth,
    outerHeight = _ref.outerHeight,
    enableLinks = _ref.enableLinks,
    linkLineWidth = _ref.linkLineWidth,
    linkLineColor = _ref.linkLineColor,
    enableCells = _ref.enableCells,
    cellLineWidth = _ref.cellLineWidth,
    cellLineColor = _ref.cellLineColor,
    enablePoints = _ref.enablePoints,
    pointSize = _ref.pointSize,
    pointColor = _ref.pointColor,
    theme = _ref.theme;
  var context = {
    width: width,
    height: height,
    data: data,
    delaunay: delaunay,
    voronoi: voronoi,
  };
  var layerById = {
    bounds: React.createElement("path", {
      key: "bounds",
      fill: "none",
      stroke: cellLineColor,
      strokeWidth: cellLineWidth,
      d: voronoi.renderBounds(),
    }),
  };
  if (enableLinks === true) {
    layerById.links = React.createElement("path", {
      key: "links",
      stroke: linkLineColor,
      strokeWidth: linkLineWidth,
      fill: "none",
      d: delaunay.render(),
    });
  }
  if (enableCells === true) {
    layerById.cells = React.createElement("path", {
      key: "cells",
      d: voronoi.render(),
      fill: "none",
      stroke: cellLineColor,
      strokeWidth: cellLineWidth,
    });
  }
  if (enablePoints === true) {
    layerById.points = React.createElement("path", {
      key: "points",
      stroke: "none",
      fill: pointColor,
      d: delaunay.renderPoints(undefined, pointSize / 2),
    });
  }
  return React.createElement(
    Container,
    {
      isInteractive: false,
      theme: theme,
      animate: false,
    },
    function () {
      return React.createElement(
        SvgWrapper,
        {
          width: outerWidth,
          height: outerHeight,
          margin: margin,
          theme: theme,
        },
        layers.map(function (layer, i) {
          if (typeof layer === "function") {
            return React.createElement(
              Fragment$1,
              {
                key: i,
              },
              layer(context)
            );
          }
          return layerById[layer];
        })
      );
    }
  );
};
Voronoi$1.propTypes = VoronoiPropTypes;
var Voronoi$1$1 = enhance(Voronoi$1);

var getAccessor = function getAccessor(directive) {
  return typeof directive === "function"
    ? directive
    : function (d) {
        return d[directive];
      };
};
var computeMeshPoints = function computeMeshPoints(_ref) {
  var points = _ref.points,
    _ref$x = _ref.x,
    x = _ref$x === void 0 ? "x" : _ref$x,
    _ref$y = _ref.y,
    y = _ref$y === void 0 ? "y" : _ref$y;
  var getX = getAccessor(x);
  var getY = getAccessor(y);
  return points.map(function (p) {
    return [getX(p), getY(p)];
  });
};
var computeMesh = function computeMesh(_ref2) {
  var points = _ref2.points,
    width = _ref2.width,
    height = _ref2.height,
    debug = _ref2.debug;
  var delaunay = Delaunay.from(points);
  var voronoi =
    debug === true ? delaunay.voronoi([0, 0, width, height]) : undefined;
  return {
    delaunay: delaunay,
    voronoi: voronoi,
  };
};

var useVoronoiMesh = function useVoronoiMesh(_ref) {
  var points = _ref.points,
    x = _ref.x,
    y = _ref.y,
    width = _ref.width,
    height = _ref.height,
    debug = _ref.debug;
  var points2d = useMemo(
    function () {
      return computeMeshPoints({
        points: points,
        x: x,
        y: y,
      });
    },
    [points, x, y]
  );
  return useMemo(
    function () {
      return computeMesh({
        points: points2d,
        width: width,
        height: height,
        debug: debug,
      });
    },
    [points2d, width, height, debug]
  );
};

function _slicedToArray$5(arr, i) {
  return (
    _arrayWithHoles$5(arr) ||
    _iterableToArrayLimit$5(arr, i) ||
    _nonIterableRest$5()
  );
}
function _nonIterableRest$5() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
function _iterableToArrayLimit$5(arr, i) {
  if (
    !(
      Symbol.iterator in Object(arr) ||
      Object.prototype.toString.call(arr) === "[object Arguments]"
    )
  ) {
    return;
  }
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;
  try {
    for (
      var _i = arr[Symbol.iterator](), _s;
      !(_n = (_s = _i.next()).done);
      _n = true
    ) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles$5(arr) {
  if (Array.isArray(arr)) return arr;
}
var Mesh = function Mesh(_ref) {
  var nodes = _ref.nodes,
    width = _ref.width,
    height = _ref.height,
    x = _ref.x,
    y = _ref.y,
    debug = _ref.debug,
    onMouseEnter = _ref.onMouseEnter,
    onMouseMove = _ref.onMouseMove,
    onMouseLeave = _ref.onMouseLeave,
    onClick = _ref.onClick;
  var elementRef = useRef(null);
  var _useState = useState(null),
    _useState2 = _slicedToArray$5(_useState, 2),
    currentIndex = _useState2[0],
    setCurrentIndex = _useState2[1];
  var _useVoronoiMesh = useVoronoiMesh({
      points: nodes,
      x: x,
      y: y,
      width: width,
      height: height,
      debug: debug,
    }),
    delaunay = _useVoronoiMesh.delaunay,
    voronoi = _useVoronoiMesh.voronoi;
  var voronoiPath = useMemo(function () {
    return debug ? voronoi.render() : undefined;
  });
  var getIndexAndNodeFromEvent = useCallback(
    function (event) {
      var _getRelativeCursor = getRelativeCursor(elementRef.current, event),
        _getRelativeCursor2 = _slicedToArray$5(_getRelativeCursor, 2),
        x = _getRelativeCursor2[0],
        y = _getRelativeCursor2[1];
      var index = delaunay.find(x, y);
      return [index, index !== undefined ? nodes[index] : null];
    },
    [delaunay]
  );
  var handleMouseEnter = useCallback(
    function (event) {
      var _getIndexAndNodeFromE = getIndexAndNodeFromEvent(event),
        _getIndexAndNodeFromE2 = _slicedToArray$5(_getIndexAndNodeFromE, 2),
        index = _getIndexAndNodeFromE2[0],
        node = _getIndexAndNodeFromE2[1];
      if (currentIndex !== index) setCurrentIndex(index);
      node && onMouseEnter && onMouseEnter(node, event);
    },
    [getIndexAndNodeFromEvent, setCurrentIndex]
  );
  var handleMouseMove = useCallback(
    function (event) {
      var _getIndexAndNodeFromE3 = getIndexAndNodeFromEvent(event),
        _getIndexAndNodeFromE4 = _slicedToArray$5(_getIndexAndNodeFromE3, 2),
        index = _getIndexAndNodeFromE4[0],
        node = _getIndexAndNodeFromE4[1];
      if (currentIndex !== index) setCurrentIndex(index);
      node && onMouseMove && onMouseMove(node, event);
    },
    [getIndexAndNodeFromEvent, setCurrentIndex]
  );
  var handleMouseLeave = useCallback(
    function (event) {
      setCurrentIndex(null);
      if (onMouseLeave) {
        var previousNode;
        if (currentIndex !== undefined && currentIndex !== null) {
          previousNode = nodes[currentIndex];
        }
        previousNode && onMouseLeave(previousNode, event);
      }
    },
    [setCurrentIndex, currentIndex, nodes]
  );
  var handleClick = useCallback(
    function (event) {
      var _getIndexAndNodeFromE5 = getIndexAndNodeFromEvent(event),
        _getIndexAndNodeFromE6 = _slicedToArray$5(_getIndexAndNodeFromE5, 2),
        index = _getIndexAndNodeFromE6[0],
        node = _getIndexAndNodeFromE6[1];
      if (currentIndex !== index) setCurrentIndex(index);
      onClick && onClick(node, event);
    },
    [getIndexAndNodeFromEvent, setCurrentIndex]
  );
  return React.createElement(
    "g",
    {
      ref: elementRef,
    },
    debug &&
      React.createElement("path", {
        d: voronoiPath,
        stroke: "red",
        strokeWidth: 1,
        opacity: 0.75,
      }),
    currentIndex !== null &&
      debug &&
      React.createElement("path", {
        fill: "red",
        opacity: 0.35,
        d: voronoi.renderCell(currentIndex),
      }),
    React.createElement("rect", {
      width: width,
      height: height,
      fill: "red",
      opacity: 0,
      style: {
        cursor: "auto",
      },
      onMouseEnter: handleMouseEnter,
      onMouseMove: handleMouseMove,
      onMouseLeave: handleMouseLeave,
      onClick: handleClick,
    })
  );
};
Mesh.propTypes = {
  width: propTypes.number.isRequired,
  height: propTypes.number.isRequired,
  nodes: propTypes.array.isRequired,
  x: propTypes.oneOfType([propTypes.string, propTypes.number, propTypes.func])
    .isRequired,
  y: propTypes.oneOfType([propTypes.string, propTypes.number, propTypes.func])
    .isRequired,
  onMouseEnter: propTypes.func,
  onMouseMove: propTypes.func,
  onMouseLeave: propTypes.func,
  onClick: propTypes.func,
  debug: propTypes.bool.isRequired,
};
Mesh.defaultProps = {
  x: "x",
  y: "y",
  debug: false,
};

var renderVoronoiToCanvas = function renderVoronoiToCanvas(ctx, voronoi) {
  ctx.save();
  ctx.globalAlpha = 0.75;
  ctx.beginPath();
  voronoi.render(ctx);
  ctx.strokeStyle = "red";
  ctx.lineWidth = 1;
  ctx.stroke();
  ctx.restore();
};
var renderVoronoiCellToCanvas = function renderVoronoiCellToCanvas(
  ctx,
  voronoi,
  index
) {
  ctx.save();
  ctx.globalAlpha = 0.35;
  ctx.beginPath();
  voronoi.renderCell(index, ctx);
  ctx.fillStyle = "red";
  ctx.fill();
  ctx.restore();
};

var LinePointTooltip = function LinePointTooltip(_ref) {
  var point = _ref.point;
  return React.createElement(BasicTooltip, {
    id: React.createElement(
      "span",
      null,
      "x: ",
      React.createElement("strong", null, point.data.xFormatted),
      ", y:",
      " ",
      React.createElement("strong", null, point.data.yFormatted)
    ),
    enableChip: true,
    color: point.serieColor,
  });
};
LinePointTooltip.propTypes = {
  point: propTypes.object.isRequired,
};
var PointTooltip = memo(LinePointTooltip);

var Chip$1 = function Chip(_ref) {
  var color = _ref.color;
  return React.createElement("span", {
    style: {
      display: "block",
      width: "12px",
      height: "12px",
      background: color,
    },
  });
};
Chip$1.propTypes = {
  color: propTypes.string.isRequired,
};
var SliceTooltip = function SliceTooltip(_ref2) {
  var slice = _ref2.slice,
    axis = _ref2.axis;
  var otherAxis = axis === "x" ? "y" : "x";
  return React.createElement(TableTooltip, {
    rows: slice.points.map(function (point) {
      return [
        React.createElement(Chip$1, {
          key: "chip",
          color: point.serieColor,
        }),
        point.serieId,
        React.createElement(
          "strong",
          {
            key: "value",
          },
          point.data["".concat(otherAxis, "Formatted")]
        ),
      ];
    }),
  });
};
SliceTooltip.propTypes = {
  slice: propTypes.object.isRequired,
  axis: propTypes.oneOf(["x", "y"]).isRequired,
};
var SliceTooltip$1 = memo(SliceTooltip);

function _objectSpread$b(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(Object(source));
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(
        Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        })
      );
    }
    ownKeys.forEach(function (key) {
      _defineProperty$b(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$b(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
var commonPropTypes = {
  data: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,
      data: propTypes.arrayOf(
        propTypes.shape({
          x: propTypes.oneOfType([
            propTypes.number,
            propTypes.string,
            propTypes.instanceOf(Date),
          ]),
          y: propTypes.oneOfType([
            propTypes.number,
            propTypes.string,
            propTypes.instanceOf(Date),
          ]),
        })
      ).isRequired,
    })
  ).isRequired,
  xScale: scalePropType.isRequired,
  xFormat: propTypes.oneOfType([propTypes.func, propTypes.string]),
  yScale: scalePropType.isRequired,
  yFormat: propTypes.oneOfType([propTypes.func, propTypes.string]),
  layers: propTypes.arrayOf(
    propTypes.oneOfType([
      propTypes.oneOf([
        "grid",
        "markers",
        "axes",
        "areas",
        "crosshair",
        "lines",
        "slices",
        "points",
        "mesh",
        "legends",
      ]),
      propTypes.func,
    ])
  ).isRequired,
  curve: lineCurvePropType.isRequired,
  axisTop: axisPropType,
  axisRight: axisPropType,
  axisBottom: axisPropType,
  axisLeft: axisPropType,
  enableGridX: propTypes.bool.isRequired,
  enableGridY: propTypes.bool.isRequired,
  gridXValues: propTypes.oneOfType([
    propTypes.number,
    propTypes.arrayOf(
      propTypes.oneOfType([
        propTypes.number,
        propTypes.string,
        propTypes.instanceOf(Date),
      ])
    ),
  ]),
  gridYValues: propTypes.oneOfType([
    propTypes.number,
    propTypes.arrayOf(
      propTypes.oneOfType([
        propTypes.number,
        propTypes.string,
        propTypes.instanceOf(Date),
      ])
    ),
  ]),
  enablePoints: propTypes.bool.isRequired,
  pointSymbol: propTypes.func,
  pointSize: propTypes.number.isRequired,
  pointColor: propTypes.any.isRequired,
  pointBorderWidth: propTypes.number.isRequired,
  pointBorderColor: propTypes.any.isRequired,
  markers: propTypes.arrayOf(
    propTypes.shape({
      axis: propTypes.oneOf(["x", "y"]).isRequired,
      value: propTypes.oneOfType([
        propTypes.number,
        propTypes.string,
        propTypes.instanceOf(Date),
      ]).isRequired,
      style: propTypes.object,
    })
  ),
  colors: ordinalColorsPropType.isRequired,
  enableArea: propTypes.bool.isRequired,
  areaOpacity: propTypes.number.isRequired,
  areaBlendMode: blendModePropType.isRequired,
  areaBaselineValue: propTypes.oneOfType([
    propTypes.number,
    propTypes.string,
    propTypes.instanceOf(Date),
  ]).isRequired,
  lineWidth: propTypes.number.isRequired,
  legends: propTypes.arrayOf(propTypes.shape(LegendPropShape)).isRequired,
  isInteractive: propTypes.bool.isRequired,
  debugMesh: propTypes.bool.isRequired,
  tooltip: propTypes.oneOfType([propTypes.func, propTypes.object]).isRequired,
  tooltipFormat: propTypes.oneOfType([propTypes.func, propTypes.string]),
  enableSlices: propTypes.oneOf(["x", "y", false]).isRequired,
  debugSlices: propTypes.bool.isRequired,
  sliceTooltip: propTypes.oneOfType([propTypes.func, propTypes.object])
    .isRequired,
  enableCrosshair: propTypes.bool.isRequired,
  crosshairType: crosshairPropTypes.type.isRequired,
};
var LinePropTypes = _objectSpread$b(
  {},
  commonPropTypes,
  {
    enablePointLabel: propTypes.bool.isRequired,
    useMesh: propTypes.bool.isRequired,
  },
  motionPropTypes,
  defsPropTypes
);
var LineCanvasPropTypes = _objectSpread$b(
  {
    pixelRatio: propTypes.number.isRequired,
  },
  commonPropTypes
);
var commonDefaultProps = {
  curve: "linear",
  xScale: {
    type: "point",
  },
  yScale: {
    type: "linear",
    min: 0,
    max: "auto",
  },
  layers: [
    "grid",
    "markers",
    "axes",
    "areas",
    "crosshair",
    "lines",
    "points",
    "slices",
    "mesh",
    "legends",
  ],
  axisBottom: {},
  axisLeft: {},
  enableGridX: true,
  enableGridY: true,
  enablePoints: true,
  pointSize: 6,
  pointColor: {
    from: "color",
  },
  pointBorderWidth: 0,
  pointBorderColor: {
    theme: "background",
  },
  colors: {
    scheme: "nivo",
  },
  enableArea: false,
  areaBaselineValue: 0,
  areaOpacity: 0.2,
  areaBlendMode: "normal",
  lineWidth: 2,
  legends: [],
  isInteractive: true,
  tooltip: PointTooltip,
  enableSlices: false,
  debugSlices: false,
  sliceTooltip: SliceTooltip$1,
  debugMesh: false,
  enableCrosshair: true,
  crosshairType: "bottom-left",
};
var LineDefaultProps = _objectSpread$b({}, commonDefaultProps, {
  enablePointLabel: false,
  useMesh: false,
  animate: true,
  motionStiffness: 90,
  motionDamping: 15,
  defs: [],
  fill: [],
});
var LineCanvasDefaultProps = _objectSpread$b({}, commonDefaultProps, {
  pixelRatio:
    global.window && global.window.devicePixelRatio
      ? global.window.devicePixelRatio
      : 1,
});

function _slicedToArray$6(arr, i) {
  return (
    _arrayWithHoles$6(arr) ||
    _iterableToArrayLimit$6(arr, i) ||
    _nonIterableRest$6()
  );
}
function _nonIterableRest$6() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
function _iterableToArrayLimit$6(arr, i) {
  if (
    !(
      Symbol.iterator in Object(arr) ||
      Object.prototype.toString.call(arr) === "[object Arguments]"
    )
  ) {
    return;
  }
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;
  try {
    for (
      var _i = arr[Symbol.iterator](), _s;
      !(_n = (_s = _i.next()).done);
      _n = true
    ) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles$6(arr) {
  if (Array.isArray(arr)) return arr;
}
function _objectSpread$1$4(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(Object(source));
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(
        Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        })
      );
    }
    ownKeys.forEach(function (key) {
      _defineProperty$1$5(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$1$5(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toConsumableArray$2(arr) {
  return (
    _arrayWithoutHoles$2(arr) ||
    _iterableToArray$2(arr) ||
    _nonIterableSpread$2()
  );
}
function _nonIterableSpread$2() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
function _iterableToArray$2(iter) {
  if (
    Symbol.iterator in Object(iter) ||
    Object.prototype.toString.call(iter) === "[object Arguments]"
  )
    return Array.from(iter);
}
function _arrayWithoutHoles$2(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
}
var useLineGenerator = function useLineGenerator(_ref) {
  var curve = _ref.curve;
  return useMemo(
    function () {
      return line()
        .defined(function (d) {
          return d.x !== null && d.y !== null;
        })
        .x(function (d) {
          return d.x;
        })
        .y(function (d) {
          return d.y;
        })
        .curve(curveFromProp(curve));
    },
    [curve]
  );
};
var useAreaGenerator = function useAreaGenerator(_ref2) {
  var curve = _ref2.curve,
    yScale = _ref2.yScale,
    areaBaselineValue = _ref2.areaBaselineValue;
  return useMemo(
    function () {
      return area()
        .defined(function (d) {
          return d.x !== null && d.y !== null;
        })
        .x(function (d) {
          return d.x;
        })
        .y1(function (d) {
          return d.y;
        })
        .curve(curveFromProp(curve))
        .y0(yScale(areaBaselineValue));
    },
    [curve, yScale, areaBaselineValue]
  );
};
var usePoints = function usePoints(_ref3) {
  var series = _ref3.series,
    getPointColor = _ref3.getPointColor,
    getPointBorderColor = _ref3.getPointBorderColor,
    formatX = _ref3.formatX,
    formatY = _ref3.formatY;
  return useMemo(
    function () {
      return series.reduce(function (acc, serie) {
        return [].concat(
          _toConsumableArray$2(acc),
          _toConsumableArray$2(
            serie.data
              .filter(function (datum) {
                return datum.position.x !== null && datum.position.y !== null;
              })
              .map(function (datum, i) {
                var point = {
                  id: "".concat(serie.id, ".").concat(i),
                  index: acc.length + i,
                  serieId: serie.id,
                  serieColor: serie.color,
                  x: datum.position.x,
                  y: datum.position.y,
                };
                point.color = getPointColor(serie);
                point.borderColor = getPointBorderColor(point);
                point.data = _objectSpread$1$4({}, datum.data, {
                  xFormatted: formatX(datum.data.x),
                  yFormatted: formatY(datum.data.y),
                });
                return point;
              })
          )
        );
      }, []);
    },
    [series, getPointColor, getPointBorderColor, formatX, formatY]
  );
};
var useSlices = function useSlices(_ref4) {
  var enableSlices = _ref4.enableSlices,
    points = _ref4.points,
    width = _ref4.width,
    height = _ref4.height;
  return useMemo(
    function () {
      if (enableSlices === false) return [];
      if (enableSlices === "x") {
        var map = new Map();
        points.forEach(function (point) {
          if (point.data.x === null || point.data.y === null) return;
          if (!map.has(point.x)) map.set(point.x, [point]);
          else map.get(point.x).push(point);
        });
        return Array.from(map.entries())
          .sort(function (a, b) {
            return a[0] - b[0];
          })
          .map(function (_ref5, i, slices) {
            var _ref6 = _slicedToArray$6(_ref5, 2),
              x = _ref6[0],
              slicePoints = _ref6[1];
            var prevSlice = slices[i - 1];
            var nextSlice = slices[i + 1];
            var x0;
            if (!prevSlice) x0 = x;
            else x0 = x - (x - prevSlice[0]) / 2;
            var sliceWidth;
            if (!nextSlice) sliceWidth = width - x0;
            else sliceWidth = x - x0 + (nextSlice[0] - x) / 2;
            return {
              id: x,
              x0: x0,
              x: x,
              y0: 0,
              y: 0,
              width: sliceWidth,
              height: height,
              points: slicePoints.reverse(),
            };
          });
      } else if (enableSlices === "y") {
        var _map = new Map();
        points.forEach(function (point) {
          if (point.data.x === null || point.data.y === null) return;
          if (!_map.has(point.y)) _map.set(point.y, [point]);
          else _map.get(point.y).push(point);
        });
        return Array.from(_map.entries())
          .sort(function (a, b) {
            return a[0] - b[0];
          })
          .map(function (_ref7, i, slices) {
            var _ref8 = _slicedToArray$6(_ref7, 2),
              y = _ref8[0],
              slicePoints = _ref8[1];
            var prevSlice = slices[i - 1];
            var nextSlice = slices[i + 1];
            var y0;
            if (!prevSlice) y0 = y;
            else y0 = y - (y - prevSlice[0]) / 2;
            var sliceHeight;
            if (!nextSlice) sliceHeight = height - y0;
            else sliceHeight = y - y0 + (nextSlice[0] - y) / 2;
            return {
              id: y,
              x0: 0,
              x: 0,
              y0: y0,
              y: y,
              width: width,
              height: sliceHeight,
              points: slicePoints.reverse(),
            };
          });
      }
    },
    [enableSlices, points]
  );
};
var useLine = function useLine(_ref9) {
  var data = _ref9.data,
    _ref9$xScale = _ref9.xScale,
    xScaleSpec =
      _ref9$xScale === void 0 ? LineDefaultProps.xScale : _ref9$xScale,
    xFormat = _ref9.xFormat,
    _ref9$yScale = _ref9.yScale,
    yScaleSpec =
      _ref9$yScale === void 0 ? LineDefaultProps.yScale : _ref9$yScale,
    yFormat = _ref9.yFormat,
    width = _ref9.width,
    height = _ref9.height,
    _ref9$colors = _ref9.colors,
    colors = _ref9$colors === void 0 ? LineDefaultProps.colors : _ref9$colors,
    _ref9$curve = _ref9.curve,
    curve = _ref9$curve === void 0 ? LineDefaultProps.curve : _ref9$curve,
    _ref9$areaBaselineVal = _ref9.areaBaselineValue,
    areaBaselineValue =
      _ref9$areaBaselineVal === void 0
        ? LineDefaultProps.areaBaselineValue
        : _ref9$areaBaselineVal,
    _ref9$pointColor = _ref9.pointColor,
    pointColor =
      _ref9$pointColor === void 0
        ? LineDefaultProps.pointColor
        : _ref9$pointColor,
    _ref9$pointBorderColo = _ref9.pointBorderColor,
    pointBorderColor =
      _ref9$pointBorderColo === void 0
        ? LineDefaultProps.pointBorderColor
        : _ref9$pointBorderColo,
    _ref9$enableSlices = _ref9.enableSlices,
    enableSlices =
      _ref9$enableSlices === void 0
        ? LineDefaultProps.enableSlicesTooltip
        : _ref9$enableSlices;
  var formatX = useValueFormatter(xFormat);
  var formatY = useValueFormatter(yFormat);
  var getColor = useOrdinalColorScale(colors, "id");
  var theme = useTheme();
  var getPointColor = useInheritedColor(pointColor, theme);
  var getPointBorderColor = useInheritedColor(pointBorderColor, theme);
  var _useMemo = useMemo(
      function () {
        return computeXYScalesForSeries(
          data,
          xScaleSpec,
          yScaleSpec,
          width,
          height
        );
      },
      [data, xScaleSpec, yScaleSpec, width, height]
    ),
    xScale = _useMemo.xScale,
    yScale = _useMemo.yScale,
    rawSeries = _useMemo.series;
  var series = useMemo(
    function () {
      return rawSeries.map(function (serie) {
        return _objectSpread$1$4({}, serie, {
          color: getColor(serie),
        });
      });
    },
    [rawSeries, getColor]
  );
  var points = usePoints({
    series: series,
    getPointColor: getPointColor,
    getPointBorderColor: getPointBorderColor,
    formatX: formatX,
    formatY: formatY,
  });
  var slices = useSlices({
    enableSlices: enableSlices,
    points: points,
    width: width,
    height: height,
  });
  var lineGenerator = useLineGenerator({
    curve: curve,
  });
  var areaGenerator = useAreaGenerator({
    curve: curve,
    yScale: yScale,
    areaBaselineValue: areaBaselineValue,
  });
  return {
    lineGenerator: lineGenerator,
    areaGenerator: areaGenerator,
    getColor: getColor,
    series: series,
    xScale: xScale,
    yScale: yScale,
    slices: slices,
    points: points,
  };
};

var Areas = function Areas(_ref) {
  var areaGenerator = _ref.areaGenerator,
    areaOpacity = _ref.areaOpacity,
    areaBlendMode = _ref.areaBlendMode,
    lines = _ref.lines;
  var _useMotionConfig = useMotionConfig(),
    animate = _useMotionConfig.animate,
    springConfig = _useMotionConfig.springConfig;
  if (animate !== true) {
    return React.createElement(
      "g",
      null,
      lines
        .slice(0)
        .reverse()
        .map(function (_ref2) {
          var id = _ref2.id,
            data = _ref2.data,
            areaColor = _ref2.color,
            fill = _ref2.fill;
          return React.createElement("path", {
            key: id,
            d: areaGenerator(
              data.map(function (d) {
                return d.position;
              })
            ),
            fill: fill ? fill : areaColor,
            fillOpacity: areaOpacity,
            strokeWidth: 0,
            style: {
              mixBlendMode: areaBlendMode,
            },
          });
        })
    );
  }
  return React.createElement(
    "g",
    null,
    lines
      .slice(0)
      .reverse()
      .map(function (_ref3) {
        var id = _ref3.id,
          data = _ref3.data,
          areaColor = _ref3.color,
          fill = _ref3.fill;
        return React.createElement(
          SmartMotion,
          {
            key: id,
            style: function style(spring) {
              return {
                d: spring(
                  areaGenerator(
                    data.map(function (d) {
                      return d.position;
                    })
                  ),
                  springConfig
                ),
                fill: spring(areaColor, springConfig),
              };
            },
          },
          function (style) {
            return React.createElement("path", {
              key: id,
              d: style.d,
              fill: fill ? fill : areaColor,
              fillOpacity: areaOpacity,
              strokeWidth: 0,
              style: {
                mixBlendMode: areaBlendMode,
              },
            });
          }
        );
      })
  );
};
Areas.propTypes = {
  areaGenerator: propTypes.func.isRequired,
  areaOpacity: propTypes.number.isRequired,
  areaBlendMode: blendModePropType.isRequired,
  lines: propTypes.arrayOf(propTypes.object).isRequired,
};
var Areas$1 = memo(Areas);

var LinesItem = function LinesItem(_ref) {
  var lineGenerator = _ref.lineGenerator,
    id = _ref.id,
    points = _ref.points,
    color = _ref.color,
    thickness = _ref.thickness;
  var _useMotionConfig = useMotionConfig(),
    animate = _useMotionConfig.animate,
    springConfig = _useMotionConfig.springConfig;
  if (animate !== true) {
    return React.createElement("path", {
      key: id,
      d: lineGenerator(points),
      fill: "none",
      strokeWidth: thickness,
      stroke: color,
    });
  }
  return React.createElement(
    SmartMotion,
    {
      key: id,
      style: function style(spring) {
        return {
          d: spring(lineGenerator(points), springConfig),
          stroke: spring(color, springConfig),
        };
      },
    },
    function (style) {
      return React.createElement("path", {
        key: id,
        d: style.d,
        fill: "none",
        strokeWidth: thickness,
        stroke: style.stroke,
      });
    }
  );
};
LinesItem.propTypes = {
  id: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,
  points: propTypes.arrayOf(
    propTypes.shape({
      x: propTypes.oneOfType([propTypes.string, propTypes.number]),
      y: propTypes.oneOfType([propTypes.string, propTypes.number]),
    })
  ),
  lineGenerator: propTypes.func.isRequired,
  color: propTypes.string.isRequired,
  thickness: propTypes.number.isRequired,
};
var LinesItem$1 = memo(LinesItem);

var Lines = function Lines(_ref) {
  var lines = _ref.lines,
    lineGenerator = _ref.lineGenerator,
    lineWidth = _ref.lineWidth;
  return lines.map(function (_ref2) {
    var id = _ref2.id,
      data = _ref2.data,
      color = _ref2.color;
    return React.createElement(LinesItem$1, {
      key: id,
      id: id,
      points: data.map(function (d) {
        return d.position;
      }),
      lineGenerator: lineGenerator,
      color: color,
      thickness: lineWidth,
    });
  });
};
Lines.propTypes = {
  lines: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,
      color: propTypes.string.isRequired,
      data: propTypes.arrayOf(
        propTypes.shape({
          data: propTypes.shape({
            x: propTypes.oneOfType([
              propTypes.string,
              propTypes.number,
              propTypes.instanceOf(Date),
            ]),
            y: propTypes.oneOfType([
              propTypes.string,
              propTypes.number,
              propTypes.instanceOf(Date),
            ]),
          }).isRequired,
          position: propTypes.shape({
            x: propTypes.number,
            y: propTypes.number,
          }).isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
  lineWidth: propTypes.number.isRequired,
  lineGenerator: propTypes.func.isRequired,
};
var Lines$1 = memo(Lines);

var SlicesItem = function SlicesItem(_ref) {
  var slice = _ref.slice,
    axis = _ref.axis,
    debug = _ref.debug,
    tooltip = _ref.tooltip,
    isCurrent = _ref.isCurrent,
    setCurrent = _ref.setCurrent;
  var _useTooltip = useTooltip(),
    showTooltipFromEvent = _useTooltip.showTooltipFromEvent,
    hideTooltip = _useTooltip.hideTooltip;
  var handleMouseEnter = useCallback(
    function (event) {
      showTooltipFromEvent(
        React.createElement(tooltip, {
          slice: slice,
          axis: axis,
        }),
        event,
        "right"
      );
      setCurrent(slice);
    },
    [showTooltipFromEvent, tooltip, slice]
  );
  var handleMouseMove = useCallback(
    function (event) {
      showTooltipFromEvent(
        React.createElement(tooltip, {
          slice: slice,
          axis: axis,
        }),
        event,
        "right"
      );
    },
    [showTooltipFromEvent, tooltip, slice]
  );
  var handleMouseLeave = useCallback(
    function () {
      hideTooltip();
      setCurrent(null);
    },
    [hideTooltip]
  );
  return React.createElement("rect", {
    x: slice.x0,
    y: slice.y0,
    width: slice.width,
    height: slice.height,
    stroke: "red",
    strokeWidth: debug ? 1 : 0,
    strokeOpacity: 0.75,
    fill: "red",
    fillOpacity: isCurrent && debug ? 0.35 : 0,
    onMouseEnter: handleMouseEnter,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
  });
};
SlicesItem.propTypes = {
  slice: propTypes.object.isRequired,
  axis: propTypes.oneOf(["x", "y"]).isRequired,
  debug: propTypes.bool.isRequired,
  height: propTypes.number.isRequired,
  tooltip: propTypes.oneOfType([propTypes.func, propTypes.object]),
  isCurrent: propTypes.bool.isRequired,
  setCurrent: propTypes.func.isRequired,
};
var SlicesItem$1 = memo(SlicesItem);

var Slices = function Slices(_ref) {
  var slices = _ref.slices,
    axis = _ref.axis,
    debug = _ref.debug,
    height = _ref.height,
    tooltip = _ref.tooltip,
    current = _ref.current,
    setCurrent = _ref.setCurrent;
  return slices.map(function (slice) {
    return React.createElement(SlicesItem$1, {
      key: slice.id,
      slice: slice,
      axis: axis,
      debug: debug,
      height: height,
      tooltip: tooltip,
      setCurrent: setCurrent,
      isCurrent: current !== null && current.id === slice.id,
    });
  });
};
Slices.propTypes = {
  slices: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.oneOfType([
        propTypes.number,
        propTypes.string,
        propTypes.instanceOf(Date),
      ]).isRequired,
      x: propTypes.number.isRequired,
      y: propTypes.number.isRequired,
      points: propTypes.arrayOf(propTypes.object).isRequired,
    })
  ).isRequired,
  axis: propTypes.oneOf(["x", "y"]).isRequired,
  debug: propTypes.bool.isRequired,
  height: propTypes.number.isRequired,
  tooltip: propTypes.oneOfType([propTypes.func, propTypes.object]).isRequired,
  current: propTypes.object,
  setCurrent: propTypes.func.isRequired,
};
var Slices$1 = memo(Slices);

function _extends$4() {
  _extends$4 =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$4.apply(this, arguments);
}
var Points = function Points(_ref) {
  var points = _ref.points,
    symbol = _ref.symbol,
    size = _ref.size,
    borderWidth = _ref.borderWidth,
    enableLabel = _ref.enableLabel,
    label = _ref.label,
    labelYOffset = _ref.labelYOffset;
  var theme = useTheme();
  var _useMotionConfig = useMotionConfig(),
    animate = _useMotionConfig.animate,
    springConfig = _useMotionConfig.springConfig;
  var getLabel = getLabelGenerator(label);
  var mappedPoints = points.map(function (point) {
    var mappedPoint = {
      id: point.id,
      x: point.x,
      y: point.y,
      datum: point.data,
      fill: point.color,
      stroke: point.borderColor,
      label: enableLabel ? getLabel(point.data) : null,
    };
    return mappedPoint;
  });
  if (animate !== true) {
    return React.createElement(
      "g",
      null,
      mappedPoints.map(function (point) {
        return React.createElement(DotsItem$1, {
          key: point.id,
          x: point.x,
          y: point.y,
          datum: point.datum,
          symbol: symbol,
          size: size,
          color: point.fill,
          borderWidth: borderWidth,
          borderColor: point.stroke,
          label: point.label,
          labelYOffset: labelYOffset,
          theme: theme,
        });
      })
    );
  }
  return React.createElement(
    reactMotion.TransitionMotion,
    {
      styles: mappedPoints.map(function (point) {
        return {
          key: point.id,
          data: point,
          style: {
            x: reactMotion.spring(point.x, springConfig),
            y: reactMotion.spring(point.y, springConfig),
            size: reactMotion.spring(size, springConfig),
          },
        };
      }),
    },
    function (interpolatedStyles) {
      return React.createElement(
        "g",
        null,
        interpolatedStyles.map(function (_ref2) {
          var key = _ref2.key,
            style = _ref2.style,
            point = _ref2.data;
          return React.createElement(
            DotsItem$1,
            _extends$4(
              {
                key: key,
              },
              style,
              {
                symbol: symbol,
                datum: point.datum,
                color: point.fill,
                borderWidth: borderWidth,
                borderColor: point.stroke,
                label: point.label,
                labelYOffset: labelYOffset,
                theme: theme,
              }
            )
          );
        })
      );
    }
  );
};
Points.propTypes = {
  points: propTypes.arrayOf(propTypes.object),
  symbol: propTypes.func,
  size: propTypes.number.isRequired,
  color: propTypes.func.isRequired,
  borderWidth: propTypes.number.isRequired,
  borderColor: propTypes.func.isRequired,
  enableLabel: propTypes.bool.isRequired,
  label: propTypes.oneOfType([propTypes.string, propTypes.func]).isRequired,
  labelYOffset: propTypes.number,
};
Points.defaultProps = {
  enableLabel: false,
  label: "yFormatted",
};
var Points$1 = memo(Points);

var Mesh$1 = function Mesh$1(_ref) {
  var points = _ref.points,
    width = _ref.width,
    height = _ref.height,
    margin = _ref.margin,
    setCurrent = _ref.setCurrent,
    onMouseEnter = _ref.onMouseEnter,
    onMouseMove = _ref.onMouseMove,
    onMouseLeave = _ref.onMouseLeave,
    onClick = _ref.onClick,
    tooltip = _ref.tooltip,
    debug = _ref.debug;
  var _useTooltip = useTooltip(),
    showTooltipAt = _useTooltip.showTooltipAt,
    hideTooltip = _useTooltip.hideTooltip;
  var handleMouseEnter = useCallback(
    function (point, event) {
      showTooltipAt(
        React.createElement(tooltip, {
          point: point,
        }),
        [point.x + margin.left, point.y + margin.top],
        "top"
      );
      setCurrent(point);
      onMouseEnter && onMouseEnter(point, event);
    },
    [setCurrent, showTooltipAt, tooltip, onMouseEnter, margin]
  );
  var handleMouseMove = useCallback(
    function (point, event) {
      showTooltipAt(
        React.createElement(tooltip, {
          point: point,
        }),
        [point.x + margin.left, point.y + margin.top],
        "top"
      );
      setCurrent(point);
      onMouseMove && onMouseMove(point, event);
    },
    [setCurrent, showTooltipAt, tooltip, onMouseMove]
  );
  var handleMouseLeave = useCallback(
    function (point, event) {
      hideTooltip();
      setCurrent(null);
      onMouseLeave && onMouseLeave(point, event);
    },
    [hideTooltip, setCurrent, onMouseLeave]
  );
  var handleClick = useCallback(
    function (point, event) {
      onClick && onClick(point, event);
    },
    [onClick]
  );
  return React.createElement(Mesh, {
    nodes: points,
    width: width,
    height: height,
    onMouseEnter: handleMouseEnter,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    onClick: handleClick,
    debug: debug,
  });
};
Mesh$1.propTypes = {
  points: propTypes.arrayOf(propTypes.object).isRequired,
  width: propTypes.number.isRequired,
  height: propTypes.number.isRequired,
  margin: propTypes.object.isRequired,
  setCurrent: propTypes.func.isRequired,
  onMouseEnter: propTypes.func,
  onMouseMove: propTypes.func,
  onMouseLeave: propTypes.func,
  onClick: propTypes.func,
  tooltip: propTypes.oneOfType([propTypes.func, propTypes.object]).isRequired,
  debug: propTypes.bool.isRequired,
};
var Mesh$1$1 = memo(Mesh$1);

function _objectSpread$2$4(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(Object(source));
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(
        Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        })
      );
    }
    ownKeys.forEach(function (key) {
      _defineProperty$2$4(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$2$4(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _extends$1$3() {
  _extends$1$3 =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends$1$3.apply(this, arguments);
}
function _slicedToArray$1$1(arr, i) {
  return (
    _arrayWithHoles$1$1(arr) ||
    _iterableToArrayLimit$1$1(arr, i) ||
    _nonIterableRest$1$1()
  );
}
function _nonIterableRest$1$1() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
function _iterableToArrayLimit$1$1(arr, i) {
  if (
    !(
      Symbol.iterator in Object(arr) ||
      Object.prototype.toString.call(arr) === "[object Arguments]"
    )
  ) {
    return;
  }
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;
  try {
    for (
      var _i = arr[Symbol.iterator](), _s;
      !(_n = (_s = _i.next()).done);
      _n = true
    ) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles$1$1(arr) {
  if (Array.isArray(arr)) return arr;
}
var Line$1 = function Line(props) {
  var data = props.data,
    xScaleSpec = props.xScale,
    xFormat = props.xFormat,
    yScaleSpec = props.yScale,
    yFormat = props.yFormat,
    layers = props.layers,
    curve = props.curve,
    areaBaselineValue = props.areaBaselineValue,
    colors = props.colors,
    partialMargin = props.margin,
    width = props.width,
    height = props.height,
    axisTop = props.axisTop,
    axisRight = props.axisRight,
    axisBottom = props.axisBottom,
    axisLeft = props.axisLeft,
    enableGridX = props.enableGridX,
    enableGridY = props.enableGridY,
    gridXValues = props.gridXValues,
    gridYValues = props.gridYValues,
    lineWidth = props.lineWidth,
    enableArea = props.enableArea,
    areaOpacity = props.areaOpacity,
    areaBlendMode = props.areaBlendMode,
    enablePoints = props.enablePoints,
    pointSymbol = props.pointSymbol,
    pointSize = props.pointSize,
    pointColor = props.pointColor,
    pointBorderWidth = props.pointBorderWidth,
    pointBorderColor = props.pointBorderColor,
    enablePointLabel = props.enablePointLabel,
    pointLabel = props.pointLabel,
    pointLabelFormat = props.pointLabelFormat,
    pointLabelYOffset = props.pointLabelYOffset,
    defs = props.defs,
    fill = props.fill,
    markers = props.markers,
    legends = props.legends,
    isInteractive = props.isInteractive,
    useMesh = props.useMesh,
    debugMesh = props.debugMesh,
    onMouseEnter = props.onMouseEnter,
    onMouseMove = props.onMouseMove,
    onMouseLeave = props.onMouseLeave,
    onClick = props.onClick,
    tooltip = props.tooltip,
    enableSlices = props.enableSlices,
    debugSlices = props.debugSlices,
    sliceTooltip = props.sliceTooltip,
    enableCrosshair = props.enableCrosshair,
    crosshairType = props.crosshairType;
  var _useDimensions = useDimensions(width, height, partialMargin),
    margin = _useDimensions.margin,
    innerWidth = _useDimensions.innerWidth,
    innerHeight = _useDimensions.innerHeight,
    outerWidth = _useDimensions.outerWidth,
    outerHeight = _useDimensions.outerHeight;
  var _useLine = useLine({
      data: data,
      xScale: xScaleSpec,
      xFormat: xFormat,
      yScale: yScaleSpec,
      yFormat: yFormat,
      width: innerWidth,
      height: innerHeight,
      colors: colors,
      curve: curve,
      areaBaselineValue: areaBaselineValue,
      pointColor: pointColor,
      pointBorderColor: pointBorderColor,
      enableSlices: enableSlices,
    }),
    lineGenerator = _useLine.lineGenerator,
    areaGenerator = _useLine.areaGenerator,
    series = _useLine.series,
    xScale = _useLine.xScale,
    yScale = _useLine.yScale,
    slices = _useLine.slices,
    points = _useLine.points;
  var theme = useTheme();
  var getPointColor = useInheritedColor(pointColor, theme);
  var getPointBorderColor = useInheritedColor(pointBorderColor, theme);
  var _useState = useState(null),
    _useState2 = _slicedToArray$1$1(_useState, 2),
    currentPoint = _useState2[0],
    setCurrentPoint = _useState2[1];
  var _useState3 = useState(null),
    _useState4 = _slicedToArray$1$1(_useState3, 2),
    currentSlice = _useState4[0],
    setCurrentSlice = _useState4[1];
  var legendData = useMemo(
    function () {
      return series
        .map(function (line) {
          return {
            id: line.id,
            label: line.id,
            color: line.color,
          };
        })
        .reverse();
    },
    [series]
  );
  var layerById = {
    grid: React.createElement(Grid$1, {
      key: "grid",
      theme: theme,
      width: innerWidth,
      height: innerHeight,
      xScale: enableGridX ? xScale : null,
      yScale: enableGridY ? yScale : null,
      xValues: gridXValues,
      yValues: gridYValues,
    }),
    markers: React.createElement(CartesianMarkers$1, {
      key: "markers",
      markers: markers,
      width: innerWidth,
      height: innerHeight,
      xScale: xScale,
      yScale: yScale,
      theme: theme,
    }),
    axes: React.createElement(Axes$1, {
      key: "axes",
      xScale: xScale,
      yScale: yScale,
      width: innerWidth,
      height: innerHeight,
      theme: theme,
      top: axisTop,
      right: axisRight,
      bottom: axisBottom,
      left: axisLeft,
    }),
    areas: null,
    lines: React.createElement(Lines$1, {
      key: "lines",
      lines: series,
      lineGenerator: lineGenerator,
      lineWidth: lineWidth,
    }),
    slices: null,
    points: null,
    crosshair: null,
    mesh: null,
    legends: legends.map(function (legend, i) {
      return React.createElement(
        BoxLegendSvg,
        _extends$1$3(
          {
            key: "legend.".concat(i),
          },
          legend,
          {
            containerWidth: innerWidth,
            containerHeight: innerHeight,
            data: legend.data || legendData,
            theme: theme,
          }
        )
      );
    }),
  };
  var boundDefs = bindDefs(defs, series, fill);
  if (enableArea) {
    layerById.areas = React.createElement(Areas$1, {
      key: "areas",
      areaGenerator: areaGenerator,
      areaOpacity: areaOpacity,
      areaBlendMode: areaBlendMode,
      lines: series,
    });
  }
  if (isInteractive && enableSlices !== false) {
    layerById.slices = React.createElement(Slices$1, {
      key: "slices",
      slices: slices,
      axis: enableSlices,
      debug: debugSlices,
      height: innerHeight,
      tooltip: sliceTooltip,
      current: currentSlice,
      setCurrent: setCurrentSlice,
    });
  }
  if (enablePoints) {
    layerById.points = React.createElement(Points$1, {
      key: "points",
      points: points,
      symbol: pointSymbol,
      size: pointSize,
      color: getPointColor,
      borderWidth: pointBorderWidth,
      borderColor: getPointBorderColor,
      enableLabel: enablePointLabel,
      label: pointLabel,
      labelFormat: pointLabelFormat,
      labelYOffset: pointLabelYOffset,
    });
  }
  if (isInteractive && enableCrosshair) {
    if (currentPoint !== null) {
      layerById.crosshair = React.createElement(Crosshair, {
        key: "crosshair",
        width: innerWidth,
        height: innerHeight,
        x: currentPoint.x,
        y: currentPoint.y,
        type: crosshairType,
      });
    }
    if (currentSlice !== null) {
      layerById.crosshair = React.createElement(Crosshair, {
        key: "crosshair",
        width: innerWidth,
        height: innerHeight,
        x: currentSlice.x,
        y: currentSlice.y,
        type: enableSlices,
      });
    }
  }
  if (isInteractive && useMesh && enableSlices === false) {
    layerById.mesh = React.createElement(Mesh$1$1, {
      key: "mesh",
      points: points,
      width: innerWidth,
      height: innerHeight,
      margin: margin,
      current: currentPoint,
      setCurrent: setCurrentPoint,
      onMouseEnter: onMouseEnter,
      onMouseMove: onMouseMove,
      onMouseLeave: onMouseLeave,
      onClick: onClick,
      tooltip: tooltip,
      debug: debugMesh,
    });
  }
  return React.createElement(
    SvgWrapper,
    {
      defs: boundDefs,
      width: outerWidth,
      height: outerHeight,
      margin: margin,
    },
    layers.map(function (layer, i) {
      if (typeof layer === "function") {
        return React.createElement(
          Fragment$1,
          {
            key: i,
          },
          layer(
            _objectSpread$2$4({}, props, {
              innerWidth: innerWidth,
              innerHeight: innerHeight,
              series: series,
              slices: slices,
              points: points,
              xScale: xScale,
              yScale: yScale,
              lineGenerator: lineGenerator,
              areaGenerator: areaGenerator,
              currentPoint: currentPoint,
              setCurrentPoint: setCurrentPoint,
              currentSlice: currentSlice,
              setCurrentSlice: setCurrentSlice,
            })
          )
        );
      }
      return layerById[layer];
    })
  );
};
Line$1.propTypes = LinePropTypes;
Line$1.defaultProps = LineDefaultProps;
var Line$1$1 = withContainer(Line$1);

function _objectSpread$3$3(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(Object(source));
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(
        Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        })
      );
    }
    ownKeys.forEach(function (key) {
      _defineProperty$3$3(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$3$3(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _slicedToArray$2$1(arr, i) {
  return (
    _arrayWithHoles$2$1(arr) ||
    _iterableToArrayLimit$2$1(arr, i) ||
    _nonIterableRest$2$1()
  );
}
function _nonIterableRest$2$1() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
function _iterableToArrayLimit$2$1(arr, i) {
  if (
    !(
      Symbol.iterator in Object(arr) ||
      Object.prototype.toString.call(arr) === "[object Arguments]"
    )
  ) {
    return;
  }
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;
  try {
    for (
      var _i = arr[Symbol.iterator](), _s;
      !(_n = (_s = _i.next()).done);
      _n = true
    ) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles$2$1(arr) {
  if (Array.isArray(arr)) return arr;
}
var LineCanvas = function LineCanvas(_ref) {
  var width = _ref.width,
    height = _ref.height,
    partialMargin = _ref.margin,
    pixelRatio = _ref.pixelRatio,
    data = _ref.data,
    xScaleSpec = _ref.xScale,
    xFormat = _ref.xFormat,
    yScaleSpec = _ref.yScale,
    yFormat = _ref.yFormat,
    curve = _ref.curve,
    layers = _ref.layers,
    colors = _ref.colors,
    lineWidth = _ref.lineWidth,
    enableArea = _ref.enableArea,
    areaBaselineValue = _ref.areaBaselineValue,
    areaOpacity = _ref.areaOpacity,
    enablePoints = _ref.enablePoints,
    pointSize = _ref.pointSize,
    pointColor = _ref.pointColor,
    pointBorderWidth = _ref.pointBorderWidth,
    pointBorderColor = _ref.pointBorderColor,
    enableGridX = _ref.enableGridX,
    gridXValues = _ref.gridXValues,
    enableGridY = _ref.enableGridY,
    gridYValues = _ref.gridYValues,
    axisTop = _ref.axisTop,
    axisRight = _ref.axisRight,
    axisBottom = _ref.axisBottom,
    axisLeft = _ref.axisLeft,
    legends = _ref.legends,
    isInteractive = _ref.isInteractive,
    debugMesh = _ref.debugMesh,
    onMouseLeave = _ref.onMouseLeave,
    onClick = _ref.onClick,
    tooltip = _ref.tooltip;
  var canvasEl = useRef(null);
  var _useDimensions = useDimensions(width, height, partialMargin),
    margin = _useDimensions.margin,
    innerWidth = _useDimensions.innerWidth,
    innerHeight = _useDimensions.innerHeight,
    outerWidth = _useDimensions.outerWidth,
    outerHeight = _useDimensions.outerHeight;
  var theme = useTheme();
  var _useState = useState(null),
    _useState2 = _slicedToArray$2$1(_useState, 2),
    currentPoint = _useState2[0],
    setCurrentPoint = _useState2[1];
  var _useLine = useLine({
      data: data,
      xScale: xScaleSpec,
      xFormat: xFormat,
      yScale: yScaleSpec,
      yFormat: yFormat,
      width: innerWidth,
      height: innerHeight,
      colors: colors,
      curve: curve,
      areaBaselineValue: areaBaselineValue,
      pointColor: pointColor,
      pointBorderColor: pointBorderColor,
    }),
    lineGenerator = _useLine.lineGenerator,
    areaGenerator = _useLine.areaGenerator,
    series = _useLine.series,
    xScale = _useLine.xScale,
    yScale = _useLine.yScale,
    points = _useLine.points;
  var _useVoronoiMesh = useVoronoiMesh({
      points: points,
      width: innerWidth,
      height: innerHeight,
      debug: debugMesh,
    }),
    delaunay = _useVoronoiMesh.delaunay,
    voronoi = _useVoronoiMesh.voronoi;
  useEffect(
    function () {
      canvasEl.current.width = outerWidth * pixelRatio;
      canvasEl.current.height = outerHeight * pixelRatio;
      var ctx = canvasEl.current.getContext("2d");
      ctx.scale(pixelRatio, pixelRatio);
      ctx.fillStyle = theme.background;
      ctx.fillRect(0, 0, outerWidth, outerHeight);
      ctx.translate(margin.left, margin.top);
      layers.forEach(function (layer) {
        if (layer === "grid" && theme.grid.line.strokeWidth > 0) {
          ctx.lineWidth = theme.grid.line.strokeWidth;
          ctx.strokeStyle = theme.grid.line.stroke;
          enableGridX &&
            renderGridLinesToCanvas(ctx, {
              width: innerWidth,
              height: innerHeight,
              scale: xScale,
              axis: "x",
              values: gridXValues,
            });
          enableGridY &&
            renderGridLinesToCanvas(ctx, {
              width: innerWidth,
              height: innerHeight,
              scale: yScale,
              axis: "y",
              values: gridYValues,
            });
        }
        if (layer === "axes") {
          renderAxesToCanvas(ctx, {
            xScale: xScale,
            yScale: yScale,
            width: innerWidth,
            height: innerHeight,
            top: axisTop,
            right: axisRight,
            bottom: axisBottom,
            left: axisLeft,
            theme: theme,
          });
        }
        if (layer === "areas" && enableArea === true) {
          ctx.save();
          ctx.globalAlpha = areaOpacity;
          areaGenerator.context(ctx);
          series.forEach(function (serie) {
            ctx.fillStyle = serie.color;
            ctx.beginPath();
            areaGenerator(
              serie.data.map(function (d) {
                return d.position;
              })
            );
            ctx.fill();
          });
          ctx.restore();
        }
        if (layer === "lines") {
          lineGenerator.context(ctx);
          series.forEach(function (serie) {
            ctx.strokeStyle = serie.color;
            ctx.lineWidth = lineWidth;
            ctx.beginPath();
            lineGenerator(
              serie.data.map(function (d) {
                return d.position;
              })
            );
            ctx.stroke();
          });
        }
        if (layer === "points" && enablePoints === true && pointSize > 0) {
          points.forEach(function (point) {
            ctx.fillStyle = point.color;
            ctx.beginPath();
            ctx.arc(point.x, point.y, pointSize / 2, 0, 2 * Math.PI);
            ctx.fill();
            if (pointBorderWidth > 0) {
              ctx.strokeStyle = point.borderColor;
              ctx.lineWidth = pointBorderWidth;
              ctx.stroke();
            }
          });
        }
        if (layer === "mesh" && debugMesh === true) {
          renderVoronoiToCanvas(ctx, voronoi);
          if (currentPoint) {
            renderVoronoiCellToCanvas(ctx, voronoi, currentPoint.index);
          }
        }
        if (layer === "legends") {
          var legendData = series
            .map(function (serie) {
              return {
                id: serie.id,
                label: serie.id,
                color: serie.color,
              };
            })
            .reverse();
          legends.forEach(function (legend) {
            renderLegendToCanvas(
              ctx,
              _objectSpread$3$3({}, legend, {
                data: legend.data || legendData,
                containerWidth: innerWidth,
                containerHeight: innerHeight,
                theme: theme,
              })
            );
          });
        }
      });
    },
    [
      canvasEl,
      outerWidth,
      outerHeight,
      layers,
      theme,
      lineGenerator,
      series,
      xScale,
      yScale,
      enableGridX,
      gridXValues,
      enableGridY,
      gridYValues,
      axisTop,
      axisRight,
      axisBottom,
      axisLeft,
      legends,
      points,
      enablePoints,
      pointSize,
      currentPoint,
    ]
  );
  var getPointFromMouseEvent = useCallback(
    function (event) {
      var _getRelativeCursor = getRelativeCursor(canvasEl.current, event),
        _getRelativeCursor2 = _slicedToArray$2$1(_getRelativeCursor, 2),
        x = _getRelativeCursor2[0],
        y = _getRelativeCursor2[1];
      if (
        !isCursorInRect(margin.left, margin.top, innerWidth, innerHeight, x, y)
      )
        return null;
      var pointIndex = delaunay.find(x - margin.left, y - margin.top);
      return points[pointIndex];
    },
    [canvasEl, margin, innerWidth, innerHeight, delaunay]
  );
  var _useTooltip = useTooltip(),
    showTooltipFromEvent = _useTooltip.showTooltipFromEvent,
    hideTooltip = _useTooltip.hideTooltip;
  var handleMouseHover = useCallback(
    function (event) {
      var point = getPointFromMouseEvent(event);
      setCurrentPoint(point);
      if (point) {
        showTooltipFromEvent(
          React.createElement(tooltip, {
            point: point,
          }),
          event
        );
      } else {
        hideTooltip();
      }
    },
    [
      getPointFromMouseEvent,
      setCurrentPoint,
      showTooltipFromEvent,
      hideTooltip,
      tooltip,
    ]
  );
  var handleMouseLeave = useCallback(
    function (event) {
      hideTooltip();
      setCurrentPoint(null);
      currentPoint && onMouseLeave && onMouseLeave(currentPoint, event);
    },
    [hideTooltip, setCurrentPoint, onMouseLeave]
  );
  var handleClick = useCallback(
    function (event) {
      if (onClick) {
        var point = getPointFromMouseEvent(event);
        point && onClick(point, event);
      }
    },
    [getPointFromMouseEvent, onClick]
  );
  return React.createElement("canvas", {
    ref: canvasEl,
    width: outerWidth * pixelRatio,
    height: outerHeight * pixelRatio,
    style: {
      width: outerWidth,
      height: outerHeight,
      cursor: isInteractive ? "auto" : "normal",
    },
    onMouseEnter: isInteractive ? handleMouseHover : undefined,
    onMouseMove: isInteractive ? handleMouseHover : undefined,
    onMouseLeave: isInteractive ? handleMouseLeave : undefined,
    onClick: isInteractive ? handleClick : undefined,
  });
};
LineCanvas.propTypes = LineCanvasPropTypes;
LineCanvas.defaultProps = LineCanvasDefaultProps;
var LineCanvas$1 = withContainer(LineCanvas);

/**
 * Detect Element Resize.
 * https://github.com/sdecima/javascript-detect-element-resize
 * Sebastian Decima
 *
 * Forked from version 0.5.3; includes the following modifications:
 * 1) Guard against unsafe 'window' and 'document' references (to support SSR).
 * 2) Defer initialization code via a top-level function wrapper (to support SSR).
 * 3) Avoid unnecessary reflows by not measuring size for scroll events bubbling from children.
 * 4) Add nonce for style element.
 **/

function createDetectElementResize(nonce) {
  // Check `document` and `window` in case of server-side rendering
  var _window;
  if (typeof window !== "undefined") {
    _window = window;
  } else if (typeof self !== "undefined") {
    _window = self;
  } else {
    _window = global;
  }

  var attachEvent = typeof document !== "undefined" && document.attachEvent;

  if (!attachEvent) {
    var requestFrame = (function () {
      var raf =
        _window.requestAnimationFrame ||
        _window.mozRequestAnimationFrame ||
        _window.webkitRequestAnimationFrame ||
        function (fn) {
          return _window.setTimeout(fn, 20);
        };
      return function (fn) {
        return raf(fn);
      };
    })();

    var cancelFrame = (function () {
      var cancel =
        _window.cancelAnimationFrame ||
        _window.mozCancelAnimationFrame ||
        _window.webkitCancelAnimationFrame ||
        _window.clearTimeout;
      return function (id) {
        return cancel(id);
      };
    })();

    var resetTriggers = function resetTriggers(element) {
      var triggers = element.__resizeTriggers__,
        expand = triggers.firstElementChild,
        contract = triggers.lastElementChild,
        expandChild = expand.firstElementChild;
      contract.scrollLeft = contract.scrollWidth;
      contract.scrollTop = contract.scrollHeight;
      expandChild.style.width = expand.offsetWidth + 1 + "px";
      expandChild.style.height = expand.offsetHeight + 1 + "px";
      expand.scrollLeft = expand.scrollWidth;
      expand.scrollTop = expand.scrollHeight;
    };

    var checkTriggers = function checkTriggers(element) {
      return (
        element.offsetWidth != element.__resizeLast__.width ||
        element.offsetHeight != element.__resizeLast__.height
      );
    };

    var scrollListener = function scrollListener(e) {
      // Don't measure (which forces) reflow for scrolls that happen inside of children!
      if (
        e.target.className.indexOf("contract-trigger") < 0 &&
        e.target.className.indexOf("expand-trigger") < 0
      ) {
        return;
      }

      var element = this;
      resetTriggers(this);
      if (this.__resizeRAF__) {
        cancelFrame(this.__resizeRAF__);
      }
      this.__resizeRAF__ = requestFrame(function () {
        if (checkTriggers(element)) {
          element.__resizeLast__.width = element.offsetWidth;
          element.__resizeLast__.height = element.offsetHeight;
          element.__resizeListeners__.forEach(function (fn) {
            fn.call(element, e);
          });
        }
      });
    };

    /* Detect CSS Animations support to detect element display/re-attach */
    var animation = false,
      keyframeprefix = "",
      animationstartevent = "animationstart",
      domPrefixes = "Webkit Moz O ms".split(" "),
      startEvents = "webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(
        " "
      ),
      pfx = "";
    {
      var elm = document.createElement("fakeelement");
      if (elm.style.animationName !== undefined) {
        animation = true;
      }

      if (animation === false) {
        for (var i = 0; i < domPrefixes.length; i++) {
          if (elm.style[domPrefixes[i] + "AnimationName"] !== undefined) {
            pfx = domPrefixes[i];
            keyframeprefix = "-" + pfx.toLowerCase() + "-";
            animationstartevent = startEvents[i];
            animation = true;
            break;
          }
        }
      }
    }

    var animationName = "resizeanim";
    var animationKeyframes =
      "@" +
      keyframeprefix +
      "keyframes " +
      animationName +
      " { from { opacity: 0; } to { opacity: 0; } } ";
    var animationStyle =
      keyframeprefix + "animation: 1ms " + animationName + "; ";
  }

  var createStyles = function createStyles(doc) {
    if (!doc.getElementById("detectElementResize")) {
      //opacity:0 works around a chrome bug https://code.google.com/p/chromium/issues/detail?id=286360
      var css =
          (animationKeyframes ? animationKeyframes : "") +
          ".resize-triggers { " +
          (animationStyle ? animationStyle : "") +
          "visibility: hidden; opacity: 0; } " +
          '.resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; z-index: -1; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',
        head = doc.head || doc.getElementsByTagName("head")[0],
        style = doc.createElement("style");

      style.id = "detectElementResize";
      style.type = "text/css";

      if (nonce != null) {
        style.setAttribute("nonce", nonce);
      }

      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(doc.createTextNode(css));
      }

      head.appendChild(style);
    }
  };

  var addResizeListener = function addResizeListener(element, fn) {
    if (attachEvent) {
      element.attachEvent("onresize", fn);
    } else {
      if (!element.__resizeTriggers__) {
        var doc = element.ownerDocument;
        var elementStyle = _window.getComputedStyle(element);
        if (elementStyle && elementStyle.position == "static") {
          element.style.position = "relative";
        }
        createStyles(doc);
        element.__resizeLast__ = {};
        element.__resizeListeners__ = [];
        (element.__resizeTriggers__ = doc.createElement("div")).className =
          "resize-triggers";
        element.__resizeTriggers__.innerHTML =
          '<div class="expand-trigger"><div></div></div>' +
          '<div class="contract-trigger"></div>';
        element.appendChild(element.__resizeTriggers__);
        resetTriggers(element);
        element.addEventListener("scroll", scrollListener, true);

        /* Listen for a css animation to detect element display/re-attach */
        if (animationstartevent) {
          element.__resizeTriggers__.__animationListener__ = function animationListener(
            e
          ) {
            if (e.animationName == animationName) {
              resetTriggers(element);
            }
          };
          element.__resizeTriggers__.addEventListener(
            animationstartevent,
            element.__resizeTriggers__.__animationListener__
          );
        }
      }
      element.__resizeListeners__.push(fn);
    }
  };

  var removeResizeListener = function removeResizeListener(element, fn) {
    if (attachEvent) {
      element.detachEvent("onresize", fn);
    } else {
      element.__resizeListeners__.splice(
        element.__resizeListeners__.indexOf(fn),
        1
      );
      if (!element.__resizeListeners__.length) {
        element.removeEventListener("scroll", scrollListener, true);
        if (element.__resizeTriggers__.__animationListener__) {
          element.__resizeTriggers__.removeEventListener(
            animationstartevent,
            element.__resizeTriggers__.__animationListener__
          );
          element.__resizeTriggers__.__animationListener__ = null;
        }
        try {
          element.__resizeTriggers__ = !element.removeChild(
            element.__resizeTriggers__
          );
        } catch (e) {
          // Preact compat; see developit/preact-compat/issues/228
        }
      }
    }
  };

  return {
    addResizeListener: addResizeListener,
    removeResizeListener: removeResizeListener,
  };
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = (function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();

var _extends$5 =
  Object.assign ||
  function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError(
      "Super expression must either be null or a function, not " +
        typeof superClass
    );
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true,
    },
  });
  if (superClass)
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subClass, superClass)
      : (subClass.__proto__ = superClass);
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }

  return call && (typeof call === "object" || typeof call === "function")
    ? call
    : self;
};

var AutoSizer = (function (_React$PureComponent) {
  inherits(AutoSizer, _React$PureComponent);

  function AutoSizer() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, AutoSizer);

    for (
      var _len = arguments.length, args = Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key];
    }

    return (
      (_ret =
        ((_temp =
          ((_this = possibleConstructorReturn(
            this,
            (_ref =
              AutoSizer.__proto__ ||
              Object.getPrototypeOf(AutoSizer)).call.apply(
              _ref,
              [this].concat(args)
            )
          )),
          _this)),
        (_this.state = {
          height: _this.props.defaultHeight || 0,
          width: _this.props.defaultWidth || 0,
        }),
        (_this._onResize = function () {
          var _this$props = _this.props,
            disableHeight = _this$props.disableHeight,
            disableWidth = _this$props.disableWidth,
            onResize = _this$props.onResize;

          if (_this._parentNode) {
            // Guard against AutoSizer component being removed from the DOM immediately after being added.
            // This can result in invalid style values which can result in NaN values if we don't handle them.
            // See issue #150 for more context.

            var _height = _this._parentNode.offsetHeight || 0;
            var _width = _this._parentNode.offsetWidth || 0;

            var _style = window.getComputedStyle(_this._parentNode) || {};
            var paddingLeft = parseInt(_style.paddingLeft, 10) || 0;
            var paddingRight = parseInt(_style.paddingRight, 10) || 0;
            var paddingTop = parseInt(_style.paddingTop, 10) || 0;
            var paddingBottom = parseInt(_style.paddingBottom, 10) || 0;

            var newHeight = _height - paddingTop - paddingBottom;
            var newWidth = _width - paddingLeft - paddingRight;

            if (
              (!disableHeight && _this.state.height !== newHeight) ||
              (!disableWidth && _this.state.width !== newWidth)
            ) {
              _this.setState({
                height: _height - paddingTop - paddingBottom,
                width: _width - paddingLeft - paddingRight,
              });

              onResize({ height: _height, width: _width });
            }
          }
        }),
        (_this._setRef = function (autoSizer) {
          _this._autoSizer = autoSizer;
        }),
        _temp)),
      possibleConstructorReturn(_this, _ret)
    );
  }

  createClass(AutoSizer, [
    {
      key: "componentDidMount",
      value: function componentDidMount() {
        var nonce = this.props.nonce;

        if (
          this._autoSizer &&
          this._autoSizer.parentNode &&
          this._autoSizer.parentNode.ownerDocument &&
          this._autoSizer.parentNode.ownerDocument.defaultView &&
          this._autoSizer.parentNode instanceof
            this._autoSizer.parentNode.ownerDocument.defaultView.HTMLElement
        ) {
          // Delay access of parentNode until mount.
          // This handles edge-cases where the component has already been unmounted before its ref has been set,
          // As well as libraries like react-lite which have a slightly different lifecycle.
          this._parentNode = this._autoSizer.parentNode;

          // Defer requiring resize handler in order to support server-side rendering.
          // See issue #41
          this._detectElementResize = createDetectElementResize(nonce);
          this._detectElementResize.addResizeListener(
            this._parentNode,
            this._onResize
          );

          this._onResize();
        }
      },
    },
    {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        if (this._detectElementResize && this._parentNode) {
          this._detectElementResize.removeResizeListener(
            this._parentNode,
            this._onResize
          );
        }
      },
    },
    {
      key: "render",
      value: function render() {
        var _props = this.props,
          children = _props.children,
          className = _props.className,
          disableHeight = _props.disableHeight,
          disableWidth = _props.disableWidth,
          style = _props.style;
        var _state = this.state,
          height = _state.height,
          width = _state.width;

        // Outer div should not force width/height since that may prevent containers from shrinking.
        // Inner component should overflow and use calculated width/height.
        // See issue #68 for more information.

        var outerStyle = { overflow: "visible" };
        var childParams = {};

        // Avoid rendering children before the initial measurements have been collected.
        // At best this would just be wasting cycles.
        var bailoutOnChildren = false;

        if (!disableHeight) {
          if (height === 0) {
            bailoutOnChildren = true;
          }
          outerStyle.height = 0;
          childParams.height = height;
        }

        if (!disableWidth) {
          if (width === 0) {
            bailoutOnChildren = true;
          }
          outerStyle.width = 0;
          childParams.width = width;
        }

        return createElement(
          "div",
          {
            className: className,
            ref: this._setRef,
            style: _extends$5({}, outerStyle, style),
          },
          !bailoutOnChildren && children(childParams)
        );
      },
    },
  ]);
  return AutoSizer;
})(PureComponent);

AutoSizer.defaultProps = {
  onResize: function onResize() {},
  disableHeight: false,
  disableWidth: false,
  style: {},
};

/**
 * 1. Color
 * 2. Legends
 * 3. Margin
 * 4. Point Label
 * 5. Tooltip
 * 6. Defs
 * 7. Fills
 * 8. Enable Area
 */
/*
  Remove this after using from the library
*/
function _objectSpread$4$2(target, options) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(Object(source));
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(
        Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        })
      );
    }
    ownKeys.forEach(function (key) {
      _defineProperty$5$2(target, key, source[key]);
    });
  }
  return target;
}
function _defineProperty$5$2(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function linearGradientDef(id, colors) {
  var options =
    arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return _objectSpread$4$2(
    {
      id: id,
      type: "linearGradient",
      colors: colors,
    },
    options
  );
}
var LineChart = function (_a) {
  var meta = _a.meta,
    margin = _a.margin,
    _b = _a.colors,
    colors = _b === void 0 ? ["#3498db"] : _b,
    _c = _a.legends,
    legends =
      _c === void 0
        ? {
            x: "",
            y: "",
          }
        : _c,
    pointLabel = _a.pointLabel,
    toolTip = _a.toolTip,
    _d = _a.markerTextStyles,
    markerTextStyles = _d === void 0 ? [] : _d,
    _e = _a.markerLineStyles,
    markerLineStyles = _e === void 0 ? [] : _e,
    defs = _a.defs,
    fill = _a.fill,
    _f = _a.enableArea,
    enableArea = _f === void 0 ? false : _f,
    _g = _a.formatAxis,
    formatAxis = _g === void 0 ? { x: null, y: null } : _g,
    _h = _a.scale,
    scale =
      _h === void 0
        ? {
            x: undefined,
            y: undefined,
          }
        : _h;
  var chartData = meta.chartData,
    _j = meta.markers,
    markers = _j === void 0 ? [] : _j,
    minValues = meta.minValues,
    maxValues = meta.maxValues,
    axisLabels = meta.axisLabels,
    _k = meta.noOfLabels,
    noOfLabels =
      _k === void 0
        ? {
            x: 1,
            y: 1,
          }
        : _k;
  /**
   * Marker formatting with Default values
   */
  var markersList = [];
  var defaultLineStyle = {
    stroke: "#111",
    strokeWidth: 1,
    strokeDasharray: 4,
    opacity: 0.8,
  };
  var defaultTextStyle = {
    fontSize: 10,
  };
  for (var i = 0; i < markers.length; i++) {
    if (markers[i].markerLabel) {
      markersList.push({
        axis: markers[i].axis || "x",
        value: markers[i][markers[i].axis || "x"],
        lineStyle: markerLineStyles[i] || defaultLineStyle,
        textStyle: markerTextStyles[i] || defaultTextStyle,
        legend: markers[i].pointLabel
          ? markers[i].pointLabel
          : markers[i].markerLabel,
      });
    }
  }
  /**
   * Legends
   */
  var defaultLegendsConfig;
  defaultLegendsConfig = [
    {
      anchor: "bottom",
      direction: "row",
      justify: false,
      translateX: 0,
      translateY: 80,
      itemsSpacing: 0,
      itemDirection: "left-to-right",
      itemWidth: 80,
      itemHeight: 20,
      itemOpacity: 0.75,
      symbolSize: 12,
      symbolShape: "circle",
      symbolBorderColor: "rgba(0, 0, 0, .5)",
      effects: [
        {
          on: "hover",
          style: {
            itemBackground: "rgba(0, 0, 0, .03)",
            itemOpacity: 1,
          },
        },
      ],
    },
  ];
  // Convert Defs to Nivo's Defs
  var defsList = [];
  for (var i = 0; i < defs.length; i++) {
    defsList.push(linearGradientDef(defs[i].name, defs[i].styles));
  }
  /**
   * Transform axisLabels
   */
  var xLabels = [];
  for (var i = 0; i < axisLabels.x.length; i = i + noOfLabels.x) {
    xLabels.push(axisLabels.x[i]);
  }
  // If the last item is not already added, add it
  if (xLabels[xLabels.length - 1] !== axisLabels.x[axisLabels.x.length - 1]) {
    xLabels.push(axisLabels.x[axisLabels.x[axisLabels.x.length - 1]]);
  }
  var yLabels = [];
  for (var i = 0; i < axisLabels.y.length; i = i + noOfLabels.y) {
    yLabels.push(axisLabels.y[i]);
  }
  // If the last item is not already added, add it
  if (yLabels[yLabels.length - 1] !== axisLabels.y[axisLabels.y.length - 1]) {
    yLabels.push(axisLabels.y[axisLabels.y[axisLabels.y.length - 1]]);
  }
  return React.createElement(AutoSizer, null, function (_a) {
    var height = _a.height,
      width = _a.width;
    return React.createElement(Line$1$1, {
      height: height,
      width: width,
      data: chartData,
      margin: margin,
      xScale: __assign({}, scale.x) || {
        type: "linear",
        min: minValues.x,
        max: maxValues.x,
      },
      yScale: __assign(__assign({}, scale.y), {
        min: minValues.y,
        max: maxValues.y,
      }) || {
        type: "linear",
        min: minValues.y,
        max: maxValues.y,
        stacked: false,
        reversed: false,
      },
      curve: "monotoneX",
      axisTop: null,
      axisRight: null,
      colors: colors,
      axisLeft: {
        tickValues: yLabels,
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: legends.y || "",
        legendOffset: -45,
        legendPosition: "middle",
        format: !!formatAxis.y
          ? formatAxis.y
          : function (value) {
              return value;
            },
      },
      axisBottom: {
        tickValues: xLabels,
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: legends.x || "",
        legendOffset: 36,
        legendPosition: "middle",
        format: !!formatAxis.x
          ? formatAxis.x
          : function (value) {
              return value;
            },
      },
      //enableGridX={false}
      //enableGridY={false}
      gridXValues: [minValues.x],
      pointSize: 6,
      pointColor: { theme: "background" },
      pointBorderWidth: 2,
      enablePointLabel: true,
      pointBorderColor: { from: "serieColor" },
      pointLabel: pointLabel,
      pointLabelYOffset: -24,
      useMesh: true,
      animate: true,
      enableArea: enableArea,
      enableSlices: "x",
      sliceTooltip: toolTip,
      defs: defsList,
      fill: fill,
      markers: markersList,
      legends: defaultLegendsConfig,
    });
  });
};

var Area = function () {};

var css_248z$c =
  '@import url("https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;500;700&family=Roboto:wght@300;400;500&display=swap");\n/*\n0 - 400px:    Mini - phone - xs\n400 - 600px:    Phone - sm\n600 - 900px:    Tablet portrait - md\n900 - 1200px:   Tablet landscape - lg\n[1200 - 1800] is where our normal styles apply\n1800px + :      Big desktop - xl\n$breakpoint arguement choices:\n- mini-phone\n- phone\n- tab-port\n- tab-land\n- big-desktop\nORDER: Base + typography > general layout + grid > page layout > components\n1em = 16px\n*/\n*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  -webkit-box-sizing: inherit;\n          box-sizing: inherit;\n  position: relative; }\n\nol,\nul,\ndl {\n  margin: 0; }\n\nhtml {\n  font-size: 62.5%;\n  scroll-behavior: smooth; }\n  @media only screen and (max-width: 75em) {\n    html {\n      font-size: 56.25%; } }\n  @media only screen and (max-width: 56.25em) {\n    html {\n      font-size: 50%; } }\n  @media only screen and (max-width: 25em) {\n    html {\n      font-size: 37.5%; } }\n  @media only screen and (min-width: 112.5em) {\n    html {\n      font-size: 75%; } }\n\nbody {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  overflow-x: hidden !important;\n  -webkit-font-smoothing: antialiased;\n  color: #333;\n  font-family: "Roboto", sans-serif;\n  font-size: 1.6rem; }\n  @media only screen and (max-width: 75em) {\n    body {\n      font-size: 1.77rem; } }\n  @media only screen and (max-width: 56.25em) {\n    body {\n      font-size: 2rem;\n      padding: 0; } }\n  @media only screen and (max-width: 25em) {\n    body {\n      font-size: 2rem; } }\n  @media only screen and (min-width: 112.5em) {\n    body {\n      font-size: 1.3rem; } }\n\nimg {\n  width: 100%; }\n\nfigure {\n  margin: 0; }\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  margin: 0;\n  color: inherit;\n  font-size: inherit;\n  font-family: inherit;\n  line-height: inherit; }\n\ntextarea {\n  -ms-touch-action: manipulation;\n      touch-action: manipulation;\n  -webkit-appearance: none;\n  overflow: auto;\n  resize: vertical; }\n\na {\n  text-decoration: none;\n  color: #333; }\n\np {\n  margin: 0; }\n\n.u-center-text {\n  text-align: center !important; }\n\n.u-center-right {\n  text-align: right !important; }\n\n.u-center-flex-cross {\n  -ms-flex-item-align: center;\n      align-self: center; }\n\n.u-margin-bottom-nano {\n  margin-bottom: 1rem !important; }\n\n.u-margin-bottom-small {\n  margin-bottom: 1.5rem !important; }\n\n.u-margin-bottom-medium {\n  margin-bottom: 3rem !important; }\n  @media only screen and (max-width: 56.25em) {\n    .u-margin-bottom-medium {\n      margin-bottom: 3rem !important; } }\n\n.u-margin-bottom-large {\n  margin-bottom: 6rem !important; }\n  @media only screen and (max-width: 56.25em) {\n    .u-margin-bottom-large {\n      margin-bottom: 6rem !important; } }\n\n.u-margin-bottom-big {\n  margin-bottom: 8rem !important; }\n  @media only screen and (max-width: 56.25em) {\n    .u-margin-bottom-big {\n      margin-bottom: 8rem !important; } }\n\n.u-margin-bottom-huge {\n  margin-bottom: 10rem !important; }\n\n.u-margin-top-big {\n  margin-top: 8rem !important; }\n\n.u-margin-top-huge {\n  margin-top: 10rem !important; }\n\n/*\n* Text utilities\n*/\n.bold {\n  font-weight: 700; }\n\n.regular {\n  font-weight: 400; }\n\n@-webkit-keyframes rotate {\n  0% {\n    -webkit-transform: rotateZ(0);\n            transform: rotateZ(0); }\n  50% {\n    -webkit-transform: rotateZ(45deg);\n            transform: rotateZ(45deg); }\n  100% {\n    -webkit-transform: rotateZ(360deg);\n            transform: rotateZ(360deg); } }\n\n@keyframes rotate {\n  0% {\n    -webkit-transform: rotateZ(0);\n            transform: rotateZ(0); }\n  50% {\n    -webkit-transform: rotateZ(45deg);\n            transform: rotateZ(45deg); }\n  100% {\n    -webkit-transform: rotateZ(360deg);\n            transform: rotateZ(360deg); } }\n\n.slider {\n  overflow: hidden;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  max-width: 50rem;\n  width: 100%;\n  height: 39; }\n  .slider img {\n    width: 100%;\n    height: 100%;\n    -o-object-fit: contain;\n       object-fit: contain; }\n  .slider__buttons {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    display: none; }\n    .slider__buttons > * {\n      cursor: pointer;\n      -webkit-transition: all 0.2s;\n      transition: all 0.2s;\n      width: 2.4rem;\n      height: 2.4rem;\n      border: 1px solid #0e63f4;\n      background-color: #0e63f4;\n      border-radius: 50%;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center; }\n      .slider__buttons > * svg {\n        width: 1.2rem;\n        height: 1.2rem;\n        fill: #fff; }\n        @media only screen and (max-width: 37.5em) {\n          .slider__buttons > * svg {\n            width: 1.6rem;\n            height: 1.6rem; } }\n      @media only screen and (max-width: 37.5em) {\n        .slider__buttons > * {\n          width: 3rem;\n          height: 3rem; } }\n      @media (hover: hover) {\n        .slider__buttons > *:hover, .slider__buttons > *:active, .slider__buttons > *:focus {\n          background-color: #f8faff; }\n          .slider__buttons > *:hover svg, .slider__buttons > *:active svg, .slider__buttons > *:focus svg {\n            fill: #0e63f4; } }\n    .slider__buttons > *:first-child {\n      margin-right: 1rem; }\n  .slider__main {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: nowrap;\n        flex-wrap: nowrap;\n    -webkit-transition: all 0.5s;\n    transition: all 0.5s;\n    -webkit-transform: translate(0);\n            transform: translate(0);\n    width: 100%;\n    max-width: 50rem;\n    height: 35rem;\n    overflow: hidden; }\n    .slider__main > * {\n      -ms-flex-negative: 0;\n          flex-shrink: 0;\n      width: 100%;\n      height: 100%;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      text-align: center;\n      line-height: 1.6; }\n      .slider__main > * img {\n        width: 40rem;\n        height: 25rem;\n        -o-object-fit: contain;\n           object-fit: contain; }\n      .slider__main > * > *:not(:last-child) {\n        margin-bottom: 1rem; }\n    @media only screen and (max-width: 56.25em) {\n      .slider__main.row [class^="col-"]:not(:last-child) {\n        margin-bottom: 0; } }\n  .slider__heading {\n    font-size: 2.2rem;\n    font-weight: 500; }\n  .slider .slider__img {\n    width: 100%;\n    height: auto;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n  .slider__desc {\n    line-height: 1.6;\n    font-size: 1.4rem;\n    font-weight: 100;\n    width: 85%; }\n  .slider .translate--left {\n    -webkit-transform: translate(100%);\n            transform: translate(100%); }\n    @media only screen and (max-width: 56.25em) {\n      .slider .translate--left {\n        -webkit-transform: translateX(100%);\n                transform: translateX(100%); } }\n  .slider .translate--right {\n    -webkit-transform: translate(100%);\n            transform: translate(100%); }\n    @media only screen and (max-width: 56.25em) {\n      .slider .translate--right {\n        -webkit-transform: translateX(-100%);\n                transform: translateX(-100%); } }\n';
styleInject(css_248z$c);

var sliderRef = null;
var slideTimer = null;
var Slider = /** @class */ (function (_super) {
  __extends(Slider, _super);
  function Slider(props) {
    var _this = _super.call(this, props) || this;
    _this.onTransitionEnd = function (direction) {
      var slider = sliderRef.current;
      if (!slider) {
        return;
      }
      if (direction === "right") {
        slider.appendChild(slider.firstElementChild);
      } else if (direction === "left") {
        slider.prepend(slider.lastElementChild);
      }
      slider.style.transition = "none";
      slider.classList.remove("translate--left");
      slider.classList.remove("translate--right");
      slideTimer = setTimeout(function () {
        slider.style.transition = "all 0.5s";
        _this.setState({ sliding: false });
      }, 100);
    };
    _this.slide = function (direction) {
      var slider = sliderRef.current;
      if (_this.state.sliding === true) {
        return;
      }
      if (!slider) {
        return;
      }
      _this.setState({ sliding: true });
      if (direction === "right") {
        slider.classList.add("translate--right");
        slideTimer = setTimeout(function () {
          return _this.onTransitionEnd(direction);
        }, 600);
      } else if (direction === "left") {
        slider.style.transition = "none";
        slider.classList.add("translate--right");
        slider.prepend(slider.lastElementChild);
        // Clean Up
        slideTimer = setTimeout(function () {
          slider.style.transition = "all 0.5s";
          slider.classList.remove("translate--right");
          slideTimer = setTimeout(function () {
            _this.setState({ sliding: false });
          }, 600);
        });
      }
    };
    _this.onHover = function () {
      clearInterval(_this.state.timer);
    };
    _this.onLeave = function () {
      _this.setState({
        timer: setInterval(function () {
          _this.slide("right");
        }, 5000),
      });
    };
    sliderRef = React.createRef();
    _this.state = {
      sliding: false,
      timer: null,
      data: props.data,
    };
    return _this;
  }
  Slider.prototype.componentDidMount = function () {
    var _this = this;
    this.setState({
      timer: setInterval(function () {
        _this.slide("right");
      }, 5000),
    });
  };
  Slider.prototype.componentWillUnmount = function () {
    clearInterval(this.state.timer);
    clearTimeout(slideTimer);
  };
  Slider.prototype.render = function () {
    var _this = this;
    return React.createElement(
      "div",
      { className: "slider" },
      React.createElement(
        "div",
        { className: "slider__main row", ref: sliderRef },
        _.map(this.state.data, function (element, idx) {
          return React.createElement(
            "div",
            {
              className: "slider__single",
              onMouseOver: _this.onHover,
              onMouseOut: _this.onLeave,
            },
            React.createElement(
              "div",
              { className: "slider__img" },
              element.img
            ),
            React.createElement(
              "div",
              { className: "slider__heading" },
              element.heading
            ),
            React.createElement(
              "div",
              { className: "slider__desc" },
              element.desc
            )
          );
        })
      ),
      React.createElement(
        "div",
        { className: "slider__buttons" },
        React.createElement(
          "div",
          {
            className: "slider__left",
            onClick: function (e) {
              return _this.slide("left");
            },
            onMouseOver: this.onHover,
            onMouseOut: this.onLeave,
          },
          React.createElement(
            "svg",
            { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
            React.createElement("path", {
              d:
                "M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z",
            })
          )
        ),
        React.createElement(
          "div",
          {
            className: "slider__right",
            onClick: function (e) {
              return _this.slide("right");
            },
            onMouseOver: this.onHover,
            onMouseOut: this.onLeave,
          },
          React.createElement(
            "svg",
            { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
            React.createElement("path", {
              d: "M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z",
            })
          )
        )
      )
    );
  };
  return Slider;
})(React.Component);

var BlockProgress = function (props) {
  var _a = props.radius,
    radius = _a === void 0 ? 120 : _a,
    _b = props.strokeWidth,
    strokeWidth = _b === void 0 ? 4 : _b,
    progressPercentage = props.progressPercentage,
    _c = props.title,
    title = _c === void 0 ? "" : _c,
    _d = props.pointsType,
    pointsType = _d === void 0 ? "point" : _d,
    currentLevel = props.currentLevel,
    _e = props.flavour,
    flavour = _e === void 0 ? "default" : _e;
  var normalizedRadius = radius - strokeWidth * 2;
  var circumference = normalizedRadius * 2 * Math.PI;
  var strokeDashoffset =
    circumference - (progressPercentage / 100) * circumference;
  return React.createElement(
    "div",
    { className: "progress-block progress-block--" + flavour },
    React.createElement(
      "div",
      {
        className: "progress-block__circle",
        style: { height: radius * 2 + "px" },
      },
      React.createElement(
        "svg",
        { height: radius * 2, width: radius * 2 },
        React.createElement("circle", {
          fill: "transparent",
          strokeWidth: strokeWidth,
          strokeDasharray: circumference + " " + circumference,
          style: { strokeDashoffset: strokeDashoffset },
          "stroke-width": strokeWidth,
          r: normalizedRadius,
          cx: radius,
          cy: radius,
        })
      ),
      React.createElement(
        "svg",
        {
          height: radius * 2,
          width: radius * 2,
          className: "progress-block__inner-circle",
        },
        React.createElement("circle", {
          fill: "transparent",
          strokeWidth: strokeWidth,
          style: { strokeDashoffset: strokeDashoffset },
          "stroke-width": strokeWidth,
          r: normalizedRadius,
          cx: radius,
          cy: radius,
        })
      ),
      React.createElement(
        "span",
        { className: "progress-block__circle-text" },
        React.createElement("span", null, progressPercentage, " %"),
        flavour !== "small"
          ? React.createElement("span", null, "Level ", currentLevel)
          : React.createElement(React.Fragment, null)
      )
    ),
    React.createElement(
      "div",
      { className: "progress-block__meta" },
      React.createElement("div", { className: "progress-block__title" }, title),
      flavour !== "small"
        ? React.createElement(
            "div",
            { className: "progress-block__next-level" },
            100 - progressPercentage,
            " more",
            progressPercentage >= 99
              ? " " + pointsType + " "
              : " " + pointsType + "s ",
            " ",
            "to Level ",
            currentLevel + 1
          )
        : React.createElement(React.Fragment, null)
    )
  );
};

var css_248z$d =
  '@import url("https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;500;700&family=Roboto:wght@300;400;500&display=swap");\n/*\n0 - 400px:    Mini - phone - xs\n400 - 600px:    Phone - sm\n600 - 900px:    Tablet portrait - md\n900 - 1200px:   Tablet landscape - lg\n[1200 - 1800] is where our normal styles apply\n1800px + :      Big desktop - xl\n$breakpoint arguement choices:\n- mini-phone\n- phone\n- tab-port\n- tab-land\n- big-desktop\nORDER: Base + typography > general layout + grid > page layout > components\n1em = 16px\n*/\n*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  -webkit-box-sizing: inherit;\n          box-sizing: inherit;\n  position: relative; }\n\nol,\nul,\ndl {\n  margin: 0; }\n\nhtml {\n  font-size: 62.5%;\n  scroll-behavior: smooth; }\n  @media only screen and (max-width: 75em) {\n    html {\n      font-size: 56.25%; } }\n  @media only screen and (max-width: 56.25em) {\n    html {\n      font-size: 50%; } }\n  @media only screen and (max-width: 25em) {\n    html {\n      font-size: 37.5%; } }\n  @media only screen and (min-width: 112.5em) {\n    html {\n      font-size: 75%; } }\n\nbody {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  overflow-x: hidden !important;\n  -webkit-font-smoothing: antialiased;\n  color: #333;\n  font-family: "Roboto", sans-serif;\n  font-size: 1.6rem; }\n  @media only screen and (max-width: 75em) {\n    body {\n      font-size: 1.77rem; } }\n  @media only screen and (max-width: 56.25em) {\n    body {\n      font-size: 2rem;\n      padding: 0; } }\n  @media only screen and (max-width: 25em) {\n    body {\n      font-size: 2rem; } }\n  @media only screen and (min-width: 112.5em) {\n    body {\n      font-size: 1.3rem; } }\n\nimg {\n  width: 100%; }\n\nfigure {\n  margin: 0; }\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  margin: 0;\n  color: inherit;\n  font-size: inherit;\n  font-family: inherit;\n  line-height: inherit; }\n\ntextarea {\n  -ms-touch-action: manipulation;\n      touch-action: manipulation;\n  -webkit-appearance: none;\n  overflow: auto;\n  resize: vertical; }\n\na {\n  text-decoration: none;\n  color: #333; }\n\np {\n  margin: 0; }\n\n.u-center-text {\n  text-align: center !important; }\n\n.u-center-right {\n  text-align: right !important; }\n\n.u-center-flex-cross {\n  -ms-flex-item-align: center;\n      align-self: center; }\n\n.u-margin-bottom-nano {\n  margin-bottom: 1rem !important; }\n\n.u-margin-bottom-small {\n  margin-bottom: 1.5rem !important; }\n\n.u-margin-bottom-medium {\n  margin-bottom: 3rem !important; }\n  @media only screen and (max-width: 56.25em) {\n    .u-margin-bottom-medium {\n      margin-bottom: 3rem !important; } }\n\n.u-margin-bottom-large {\n  margin-bottom: 6rem !important; }\n  @media only screen and (max-width: 56.25em) {\n    .u-margin-bottom-large {\n      margin-bottom: 6rem !important; } }\n\n.u-margin-bottom-big {\n  margin-bottom: 8rem !important; }\n  @media only screen and (max-width: 56.25em) {\n    .u-margin-bottom-big {\n      margin-bottom: 8rem !important; } }\n\n.u-margin-bottom-huge {\n  margin-bottom: 10rem !important; }\n\n.u-margin-top-big {\n  margin-top: 8rem !important; }\n\n.u-margin-top-huge {\n  margin-top: 10rem !important; }\n\n/*\n* Text utilities\n*/\n.bold {\n  font-weight: 700; }\n\n.regular {\n  font-weight: 400; }\n\n@-webkit-keyframes rotate {\n  0% {\n    -webkit-transform: rotateZ(0);\n            transform: rotateZ(0); }\n  50% {\n    -webkit-transform: rotateZ(45deg);\n            transform: rotateZ(45deg); }\n  100% {\n    -webkit-transform: rotateZ(360deg);\n            transform: rotateZ(360deg); } }\n\n@keyframes rotate {\n  0% {\n    -webkit-transform: rotateZ(0);\n            transform: rotateZ(0); }\n  50% {\n    -webkit-transform: rotateZ(45deg);\n            transform: rotateZ(45deg); }\n  100% {\n    -webkit-transform: rotateZ(360deg);\n            transform: rotateZ(360deg); } }\n\n.progress-line {\n  max-width: 50rem;\n  max-height: 13rem;\n  height: 100%;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  font-size: 1.2rem;\n  color: #545454;\n  padding: 0 4rem; }\n  .progress-line__heading {\n    font-size: 1.4rem;\n    margin-bottom: 1rem; }\n  .progress-line__bar {\n    width: 100%;\n    height: 1.2rem;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    margin-bottom: 1rem; }\n  .progress-line__bar-left {\n    background: #0e63f4;\n    border-top-left-radius: 1rem;\n    border-bottom-left-radius: 1rem; }\n  .progress-line__bar-right {\n    border: 1px solid rgba(14, 99, 244, 0.1);\n    background: rgba(14, 99, 244, 0.1);\n    border-top-right-radius: 1rem;\n    border-bottom-right-radius: 1rem; }\n  .progress-line__meta {\n    width: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  .progress-line__currentLevel, .progress-line__nextLevel {\n    font-weight: 600; }\n  .progress-line__nextLevel {\n    margin-left: 5px; }\n\n.progress-block {\n  background-color: #fafafa;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  min-height: 24rem;\n  max-height: 30rem;\n  padding: 4rem;\n  min-width: 24rem;\n  width: 100%;\n  max-width: 32rem;\n  position: relative;\n  color: #545454;\n  text-align: center; }\n  .progress-block--small {\n    min-width: 12rem;\n    min-height: 14rem;\n    max-height: 14rem;\n    max-width: 12rem;\n    padding: 2rem; }\n  .progress-block circle {\n    -webkit-transition: stroke-dashoffset 0.35s;\n    transition: stroke-dashoffset 0.35s;\n    -webkit-transform: rotate(-90deg);\n            transform: rotate(-90deg);\n    -webkit-transform-origin: 50% 50%;\n            transform-origin: 50% 50%;\n    stroke: #0e63f4;\n    fill: transparent; }\n  .progress-block__inner-circle {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%); }\n    .progress-block__inner-circle circle {\n      -webkit-transition: stroke-dashoffset 0.35s;\n      transition: stroke-dashoffset 0.35s;\n      -webkit-transform: rotate(-90deg);\n              transform: rotate(-90deg);\n      -webkit-transform-origin: 50% 50%;\n              transform-origin: 50% 50%;\n      stroke: rgba(14, 99, 244, 0.2);\n      fill: transparent; }\n  .progress-block__circle {\n    position: relative;\n    margin-bottom: 1rem; }\n  .progress-block__circle-text {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    font-size: 1.6rem;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n    .progress-block__circle-text span:first-child {\n      font-weight: 600;\n      margin-bottom: 5px; }\n    .progress-block__circle-text span:last-child {\n      font-weight: 100;\n      font-size: 1.2rem; }\n  .progress-block--small .progress-block__circle-text span:first-child {\n    font-weight: 600;\n    margin-bottom: 0px;\n    font-size: 1.1rem; }\n  .progress-block__title {\n    font-size: 2rem;\n    margin-bottom: 1rem; }\n  .progress-block--small .progress-block__title {\n    font-size: 1.2rem;\n    margin-bottom: 1rem; }\n  .progress-block__next-level {\n    font-size: 1.2rem;\n    font-weight: 100; }\n';
styleInject(css_248z$d);

var LineProgress = function (_a) {
  var _b = _a.currentLevel,
    currentLevel = _b === void 0 ? 0 : _b,
    progressPercentage = _a.progressPercentage,
    pointsType = _a.pointsType,
    title = _a.title;
  var pointsToNextLevel = 100 - progressPercentage;
  return React.createElement(
    "div",
    { className: "progress-line" },
    React.createElement("div", { className: "progress-line__heading" }, title),
    React.createElement(
      "div",
      { className: "progress-line__bar" },
      React.createElement("span", {
        style: { width: progressPercentage + "%" },
        className: "progress-line__bar-left",
      }),
      React.createElement("span", {
        style: { width: pointsToNextLevel + "%" },
        className: "progress-line__bar-right",
      })
    ),
    React.createElement(
      "div",
      { className: "progress-line__meta" },
      React.createElement(
        "span",
        { className: "progress-line__currentLevel" },
        "Level ",
        currentLevel
      ),
      " ",
      React.createElement(
        "div",
        null,
        React.createElement(
          "span",
          null,
          pointsToNextLevel,
          " more ",
          pointsType,
          pointsToNextLevel === 1 ? "" : "s",
          " to"
        ),
        React.createElement(
          "span",
          { className: "progress-line__nextLevel" },
          "Level ",
          currentLevel + 1
        )
      )
    )
  );
};

var Progress = function (props) {
  switch (props.type) {
    case "block":
      return React.createElement(BlockProgress, __assign({}, props));
    case "line":
    default:
      return React.createElement(LineProgress, __assign({}, props));
  }
};

export {
  Area,
  Button,
  Card,
  Col,
  Dimmer,
  ErrMsg,
  File,
  H1,
  H2,
  H3,
  H4,
  Input,
  Li,
  LineChart as Line,
  Loading,
  Menu,
  MenuItem,
  Modal,
  Nav,
  NavActions,
  NavMenu,
  Notification,
  OList,
  Paragraph,
  Progress,
  Radio,
  Row,
  Sidebar,
  Slider,
  Table,
  Text,
  UList,
};
//# sourceMappingURL=index.esm.js.map
