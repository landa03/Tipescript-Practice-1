// console.log('Hello World');
// let age: number = 20;  
// if (age < 50)
    // age += 10;
// console.log(age);

// let sales: number = 123_456_789;
// let course: string = 'TypesScript';
// // risky: dont use "any" if posible
// let level;
// function reder(document: any){
//     console.log(document);
// }

// let numbers: number[] = [];
// // ora se puede usar condiciones para numeros

// //  tuples
// let users: [number, string] = [1, 'Landa'];

// //enums
// // convertirlo en constante hace que al compilar se jenere un codigo mucho mas simple
// const enum Size { Small = 1, Medium, Large };
// let mySize: Size = Size.Medium;
// console.log(mySize);

// function calculateTax(income: number, taxYear: number = 2022): number {
//     if (taxYear < 2022)
//         return income * 0.2;
//     return income * 0.3;
// }
// calculateTax(10_000)

// // object
// let employee: {
//     readonly id: number, 
//     name: string,
//     retaire: (date: Date) => void
// } = {
//     id: 1,
//     name: 'Landit',
//     retaire: (date: Date) => {
//         console.log(date);
//     }
// }

// //cooler object
// type Employee = {
//     readonly id: number, 
//     name: string,
//     retaire: (date: Date) => void
// } 

// let employee: Employee = {
//     id: 1,
//     name: 'Landit',
//     retaire: (date: Date) => {
//         console.log(date);
//     }
// }

// //unions and narrowing
// function kgToLbs(weight: number | string): number {
//     if (typeof weight === 'number') {
//         return weight * 2.2;
//     } else{
//         return parseInt(weight) * 2.2;
//     }
// }
// kgToLbs(10);
// kgToLbs('10kg');

// //intersections
// type Draggable = {
//     drag: () => void
// };
// type Resizable = {
//     resize: () => void
// };
// type UIWidget = Draggable & Resizable;
// let textBox: UIWidget = {
//     drag: () => {},
//     resize: () => {},
// }

// // Literal type
// //es uno u  otro, no hay mas
// type Quantity = 50 | 100;
// let quantity: Quantity = 100;
// type Metric = 'cm' | 'inch';

// // Nullable Types
// function greet(mesage: string | null | undefined) {
//     if (mesage){
//         console.log(mesage.toUpperCase());
//     }else{
//         console.log('Hola!');
//     }
// }
// greet(undefined); // tengo que manejar la posibilidad de que se entregue un valor nulo a  mis funciones.

// // Optional Chaining
// type Customer = {
//     birthday: Date
// };
// function getCustomer(id: number): Customer | null | undefined{
//     return id === 0 ? null : { birthday: new Date() };
//     //     if       ?=then  :=else
// }
// let customer = getCustomer(0);
// console.log(customer?.birthday?.getFullYear()); // el ? antes de . hace que revise si no es null o undefined
// //Opcional call
// let log: any = null;
// log?.('a');