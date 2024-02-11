let sales: number = 44_00_000;
let course: string = "TS";
let hasBeenPublished: boolean = true;
let who; // this gets type any be default since we don't annotate or assign it a value
who = 2;
who = true;

function render(document: any){
    console.log(document);
}

let numbers: number[] = [1, 5, -23];

// TUPLE: fixed length array where each element has particular type. It's best to stick to just two elements.
let userTuple: [number, string] = [1, "LOL"]

// enums to club some related constants. The compiler will auto assign 1, 2, 3
// declaring enums as consts will generate more optimsed JS code 
enum shirtSize {small = 1, medium, large};
let mySize: shirtSize = shirtSize.medium;
console.log(mySize);

// default return type by functions in JS is undefined
// ? is for optional argument, it may or may not be passed and = is for the default value if its not passed, with ? the default value is undefined
function calculateTax(income: number = 20_000, year?: string): string {
    if(income < 12_00_000)
        return "Good"
    else 
        return "Great"
}

let employee: {
    readonly id: number,
    name: string,
    hasFax? : boolean,
    retiresOn: (year: number)=>void
} = {
    id: 1,
    name: "George",
    retiresOn: (year: number)=>{console.log(year)}
};

// type alias to make code more readable, and to be able to reuse the structure of 
type EmployeeShape = {
    readonly id: number,
    name: string,
    hasFax? : boolean,
    retiresOn: (year: number)=>void
}

let employee1 = {
    id: 2,
    name: "Max",
    retiresOn: (year: number)=>{console.log(year)}
}

// union type the argument that this function is taking
function kgToGrams(weight: number | string): number{
    // narrowing 
    if(typeof weight === 'number'){

    } else {

    }

    return 10;
}

kgToGrams(10);
kgToGrams('10kg');

// intersection, when an object is both of the mentioned types
let randomVar: number & string; // but here it makes no sense

type Draggable = {
    drag: ()=>void
};

type Resizeable = {
    resize: ()=>void
};

type UI_Widget = Draggable & Resizeable; // this is intersection type

// now when we create a vr using it, we will have to implement all the functions 
let textBox: UI_Widget = {
    drag: ()=>{},
    resize: ()=>{}
};

// literal, when we want only some values to be taken by some variable
// let needleSize: 0.01 | 0.02 = 0.01;
type NS = 0.01 | 0.02;
let needleSize: NS = 0.01;

// Nullable type
function greet(name: string | null | undefined): void{
    if(name)
        console.log("Hello " + name)
    else
        console.log("Hello")
}

