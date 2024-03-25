function num(x:number) {
    let arr: number[] = []
    for(let i = 1; i <= x; i++) {
        arr.push(i)
    }
    return arr
}
console.log(num(99))