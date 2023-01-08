// variables
  const age = 26;
  const beverage = age >= 21 ? "Beer" : "Juice";
  console.log(beverage); // "Beer"

// functions
const greeting = (person) => {
    const name = person ? person.name : "stranger";
    return `Howdy, ${name}`;
  }
  
  console.log(greeting({ name: "Alice" }));  // "Howdy, Alice"
  console.log(greeting(null));             // "Howdy, stranger"