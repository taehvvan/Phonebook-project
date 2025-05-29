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

    


const urlParam = new URLSearchParams(location.search);
let id = urlParam.get("id");
console.log(id);    // URL은 숫자가 아닌 문자열

const xmlhttp = new XMLHttpRequest();
xmlhttp.open("get", "phonedata.json");
xmlhttp.send();
// 상태가 변할 때 함수 호출
xmlhttp.onreadystatechange=function(){
    // 네트워크 상태 확인 후 실행
    if(xmlhttp.readyState === 4 && xmlhttp.status === 200) {
        console.log(xmlhttp.responseText);
        try {
            var data = JSON.parse(xmlhttp.responseText);
            let img = document.getElementById("img");
            let name = document.getElementById("name");
            let phone = document.getElementById("phone");
        
            data.forEach(element => {
                // "==" : 같은 객체인지 확인
                // "===" : 객체의 내용이 같은지 확인
                if(element.id === id) {    // element.id === parseInt(id)
                    img.src = element.img;
                    name.innerHTML = element.name;
                    phone.innerHTML = element.phone;
                    return;
                }
            });
        } catch (e) {
            console.log(e);
        }
    }
}

document.getElementById("previousBtn").href = "phonebook.html";
document.getElementById("editBtn").href = "phonebook_edit.html?id=" + id;

//삭제버튼 관련 코드
function showOverlay() {
    document.getElementById('overlay').style.display = 'flex';
}
  
function deleteprofile(isConfirmed) {
    document.getElementById('overlay').style.display = 'none';
        
    if(isConfirmed){
        //삭제명령 추가할 위치
        window.location.href = 'phonebook.html';
    }
}