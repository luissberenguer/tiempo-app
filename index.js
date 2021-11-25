const apiKey = '1cbe984966f56909eeb2150ebd322fd9';

const getInputText = async () => {
    const input = document.getElementById('ciudad');
    const city = input.value
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    await fetchData(url)
}

const button = document.getElementById('boton')
button.addEventListener('click', getInputText)




async function fetchData(url) {
    const data = await fetch(url);
    const jsonData = await data.json();
    console.log(jsonData)


    const nombreData = jsonData["name"]
    const descripcionData = jsonData["weather"][0]["main"]
    const temperaturaData = jsonData["main"]["temp"]
    console.log(nombreData,descripcionData, temperaturaData )

    const title = document.getElementById('titulo-ciudad');
    const descripcion = document.getElementById('descripcion');
    const temperatura = document.getElementById('temperatura');
    const container = document.getElementById('container')


    title.textContent = nombreData;
    descripcion.textContent = descripcionData;
    temperatura.textContent = `${parseInt(temperaturaData)}°`;


}   

