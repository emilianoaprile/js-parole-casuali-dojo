console.log('API parole casuali')

const array = []
const numberOfRequests = 10
const requestPromises = []

for (let i = 0; i < numberOfRequests; i++) {
    const requestPromise = axios.get('https://flynn.boolean.careers/exercises/api/random/word')
        .then((res) => {
            // res contiene la risposta del server
            const word = res.data.response
            console.log(word)

            array.push(word)
        })
        .catch((error) => {
            console.error('Errore nella chiamata API:', error)
        });

    requestPromises.push(requestPromise)
}

Promise.all(requestPromises)
    .then(() => {
        // le chiamate API sono state completate
        console.log(array)

        // concateno tutti gli elementi dell'array e li stampo nel DOM
        const concatenatedWords = array.join('')
        const outputElement = document.getElementById('randomWord')
        outputElement.textContent = concatenatedWords
    });
