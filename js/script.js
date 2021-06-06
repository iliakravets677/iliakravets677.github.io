// Копіювати посилання
function copyip(){
var copyText = 'iliakravets677.github.io';
(serverip).select();
document.execCommand("copy");

document.getElementById("ipbtn").innerHTML = "скопійовано ";
setTimeout(resetbtn, 1000);
}
function resetbtn(){
    document.getElementById("ipbtn").innerHTML = "скопіювати";
}

// Якорі
var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
    return false;
});

