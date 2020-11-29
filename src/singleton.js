class Singleton {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  static getInstance(name, age) {
    if (Singleton.instance) {
      return Singleton.instance;
    } else {
      Singleton.instance = new Singleton(name, age);
      return Singleton.instance;
    }
  }
}
Singleton.instance = null;

let s1 = Singleton.getInstance("xiowan", 123);
let s2 = Singleton.getInstance("xiaoli", 34656);
console.log(s1, s2, s1 === s2);
