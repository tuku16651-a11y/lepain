/* =============================================
   LE PAIN QUOTIDIEN — APP.JS
   ============================================= */

'use strict';

// ─── Constants ───────────────────────────────
const WA_NUMBER = '994559406018';
const PAGE_SCROLL_MAP = {};
let currentPage = 'home';
let currentModalProduct = null;
let currentVacancy = null;
let cart = [];

// ─── MENU DATA (Le Pain Quotidien) ────────────

const menuData = {
  desserts: [
    {
      id: 'ds1',
      name: 'Şokoladlı "Manhattan Cookie"',
      desc: 'Şokoladlı parçalarla dolu New York üslublu klassik cookie.',
      price: 7.45,
      weight: '',
      img: 'images/menu-hero.jpg'
    },
    {
      id: 'ds2',
      name: 'Matcha Cookie',
      desc: 'Matcha çayından hazırlanmış xüsusi cookie.',
      price: 8.65,
      weight: '',
      img: 'images/menu-hero.jpg'
    },
    {
      id: 'ds3',
      name: 'Belçika Şokoladlı Brauni',
      desc: 'Orijinal Belçika şokoladı ilə hazırlanmış qoyu şokoladlı brauni.',
      price: 8.65,
      weight: '',
      img: 'images/menu-hero.jpg'
    },
    {
      id: 'ds4',
      name: 'Alma & Badam Tart',
      desc: 'Təzə alma və badam kreması ilə doldurulmuş fransız tartu.',
      price: 10.45,
      weight: '',
      img: 'images/menu-hero.jpg'
    },
    {
      id: 'ds5',
      name: 'Şaftalı & Badam Tart',
      desc: 'Şaftalı və badam kreması ilə hazırlanmış mövsümi tart.',
      price: 10.95,
      weight: '',
      img: 'images/menu-hero.jpg'
    },
    {
      id: 'ds6',
      name: 'Limonlu Tart',
      desc: 'Klassik fransız limonlu tart — turş-şirin mükəmməl uyum.',
      price: 9.95,
      weight: '',
      img: 'images/menu-hero.jpg'
    },
    {
      id: 'ds7',
      name: 'Mövsümi Meyvəli Tart',
      desc: 'Təzə mövsüm meyvələri ilə hazırlanmış rəngli tart.',
      price: 10.95,
      weight: '',
      img: 'images/menu-hero.jpg'
    },
    {
      id: 'ds8',
      name: 'Mövsümi Meyvəli Pavlova',
      desc: 'Məzəli merenq keki üzərinə krem və mövsüm meyvələri ilə.',
      price: 12.65,
      weight: '',
      img: 'images/menu-hero.jpg'
    },
    {
      id: 'ds9',
      name: 'Qırmızı Meyvəli San Sebastian',
      desc: 'Qırmızı meyvələr ilə bəzədilmiş Bask üslublu yanmış çeriz tortu.',
      price: 12.95,
      weight: '',
      img: 'images/menu-hero.jpg'
    }
  ],
  hotdrinks: [
    {
      id: 'hd1',
      name: 'Espresso',
      desc: 'Klassik İtalyan espresosu — güclü, zəngin, aromatik.',
      price: 5.45,
      weight: '',
      img: 'images/menu-hero.jpg',
      badge: 'Klassik'
    },
    {
      id: 'hd2',
      name: 'Double Espresso',
      desc: 'İki shot espresso — daha güclü, daha zəngin dad.',
      price: 6.45,
      weight: '',
      img: 'images/menu-hero.jpg'
    },
    {
      id: 'hd3',
      name: 'Türk Qəhvəsi',
      desc: 'Ənənəvi üsulla hazırlanmış türk qəhvəsi.',
      price: 6.95,
      weight: '',
      img: 'images/menu-hero.jpg'
    },
    {
      id: 'hd4',
      name: 'Double Americano',
      desc: 'İki shot espresso üzərinə isti su əlavə edilmiş uzun qəhvə.',
      price: 6.95,
      weight: '',
      img: 'images/menu-hero.jpg'
    },
    {
      id: 'hd5',
      name: 'Cappuccino',
      desc: 'Espresso, buxarlanmış süd və köpük ilə hazırlanmış klassik kapuçino.',
      price: 7.45,
      weight: '',
      img: 'images/menu-hero.jpg'
    },
    {
      id: 'hd6',
      name: 'Flat White',
      desc: 'Espresso və az köpüklü buxarlanmış süd ilə hazırlanmış.',
      price: 7.95,
      weight: '',
      img: 'images/menu-hero.jpg'
    },
    {
      id: 'hd7',
      name: 'Latte',
      desc: 'Espresso və bol buxarlanmış süd ilə hazırlanmış yumşaq qəhvə.',
      price: 7.45,
      weight: '',
      img: 'images/menu-hero.jpg'
    },
    {
      id: 'hd8',
      name: 'Mocha',
      desc: 'Espresso, şokolad sousu və buxarlanmış süd ilə şirin qəhvə.',
      price: 9.95,
      weight: '',
      img: 'images/menu-hero.jpg'
    },
    {
      id: 'hd9',
      name: 'Alternativ Süd',
      desc: 'İstənilən qəhvəyə alternativ bitki südü əlavəsi (yulaf, badam, soya).',
      price: 4.00,
      weight: '',
      img: 'images/menu-hero.jpg'
    },
    {
      id: 'hd10',
      name: 'Glayə Espresso',
      desc: 'Buzlu espresonun üzərinə dondurma əlavə edilmiş İtalyan klassikası.',
      price: 3.00,
      weight: '',
      img: 'images/menu-hero.jpg'
    },
    {
      id: 'hd11',
      name: 'Organik Çay',
      desc: 'Seçilmiş organik çay kolleksiyası — english breakfast, early grey, chamomile, jasmine, rooibos.',
      price: 9.95,
      weight: '',
      img: 'images/menu-hero.jpg'
    },
    {
      id: 'hd12',
      name: 'Nano Çayı',
      desc: 'Xüsusi seçilmiş nano çay.',
      price: 9.65,
      weight: '',
      img: 'images/menu-hero.jpg'
    },
    {
      id: 'hd13',
      name: 'İsti Belçika Şokoladı',
      desc: 'Organik Belçika şokoladı ilə hazırlanmış xüsusi isti içki.',
      price: 9.95,
      weight: '',
      img: 'images/menu-hero.jpg',
      badge: 'Xüsusi'
    },
    {
      id: 'hd14',
      name: 'Matcha Latte',
      desc: 'Premium matcha tozu və buxarlanmış süd ilə hazırlanmış sağlıklı içki.',
      price: 10.45,
      weight: '',
      img: 'images/menu-hero.jpg'
    },
    {
      id: 'hd15',
      name: 'Ginger Elixir',
      desc: 'Zəncəfil, limon, taze nane və bal ilə hazırlanmış xüsusi elixir.',
      price: 10.95,
      weight: '',
      img: 'images/menu-hero.jpg',
      badge: 'Ginger Elixir'
    }
  ],
  colddrinks: [
    {
      id: 'cd1',
      name: 'Soyuq Kofe İçkiləri',
      desc: 'Müxtəlif soyuq kofe seçimləri — iced latte, iced americano və daha çox.',
      price: 8.45,
      weight: '',
      img: 'images/menu-hero.jpg'
    },
    {
      id: 'cd2',
      name: 'Iced Latte',
      desc: 'Buzlu süd ilə soyudulmuş espresso — yay ayları üçün mükəmməl seçim.',
      price: 8.45,
      weight: '',
      img: 'images/menu-hero.jpg'
    },
    {
      id: 'cd3',
      name: 'Iced Caramel Latte',
      desc: 'Karamel sousu əlavə edilmiş buzlu latte.',
      price: 8.95,
      weight: '',
      img: 'images/menu-hero.jpg'
    },
    {
      id: 'cd4',
      name: 'Bumble Coffee',
      desc: 'Bal və espresso ilə hazırlanmış xüsusi soyuq içki.',
      price: 9.95,
      weight: '',
      img: 'images/menu-hero.jpg'
    },
    {
      id: 'cd5',
      name: 'Iced Matcha Latte',
      desc: 'Buzlu matcha latte — yulaf südü ilə.',
      price: 11.65,
      weight: '',
      img: 'images/menu-hero.jpg',
      badge: 'Xüsusi'
    },
    {
      id: 'cd6',
      name: 'Speculoos Chiller',
      desc: 'Speculoos печenye dadı ilə soyuq içki — unikal dad.',
      price: 12.95,
      weight: '',
      img: 'images/menu-hero.jpg'
    },
    {
      id: 'cd7',
      name: 'Alternativ Süd',
      desc: 'Bitki əsaslı süd alternativləri.',
      price: 4.00,
      weight: '',
      img: 'images/menu-hero.jpg'
    },
    {
      id: 'cd8',
      name: 'Green Detox',
      desc: 'Ananas, kivi, zəncəfil, alma, nane, ispanaq ilə hazırlanmış detoks smuzi.',
      price: 11.65,
      weight: '',
      img: 'images/menu-hero.jpg',
      badge: 'Smuzi'
    },
    {
      id: 'cd9',
      name: 'Berry Bliss',
      desc: 'Mərəng, çiyələk, albala, qara-qarağat ilə meyvəli smuzi.',
      price: 12.65,
      weight: '',
      img: 'images/menu-hero.jpg',
      badge: 'Smuzi'
    },
    {
      id: 'cd10',
      name: 'Curious Passion',
      desc: 'Taze sıxılmış portağal şirəsi, ananas, nektarin, marakuya ilə ekzotik smuzi.',
      price: 13.65,
      weight: '',
      img: 'images/menu-hero.jpg',
      badge: 'Smuzi'
    },
    {
      id: 'cd11',
      name: 'Təzə Sıxılmış Portağal Şirəsi',
      desc: 'Hər gün təzə sıxılmış portağal şirəsi.',
      price: 11.45,
      weight: '25cl / 35cl',
      img: 'images/menu-hero.jpg',
      badge: 'Limonadlar'
    },
    {
      id: 'cd12',
      name: 'Ev Üsulu Limonad',
      desc: 'Taze sıxılmış portağal, taze limon şirəsi ilə hazırlanmış ev limonadı.',
      price: 9.45,
      weight: '',
      img: 'images/menu-hero.jpg'
    },
    {
      id: 'cd13',
      name: 'Ev Üsulu Iced Tea',
      desc: 'Tart grey çay, taze sıkılmış portağal və limon şirəsi ilə ev iced tea-sı.',
      price: 9.95,
      weight: '',
      img: 'images/menu-hero.jpg'
    },
    {
      id: 'cd14',
      name: 'Tropical Iced Tea',
      desc: 'Jasmin çay, taze sıxılmış portağal şirəsi ilə tropik iced tea.',
      price: 9.95,
      weight: '',
      img: 'images/menu-hero.jpg'
    },
    {
      id: 'cd15',
      name: 'San Pellegrino',
      desc: 'Premium İtalyan mineral suyu.',
      price: 7.20,
      weight: 'Limon / Narç Portağal',
      img: 'images/menu-hero.jpg'
    },
    {
      id: 'cd16',
      name: 'Qazsız / Qazlı Su',
      desc: 'Məzəli və sağlam içmə suyu.',
      price: 4.95,
      weight: '30cl / 75cl',
      img: 'images/menu-hero.jpg'
    }
  ]
};

