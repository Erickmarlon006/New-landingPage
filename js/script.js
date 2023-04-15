var form = document.getElementById("assinar");
var settings = {
    "url": "https://www.googleapis.com/books/v1/volumes/FVYtAAAAYAAJ",
    "method": "GET"

}
$.ajax(settings).done(function(reponse){
    console.log(reponse);
    $("#book").text(reponse.volumeInfo.title);
    $("#author").text(reponse.volumeInfo.authors[0]);
    console.log(reponse.volumeInfo.title);
    console.log(reponse.volumeInfo.authors[0]);


})


$("#assinar").submit(function(e){
    e.preventDefault();
    alert("email enviado com sucesso!");
    console.log(document.getElementById("email").value);
    console.log($("#email").attr("value"));
    $("#answer").text("Requisição enviada. Boa Sorte");
})