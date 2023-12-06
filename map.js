let country;
function start() {
    document.getElementById("continent").addEventListener("change", con);
}
function con() {
    country = document.getElementById("country");
    if (continent.value == "歐洲") {
        country.innerHTML = "<label for='continent'>選擇國家:</label>" + "<select name='country' id='country' class='country'>" +
            "<option value='' disabled selected hidden></option>" +
            "<option value='英國'>英國</option>";
    }
    else if (continent.value == "亞洲") {
        country.innerHTML = "<label for='continent'>選擇地區:</label>" + "<select name='country' id='country' class='country'>" +
            "<option value='' disabled selected hidden></option>" +
            "<option value='台灣'>台灣</option>";
    }
    else {
        country.innerHTML ="";
    }
}
window.addEventListener("load", start);