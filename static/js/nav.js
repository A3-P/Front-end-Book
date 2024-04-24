const profileBtn = document.getElementById("profileBtn");
const profileMenuHeader = document.getElementById("profileMenuHeader").style;
const goToLoginPage = document.getElementById("goToLoginPage");

profileBtn.addEventListener("click", function(){
    if(profileMenuHeader.display == "none"){
        profileMenuHeader.display = "flex";
    } else {
        profileMenuHeader.display = "none";
    }
});

goToLoginPage.addEventListener("click", function(){
    window.location.href = "nadoxLoginScreen/index.html";
});
