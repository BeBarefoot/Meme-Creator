var gLang = 'en'
var gTrans = {
    upload: {
        en: 'UPLOAD',
        he: 'העלה',
    },
    gallery: {
        en: 'GALLERY',
        he: 'גלריה',
    },
    about: {
        en: 'ABOUT',
        he: 'עוד מידע',
    },
    bold: {
        en: 'Bold',
        he: 'כהה',
    },
    shadow: {
        en: 'Shadow',
        he: 'הצללה',
    },
    'get-in-touch': {
        en: 'GET IN TOUCH',
        he: 'דברו איתנו',
    },
    'add-line': {
        en: 'Add Text',
        he: 'הוסף טקסט',
    },
    search: {
        en: 'Find Image',
        he: 'חפש תמונה',
    },
    abouth1: {
        en: 'What Is is this?',
        he: 'מה הולך פה?',
    },
    abouth2: {
        en: `What is a 'Meme'? `,
        he: `מה זה מים?`,
    },
    aboutp1: {
        en: `It's a 'Meme' making App for you soul`,
        he: `זאת אפליקצייה להכנת מימים`,
    },
    aboutp2: {
        en: `A millennial way of communicating emotions visually`,
        he: 'זאת הדרך הכי אפקטיבית לקשר רגשות בצורה ויזואלית',
    },
    contact: {
        en: `Contact Us`,
        he: `צור קשר`,
    },
    send: {
        en: `Send`,
        he: `שלח`,
    },
    massage: {
        en: `Massage:`,
        he: `:הודעה`,
    },
    mail: {
        en: `Mail:`,
        he: `:מייל`,
    },
    name: {
        en: `Name:`,
        he: `:שם`,
    },
    suggestions: {
        en: `Suggestions? Complaints? Life observataions? We want to know EVERYTHING`,
        he: `הצעות? תלונות? הבחנות מעניינות על החיים? אנחנו רוצים לדעת ה-כ-ל`,
    },
    addtext: {
        en: `Add Text`,
        he: `הוסף טקסט`,
    },
    textcolor: {
        en: `Text Color`,
        he: `צבע הטקסט`,
    },
    save: {
        en: `Save and Publish`,
        he: `שמור ופרסם`,
    },
    back: {
        en: `Back`,
        he: `אחורה`,
    },
    textoutline: {
        en: `Outline Color`,
        he: `צבע היקף`,
    },
    download: {
        en: `Download`,
        he: `הורד `,
    },
}

function doTrans() {
    var doc = document.querySelectorAll('[data-trans]')
    for (let i = 0; i < doc.length; i++) {
        var el = doc[i];
        var transKey = el.getAttribute('data-trans')
        var txt = getTrans(transKey)
        if (el.nodeName === 'INPUT') {
            el.setAttribute('placeholder', txt);
        } else {
            el.innerText = txt;
        }
    }
    $('.navbar-collapse').collapse('hide')
}

function getTrans(transKey) {
    var keyTrans = gTrans[transKey];
    if (!keyTrans) return 'UNKNOWN';
    var txt = keyTrans[gLang];
    if (!txt) txt = keyTrans['en'];
    return txt;
}