const faqData = [
  {
    q: 'Le Pain Quotidien nədir?',
    a: 'Le Pain Quotidien — 1990-cı ildə Brüsseldə qurulan Belçika çörəkçilik restoranı zənciridir. Üzvi, təbii ingredientlər istifadə edərək artisanal çörəklər, tartinlər, salatlar, qəhvə və desert hazırlayırıq.'
  },
  {
    q: 'Menyuda vegeterian / veqan seçimlər varmı?',
    a: 'Bəli! Menyumuzda bol miqdarda vegeterian və veqan seçimlər mövcuddur. Üzvi bitki südü alternativlərimiz (yulaf, badam, soya) da mövcuddur.'
  },
  {
    q: 'Rezervasiya üçün depozit tələb olunurmu?',
    a: 'Xeyr, rezervasiya tamamilə pulsuzdur. Masa saxlamaq üçün heç bir ödəniş tələb edilmir. Sadəcə gəlmədiyiniz halda xəbər verməyinizi xahiş edirik.'
  },
  {
    q: 'Allergenləri nəzərə alırsınızmı?',
    a: 'Bəli, biz allergen məlumatlarını çox ciddi qəbul edirik. Sifarişinizi verərkən xüsusi diet tələblərinizi qeyd etdikdə aşpazımız uyğun hazırlayacaq. Əsas allergenlər haqqında ətraflı məlumat üçün işçilərimizlə əlaqə saxlayın.'
  },
  {
    q: 'Ödəniş üsulları hansılardır?',
    a: 'Nağd pul, bank kartı (Visa, Mastercard, Kapital Bank, ABB), ANSAN və onlayn ödəniş sistemləri qəbul edilir.'
  },
  {
    q: 'Korporativ sifarişlər mümkündürmü?',
    a: 'Bəli! Şirkətlər, tədbirlər və böyük qruplar üçün xüsusi korporativ menyu və endirim proqramlarımız mövcuddur. WhatsApp vasitəsilə bizimlə əlaqə saxlayın.'
  },
  {
    q: 'Ginger Elixir nə üçündür?',
    a: 'Ginger Elixir Le Pain Quotidien-in xüsusi içkisidir. Zəncəfil, limon, taze nane və bal ilə hazırlanır. İmmunitet gücləndirici, həzm sistemi üçün faydalı, energetik bir içkidir.'
  },
  {
    q: 'Restoranın iş saatları necədir?',
    a: 'B.E – Cümə: 08:00–22:00 | Şənbə: 09:00–23:00 | Bazar: 09:00–22:00.'
  }
];

