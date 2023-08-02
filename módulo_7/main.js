var form = document.getElementById('form');
form.addEventListener('submit', verificaNumero);

function verificaNumero(event) {
    event.preventDefault();

    const primeiroNumero = document.getElementById('number-a');
    const segundoNumero = document.getElementById('number-b');
    let description = '';
    document.getElementById('infos').classList.remove('hidden');

    if (segundoNumero.valueAsNumber > primeiroNumero.valueAsNumber){
        description = 'O valor de B é maior do que o valor de A.' 
    } else if (segundoNumero.valueAsNumber < primeiroNumero.valueAsNumber){
        description = 'O valor de B é menor do que o valor de A.'
    } else {
        description = 'O valor de B é igual ao valor de A.'
    }

<<<<<<< HEAD
    document.getElementById('description').textContent = description;
};
=======
    document.getElementById('description').textContent = description
}
>>>>>>> 8a50240ed72c9699483fbb263d191cc6ec1ae94d
