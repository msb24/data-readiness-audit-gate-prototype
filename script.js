/*
  DATA READINESS GATE — JAVASCRIPT TUTORIAL
  ------------------------------------------
  This file controls three things:
  1. Switching between the five tabs.
  2. Opening/closing the fictional label consistency demo.
  3. Changing the fictional deployment gate when the remediation toggle is used.

  You can safely experiment by changing the text shown in index.html.
*/

// ------------------------------
// 1. TAB NAVIGATION
// ------------------------------

// Find every button with class="tab".
const tabs = document.querySelectorAll(".tab");

// Find every content section with class="panel".
const panels = document.querySelectorAll(".panel");

// When a tab is clicked, show only its matching panel.
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const targetId = tab.dataset.target;

    tabs.forEach((button) => {
      button.classList.toggle("active", button === tab);
    });

    panels.forEach((panel) => {
      panel.classList.toggle("active-panel", panel.id === targetId);
    });
  });
});


// ------------------------------
// 2. LABEL CONSISTENCY DEMO
// ------------------------------

// Grab the elements we want to open and close.
const showCollisionButton = document.getElementById("showCollision");
const hideCollisionButton = document.getElementById("hideCollision");
const collisionDemo = document.getElementById("collisionDemo");

// Remove the "hidden" class to show the demo.
showCollisionButton.addEventListener("click", () => {
  collisionDemo.classList.remove("hidden");
});

// Add the "hidden" class again to hide the demo.
hideCollisionButton.addEventListener("click", () => {
  collisionDemo.classList.add("hidden");
});


// ------------------------------
// 3. READINESS / REMEDIATION TOGGLE
// ------------------------------

const remediationToggle = document.getElementById("remediationToggle");
const checks = document.querySelectorAll(".check");
const gatePill = document.getElementById("gatePill");
const decisionBanner = document.getElementById("decisionBanner");
const topStatus = document.getElementById("topStatus");

// Run this code whenever the checkbox changes.
remediationToggle.addEventListener("change", () => {
  const remediated = remediationToggle.checked;

  // Change every X to a checkmark and back again.
  checks.forEach((item) => {
    item.classList.toggle("done", remediated);
    item.querySelector(".icon").textContent = remediated ? "✓" : "×";
  });

  if (remediated) {
    // Hypothetical future state.
    gatePill.textContent = "READY FOR TESTING";
    gatePill.className = "pill";
    gatePill.style.background = "var(--mint)";
    gatePill.style.color = "var(--green)";

    decisionBanner.className = "decision ready";
    decisionBanner.querySelector("strong").textContent =
      "Simulated future decision: READY FOR TESTING";
    decisionBanner.querySelector("span").textContent =
      "This is only a coding demonstration of what happens after the fictional controls are closed.";

    topStatus.querySelector("strong").textContent = "READY FOR TESTING";
    topStatus.querySelector(".status-dot").style.background = "var(--green)";
  } else {
    // Current fictional state.
    gatePill.textContent = "HOLD";
    gatePill.className = "pill red";
    gatePill.style.background = "";
    gatePill.style.color = "";

    decisionBanner.className = "decision hold";
    decisionBanner.querySelector("strong").textContent =
      "Current fictional decision: HOLD";
    decisionBanner.querySelector("span").textContent =
      "Use this interaction to learn how a readiness gate can change after controls are closed.";

    topStatus.querySelector("strong").textContent = "HOLD";
    topStatus.querySelector(".status-dot").style.background = "var(--danger)";
  }
});
