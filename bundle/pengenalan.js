"use strict";
// tipe data primitf
var myName = 'sony';
let what = true;
const myNumber = 11;
console.log(myName);
console.log(what);
console.log(myNumber);
// tipe data array
const myCar = ["tesla", "bmw", "porse", "nissan"];
const myFingger = [123, 234, 45, 678];
console.log(myCar);
console.log(myFingger);
// Tipe data any
let myColor = "yellow";
console.log(myColor);
// Read Only Array (tidak dapat di ubah)
const myHobbies = ["Badmin", "soccer", "swimming"];
// Tuple (tipe data array berurutan sesuai indexnya)
const myUser = ["Mega", "indonesia", 55];
console.log(myUser);
// Union Type(tipe data yang dapat di gabungkan)
let sample = "Prab";
sample = 11;
sample = true;
sample = false;
sample = 'proabowo menang';
console.log('disini woii ' + sample);
// Typeof
function prosessTypeof(hasil) {
    if (typeof hasil === "string") {
        return hasil.toUpperCase();
    }
    else if (typeof hasil === "number") {
        return hasil.toString() + " change!";
    }
    else {
        return !hasil;
    }
}
console.log(prosessTypeof("indonesia"));
console.log(prosessTypeof(11));
console.log(prosessTypeof(true));
const objek1 = {
    id: 1,
    name: "Electronic"
};
const objek2 = {
    id: 2,
    name: "Gibrn",
    age: 38
};
console.log(objek1);
console.log(objek2);
// object Type
const someone = {
    id: 1,
    name: "rambut putih"
};
console.log(someone);
const myBio = {
    id: 1,
    name: "Paman",
    // hobbies: ["sayang anak", "baca koran"]
};
console.log(myBio);
// enum 
var Days;
(function (Days) {
    Days[Days["Mondey"] = 0] = "Mondey";
    Days[Days["Tuesday"] = 1] = "Tuesday";
    Days[Days["Wednesday"] = 2] = "Wednesday";
    Days[Days["Thursday"] = 3] = "Thursday";
    Days[Days["Friday"] = 4] = "Friday";
    Days[Days["Saturday"] = 5] = "Saturday";
    Days[Days["Sunday"] = 6] = "Sunday";
})(Days || (Days = {}));
let today = Days.Mondey;
console.log("Hari ini adalah hari: " + Days[today]);
const mine = {
    id: 7,
    name: "Paloh",
    items: ["milk", "apple"]
};
console.log(mine);
const add = function (x, y) {
    return x + y;
};
const subtract = function (x, y) {
    return x - y;
};
const multiply = function (x, y) {
    return x * y;
};
const divide = function (x, y) {
    if (y === 0) {
        throw new Error("Pembagian dengan angka nol (0) tidak diperbolehkan");
    }
    return x / y;
};
console.log("Penjumlahan: " + add(5, 3));
console.log("Pengurangan: " + subtract(5, 3));
console.log("Perkalian: " + multiply(5, 3));
console.log("Perkalian: " + divide(10, 2));
let mhs1 = {
    name: "Sang Pisang",
    age: 26,
    nim: "67451267451674"
};
console.log("Nama Mahasiswa : " + mhs1.name);
console.log("Umur Mahasiswa : " + mhs1.age);
console.log("Nim Mahasiswa : " + mhs1.nim);
// function
function sayHello(name) {
    return `Hello ${name}`;
}
console.log(sayHello("World"));
function calc(x, y) {
    return x + y;
}
// pemanggilan function calc
const tambah = calc(5, 10);
console.log(tambah);
