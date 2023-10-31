const addBtn = document.getElementById('addBtn'); //왜 const?
let addValue = document.getElementById('addValue');
let result = document.getElementById('result');

function addTodo(){
    if(addValue.value==false){ //가능
        alert('내용을 입력하세요!');
    }
    else{
        let list = document.createElement("li");
        let del = document.createElement("button");
        list.innerHTML = addValue.value; //바꿔서 출력
        result.appendChild(list);
        list.appendChild(del);
        del.innerText = "x"; 
        del.style.fontSize = "20px";
        del.style.border = "none";
        del.style.float = "right";
        del.style.right = "17px"; //요소가 화면에서 오른쪽으로 17 픽셀 이동
        del.style.marginTop = "5px";
        del.style.cursor = "pointer";
        del.addEventListener("click", deleteList); //삭제버튼 클릭시 리스트 지우기 이벤트 실행
        del.style.position="relative";

        addValue.value = ""; //할 일 입력창 초기화
        addValue.focus(); //강제 커서 깜빡임
        list.addEventListener("click", function(){ //할 일 완료 후 글자 클릭시 취소선
            list.style.textDecoration = "line-through";
            list.style.color = "gray";
        })
    }
}

function deleteList(e){
    let removeOne = e.target.parentElement; //선택한 목록 한개만 지우기(부모 객체를 지운다.)
    removeOne.remove();
}

function allClearList(e){
    if(confirm("정말 삭제하시겠습니까?")==true){
        if(result.innerText==''){ //목록칸이 비어있다면
            alert("삭제할 목록이 없습니다.");
        }
        else{ //삭제할 목록이 있다면
            result.innerText=''; //전체 삭제
        }
    }
    else {
        return false;
    }
}