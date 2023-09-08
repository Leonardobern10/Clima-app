const temperatura = document.getElementById("temp-principal")
const velocidadeDoVento = document.getElementById("velocidade-do-vento")
const data = new Date()

function obterClima(){
    
    const latitude = -30.0694286
    const longitude = -51.1806989
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,apparent_temperature,precipitation_probability,rain&current_weather=true`

    fetch(url)
    .then((response => {
        return response.json()
    }))
    .then((jsonBody) => {
        console.log(jsonBody)
        const temperatura_atual = jsonBody.current_weather.temperature
        const velocidadeVento = jsonBody.current_weather.windspeed
        console.log(temperatura, velocidadeVento)
        temperatura.textContent = Math.ceil(temperatura_atual)
        velocidadeDoVento.textContent = Math.ceil(velocidadeVento)
        return jsonBody
    })
    .then((again)=>{
        console.log(again.hourly.time)
    })
    .catch((error) => {
        console.error(error)
    })
    .finally(console.log("requisição concluida"))

}

obterClima()