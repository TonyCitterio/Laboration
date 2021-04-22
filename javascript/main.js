document.getElementById("education").style.display = "none";
document.getElementById("employment").style.display = "none";

function showGoal() {
  document.getElementById("goal").style.display = "block";
  document.getElementById("education").style.display = "none";
  document.getElementById("employment").style.display = "none";
}

function showEducation() {
  document.getElementById("goal").style.display = "none";
  document.getElementById("education").style.display = "block";
  document.getElementById("employment").style.display = "none";
}

function showEmployment() {
  document.getElementById("goal").style.display = "none";
  document.getElementById("education").style.display = "none";
  document.getElementById("employment").style.display = "block";
}
