"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ActionHandler = function () {
  function ActionHandler(initialState) {
    _classCallCheck(this, ActionHandler);

    this.initialState = initialState;
    this.actions = [];
  }

  _createClass(ActionHandler, [{
    key: "addCase",
    value: function addCase(type, reducer) {
      this.actions = [].concat(_toConsumableArray(this.actions), [{
        type: type, reducer: reducer
      }]);
    }
  }, {
    key: "create",
    value: function create() {
      var initialState = this.initialState,
          actions = this.actions;

      return function () {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
        var action = arguments[1];
        var type = action.type;

        var find = actions.find(function (item) {
          if (item.type === type) {
            return true;
          }
          return false;
        });
        if (find) {
          return find.reducer(state, action);
        } else {
          return state;
        }
      };
    }
  }]);

  return ActionHandler;
}();

exports.default = ActionHandler;