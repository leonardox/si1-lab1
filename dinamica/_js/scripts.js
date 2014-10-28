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
            + "<td><img src='http://sr.photos2.fotosearch.com/bthumb/CSP/CSP992/k12540490.jpg' class='btnAlterar' width='25px' heidth='25px' title='Alterar'>"
            + "<img src='http://pixabay.com/static/uploads/photo/2013/07/12/12/48/recycle-bin-146275_640.png' class='btnExcluir' width='15px' heidth='15px' title='Excluir'/></td>"
            + "</tr>");

    $(".btnExcluir").bind("click", Excluir);
    $(".btnAlterar").bind("click", Alterar);
    document.getElementById("entrada").value = "";
};

function Alterar() {
    var valor = $(this).parent().parent();
    $("#tabela-conhecido tbody").append(valor);
    $(".btnExcluir").bind("click", Excluir);
    $(".btnAlterar").bind("click", Alterar1);
};

function Excluir() {
    var par = $(this).parent().parent();
    par.remove();
};