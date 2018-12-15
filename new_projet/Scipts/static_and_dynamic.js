var demo_02_03;
(function (demo_02_03) {
    var person;
    person = "123456789";
    console.log(person.substring(2, 7));
    person = {
        name: "coll",
        age: 25
    };
    console.log(person.substring(1, 2));
})(demo_02_03 || (demo_02_03 = {}));
