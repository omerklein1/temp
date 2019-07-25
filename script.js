var myData = JSON.parse(data);

function creatList(data) {
    let sumOfCountrys = 0;
    document.querySelector('ul').innerHTML = "";
    data.forEach( li => {
        document.querySelector('ul').innerHTML +=
            ` <li>
<div style="background-image: url(img/${li.abbreviation}.png)"></div>
<h4>${li.country}</h4>
<h5>${li.continent}</h5>
</li>`;
        sumOfCountrys++;
        document.querySelector('span').innerHTML = `(${sumOfCountrys})`;
    });
}

function search() {
const text = document.querySelector('input').value;
const newData = myData.filter( obj => obj.country.startsWith(capitalizeFirstLetter(text)));
creatList(newData);
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


window.onload = creatList(myData);