// chiedi l'email all'utente
var email_utente = prompt("Inserisci email");


// creare email tipo
var emails = ["dome@gmail.com", "pino@gmail.com", "garo@gmail.com"];
console.log(emails);

var emailSistema = false;

// controllare che email sia nella lista
for(var i = 0; i<emails.length; i++){
  if(email_utente == emails[i]){
    emailSistema = true;
    console.log("benvenuto");
  }
}
