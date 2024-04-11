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
    photo: "wayne-barnett-founder-ceo.jpg",
  },
  {
    name: "Angela Caroll",
    job: "Chief Editor",
    photo: "angela-caroll-chief-editor.jpg",
  },
  {
    name: "Walter Gordon",
    job: "Office Manager",
    photo: "walter-gordon-office-manager.jpg",
  },
  {
    name: "Angela Lopez",
    job: "Social Media Manager ",
    photo: "angela-lopez-social-media-manager.jpg",
  },
  {
    name: "Scott Estrada",
    job: "Developer",
    photo: "scott-estrada-developer.jpg",
  },
  {
    name: "Barbara Ramos",
    job: "Graphic Designer",
    photo: "barbara-ramos-graphic-designer.jpg",
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
    `Nome: ${curTeam.name}, Ruolo: ${curTeam.job}, Foto: ${curTeam.photo}
    __________________________________________________`
  );
});

// //___________________MILESTONE 2_______________________
// //Prova stampa in DOM semplice
// team.forEach((curTeam) => {
//   console.log(curTeam);
//   let contElem = document.getElementById("container");
//   contElem.innerHTML += `
//     <div>
//     <h2 id="name"> Nome: ${curTeam.name} </h2>
//     <p id="job"> Job: ${curTeam.job} </p>
//     <img src="../img/${curTeam.photo}" alt="Foto di ${curTeam.name}">
//     </div>`; // Bonus 1
// });

//___________________MILESTONE 2_______________________
//Prova stampa in DOM semplice
team.forEach((curTeam) => {
  console.log(curTeam);
  let contElem = document.getElementById("members");
  contElem.innerHTML += `
  <div class="col" >
    <div class="card-group">
        <div class="card mt-3" id="color-card">
          <img src="../img/${curTeam.photo}" class="card-img-top" alt="..." />
          <div class="card-body text-center">
            <h5 class="card-title" style="font-family: 'Georgia', serif;">${curTeam.name}</h5>
            <p class="card-text" style="font-style: italic;">
            ${curTeam.job}
            </p>
          </div>
        </div>
      </div>
      </div>

    `;
});
