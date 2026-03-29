// email,password,formの要素を取得
const $emailInput = document.getElementById("email");
const $passwordInput = document.getElementById("password");
const $loginForm = document.querySelector("form");

// Sign in時にlocalStorageにデータを保存
$loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  localStorage.setItem("email", $emailInput.value);
  localStorage.setItem("password", $passwordInput.value);
});

// 読込み時にlocalStorageにデータがあれば、自動入力
window.addEventListener("load", () => {
  $emailInput.value = localStorage.getItem("email") || "";
  $passwordInput.value = localStorage.getItem("password") || "";
});
