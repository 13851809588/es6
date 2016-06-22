/**
 * Created by yanjun on 2016/5/19.
 */
'use strict';

var a = [];
for (var i = 0; i < 10; i++) {
    a[i] = function () {
        console.log(i);
    };
}
a[6](); // 10

a = [];
for (let i = 0; i < 10; i++) {
    a[i] = function () {
        console.log(i);
    };
}
a[6](); // 6

function log(a){
    console.log(a);
}

a=[];
for (var i = 0; i < 10; i++) {
    a[i] = function(i){
        return log(i);
    }
}
a[6](); // 10
