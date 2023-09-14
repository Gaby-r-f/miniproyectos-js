const boton = document.querySelector('button');
const color = document.getElementById('color');

function colorAleatorio() {
    let digitos = '0123456789ABCDEF';
    let color = '#';

    for(let i = 0; i < 6; i++){
        let indiceAleatorio = Math.floor(Math.random() * 16);
        color += digitos[indiceAleatorio];
    }
    return color;
}
boton.addEventListener('click', function() {
    let coloraleatoriotext = colorAleatorio();
    color.textContent = coloraleatoriotext;
    document.body.style.backgroundColor = coloraleatoriotext;
});