
let backBtn = "fa-solid fa-arrow-left";


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
                      if (element.id === id) {
                        document.getElementById("img").src = element.img;
                        document.getElementById("name").innerText = element.name;

                        document.getElementById("editName").value = element.name;
                        document.getElementById("editPhone").value = element.phone;
                        document.getElementById("editGroup").value = element.group || "";
                        document.getElementById("editBirthday").value = element.birthday || "";
                        document.getElementById("editEmail").value = element.email || "";
                      }
                    });
                } catch (e) {
                    console.log(e);
                }
            }
        }

        document.getElementById("previousBtn").href = "phonebook_detail.html?id=" + id;