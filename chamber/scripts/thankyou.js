const params = new URLSearchParams(window.location.search);

const fields = {
    'first-name': 'first_name',
    'last-name': 'last_name',
    email: 'email',
    phone: 'phone',
    'organization-name': 'organization',
    timestamp: 'timestamp'
};

Object.entries(fields).forEach(([elementId, parameter]) => {
    document.getElementById(elementId).textContent = params.get(parameter) || 'Not provided';
});

document.getElementById('current-year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;