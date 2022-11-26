function scuberGreetingForFeet(ride){
  if (ride <= 400) {
    return "This one is on me!";
  } else if (ride > 2000 && ride < 2501) {
    return "I will gladly take your thirty bucks.";
  } else {
    return "No can do.";
  }
} // Write your code here!

function ternaryCheckCity(city) {
  // Write your code here!
  return city === "NYC" ? "Ok, sounds good." : "No go.";
}


function switchOnCharmFromTip(tip) {
  // Write your code here!
  if (tip === "generous") {
    return "Thank you so much.";
  } else if (tip === "not as generous") {
    return "Thank you.";
  } else {
    return "Bye."
  }

}

console.log(switchOnCharmFromTip("generous"));
