/**
 * Created by yanjun on 2016/5/18.
 */
function* quips(name) {
    yield "你好 " + name + "!";
    yield "希望你能喜欢这篇介绍ES6的译文";
    if (name.startsWith("X")) {
        yield "你的名字 " + name + "  首字母是X，这很酷！";
    }
    yield "我们下次再见！";
}

var iter = quips("jorendorff");
var a = iter.next();
console.log(a);
a = iter.next();
console.log(a);
a = iter.next();
console.log(a);
a = iter.next();
console.log(a);




