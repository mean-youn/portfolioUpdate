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

const header = document.querySelector("header");
const main = document.querySelector(".main");
const container = document.querySelector(".containter");
let sectionContents = document.querySelectorAll(".sectwrap section");
let menuLis = header.querySelectorAll(".menu li");
//메뉴클릭 -> 스무스 스크롤
menuLis.forEach(function (li) {
  li.addEventListener("click", function (e) {
    e.preventDefault();

    let href = li.querySelector("a").getAttribute("href");
    let secTop = document.querySelector(href).offsetTop;
    window.scrollTo({ top: secTop, behavior: "smooth" });
  });
});

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

// 메인페이지 지나고 해더, 탑버튼 보이기
window.addEventListener("scroll", function () {
  let scrTop = window.scrollY;

//   let scrollTop = window.pageYOffset || document.documentElemnet.scrollTop;

  if (scrTop >= 800) {
    header.style.display = "block";
    main.style.display = "block";
  } else {
    header.style.display = "none";
    main.style.display = "none";
  }
  //해당섹션-메뉴li on
  sectionContents.forEach(function (section, i) {
    let secTop = section.getBoundingClientRect().top + window.pageYOffset;

    if (scrTop >= secTop) {
      menuLis.forEach(function (menuLi) {
        menuLi.classList.remove("on");
      });
      menuLis[i].classList.add("on");
    }
  });
});

// 메인버튼 클릭시 메인으로 돌아가기
main.addEventListener("scroll", function (e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

//마우스 그라디언트
document.addEventListener("DOMContentLoaded", function () {
  const background = document.querySelector(".background");

  window.addEventListener("scroll", function () {
    let scrollPos = window.scrollY || window.pageYOffset;
    let maxScroll = document.body.scrollHeight - window.innerHeight;
    let scrollPercent = (scrollPos / maxScroll) * 100;
    let gradientAngle = scrollPercent * 2.3; // 0 to 180, 범위를 조정할 수 있습니다.
    background.style.background = `linear-gradient(${gradientAngle}deg, #8D62B9, #05226D)`;
  });
});

//sect1
//돌리기
const rotateCircle = document.querySelector(".swiperWrapper");
const rotateContents = rotateCircle.querySelectorAll(".swiperSlide");
const prev = document.querySelector(".prev1");
const next = document.querySelector(".next1");
const deg = 90;
const len = rotateContents.length - 1;
let i = 0;
let num = 0;
let active = 0;

function addOn(i, lists) {
  for (let el of lists) {
    el.classList.remove("on");
  }
  lists[i].classList.add("on");

  //article 개수만큼 반복
  for (let el of lists) {
    //   let img = el.querySelector("img");
    el.style.transform = `rotate(${deg * i}deg) tra`;
    i++;
  }
}
prev.addEventListener("click", () => {
  num++;
  rotateCircle.style.transform = `rotate(${deg * num}deg) `;
  active == 0 ? (active = len) : active--;
  addOn(active, rotateContents);
});

next.addEventListener("click", () => {
  num--;
  rotateCircle.style.transform = `rotate(${deg * num}deg) `;

  active == len ? (active = 0) : active++;
  addOn(active, rotateContents);
});

//sect2
//후루룩
let itemWid = 0;
let dir = -1;
let speed = 1;
let loc = 1;
$(".item").each(function () {
  let w = $(this).innerWidth();
  itemWid += w;
  console.log(itemWid);
});
console.log("item", itemWid);

setInterval(flowBanner, 10);
function flowBanner() {
  loc += speed * dir;
  if (loc <= -itemWid) {
    loc = 0;
  } else if (loc >= 0) {
    loc = -itemWid;
  }
  $("#sect2 .frame").css({ left: loc });
}

$(".next2").mouseenter(function () {
  dir = -1;
  speed = 5;
});
$(".prev2").mouseenter(function () {
  dir = 1;
  speed = 5;
});
$(".next2").mouseleave(function () {
  speed = 1;
});
$(".prev2").mouseleave(function () {
  speed = 1;
});

$("#sect2 .inner").mouseenter(function () {
  speed = 0;
});
$("#sect2 .inner").mouseleave(function () {
  speed = 1;
});


//윈도우 높이구하기 5990
// const h = document.body.clientHeight
// console.log(h)