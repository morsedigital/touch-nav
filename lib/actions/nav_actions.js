"use strict";

var NavDispatcher = require("../dispatchers/nav_dispatcher");

module.exports = {
  addingItems: function addingItems(items, id) {
    NavDispatcher.addingNavItems({
      type: "ADDING_NAV",
      nav: items,
      id: id
    });
  },

  changeActive: function changeActive(id, nav_id) {
    NavDispatcher.changeActive({
      type: "CHANGE_ACTIVE",
      nav_id: nav_id,
      id: id
    });
  },

  updateItems: function updateItems(items, id) {
    NavDispatcher.updateNavItems({
      type: "UPDATE_NAV",
      nav: items,
      id: id
    });
  }
};
//# sourceMappingURL=nav_actions.js.map