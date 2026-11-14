const quantity = document.getElementById("quantity");
const totalPrice = document.getElementById("totalPrice");
const delivery = document.getElementById("delivery");
const deliveryCharge = document.getElementById("deliveryCharge");
const grandTotal = document.getElementById("grandTotal");
const terms = document.getElementById("terms");
const submitBtn = document.getElementById("submitBtn");
const warning = document.getElementById("warning");

const price = 500;
const threshold = 2000;

// Calculate product price
function calculateTotal() {
  let qty = Number(quantity.value);

  if (qty < 1 || !Number.isInteger(qty)) {
    qty = 1;
    quantity.value = 1;
  }

  let total = qty * price;

  totalPrice.value = total + " Tk";

  // Coupon eligibility
  if (total > threshold) {
    warning.innerHTML = "You are eligible for a coupon";
    warning.style.color = "green";
    warning.style.fontWeight = "bold";
  } else {
    warning.innerHTML = "";
  }

  calculateGrandTotal();
}

// Calculate delivery and grand total
function calculateGrandTotal() {
  let total = Number(quantity.value) * price;
  let charge = Number(delivery.value);

  deliveryCharge.innerHTML = charge + " Tk";
  grandTotal.innerHTML = total + charge + " Tk";
}

// Quantity change
quantity.addEventListener("input", calculateTotal);

// Delivery location change
delivery.addEventListener("change", calculateGrandTotal);

// Terms and conditions
terms.addEventListener("change", function () {
  if (terms.checked) {
    submitBtn.style.display = "block";
  } else {
    submitBtn.style.display = "none";
  }
});

// Form submission
document
  .getElementById("checkoutForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let address = document.getElementById("address").value.trim();

    if (address === "") {
      alert("Please enter your full address.");
      return;
    }

    if (!terms.checked) {
      alert("Please accept the terms and conditions.");
      return;
    }

    alert("Order submitted successfully!");
  });

// Initial calculation
calculateTotal();
