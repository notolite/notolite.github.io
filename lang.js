window.onload = () => {
    changelang("jp");
    calcAge();
}
function changelang(lang) {
    Array.from(document.getElementsByClassName("ln")).forEach(elm => { elm.style.display = "none"; });
    Array.from(document.getElementsByClassName(lang)).forEach(elm => { elm.style.display = "block"; });
    Array.from(document.getElementsByTagName("button")).forEach(elm => { elm.style.borderBottom = null; });
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

function calcAge() {
    const currentDate = new Date();
    let year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const date = currentDate.getDate();
    if (month == 11 && date > 6) {
        year += 1;
    }
    const age = year - 2003;
    Array.from(document.getElementsByClassName("age")).forEach(elm => {
        elm.innerText = age;
    });
    console.log(age);
}