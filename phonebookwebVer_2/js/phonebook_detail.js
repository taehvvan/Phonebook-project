// 시계
function clock(){
    var now = new Date();
    var h = ('0' + now.getHours()).slice(-2);
    var m = ('0' + now.getMinutes()).slice(-2);
    document.getElementById("clock").innerText = `${h}:${m}`;
  }
  clock();
  setInterval(clock, 1000);
  
  // 상세 정보 불러오기
  const urlParam = new URLSearchParams(location.search);
  let id = urlParam.get("id");
  
  // 연락처 데이터 (phonebook.js와 동일하게 유지)
  const contacts = [
    {
      id: "1",
      img: "https://randomuser.me/api/portraits/men/34.jpg",
      name: "Jang Woo Jin",
      phone: "010 9647 5127",
      group: "친구",
      birthday: "1990-01-01",
      email: "jang@example.com"
    },
    {
      id: "2",
      img: "https://randomuser.me/api/portraits/women/65.jpg",
      name: "Jane Cooper",
      phone: "010 9647 1111",
      group: "가족",
      birthday: "1992-02-02",
      email: "jane@example.com"
    },
    {
      id: "3",
      img: "https://randomuser.me/api/portraits/men/44.jpg",
      name: "Ralph Edwards",
      phone: "010 9647 2222",
      group: "직장",
      birthday: "1988-03-03",
      email: "ralph@example.com"
    },
    {
      id: "4",
      img: "https://randomuser.me/api/portraits/men/38.jpg",
      name: "Robert Fox",
      phone: "010 9647 3333",
      group: "기타",
      birthday: "1985-04-04",
      email: "robert@example.com"
    },
    {
      id: "5",
      img: "https://randomuser.me/api/portraits/men/55.jpg",
      name: "Eleanor Pena",
      phone: "010 9647 0000",
      group: "친구",
      birthday: "1995-05-05",
      email: "eleanor@example.com"
    }
  ];
  // 삭제 버튼 클릭 시 phonebookdelete.html로 이동
document.getElementById("deleteBtn").onclick = function() {
    alert("연락처가 삭제되었습니다");
    window.location.href = "phonebookdelete.html";
  };
  
  // 상세 정보 표시
  function renderDetail() {
    let img = document.getElementById("img");
    let name = document.getElementById("name");
    let phone = document.getElementById("phone");
    let group = document.getElementById("group");
    let birthday = document.getElementById("birthday");
    let email = document.getElementById("email");
    let found = false;
    contacts.forEach(element => {
      if(String(element.id) === String(id)) {
        img.src = element.img;
        name.innerHTML = element.name;
        phone.innerHTML = element.phone;
        group.innerHTML = element.group || '-';
        birthday.innerHTML = element.birthday || '-';
        email.innerHTML = element.email || '-';
        found = true;
      }
    });
    if(!found) {
      name.innerHTML = "존재하지 않는 연락처";
      phone.innerHTML = "-";
      group.innerHTML = "-";
      birthday.innerHTML = "-";
      email.innerHTML = "-";
    }
  }
  renderDetail();
  
  // 버튼 링크 세팅
  document.getElementById("previousBtn").href = "phonebook.html";
  document.getElementById("editBtn").href = "phonebook_edit.html?id=" + id;
  
  // 삭제 버튼은 UI에만 있고, 동작 없음
  // document.getElementById("deleteBtn")는 이벤트리스너를 추가하지 않습니다.
  