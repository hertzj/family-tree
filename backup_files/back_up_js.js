const famMemDiv = document.createElement('div');
famMemDiv.classList.add('familyMember');

const famMemberIcon = document.createElement('div');
famMemberIcon.classList.add('familyMemberIcon')
famMemberIcon.addEventListener('click', ev => {
    if (!selected) {
        famMemberIcon.classList.toggle('selected');
    }
    else {
        selected.classList.toggle('selected');
        famMemberIcon.classList.toggle('selected');
    }
    
})

const famMemberInfo = document.createElement('div');
famMemberInfo.innerHTML = `<h3>${name}</h3><p>${age} yrs</p>`;

famMemDiv.appendChild(famMemberIcon);
famMemDiv.appendChild(famMemberInfo);

firstGen.appendChild(famMemDiv);