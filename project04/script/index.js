//시작화면/메인
document.querySelector(".container").addEventListener("mousemove", parallax);
function parallax(e) {
  document.querySelectorAll(".object").forEach(function (move) {
    var moving_value = move.getAttribute("data-value");
    var x = (e.clientX * moving_value) / 250;
    var y = (e.clientY * moving_value) / 250;
    move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
  });
}

const container = document.querySelector(".containter");
let sectionContents = document.querySelectorAll(".sectwrap section");

// 휠 스무스
document.querySelectorAll("section").forEach(function (section) {
  section.addEventListener("wheel", function (e) {
    e.preventDefault();
    let delta = e.deltaY;
    let target;
    if (delta < 0) {
      target = this.previousElementSibling;
    } else if (delta > 0) {
      target = this.nextElementSibling;
    }
    if (target) {
      let secTop = target.offsetTop;
      window.scrollTo({ top: secTop, behavior: "smooth" });
    }
  });
});


