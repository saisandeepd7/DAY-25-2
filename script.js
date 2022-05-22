

const charactersList = document.getElementById('new');




async function foo() {
    try {
        const res = await fetch('https://hp-api.herokuapp.com/api/characters');
        hpCharacters = await res.json();
        displayCharacters(hpCharacters);
    } catch (err) {
        console.error(err);
    }
}


function displayCharacters(characters) {
    const htmlString = characters
        .map((character) => {
            return `
            <div class="character">
            <img src="${character.image}" class="image"></img>
                <h3 class="name">${character.name}</h3>
                <p>House: ${character.house}</p>
                <p>Gender: ${character.gender}</p>
                <p>Wizard:${character.wizard}</p>
                <p>Ancestry: ${character.ancestry}</p>
                
            </div>
        `;
        })
        .join('');
    charactersList.innerHTML = htmlString;
    document.body.append(charactersList)
};

foo();
const searchBar = document.getElementById('searchBar');
let hpCharacters = [];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredCharacters = hpCharacters.filter((character) => {
        return (
            character.name.toLowerCase().includes(searchString) ||
            character.house.toLowerCase().includes(searchString)
        );
    });
    displayCharacters(filteredCharacters);
});

function home() {
    location.reload()
}





