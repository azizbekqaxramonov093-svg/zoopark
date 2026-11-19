
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

// 50 xil hayvon
const animals = [
  {name:"Afrika sheri",category:"predator",emoji:"🦁",photo:"lion",desc:"Savannaning kuchli va mashhur yirtqichi."},
  {name:"Bengal yo‘lbarsi",category:"predator",emoji:"🐅",photo:"tiger",desc:"Chiroyli yo‘l-yo‘l terisi bilan mashhur."},
  {name:"Qoplon",category:"predator",emoji:"🐆",photo:"leopard",desc:"Daraxtlarga mohirlik bilan chiqadigan ovchi."},
  {name:"Gepard",category:"predator",emoji:"🐆",photo:"cheetah",desc:"Quruqlikdagi eng tez yuguruvchi hayvon."},
  {name:"Qor barsi",category:"predator",emoji:"🐆",photo:"snow leopard",desc:"Baland tog‘larda yashaydigan noyob mushuksimon."},
  {name:"Bo‘ri",category:"predator",emoji:"🐺",photo:"wolf",desc:"To‘da bo‘lib yashaydigan aqlli yirtqich."},
  {name:"Qizil tulki",category:"predator",emoji:"🦊",photo:"red fox",desc:"Chaqqon va ziyrak o‘rmon hayvoni."},
  {name:"Sirtlon",category:"predator",emoji:"🐾",photo:"hyena",desc:"Kuchli jag‘lari bilan tanilgan hayvon."},
  {name:"Qora ayiq",category:"mammal",emoji:"🐻",photo:"black bear",desc:"Kuchli panjalari va hid bilishi bilan mashhur."},
  {name:"Oq ayiq",category:"mammal",emoji:"🐻‍❄️",photo:"polar bear",desc:"Arktikaning sovuq hududlarida yashaydi."},
  {name:"Afrika fili",category:"mammal",emoji:"🐘",photo:"african elephant",desc:"Quruqlikdagi eng yirik hayvonlardan biri."},
  {name:"Jirafa",category:"mammal",emoji:"🦒",photo:"giraffe",desc:"Uzun bo‘yni bilan ajralib turadi."},
  {name:"Zebra",category:"mammal",emoji:"🦓",photo:"zebra",desc:"Har birining chiziqlari o‘ziga xos."},
  {name:"Oq karkidon",category:"mammal",emoji:"🦏",photo:"white rhinoceros",desc:"Katta gavdali va kuchli o‘txo‘r hayvon."},
  {name:"Begemot",category:"water",emoji:"🦛",photo:"hippopotamus",desc:"Ko‘p vaqtini suvda o‘tkazadi."},
  {name:"Kenguru",category:"mammal",emoji:"🦘",photo:"kangaroo",desc:"Bolasi uchun maxsus xaltachasi bor."},
  {name:"Koala",category:"mammal",emoji:"🐨",photo:"koala",desc:"Evkalipt barglari bilan oziqlanadi."},
  {name:"Panda",category:"mammal",emoji:"🐼",photo:"giant panda",desc:"Asosan bambuk bilan oziqlanadi."},
  {name:"Gorilla",category:"mammal",emoji:"🦍",photo:"gorilla",desc:"Kuchli, aqlli va ijtimoiy primat."},
  {name:"Shimpanze",category:"mammal",emoji:"🐵",photo:"chimpanzee",desc:"Insonning yaqin qarindoshlaridan biri."},
  {name:"Orangutan",category:"mammal",emoji:"🦧",photo:"orangutan",desc:"Daraxtlarda yashashga juda moslashgan."},
  {name:"Lemur",category:"mammal",emoji:"🐒",photo:"ring tailed lemur",desc:"Madagaskar orolining qiziqarli jonivori."},
  {name:"Tuya",category:"mammal",emoji:"🐪",photo:"camel",desc:"Cho‘l sharoitiga moslashgan hayvon."},
  {name:"Bug‘u",category:"mammal",emoji:"🦌",photo:"deer",desc:"Shoxlari bilan tanilgan o‘rmon hayvoni."},
  {name:"Los",category:"mammal",emoji:"🫎",photo:"moose",desc:"Katta shoxli yirik kiyik turi."},
  {name:"Bizon",category:"mammal",emoji:"🐂",photo:"bison",desc:"Keng dashtlarda yashaydigan kuchli hayvon."},
  {name:"Yovvoyi ot",category:"mammal",emoji:"🐎",photo:"wild horse",desc:"Erkin tabiatda yashaydigan ot turi."},
  {name:"Kiyik",category:"mammal",emoji:"🦌",photo:"antelope",desc:"Chaqqon yugurishi bilan ajralib turadi."},
  {name:"Okapi",category:"mammal",emoji:"🦓",photo:"okapi",desc:"Jirafaning noyob qarindoshi."},
  {name:"Surikat",category:"mammal",emoji:"🐾",photo:"meerkat",desc:"Tik turib atrofni kuzatishi bilan mashhur."},
  {name:"Flamingo",category:"bird",emoji:"🦩",photo:"flamingo",desc:"Pushti patlari va uzun oyoqlari bor."},
  {name:"Burgut",category:"bird",emoji:"🦅",photo:"eagle",desc:"O‘tkir ko‘zi va kuchli qanotlari bilan mashhur."},
  {name:"Boyqush",category:"bird",emoji:"🦉",photo:"owl",desc:"Tunda faol bo‘ladigan qush."},
  {name:"Tovus",category:"bird",emoji:"🦚",photo:"peacock",desc:"Rang-barang va chiroyli dum patlari bor."},
  {name:"To‘tiqush",category:"bird",emoji:"🦜",photo:"macaw parrot",desc:"Rangli patlari va ovoz taqlidi bilan mashhur."},
  {name:"Tuyaqush",category:"bird",emoji:"🐦",photo:"ostrich",desc:"Dunyodagi eng katta qush."},
  {name:"Pingvin",category:"bird",emoji:"🐧",photo:"penguin",desc:"Suvda juda yaxshi suzadi."},
  {name:"Laylak",category:"bird",emoji:"🪽",photo:"stork bird",desc:"Uzun oyoqli va uzun tumshuqli qush."},
  {name:"Kakadu",category:"bird",emoji:"🦜",photo:"cockatoo",desc:"Boshidagi toj patlari bilan ajralib turadi."},
  {name:"Kondor",category:"bird",emoji:"🦅",photo:"andean condor",desc:"Juda katta qanot yoyilmasiga ega qush."},
  {name:"Yashil iguana",category:"reptile",emoji:"🦎",photo:"green iguana",desc:"Daraxtlarda yashaydigan yirik kaltakesak."},
  {name:"Xameleon",category:"reptile",emoji:"🦎",photo:"chameleon",desc:"Rangini o‘zgartira oladigan sudralib yuruvchi."},
  {name:"Piton",category:"reptile",emoji:"🐍",photo:"python snake",desc:"Zaharli bo‘lmagan yirik ilon."},
  {name:"Kobra",category:"reptile",emoji:"🐍",photo:"cobra snake",desc:"O‘ziga xos qalqonini yoyishi bilan mashhur."},
  {name:"Varan",category:"reptile",emoji:"🦎",photo:"monitor lizard",desc:"Kuchli oyoqli yirik kaltakesak."},
  {name:"Timsoh",category:"water",emoji:"🐊",photo:"crocodile",desc:"Suv bo‘yida yashaydigan qadimiy sudralib yuruvchi."},
  {name:"Alligator",category:"water",emoji:"🐊",photo:"alligator",desc:"Kuchli jag‘li suv hayvoni."},
  {name:"Dengiz toshbaqasi",category:"water",emoji:"🐢",photo:"sea turtle",desc:"Dengizlarda uzoq masofalarga suzadi."},
  {name:"Kaplumbağa",category:"reptile",emoji:"🐢",photo:"tortoise",desc:"Mustahkam kosasi bilan himoyalangan."},
  {name:"Anakonda",category:"water",emoji:"🐍",photo:"anaconda snake",desc:"Suvga yaqin hududlarda yashaydigan yirik ilon."}
];

