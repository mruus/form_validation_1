function checkInput(id) {
  document.getElementById(id).addEventListener("change", function () {
    let labelEl = this.parentNode.children[1];
    if (this.value == "") {
      this.style.borderColor = "red";
      this.style.color = "red";
      labelEl.style.color = "red";
      labelEl.style.top = "50%";
      return false;
    }
    this.style.borderColor = "blue";
    this.style.color = "blue";
    labelEl.style.color = "blue";
    labelEl.style.top = "0";
    labelEl.style.padding = "0px 10px";
    return true;
  });
}

function checkEmail(id) {
  document.getElementById(id).addEventListener("change", function () {
    let labelEl = this.parentNode.children[1];
    if (this.value == "") {
      this.style.borderColor = "red";
      this.style.color = "red";
      labelEl.style.color = "red";
      labelEl.style.top = "50%";
      return false;
    }

    let gmailStringChecker = "@gmail.com";
    if (!this.value.includes(gmailStringChecker)) {
      this.style.borderColor = "red";
      this.style.color = "red";
      labelEl.style.color = "red";
      labelEl.style.top = "0";
      labelEl.style.padding = "0px 10px";
      return false;
    }

    if (this.value.length <= gmailStringChecker.length) {
      this.style.borderColor = "red";
      this.style.color = "red";
      labelEl.style.color = "red";
      labelEl.style.top = "0";
      labelEl.style.padding = "0px 10px";
      return false;
    }

    this.style.borderColor = "blue";
    this.style.color = "blue";
    labelEl.style.color = "blue";
    labelEl.style.top = "0";
    labelEl.style.padding = "0px 10px";
    return true;
  });
}

checkInput("name");
checkEmail("email");
checkInput("username");
checkInput("password");

document.querySelector(".btn").addEventListener("click", clickButton);

function clickButton() {
  if (
    !checkInput("name") ||
    !checkEmail("email") ||
    !checkInput("username") ||
    !checkInput("password")
  ) {
    alert("Please Check Your Fields, And Make Them Good");
  } else {
    alert("Data Is Validated! Good Job");
  }
}
