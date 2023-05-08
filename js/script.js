let bool = true;
document.querySelector(".menu_parent").addEventListener("click", () => {
  if (bool) {
    document.querySelector(".div1").style.cssText = `  transform: rotate(45deg);
        position: absolute;
        top: 17%;
        left: 30%;
        background-color: white;
      `;
    document.querySelector(".div2").style.display = "none";

    document.querySelector(".div3").style.cssText = `
        transform: rotate(-45deg);
        position: absolute;
        top: 17%;
        left: 30%;
        background-color: white;
      `;
    document.querySelector(".right").style.right = "0";

    bool = false;
  } else {
    document.querySelector(".div1").style.cssText = `  transform: rotate(0deg);
    position: static;
    background-color: black;
  `;
    document.querySelector(".div2").style.display = "block";

    document.querySelector(".div3").style.cssText = `
    transform: rotate(0deg);
    position: static;
    background-color: black;
  `;
    document.querySelector(".right").style.right = "-40%";

    bool = true;
  }
});
