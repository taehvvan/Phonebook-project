// 시계
function clock(){
    var now = new Date();
    var h = ('0' + now.getHours()).slice(-2);
    var m = ('0' + now.getMinutes()).slice(-2);
    document.getElementById("clock").innerText = `${h}:${m}`;
  }
  clock();
  setInterval(clock, 1000);
  
  // 프로필 이미지 미리보기
  const imgInput = document.getElementById('addImg');
  const preview = document.getElementById('profilePreview');
  const defaultImg = "https://pplx-res.cloudinary.com/image/private/user_uploads/62945416/3b48cb6c-51d2-49b1-b8bf-518bcab50df5/image.jpg";
  
  imgInput.addEventListener('change', function() {
    const file = imgInput.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        preview.src = e.target.result;
      };
      reader.readAsDataURL(file);
    } else {
      preview.src = defaultImg;
    }
  });
  
  // 연락처 추가 폼 제출
  document.querySelector('.add-card').addEventListener('submit', function(e) {
    e.preventDefault();
    // 입력값 읽기
    let imgData = preview.src;
    if (!imgData) imgData = defaultImg;
    const name = document.getElementById("addName").value;
    const phone = document.getElementById("addPhone").value;
    const group = document.getElementById("addGroup").value;
    const birthday = document.getElementById("addBirthday").value;
    const email = document.getElementById("addEmail").value;
  
    // localStorage에 임시 저장 (key: additionTemp)
    localStorage.setItem('additionTemp', JSON.stringify({
      img: imgData,
      name: name,
      phone: phone,
      group: group,
      birthday: birthday,
      email: email
    }));
  
    // phonebookadditionclear.html로 이동
    window.location.href = "phonebookadditionclear.html";
  });
  