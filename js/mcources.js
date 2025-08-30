// JavaScript for handling actions like form submission or link validation
document.querySelector('.add-course-btn').addEventListener('click', function() {
    const grade = document.getElementById('grade-select').value;
    const subject = document.getElementById('subject-select').value;
    const courseLink = document.getElementById('course-link').value;

    if (!courseLink || !grade || !subject) {
        alert('Please fill all fields!');
        return;
    }

    // Example of handling form data, you can extend this to interact with a server
    alert(`Course Added: ${subject} for ${grade}. Link: ${courseLink}`);
});
