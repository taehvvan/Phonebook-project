// 시계
function clock(){
    var now = new Date();
    var h = ('0' + now.getHours()).slice(-2);
    var m = ('0' + now.getMinutes()).slice(-2);
    document.getElementById("clock").innerText = `${h}:${m}`;
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
  
  // 검색 기능
  const contactsEl = document.getElementById('contacts');
  const searchInput = document.getElementById('search');
  
  function renderContacts(list) {
    contactsEl.innerHTML = '';
    let i = 1;
    list.forEach(contact => {
      contactsEl.innerHTML += `
        <tr>
          <td><img class="contact-img" src="${contact.img}" alt="${contact.name}"></td>
          <td class="contact-name"><a href="phonebook_detail.html?id=${i}">${contact.name}</a></td>
          <td class="contact-phone">${contact.phone}</td>
          <td><i class="fas fa-phone call-icon"></i></td>
        </tr>
      `;
      i++;
    });
  }
  
  renderContacts(contacts);
  
  if (searchInput) {
    searchInput.addEventListener('input', function() {
      const keyword = this.value.trim().toLowerCase();
      const filtered = contacts.filter(c =>
        c.name.toLowerCase().includes(keyword) ||
        c.phone.replace(/\s+/g, '').includes(keyword)
      );
      renderContacts(filtered);
    });
  }
  
