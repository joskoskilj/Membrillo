module demo2 {
    //Object 
    //1
    var points = {x:10, y:20};
    var x = points.x;
    //2
    var points1: {};
    points1 = {x:123, y:1}; 
    //3
    var points2: Object = {x:12};

    var rectangle = { 
        a : 20,
        b: 30,
        TotalArea: function (){
        return rectangle.a * rectangle.b;
        }
    }
console.log(rectangle.a + " and " +
 rectangle.b +" gives " + rectangle.TotalArea());

}