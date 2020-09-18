'use strict';
const title = document.querySelectorAll('title');
const name = document.querySelectorAll('.navigation__logo_text');
const address = document.querySelectorAll('.address__contact');
const phone = document.querySelectorAll('.address__phone a');
const email = document.querySelectorAll('.email');
const copyright = document.querySelector('.copyright');
const footerText = document.querySelectorAll('.footer__text');

const domain = "starmountain.com";
const titleText = "Hiking in The Carpathian Mountains";
const contactInfo = {
    name: "Star Mountain",
    contact: {
        address: "Zakarpattia Oblast",
        phone: "+1 555-555-555",
        email: `info@${domain}`,
    },
    copyright: `Copyright © 2020 ${domain}`,
    text: "Explore Ukraine with Us!"
}

function addContent(nodeList, text) {
    for (let item = 0; item < nodeList.length; item++) {
        nodeList[item].innerText = text
    }
}

addContent(title, titleText);
addContent(name, contactInfo.name);
addContent(address, contactInfo.contact.address);
addContent(phone, contactInfo.contact.phone);
addContent(email, contactInfo.contact.email);
addContent(copyright, contactInfo.copyright);
addContent(footerText, contactInfo.text);
