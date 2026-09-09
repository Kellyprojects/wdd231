import { setPageMeta, setupNavigation } from './module.js';

setPageMeta();
setupNavigation();

const labels = { name: 'Name', email: 'Email', message: 'Message' };
const params = new URLSearchParams(window.location.search);
const submittedData = document.getElementById('submitted-data');

if (submittedData) {
    submittedData.innerHTML = Object.entries(labels)
        .map(([key, label]) => `<dt>${label}</dt><dd>${params.get(key) || 'Not provided'}</dd>`)
        .join('');
}