const categoryNames = {
  predator:"YIRTQICH",
  mammal:"SUTEMIZUVCHI",
  bird:"QUSH",
  reptile:"SUDRALIB YURUVCHI",
  water:"SUV HAYVONI"
};

const animalGrid = $("#animalGrid");

function createAnimalCard(animal, index) {
  const imageUrl = `https://loremflickr.com/640/480/${encodeURIComponent(animal.photo)}`;

  return `
    <article class="animal-card reveal" style="transition-delay:${(index % 4) * 70}ms">
      <div class="animal-photo">
        <img src="${imageUrl}" alt="${animal.name}" loading="lazy"
          onerror="this.style.display='none'">
        <span class="animal-emoji">${animal.emoji}</span>
      </div>
      <div class="animal-info">
        <small>${categoryNames[animal.category]}</small>
        <h3>${animal.name}</h3>
        <p>${animal.desc}</p>
        <div class="animal-more">
          <span>Hayvon haqida</span><span>↗</span>
        </div>
      </div>
    </article>`;
}

function showAnimals(filter = "all") {
  const filtered = filter === "all"
    ? animals
    : animals.filter(animal => animal.category === filter);

  animalGrid.innerHTML = filtered.map(createAnimalCard).join("");
  $("#animalCount").textContent = filtered.length;

  animalGrid.querySelectorAll(".reveal").forEach(card => {
    requestAnimationFrame(() => card.classList.add("visible"));
  });
}

showAnimals();

