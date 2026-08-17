//  Error Handling გვეხმარება იმაში რომ აღმოვაჩინოთ ერორები და პროგრამა უცებ არ გაიყინოს





// async function loadPlayerProfile() {
//     try {
//         const results = await Promise.all([
//             fetchPlayerStats(),
//             fetchInventory(),
//             fetchMatchHistory()
//         ]);

//         for (let i = 0; i < results.length; i++) {
//             console.log(results[i]);
//         }



//     } catch (error) {
//         console.log(error.message)
//     }
// }

// loadPlayerProfile();













function uploader() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("ვიდეო აიტვირთა");
    }, 2000);
  });
}

function createTamb() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("თამბნეილი მზადაა");
    }, 1000);
  });
}

function check() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("საავტორო უფლებები სუფთაა");
    }, 1500);
  });
}

async function publish() {
  try {
    const results = await Promise.all([
      uploader(),
      createTamb(),
      check()
    ]);

    for (let i = 0; i < results.length; i++) {
      console.log(results[i]);
    }

    console.log("ვიდეო წარმატებით გამოქვეყნდა!");
  } catch (error) {
    console.log(error.message);
  }
}

publish();