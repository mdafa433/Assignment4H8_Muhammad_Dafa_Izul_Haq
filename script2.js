document.addEventListener('DOMContentLoaded', function() {
    const profileData = JSON.parse(localStorage.getItem('profileData'));

    if (profileData) {
        document.getElementById('nama').textContent = profileData.nama || "Nama anda";
        document.getElementById('work').textContent = profileData.role || "Role anda";
        document.getElementById('availability').value = profileData.availability;
        document.getElementById('age').value = profileData.age;
        document.getElementById('location').value = profileData.location;
        document.getElementById('experience').value = profileData.experience;
        document.getElementById('email').value = profileData.email;
    }
});