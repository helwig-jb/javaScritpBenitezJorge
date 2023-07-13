let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let intentos = 0;
let numeroIngresado;

while (numeroIngresado !== numeroAleatorio) {
  numeroIngresado = parseInt(prompt("Adivina el número (entre 1 y 100):"));
  intentos++;

  if (numeroIngresado > numeroAleatorio) {
    alert("Intenta con un número más bajo");
  } else if (numeroIngresado < numeroAleatorio) {
    alert("Intenta con un número más alto");
  }
}

alert("¡Felicidades! Adivinaste el número " + numeroAleatorio + " en " + intentos + " intentos.");
