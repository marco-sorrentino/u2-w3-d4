// Faccio partire la chiamata
// La fetch torna una promise, che gestiro con .then e .catch
fetch("https://jsonplaceholder.typicode.com/albums");

const asyncAwaitExample = async () => {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/albums");
    console.log(response);
    if (response.ok) {
      let data = await response.json();
      console.log(data);
    }
  } catch (error) {
    console.log(error);
  }
};

asyncAwaitExample();
