function formatDate(date) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

function displayDate() {
    const today = new Date();
    const formattedDate = formatDate(today);
    document.getElementById('date-display').innerText = formattedDate;
}

window.onload = displayDate;

//-------------------------------------------------------------------------

function getQueryParams() {
    const params = {};
    const queryString = window.location.search.substring(1);
    const regex = /([^&=]+)=([^&]*)/g;
    let m;

    while (m = regex.exec(queryString)) {
        params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
    }
    return params;
}

const params = getQueryParams();
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('date-display').textContent = new Date().toLocaleDateString();
    const welcomeMessage = document.createElement('h3');
    welcomeMessage.textContent = `Welcome ${params.name} (${params.email})`;
    document.querySelector('.date').appendChild(welcomeMessage);
});