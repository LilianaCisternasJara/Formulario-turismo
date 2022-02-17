
let data = [{ "name": "Lev", "age": "99", "weight": "127", "health": "unhealthy", "allergy": "No" }, { "name": "Odysseus", "age": "92", "weight": "80", "health": "healthy", "allergy": "Yes" }, { "name": "Theodore", "age": "75", "weight": "111", "health": "healthy", "allergy": "Yes" }, { "name": "Summer", "age": "46", "weight": "125", "health": "unhealthy", "allergy": "No" }, { "name": "Justine", "age": "83", "weight": "91", "health": "unhealthy", "allergy": "No" }, { "name": "Astra", "age": "22", "weight": "85", "health": "healthy", "allergy": "No" }, { "name": "Fletcher", "age": "80", "weight": "135", "health": "unhealthy", "allergy": "No" }, { "name": "Nash", "age": "53", "weight": "101", "health": "unhealthy", "allergy": "No" }, { "name": "Keegan", "age": "26", "weight": "72", "health": "healthy", "allergy": "Yes" }, { "name": "Eric", "age": "44", "weight": "98", "health": "healthy", "allergy": "Yes" }];

let numpersonas = data.length;

//Mayores de edad//

let mayoresEdad = 0;
for (let i = 0; i < numpersonas; i++) {
    if (data[i].age >= 18) {
        mayoresEdad++
    }
}
    console.log(mayoresEdad)

//Más de 90 kg//

let mayorNoventa = 0;

for (let i = 0; i < numpersonas; i++)
{
    if (data[i].weight > 90) {
        mayorNoventa++
    }
}
console.log(mayorNoventa)
 
//Promedio edades//

function promedio(data) {
    let sumaAge = 0;
    for (let i = 0; i < numpersonas; i++);
    sumaAge = sumaAge + data[i].age;
}
let promedioAge = sumaAge / numpersonas;

//Nombres ordenados alfabéticamente

data.sort((a, b) => {
    if (a.name < b.name) {
        return -1;
    }
    if (a.name > b.name) {
        return 1;
    }
    return 0;
})
console.log(data);