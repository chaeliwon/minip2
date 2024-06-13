// main.js
const firebaseConfig = {
    apiKey: "AIzaSyDY_rShHJYXanLrhjgpyee5jzfyrctIwok",
    authDomain: "mini-project-ce8f4.firebaseapp.com",
    databaseURL: "https://mini-project-ce8f4-default-rtdb.firebaseio.com",
    projectId: "mini-project-ce8f4",
    storageBucket: "mini-project-ce8f4.appspot.com",
    messagingSenderId: "267780174541",
    appId: "1:267780174541:web:9bce134f9caa99db636f84",
    measurementId: "G-FXC0X6HCRP"
};

// 파이어베이스 앱 초기화
const app = firebase.initializeApp(firebaseConfig);

// 파이어베이스 실시간 데이터베이스 생성
const database = firebase.database();

const addUserBtn = document.signupForm.addUserBtn;
addUserBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const id = document.signupForm.id.value;
    const password = document.signupForm.password.value;
    console.log(password);
    const confirmPassword = document.signupForm.confirmPassword.value;
    const height = document.signupForm.height.value;
    const weight = document.signupForm.weight.value;
    const birthdate = document.signupForm.birthdate.value;
    const gender = document.signupForm.gender.value;

    console.log(id, password, height, weight, birthdate, gender);
    if(password === confirmPassword){
        joinUser(id,password,height,weight,birthdate,gender);
    }else{
        alert("비밀번호가 다릅니다.")
    }
})

function joinUser(id,password,height,weight,birthdate,gender){
    database.ref("users/"+id).set({
        password:password,
        height:height,
        weight:weight,
        birthdate:birthdate,
        gender:gender
    });
}


// document.getElementById('signupForm').addEventListener('submit', function (event) {
//     event.preventDefault();

//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;
//     const confirmPassword = document.getElementById('confirm_password').value;
//     const height = document.getElementById('height').value;
//     const weight = document.getElementById('weight').value;
//     const birthdate = document.getElementById('birthdate').value;
//     const gender = document.querySelector('input[name="gender"]:checked').value;

//     if (password !== confirmPassword) {
//         alert('비밀번호가 일치하지 않습니다.');
//         return;
//     }

//     // Firebase 인증을 통한 회원가입
//     firebase.auth().createUserWithEmailAndPassword(email, password)
//         .then((userCredential) => {
//             // 회원가입 성공
//             const user = userCredential.user;
//             const userId = user.uid;

//             // 사용자 정보를 실시간 데이터베이스에 저장
//             firebase.database().ref('users/' + userId).set({
//                 email: email,
//                 height: height,
//                 weight: weight,
//                 birthdate: birthdate,
//                 gender: gender
//             });

//             alert('회원가입이 성공적으로 완료되었습니다!');
//             // 회원가입 성공 
//             window.location.href = 'login.html';
//         })
//         .catch((error) => {
//             // 회원가입 실패
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             alert('회원가입 중 오류가 발생했습니다: ' + errorMessage);
//         });
// });
