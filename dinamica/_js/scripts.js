/**
 * Created by X on 24/10/2014.
 */

$(function() {
    document.getElementById("entrada").onkeypress = function(e) {
        if (e.keyCode == 13 && document.getElementById("entrada").value != null && document.getElementById("entrada").value != "") {
            Adicionar();
            e.preventDefault();
        }
    }
});

function Adicionar() {
    $("#tabela-interesse tbody").append(
            "<tr>"
            + "<td>"
            + document.getElementById("entrada").value
            + "</td>"
            + "<td><img src='_imagens/excluir.png' class='btnExcluir' width='15px' heidth='15px' title='Excluir'/>   "
            + "   <img src='_imagens/seta.png' class='btnAlterar' width='25px' heidth='25px' title='Alterar'>"
            + "</td>"
            + "</tr>");

    $(".btnExcluir").bind("click", Excluir);
    $(".btnAlterar").bind("click", Alterar);
    document.getElementById("entrada").value = "";
};

function Alterar() {
    var valor = $(this).parent().parent();
    $("#tabela-conhecido tbody").append(valor);
    $(".btnExcluir").bind("click", Excluir);
};

function Excluir() {
    var par = $(this).parent().parent();
    par.remove();
};