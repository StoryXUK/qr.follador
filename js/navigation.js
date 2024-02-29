 // Function to include navigation from navigation.html
 function includeNavigation() {
    fetch('navigation.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navigation').innerHTML = data;
        })
        .then(() => {
            // After including navigation, include the navigation.js file
            includeNavigationJS();
        });
}

// Function to include footer from footer.html
function includeFooter() {
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        });
}

// Function to include navigation.js file
function includeNavigationJS() {
    var script = document.createElement('script');
    script.src = 'navigation.js';
    document.head.appendChild(script);
}

// Call includeNavigation and includeFooter functions when the page loads
window.onload = function() {
    includeNavigation();
    includeFooter();
};