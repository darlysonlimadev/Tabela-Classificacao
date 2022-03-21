var fec = {nome:"Fortaleza", vitorias:17, derrotas:14, empates:7, pontos:0}
var fla = {nome:"Flamengo", vitorias:21, derrotas:9, empates:8, pontos:0}
var galo = {nome:"Atlético-Mg", vitorias:26, derrotas:6, empates:6, pontos:0}
var porco = {nome:"Palmeiras", vitorias:20, derrotas:12, empates:6, pontos:0}
var timao = {nome:"Corinthians", vitorias:15, derrotas:11, empates:12, pontos:0}
var braga = {nome:"Bragantino", vitorias:14, derrotas:14, empates:10, pontos:0}
var flu = {nome:"Fluminense", vitorias:15, derrotas:14, empates:09, pontos:0}

function calculaPontos(time) {
   var pontos = (time.vitorias * 3) + time.empates;
   return pontos;  
}

var times = [fec, fla, galo, porco, timao, braga, flu];

fec.pontos = calculaPontos(fec)
fla.pontos = calculaPontos(fla)
galo.pontos = calculaPontos(galo)
porco.pontos = calculaPontos(porco)
timao.pontos = calculaPontos(timao)
braga.pontos = calculaPontos(braga)
flu.pontos = calculaPontos(flu)

function exibeTimesNaTela(times) {
  var elemento = ""
  for (var i = 0; i < times.length; i++) {
    elemento += "<tr><td>" + times[i].nome + "</td>";
    elemento += "<td>" + times[i].vitorias + "</td>";
    elemento += "<td>" + times[i].empates + "</td>";
    elemento += "<td>" + times[i].derrotas + "</td>";
    elemento += "<td>"+ times[i].pontos +"</td>";
    elemento += "<td><button onClick='adicionarVitoria("+ i +")'>+</button>Vitórias<button onClick='diminuirVitoria("+ i +")'>-</button></td>";
    elemento += "<td><button onClick='adicionarEmpate("+ i +")'>+</button>Empates<button onClick='diminuirEmpate("+ i +")'>-</button></td>";
    elemento += "<td><button onClick='adicionarDerrota("+ i +")'>+</button>Derrotas<button onClick='diminuirDerrota("+ i +")'>-</button></td>";
    elemento += "</tr>";
   }
   
    var tabelaTimes = document.getElementById("tabelaJogadores");
    tabelaTimes.innerHTML = elemento;

}

 exibeTimesNaTela(times);

 function adicionarVitoria(i) {
   var time = times[i]
   time.vitorias++;
   time.pontos = calculaPontos(time);
   exibeTimesNaTela(times);
 }

 function diminuirVitoria(i) {
  var time = times[i]
  time.vitorias--;
  time.pontos = calculaPontos(time);
  exibeTimesNaTela(times);
}

 function adicionarEmpate(i) {
   var time = times[i]
   time.empates++;
   time.pontos = calculaPontos(time);
   exibeTimesNaTela(times);
 }

 function diminuirEmpate(i) {
  var time = times[i]
  time.empates--;
  time.pontos = calculaPontos(time);
  exibeTimesNaTela(times);
}

 function adicionarDerrota(i) {
   var time = times[i]
   time.derrotas++;
   exibeTimesNaTela(times);
 }

 function diminuirDerrota(i) {
  var time = times[i]
  time.derrotas--;
  exibeTimesNaTela(times);
}




