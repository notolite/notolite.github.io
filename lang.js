window.onload = () => {
    navilang = window.navigator.languages[0].split("-")[0];
    changelang(navilang);
    usa0ynjnkd();
}
function changelang(lang) {
    Array.from(document.getElementsByClassName("ln")).forEach(elm => { elm.style.display = "none"; });
    Array.from(document.getElementsByClassName(lang)).forEach(elm => { elm.style.display = "revert"; });
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

function usa0ynjnkd() {
    const avtyvh84o3 = new Date();
    let uelogheyl7 = avtyvh84o3.getFullYear();
    const wywwapkaqn = avtyvh84o3.getMonth();
    const ylpc2yiugu = avtyvh84o3.getDate();
    if (wywwapkaqn == 11 && ylpc2yiugu > 6) {
        uelogheyl7 += 1;
    }
    const ptqt3csu8r = uelogheyl7 - 2003;
    Array.from(document.getElementsByClassName("m1lw7tvoko")).forEach(elm => {
        elm.innerText = ptqt3csu8r;
    });
}