var bio = {
    "name": "Mohammad Iqbal",
    "role": "Web Developer",
    "contacts": {
        "mobile": "650-555-5555",
        "email": "iqbal125@yahoo.com",
        "github": "iqbal125",
        "location": "San Francisco"
    },
    "welcomeMessege": "HELLLO",
    "skills": [
        "talking", " walking ", " sleeping "
    ],
    "biopic": "http://img2.wikia.nocookie.net/__cb20110606042505/es.futurama/images/0/0b/55692752-Philip_J_Fry.jpg"
};

var work = {
    "jobs": [{
        "employer": "Kohls",
        "title": " Customer Service",
        "location": "Colma",
        "dates": "2012-2016",
        "description": "Handled Customer Returns"
    }]
};

var education = {
    "schools": [{
        "name": "San Francisco State University",
        "location": "San Francisco, CA, USA",
        "degree": "BA Business Administration",
        "majors": ["General Business"],
        "dates": "2011-2017",
        "url": "http://www.sfsu.edu/"
    }],
    "onlineCourses": [{
        "title": "Front-End Nano Degree",
        "school": "Udacity",
        "dates": "2016",
        "url": "https://www.udacity.com/"
    }]
};

var projects = {
    "projects": [{
        "title": "Movie Review Website",
        "dates": "January 2017",
        "description": "A website with 6 different movies reviewed",
        "images": ["https://upload.wikimedia.org/wikipedia/en/c/c0/Toy_Story_2.jpg"]
    }]
};

bio.display = function() {

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedbiopic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessege);
    var formattedContactInfo = [];
    formattedContactInfo.push(HTMLmobile.replace("%data%", bio.contacts.mobile));
    formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
    formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
    formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (var i = 0; i < bio.skills.length; i++) {
            $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
        }

        for (var w = 0; w < formattedContactInfo.length; w++) {
            $("#topContacts").append(formattedContactInfo[w]);
            $("#footerContacts").append(formattedContactInfo[w]);
        }

        $("#header").prepend(formattedName);
        $("#header").prepend(formattedRole);
        $("#header").append(formattedbiopic);
        $("#header").append(formattedWelcome);

    }
};

bio.display();


work.display = function() {
    if (work.jobs.length > 0) {
        $("#workExperience").append(HTMLworkStart);
        for (var job = 0; job < work.jobs.length; job++) {
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
            var formattedEmployerLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);


            $(".work-entry:last").append(formattedEmployer);
            $(".work-entry:last").append(formattedTitle);
            $(".work-entry:last").append(formattedEmployerLocation);
            $(".work-entry:last").append(formattedDates);
            $(".work-entry:last").append(formattedDescription);
        }
    }
};

work.display();

education.display = function() {
    if (education.schools.length > 0) {
        $("#education").append(HTMLschoolStart);
        for (var i = 0; i < education.schools.length; i++) {
            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);

            $(".education-entry:last").append(formattedSchoolName);
            $(".education-entry:last").append(formattedSchoolDegree);
            $(".education-entry:last").append(formattedSchoolDates);
            $(".education-entry:last").append(formattedSchoolLocation);
            $(".education-entry:last").append(formattedSchoolMajor);
        }
    }

    if (education.onlineCourses.length > 0) {
        $("#education").append(HTMLonlineClasses);
        for (var e = 0; e < education.onlineCourses.length; e++) {
            $("#education").append(HTMLschoolStart);
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[e].title);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[e].school);
            var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[e].dates);
            var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[e].url);

            $(".education-entry:last").append(formattedOnlineSchool);
            $(".education-entry:last").append(formattedOnlineTitle);
            $(".education-entry:last").append(formattedOnlineDates);
            $(".education-entry:last").append(formattedOnlineURL);
        }
    }
};

education.display();

projects.display = function() {
    if (projects.projects.length > 0) {
        for (var p = 0; p < projects.projects.length; p++) {
            $("#projects").append(HTMLprojectStart);
            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[p].title);
            var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[p].dates);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[p].description);


            $(".project-entry:last").append(formattedProjectTitle);
            $(".project-entry:last").append(formattedProjectDates);
            $(".project-entry:last").append(formattedProjectDescription);

            for (var image = 0; image < projects.projects[p].images.length; image++) {
                var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[p].images);
                $(".project-entry:last").append(formattedProjectImage);
            }

        }
    }
};

projects.display();

$("#mapDiv").append(googleMap);
