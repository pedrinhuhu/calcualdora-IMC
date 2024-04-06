function calculoIMC(event) {
    event.preventDefault();
    let altura = document.getElementById('altura').value;
    let peso = document.getElementById('peso').value;

    let total = peso / (altura * altura);
    total = total.toFixed(1);
    document.getElementById('resultado').innerHTML = total;
    document.getElementById('resultadoIMC').style.display = "block";
}

document.getElementById('resultadoIMC').style.display = "none";

document.querySelector('.dadosUsuario').addEventListener('submit', calculoIMC);