let lang;
window.onload = () => {
    changelang("jp");
}
function changelang(lang) {
    Array.from(document.getElementsByClassName("ln")).forEach(elm => { elm.style.display = "none"; });
    Array.from(document.getElementsByClassName(lang)).forEach(elm => { elm.style.display = "block"; });
    Array.from(document.getElementsByTagName("button")).forEach(elm => { elm.style.borderBottom = null; });
    document.getElementById(lang).style.borderBottom = "1px white solid";
    if (window.innerWidth < 440) {
        artheight = document.getElementsByTagName("article")[0].offsetHeight;
        document.getElementById("bg").style.height = artheight / 3 + "px";
    }
}