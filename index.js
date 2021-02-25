main.remove();

const newHeader = document.createElement("h1");

document.body.appendChild(newHeader);

newHeader.setAttribute("id", "victory");
newHeader.innerHTML = "Alex is the champion";
newHeader.setAttribute("class", "victory");