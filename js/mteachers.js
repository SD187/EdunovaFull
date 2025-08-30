// JavaScript for handling the Add Teacher button click
document.querySelector('.add-teacher-btn').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const subject = document.getElementById('subject').value;
    const contact = document.getElementById('contact').value;
    const email = document.getElementById('email').value;

    if (!name || !subject || !contact || !email) {
        alert('Please fill in all fields!');
        return;
    }

    alert(`Teacher Added: ${name}, Subject: ${subject}, Contact: ${contact}, Email: ${email}`);
});
