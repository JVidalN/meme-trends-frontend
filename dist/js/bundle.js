/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(5);

var iterableToArray = __webpack_require__(6);

var unsupportedIterableToArray = __webpack_require__(7);

var nonIterableSpread = __webpack_require__(8);

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(3);

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(3);

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(10);
            var content = __webpack_require__(11);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(0);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(1);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(2);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// CONCATENATED MODULE: ./src/js/navigate.js


var navigate_TabNavigation = function TabNavigation() {
  var $ = document.querySelector.bind(document);
  var html = {
    links: toConsumableArray_default()($('.buttons-page').children),
    contents: toConsumableArray_default()($('.main-container').children),
    openTab: $('[data-open]')
  };

  var hideAllDivContent = function hideAllDivContent() {
    html.contents.forEach(function (div) {
      div.style.display = 'none';
    });
  };

  var removeAllActiveClass = function removeAllActiveClass() {
    html.links.forEach(function (button) {
      button.classList.remove('active');
    });
  };

  var showCurrentTab = function showCurrentTab(id) {
    var divcontent = $("#".concat(id));
    divcontent.style.display = 'block';
  };

  var selectTab = function selectTab(event) {
    hideAllDivContent();
    removeAllActiveClass();
    var target = event.currentTarget;
    showCurrentTab(target.dataset.id);
    target.classList.add('active');
    changeUrlHistory(target.dataset.id);
  };

  var changeUrlHistory = function changeUrlHistory(tabActived) {
    if ('undefined' !== typeof window.history.pushState) {
      window.history.pushState('', '', "/#".concat(tabActived));
    } else {
      window.location.hash = tabActived;
    }
  };

  var listenForChange = function listenForChange() {
    html.links.forEach(function (button) {
      button.addEventListener('click', selectTab);
    });
  };

  var init = function init() {
    hideAllDivContent();
    listenForChange();
    html.openTab.click();
  };

  return {
    init: init
  };
};

/* harmony default export */ var js_navigate = (navigate_TabNavigation);
// CONCATENATED MODULE: ./src/js/services.js



