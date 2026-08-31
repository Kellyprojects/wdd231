const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the basic concepts of program design and development.',
        technology: ['Python'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to simple software building.',
        technology: ['HTML', 'CSS'],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'An introduction to designing, writing, and debugging computer programs using functions.',
        technology: ['Python'],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'An introduction to object-oriented programming concepts and software design patterns.',
        technology: ['C#'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'Students will build dynamic websites using JavaScript, HTML, and CSS.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'Focuses on user interface development, accessibility, and modern web APIs.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: false
    }
];

const courseContainer = document.querySelector(".courses");
const totalCreditsDisplay = document.getElementById("total-credits");

// Function to render course list and total credits
function displayCourses(filteredCourses) {
    courseContainer.innerHTML = ""; // Clear existing cards

    filteredCourses.forEach(course => {
        const courseCard = document.createElement("button");
        courseCard.classList.add("course-card");
        if (course.completed) {
            courseCard.classList.add("completed");
            courseCard.textContent = `✔️ ${course.subject} ${course.number}`;
        } else {
            courseCard.textContent = `${course.subject} ${course.number}`;
        }

        courseContainer.appendChild(courseCard);
    });

    // Calculate total credits using reduce
    const totalCredits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
    totalCreditsDisplay.textContent = `Total Credits: ${totalCredits}`;
}

// Initial display on load
displayCourses(courses);

// Event listeners for filter buttons
document.getElementById("all").addEventListener("click", () => {
    displayCourses(courses);
});

document.getElementById("cse").addEventListener("click", () => {
    const cseCourses = courses.filter(course => course.subject === "CSE");
    displayCourses(cseCourses);
});

document.getElementById("wdd").addEventListener("click", () => {
    const wddCourses = courses.filter(course => course.subject === "WDD");
    displayCourses(wddCourses);
});