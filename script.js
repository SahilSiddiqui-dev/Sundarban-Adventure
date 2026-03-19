/* ─── NAV SCROLL ─── */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });

  /* ─── MOBILE MENU ─── */
  document.getElementById('menu-btn').addEventListener('click', () => {
    document.getElementById('mobile-menu').classList.toggle('open');
  });
  document.querySelectorAll('#mobile-menu a').forEach(a =>
    a.addEventListener('click', () => document.getElementById('mobile-menu').classList.remove('open'))
  );

  /* ─── PARTICLES ─── */
  const pc = document.getElementById('particles');
  for (let i = 0; i < 18; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const s = Math.random() * 8 + 4;
    p.style.cssText = `
      width:${s}px;height:${s}px;
      left:${Math.random()*100}%;
      animation-duration:${Math.random()*15+10}s;
      animation-delay:${Math.random()*10}s;
    `;
    pc.appendChild(p);
  }

  /* ─── COUNTER ─── */
  const counters = document.querySelectorAll('.stat-num[data-target]');
  const countObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = +el.dataset.target;
      let cur = 0;
      const step = target / 60;
      const timer = setInterval(() => {
        cur = Math.min(cur + step, target);
        el.textContent = Math.floor(cur).toLocaleString();
        if (cur >= target) clearInterval(timer);
      }, 25);
      countObs.unobserve(el);
    });
  }, { threshold: 0.3 });
  counters.forEach(c => countObs.observe(c));

  /* ─── REVEAL ─── */
  const revObs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => revObs.observe(el));

  /* ─── FAQ ─── */
  document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });

  /* ─── TABS ─── */
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('tab-' + btn.dataset.tab).classList.add('active');
    });
  });

  /* ─── ITINERARY DAY ITEMS ─── */
  document.querySelectorAll('.day-item').forEach(item => {
    item.addEventListener('click', () => {
      const panel = item.closest('.tab-panel');
      panel.querySelectorAll('.day-item').forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      const detailKey = item.dataset.detail;
      panel.querySelectorAll('.itinerary-detail').forEach(d => d.style.display = 'none');
      const det = document.getElementById('detail-' + detailKey);
      if (det) det.style.display = 'block';
    });
  });
  // Init: show first detail of each panel
  document.querySelectorAll('.tab-panel').forEach(panel => {
    const details = panel.querySelectorAll('.itinerary-detail');
    details.forEach((d, i) => { d.style.display = i === 0 ? 'block' : 'none'; });
  });

  /* ─── GUESTS PICKER ─── */
  let guests = 2;
  function changeGuests(delta) {
    guests = Math.max(1, Math.min(20, guests + delta));
    document.getElementById('guest-count').textContent = guests;
    updatePrice();
  }

  /* ─── PRICE CALCULATOR ─── */
  const prices = { '75': 75, '150': 150, '350': 350 };
  function updatePrice() {
    const sel = document.getElementById('form-tour');
    const val = sel.value;
    const ps = document.getElementById('ps-total');
    const pb = document.getElementById('ps-breakdown');
    if (val && prices[val]) {
      const usd = prices[val] * guests;
      const inr = Math.round(usd * 83.5);
      ps.textContent = `$${usd.toLocaleString()}`;
      pb.textContent = `${guests} guest${guests>1?'s':''} × $${prices[val]} ≈ ₹${inr.toLocaleString()}`;
    } else if (val === '0') {
      ps.textContent = 'Custom';
      pb.textContent = 'Price tailored to your requirements';
    } else {
      ps.textContent = '—';
      pb.textContent = 'Select a package to see pricing';
    }
  }

  /* ─── BOOKING BAR PRICE ─── */
  const bbPrices = { 'Day Explorer': 6250, 'Weekend Escape': 12500, 'Wildlife Expedition': 29000, 'Custom Tour': 0 };
  function updateBBPrice() {
    const tour = document.getElementById('bb-tour').value;
    const guestText = document.getElementById('bb-guests').value;
    const g = parseInt(guestText) || 1;
    const base = bbPrices[tour] || 0;
    const el = document.getElementById('bb-price');
    if (base === 0) { el.textContent = 'Contact Us'; return; }
    el.textContent = `₹${(base * g).toLocaleString()}`;
  }
  document.getElementById('bb-tour').addEventListener('change', updateBBPrice);
  document.getElementById('bb-guests').addEventListener('change', updateBBPrice);

  /* ─── SET MIN DATE ─── */
  const today = new Date().toISOString().split('T')[0];
  document.getElementById('form-date').min = today;
  document.getElementById('bb-date').min = today;
  document.getElementById('bb-date').value = today;

  /* ─── TOAST ─── */
  function showToast(msg) {
    const t = document.getElementById('toast');
    document.getElementById('toast-msg').textContent = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 4000);
  }

  /* ─── SUBMIT ─── */
  function submitBooking(e) {
    e.preventDefault();
    showToast('✅ Booking enquiry sent! We\'ll confirm within 24 hours.');
    e.target.reset();
    guests = 2;
    document.getElementById('guest-count').textContent = '2';
    document.getElementById('ps-total').textContent = '—';
    document.getElementById('ps-breakdown').textContent = 'Select a package to see pricing';
  }
  function submitContact(e) {
    e.preventDefault();
    showToast('Message sent! Our team will respond within 2 hours.');
    e.target.reset();
  }
  function subscribeNewsletter(e) {
    e.preventDefault();
    showToast('🌿 Subscribed! Welcome to the Sundarban community.');
    e.target.reset();
  }

  /* ─── LIGHTBOX ─── */
  function openLightbox(src) {
    document.getElementById('lightbox-img').src = src;
    document.getElementById('lightbox').classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeLightbox() {
    document.getElementById('lightbox').classList.remove('open');
    document.body.style.overflow = '';
  }
  document.getElementById('lightbox').addEventListener('click', function(e) {
    if (e.target === this) closeLightbox();
  });
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeLightbox();
  });
