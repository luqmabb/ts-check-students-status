// tipe data primitf
var myName: string = 'sony'
let what: boolean = true
const myNumber: number = 11

console.log(myName)
console.log(what)
console.log(myNumber)

// tipe data array
const myCar: string[] = ["tesla", "bmw", "porse", "nissan"]
const myFingger: number[] = [123, 234, 45, 678]

console.log(myCar)
console.log(myFingger)

// Tipe data any
let myColor: any = "yellow"

console.log(myColor);

// Read Only Array (tidak dapat di ubah)
const myHobbies: ReadonlyArray<string> = ["Badmin", "soccer", "swimming"]

// Tuple (tipe data array berurutan sesuai indexnya)
const myUser: readonly [string, string, number] = ["Mega", "indonesia", 55]

console.log(myUser);

// Union Type(tipe data yang dapat di gabungkan)
let sample: string | number | boolean = "Prab"
sample = 11
sample = true
sample = false
sample = 'proabowo menang' 

console.log('disini woii '+ sample);

// Typeof
function prosessTypeof(hasil: string | number | boolean) {
    if (typeof hasil === "string") {
        return hasil.toUpperCase()
    } else if (typeof hasil === "number") {
        return hasil.toString() + " change!"
    } else {
        return !hasil
    }
}

console.log(prosessTypeof("indonesia"));
console.log(prosessTypeof(11));
console.log(prosessTypeof(true));

// type alias
type Category = {
    id: number;
    name: string
}

type People = {
    id: number,
    name: string,
    age: number
}

const objek1: Category = {
    id: 1,
    name: "Electronic"
}

const objek2: People = {
    id: 2,
    name: "Gibrn",
    age: 38
}

console.log(objek1);
console.log(objek2);


// object Type
const someone: { id: number, name: string } = {
    id: 1,
    name: "rambut putih"
}

console.log(someone);

// Optional Propertis
type myProject = {
    id: number
    name: string
    time?: Date
}

const myBio: { id: number, name: string, hobbies?: string[] } = {
    id: 1,
    name: "Paman",
    // hobbies: ["sayang anak", "baca koran"]
}

console.log(myBio);


// enum 
enum Days {
    Mondey,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

let today: Days = Days.Mondey;
console.log("Hari ini adalah hari: " + Days[today]);


// Seller
interface Seller {
    id: number,
    name: string,
    items: string[],
    address?: string
}

const mine: Seller = {
    id: 7,
    name: "Paloh",
    items: ["milk", "apple"]
}

console.log(mine);

// Function Interface

interface Calculator {
    (x: number, y: number): number
}

const add: Calculator = function (x, y) {
    return x + y;
}

const subtract: Calculator = function (x, y) {
    return x - y;
}

const multiply: Calculator = function (x, y) {
    return x * y;
}

const divide: Calculator = function (x, y) {
    if (y === 0) {
        throw new Error("Pembagian dengan angka nol (0) tidak diperbolehkan")
    }
    return x / y;
}

console.log("Penjumlahan: " + add(5, 3));
console.log("Pengurangan: " + subtract(5, 3));
console.log("Perkalian: " + multiply(5, 3));
console.log("Perkalian: " + divide(10, 2));


// Indexable Interface

interface Mahasiswa {
    [key: string]: string | number
}

let mhs1: Mahasiswa = {
    name: "Sang Pisang",
    age: 26,
    nim: "67451267451674"
}

console.log("Nama Mahasiswa : " + mhs1.name);
console.log("Umur Mahasiswa : " + mhs1.age);
console.log("Nim Mahasiswa : " + mhs1.nim);

// function
function sayHello(name: string): string {
    return `Hello ${name}`
}

console.log(sayHello("World"));


function calc(x: number, y: number): number {
    return x + y
}

// pemanggilan function calc
const tambah: number = calc(5, 10)
console.log(tambah);