"use strict";
var demo1;
(function (demo1) {
    // 
    var data;
    var info;
    var dosomething = function (arg) {
        return arg;
    };
    var x = dosomething(5);
    var age = 27;
    var score = 34.54123;
    var rating = 99.00;
    var hasData = true;
    var isReady = true;
    var isBold = function () {
        return 'yes';
    };
    var firstname = "Ljuben";
    var lastname = "Joskoski";
    // strings array
    function getarraylength(x) {
        var len = x.length;
        return len;
    }
    var names = ["John", "Jonwew", "Queg", "lj1"];
    var firstPerson = names[2];
    console.log(getarraylength(names));
    console.log(firstPerson);
    //null 
    var somethings = null;
})(demo1 || (demo1 = {}));
