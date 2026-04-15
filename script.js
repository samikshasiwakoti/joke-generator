async function getJoke() {
    const jokeBox = document.getElementById('jokeBox');
    jokeBox.innerHTML = 'Loading 😂...';
    try{
        const response = await fetch('https://official-joke-api.appspot.com/random_joke');
        const data = await response.json();
        jokeBox.innerHTML = `
         <p>${data.setup}</p>
          <h3>${data.punchline}</h3>
       `;
    } catch (error) {
        jokeBox.innerHTML = 'Failed to fetch joke 😢';
        console.error('Error fetching joke:', error);
    }



}
