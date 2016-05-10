(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Actor = function Actor(name, lastName, age) {
    _classCallCheck(this, Actor);

    this.name = name;
    this.lastName = lastName;
    this.age = age;
};

exports.default = Actor;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventEmitter = function () {
  function EventEmitter() {
    _classCallCheck(this, EventEmitter);

    this.events = {};
  }

  _createClass(EventEmitter, [{
    key: "on",
    value: function on(event, callback) {
      // pass a callback or listener that will be executed each time a given event is triggered
      this.events[event] = callback;
    }
  }, {
    key: "emit",
    value: function emit(event) {
      // allow a class to trigger events to be consumed by other functions/objects
      this.events[event](event);
    }
  }, {
    key: "off",
    value: function off(event) {
      delete this.events[event];
    }
  }]);

  return EventEmitter;
}();

exports.default = EventEmitter;

},{}],3:[function(require,module,exports){
"use strict";

var _eventEmitter = require("src/eventEmitter");

var _eventEmitter2 = _interopRequireDefault(_eventEmitter);

var _movie = require("src/movie");

var _movie2 = _interopRequireDefault(_movie);

var _actor = require("src/actor");

var _actor2 = _interopRequireDefault(_actor);

var _social = require("src/social");

var _social2 = _interopRequireDefault(_social);

var _logger = require("src/logger");

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var theGodfather = new _movie2.default("The Godfather", 1972, "2h58m");
var marlon = new _actor2.default("Marlon", "Brando", 80);
var otherCastGF = [new _actor2.default("Al", "Pacino", 75), new _actor2.default("Diane", "Keaton", 72), new _actor2.default("Robert", "Duvall", 84)];

var pulp = new _movie2.default("Pulp Fiction", 1994, "2h34m");
var samuel = new _actor2.default("Samuel", "Jackson", 68);
var otherCastPF = [new _actor2.default("John", "Travolta", 62), new _actor2.default("Bruce", "Willis", 61), new _actor2.default("Uma", "Thurman", 46)];

var logger = new _logger2.default();
var copia = Object.assign(theGodfather, _social2.default);

theGodfather.on("play", logger.log);
theGodfather.on("pause", logger.log);
theGodfather.on("resume", logger.log);
theGodfather.emit('play');
theGodfather.emit('pause');
theGodfather.emit('resume');

copia.share('Dante');
copia.like('Dante');

theGodfather.addCast(marlon);
theGodfather.addCast(otherCastGF);
console.log(theGodfather);

pulp.addCast(samuel);
pulp.addCast(otherCastPF);
console.log(pulp);

},{"src/actor":1,"src/eventEmitter":2,"src/logger":4,"src/movie":5,"src/social":6}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Logger = function () {
    function Logger() {
        _classCallCheck(this, Logger);
    }

    _createClass(Logger, [{
        key: "log",
        value: function log(info) {
            console.log("output: The " + info + " event has been emitted");
        }
    }]);

    return Logger;
}();

exports.default = Logger;

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _eventEmitter = require("src/eventEmitter");

var _eventEmitter2 = _interopRequireDefault(_eventEmitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Movie = function (_EventEmitter) {
    _inherits(Movie, _EventEmitter);

    function Movie(title, year, duration, cast) {
        _classCallCheck(this, Movie);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Movie).call(this));

        _this.title = title;
        _this.year = year;
        _this.duration = duration;
        _this.cast = [];
        return _this;
    }

    _createClass(Movie, [{
        key: "play",
        value: function play() {
            this.emit("play");
        }
    }, {
        key: "pause",
        value: function pause() {
            this.emit("pause");
        }
    }, {
        key: "resume",
        value: function resume() {
            this.emit("resume");
        }
    }, {
        key: "addCast",
        value: function addCast(actors) {
            var thisActor = this.cast;
            if (Array.isArray(actors)) {
                actors.forEach(function (eachActor) {
                    thisActor.push(eachActor);
                });
            } else {
                thisActor.push(actors);
            }
        }
    }]);

    return Movie;
}(_eventEmitter2.default);

exports.default = Movie;

},{"src/eventEmitter":2}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var Social = {
    share: function share(friendName) {
        console.log("Share " + this.title + " with   " + friendName);
    },
    like: function like(friendName) {
        console.log(friendName + " like  " + this.title + " ");
    }
};

exports.default = Social;

},{}]},{},[3])


//# sourceMappingURL=build.js.map
