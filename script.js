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
        randomTeam();
    } else if(document.getElementById('memberRadio').checked) {
        perTeam = divider;
        teamsCount = Math.floor(memberCount / perTeam);
        mod = memberCount % perTeam;
        randomTeam();
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

function randomTeam() {
    let generatedTeam = [];
    let random = 0;

    // create random for best case
    for(let i = 0; i < teamsCount; i++) {
        generatedTeam.push([]);
        for(let j = 0; j < perTeam; j++) {
            random = Math.floor(Math.random() * memberArray.length);
            generatedTeam[i].push(memberArray[random]);
            memberArray.splice(random, 1);
        }
    }

    if(mod !== 0) {
        let i = 0;

        while(i < mod) {
            random = Math.floor(Math.random() * generatedTeam.length);
            if(generatedTeam[random].length === perTeam + 1) {
                continue;
            } else {
                generatedTeam[random].push(memberArray[0]);
                memberArray.splice(0, 1);
                i++;
            }
        }
    }

    console.log(generatedTeam);
    console.log(memberArray);
}
