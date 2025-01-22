let url = "https://restcountries.com/v3.1/name/";
const inputName = document.getElementById('country-name');
const btn = document.getElementById('btn');
const flagName = document.getElementById('flag');
const countryname = document.getElementById('name');

btn.addEventListener('click', countryData)

function setCountryData(data) {
    countryname.innerHTML = `
    <h1>Name : ${data[0].name.common}</h1>
    <h1>capital : ${data[0].capital}</h1>
    <h1>Continent : ${data[0].continents}</h1>
    <h1>Population : ${data[0].population}</h1>
    <h1>Flag:</h1><img src="${data[0].flags.png}"/>
    `
}

async function countryData() {
    try {
        url += inputName.value;
        let input =await fetch(url);
        let data = await input.json()
        console.log(data.length)
        console.log(data)
        setCountryData(data)
    } catch (error) {
        console.error("it's not working"+ error);
    }
}