var form = document.getElementById('form');
form.addEventListener('submit', verificaNumero);

function verificaNumero(event) {
    event.preventDefault();

    const primeiroNumero = document.getElementById('number-a').valueAsNumber;
    const segundoNumero = document.getElementById('number-b').valueAsNumber;
    const value = document.getElementById('value');
    let description = '';
    document.getElementById('infos').classList.remove('hidden');

    if (segundoNumero > primeiroNumero){
        description = 'O valor de B é maior do que o valor de A.' 
    } else if (segundoNumero < primeiroNumero){
        description = 'O valor de B é menor do que o valor de A.'
    } else {
        description = 'O valor de B é igual ao valor de A.'
    }

    document.getElementById('description').textContent = description
}