/*
  <!--El archivo grades.html representa un programa JavaScript
  que calcula la letra asociada con una calificación numérica
   proporcionada por el usuario. El programa generará la letra
   apropiada basada en los siguientes parámetros:


  A → grado numérico> = 90
  B → grado numérico> = 80
  C → grado numérico> = 70
  NP → de lo contrario (No Presento)
  */


        function grades () {
          var gradoNumerico = document.getElementById("numero").value

        if (gradoNumerico >= 90){
          alert("Grado númerico A")
        } else if (gradoNumerico >= 80 && gradoNumerico <= 89) {
          alert("Grado númerico B")
        } else if(gradoNumerico >= 70 && gradoNumerico <= 79){
          alert("Grado númerico C")
        } else {
          alert("No presento NP")
        }
      };
