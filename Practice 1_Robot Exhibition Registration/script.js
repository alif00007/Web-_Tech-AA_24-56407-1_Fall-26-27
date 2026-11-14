function showRobotInfo() {
  let robot = document.getElementById("robotType").value;
  let info = document.getElementById("robotInfo");

  if (robot == "Delivery Robot") {
    info.innerHTML = "Used for carrying items";
  } else if (robot == "Cleaning Robot") {
    info.innerHTML = "Used for cleaning floors";
  } else {
    info.innerHTML = "";
  }
}

function checkConfirm() {
  let confirm = document.getElementById("confirm").checked;

  document.getElementById("registerBtn").disabled = !confirm;
}

function register() {
  let name = document.getElementById("studentName").value;
  let email = document.getElementById("email").value;
  let robot = document.getElementById("robotType").value;

  let visit = document.querySelector('input[name="visitTime"]:checked');

  let message = document.getElementById("message");

  if (name.trim() == "") {
    message.innerHTML = "Error: Student name is required.";
    message.className = "error";
    return;
  }

  if (!email.includes("@")) {
    message.innerHTML = "Error: Invalid email address.";
    message.className = "error";
    return;
  }

  if (robot == "") {
    message.innerHTML = "Error: Please select a robot.";
    message.className = "error";
    return;
  }

  if (visit == null) {
    message.innerHTML = "Error: Please select visit time.";
    message.className = "error";
    return;
  }

  message.innerHTML =
    "Registration Successful!<br>" +
    "Student: " +
    name +
    "<br>" +
    "Robot: " +
    robot +
    "<br>" +
    "Visit Time: " +
    visit.value;

  message.className = "success";

  document.getElementById("studentName").value = "";
  document.getElementById("email").value = "";
  document.getElementById("robotType").value = "";
  document.getElementById("robotInfo").innerHTML = "";

  document
    .querySelectorAll('input[name="visitTime"]')
    .forEach(function (radio) {
      radio.checked = false;
    });

  document.getElementById("confirm").checked = false;
  document.getElementById("registerBtn").disabled = true;
}
