//jshint esversion:6

const doggos = document.querySelector(".doggos");

const TERRIER_URL = "https://dog.ceo/api/breed/terrier/images/random";

function addNewDoggy() {
    const promise = fetch(TERRIER_URL);
    promise
        .then(function (response) {
            const processingPromise = response.json();
            return processingPromise;
        })
        .then(function (processedResponse) {
            const img = document.createElement("img");
            img.src = processedResponse.message;
            img.alt = "doggy picture";
            doggos.appendChild(img);
        });
}

document.querySelector(".add-doggy").addEventListener("click", addNewDoggy);

document.body.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        addNewDoggy();
    }
});