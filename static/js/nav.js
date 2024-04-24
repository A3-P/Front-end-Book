const profileBtn = document.getElementById("profileBtn");
const profileMenuHeader = document.getElementById("profileMenuHeader").style;
const goToLoginPage = document.getElementById("goToLoginPage");

profileMenuHeader.display = "none";

profileBtn.addEventListener("click", function(){
    if(profileMenuHeader.display === "none"){
        profileMenuHeader.display = "flex";
    } else {
        profileMenuHeader.display = "none";
    }
});

goToLoginPage.addEventListener("click", function(){
    window.location.href = "nadoxLoginScreen/index.html";
});



const filterBtn = document.getElementById("filterBtn");
const filter = document.getElementById("filter").style;

filter.display = "none";

filterBtn.addEventListener("click", function(){
    if(filter.display === "none"){
        filter.display = "flex";
    } else {
        filter.display = "none";
    }
});
