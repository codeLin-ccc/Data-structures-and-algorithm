/**
 * @param {number} k
 */

var MyCircularDeque = function (k) {
  this.item = new Array()
  this.count = 0;
  this.lastCount = k;
};

/** 
* @param {number} value
* @return {boolean}
*/
MyCircularDeque.prototype.insertFront = function (value) {
  if (this.isFull()) {
    return false
  } else {
    this.item.unshift(value)
    this.count++;
    return true;
  }
};

/** 
* @param {number} value
* @return {boolean}
*/
MyCircularDeque.prototype.insertLast = function (value) {
  if (this.isFull()) {
    return false;
  } else {
    this.item.push(value)
    this.count++;
    return true;
  }
};

/**
* @return {boolean}
*/
MyCircularDeque.prototype.deleteFront = function () {
  if (this.isEmpty()) {
    return false;
  } else {
    this.item.shift();
    this.count--;
    return true;
  }
};

/**
* @return {boolean}
*/
MyCircularDeque.prototype.deleteLast = function () {
  if (this.isEmpty()) {
    return false;
  } else {
    this.item.pop();
    this.count--;
    return true;
  }
};

/**
* @return {number}
*/
MyCircularDeque.prototype.getFront = function () {
  if (this.isEmpty()) {
    return - 1
  } else {
    return this.item[0];
  }
};

/**
* @return {number}
*/
MyCircularDeque.prototype.getRear = function () {
  if (this.isEmpty()) {
    return - 1
  } else {
    return this.item[this.count - 1];
  }
};

/**
* @return {boolean}
*/
MyCircularDeque.prototype.isEmpty = function () {
  return this.count === 0;
};

/**
* @return {boolean}
*/
MyCircularDeque.prototype.isFull = function () {
  return this.count === this.lastCount;
};

//  Your MyCircularDeque object will be instantiated and called as such:
var obj = new MyCircularDeque(3)
var param_1 = obj.insertFront(1) // true
var param_2 = obj.insertLast(2) // true
var param_3 = obj.insertLast(2) // true
var param_4 = obj.insertLast(4)   // false
var param_5 = obj.deleteFront()   // 删掉1 true
var param_6 = obj.deleteLast()    // 删掉2 true
var param_7 = obj.getFront()  // 2
var param_8 = obj.getRear() // 2
var param_9 = obj.isEmpty() // false
var param_10 = obj.isFull() // false
console.log(
  param_1,
  param_2,
  param_3,
  param_4,
  param_5,
  param_6,
  param_7,
  param_8,
  param_9,
  param_10);
console.log(obj);
