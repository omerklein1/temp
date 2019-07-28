let myData;
const sea = document.querySelector('input');
const modal = document.querySelector('.modal');
sea.oninput = search

async function getCountries() {
    try {
        const response = await axios.get('https://restcountries.eu/rest/v2/all');
        myData = response.data;
        creatList(myData)
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

function creatList(data) {
    let sumOfCountries = 0;
    document.querySelector('ul').innerHTML = "";
    data.forEach(li => {
        document.querySelector('ul').innerHTML +=
            ` <li onClick="popUp(id)" id="${li.name}">
<div style="background-image: url(${li.flag})"></div>
<h4>${li.name}</h4>
<h5>${li.subregion}</h5>
</li>`;
        sumOfCountries++;
        document.querySelector('span').innerHTML = `(${sumOfCountries})`;
    });
}

function search(e) {
    const { value } = e.target;
    if (!value) {
        creatList(myData)
    }
    const newData = myData.filter(obj => obj.name.startsWith(capitalizeFirstLetter(value)));
    creatList(newData);
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function popUp(id)  {
    modal.style.display = "block";
const country = myData.find(n => n.name == id)
console.log(country)
    modal.innerHTML =
`
<div style="background-image: url(${country.flag})"></div>
<h4>${country.name}</h4>
<h5>${country.subregion}</h5>
</li>
`
}

window.onload = getCountries;