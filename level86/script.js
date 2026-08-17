// async function getBlogPost() {
//     try {
//         const ftch = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//         const postData = await ftch.json();
        
//         console.log("სტატიის სათაურია: " + postData.title);
//     } catch (error) {
//         console.log("ბოდიში, სერვერზე შეფერხებაა: " + error);
//     }
// }

// getBlogPost();

let downloadMap = 10
let downloadCharacter = "gugu gaga"
let downloadAudio = "speaker"


async function startGame() {
    const mapPromise = downloadMap;
    const charPromise = downloadCharacter;
    const audioPromise = downloadAudio;

    console.log(`თამაში მზადაა! ჩაიტვირთება: ${await mapPromise}, ${await charPromise}, და ${await audioPromise}.`);
}

startGame();


