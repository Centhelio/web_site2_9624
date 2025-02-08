// ------------------------------------------------------------------------------------------------------------ //


//footer_ANGLAIS
var footer = new XMLHttpRequest();
footer.open("GET", "js-header-footer/footer.html", true);

footer.onreadystatechange = function () {
    if (footer.readyState === 4 && footer.status === 200) {
        document.getElementById("footer").innerHTML = footer.responseText;
    }
};

// Function to send the request after a delay
function loadFooterWithDelay() {
    footer.send();
}

// Set a delay of 200 milliseconds before sending the request
setTimeout(loadFooterWithDelay, 500);


// ------------------------------------------------------------------------------------------------------------ //


//header_ANGLAIS
var navbar = new XMLHttpRequest();
navbar.open("GET", "js-header-footer/header.html", true);

navbar.onreadystatechange = function () {
    if (navbar.readyState === 4 && navbar.status === 200) {
        document.getElementById("header").innerHTML = header.responseText;
    }
};

// Function to send the request after a delay
function loadHeaderWithDelay() {
    navbar.send();
}

// Set a delay of 200 milliseconds before sending the request
setTimeout(loadHeaderWithDelay, 500);


// ------------------------------------------------------------------------------------------------------------ //


//header_FRANCAIS
var navbar_fr = new XMLHttpRequest();
navbar_fr.open("GET", "js-header-footer/header_french.html", true);

navbar_fr.onreadystatechange = function () {
    if (navbar_fr.readyState === 4 && navbar_fr.status === 200) {
        document.getElementById("header_french").innerHTML = header_french.responseText;
    }
};

// Function to send the request after a delay
function loadFrenchHeaderWithDelay() {
    navbar_fr.send();
}

// Set a delay of 200 milliseconds before sending the request
setTimeout(loadFrenchHeaderWithDelay, 500);


// ------------------------------------------------------------------------------------------------------------ //


//footer_FRANCAIS
var footer_french = new XMLHttpRequest();
footer_french.open("GET", "js-header-footer/footer_french.html", true);

footer_french.onreadystatechange = function () {
    if (footer_french.readyState === 4 && footer_french.status === 200) {
        document.getElementById("footer_french").innerHTML = footer_french.responseText;
    }
};

// Function to send the request after a delay
function loadFrenchFooterWithDelay() {
    footer_french.send();
}

// Set a delay of 200 milliseconds before sending the request
setTimeout(loadFrenchFooterWithDelay, 500);


// ------------------------------------------------------------------------------------------------------------ //



 