// Hayvon kategoriyalari
$$(".animal-filter").forEach(button => {
  button.addEventListener("click", () => {
    $$(".animal-filter").forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    showAnimals(button.dataset.filter);
  });
});

// Sahifa yuklanishi
window.addEventListener("load", () => {
  setTimeout(() => $("#loader").classList.add("hide"), 1000);
});

// Scroll animatsiyalari
const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

$$(".reveal").forEach(element => revealObserver.observe(element));

// Mobil menyu
$("#menuToggle").addEventListener("click", () => {
  $("#nav").classList.toggle("open");
});
$$(".nav a").forEach(link => {
  link.addEventListener("click", () => $("#nav").classList.remove("open"));
});

// Chipta modal oynasi
const ticketModal = $("#ticketModal");
const successModal = $("#successModal");

function openTicket() {
  ticketModal.classList.add("show");
  document.body.style.overflow = "hidden";
}
function closeTicket() {
  ticketModal.classList.remove("show");
  document.body.style.overflow = "";
}

["openTicket", "heroTicket", "adventureTicket", "ticketSectionButton"].forEach(id => {
  $("#" + id).addEventListener("click", openTicket);
});

$("#closeTicket").addEventListener("click", closeTicket);
ticketModal.addEventListener("click", event => {
  if (event.target === ticketModal) closeTicket();
});

// Sana tanlash
const dateInput = $("#visitDate");
const today = new Date();
const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60000)
  .toISOString().split("T")[0];
dateInput.min = localToday;
dateInput.value = localToday;

// Chipta sonlari va narxlari
const ticketPrices = {
  adult: 50000,
  child: 30000,
  family: 140000
};

const ticketQty = {
  adult: 0,
  child: 0,
  family: 0
};

function calculateTickets() {
  const total =
    ticketQty.adult * ticketPrices.adult +
    ticketQty.child * ticketPrices.child +
    ticketQty.family * ticketPrices.family;

  $("#adultQty").textContent = ticketQty.adult;
  $("#childQty").textContent = ticketQty.child;
  $("#familyQty").textContent = ticketQty.family;
  $("#ticketTotal").textContent = new Intl.NumberFormat("uz-UZ").format(total) + " so‘m";

  return total;
}

$$("[data-ticket]").forEach(button => {
  button.addEventListener("click", () => {
    const type = button.dataset.ticket;
    const change = Number(button.dataset.change);

    ticketQty[type] = Math.max(0, ticketQty[type] + change);
    calculateTickets();
  });
});

// Chipta buyurtmasi
$("#ticketForm").addEventListener("submit", event => {
  event.preventDefault();

  const total = calculateTickets();
  const name = $("#buyerName").value.trim();
  const phone = $("#buyerPhone").value.trim();
  const date = dateInput.value;

  const totalTickets = Object.values(ticketQty).reduce((sum, qty) => sum + qty, 0);

  if (!totalTickets) {
    alert("Iltimos, kamida bitta chipta tanlang!");
    return;
  }

  if (!date || date < localToday) {
    alert("Iltimos, tashrif sanasini to‘g‘ri tanlang!");
    return;
  }

  if (!name || !phone) {
    alert("Ismingiz va telefon raqamingizni kiriting!");
    return;
  }

  const order = {
    name,
    phone,
    date,
    tickets: {...ticketQty},
    total
  };

  console.log("Chipta buyurtmasi:", order);

  $("#successMessage").textContent =
    `${name}, ${date} sanasi uchun ${totalTickets} ta chipta tanladingiz. Jami: ${new Intl.NumberFormat("uz-UZ").format(total)} so‘m. Bu demo buyurtma.`;

  closeTicket();
  successModal.classList.add("show");

  ticketQty.adult = 0;
  ticketQty.child = 0;
  ticketQty.family = 0;
  calculateTickets();
  $("#ticketForm").reset();
  dateInput.value = localToday;
});

$("#successClose").addEventListener("click", () => {
  successModal.classList.remove("show");
  document.body.style.overflow = "";
});

successModal.addEventListener("click", event => {
  if (event.target === successModal) {
    successModal.classList.remove("show");
    document.body.style.overflow = "";
  }
});

// Statistik raqamlar animatsiyasi
const counterObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    const element = entry.target;
    const target = Number(element.dataset.target);
    const startTime = performance.now();
    const duration = 1600;

    function updateCounter(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      element.textContent = Math.floor(target * eased).toLocaleString("uz-UZ");

      if (progress < 1) requestAnimationFrame(updateCounter);
    }

    requestAnimationFrame(updateCounter);
    observer.unobserve(element);
  });
}, { threshold: 0.5 });

$$(".counter").forEach(counter => counterObserver.observe(counter));

// Tepaga qaytish tugmasi
window.addEventListener("scroll", () => {
  $("#backTop").classList.toggle("show", window.scrollY > 500);
});

$("#backTop").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
