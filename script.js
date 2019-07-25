var myData = JSON.parse(data);
let sumOfCountrys = 0;

function creatList() {
    myData.forEach( li => {
        document.querySelector('ul').innerHTML +=
            ` <li>
<div style="background-image: url(img/${li.abbreviation}.png)"></div>
<h4>${li.country}</h4>
<h5>${li.continent}</h5>
</li>`;
        sumOfCountrys++;
        document.querySelector('span').innerHTML = sumOfCountrys;
    });
}

window.onload = creatList;