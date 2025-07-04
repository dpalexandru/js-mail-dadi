// genero numeri casuali sia per il pc che per l'utente
punteggioPc = Math.floor(Math.random() * 6) + 1;
punteggioGiocatore = Math.floor(Math.random() * 6) + 1;


// Confronto i risultati e decido se ha vinto il pc, giocatore o è un pareggio

if (punteggioPc === punteggioGiocatore) {
  console.log(`Pc: ${punteggioPc} vs Giocatore: ${punteggioGiocatore}`)
  console.log(`E' un pareggioo!!!!`)}
  else if (punteggioPc > punteggioGiocatore) {
  console.log(`Pc: ${punteggioPc} vs Giocatore: ${punteggioGiocatore}`)
  console.log(`Ha vinto il Pc !!!! `)
  }
  else {
  console.log(`Pc: ${punteggioPc} vs Giocatore: ${punteggioGiocatore}`)
  console.log(`Ha vinto il Giocatoreee !!!!`)
  }
