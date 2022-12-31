var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-content");


function opentab(tabname){
    for(obj of tablinks){
        obj.classList.remove("active-link");
    }
        for(content  of tabcontents){
            content.classList.remove("active-tab");

        }
        document.getElementById(tabname).classList.add("active-tab");
}


var ty = new Typed(".typing", {
    strings: ["Data Analyst", "Developer", "Designer", "Data Annotator"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});






