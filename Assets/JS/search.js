//This javascript is used for searching through the activities and filtering out searches.
const activitiesList = document.getElementById('activities');
const searchBar = document.getElementById('searchInput');
const SUPW_Btn = document.getElementById('SUPW_Btn');
const CAS_Btn = document.getElementById('CAS_Btn');


//List of objects containing all the information about the activity
const activities = [
    {
        title: 'Green Cycle Drive',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique harum tenetur velit nam amet, dolores, voluptate maiores qui esse culpa quam pariatur deserunt, quibusdam cum sit fuga! Amet, nulla qui?',
        imgUrl: '#',
        signUpLink: '#',
        SUPW: true,
        CAS: false,
        SignUpActive: true,
    },
    {
        title: 'E-Waste',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique harum tenetur velit nam amet, dolores, voluptate maiores qui esse culpa quam pariatur deserunt, quibusdam cum sit fuga! Amet, nulla qui?',
        imgUrl: '#',
        signUpLink: '#',
        SUPW: true,
        CAS: true,
        SignUpActive: false,
    },
    {
        title: 'Unireach',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique harum tenetur velit nam amet, dolores, voluptate maiores qui esse culpa quam pariatur deserunt, quibusdam cum sit fuga! Amet, nulla qui?',
        imgUrl: '#',
        signUpLink: '#',
        SUPW: false,
        CAS: false,
        SignUpActive: true,
    },
    {
        title: 'Volunteer Work',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique harum tenetur velit nam amet, dolores, voluptate maiores qui esse culpa quam pariatur deserunt, quibusdam cum sit fuga! Amet, nulla qui?',
        imgUrl: '#',
        signUpLink: '#',
        SUPW: true,
        CAS: true,
        SignUpActive: true,
    },
];

let filters = {
    SUPW: false,
    CAS: false,
    SearchQuery: '',
};

searchBar.addEventListener('keyup', (e) => {
    console.log(e.target.value);
    filters.SearchQuery = e.target.value;
    filterResults();
});

SUPW_Btn.addEventListener('change', (e) => {
    console.log(e);
    filters.SUPW = e.target.checked;
    filterResults();
});

CAS_Btn.addEventListener('change', (e) => {
    console.log(e);
    filters.CAS = e.target.checked;
    filterResults();
});

const filterResults = () => {
    let filteredResults = activities.filter(activity => {
        if((filters.SUPW && !activity.SUPW)||(filters.CAS && !activity.CAS)) {
            return false;
        }
        if(filters.SearchQuery!='') {
            return activity.title.toLowerCase().includes(filters.SearchQuery.toLowerCase());
        }
        return true;
    });
    displayActivities(filteredResults);
}

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
            ${
                //creates sign up button only if sign up is active
                (activity.SignUpActive)?
                `<div class="signUp">
                    <a href="${activity.signUpLink}" class="signUpBtn">Sign Up</a>
                </div>`:``
            }
        </div>
        `;
    }).join('');
    activitiesList.innerHTML = htmlString;
}

displayActivities(activities);