const hobbies = [
    "Coversar",
    "Cozinhar",
    "Academia",
    "Ouvir musica"
];

const novosHobbies = hobbies.map((hobby) => {
     return `<p>${hobby}</p>`;
    
});

console.log(novosHobbies);