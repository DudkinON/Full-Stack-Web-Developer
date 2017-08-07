var worksCard = [
    {
        "title": "Movie trailers",
        "link": "https://github.com/DudkinON/Full-Stack-Web-Developer/tree/master/Programming_Fundamentals_and_the_Web/movie_trailers",
        "description": "The simple code, generation the movie page",
        "img": "public/img/movie-trailers.jpg"
    }
];
var certificateCard = [
    {
        "title": "Progr in Python",
        "link": "https://stepik.org/certificate/104629aa35e435e6f9670f1aea3951c9e3b42116.pdf",
        "description": "Programming in Python. Certificate has successfully completed",
        "img": "public/img/certificates/stepic-python-programming.jpg"
    },
    {
        "title": "Python: basics",
        "link": "https://stepik.org/certificate/81428ede999f0a8f0ccf41fd86e05c9aa19b33f1.pdf",
        "description": "Python: basics. Certificate has successfully completed",
        "img": "public/img/certificates/python-basics.jpg"
    },
    {
        "title": "Internet Security",
        "link": "https://stepik.org/certificate/15418b85d94770bc2899ee94f5d7598fae9a34b3.pdf",
        "description": "Security on the Internet. Certificate has successfully completed",
        "img": "public/img/certificates/internet-security.jpg"
    },
    {
        "title": "Introduction to C",
        "link": "https://stepik.org/certificate/2455b0bc159c669e289ff046b0551203e057b7e7.pdf",
        "description": "Introduction to Programming (C ++). Certificate has successfully completed",
        "img": "public/img/certificates/introduction-to-c.jpg"
    },
    {
        "title": "Python for Ev...",
        "link": "https://www.coursera.org/account/accomplishments/specialization/certificate/BY7EVUDY2ZVL",
        "description": "Python for Everybody. Has successfully completed the online, non-credit Specialization",
        "img": "public/img/certificates/python-for-everybody.jpg"
    },
    {
        "title": "Start with Py...",
        "link": "https://www.coursera.org/account/accomplishments/certificate/YHPW8XGHFCR4",
        "description": "Getting Started with Python. An online non-credit course authorized by University of Michigan and offered throu...",
        "img": "public/img/certificates/start-with-python.jpg"
    },
    {
        "title": "Python Data S...",
        "link": "https://www.coursera.org/account/accomplishments/certificate/3PZ8CJBEXSBN",
        "description": "Python Data Structures. An online non-credit course authorized by University of Michigan and offered through...",
        "img": "public/img/certificates/python-data-structures.jpg"
    },
    {
        "title": "Python to Ac...",
        "link": "https://www.coursera.org/account/accomplishments/certificate/BT6JP4VQU8YW",
        "description": "Using Python to Access Web Data. An online non-credit course authorized by University of Michigan and ...",
        "img": "public/img/certificates/using-python-to-access-web-data.jpg"
    },
    {
        "title": "Databases wi...",
        "link": "https://www.coursera.org/account/accomplishments/certificate/5MNVHF8F3RSF",
        "description": "Using Databases with Python. An online non-credit course authorized by University of Michigan and ...",
        "img": "public/img/certificates/using-databases-with-python.jpg"
    },
    {
        "title": "Visualizing Da...",
        "link": "https://www.coursera.org/account/accomplishments/certificate/8RYVJFD2TVGA",
        "description": "Visualizing Data with Python. An online non-credit course authorized by University of Michigan and ...",
        "img": "public/img/certificates/visualizing-data-with-python.jpg"
    }
];

function cardsDesign(list) {
    var items = '';
    for (var i = 0; i < list.length; i++) {
        items +=
            "<div class='toggle-card card-item'>\n"
            + "\t<div class='card-container card front'>\n"
            + "\t\t<div class='img-card'><img src='" + list[i]['img'] + "' alt='" + list[i]['title'] + "'></div>\n"
            + "\t\t<div class='title-card'>" + list[i]['title'] + "</div>\n"
            + "\t</div>\n"
            + "\t<div class='card-container card back'>\n"
            + "\t\t<div class='title-card'>" + list[i]['title'] + "</div>\n"
            + "\t\t<div class='description-card'>" + list[i]['description'] + "</div>\n"
            + "\t\t<div class='link-card'><a href='" + list[i]['link'] + "' target='_blank'>enter</a></div>\n"
            + "\t</div>\n"
            + "</div>\n"
    }
    return items
}

