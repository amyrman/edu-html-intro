// Check that JavaScript is loaded.
console.log("script.js is loaded!");

// Variabler
// Deklarera en variabel för att använda till att visa antal uppgifter som är klara
let completedCount = 0;

// Deklarera och hänvisa variabler i JS till HTML-element genom querySelector
// för att på så vis kunna koppla JS till HTML och påverka vad som händer och visas för användaren

const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ul");
const info = document.querySelector("small");
const label = document.querySelector("p");

// Skapa en tom array att lagra uppgifterna i
const myArray = [];

// Vad som händer när vi klickar "OK"
button.addEventListener("click", function() {
  
  // Hämta text från input
  // När "text"-variabeln deklareras inom funktionen släpps den även när funktionen är klar, dvs dess scope är inom funktionen
  // Vi skulle ha kunnat deklarera utanför denna funktion som "let text="" och sedan bara text="input.value"
  // Varför använder vi "value"?
  const text = input.value;

  // För att köra en check på om input är 0.
  if (text.length == 0) {
    // En alert (pop-up) är ett alternativ: <alert("Du måste skriva något!");>
    // men stör interaktionen till skillnad från
    document.querySelector("small").innerText = "Please write something :)";
    return;
  }
  else {
    info.innerText = "";
  }

  // Man kan även använda regexp för att kontrollera om någon skriver in enbart mellanslag.
  // Eller form validation, men behöver kanske "formuläret"/input-funktionerna assignas med <form></form> i HTML först?

  // Pusha input till arrayen som vi deklarerade tidigare.
  // Lägg till element: punkt (li) + text (span) i listan i HTML (ul)

  myArray.push(input.value);

  const item = document.createElement("li");
  list.appendChild(item);

  const itemLabel = document.createElement("span");
  itemLabel.innerText = text;
  item.appendChild(itemLabel);

  const trashcan = document.createElement("span");
  trashcan.innerHTML = "&#x1F5D1;";
  trashcan.setAttribute("class", "trashcan");
  item.appendChild(trashcan);

  trashcan.addEventListener("click", function(){
    item.remove();
  });

  // Lägg till funktion för klick på li-elementen
  // Toggle-funktion finns också, men nedanstående demonstrerar
  // att vi kan hämta och sätta nya attribut på HTML-element
  itemLabel.addEventListener("click", function() {
    
    if (item.getAttribute("class") == "completed") {
      item.setAttribute("class", "");
      completedCount--;
    }
    else {
      item.setAttribute("class", "completed");
      completedCount++;
    }

    label.innerText = `${completedCount} completed`;

  })

  // Nollställ input-variabeln -- varför?
  input.value="";
});

// Idéer
// Att kunna lägga till underuppgifter, genom att välja typ av uppgift antingen huvuduppgift med pluttar och sedan klicka OK.

// En massa annat som kan öka funktionalitet: påminnelse, synk med kalender, importera/exportera/dela uppgifter, sätta tidsestimates
// och jämföra detta med faktiskt tid, prioritering

// För att fixa flyttning, prioritering, samt underuppgifter:
// Drag and drop mellan olika fält

// Lägga completed för sig vid click

// Ändra list item om en uppgift är klar eller inte? (list-style-type)

// Lägg till en progress bar för att visualisera hur mycket en har kvar

// Länk till GTD eller Eisenhower metoden -- inspiration från bägge

// Inkludera en 25 min timer och länka till pomodoro?