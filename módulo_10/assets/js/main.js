$(document).ready(function(){
    $('.button-gg').hover(function() {
        $(this).find('.g, .o, .o2, .g, .l, .e').css('color', '#fff');
    }, function() {
        $(this).find('.g, .o, .o2, .g, .l, .e').css('color', '');
    });
    $('.button-gg').hover(function(){
        $(this).find('img').attr('src', './assets/icones/gg-b.jpg')
    }, function() {
        $(this).find('img').attr('src', './assets/icones/google.png')
    });
    $('#telefone').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000')
    $('form').validate({
        rules: {
            login: {
                required: true
            },
            password: {
                required: true
            },
            nome: {
                required: true
            },
            email: {
                required: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            logradouro: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            login: 'Por favor, insira seu usuário.',
            password: 'Por favor, insira sua senha.',
            nome: 'Por favor, insira o seu nome completo.',
            email: 'Por favor, insira um e-mail válido.',
            telefone: 'Por favor, insira o número de telefone com DDD.',
            cpf: 'Por favor, insira o CPF do usuário.',
            logradouro: 'Por favor, insira o endereço da residência.',
            cep: 'Por favor, insira o cep de sua residência'
        },
        submitHandler: function(form) {
            alert(`Usuário cadastrado com sucesso!`)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if(camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorreto!`)
            }
        }
    })
})