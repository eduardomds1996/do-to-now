$('#form_criar_lista').on('submit', function(event){    
    event.preventDefault();
    var nomeNovaLista = $('#input_nome_nova_lista').val();
    $('.previa-lista .body').append(`
        <ul>
            <li>
                <div class="linha">
                    <a href="">
                        <img src="./assets/images/icone_lista.png" title="Abrir lista" alt="Abrir lista">
                    </a>
                    <span>${nomeNovaLista}</span>
                    <a href="">
                        <img src="./assets/images/icone_editar.png" alt="">
                    </a>
                    <a href="">
                        <img src="./assets/images/icone_deletar_lista.png" alt="">
                    </a>
                </div>
                <ul>
                    <li>
                        <div class="tarefa">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="tarefa1">
                                <label class="form-check-label" for="tarefa1">
                                  
                                </label>
                            </div>
                            <a href=""><img src="./assets/images/icone_deletar_tarefa-subtarefa.png" alt=""></a>
                        </div>                                               
                    </li>
                </ul>
            </li>                              
    </ul>
    `);
});

$('.adicionar_tarefa').on('click', function(){
    var refAdd = $(this).parent();

    $(refAdd).after(`
        <div class="adicionar-tarefa mt-2 ml-0 mr-0 mb-0">
            <input type="text" placeholder="Adicionar tarefa">
        </div>
    `);
});