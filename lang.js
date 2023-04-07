window.onload = () => {
    changelang("jp");
}
function changelang(lang) {
    console.log(lang);
    Array.from(document.getElementsByClassName("ln")).forEach(elm => { elm.style.display = "none"; });
    Array.from(document.getElementsByClassName(lang)).forEach(elm => { elm.style.display = "block"; });
    Array.from(document.getElementsByTagName("button")).forEach(elm => { elm.style.borderBottom = null; });
    document.getElementById(lang).style.borderBottom = "1px white solid";
    let ttl;
    switch (lang) {
        case "fr":
            ttl = "le notolitaire";
            break;
        case "tok":
            ttl = "lipu Notolitali";
            break;
        case "eo":
            ttl = "notolitaro";
            break;
        default:
            ttl = "notolitary";
            break
    }
    document.title = ttl;
    if (window.innerWidth < 440) {
        artheight = document.getElementsByTagName("article")[0].offsetHeight;
        document.getElementById("bg").style.height = artheight + "px";
    }
}