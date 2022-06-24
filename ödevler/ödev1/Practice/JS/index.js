
const headerHtml = `
<div class="home">
<a href="./MainPage.html">Anasayfa</a>
</div>

<ul class="menu">
<li> <a href="./AboutUs.html">Hakkımızda</a></li>
<li> <a href="./Services.html">Hizmetler</a></li>
<li> <a href="./Contact.html">İletişim</a></li>
</ul>`

const header= document.querySelector("#header");

if (header){
    header.innerHTML=headerHtml;
}

const contactHtml =`
<div id="contact_form">
<div class="form-group">
    <label for="firstName">Lütfen Adınızı Giriniz:</label>
    <input type="text" placeholder="Adınızı Giriniz" id="firstName">
</div>

<div class="form-group">
    <label for="surName">Lütfen Soyadınızı Giriniz:</label>
    <input type="text" placeholder="Soyadınızı Giriniz" id="surName">
</div>

<div class="form-group">
    <button>Gönder</button>
</div>

</div>`

const contact = document.querySelector("#contact");

if (contact){
    contact.innerHTML=contactHtml;
} 

const submit = document.querySelector("#contact_form button");
submit.addEventListener("click", submitForm())

function submitForm() {
    const firstName = document.querySelector("#firstName").value;
    const lastName = document.querySelector("#surName").value;
    console.log(firstName, lastName);
}

