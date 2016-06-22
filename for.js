/**
 * Created by yanjun on 2016/5/18.
 */
'use strict';
var myArray = ['test','test2'];
var objs = {
    name: 'yanjun',
    work: 'it',
    show: function(str){
        console.log(str);
    }
}

for (var index = 0; index < myArray.length; index++) {
    console.log(index + 1); //index数字
    console.log(myArray[index]);
}

myArray.forEach(function (value) {
    console.log(value);
});

for (var index in myArray) { // 千万别这样做
    console.log(index);
    console.log(index + 1);  // 01 字符
    console.log(myArray[index]);
}

for(var index in objs){
    console.log(objs[index]);
}

for (var value of myArray) {
    console.log(value);
}

var str = 'test';
for (var chr of str) {
    console.log(chr);
}

var uniqueWords = new Set(myArray);
for (var word of uniqueWords) {
    console.log(word);
}


// 向控制台输出对象的可枚举属性
for (var key of Object.keys(objs)) {
    console.log(key + ": " + objs[key]);
}

var map = new Map();
map.set("map1",1);
map.set("map2",2);
for( let item of map) {
    console.log(item);
}

// 遍历key
for (var key of map.keys()) {
    console.log(key)
}

// 遍历value
for (var val of map.values()) {
    console.log(val)
}

// 遍历实体
for (var arr of map.entries()) {
    console.log('key: ' + arr[0] + ', value: ' + arr[1])
}

// 遍历实体的简写
/*for (var [key, val] of map.entries()) {
    console.log('key: ' + key + ', value: ' + val)
}*/



