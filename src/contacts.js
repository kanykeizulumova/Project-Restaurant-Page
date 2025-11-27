import mapImg from './images/map.png';
const loadContacts = function () {
    const content = document.getElementById('content');
    content.innerHTML = "";
    const newHeading = document.createElement('h1');
    const textNode = document.createTextNode('Our contacts');
    newHeading.appendChild(textNode);
    content.appendChild(newHeading);
    content.style.height = window.innerHeight + 'px';
    const contactContainer = document.createElement('div');
    contactContainer.id = 'contact-container';
    content.appendChild(contactContainer);
    const contactText = document.createElement('p');
    const contactTextNode = document.createTextNode('');
    contactText.appendChild(contactTextNode);
    contactContainer.appendChild(contactText);
    const contactAddress = document.createElement('p');
    const contactAddressNode = document.createTextNode('Address: Belorusskaya street, Bishkek, Kyrgyzstan');
    contactAddress.appendChild(contactAddressNode);
    contactContainer.appendChild(contactAddress);
    const contactPhone = document.createElement('p');
    const contactPhoneNode = document.createTextNode('Phone: 555-555-5555');
    contactPhone.appendChild(contactPhoneNode);
    contactContainer.appendChild(contactPhone);
    const contactEmail = document.createElement('p');
    const contactEmailNode = document.createTextNode('Email: info@example.com');
    contactEmail.appendChild(contactEmailNode);
    contactContainer.appendChild(contactEmail);
    const contactHours = document.createElement('p');
    const contactHoursNode = document.createTextNode('Hours: Monday - Friday: 9am - 5pm');
    contactHours.appendChild(contactHoursNode);
    contactContainer.appendChild(contactHours);
    const contactMap = document.createElement('img');
    contactMap.src = mapImg;
    contactContainer.appendChild(contactMap);
}

export { loadContacts };
