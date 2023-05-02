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
let menuLi = header.querySelectorAll(".menu li");
const container = document.querySelector(".containter");

//메뉴클릭 -> 스무스 스크롤
menuLi.forEach(function (li) {
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
  if (scrTop >= 1000) {
    header.style.display = "block";
    main.style.display = "block";
  } else {
    header.style.display = "none";
    main.style.display = "none";
  }
});

// 메인버튼 클릭시 메인으로 돌아가기
main.addEventListener("scroll", function (e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

//메뉴 i번째 addClass

//마우스 그라디언트
document.addEventListener("DOMContentLoaded", function() {
    const background = document.querySelector('.background');

    window.addEventListener('scroll', function() {
        let scrollPos = window.scrollY || window.pageYOffset;
        let maxScroll = document.body.scrollHeight - window.innerHeight;
        let scrollPercent = (scrollPos / maxScroll) * 100;
        let gradientAngle = scrollPercent * 1.8; // 0 to 180, 범위를 조정할 수 있습니다.

        background.style.background = `linear-gradient(${gradientAngle}deg, #8D62B9, #05226D)`;
    });
});



//sect1
//돌리기
const rotateCircle = document.querySelector(".swiperWrapper");
      const rotateContents = rotateCircle.querySelectorAll(".swiperSlide");
      const prev = document.querySelector(".prev");
      const next = document.querySelector(".next");
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
        (active == 0)
          ? (active = len)
          : active--;
          addOn(active, rotateContents)
      });

      next.addEventListener("click", ()=>{
        num--;
        rotateCircle.style.transform=`rotate(${deg*num}deg) `;
        
        (active == len)? active =0 : active ++;
        addOn(active, rotateContents)
      })