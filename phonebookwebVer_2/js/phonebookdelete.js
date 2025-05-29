    // 시계
    function clock(){
        var now = new Date();
        var h = ('0' + now.getHours()).slice(-2);
        var m = ('0' + now.getMinutes()).slice(-2);
        document.getElementById("clock").innerText = `${h}:${m}`;
    }
    clock();
    setInterval(clock, 1000);
    
    // 연락처 데이터 (id 필드 반드시 포함!)
    const contacts = [
       // {
       // id: "1",
       // img: "https://randomuser.me/api/portraits/men/34.jpg",
       // name: "Jang Woo Jin",
      //  phone: "010 9647 5127"
      //  },
        {
        id: "1",
        img: "https://randomuser.me/api/portraits/women/65.jpg",
        name: "Jane Cooper",
        phone: "010 9647 1111"
        },
        {
        id: "2",
        img: "https://randomuser.me/api/portraits/men/44.jpg",
        name: "Ralph Edwards",
        phone: "010 9647 2222"
        },
        {
        id: "3",
        img: "https://randomuser.me/api/portraits/men/38.jpg",
        name: "Robert Fox",
        phone: "010 9647 3333"
        },
        {
        id: "4",
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
        if (list.length === 0) {
        contactsEl.innerHTML = `
            <tr>
            <td colspan="4" style="text-align:center; color:#F09595; font-weight:600;">검색된 연락처가 없습니다.</td>
            </tr>
        `;
        return;
        }
        list.forEach(contact => {
        contactsEl.innerHTML += `
            <tr>
            <td><img class="contact-img" src="${contact.img}" alt="${contact.name}"></td>
            <td class="contact-name"><a href="phonebook_detail.html?id=${contact.id}">${contact.name}</a></td>
            <td class="contact-phone">${contact.phone}</td>
            <td><i class="fas fa-phone call-icon"></i></td>
            </tr>
        `;
        });
    }
    
    // 최초 전체 목록 출력
    renderContacts(contacts);
    
    // 검색 이벤트
    if (searchInput) {
        searchInput.addEventListener('input', function() {
        const keyword = this.value.trim().toLowerCase();
        const filtered = contacts.filter(c =>
            (c.name && c.name.toLowerCase().includes(keyword)) ||
            (c.phone && c.phone.replace(/\s+/g, '').includes(keyword))
        );
        renderContacts(filtered);
        });
    }
