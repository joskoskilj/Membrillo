
export {}
///---------------------------------------------VARIBLES-------------------------------
let message = 'Main';
console.log(message);

let x= 10;
const y = 12;

/*var b;
let sum;
console.log(b);

const name = 'Constatntin';
let isBeginner: boolean = true; 
console.log(name + " " + isBeginner);*/ 
/*
let Beginner = true; 
let total: number = 27;
let name: string = 'Vishu';

let sentance : string = `my name is ${name} chiki `
console.log(sentance)
///-------------------------------------------ARRAYS------------------------------------
let u: null = null; 
let is: undefined = undefined;*/
/*
let list1: number[] = [1,2,3];
let list2: Array<number> = [1,2,3]
let list3: Array<string> = ["me","Me","meme"]

console.log(list1, list2, list3)

let list4: [string, number] = ["lj", 22]; 

console.log(list4);

enum Colour {Red = 4, Green, blue}

let myvariable: unknown = 10;
///-------------------------------------------FUNCIONS----------------------------------------
function hasName(obj:any): obj is {name: string} 
/// funcion hasName in has parametar (obj) of type any (:any) 
/// and it will return the name propery (name) that is object (obj is) with type string (string)  
{
    return !!obj && typeof 
    obj === "object" && 
    "name" in obj
}
if (hasName(myvariable)){
    console.log(myvariable.name)
}
console.log(myvariable);
(myvariable as string).toUpperCase();
function add(num1: number, num2: number = 10): number 
{  
    if(num2)
    return num1 + num2;
    else
    return num1;
}
var zbir = add(1,20)
let zbir1 = add(5)
console.log(zbir1);


function fullNameAge(toto : boolean, name : string, lname : string , age : number ){
    if (toto){
       var poz : string = `His name is ${name} and last name is ${lname} and his age is ${age}` 
       console.log(poz + "Ova e vnatre vo true toto");
       return poz;
    }
    else
        var zoz : string = "Else"
        console.log(zoz + "sese ");
        return zoz;
        
}

console.log(fullNameAge(true, "Manny", "Calavera", 31));

console.log(fullNameAge(false, "Hector", "LeMans", 31));



function FullName(person : {firstName: string, lastName: string})
{
    console.log(`${person.firstName} ${person.lastName}`)
}
let p = { // object
    firstName: 'Manny', // watch how the names are declared
    lastName: 'Calavera'
}
FullName(p);
///---------------------------------------INTERFACE-------------------------------------------------
interface Person{
    firstName: string
    lastName: string
}

function fullname(person: Person) // using the interface
{
    console.log(`${person.firstName} ${person.lastName}`)
}
let q = { // object
    firstName: 'Mercedes',
    lastName: 'Colomar'
}
fullname(q); 
///--------------------------------------CLASSES------------------------------------------------------
class employee {
    employeeName: string; 
    
        constructor(name: string){
            this.employeeName = name;
        }
        greet() { 
            console.log(`Good M ${this.employeeName}`);
        }
}

let emp1 = new employee('Vishwas');
console.log(emp1.employeeName);
emp1.greet(); // already knows that emp1 is a object form that class. 

///-------------------------------------INHERITANCE---------------------------------------------------
class Manager extends employee {
    constructor(managerName: string){
        super(managerName);
    }
    delegateWork(){
        console.log("Manageer deligating tasks");
    }
}

let m1 = new Manager ("Hector");
m1.delegateWork();
m1.greet()
console.log(m1.employeeName);
*/


