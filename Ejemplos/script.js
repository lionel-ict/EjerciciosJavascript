function suma(){
    //console.log("Prueba");
    let v1 = document.querySelector('#valor1');
    let v2 = document.querySelector('#valor2');
    let res = document.querySelector('#res');
    res.innerText = parseInt(v1.value) + parseInt(v2.value);
}