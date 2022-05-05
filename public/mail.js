const firebaseConfig = {
apiKey: "AIzaSyD-HbNnQ7wENNzWiS0G6xMnXBKwOmQUz8g",
authDomain: "ebook-landing-page.firebaseapp.com",
databaseURL: "https://ebook-landing-page-default-rtdb.firebaseio.com",
projectId: "ebook-landing-page",
storageBucket: "ebook-landing-page.appspot.com",
messagingSenderId: "225928437731",
appId: "1:225928437731:web:60d64a29243358d3248ad6",
measurementId: "G-ZLQZC9TQ4X"
};

firebase.initializeApp(firebaseConfig);

var contactFormDb = firebase.database().ref('contactForm')

document.getElementById('contactForm').addEventListener("submit", submitForm)

function submitForm(e) {
    e.preventDefault();
    var sename = getElementVal('sename');
    var semail = getElementVal('semail');
    var senumber = getElementVal('senumber');
     
    saveMessages(sename, semail, senumber)
}

const saveMessages = (sename, semail, senumber) => {
    var newContactForm = contactFormDb.push();

    newContactForm.set ({
        sename: sename,
        semail: semail,
        senumber: senumber
    })
}

const getElementVal = (id) => {
    return document.getElementById(id).value
}