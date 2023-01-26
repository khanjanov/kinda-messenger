let textarea = document.querySelector("textarea");
let a = textarea.textContent;
let select = document.querySelector("#select");
let btn = document.querySelector("button");
btn.addEventListener("click", () => {
  if (textarea.value != "") {
    if (select.value == "public") {
      textarea.value = "";
      textarea.placeholder = "check console";
      console.log(
        "%cyour public message has been sent successfully",
        "color:lightblue"
      );
    } else {
      textarea.value = "";
      textarea.placeholder = "check console";
      console.log(
        "%cyour private message has been sent successfully",
        "color:darkorange"
      );
    }
  } else {
    console.log("%ctype something", "color:red");
    textarea.placeholder = "check console";
  }
});
textarea.addEventListener("click", () => {
  textarea.placeholder = "type here";
});
select.addEventListener("change", () => {
  textarea.placeholder = "mode changed";
});
