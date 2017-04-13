var total = 0;

function convertidor(){
  var valorInicial = document.getElementById('valorInicial').value
  var años = document.getElementById('años').value
  var tasa= 0.18;
  var total = valorInicial * tasa * años;

  return alert(total + " PESOS")
};

/*

    let valorInicial= parseInt(prompt("ingrese el valor Inicial"));
    let años = parseInt(prompt("ingrese los años"));;
    let tasa = 0.18;
    let total = valorInicial * tasa * años;

    let convertidor = (valorInicial, años)=> total + " pesos"

    console.log(`el valor inicial es ${valorInicial}, ha ${años} año(s), el valor que debo pagar es ${total} pesos anualmente`)


"Introduzca el valor inicial"
"Introduzca la tasa (valor porcentual)"
"Ingrese el número de años"
    let convertidor = (valorInicial, años)=> total + " pesos";

    let valorInicial= document.getElementById('valorInicial').value;
    let años = document.getElementById('años').value;
    let tasa = 0.18;
    let total =valorInicial * tasa * años;


  console.log(`el valor inicial es ${valorInicial}, ha ${años} año(s), el valor que debo pagar es ${total} pesos anualmente`)

*/
