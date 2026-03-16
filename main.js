console.log('funzia');

/* In questo esercizio, utilizzerai async/await per creare la funzione getChefBirthday(id). Questa funzione accetta un id di una ricetta e deve:
Recuperare la ricetta da https://dummyjson.com/recipes/{id}
Estrarre la proprietà userId dalla ricetta
Usare userId per ottenere le informazioni dello chef da https://dummyjson.com/users/{userId}
Restituire la data di nascita dello chef */

async function fetchJson(url) {
    const response = await fetch(url)
    const obj = await response.json()
    return obj;
}

async function getChefBirthday(id) {
    let ricetta;
    try {
        ricetta = await fetchJson(`https://dummyjson.com/recipes/${id}`)
        console.log(ricetta);

    } catch (error) {
        throw new Error(`Non posso recuperare la ricetta con id ${id}`);
    }

    let chef;
    try {
        chef = await fetchJson(`https://dummyjson.com/users/${ricetta.userId}`)
        const compleanno = `${chef.birthDate}`
        console.log(compleanno);

    } catch (error) {
        throw new Error(`Non trovo lo chef con id ${ricetta.userid}`);
    }

    let nascita;
    try {
        questo = await fetchJson(`https://dummyjson.com/users/${ricetta.userId}`)
        quello = `${chef.birthDate}`
        nascita = quello
    } catch (error) {

    }

    return { ...ricetta, chef, nascita }
}

(async () => {
    try {
        const compleannoChef = await getChefBirthday(1)
        console.log(`Il compleanno è il:`, compleannoChef.nascita);

    } catch (error) {
        console.error(error);

    } finally {
        console.log('finito');

    }
})();

/* async function getChefBirthday(id) {
    let ricetta = await fetchJson(`https://dummyjson.com/recipes/${id}`)
    let chef = await fetchJson(`https://dummyjson.com/users/${ricetta.userId}`)
    let nascita = await fetchJson(`https://dummyjson.com/users/${ricetta.userId}`)


    return { ...ricetta, chef, nascita }
} */