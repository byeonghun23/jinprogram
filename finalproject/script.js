/* ------------------------
   DOM 요소
------------------------- */
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalYear = document.getElementById("modal-year");
const modalDesc = document.getElementById("modal-desc");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.querySelector(".close");

const rerollBtn = document.getElementById("reroll-btn");
const randomBtn = document.getElementById("random-btn");
const menuBtn = document.getElementById("menu-btn");
const dropdown = document.getElementById("dropdown");

let openedByRandom = false;


/* ------------------------
   모달 열기
------------------------- */
document.querySelectorAll(".anime-card").forEach(card => {
  card.addEventListener("click", () => {

    const img = card.querySelector("img");

    modalTitle.textContent = card.dataset.title;
    modalYear.textContent = `방영년도: ${card.dataset.year}`;
    modalDesc.textContent = card.dataset.desc;
    modalImg.src = img.src;

    // 등장인물 적용
    const list = document.getElementById("character-list");
    list.innerHTML = "";

    const charData = characters[card.dataset.title];
    if (charData) {
      charData.forEach(ch => {
        const div = document.createElement("div");
        div.classList.add("character-card");
        div.innerHTML = `
          <img src="${ch.img}">
          <p class="character-name">${ch.name}</p>
        `;
        list.appendChild(div);
      });
    }

    enableDragScroll(list);

    // 랜덤으로 열렸을 때만 버튼 표시
    rerollBtn.style.display = openedByRandom ? "block" : "none";

    modal.style.display = "block";
  });
});


/* ------------------------
   모달 닫기
------------------------- */
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  openedByRandom = false;
});

window.addEventListener("click", e => {
  if (e.target === modal) {
    modal.style.display = "none";
    openedByRandom = false;
  }
});


/* ------------------------
   "랜덤 추천" 버튼
------------------------- */
randomBtn.addEventListener("click", () => {
  const cards = [...document.querySelectorAll(".anime-card")];
  const randomCard = cards[Math.floor(Math.random() * cards.length)];

  openedByRandom = true;
  randomCard.click();

  dropdown.style.display = "none";
});


/* ------------------------
   "다시 뽑기" 버튼
------------------------- */
rerollBtn.addEventListener("click", () => {
  const cards = [...document.querySelectorAll(".anime-card")];
  const randomCard = cards[Math.floor(Math.random() * cards.length)];

  // 🔥 계속 랜덤 모드 유지
  openedByRandom = true;

  randomCard.click();
});


/* ------------------------
   메뉴 열기 / 닫기
------------------------- */
menuBtn.addEventListener("click", () => {
  dropdown.style.display =
    dropdown.style.display === "block" ? "none" : "block";
});

document.addEventListener("click", (e) => {
  if (!menuBtn.contains(e.target) && !dropdown.contains(e.target)) {
    dropdown.style.display = "none";
  }
});


/* ------------------------
   등장인물 드래그 스크롤
------------------------- */
function enableDragScroll(list) {
  let isDown = false;
  let startX, scrollLeft;

  list.addEventListener("mousedown", e => {
    isDown = true;
    startX = e.pageX - list.offsetLeft;
    scrollLeft = list.scrollLeft;
  });

  list.addEventListener("mouseup", () => isDown = false);

  list.addEventListener("mousemove", e => {
    if (!isDown) return;
    const x = e.pageX - list.offsetLeft;
    list.scrollLeft = scrollLeft - (x - startX) * 1.3;
  });
}


/* ------------------------
   등장인물 데이터
------------------------- */
const characters = {
  "드래곤볼": [
    { name: "손오공", img: "https://..." },
    { name: "부르마", img: "https://..." }
  ],

  // 나머지 쭉 추가 가능
};

// ------------------------
// 애니 목록 드래그 슬라이드 적용
// ------------------------
document.querySelectorAll(".anime-list").forEach(list => {
  enableAnimeSlide(list);
});


function enableAnimeSlide(container) {
  let isDown = false;
  let startX;
  let scrollLeft;
  let moved = false;

  container.addEventListener("mousedown", (e) => {
    isDown = true;
    moved = false;
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
    container.classList.add("dragging");
  });

  container.addEventListener("mousemove", (e) => {
    if (!isDown) return;

    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX);

    if (Math.abs(walk) > 5) {
      moved = true;
      container.scrollLeft = scrollLeft - walk;
      e.preventDefault();
    }
  });

  container.addEventListener("mouseup", () => {
    isDown = false;
    container.classList.remove("dragging");
  });

  container.addEventListener("mouseleave", () => {
    isDown = false;
    container.classList.remove("dragging");
  });

  window.addEventListener("mouseup", () => {
    isDown = false;
    container.classList.remove("dragging");
  });

  container.addEventListener("click", (e) => {
    if (moved) {
      e.preventDefault();   // 드래그 후 클릭 방지
      moved = false;
    }
  });
}
