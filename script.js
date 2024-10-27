document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const nama = document.getElementById('nama').value;
    const role = document.getElementById('role').value;
    const availability = document.getElementById('availability').value;
    const age = document.getElementById('age').value;
    const location = document.getElementById('location').value;
    const experience = document.getElementById('experience').value;
    const email = document.getElementById('email').value;

    const profileData = {
        nama,
        role,
        availability,
        age,
        location,
        experience,
        email
    };

    localStorage.setItem('profileData', JSON.stringify(profileData));
    alert("Data berhasil disimpan!");
    window.location.href = 'index.html';
});