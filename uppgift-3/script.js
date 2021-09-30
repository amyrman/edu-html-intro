// Är JS laddat?
console.log("JavaScript loaded!");

// För tydlighetens skull deklareras en variabel som hänvisar till ett element i HTML-DOM "singleBtn".

const singleBtn = document.querySelector("#singleBtn");

/* addEventListener triggas av en "event" som definieras i argument-delen (), "click" dvs klick på knappen
som vi skapat och gett id "singleBtn" i html-filen. Därefter definieras vad som ska hända: en funktion ska köras
och eftersom vi bara använder den en gång inom ramen för eventListenern behöver den inte döpas och i det här fallet
behövs inte heller några argument. Om vi t ex hade velat räkna ut något eller hänvisa till någon variabel hade vi kunnat använda argument.
I det här fallet vill vi att texten i h1-elementet med id "singleTxt", ska ändras till "Goodbye World".
Detta gör vi genom att använda propertyn "innerText". */

singleBtn.addEventListener("click",
function () {

const singleTxt = document.querySelector("#singleTxt");

singleTxt.innerText = "Goodbye World";

}
);
