//This javascript is used for searching through the activities and filtering out searches.
const activitiesList = document.getElementById('activities');

//List of objects containing all the information about the activity
const activities = [
    {
        title: 'Activity 1',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique harum tenetur velit nam amet, dolores, voluptate maiores qui esse culpa quam pariatur deserunt, quibusdam cum sit fuga! Amet, nulla qui?',
        imgUrl: '#',
        signUpLink: '#',
        SUPW: true,
        CAS: false,
        SignUpActive: true,
    },
    {
        title: 'Activity 2',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique harum tenetur velit nam amet, dolores, voluptate maiores qui esse culpa quam pariatur deserunt, quibusdam cum sit fuga! Amet, nulla qui?',
        imgUrl: '#',
        signUpLink: '#',
        SUPW: true,
        CAS: true,
        SignUpActive: false,
    },
    {
        title: 'Activity 3',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique harum tenetur velit nam amet, dolores, voluptate maiores qui esse culpa quam pariatur deserunt, quibusdam cum sit fuga! Amet, nulla qui?',
        imgUrl: '#',
        signUpLink: '#',
        SUPW: false,
        CAS: false,
        SignUpActive: true,
    },
];

//Displays the activity
const displayActivities = (list) => {
    const htmlString = list.map((activity) => {
        return `
        <div class="activity">
            <h3>${activity.title}</h3>
            <ul class="filterList">
                <li class="${activity.SUPW}">SUPW</li>
                <li class="${activity.CAS}">CAS</li>
                <li class="${activity.SignUpActive}">Sign Up Active</li>
            </ul>
            <div class="img" style="--imgUrl:${activity.imgUrl};">
            </div>
            <div class="description">
                ${activity.description}
            </div>
            <div class="signUp">
                <a href="${activity.signUpLink}" class="signUpBtn">Sign Up</a>
            </div>
        </div>
        `;
    }).join('');
    activitiesList.innerHTML = htmlString;
}

displayActivities(activities);