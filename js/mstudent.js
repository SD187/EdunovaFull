// JavaScript for handling the Add and Update Link buttons
document.querySelector('.add-link-btn').addEventListener('click', function() {
    const googleFormLink = document.getElementById('google-form-link').value;
    
    if (!googleFormLink) {
        alert('Please paste a valid Google Form link!');
        return;
    }

    alert(`Google Form Link Added: ${googleFormLink}`);
});

document.querySelector('.update-link-btn').addEventListener('click', function() {
    const googleFormLink = document.getElementById('google-form-link').value;

    if (!googleFormLink) {
        alert('Please paste a valid Google Form link to update!');
        return;
    }

    alert(`Google Form Link Updated: ${googleFormLink}`);
});
