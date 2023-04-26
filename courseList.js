const input = document.querySelector('.form-control');

// add event listener to input field
input.addEventListener('input', (event) => {
  const searchTerm = event.target.value.toLowerCase();
  filterCourses(searchTerm);
});

// Login
function redirectToLoginPage() {
  window.location.href = "./logIn.html";
}

// New Discussion Board
function redirectToBoardPage() {
  window.location.href = "./Landing_board.html";
}


// Add Course
const courseList = document.querySelector("#course-list");
const addCourseBtn = document.querySelector("#add-course-button");
const searchBtn = document.querySelector("#button-addon2");
const searchInput = document.querySelector("#search-input");
const noResultsMsg = document.querySelector("#no-results-message");

// Add course button event listener
addCourseBtn.addEventListener("click", function() {
  const newCourse = prompt("Enter the name of the new course:");
  if (newCourse) {
    if (isCourseInList(newCourse)) {
      alert("This course is already in the list!");
    } else {
      addCourse(newCourse);
      filterCourses(searchInput.value.toLowerCase());
    }
  }
});

// Search button event listener
searchBtn.addEventListener("click", function() {
  const searchTerm = searchInput.value.toLowerCase();
  if (searchTerm) {
    filterCourses(searchTerm);
  } else {
    resetFilter();
  }
});

// Function to add a new course to the list
function addCourse(courseName) {
  const newCourseItem = document.createElement("a");
  newCourseItem.href = "#";
  newCourseItem.className = "list-group-item list-group-item-action";
  newCourseItem.innerText = courseName;
  courseList.appendChild(newCourseItem);
}

// Function to check if the course already exists in the list
function isCourseInList(courseName) {
  const courseItems = courseList.querySelectorAll("a");
  for (let i = 0; i < courseItems.length; i++) {
    if (courseItems[i].innerText.toLowerCase() === courseName.toLowerCase()) {
      return true;
    }
  }
  return false;
}

// Function to filter the list of courses by search term
function filterCourses(searchTerm) {
  let coursesFound = false;
  const courseItems = courseList.querySelectorAll("a");
  for (let i = 0; i < courseItems.length; i++) {
    const courseName = courseItems[i].innerText.toLowerCase();
    if (courseName.includes(searchTerm)) {
      courseItems[i].style.display = "block";
      coursesFound = true;
    } else {
      courseItems[i].style.display = "none";
    }
  }
  if (!coursesFound) {
    noResultsMsg.style.display = "block";
  } else {
    noResultsMsg.style.display = "none";
  }
}

// Function to reset the filter and show all courses
function resetFilter() {
  const courseItems = courseList.querySelectorAll("a");
  for (let i = 0; i < courseItems.length; i++) {
    courseItems[i].style.display = "block";
  }
  noResultsMsg.style.display = "none";
}
