$(document).ready(function() {
    $('input').focus(function(){
        $(this).next('.form-text').css('display', 'block');
    });
    $('input').blur(function(){
        $(this).next('.form-text').css('display', 'none');
    });
    $('#tel').mask('(00) 00000-0000');
    $('form').validate({
        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            tel: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira seu nome.',
            email: 'Por favor, insira seu e-mail.',
            tel: 'Por favor, insira seu telefone com DDD'
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
});
