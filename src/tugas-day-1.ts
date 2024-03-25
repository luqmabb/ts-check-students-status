
interface checkGraduateInterface {
    (id: number,name: string,score: number,presentase: number) : string
}

const checkGraduate: checkGraduateInterface = function(id,name,score,presentase){
    if(score === 100 && presentase >= 80){
        return `id : ${id}, nama : ${name}, status: cumlaude`
    } else if(score >= 70 && presentase >= 70) {
        return `id : ${id}, nama : ${name}, status: lulus`
    } else {
        return `id : ${id}, nama : ${name}, status: tidak lulus`
    }
}

console.log(checkGraduate(1,'indah', 100, 100))
console.log(checkGraduate(2,'galih', 70, 70))
console.log(checkGraduate(3,'danu', 10, 20))