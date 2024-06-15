// define an asynchronous function to fetch a random cat GIF
async function getRandomCatGif() {

    //use the fetch function to make a GET request to the provided API URL
    //the await keyword pauses the execution of the function until the fetch promise resolves
    const response = await fetch("http://thecatapi.com/api/images/get?format=src&type=gif");

    //output the image URL in the console
    console.log(response.url);
}

//call the function to fetch and output a random cat GIF
getRandomCatGif();