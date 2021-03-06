"use strict";

require("../stylesheets/application.scss");

var _ = require("lodash");

var React = require("react");
var ReactDom = require('react-dom');

var Touch = require("./components/touch");

var test = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem quae sint iste, eius molestias. Laboriosam architecto eaque, similique, ut tempora, commodi id veniam delectus temporibus blanditiis quas inventore. Nisi, commodi.";

function createConfigs() {
  var config = [];
  var config2 = [];
  var i = 1;
  do {
    var num = _.random(0, i);
    var name = test.substring(num, num + 10);
    var nav = { name: name, title: "Click here to go to Nav item " + i };
    if (i % 2 === 0) {
      nav.data = { id: i, additonal: "foo" + i };
    } else {
      nav.href = "#";
    }

    nav.active = i === 1;
    config.push(nav);
    var n = _.random(1, 100);
    config2.push({ name: "NavItem " + n, title: "Click here to go to Nav item " + n, href: "http://better.org.uk" });
    i++;
  } while (i < _.random(6, 12));
  console.log(config, config2);
  return { one: config, two: config2 };
}

function addNavs() {
  var config = createConfigs();
  console.log("add", config);
  ReactDom.render(React.createElement(Touch, { navitems: config.one, callback: callback }), document.getElementById('nav'));

  ReactDom.render(React.createElement(Touch, { navitems: config.two, callback: callback }), document.getElementById('nav2'));
}

function callback(name, data) {
  console.log("%j has been click", name);
  console.log(data);
}

addNavs();

var link = document.getElementById("update");

link.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("click");

  addNavs();
});
//# sourceMappingURL=application.js.map