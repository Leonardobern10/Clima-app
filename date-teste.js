const data = new Date()
const dataAtual = `0${data.getDate()} / 0${data.getMonth()+1} / ${data.getFullYear()}`
const horaAtual = `${data.getHours()}:${data.getMinutes()}`

console.log(data.getFullYear(), data.getMonth()+1, data.getDate(), data.getHours(), data.getMinutes() )

console.log(dataAtual)
console.log(horaAtual)