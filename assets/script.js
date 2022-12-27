function myFunction() {
    var x = document.getElementById("name-dropdown");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function sliderOn(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("multiple-items");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.height = "0px";
        tabcontent[i].style.visibility = "hidden";
        tabcontent[i].style.opacity = "0";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.height = "unset";
    document.getElementById(cityName).style.visibility = "visible";
    document.getElementById(cityName).style.opacity = "1";
    evt.currentTarget.className += " active";
}