const vacanciesData = [
  {
    id: 'v1',
    icon: '☕',
    title: 'Barista',
    type: 'Tam Ştat',
    salary: '700 – 1000 AZN',
    schedule: 'Dəyişən növbə (2/2)',
    requirements: 'Qəhvə hazırlama təcrübəsi, müştəri xidmətləri bacarığı',
    desc: 'Le Pain Quotidien mətbəxinə peşəkar barista axtarırıq. Keyfiyyət, dəqiqlik və gülərüz xidmət vacibdir.',
    duties: 'Qəhvə və içkilərin hazırlanması, bar sahəsinin təmizliyi, müştəri xidməti'
  },
  {
    id: 'v2',
    icon: '🍞',
    title: 'Çörəkçi',
    type: 'Tam Ştat',
    salary: '800 – 1200 AZN',
    schedule: 'Erkən növbə (06:00-14:00)',
    requirements: 'Çörəkçilik təcrübəsi, gigiyena sertifikatı',
    desc: 'Artisanal çörəklər hazırlamaq üçün peşəkar çörəkçi axtarırıq.',
    duties: 'Gündəlik çörək istehsalı, keyfiyyət nəzarəti, inventar idarəsi'
  },
  {
    id: 'v3',
    icon: '👩‍💼',
    title: 'Ofisiant',
    type: 'Tam Ştat',
    salary: '600 – 900 AZN',
    schedule: 'Dəyişən növbə',
    requirements: 'Ünsiyyət bacarığı, gülərüz olmaq, 18+ yaş',
    desc: 'Müştərilərə xidmət üçün peşəkar ofisiant axtarırıq.',
    duties: 'Sifarişlərin qəbulu, masa xidməti, müştəri məmnuniyyəti'
  },
  {
    id: 'v4',
    icon: '🧹',
    title: 'Sanitar Texnik',
    type: 'Tam Ştat',
    salary: '500 – 650 AZN',
    schedule: 'Günlük, 09:00–18:00',
    requirements: 'Gigiyena standartları bilikləri, fiziki hazırlıq',
    desc: 'Mətbəx və restoran sahəsinin gigiyena standartlarına uyğun saxlanılması üçün işçi axtarırıq.',
    duties: 'Restoran sahəsinin təmizliyi, sanitariya standartlarına riayət'
  }
];

