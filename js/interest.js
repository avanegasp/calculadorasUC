
  function valorInicial(){

    var valor=document.getElementById("valorInicial").value;
  };

  function anos(){
    var anitos = document.getElementById("anos").value;
  };

  function tasa(){
    var tasaInicial = document.getElementById("tasa").value / 100;
  }

  function convertidor (){
    var valor=document.getElementById("valorInicial").value;
    var anitos = document.getElementById("anos").value;
    var tasaInicial = document.getElementById("tasa").value / 100;

    var resultado= valor * tasaInicial / anitos;
    document.getElementById("total").value= "$" + resultado + " pesos de intereses durante " + anitos + " años";
  }
