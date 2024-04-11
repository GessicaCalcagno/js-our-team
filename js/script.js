// TEST
//alert('ciao')

//************************************************ */
// Lo usiamo come controllo alla fine se c'è qualche problema di sintassi!
//"use strict";
//**************************************************** */

// MILESTONE 0
const team = [
  {
    name: "Wayne Barnett",
    job: "Founder & CEO",
    foto: "wayne-barnett-founder-ceo.jpg",
  },
  {
    name: "Angela Caroll",
    job: "Chief Editor",
    foto: "angela-caroll-chief-editor.jpg",
  },
  {
    name: "Walter Gordon",
    job: "Office Manager",
    foto: "walter-gordon-office-manager.jpg",
  },
  {
    name: "Angela Lopez",
    job: "Social Media Manager ",
    foto: "angela-lopez-social-media-manager.jpg",
  },
  {
    name: "Scott Estrada",
    job: "Developer",
    foto: "scott-estrada-developer.jpg",
  },
  {
    name: "Barbara Ramos",
    job: "Graphic Designer",
    foto: "barbara-ramos-graphic-designer.jpg",
  },
];

//Prove
//console.log(team[(0, 3)].job);


//___________________MILESTONE 1_______________________

//POSSO STAMPARE COL CICLO FOR
// for (let i = 0; i < team.length; i++) {
//   const curTeam = team[i]; //Object
//   console.log("________________");

// Stampo utilizzando dot notation sempre dentro il ciclo for
//   console.log(curTeam.name);
//   console.log(curTeam.job);
//-----------------

// Stampo tutte le proprietà del team corrente tramite il ciclo: For .. in. /DEENTRO IL CICLO FOR
//   for (let key in curTeam) {
//     console.log(curTeam[key]);
//   }
// }

team.forEach((curTeam) => {
  console.log(
    `Nome: ${curTeam.name}, Ruolo: ${curTeam.job}, Foto: ${curTeam.foto}
    __________________________________________________`
  );
});