var services_service = function service() {
  // const hostname = 'http://localhost';
  // const port = '3003';
  // const host = `${hostname}:${port}/api`;
  var hostname = 'https://meme-trends-backend.herokuapp.com';
  var host = "".concat(hostname, "/api");

  var promise = /*#__PURE__*/function () {
    var _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee(method, url, data) {
      var myHeaders, raw, requestOptions;
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (data) {
                myHeaders = new Headers();
                myHeaders.append('Content-Type', 'application/json');
                raw = JSON.stringify(data);
                requestOptions = {
                  method: method,
                  headers: myHeaders,
                  body: raw
                };
              } else {
                requestOptions = {
                  method: method
                };
              }

              _context.next = 3;
              return fetch(url, requestOptions).then(function (response) {
                return response.json();
              }).then(function (result) {
                return result;
              })["catch"](function (error) {
                return console.log('error', error);
              });

            case 3:
              return _context.abrupt("return", _context.sent);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function promise(_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();

  var getMemes = /*#__PURE__*/function () {
    var _ref2 = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee2(data) {
      var url, retur;
      return regenerator_default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              url = "".concat(host, "/memeTrend");

              if (!data) {
                _context2.next = 9;
                break;
              }

              _context2.next = 4;
              return promise('GET', url, data);

            case 4:
              retur = _context2.sent;
              console.log('services:', data);
              return _context2.abrupt("return", retur);

            case 9:
              _context2.next = 11;
              return promise('GET', url);

            case 11:
              return _context2.abrupt("return", _context2.sent);

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function getMemes(_x4) {
      return _ref2.apply(this, arguments);
    };
  }();

  var postMeme = /*#__PURE__*/function () {
    var _ref3 = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee3(data) {
      var url;
      return regenerator_default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              url = "".concat(host, "/memeTrend");
              _context3.next = 3;
              return promise('GET', url, data);

            case 3:
              return _context3.abrupt("return", _context3.sent);

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function postMeme(_x5) {
      return _ref3.apply(this, arguments);
    };
  }();

  return {
    getMemes: getMemes,
    postMeme: postMeme
  };
};

/* harmony default export */ var services = (services_service);
// CONCATENATED MODULE: ./src/images/logo_transp2.png
/* harmony default export */ var logo_transp2 = (__webpack_require__.p + "images/logo_transp2.png");
// CONCATENATED MODULE: ./src/js/header.js




var header_service = services();

var header_Header = function Header() {
  var logo = function logo() {
    var divElement = document.createElement('div');
    divElement.classList.add('logo');
    var imgElement = document.createElement('img');
    imgElement.setAttribute('src', logo_transp2);
    imgElement.setAttribute('width', '45');
    imgElement.setAttribute('height', '31');
    imgElement.setAttribute('alt', 'Meme Trends Logo');
    divElement.append(imgElement);
    return divElement;
  };

  var buttonsPage = function buttonsPage() {
    var divElement = document.createElement('div');
    divElement.classList.add('buttons-page');
    var buttonHomeElement = document.createElement('button');
    buttonHomeElement.classList.add('home-page-button');
    buttonHomeElement.setAttribute('data-id', 'home');
    buttonHomeElement.setAttribute('data-open', '');
    var iconHomeElement = document.createElement('i');
    iconHomeElement.classList.add('fa', 'fa-home');
    iconHomeElement.setAttribute('aria-hidden', 'true');
    var spanTextHomeElement = document.createElement('span');
    var textHomeElement = document.createTextNode(' Página inicial');
    spanTextHomeElement.append(textHomeElement);
    buttonHomeElement.appendChild(iconHomeElement);
    buttonHomeElement.appendChild(spanTextHomeElement);
    var buttonUploadElement = document.createElement('button');
    buttonUploadElement.classList.add('upload-page-button');
    buttonUploadElement.setAttribute('data-id', 'upload');
    var iconUploadElement = document.createElement('i');
    iconUploadElement.classList.add('fa', 'fa-upload');
    iconUploadElement.setAttribute('aria-hidden', 'true');
    var spanTextUploadElement = document.createElement('span');
    var textUploadElement = document.createTextNode(' Enviar meme');
    spanTextUploadElement.append(textUploadElement);
    buttonUploadElement.appendChild(iconUploadElement);
    buttonUploadElement.append(spanTextUploadElement);
    var buttonDonateElement = document.createElement('button');
    buttonDonateElement.classList.add('donate-page-button');
    buttonDonateElement.setAttribute('data-id', 'donate');
    var iconDonateElement = document.createElement('i');
    iconDonateElement.classList.add('fa', 'fa-coffee');
    iconDonateElement.setAttribute('aria-hidden', 'true');
    var spanTextDonateElement = document.createElement('span');
    var textDonateElement = document.createTextNode(' Me paga um café?');
    spanTextDonateElement.append(textDonateElement);
    buttonDonateElement.appendChild(iconDonateElement);
    buttonDonateElement.append(spanTextDonateElement);
    divElement.append(buttonHomeElement);
    divElement.append(buttonUploadElement);
    divElement.append(buttonDonateElement);
    return divElement;
  };

  var search = function search() {
    var divElement = document.createElement('div');
    divElement.classList.add('search');
    var inputElement = document.createElement('input');
    inputElement.setAttribute('type', 'text');
    inputElement.setAttribute('placeholder', "\uF002 Pesquisar");
    addEventSearch(inputElement);
    divElement.append(inputElement);
    return divElement;
  };

  var addEventSearch = function addEventSearch(element) {
    element.addEventListener('keyup', /*#__PURE__*/asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
      var memeFiltered;
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              memeFiltered = {
                name: element.value
              }; // const memes = await service.getMemes(memeFiltered);
              // console.log(memes);

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));
  };

  var create = function create() {
    var headerElement = document.querySelector('.page-header');
    var logoElement = logo();
    var buttonsPageElement = buttonsPage();
    var searchElement = search();
    headerElement.appendChild(logoElement);
    headerElement.appendChild(buttonsPageElement);
    headerElement.appendChild(searchElement);
  };

  return {
    create: create
  };
};

/* harmony default export */ var header = (header_Header);
// CONCATENATED MODULE: ./src/js/footer.js
var Footer = function Footer() {
  var socialMediaUrls = [{
    name: 'Twitter',
    url: 'https://twitter.com/JVidalN'
  }, {
    name: 'CodePen',
    url: 'https://codepen.io/jvidaln'
  }, {
    name: 'StackOverflow',
    url: 'https://stackoverflow.com/users/5854978'
  }, {
    name: 'YouTube',
    url: 'https://youtube.com/jvidalnunes'
  }, {
    name: 'Instagram',
    url: 'https://instagram.com/JVidalN'
  }, {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/jvidalnunes'
  }];

  var socialMedia = function socialMedia() {
    var divElement = document.createElement('div');
    divElement.classList.add('social-media');
    var textSocialElement = document.createTextNode('Connect with me: ');
    divElement.append(textSocialElement);
    var myRegexp = /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n.?]+)/gim;

    for (var indexUrl in socialMediaUrls) {
      var socialName = socialMediaUrls[indexUrl].name.toLowerCase();
      var alt = socialMediaUrls[indexUrl].name;
      var width = '24px';
      var src = "https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/".concat(socialName, ".svg");
      var linkMediaElement = document.createElement('a');
      linkMediaElement.setAttribute('href', socialMediaUrls[indexUrl].url);
      linkMediaElement.setAttribute('target', '_blank');
      var imgElement = document.createElement('img');
      imgElement.setAttribute('src', src);
      imgElement.setAttribute('alt', alt);
      imgElement.setAttribute('width', width);
      linkMediaElement.appendChild(imgElement);
      divElement.appendChild(linkMediaElement);
    }

    return divElement;
  };

  var copyright = function copyright() {
    var divElement = document.createElement('div');
    divElement.classList.add('copyright');
    var textFooterElement = document.createTextNode("Copyright \xA9 ".concat(new Date().getFullYear(), " - Jean Vidal"));
    divElement.append(textFooterElement);
    return divElement;
  };

  var create = function create() {
    var footerElement = document.querySelector('.page-footer');
    var textFooterElement = copyright();
    var socialMediaElement = socialMedia();
    footerElement.appendChild(textFooterElement);
    footerElement.appendChild(socialMediaElement);
  };

  return {
    create: create
  };
};

/* harmony default export */ var footer = (Footer);
// CONCATENATED MODULE: ./src/js/views/homePage.js



function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


var homePage_service = services();

var Home = /*#__PURE__*/function () {
  var _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
    var memes, createDivMemeImageElement, create;
    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return homePage_service.getMemes();

          case 2:
            memes = _context.sent;

            createDivMemeImageElement = function createDivMemeImageElement(meme) {
              var divImageElement = document.createElement('div');
              divImageElement.classList.add('images');
              var memeElement = document.createElement('img');
              memeElement.setAttribute('src', meme.meme);
              memeElement.setAttribute('alt', meme.name);
              var iconOptionsElement = document.createElement('span');
              iconOptionsElement.classList.add('fa', 'fa-ellipsis-h');
              iconOptionsElement.setAttribute('aria-hidden', 'true');
              divImageElement.appendChild(memeElement);
              divImageElement.appendChild(iconOptionsElement);
              return divImageElement;
            };

            create = function create() {
              for (var idx in memes) {
                var meme = memes[idx];
                var divHomeElement = document.querySelector('.main-container .home');
                var DivImageElement = createDivMemeImageElement(meme);
                divHomeElement.appendChild(DivImageElement);
              }

              var ListIconOptionsElement = document.querySelectorAll('.images .fa-ellipsis-h');

              var _iterator = _createForOfIteratorHelper(ListIconOptionsElement),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var iconOptionsElement = _step.value;
                  iconOptionsElement.addEventListener('click', function (evt) {
                    console.log(evt);
                  });
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            };

            return _context.abrupt("return", {
              create: create
            });

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function Home() {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ var homePage = (Home);
// CONCATENATED MODULE: ./src/js/views/uploadPage.js



function uploadPage_createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = uploadPage_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function uploadPage_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return uploadPage_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return uploadPage_arrayLikeToArray(o, minLen); }

function uploadPage_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var Upload = /*#__PURE__*/function () {
  var _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
    var fields, ValidateField, customValidation, maxDateToday, create;
    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            fields = document.querySelectorAll('[required]');

            ValidateField = function ValidateField(field) {
              console.log(field.validity); // logica para verificar se existem erros

              var verifyErrors = function verifyErrors() {
                var foundError = false;

                for (var error in field.validity) {
                  // se não for customError
                  // então verifica se tem erro
                  if (field.validity[error] && !field.validity.valid) {
                    foundError = error;
                  }
                }

                return foundError;
              };

              var customMessage = function customMessage(typeError) {
                var messages = {
                  text: {
                    valueMissing: 'Por favor, preencha este campo'
                  },
                  date: {
                    valueMissing: 'Por favor, preencha este campo',
                    typeMismatch: 'Por favor, preencha uma data válida',
                    badInput: 'Por favor, preencha uma data válida',
                    rangeOverflow: 'Por favor, informe uma data válida entre 01/01/2000 e 31/12/2100'
                  }
                };
                return messages[field.type][typeError];
              };

              var setCustomMessage = function setCustomMessage(message) {
                var spanError = field.parentNode.querySelector('span.error');

                if (message) {
                  spanError.classList.add('active');
                  spanError.innerHTML = message;
                } else {
                  spanError.classList.remove('active');
                  spanError.innerHTML = '';
                }
              };

              return function () {
                var error = verifyErrors();

                if (error) {
                  var message = customMessage(error);
                  field.style.borderColor = 'red';
                  setCustomMessage(message);
                } else {
                  field.style.borderColor = 'green';
                  setCustomMessage();
                }
              };
            };

            customValidation = function customValidation(event) {
              var field = event.target;
              var validation = ValidateField(field);
              validation();
            };

            maxDateToday = function maxDateToday() {
              var today = new Date();
              var day = today.getDate().toString().padStart(2, '0');
              var month = (today.getMonth() + 1).toString().padStart(2, '0');
              var year = today.getFullYear();
              today = "".concat(year, "-").concat(month, "-").concat(day);
              document.querySelector('input[type=date]').setAttribute('max', today);
              return today;
            };

            create = function create() {
              var _iterator = uploadPage_createForOfIteratorHelper(fields),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var field = _step.value;
                  field.addEventListener('invalid', function (event) {
                    // eliminar o bubble
                    event.preventDefault();
                    customValidation(event);
                  });
                  field.addEventListener('blur', customValidation);
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              document.querySelector('form').addEventListener('submit', function (event) {
                var _iterator2 = uploadPage_createForOfIteratorHelper(fields),
                    _step2;

                try {
                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                    var field = _step2.value;
                    console.log(field.value);
                  }
                } catch (err) {
                  _iterator2.e(err);
                } finally {
                  _iterator2.f();
                }

                event.preventDefault();
              });
              maxDateToday();
            };

            return _context.abrupt("return", {
              create: create
            });

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function Upload() {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ var uploadPage = (Upload);
// CONCATENATED MODULE: ./src/images/QRCode.png
/* harmony default export */ var QRCode = (__webpack_require__.p + "images/QRCode.png");
// CONCATENATED MODULE: ./src/js/views/donatePage.js




var Donate = /*#__PURE__*/function () {
  var _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
    var createPaypalDonate, createDivButtonElement, createDivQrCodeElement, create;
    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            createPaypalDonate = function createPaypalDonate() {
              var formElement = document.createElement('form');
              formElement.setAttribute('action', 'https://www.paypal.com/cgi-bin/webscr');
              formElement.setAttribute('method', 'post');
              formElement.setAttribute('target', '_blank');
              var inputCmdElement = document.createElement('input');
              inputCmdElement.setAttribute('type', 'hidden');
              inputCmdElement.setAttribute('name', 'cmd');
              inputCmdElement.setAttribute('value', '_donations');
              var inputBusinessElement = document.createElement('input');
              inputBusinessElement.setAttribute('type', 'hidden');
              inputBusinessElement.setAttribute('name', 'business');
              inputBusinessElement.setAttribute('value', 'ZE97RGTTR3CNG');
              var inputItemNameElement = document.createElement('input');
              inputItemNameElement.setAttribute('type', 'hidden');
              inputItemNameElement.setAttribute('name', 'item_name');
              inputItemNameElement.setAttribute('value', 'Me paga um cafe?');
              var inputCurrencyCodeElement = document.createElement('input');
              inputCurrencyCodeElement.setAttribute('type', 'hidden');
              inputCurrencyCodeElement.setAttribute('name', 'currency_code');
              inputCurrencyCodeElement.setAttribute('value', 'BRL');
              var inputSubmitElement = document.createElement('input');
              inputSubmitElement.setAttribute('type', 'image');
              inputSubmitElement.setAttribute('src', 'https://www.paypalobjects.com/pt_BR/BR/i/btn/btn_donateCC_LG.gif');
              inputSubmitElement.setAttribute('border', '0');
              inputSubmitElement.setAttribute('name', 'submit');
              inputSubmitElement.setAttribute('title', 'PayPal - The safer, easier way to pay online! | A maneira mais segura e fácil de pagar online!');
              inputSubmitElement.setAttribute('alt', 'Faça doações com o botão do PayPal');
              var imgElement = document.createElement('img');
              imgElement.setAttribute('alt', '');
              imgElement.setAttribute('border', '0');
              imgElement.setAttribute('src', 'https://www.paypal.com/pt_BR/i/scr/pixel.gif');
              imgElement.setAttribute('width', '1');
              imgElement.setAttribute('height', '1');
              formElement.appendChild(inputCmdElement);
              formElement.appendChild(inputBusinessElement);
              formElement.appendChild(inputItemNameElement);
              formElement.appendChild(inputCurrencyCodeElement);
              formElement.appendChild(inputSubmitElement);
              formElement.appendChild(imgElement);
              return formElement;
            };

            createDivButtonElement = function createDivButtonElement() {
              var divButtonElement = document.createElement('div');
              divButtonElement.classList.add('donate-button');
              var donatePaypalElement = createPaypalDonate();
              divButtonElement.appendChild(donatePaypalElement);
              return divButtonElement;
            };

            createDivQrCodeElement = function createDivQrCodeElement() {
              var divQrCodeElement = document.createElement('div');
              divQrCodeElement.classList.add('donate-qr-code');
              var imgElement = document.createElement('img');
              imgElement.setAttribute('src', QRCode);
              imgElement.setAttribute('alt', 'QR Code Donate');
              divQrCodeElement.appendChild(imgElement);
              return divQrCodeElement;
            };

            create = function create() {
              var divHomeElement = document.querySelector('.donate');
              var divButtonElement = createDivButtonElement();
              var divQrCodeElement = createDivQrCodeElement();
              divHomeElement.appendChild(divButtonElement);
              divHomeElement.appendChild(divQrCodeElement);
            };

            return _context.abrupt("return", {
              create: create
            });

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function Donate() {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ var donatePage = (Donate);
// CONCATENATED MODULE: ./src/images/favicon.ico
/* harmony default export */ var favicon = (__webpack_require__.p + "images/favicon.ico");
// EXTERNAL MODULE: ./src/css/styles.css
var styles = __webpack_require__(9);

// CONCATENATED MODULE: ./src/js/index.js











var hideMenuOnScroll = function hideMenuOnScroll() {
  var prevScrollpos = window.pageYOffset;

  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;

    if (prevScrollpos > currentScrollPos) {
      document.getElementsByTagName('header')[0].style.top = '0';
      document.getElementsByTagName('footer')[0].style.bottom = '0';
    } else {
      document.getElementsByTagName('header')[0].style.top = '-80px';
      document.getElementsByTagName('footer')[0].style.bottom = '-80px';
    }

    prevScrollpos = currentScrollPos;
  };
};

var js_createIco = function createIco() {
  var iconElement = document.createElement('link');
  iconElement.setAttribute('rel', 'icon');
  iconElement.setAttribute('type', 'image/x-icon');
  iconElement.setAttribute('href', favicon);
  return iconElement;
};

window.addEventListener('load', /*#__PURE__*/asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
  var iconElement, headerElement, homeElement, uploadElement, donateElement, footerElement, tabNavigation;
  return regenerator_default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          iconElement = js_createIco();
          headerElement = header();
          _context.next = 4;
          return homePage();

        case 4:
          homeElement = _context.sent;
          _context.next = 7;
          return uploadPage();

        case 7:
          uploadElement = _context.sent;
          _context.next = 10;
          return donatePage();

        case 10:
          donateElement = _context.sent;
          footerElement = footer();
          document.head.appendChild(iconElement);
          headerElement.create();
          homeElement.create(); // uploadElement.create();

          donateElement.create();
          footerElement.create();
          tabNavigation = js_navigate();
          tabNavigation.init();
          hideMenuOnScroll();

        case 20:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
})));

/***/ })
/******/ ]);