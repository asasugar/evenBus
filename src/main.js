export default class EvenBus {
  constructor(maxListeners) {
    this._events = this._events || new Map(); // 储存事件/回调键值对
    this._listeners = this._listeners || 0; // 当前监听数量
    this._maxListeners = maxListeners || 10; // 设立监听上限
  }
  // 监听
  on = (type, fn) => {
    let cb = this._events.get(type)
    if (!this._events.get(type)) {
      this._events.set(type, fn);
    } else if (cb && typeof cb === 'function') {
      // 如果cb是函数说明只有一个监听者
      this._events.set(type, [cb, fn]);
    } else {
      cb.push(fn)
    }
    this.getListeners(type)
  };
  // 触发
  emit = (type, ...args) => {
    let cb;
    cb = this._events.get(type);
    // 多个回调说明有多个监听
    if (Array.isArray(cb)) {
      for (let fn of cb) {
        if (args.length > 0) {
          fn.apply(this, args);
        } else {
          fn.call(this);
        }
      }
    } else {
      if (args.length > 0) {
        cb.apply(this, args);
      } else {
        cb.call(this);
      }
    }
  }
  // 移除
  remove = (type) => {
    if (type) {
      this._events.delete(type)
    } else {
      this._events.clear()
    }
  }
  // 计算当前监听数
  getListeners = (type) => {
    if (type) this._listeners++
    if (this._listeners > this._maxListeners) throw "The current number of listens is greater than the maximum number"
    else return true
  }
}