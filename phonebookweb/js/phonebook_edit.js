// 시계
function clock(){
    var now = new Date();
    var h = ('0' + now.getHours()).slice(-2);
    var m = ('0' + now.getMinutes()).slice(-2);
    document.getElementById("clock").innerText = `${h}:${m}`;
  }
  clock();
  setInterval(clock, 1000);
  
  // URL 파라미터에서 id 추출
  const urlParam = new URLSearchParams(location.search);
  let id = urlParam.get("id");
  
  // 연락처 정보 불러오기
  const xmlhttp = new XMLHttpRequest();
  xmlhttp.open("get", "phonedata.json");
  xmlhttp.send();
  
  xmlhttp.onreadystatechange = function() {
    if(xmlhttp.readyState === 4 && xmlhttp.status === 200) {
      try {
        var data = JSON.parse(xmlhttp.responseText);
        data.forEach(element => {
          if (element.id === id) {
            document.getElementById("img").src = element.img;
            document.getElementById("editName").value = element.name;
            document.getElementById("editPhone").value = element.phone;
            document.getElementById("editGroup").value = element.group || "";
            document.getElementById("editBirthday").value = element.birthday || "";
            document.getElementById("editEmail").value = element.email || "";
          }
        });
      } catch (e) {
        alert("데이터를 불러오는 중 오류가 발생했습니다.");
      }
    }
  };
  
  // 취소(이전) 버튼 링크 세팅
  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("previousBtn").href = "phonebook_detail.html?id=" + id;
  });
  
  // 저장 버튼(폼 제출) - 실제 저장 동작은 서버/로컬 구현 필요
  document.querySelector('.edit-card').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('연락처 정보가 저장되었습니다. (실제 저장 기능은 별도 구현 필요)');
    // 실제 저장 로직 추가 필요
  });
  