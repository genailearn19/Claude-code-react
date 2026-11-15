const jobs = [
    {
        id: 1,
        title: "Python Developer",
        company: "DVS Technologies",
        location: "Bangalore",
        experienceLevel: "Mid"
    },
    {
        id: 2,
        title: "Java Developer",
        company: "ABC Technologies",
        location: "Noida",
        experienceLevel: "Senior"
    },
    {
        id: 3,
        title: "DevOps Engineer",
        company: "XYZ Technologies",
        location: "Hyderabad",
        experienceLevel: "Senior"
    },
    {
        id: 4,
        title: "Frontend Developer",
        company: "Tech Solutions",
        location: "Chennai",
        experienceLevel: "Junior"
    }
];

const jobsContainer = document.getElementById("jobs");
const searchInput = document.getElementById("searchInput");
const locationFilter = document.getElementById("locationFilter");
const companyFilter = document.getElementById("companyFilter");
const experienceFilter = document.getElementById("experienceFilter");
const noResults = document.getElementById("noResults");
const jobCount = document.getElementById("jobCount");

function displayJobs(jobsToDisplay) {
    jobsContainer.innerHTML = "";
    jobCount.textContent = jobsToDisplay.length + " Jobs Found";
    noResults.hidden = jobsToDisplay.length !== 0;
    jobsToDisplay.forEach(function(job) {
        const jobElement = document.createElement("div");
        jobElement.className = "job";
        jobElement.innerHTML = `
            <h2>${job.title}</h2>
            <p class="company">
                ${job.company}
            </p>
            <p class="location">
                ${job.location}
            </p>
            <p class="experience">
                ${job.experienceLevel}
            </p>
            <button type="button" class="apply-btn">Apply</button>
        `;
        jobElement.querySelector(".apply-btn").addEventListener("click", function() {
            handleApply(job);
        });
        jobsContainer.appendChild(jobElement);
    });
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function handleApply(job) {
    const name = prompt("Enter your name:");
    if (!name || !name.trim()) {
        alert("Name is required to apply.");
        return;
    }

    const email = prompt("Enter your email address:");
    if (!email || !isValidEmail(email.trim())) {
        alert("A valid email address is required to apply.");
        return;
    }

    alert("Application submitted for " + job.title);
}

function populateLocationFilter() {
    const locations = [];
    jobs.forEach(function(job) {
        if (locations.indexOf(job.location) === -1) {
            locations.push(job.location);
        }
    });
    locations.forEach(function(location) {
        const option = document.createElement("option");
        option.value = location;
        option.textContent = location;
        locationFilter.appendChild(option);
    });
}

function populateCompanyFilter() {
    const companies = [];
    jobs.forEach(function(job) {
        if (companies.indexOf(job.company) === -1) {
            companies.push(job.company);
        }
    });
    companies.forEach(function(company) {
        const option = document.createElement("option");
        option.value = company;
        option.textContent = company;
        companyFilter.appendChild(option);
    });
}

function filterJobs(query, location, company, experienceLevel) {
    const term = query.trim().toLowerCase();
    return jobs.filter(function(job) {
        const matchesTitle = !term || job.title.toLowerCase().includes(term);
        const matchesLocation = !location || job.location === location;
        const matchesCompany = !company || job.company === company;
        const matchesExperience = !experienceLevel || job.experienceLevel === experienceLevel;
        return matchesTitle && matchesLocation && matchesCompany && matchesExperience;
    });
}

function applyFilters() {
    displayJobs(filterJobs(searchInput.value, locationFilter.value, companyFilter.value, experienceFilter.value));
}

searchInput.addEventListener("input", applyFilters);
locationFilter.addEventListener("change", applyFilters);
companyFilter.addEventListener("change", applyFilters);
experienceFilter.addEventListener("change", applyFilters);

populateLocationFilter();
populateCompanyFilter();
displayJobs(jobs);