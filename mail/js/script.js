//Creo una lista mail degli invitati

const invitati = ["ciccio@gmail.com", "pasticcio@gmail.com", "pippo@gmail.com","alex@gmail.com","boolean@gmail.com"];

//chiedo la mail all'utente e la visualizzo
const email = prompt("Inserisci la tua email:");
console.log(`Hai inserito: ${email}`);


// creo variabile booleana preste o no
presente = false;

// verifico se la mail inserita è presente negli initati

for (i=0; i<invitati.length; i++)
  if (email === invitati[i]){
        presente = true 
      }
 
//Stampo il risultato invitato o non invitato
if (presente === false) {
    console.log ('Non sei invitato.')
}
else {
  console.log ('Ti aspettiamo alla fsta porta qualcosa da casa.')
}



