// document.addEventListener("DOMContentLoaded", function () {
//   const allButton = document.getElementById("all");
//   const cseButton = document.getElementById("cse");
//   const wddButton = document.getElementById("wdd");
//   const courses = document.querySelectorAll(".result-button button");

//   function filterCourses(category) {
//     courses.forEach((course) => {
//       if (category === "all") {
//         course.style.display = "block"; // Show all courses
//       } else if (course.classList.contains(category)) {
//         course.style.display = "block"; // Show selected category
//       } else {
//         course.style.display = "none"; // Hide other categories
//       }
//     });
//   }

//   allButton.addEventListener("click", function () {
//     filterCourses("all");
//   });

//   cseButton.addEventListener("click", function () {
//     filterCourses("cse");
//   });

//   wddButton.addEventListener("click", function () {
//     filterCourses("wdd");
//   });
// });