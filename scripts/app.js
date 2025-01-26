/*
    James Swaine, 100884091
    January 25th, 2025
*/

(function(){

    function Start()
    {
        console.log("App started!");
        switch(document.title) {
            case "Opportunities":
                DisplayOpportunitiesPage();
                break;
            case "Home":
                DisplayHomePage();
                break;
            case "Contact":
                DisplayContactPage();
                break;
            case "Events":
                DisplayEventsPage();
                break;
        }
    }
    window.addEventListener("load", Start)

})();

function DisplayOpportunitiesPage(){
    console.log("Called DisplayOpportunitiesPage().");
}

function DisplayHomePage(){
    console.log("Called DisplayHomePage().");
}

function DisplayContactPage(){
    console.log("Called DisplayContactPage().");
}

function DisplayEventsPage(){
    console.log("Called DisplayEventsPage().");
}