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
  //1980년대
  "드래곤볼": [
    { name: "손오공", img: "https://search.pstatic.net/common?type=n&size=190x254&quality=75&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fkeypage%2Fimage%2Fdss%2F60%2F71%2F52%2F49%2F60_715249_main_image_new_1438244439032.jpg" },
    { name: "부르마", img: "https://search.pstatic.net/common?type=n&size=190x254&quality=75&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fkeypage%2Fimage%2Fdss%2F60%2F71%2F52%2F50%2F60_715250_main_image_new_1438244428601.jpg" },
    { name: "크리링", img: "https://search.pstatic.net/common?type=n&size=190x254&quality=75&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fkeypage%2Fimage%2Fdss%2F60%2F71%2F52%2F52%2F60_715252_main_image_new_1438244404859.jpg" },
    { name: "무천도사", img: "https://search.pstatic.net/common?type=n&size=190x254&quality=75&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fkeypage%2Fimage%2Fdss%2F60%2F71%2F52%2F51%2F60_715251_main_image_new_1438244418486.jpg" },
    { name: "피라프", img: "https://search.pstatic.net/common?type=n&size=190x254&quality=75&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fkeypage%2Fimage%2Fdss%2F60%2F71%2F52%2F54%2F60_715254_main_image_new_1438244384460.jpg" }
  ],

  "플란다스의 개": [
    { name: "네로", img: "https://i.pinimg.com/1200x/67/71/29/677129d55eae92c3be40153a515554f9.jpg"},
    { name: "아로아", img: "https://i.pinimg.com/1200x/d4/9c/b3/d49cb39946600125ef9c234f9cb01296.jpg"},
    { name: "파트라슈", img: "https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2FMjAxOTA4MTZfMjA2%2FMDAxNTY1ODgxOTQzOTQ0.ng1PLWdhIm6gtxKBvMIkCn384yL3OLoYaiUcroo7g8Ig.147cH8dyqyvHTvsOfn1XWynLb_6l5QeG7t3kh6467Ykg.PNG%2FexternalFile.png&type=sc960_832"}
  ],

   "캔디 캔디": [
    { name: "캔디", img: "https://i.pinimg.com/1200x/39/8b/e1/398be153be87f42413b18c3004bd2203.jpg"},
    { name: "앤서니", img: "https://i.pinimg.com/736x/3f/d6/fb/3fd6fb28bdd4729f6567e55c5b899242.jpg"},
    { name: "알버트", img: "https://i.pinimg.com/1200x/1a/b7/85/1ab785ee82e213bb0950c98d35d43077.jpg"},
    { name: "테리우스", img: "https://i.pinimg.com/736x/ee/fa/9c/eefa9c3c6f1f917d2bce77d523562664.jpg"},
    { name: "패티", img: "https://i.pinimg.com/736x/20/f6/af/20f6af611e353e9c2f0ce54a3d6ba8a1.jpg"},
  ],

   "은하철도999": [
    { name: "메텔", img: "https://i.pinimg.com/736x/dc/fa/1f/dcfa1fbdc06f46cd9c10813ae49874ba.jpg"},
    { name: "철이", img: "https://i.pinimg.com/736x/e5/2f/c8/e52fc82f85bab5402fa656afebcf28f3.jpg"},
    { name: "차장", img: "https://i.pinimg.com/1200x/21/9a/49/219a49de697d10171ac4676bbf20eb43.jpg"},
  ],

   "패트와 매트": [
    { name: "패트", img: "https://i.pinimg.com/1200x/1e/cd/30/1ecd3033a5c1b9f2a22967ef1940f16d.jpg"},
    { name: "매트", img: "https://i.pinimg.com/1200x/dd/75/6d/dd756d308e0ee89a3d1145c1f1024db7.jpg"},
  ],

   "도라에몽": [
  { name: "도라에몽", img:"https://i.pinimg.com/736x/0f/1e/75/0f1e7530c5be39c6432fd71cce8b0196.jpg" },
  { name: "도라미", img:"https://i.pinimg.com/1200x/47/19/9a/47199ad41b42ba3a6f010bab4f70700a.jpg" },
  { name: "노진구", img:"https://i.pinimg.com/736x/0f/a3/a0/0fa3a047a15426dccd8a44a2c4bf14f7.jpg" },
  { name: "퉁퉁이", img:"https://i.pinimg.com/736x/07/77/cf/0777cf958aebecaa2cb96f37757469d2.jpg" },
  { name: "비실이", img:"https://i.pinimg.com/736x/c3/e2/ff/c3e2ffd8ea425d24e55d5c218bdd5d1e.jpg" },
  { name: "이슬이", img:"https://i.pinimg.com/736x/c0/ce/2d/c0ce2d3e3488018465574ff4b0e968ef.jpg" },
  ],

  "기동전사 건담": [
  { name: "레이", img:"https://i.pinimg.com/1200x/e4/3b/0c/e43b0c11daa55cffd800360d4efc2a10.jpg" },
  { name: "건담", img:"https://i.pinimg.com/736x/e9/67/47/e96747754d1da44b1c963a22ab7a1ec9.jpg" },
  { name: "샤아", img:"https://i.pinimg.com/736x/e0/2a/2f/e02a2f7adb53f08df46c85a4c4c7200f.jpg" },
  { name: "자쿠", img:"https://i.pinimg.com/1200x/e8/c8/0a/e8c80adb0b925cee08fe6e244e17d102.jpg" },
  ],

   "토마스와 친구들": [
  { name: "토마스", img:"https://i.pinimg.com/736x/db/1c/d2/db1cd24db6a1a9169bdf3b882065ce86.jpg" },
  { name: "퍼시", img:"https://i.pinimg.com/1200x/9f/71/ac/9f71ac718d5b49897f27acacd9108fb0.jpg" },
  { name: "찰리", img:"https://i.pinimg.com/1200x/91/d3/66/91d366e51fc2bb851cf80022646538f2.jpg" },
  ],

   "아기공룡 둘리": [
  { name: "둘리", img:"https://i.pinimg.com/1200x/4d/e2/ed/4de2ed5540cd6e0e3c7298a3d8411400.jpg" },
  { name: "또치", img:"https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA1MjFfMjY5%2FMDAxNzE2MjY5NTQzNjMz.bcDBtlS_rRdZCWCkFAwlILGWpr4s_AGrGPIt4_tHkTsg.Oow6FnfLFPis3gEcsMqKXFlM0dfjKbG4GXuEr_TlZ7Mg.JPEG%2Foutput_2016026816.jpg&type=sc960_832" },
  { name: "도우너", img:"https://search.pstatic.net/sunny/?src=https%3A%2F%2Fyt3.googleusercontent.com%2Fytc%2FAIdro_nqTEKraLWCjCrUN-AhKdInpgcc98Dk7iJgzloRHbvOnw%3Ds900-c-k-c0x00ffffff-no-rj&type=sc960_832" },
  { name: "희동이", img:"https://search.pstatic.net/common?type=n&size=234x312&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fkeypage%2Fimage%2Fdss%2F60%2F71%2F47%2F28%2F60_714728_main_image_new_1488784133164.jpg" },
  { name: "고길동", img:"https://search.pstatic.net/common?type=n&size=234x312&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fkeypage%2Fimage%2Fdss%2F60%2F71%2F47%2F30%2F60_714730_main_image_new_1488874570514.jpg"}
  ],

   "시티헌터": [
  { name: "료", img:"https://i.pinimg.com/736x/27/ef/93/27ef933459c973dd86b486fa8cd77287.jpg" },
  { name: "카오리", img:"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FplwHb%2FbtrGSU6V8hz%2FAAAAAAAAAAAAAAAAAAAAABDk4a67XBnBPk2Ouiek_HdNagZSM4fm4Fxggg8QGCrb%2Fimg.jpg%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1764514799%26allow_ip%3D%26allow_referer%3D%26signature%3D%252Fwu2qQ6swEILTn9LVy%252BdwZNdFAY%253D" },
  { name: "히데유키", img:"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FcgXLpn%2FbtrG1zVgbBv%2FAAAAAAAAAAAAAAAAAAAAANVz_pos2Dz5Qt4PiE9EPEns7zUCHc4LAnRvMQy4oT3q%2Fimg.jpg%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1764514799%26allow_ip%3D%26allow_referer%3D%26signature%3DwcV7TlcZuT6qKnyQzzVKMDd%252Ftw4%253D" },
  { name: "우미보즈", img:"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FY6Gwj%2FbtrG2sO5G5F%2FAAAAAAAAAAAAAAAAAAAAAJJdTLGqp9SVFQraxhq8mRBYGNPFQ6hQXzQmdEsASQsi%2Fimg.jpg%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1764514799%26allow_ip%3D%26allow_referer%3D%26signature%3Dlz3jw2Pb5HiMTwkXDSEKP2lLDPA%253D" },
  { name: "사에코", img:"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FSChmO%2FbtrG4fVvaNs%2FAAAAAAAAAAAAAAAAAAAAACnsRSBfXH2N3OAe6JzBBmsJmGSLiluSBksI5FW6dP1A%2Fimg.jpg%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1764514799%26allow_ip%3D%26allow_referer%3D%26signature%3DrNwBL7KMeZ%252B0BDWnfMoQn0A%252BbtM%253D" },
  ],

  //1990년대
   "머털도사": [
  { name: "머털", img:"https://search.pstatic.net/common?type=n&size=234x312&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fkeypage%2Fimage%2Fdss%2F60%2F72%2F63%2F08%2F60_726308_main_image_new_1489041704427.jpg" },
  { name: "누덕도사", img:"https://search.pstatic.net/common?type=n&size=234x312&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fkeypage%2Fimage%2Fdss%2F60%2F72%2F63%2F09%2F60_726309_main_image_new_1488952992016.jpg" },
  { name: "묘선", img:"https://search.pstatic.net/common?type=n&size=234x312&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fkeypage%2Fimage%2Fdss%2F60%2F72%2F63%2F10%2F60_726310_main_image_new_1489041740649.jpg" },
  { name: "떠리", img:"https://search.pstatic.net/common?type=n&size=234x312&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fkeypage%2Fimage%2Fdss%2F60%2F72%2F63%2F11%2F60_726311_main_image_new_1488700191248.jpg" },
  { name: "왕질악도사", img:"https://search.pstatic.net/common?type=n&size=234x312&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fkeypage%2Fimage%2Fdss%2F60%2F72%2F63%2F12%2F60_726312_main_image_new_1489041847849.jpg" },
  ],

   "명탐정 코난": [
  { name: "코난", img:"https://i.pinimg.com/1200x/9f/51/a2/9f51a22f68ff3273fd72bdb07712c39d.jpg" },
  { name: "장미", img:"https://i.pinimg.com/736x/a5/b3/66/a5b366118b356047c59cf598cb02434c.jpg" },
  { name: "유미란", img:"https://i.pinimg.com/736x/1b/24/66/1b2466d42a6d2c05dd303fe21cee82ea.jpg" },
  { name: "유명한", img:"https://i.pinimg.com/1200x/5c/d3/64/5cd364b474602a348bf2b55fd7360607.jpg" },
  { name: "괴도키드", img:"https://i.pinimg.com/1200x/31/dc/31/31dc31bed3f1e2a762d25fcbd2acf681.jpg" },
  ],

   "짱구는 못말려": [
  { name: "짱구", img:"https://i.pinimg.com/736x/df/9c/22/df9c227dc906adb8c84b8b97676edccc.jpg" },
  { name: "철수", img:"https://i.pinimg.com/736x/06/07/3a/06073ab83ddef862bf663101f8471883.jpg" },
  { name: "맹구", img:"https://i.pinimg.com/736x/20/4a/96/204a969720c36aaea1622ae428adb68e.jpg" },
  { name: "유리", img:"https://i.pinimg.com/736x/73/b0/7c/73b07cecf01df0453ca29047d9069856.jpg" },
  { name: "훈이", img:"https://i.pinimg.com/736x/11/ff/a7/11ffa7037b6670ff1ac377584d79063f.jpg" },
  ],

   "세일러문": [
  { name: "우사기", img:"https://i.pinimg.com/1200x/d9/f7/5e/d9f75e22b98b8028eb9321f5a18a5e96.jpg" },
  { name: "아미", img:"https://i.pinimg.com/736x/34/ff/56/34ff56f973b5dff52fb28c8d08bc6221.jpg" },
  { name: "레이", img:"https://i.pinimg.com/736x/70/21/44/702144785bbe899d8e7954555d158605.jpg" },
  { name: "마코토", img:"https://i.pinimg.com/736x/f3/01/1b/f3011b45333a4090915bfec1d249b49f.jpg" },
  { name: "미나코", img:"https://i.pinimg.com/1200x/5f/03/d8/5f03d8eac6a18d5562dd4a22a719c16e.jpg" },
  ],

   "슬램덩크": [
  { name: "강백호", img:"https://search.pstatic.net/common?type=n&size=234x312&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fkeypage%2Fimage%2Fdss%2F60%2F71%2F47%2F09%2F60_714709_main_image_new_1445503075151.jpg" },
  { name: "채치수", img:"https://search.pstatic.net/common?type=n&size=234x312&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fkeypage%2Fimage%2Fdss%2F60%2F71%2F47%2F10%2F60_714710_main_image_new_1445503057775.jpg" },
  { name: "서태웅", img:"https://search.pstatic.net/common?type=n&size=234x312&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fkeypage%2Fimage%2Fdss%2F60%2F71%2F47%2F11%2F60_714711_main_image_new_1445503042050.jpg" },
  { name: "정대만", img:"https://search.pstatic.net/common?type=n&size=234x312&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fkeypage%2Fimage%2Fdss%2F60%2F71%2F47%2F12%2F60_714712_main_image_new_1445503024832.jpg" },
  { name: "송태섭", img:"https://search.pstatic.net/common?type=n&size=234x312&quality=100&direct=true&src=http%3A%2F%2Fsstatic.naver.net%2Fkeypage%2Fimage%2Fdss%2F60%2F71%2F47%2F13%2F60_714713_main_image_new_1445503008181.jpg" },
  ],

  "신세기 에반게리온": [
  { name: "신지", img:"https://i.pinimg.com/736x/66/4f/8e/664f8ea93e796c0916877a97898c2b4d.jpg" },
  { name: "아스카", img:"https://i.pinimg.com/736x/37/d2/1b/37d21bb9fbd13a1d47c3221debc96c38.jpg" },
  { name: "레이", img:"https://i.pinimg.com/736x/f1/ac/0b/f1ac0b0b13586d45cbb8f607e4cedda3.jpg" },
  { name: "미사토", img:"https://i.pinimg.com/1200x/31/69/dc/3169dc7e0fd30f560c83156953f021b1.jpg" },
  ],


   "포켓몬스터": [
  { name: "지우", img:"https://i.pinimg.com/736x/22/40/b8/2240b85ef4cc4e5d9d5fecd51aba8a98.jpg" },
  { name: "피카츄", img:"https://i.pinimg.com/736x/7c/da/f3/7cdaf39724851fa38a078ab207c3a1af.jpg" },
  { name: "오박사", img:"https://i.pinimg.com/736x/a8/39/01/a839018c39de59d0cb6b9eb63efbbf41.jpg" },
  { name: "로켓단", img:"https://i.pinimg.com/1200x/95/70/e9/9570e99011798a02d4b75b4053bcf747.jpg" },
  ],

  "원피스": [
  { name: "루피", img:"https://i.pinimg.com/1200x/98/1a/07/981a07c3ed840b5961b5dab0bf19157e.jpg" },
  { name: "조로", img:"https://i.pinimg.com/736x/33/c1/05/33c105d7dc4a7560579de2a12c675851.jpg" },
  { name: "나미", img:"https://i.pinimg.com/1200x/7d/38/23/7d3823c522f2dc44e014d62ed067ab8c.jpg" },
  { name: "우솝", img:"https://i.pinimg.com/1200x/a5/02/e0/a502e0f4f05b289f837da1391e38ed16.jpg" },
  { name: "상디", img:"https://i.pinimg.com/736x/16/07/f7/1607f77ab59fd1a5c5df1da2b668c41e.jpg" },
  ],

  "카드캡터체리": [
  { name: "유체리", img:"https://i.pinimg.com/736x/3c/d5/f7/3cd5f76bd0cce077e3b4386a7b77c8e3.jpg" },
  { name: "신지수", img:"https://i.pinimg.com/736x/44/ff/ce/44ffce880606db2118c9773628ff097e.jpg" },
  { name: "샤오랑", img:"https://i.pinimg.com/1200x/aa/e9/c6/aae9c64d6cc36f7fbd9c1acca4ccf7bd.jpg" },
  { name: "케로", img:"https://i.pinimg.com/1200x/55/c8/e0/55c8e0a0677626eee903f287afe310cd.jpg" },
  ],

  //2020년대
  "사이버펑크": [
  { name: "데이비드", img:"https://i.pinimg.com/736x/b9/ce/0b/b9ce0b7fddbe1954b34c50dddb2fab55.jpg" },
  { name: "루시", img:"https://i.pinimg.com/1200x/72/3b/fd/723bfdb287d22bb69ba4e1a6675beb45.jpg" },
  ],
};
  

  // 나머지 쭉 추가 가능


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
