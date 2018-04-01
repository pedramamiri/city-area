
var container = document.createElement("div");
document.body.appendChild(container); 
container.className = "fullscreen-container";



let mycity;


mycity = new city("Istanbul", "Turkey", 1539);
mycity.displayInfo();
container.appendChild(mycity.getHTMLElement());


mycity = new city("New york", "USA", 789);
mycity.displayInfo();
container.appendChild(mycity.getHTMLElement());


mycity = new city("tokyo", "Japan", 2188);
mycity.displayInfo();
container.appendChild(mycity.getHTMLElement());

mycity = new city("Tehran", "Iran", 730);
mycity.displayInfo();
container.appendChild(mycity.getHTMLElement());