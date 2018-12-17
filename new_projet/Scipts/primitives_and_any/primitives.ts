
module demo1 {
    // 
    var data: any;
    var info; 
    var dosomething = function(arg: any) { 
        return arg;
    }
    var x = dosomething(5);
    var age: number = 27;
    var score: number = 34.54123;
    var rating = 99.00;

    var hasData: boolean = true; 
    var isReady = true; 
    var isBold = function () { 
        return 'yes';
    } 
    var firstname: string = "Ljuben"; 
    var lastname = "Joskoski";

    // strings array
    function getarraylength (x:string[]){
        var len = x.length;
        return len; 

    }
    var names: string[] = ["John", "Jonwew", "Queg", "lj1"];
    var firstPerson = names[2]
    console.log(getarraylength(names));
    console.log(firstPerson);
    
    //null 

    var somethings: any = null;
    
}
