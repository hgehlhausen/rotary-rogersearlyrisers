
window.onload = () => {
    document.getElementById('roster').innerHTML = buildRoster(CONTENT[ROSTER]);
};

function buildRoster (personsArray) {
    return personsArray.map( ({position, name}) => `<li><span class="bold">${position}:</span><br>${name}</li>`).join('');
}