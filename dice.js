button.addEventListener("click", () => {
  const diceNumbers = parseInt(document.getElementById("diceNumber").value);
  const faceNumbers = parseInt(document.getElementById("faces").value);

  let output = document.getElementById("diceResults");
  output.innerHTML = "";
  let indResults = new Array();
  let total = 0;
  for(var i = 0; i < diceNumbers; i++){
    let results = Math.floor(Math.random() * faceNumbers) + 1;
    indResults.push(results);
    total += results;

    let indDice = document.createElement("div");
    let indDiceNumber = document.createTextNode(results);
    indDice.appendChild(indDiceNumber);
    output.appendChild(indDice);
  }
  let totalOutput = document.getElementById("totalResults");
  totalOutput.innerHTML = "";
  let totalDice = document.createElement("div");
  let totalDiceNumber = document.createTextNode(total);
  totalDice.appendChild(totalDiceNumber);
  totalOutput.appendChild(totalDice);
});
