


//client-არის ის ვიგანაც ვიღებთ ინფორმაციას და ვისაც გააქ ინფორმაცია server-იდან
//server- არის ის რაშიც client-ს შეაქ და გააქ ინფორმაცია
//http-მეთოდით client-ს შეაქ და გააქ ინფორმაცია server-იდან
//tcp-არის გზა client-სა და server-ს შორის
//სტატუს კოდი 200 ok-არის ვთქვათ წარმატება ხოლო 404 არის პირიქით წარუმატებლობა
//HTTP-სა და HTTPS-ს შორის განსხვავება ისაა რომ HTTPS-ს უფრო უსაფრთხოა



//get - ვიყენებთ რომ server-ში ინფორმაცია მივიროთ და Post-ი არის რაიმე ინფორმაციის ინტერნეტში ატვირთვა






























async function addTodo() {
  try {
    const todo = todoInput.value;

    const body = JSON.stringify({
      task: todo
    });

    const response = await fetch(url, {
      method: 'POST',
      body: body
    });

    if (response.ok) {
      return await response.json();
    }

    throw new Error('Failed to add todo');
  } catch (error) {
    console.log(error.message);
  }
}

