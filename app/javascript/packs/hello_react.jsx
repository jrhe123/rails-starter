// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from "react";
import ReactDOM from "react-dom";

// if we import it, the error will show up in console
/**
  bundle.m.js:1 Uncaught TypeError: __webpack_require__.d is not a function
    at Module.<anonymous> (bundle.m.js:1:1)
    at ./node_modules/webgi/dist/examples/runtime/bundle.m.js (bundle.m.js:65120:1)
    at __webpack_require__ (bootstrap:19:1)
    at ./app/javascript/packs/hello_react.jsx (bootstrap:83:1)
    at __webpack_require__ (bootstrap:19:1)
    at bootstrap:83:1
    at bootstrap:83:1
 */
import { ViewerApp } from "webgi";

const Hello = (props) => (
  <div>
    <p>12323</p>
    <p>12323</p>
    <p>12323</p>
    <p>12323</p>
    <p>12323</p>
    <p>12323</p>
    <p>12323</p>
  </div>
);

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Hello name="React" />,
    document.body.appendChild(document.createElement("div"))
  );
});