// ─── PAGE NAVIGATION ───────────────────────────

function showPage(pageId) {
  const oldPage = document.getElementById('page-' + currentPage);
  if (oldPage) {
    PAGE_SCROLL_MAP[currentPage] = window.scrollY;
    oldPage.classList.remove('active');
  }

  currentPage = pageId;

  const newPage = document.getElementById('page-' + pageId);
  if (!newPage) return;
  newPage.classList.add('active');

  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.dataset.page === pageId);
  });

  const savedScroll = PAGE_SCROLL_MAP[pageId] || 0;
  window.scrollTo({ top: savedScroll, behavior: 'instant' });
}

function goBack() {
  PAGE_SCROLL_MAP[currentPage] = window.scrollY;
  showPage('home');
}

// ─── MOBILE MENU ───────────────────────────────
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  const overlay = document.getElementById('mobileOverlay');
  const isOpen = menu.classList.contains('open');
  menu.classList.toggle('open', !isOpen);
  overlay.classList.toggle('visible', !isOpen);
  document.body.style.overflow = isOpen ? '' : 'hidden';
}

// ─── CART ─────────────────────────────────────

function toggleCart() {
  const panel = document.getElementById('cartPanel');
  const backdrop = document.getElementById('cartBackdrop');
  const isOpen = panel.classList.contains('open');
  panel.classList.toggle('open', !isOpen);
  backdrop.classList.toggle('visible', !isOpen);
  document.body.style.overflow = isOpen ? '' : 'hidden';
}

