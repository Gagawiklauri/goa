let balance=500;

let withdrawAmount = 600;

let isAccountActive =true;

switch (true) {

  case (!isAccountActive):
    console.log("ტრანზაქცია უარყოფილია: ბარათი დაბლოკილია.");
    break;


  case (withdrawAmount <= 0):
    console.log("გთხოვთ, მიუთითოთ ვალიდური თანხა.");
    break;


  case (withdrawAmount > balance):
    console.log("არასაკმარისი ნაშთი.");
    break;


  case (withdrawAmount === balance):
    console.log("ტრანზაქცია სრულდება. თქვენი ბალანსი ნულდება!");
    break;


  default:
    console.log("ტრანზაქცია წარმატებულია.");
    break;
}






function isAllowed(age) {
  if (age >= 18) {
    return "წვდომა დაშვებულია";
  } else {
    return "წვდომა აკრძალულია";
  }
}


const ages = [15, 20, 18];



























let userAge = 12;



if(userAge >= 18){
    return "ზრდა სრული ხარ!";
}else{
    return "არ ხარ ზრდა სრული!"
}