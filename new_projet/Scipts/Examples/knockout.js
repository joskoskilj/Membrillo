"use strict";
var demo;
(function (demo) {
    var name = ko.observable("ljuben");
    var id = ko.observable(1);
    var guy = {
        id: id,
        fullName: name
    };
    var value = guy.fullName();
    console.log(value);
})(demo || (demo = {}));
