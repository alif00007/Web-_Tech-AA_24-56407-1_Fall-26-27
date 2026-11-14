let feedbacks = [];

function addFeedback() {
  let name = document.getElementById("visitorName").value;
  let city = document.getElementById("city").value;
  let rating = Number(document.getElementById("rating").value);
  let comment = document.getElementById("comment").value;

  let message = document.getElementById("message");

  if (name.trim() == "") {
    message.innerHTML = "Error: Visitor name is required.";
    return;
  }

  if (city == "") {
    message.innerHTML = "Error: Please select a city.";
    return;
  }

  if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
    message.innerHTML = "Error: Rating must be between 1 and 5.";
    return;
  }

  if (comment.trim() == "") {
    message.innerHTML = "Error: Comment is required.";
    return;
  }

  let feedback = {
    name: name,
    city: city,
    rating: rating,
    comment: comment,
  };

  feedbacks.push(feedback);

  document.getElementById("visitorName").value = "";
  document.getElementById("city").value = "";
  document.getElementById("rating").value = "";
  document.getElementById("comment").value = "";

  message.innerHTML = "Feedback added successfully.";

  updateFeedback();
}

function updateFeedback() {
  let list = "";
  let totalRating = 0;

  for (let i = 0; i < feedbacks.length; i++) {
    list +=
      '<div class="record">' +
      "<b>Name:</b> " +
      feedbacks[i].name +
      "<br>" +
      "<b>City:</b> " +
      feedbacks[i].city +
      "<br>" +
      "<b>Rating:</b> " +
      feedbacks[i].rating +
      "<br>" +
      "<b>Comment:</b> " +
      feedbacks[i].comment +
      "</div>";

    totalRating += feedbacks[i].rating;
  }

  document.getElementById("feedbackList").innerHTML =
    list == "" ? "No feedback records available." : list;

  let average = 0;

  if (feedbacks.length > 0) {
    average = totalRating / feedbacks.length;
  }

  document.getElementById("summary").innerHTML =
    "Total Feedback: " +
    feedbacks.length +
    "<br>Average Rating: " +
    average.toFixed(2);
}

function removeLast() {
  let message = document.getElementById("message");

  if (feedbacks.length == 0) {
    message.innerHTML = "Error: No feedback record to remove.";
    return;
  }

  feedbacks.pop();

  message.innerHTML = "Last feedback removed successfully.";

  updateFeedback();
}

updateFeedback();
