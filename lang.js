window.onload = () => {
    lang = langpref();
    changelang(lang);
    usa0ynjnkd();
}
function langpref() {
    langs = window.navigator.languages;
    list = ["ja", "fr", "eo", "en", "tok", "zh"];
    for (let i = 0; i < langs.length; i++) {
        for (let j = 0; j < list.length; j++) {
            if (langs[i].split("-")[0] == list[j]) {
                return list[j];
            }
        }
    }
    return "ja";
}
function changelang(lang) {
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
    Array.from(document.getElementsByClassName("ln")).forEach(elm => { elm.style.display = "none"; });
    Array.from(document.getElementsByClassName(lang)).forEach(elm => { elm.style.display = "revert"; });
    Array.from(document.getElementsByTagName("button")).forEach(elm => { elm.style.borderBottom = null; });

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
    const cadcnfvf = 350;
    const vgonsdfb = 789;
    const dhaof4dh = 5968;
    const fcnadfovn = 340;
    const casdocu = 648;
    const asdfadfvbafd = 296;
    if (wywwapkaqn == 11 && ylpc2yiugu > 6) {
        uelogheyl7 += 1;
    }
    const ptqt3csu8r = uelogheyl7 - (cadcnfvf / 7 - fcnadfovn * 2 + vgonsdfb + dhaof4dh / 4 - asdfadfvbafd + casdocu);
    Array.from(document.getElementsByClassName("m1lw7tvoko")).forEach(elm => {
        elm.innerText = ptqt3csu8r;
    });
}