'use strict';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var EvenBus = function EvenBus(maxListeners) {
  var _this = this;

  _classCallCheck(this, EvenBus);

  _defineProperty(this, "on", function (type, fn) {
    var cb = _this._events.get(type);

    if (!_this._events.get(type)) {
      _this._events.set(type, fn);
    } else if (cb && typeof cb === 'function') {
      // 如果cb是函数说明只有一个监听者
      _this._events.set(type, [cb, fn]);
    } else {
      cb.push(fn);
    }

    _this.getListeners(type);
  });

  _defineProperty(this, "emit", function (type) {
    var cb;
    cb = _this._events.get(type); // 多个回调说明有多个监听

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    if (Array.isArray(cb)) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = cb[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var fn = _step.value;

          if (args.length > 0) {
            fn.apply(_this, args);
          } else {
            fn.call(_this);
          }
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
    } else {
      if (args.length > 0) {
        cb.apply(_this, args);
      } else {
        cb.call(_this);
      }
    }
  });

  _defineProperty(this, "remove", function (type) {
    if (type) {
      _this._events.delete(type);
    } else {
      _this._events.clear();
    }
  });

  _defineProperty(this, "getListeners", function (type) {
    if (type) _this._listeners++;
    if (_this._listeners > _this._maxListeners) throw "The current number of listens is greater than the maximum number";else return true;
  });

  this._events = this._events || new Map(); // 储存事件/回调键值对

  this._listeners = this._listeners || 0; // 当前监听数量

  this._maxListeners = maxListeners || 10; // 设立监听上限
} // 监听
;

module.exports = EvenBus;
