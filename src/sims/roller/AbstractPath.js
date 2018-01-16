// Copyright 2016 Erik Neumann.  All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the 'License');
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an 'AS IS' BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

goog.provide('myphysicslab.sims.roller.AbstractPath');

goog.require('myphysicslab.lab.util.Util');
goog.require('myphysicslab.lab.model.ParametricPath');

goog.scope(function() {

var Util = goog.module.get('myphysicslab.lab.util.Util');
var ParametricPath = myphysicslab.lab.model.ParametricPath;

/** An abstract base class for a ParametricPath.

This is package-private to ensure that any changes to it are coordinated
with all its subclasses.

* @param {string} name language independent name
* @param {string} localName localized (internationalized) name
* @param {number} startTValue starting `t` value for defining path
* @param {number} finishTValue  ending `t` value for defining path
* @param {boolean} closedLoop `true` means the path is a closed loop
* @constructor
* @struct
* @package
* @abstract
* @implements {ParametricPath}
*/
myphysicslab.sims.roller.AbstractPath = function(name, localName, startTValue,
    finishTValue, closedLoop) {
  /**
  * @type {string}
  * @private
  */
  this.name_ = Util.validName(Util.toName(name));
  /**
  * @type {string}
  * @private
  */
  this.localName_ = localName || name;
  /**
  * @type {number}
  * @protected
  */
  this.startTValue_ = startTValue;
  /**
  * @type {number}
  * @protected
  */
  this.finishTValue_ = finishTValue;
  /**
  * @type {boolean}
  * @protected
  */
  this.closedLoop_ = closedLoop;
};
var AbstractPath = myphysicslab.sims.roller.AbstractPath;

if (!Util.ADVANCED) {
  /** @override */
  AbstractPath.prototype.toString = function() {
    return this.getClassName()+'{name_: "'+this.name_+'"'
      +', localName_: "'+this.localName_+'"'
      +', startTValue_: '+Util.NF(this.startTValue_)
      +', finishTValue_: '+Util.NF(this.finishTValue_)
      +', closedLoop_: '+this.closedLoop_
      +'}';
  };
};

/** @abstract */
AbstractPath.prototype.x_func = function(t) {};

/** @abstract */
AbstractPath.prototype.y_func = function(t) {};

/** Returns name of class of this object.
* @return {string} name of class of this object.
* @abstract
*/
AbstractPath.prototype.getClassName = function() {};

/** @override */
AbstractPath.prototype.getName = function(opt_localized) {
  return opt_localized ? this.localName_ : this.name_;
};

/** @override */
AbstractPath.prototype.getFinishTValue = function() {
  return this.finishTValue_;
};

/** @override */
AbstractPath.prototype.getStartTValue = function() {
  return this.startTValue_;
};

/** @override */
AbstractPath.prototype.isClosedLoop = function() {
  return this.closedLoop_;
};

/** @override */
AbstractPath.prototype.nameEquals = function(name) {
  return this.name_ == Util.toName(name);
};

/** Sets whether the path is a closed loop, ending at the same point it starts.
* @param {boolean} value whether the path is a closed loop
*/
AbstractPath.prototype.setClosedLoop = function(value) {
  this.closedLoop_ = value;
};

/** Sets the ending value for `t` in the parameteric equation defining the path.
* @param {number} value ending value for `t`
*/
AbstractPath.prototype.setFinishTValue = function(value) {
  this.finishTValue_ = value;
};

/** Sets the starting value for `t` in the parameteric equation defining the path.
* @param {number} value starting value for `t`
*/
AbstractPath.prototype.setStartTValue = function(value) {
  this.startTValue_ = value;
};

}); // goog.scope
