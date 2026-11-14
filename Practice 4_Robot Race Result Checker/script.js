let qualifiedTeams = 0;
let qualifiedTeamNames = [];

function calculateResult() {
  let teamName = document.getElementById("teamName").value.trim();
  let category = document.getElementById("category").value;
  let run1 = Number(document.getElementById("run1").value);
  let run2 = Number(document.getElementById("run2").value);
  let penalty = document.getElementById("penalty").checked;

  let result = document.getElementById("result");
  let counter = document.getElementById("counter");

  // Input validation
  if (teamName === "") {
    alert("Please enter the team name.");
    return;
  }

  if (category === "") {
    alert("Please select a robot category.");
    return;
  }

  if (
    document.getElementById("run1").value === "" ||
    document.getElementById("run2").value === "" ||
    !Number.isFinite(run1) ||
    !Number.isFinite(run2) ||
    run1 <= 0 ||
    run1 > 120 ||
    run2 <= 0 ||
    run2 > 120
  ) {
    alert("Run times must be greater than 0 and not more than 120 seconds.");
    return;
  }

  // Calculate average time
  let finalTime = (run1 + run2) / 2;

  if (penalty) {
    finalTime += 10;
  }

  let maxTime;

  switch (category) {
    case "Beginner":
      maxTime = 60;
      break;

    case "Advanced":
      maxTime = 45;
      break;
  }

  // Check qualification
  if (finalTime <= maxTime) {
    let existingTeam = qualifiedTeamNames.find(
      (name) => name.toLowerCase() === teamName.toLowerCase(),
    );

    if (existingTeam) {
      result.innerHTML = teamName + " has already qualified before.";
      result.style.color = "red";
    } else {
      qualifiedTeamNames.push(teamName);
      qualifiedTeams++;

      result.innerHTML =
        "Team Name: " +
        teamName +
        "<br>Category: " +
        category +
        "<br>Final Time: " +
        finalTime.toFixed(2) +
        " seconds<br>Result: Qualified";

      result.style.color = "green";
    }
  } else {
    result.innerHTML =
      "Team Name: " +
      teamName +
      "<br>Category: " +
      category +
      "<br>Final Time: " +
      finalTime.toFixed(2) +
      " seconds<br>Result: Not Qualified";

    result.style.color = "red";
  }

  counter.innerHTML = "Qualified Teams: " + qualifiedTeams;
}

function clearForm() {
  document.getElementById("teamName").value = "";
  document.getElementById("category").value = "";
  document.getElementById("run1").value = "";
  document.getElementById("run2").value = "";
  document.getElementById("penalty").checked = false;

  document.getElementById("result").innerHTML = "";
  document.getElementById("result").style.color = "black";
}
