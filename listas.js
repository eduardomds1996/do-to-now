
$('.js_deletar_tarefa').on('click', function(e){
    $(this).parents('.ul-tarefa').html('');   
});


$('.js_deletar_subtarefa').on('click', function(e){
    $(this).parent().html('');
});

$('.js_deletar_lista').on('click', function(e){
    $(this).parents('.ul-lista').html('');
});


$('.js_editar_lista').on('click', function(){
   var nomeLista = $(this).parents('.linha').children('span').text();
   var elementoNomeLista = $(this).parents('.linha').children('span');
   elementoNomeLista.prev('input').show();
   elementoNomeLista.prev('input').focus();
   elementoNomeLista.hide();
   elementoNomeLista.prev('input').val(nomeLista);
});


$.fn.enterKey = function (fnc) {
    return this.each(function () {
        $(this).keypress(function (ev) {
            var keycode = (ev.keyCode ? ev.keyCode : ev.which);
            if (keycode == '13') {
                fnc.call(this, ev);
            }
        })
    })
}


$('.js_input_nome_lista').enterKey(function () {
    var novoNomeLista =  $(this).val();
    var elementoNomeLista = $(this).parents('.linha').children('span');
    $(this).hide();
    $(elementoNomeLista).text(novoNomeLista);
    $(elementoNomeLista).show();  
});

$('.js_adicionar_tarefa').on('click', function(){
    var  valorNovaTarefa = $(this).prev('input').val();
    var valorNovaTarefaRegex = valorNovaTarefa.replace(/\s/g, '');
    $(this).prev('input').val('');
    var ulNovaTarefa =  $(this).parents('.body');
    if(valorNovaTarefa != ''){
    ulNovaTarefa.append(`
        <ul>
            <li>
                <div class="linha">
                    <a href="">
                        <img src="./assets/images/icone_lista.png" title="Abrir lista" alt="Abrir lista">
                    </a>
                    <span>${valorNovaTarefa}</span>
                    <a href="">
                        <img src="./assets/images/icone_editar.png" alt="">
                    </a>
                    <a href="">
                        <img src="./assets/images/icone_deletar_lista.png" alt="">
                    </a>
                </div>
                <div class="adicionar-tarefa">
                    <input type="text" placeholder="Adicionar tarefa">
                    <button style="background-image: url('./assets/images/botao_adicionar.png');"></button>
                </div>                
            </li>                              
        </ul>
    `);
    }
});

$('.btn_adicionar_subtarefa').on('click', function(){
    var  valorNovaSubTarefa = $(this).prev('input').val();
    if(valorNovaSubTarefa != ''){
        var  ulSubTarefa = $(this).parent().prev();
        $(this).prev('input').val('');
        var valorNovaSubTarefaRegex = valorNovaSubTarefa.replace(/\s/g, '');
        ulSubTarefa.append(`
        <li>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="${valorNovaSubTarefaRegex}">
                <label class="form-check-label" for="${valorNovaSubTarefaRegex}">
                ${valorNovaSubTarefa}
                </label>
            </div>
            <a href="javascript:void(0);" class="js_deletar_subtarefa"><img src="./assets/images/icone_deletar_tarefa-subtarefa.png" alt=""></a>
        </li>
        `);
    }
   
});