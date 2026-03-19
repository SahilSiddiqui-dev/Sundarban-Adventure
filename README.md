# 🌿 Sundarban Adventures — Mystical Mangrove Expeditions

A fully static, responsive tour booking website for **Sundarban Adventures**, a wildlife expedition company operating in the Sundarbans — the world's largest mangrove delta and a UNESCO World Heritage Site.

---

## 📁 Project Structure

```
sundarban-adventures/
├── index.html      # Main HTML markup
├── style.css       # All styles, animations & responsive rules
├── script.js       # Interactive functionality & UI logic
└── README.md       # You're here
```

No build tools, frameworks, or dependencies required. Just open `index.html` in a browser.

---

## ✨ Features

### Sections
- **Hero** — Full-screen background with animated zoom, floating particles, and animated stat counters
- **Quick Booking Bar** — Sticky bar for tour type, date, guest count, and live price estimate
- **Why Choose Us** — Feature cards with image grid and hover effects
- **Tour Packages** — 3-tier pricing cards (Day Explorer, Weekend Escape, Wildlife Expedition)
- **Itinerary** — Tabbed day-by-day itinerary with interactive day selector
- **Gallery** — CSS grid photo gallery with lightbox viewer
- **Testimonials** — Customer review cards
- **FAQ** — Accordion-style frequently asked questions
- **Booking Form** — Guest picker + live price calculator (USD & INR)
- **Contact** — Contact details + enquiry form
- **Map Strip** — Embedded Google Maps iframe for location
- **Newsletter** — Email subscription section
- **Footer** — Links, policies, and social buttons

### JavaScript Interactions
- Scroll-aware sticky navbar with blur effect
- Mobile hamburger menu
- Animated particle system in hero section
- Intersection Observer–based scroll reveal animations
- Animated number counters triggered on scroll
- Tab switcher for itinerary packages
- Interactive itinerary day selector
- Guest picker with min/max limits (1–20)
- Live price calculator (per-guest, USD + INR)
- Booking bar live price update
- Toast notifications for form submissions
- Image lightbox (open/close via click or `Escape` key)
- Date inputs auto-set to today as minimum

---

## 🔗 External Dependencies

All loaded via CDN — no installation needed:

| Resource | Purpose |
|---|---|
| [Google Fonts — Playfair Display + DM Sans](https://fonts.google.com/) | Typography |
| [Font Awesome 6.4](https://fontawesome.com/) | Icons |

---

## 🚀 Getting Started

1. Download or clone the project folder
2. Make sure all three files (`index.html`, `style.css`, `script.js`) are in the **same directory**
3. Open `index.html` in any modern browser

```bash
# Or serve locally with Python
python3 -m http.server 8000
# Then visit http://localhost:8000
```

> **Note:** Some features (like the embedded map) work best when served over HTTP rather than opened as a local file.

---

## 🎨 Design System

Defined as CSS custom properties in `:root` inside `style.css`:

| Variable | Value | Usage |
|---|---|---|
| `--forest` | `#1a3a1f` | Primary dark green |
| `--deep` | `#0d2410` | Deepest background |
| `--moss` | `#2e5c35` | Mid-tone green |
| `--gold` | `#c9a84c` | Accent / CTA colour |
| `--gold-lt` | `#e8c97a` | Light gold |
| `--cream` | `#f8f4ed` | Light section backgrounds |
| `--text-lt` | `#5a7060` | Secondary text |

---

## 📱 Responsive Breakpoints

| Breakpoint | Changes |
|---|---|
| `≤ 1024px` | Single-column layouts, booking bar wraps |
| `≤ 768px` | Mobile nav, stacked grids, hidden scroll hint |

---

## 📦 Tour Packages & Pricing

| Package | Duration | Price (USD) | Price (INR approx.) |
|---|---|---|---|
| Day Explorer | 1 Day | $75/person | ₹6,250 |
| Weekend Escape | 2 Days | $150/person | ₹12,500 |
| Wildlife Expedition | 5 Days | $350/person | ₹29,000 |
| Custom Tour | Flexible | On request | Contact us |

> Prices in the booking form use a fixed rate of **1 USD ≈ ₹83.5**.

---

## 📝 Notes

- Forms currently show a **toast notification** on submit — no backend is connected. To make them functional, hook `submitBooking()`, `submitContact()`, and `subscribeNewsletter()` in `script.js` to your preferred backend or a service like Formspree / EmailJS.
- The original `index.html` had inline `<style>` and `<script>` blocks. These have been separated into `style.css` and `script.js` for maintainability.
- Forest Dept. Registration: **#WB/2005/SA**

---

## 📄 License

© 2025 Sundarban Adventures. All rights reserved.
