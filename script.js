const generateButton = document.getElementById('generateButton');
let memberArray = [];
let memberCount = 0;
let teamsCount = 0;
let perTeam = 0;
let mod = 0;

generateButton.addEventListener('click', () => {
    const membersTextarea = document.getElementById('memberTextarea');
    const members = membersTextarea.value;

    if(members === '') {
        emptyMember();
    } else {
        memberArray = members.split("\n");
        memberArray = memberArray.filter(member => member !== '');
        memberCount = memberArray.length;
        checkDivider();
    }
});

function checkDivider() {
    const dividerField = document.getElementById('manyInput');
    const divider = dividerField.value;

    if(divider <= 0) {
        emptyDivider();
    } else {
        isChecked(divider);
    }
}

function isChecked(divider) {
    if(document.getElementById('teamsRadio').checked) {
        teamsCount = divider;
        perTeam = Math.floor(memberCount / teamsCount);
        mod = memberCount % teamsCount;
    } else if(document.getElementById('memberRadio').checked) {
        perTeam = divider;
        teamsCount = Math.floor(memberCount / perTeam);
        mod = memberCount % perTeam;
    } else {
        emptyMethod();
    }
}


function emptyMember() {
    const textareaMessage = document.getElementById('textareaMessage');
    textareaMessage.style.display = "block";
    setTimeout(() => textareaMessage.style.display = "none", 3000);
}

function emptyMethod() {
    const methodMessage = document.getElementById('methodMessage');
    methodMessage.style.display = "block";
    setTimeout(() => methodMessage.style.display = "none", 3000);
}

function emptyDivider() {
    const dividerMessage = document.getElementById('dividerMessage');
    dividerMessage.style.display = "block";
    setTimeout(() => dividerMessage.style.display = "none", 3000);
}
