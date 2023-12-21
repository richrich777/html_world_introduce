let photoContainer;

function start() {
    document.getElementById("continent").addEventListener("change", con);
    photoContainer = document.getElementById("photoContainer");
    // generateAllPhotos();
}

function con() {
    let selectedContinent = document.getElementById("continent").value;

    if (selectedContinent === "全部") {
        generateAllPhotos();
    } else {
        generatePhotos(selectedContinent);
    }
}

function generateAllPhotos() {
    let allPhotosHTML = "<div class='gallery'>";
    let allCountries = ["台灣", "日本", "韓國", "英國", "法國", "埃及", "南非", "加拿大", "美國", "巴西", "阿根廷"];
    for (let i = 0; i < allCountries.length; i++) {
        let countryName = allCountries[i].toLowerCase();
        let photoPath = "all_countries/" + countryName + ".jpg";
        allPhotosHTML += "<div class='gallery-item' onclick='redirectToCountry(\"" + countryName + ".html\")'>" +
                          "<img src='" + photoPath + "' alt='" + allCountries[i] + "'>" +
                          "</div>";
    }

    allPhotosHTML += "</div>";
    photoContainer.innerHTML = allPhotosHTML;
}

function generatePhotos(continent) {
    let photoHTML = "<div class='gallery'>";

    let countries;

    if (continent === "亞洲") {
        countries = ["台灣", "日本", "韓國"];
    } else if (continent === "歐洲") {
        countries = ["英國", "法國"];
    } else if (continent === "非洲") {
        countries = ["埃及", "南非"];
    } else if (continent === "北美洲") {
        countries = ["加拿大", "美國"];
    } else {
        countries = ["巴西", "阿根廷"];
    }

    for (let i = 0; i < countries.length; i++) {
        let countryName = countries[i].toLowerCase();
        let photoPath = "pics/" + countryName + ".jpg";
        photoHTML += "<div class='gallery-item' onclick='redirectToCountry(\"" + countryName.toLowerCase() + ".html\")'>" +
                     "<img src='" + photoPath + "' alt='" + countries[i] + "' width = '20px'; height = '20px'>" +
                     "</div>";
    }

    photoHTML += "</div>";
    photoContainer.innerHTML = photoHTML;
}

function redirectToCountry(countryPage) {
    window.open(countryPage, '_blank');
}