function addToCart(productId) {
  const product = findProduct(productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  renderCart();
  bumpCartCount();
  showToast(`${product.name} səbətə əlavə edildi!`);
}

function addToCartFromModal() {
  if (!currentModalProduct) return;
  addToCart(currentModalProduct.id);
  closeProductModalBtn();
}

function findProduct(id) {
  for (const cat of Object.values(menuData)) {
    const found = cat.find(p => p.id === id);
    if (found) return found;
  }
  return null;
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  renderCart();
}

function changeQty(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(productId);
  else renderCart();
}

function renderCart() {
  const itemsEl = document.getElementById('cartItems');
  const emptyEl = document.getElementById('cartEmpty');
  const footerEl = document.getElementById('cartFooter');
  const countEl = document.getElementById('cartCount');
  const totalEl = document.getElementById('cartTotal');

  const totalItems = cart.reduce((sum, i) => sum + i.qty, 0);
  const totalPrice = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  countEl.textContent = totalItems;
  totalEl.textContent = totalPrice.toFixed(2) + ' AZN';

  const isEmpty = cart.length === 0;
  emptyEl.style.display = isEmpty ? 'flex' : 'none';
  footerEl.style.display = isEmpty ? 'none' : 'block';

  const existingItems = itemsEl.querySelectorAll('.cart-item');
  existingItems.forEach(el => el.remove());

  cart.forEach(item => {
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <img class="cart-item-img" src="${item.img}" alt="${escHtml(item.name)}" loading="lazy" onerror="this.src='images/menu-hero.jpg'" width="60" height="60" />
      <div class="cart-item-info">
        <div class="cart-item-name">${escHtml(item.name)}</div>
        <div class="cart-item-price">${(item.price * item.qty).toFixed(2)} AZN</div>
      </div>
      <div class="cart-item-controls">
        <button class="qty-btn" onclick="changeQty('${item.id}',-1)" aria-label="Azalt">−</button>
        <span class="qty-num">${item.qty}</span>
        <button class="qty-btn" onclick="changeQty('${item.id}',1)" aria-label="Artır">+</button>
      </div>
    `;
    itemsEl.insertBefore(div, emptyEl);
  });
}

function bumpCartCount() {
  const el = document.getElementById('cartCount');
  el.classList.remove('bump');
  void el.offsetWidth;
  el.classList.add('bump');
  setTimeout(() => el.classList.remove('bump'), 300);
}

function sendOrder() {
  if (cart.length === 0) return;

  let msg = '🥐 *YENİ SİFARİŞ — Le Pain Quotidien*\n\n';
  msg += '━━━━━━━━━━━━━━━━━━━━\n';
  cart.forEach((item, idx) => {
    msg += `${idx + 1}. ${item.name}\n   ${item.qty} × ${item.price.toFixed(2)} AZN = ${(item.qty * item.price).toFixed(2)} AZN\n`;
  });
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  msg += '━━━━━━━━━━━━━━━━━━━━\n';
  msg += `💰 *CƏMİ: ${total.toFixed(2)} AZN*\n\n`;
  msg += '📍 Masanızı və ya çatdırılma ünvanınızı yazın.';

  const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}

// ─── MENU RENDERING ───────────────────────────

function renderMenuGrids() {
  Object.entries(menuData).forEach(([cat, items]) => {
    const grid = document.getElementById('grid-' + cat);
    if (!grid) return;
    const fragment = document.createDocumentFragment();
    items.forEach(item => {
      const card = document.createElement('div');
      card.className = 'menu-card';
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', '0');
      card.setAttribute('aria-label', item.name);

      const badgeHtml = item.badge
        ? `<div style="position:absolute;top:10px;left:10px;background:var(--accent);color:#000;font-size:11px;font-weight:700;padding:3px 9px;border-radius:100px;z-index:1;">${escHtml(item.badge)}</div>`
        : '';

      const priceDisplay = Number.isInteger(item.price) ? item.price + ' AZN' : item.price.toFixed(2) + ' AZN';

      card.innerHTML = `
        <div class="menu-card-img">
          ${badgeHtml}
          <img src="${item.img}" alt="${escHtml(item.name)}" loading="lazy" onerror="this.src='images/menu-hero.jpg'" width="220" height="180" />
        </div>
        <div class="menu-card-body">
          <div class="menu-card-name">${escHtml(item.name)}</div>
          <div class="menu-card-desc">${escHtml(item.desc)}</div>
          <div class="menu-card-footer">
            <span class="menu-card-price">${priceDisplay}</span>
            <button class="add-btn" onclick="event.stopPropagation();addToCart('${item.id}')" aria-label="Səbətə əlavə et">+</button>
          </div>
        </div>
      `;

      card.addEventListener('click', () => openProductModal(item));
      card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') openProductModal(item); });
      fragment.appendChild(card);
    });
    grid.appendChild(fragment);
  });
}

function switchTab(tabId) {
  document.querySelectorAll('.menu-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.tab === tabId);
  });
  document.querySelectorAll('.menu-section').forEach(s => {
    s.classList.toggle('active', s.id === 'tab-' + tabId);
  });
}

// ─── PRODUCT MODAL ────────────────────────────

function openProductModal(product) {
  currentModalProduct = product;
  document.getElementById('modalImg').src = product.img;
  document.getElementById('modalImg').alt = product.name;
  document.getElementById('modalName').textContent = product.name;
  document.getElementById('modalDesc').textContent = product.desc;
  const priceDisplay = Number.isInteger(product.price) ? product.price + ' AZN' : product.price.toFixed(2) + ' AZN';
  document.getElementById('modalPrice').textContent = priceDisplay;
  document.getElementById('modalWeight').textContent = product.weight || '';
  document.getElementById('productModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeProductModal(e) {
  if (e.target === document.getElementById('productModal')) closeProductModalBtn();
}
function closeProductModalBtn() {
  document.getElementById('productModal').classList.remove('open');
  currentModalProduct = null;
  document.body.style.overflow = '';
}

// ─── FAQ RENDERING ────────────────────────────

function renderFaq() {
  const list = document.getElementById('faqList');
  const fragment = document.createDocumentFragment();
  faqData.forEach((item) => {
    const el = document.createElement('div');
    el.className = 'faq-item';
    el.innerHTML = `
      <div class="faq-q" onclick="toggleFaq(this)">
        <span>${escHtml(item.q)}</span>
        <span class="faq-icon">+</span>
      </div>
      <div class="faq-a">
        <div class="faq-a-inner">${escHtml(item.a)}</div>
      </div>
    `;
    fragment.appendChild(el);
  });
  list.appendChild(fragment);
}

function toggleFaq(btn) {
  const item = btn.closest('.faq-item');
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}

// ─── VACANCIES RENDERING ──────────────────────

function renderVacancies() {
  const grid = document.getElementById('vacancyGrid');
  const fragment = document.createDocumentFragment();
  vacanciesData.forEach(v => {
    const card = document.createElement('div');
    card.className = 'vacancy-card';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.innerHTML = `
      <div class="vacancy-card-icon">${v.icon}</div>
      <div class="vacancy-card-title">${escHtml(v.title)}</div>
      <div class="vacancy-card-type">${escHtml(v.type)}</div>
      <div class="vacancy-card-desc">${escHtml(v.desc)}</div>
      <div class="vacancy-card-arrow">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </div>
    `;
    card.addEventListener('click', () => openVacancyModal(v));
    card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') openVacancyModal(v); });
    fragment.appendChild(card);
  });
  grid.appendChild(fragment);
}

// ─── VACANCY MODAL ────────────────────────────

function openVacancyModal(v) {
  currentVacancy = v;
  document.getElementById('vacancyModalIcon').textContent = v.icon;
  document.getElementById('vacancyModalTitle').textContent = v.title;
  document.getElementById('vacancyModalType').textContent = v.type;

  const detailsEl = document.getElementById('vacancyModalDetails');
  detailsEl.innerHTML = `
    <div class="vacancy-detail-row"><span class="vacancy-detail-label">💰 Maaş:</span><span class="vacancy-detail-value">${escHtml(v.salary)}</span></div>
    <div class="vacancy-detail-row"><span class="vacancy-detail-label">⏰ Qrafik:</span><span class="vacancy-detail-value">${escHtml(v.schedule)}</span></div>
    <div class="vacancy-detail-row"><span class="vacancy-detail-label">📋 Tələblər:</span><span class="vacancy-detail-value">${escHtml(v.requirements)}</span></div>
    <div class="vacancy-detail-row"><span class="vacancy-detail-label">📝 Vəzifələr:</span><span class="vacancy-detail-value">${escHtml(v.duties)}</span></div>
  `;

  document.getElementById('vacancyModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeVacancyModal(e) {
  if (e.target === document.getElementById('vacancyModal')) closeVacancyModalBtn();
}
function closeVacancyModalBtn() {
  document.getElementById('vacancyModal').classList.remove('open');
  currentVacancy = null;
  document.body.style.overflow = '';
}

function applyVacancy() {
  if (!currentVacancy) return;
  const msg = `👋 *Vakansiyaya Müraciət — Le Pain Quotidien*\n\n🔹 *Vəzifə:* ${currentVacancy.title}\n🔹 *İş rejimi:* ${currentVacancy.type}\n\nSalam! Bu vakansiya ilə maraqlanıram. Əlaqə saxlamaq istəyirəm.`;
  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
}

// ─── RESERVATION ─────────────────────────────

function submitReservation(e) {
  e.preventDefault();
  const name   = document.getElementById('resName').value.trim();
  const phone  = document.getElementById('resPhone').value.trim();
  const date   = document.getElementById('resDate').value;
  const time   = document.getElementById('resTime').value;
  const guests = document.getElementById('resGuests').value;
  const note   = document.getElementById('resNote').value.trim();

  if (!name || !phone || !date || !time || !guests) {
    showToast('Zəhmət olmasa bütün məcburi xanaları doldurun!');
    return;
  }

  const formattedDate = formatDate(date);
  let msg = `📅 *REZERVASIYA — Le Pain Quotidien*\n\n`;
  msg += `━━━━━━━━━━━━━━━━━━━━\n`;
  msg += `👤 *Ad, Soyad:* ${name}\n`;
  msg += `📞 *Telefon:* ${phone}\n`;
  msg += `📅 *Tarix:* ${formattedDate}\n`;
  msg += `⏰ *Saat:* ${time}\n`;
  msg += `👥 *Nəfər sayı:* ${guests}\n`;
  if (note) msg += `📝 *Qeyd:* ${note}\n`;
  msg += `━━━━━━━━━━━━━━━━━━━━`;

  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
}

// ─── GALLERY LIGHTBOX ─────────────────────────

function openLightbox(img) {
  const lb = document.getElementById('lightbox');
  document.getElementById('lightboxImg').src = img.src;
  document.getElementById('lightboxImg').alt = img.alt;
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

// ─── TOAST ────────────────────────────────────

function showToast(msg) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2800);
}

// ─── UTILS ────────────────────────────────────

function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function formatDate(dateStr) {
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString('az-AZ', { day: '2-digit', month: 'long', year: 'numeric' });
  } catch {
    return dateStr;
  }
}

// ─── KEYBOARD ACCESSIBILITY ───────────────────

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    if (document.getElementById('productModal').classList.contains('open')) {
      closeProductModalBtn();
    } else if (document.getElementById('vacancyModal').classList.contains('open')) {
      closeVacancyModalBtn();
    } else if (document.getElementById('lightbox').classList.contains('open')) {
      closeLightbox();
    } else if (document.getElementById('cartPanel').classList.contains('open')) {
      toggleCart();
    } else if (document.getElementById('mobileMenu').classList.contains('open')) {
      toggleMenu();
    }
  }
});

// ─── INIT ─────────────────────────────────────

document.addEventListener('DOMContentLoaded', function() {
  renderMenuGrids();
  renderFaq();
  renderVacancies();
  renderCart();

  const today = new Date().toISOString().split('T')[0];
  const resDate = document.getElementById('resDate');
  if (resDate) resDate.min = today;
});
