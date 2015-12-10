const NavDispatcher = require("../../src/dispatchers/nav_dispatcher");

const dispatcherHelper = require("react-jasmine").checkDispatcher;


describe("NavDispatcher", function() {

  let options = [
    {
      handler:"addingNavItems",
      source:"ADDING_NAV"
    },
    {
      handler:"changeActive",
      source:"CHANGE_ACTIVE"
    }
  ];

  dispatcherHelper(NavDispatcher, options);

});