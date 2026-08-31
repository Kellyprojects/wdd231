document.addEventListener("DOMContentLoaded", function () {
  // Get filter buttons
  const allButton = document.getElementById("all");
  const cseButton = document.getElementById("cse");
  const wddButton = document.getElementById("wdd");

  // Get all result buttons
  const resultButtons = document.querySelectorAll(".result-button button");


  // Function to filter courses
  function filterCourses(category) {
    let count = 0;

    resultButtons.forEach((button) => {
      if (category === "all") {
        button.style.display = "block"; // Show all buttons
        count++;
      } else if (button.textContent.includes(category)) {
        button.style.display = "block"; // Show matching buttons
        count++;
      } else {
        button.style.display = "none"; // Hide others
      }
    });

    // Update the paragraph text visibility
    if (category === "all") {
      totalCoursesText.style.display = "block"; // Show total courses
    //   filteredCoursesText.style.display = "none"; // Hide filtered count
    // } else {
    //   totalCoursesText.style.display = "none"; // Hide total courses
    //   filteredCoursesText.style.display = "block"; // Show filtered count
    //   filteredCoursesText.textContent = The total number of course listed below is ${count};
    }
  }

  // Add event listeners to filter buttons
  allButton.addEventListener("click", () => filterCourses("all"));
  cseButton.addEventListener("click", () => filterCourses("CSE"));
  wddButton.addEventListener("click", () => filterCourses("WDD"));

  // Initialize by showing all courses
  filterCourses("all");
});
