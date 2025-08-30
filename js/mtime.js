// JavaScript to handle the Add Time Table button click
document.querySelector('.add-time-table-btn').addEventListener('click', function() {
    const grade = document.getElementById('grade-select').value;
    const subject = document.getElementById('subject-select').value;
    const date = document.getElementById('date').value;
    const startTime = document.getElementById('start-time').value;
    const endTime = document.getElementById('end-time').value;

    if (!grade || !subject || !date || !startTime || !endTime) {
        alert('Please fill in all fields!');
        return;
    }

    alert(`Time Table Added: Grade ${grade} - ${subject} on ${date} from ${startTime} to ${endTime}`);
});
