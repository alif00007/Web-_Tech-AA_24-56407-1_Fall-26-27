let stations = [
  {
    name: "City Centre",
    bicycles: 3,
  },
  {
    name: "Riverside",
    bicycles: 2,
  },
];

function updateDisplay() {
  let info = "";
  let totalBikes = 0;

  for (let i = 0; i < stations.length; i++) {
    info += stations[i].name + ": " + stations[i].bicycles + " bicycles<br>";

    totalBikes += stations[i].bicycles;
  }

  document.getElementById("stationInfo").innerHTML = info;

  document.getElementById("total").innerHTML =
    "Total Available Bicycles: " + totalBikes;
}

function borrowBike() {
  let stationName = document.getElementById("station").value;
  let quantity = Number(document.getElementById("quantity").value);

  let message = document.getElementById("message");

  if (!Number.isInteger(quantity) || quantity < 1 || quantity > 3) {
    message.innerHTML = "Error: Enter a whole number between 1 and 3.";
    return;
  }

  for (let i = 0; i < stations.length; i++) {
    if (stations[i].name == stationName) {
      if (quantity > stations[i].bicycles) {
        message.innerHTML = "Error: Not enough bicycles available.";
        return;
      }

      stations[i].bicycles -= quantity;
    }
  }

  message.innerHTML = "Bicycles borrowed successfully.";
  document.getElementById("quantity").value = "";

  updateDisplay();
}

function returnBike() {
  let stationName = document.getElementById("station").value;
  let quantity = Number(document.getElementById("quantity").value);

  let message = document.getElementById("message");

  if (!Number.isInteger(quantity) || quantity < 1 || quantity > 3) {
    message.innerHTML = "Error: Enter a whole number between 1 and 3.";
    return;
  }

  for (let i = 0; i < stations.length; i++) {
    if (stations[i].name == stationName) {
      if (stations[i].bicycles + quantity > 5) {
        message.innerHTML = "Error: Station capacity cannot exceed 5.";
        return;
      }

      stations[i].bicycles += quantity;
    }
  }

  message.innerHTML = "Bicycles returned successfully.";
  document.getElementById("quantity").value = "";

  updateDisplay();
}

updateDisplay();
