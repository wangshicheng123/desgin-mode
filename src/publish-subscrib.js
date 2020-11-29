// 发布订阅模式 publish-subscrib
class Publish {
  constructor() {
    // 定义一个对象，这个对象用于保存我们所有的时间类型，以及这个事件对应的订阅handler
    this.publishEvents = {};
  }
  listen(key, handler) {
    if (this.publishEvents[key]) {
      this.publishEvents[key].push(handler);
    } else {
      this.publishEvents[key] = [handler];
    }
  }
  trigger(key) {
    if (this.publishEvents[key]) {
      this.publishEvents[key].forEach((event) => {
        event();
      });
    } else {
      console.warn("the event has not event handler");
    }
  }
  remove(key, handler) {
    if (this.publishEvents[key]) {
      let currentHandlerIndex = -1;
      this.publishEvents.forEach((event, index) => {
        if (handler === event) {
          currentHandlerIndex = index;
        }
      });
      if (currentHandlerIndex !== -1) {
        this.publishEvents.splice(currentHandlerIndex, 1);
      } else {
        console.warn("the event has not event handler");
      }
    }
  }
}

const publish = new Publish();
publish.listen("click", function () {
  console.log("click");
});
publish.listen("move", function () {
  console.log("move");
});
publish.listen("scroll", function () {
  console.log("scroll");
});
publish.listen("click", function () {
  console.log("click2");
});
publish.trigger("click");
