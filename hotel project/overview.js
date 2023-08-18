var overview = document.getElementById("over");
        
overview.addEventListener("click", function(event) {
    event.preventDefault();
    var hrefValue = overview.getAttribute("href");
    overviews()
});

function overviews(){
    overview.style.textDecoration="underline"
}