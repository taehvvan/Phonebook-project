var Target = document.getElementById("clock");
function clock(){
var today = new Date();

var hours = ('0' + today.getHours()).slice(-2);
var minutes = ('0' + today.getMinutes()).slice(-2);

var timeString = hours + ':' + minutes;

Target.innerText = `${hours}:${minutes}`
}
clock();
setInterval(clock, 1000);
// 연락처 데이터
const contacts = [
  {
    img: "https://randomuser.me/api/portraits/men/34.jpg",
    name: "Jang Woo Jin",
    phone: "010 9647 5127"
  },
  {
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    name: "Jane Cooper",
    phone: "010 9647 1111"
  },
  {
    img: "https://randomuser.me/api/portraits/men/44.jpg",
    name: "Ralph Edwards",
    phone: "010 9647 2222"
  },
  {
    img: "https://randomuser.me/api/portraits/men/38.jpg",
    name: "Robert Fox",
    phone: "010 9647 3333"
  },
  {
    img: "https://randomuser.me/api/portraits/men/55.jpg",
    name: "Eleanor Pena",
    phone: "010 9647 0000"
  }
];

const contactsEl = document.getElementById('contacts');
let i = 1;
contacts.forEach(contact => {
    
     contactsEl.innerHTML += `
    <li class="contact-item">
      <img class="contact-img" src="${contact.img}" alt="${contact.name}">
      <div class="contact-info">
        <span class="contact-name"><a href="phonebook_detail.html?id=${i}">${contact.name}</a></span>
        <span class="contact-phone">${contact.phone}</span>
      </div>
      <i class="fas fa-phone call-icon"></i>
    </li>
  `;
  i++;
});