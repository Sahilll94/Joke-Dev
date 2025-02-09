document.getElementById("getJoke").addEventListener("click", fetchJoke);

async function fetchJoke() {
    const jokeElement = document.getElementById("joke");

    try {
        const response = await fetch("https://v2.jokeapi.dev/joke/Any");
        const data = await response.json();

        if (data.type === "single") {
            jokeElement.textContent = data.joke;
        } else {
            jokeElement.innerHTML = `${data.setup} <br><br> <strong>${data.delivery}</strong>`;
        }
    } catch (error) {
        jokeElement.textContent = "Oops! Couldn't fetch a joke. Try again!";
    }
}
