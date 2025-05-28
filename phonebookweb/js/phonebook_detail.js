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
  
  // localStorage에서 연락처 데이터 불러오기
  let contacts = [];
  if (localStorage.getItem("contacts")) {
    contacts = JSON.parse(localStorage.getItem("contacts"));
  }
  
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
      if(element.id === id) {
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
    }
  }
  renderDetail();
  
  // 버튼 링크 세팅
  document.getElementById("previousBtn").href = "phonebook.html";
  document.getElementById("editBtn").href = "phonebook_edit.html?id=" + id;
  
  // 삭제 기능
  document.getElementById("deleteBtn").addEventListener("click", function() {
    if (confirm("정말로 이 연락처를 삭제하시겠습니까?")) {
      contacts = contacts.filter(contact => contact.id !== id);
      localStorage.setItem("contacts", JSON.stringify(contacts));
      alert("삭제되었습니다.");
      window.location.href = "phonebook.html";
    }
  });
  