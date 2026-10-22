:root {
  --bg: #071521;
  --bg-soft: #0d1d2a;
  --panel: rgba(16, 27, 39, 0.95);
  --panel-alt: rgba(11, 22, 31, 0.9);
  --line: rgba(255, 255, 255, 0.08);
  --text: #edf4ff;
  --muted: #a8bbce;
  --gold: #d7af62;
  --gold-soft: #f5d580;
  --green: #3bd29a;
  --green-soft: rgba(59, 210, 154, 0.12);
  --red: #ff6b6b;
  --shadow: 0 16px 50px rgba(2, 10, 20, 0.45);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Inter", sans-serif;
  background:
    radial-gradient(circle at top, rgba(215, 175, 98, 0.15), transparent 30%),
    linear-gradient(180deg, #071521 0%, #0b1724 100%);
  color: var(--text);
  line-height: 1.6;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  max-width: 100%;
  display: block;
}

button,
input,
select,
textarea {
  font: inherit;
}

.container {
  width: min(1180px, calc(100% - 2rem));
  margin: 0 auto;
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 20;
  backdrop-filter: blur(12px);
  background: rgba(7, 21, 33, 0.8);
  border-bottom: 1px solid var(--line);
}

.nav-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 76px;
  gap: 1rem;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.brand-mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--gold), var(--gold-soft));
  color: #0a1724;
  font-weight: 900;
  box-shadow: 0 0 0 4px rgba(215, 175, 98, 0.12);
}

.main-nav {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  font-size: 0.95rem;
  color: var(--muted);
}

.main-nav a {
  transition: color 0.2s ease;
}

.main-nav a:hover,
.main-nav a.active {
  color: var(--text);
}

.nav-btn,
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 1.4rem;
  border-radius: 12px;
  border: 1px solid transparent;
  font-weight: 700;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
}

.nav-btn,
.btn-primary {
  background: linear-gradient(135deg, var(--gold), #c59745);
  color: #081824;
  box-shadow: 0 14px 28px rgba(215, 175, 98, 0.2);
}

.btn-secondary {
  background: transparent;
  border-color: rgba(255, 255, 255, 0.14);
  color: var(--text);
}

.btn:hover,
.nav-btn:hover {
  transform: translateY(-1px);
}

.nav-toggle {
  display: none;
  width: 46px;
  height: 46px;
  border-radius: 12px;
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.02);
  padding: 0.7rem 0.8rem;
}

.nav-toggle span {
  display: block;
  height: 2px;
  width: 100%;
  background: var(--text);
  margin: 5px 0;
}

.hero {
  padding: 4.5rem 0 2.5rem;
}

.hero-grid,
.dashboard-grid,
.content-grid,
.feature-grid,
.stats-grid {
  display: grid;
  gap: 1.3rem;
}

.hero-grid {
  grid-template-columns: 1.25fr 0.95fr;
  align-items: center;
}

.eyebrow {
  margin: 0 0 0.7rem;
  color: var(--gold-soft);
  font-size: 0.78rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  font-weight: 700;
}

h1,
h2,
h3,
p {
  margin-top: 0;
}

h1 {
  font-size: clamp(2.5rem, 6vw, 4.1rem);
  line-height: 1.05;
  margin-bottom: 1rem;
}

h2 {
  font-size: clamp(1.8rem, 4vw, 2.7rem);
  line-height: 1.15;
}

h3 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.lead {
  max-width: 600px;
  color: var(--muted);
  font-size: 1.05rem;
}

.cta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;
  margin: 1.4rem 0 1.8rem;
}

.account-options {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.option-card,
.card {
  background: rgba(14, 23, 34, 0.9);
  border: 1px solid var(--line);
  border-radius: 18px;
  box-shadow: var(--shadow);
}

.option-card {
  padding: 1rem 1.1rem;
}

.tag {
  display: inline-flex;
  align-items: center;
  padding: 0.38rem 0.7rem;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.02em;
}

.demo-tag {
  background: rgba(59, 210, 154, 0.12);
  color: var(--green);
}

.real-tag {
  background: rgba(215, 175, 98, 0.12);
  color: var(--gold-soft);
}

.option-card h3 {
  margin-top: 0.9rem;
}

.card {
  padding: 1.2rem;
}

.panel-header,
.section-title-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.panel-header {
  color: var(--muted);
  font-weight: 600;
}

.dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--green);
}

.market-list {
  margin-top: 1.25rem;
  display: grid;
  gap: 1rem;
}

.market-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0.85rem;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.04);
}

.market-row strong {
  display: block;
  margin-bottom: 0.2rem;
}

.market-row small {
  color: var(--muted);
}

.right-side {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.2rem;
}

.market-price {
  font-weight: 700;
}

.market-change {
  font-size: 0.8rem;
  font-weight: 700;
}

.market-change.positive,
.positive {
  color: var(--green);
}

.market-change.negative,
.negative {
  color: var(--red);
}

.mini-chart {
  display: flex;
  align-items: end;
  justify-content: space-between;
  height: 150px;
  gap: 0.4rem;
  margin-top: 1.5rem;
  padding: 1rem 0.3rem 0;
  background: linear-gradient(180deg, rgba(59, 210, 154, 0.08), rgba(255, 255, 255, 0.01));
  border-radius: 16px;
}

.bar {
  display: block;
  width: 100%;
  border-radius: 999px 999px 0 0;
  background: linear-gradient(180deg, var(--gold), rgba(215, 175, 98, 0.2));
}

.b1 { height: 35%; }
.b2 { height: 50%; }
.b3 { height: 45%; }
.b4 { height: 75%; }
.b5 { height: 90%; }
.b6 { height: 72%; }
.b7 { height: 80%; }
.b8 { height: 58%; }
.b9 { height: 65%; }
.b10 { height: 88%; }
.b11 { height: 92%; }
.b12 { height: 78%; }

.large-chart {
  height: 180px;
}

.risk-box {
  margin-top: 1.5rem;
  padding: 1rem;
  border-radius: 14px;
  background: rgba(255, 107, 107, 0.08);
  border: 1px solid rgba(255, 107, 107, 0.18);
}

.risk-box p {
  margin: 0.5rem 0 0;
  color: var(--muted);
}

.stats-section,
.info-section {
  padding: 1.5rem 0 2.5rem;
}

.stats-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.stat-card {
  padding: 1.2rem 1rem;
}

.stat-card strong {
  display: block;
  font-size: clamp(1.3rem, 2vw, 1.8rem);
  margin: 0.4rem 0;
}

.stat-card small,
.stat-title {
  color: var(--muted);
}

.feature-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.feature-card {
  padding: 1.1rem;
}

.icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.3rem;
  height: 2.3rem;
  border-radius: 12px;
  background: rgba(215, 175, 98, 0.12);
  color: var(--gold-soft);
  font-weight: 700;
  margin-bottom: 0.8rem;
}

.muted {
  background: rgba(11, 20, 29, 0.55);
}

.two-col {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.panel-box {
  padding: 1.4rem;
}

.warning-box {
  border-color: rgba(255, 107, 107, 0.22);
  background: rgba(255, 107, 107, 0.04);
}

.check-list {
  margin: 1rem 0 0;
  padding-left: 1.2rem;
  color: var(--muted);
}

.check-list li + li {
  margin-top: 0.6rem;
}

.page-main {
  padding: 2rem 0 4rem;
}

.page-header {
  margin-bottom: 1.5rem;
}

.dashboard-grid {
  grid-template-columns: 1.15fr 0.85fr;
  margin-bottom: 1.5rem;
}

.account-card {
  min-height: 100%;
}

.balance-box {
  margin: 1.3rem 0;
  padding: 1.2rem;
  border-radius: 16px;
  background: rgba(59, 210, 154, 0.08);
  border: 1px solid rgba(59, 210, 154, 0.18);
}

.balance-box span,
.balance-box small,
.profile-list span,
.record-item small {
  color: var(--muted);
}

.balance-box strong {
  display: block;
  font-size: clamp(2rem, 4vw, 2.6rem);
  margin: 0.5rem 0;
}

.summary-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.summary-grid > div {
  padding: 1rem;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.02);
}

.summary-grid label {
  display: block;
  color: var(--muted);
  margin-bottom: 0.35rem;
}

.summary-grid strong {
  font-size: 1.05rem;
}

.status-pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.2rem 0.72rem;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 700;
}

.status-pill.success {
  background: rgba(59, 210, 154, 0.1);
  color: var(--green);
}

.pair-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin: 1.2rem 0 1rem;
}

.pair-btn {
  padding: 0.55rem 0.8rem;
  border-radius: 10px;
  border: 1px solid var(--line);
  background: transparent;
  color: var(--text);
  cursor: pointer;
}

.pair-btn.active {
  border-color: rgba(215, 175, 98, 0.35);
  background: rgba(215, 175, 98, 0.07);
  color: var(--gold-soft);
}

.price-bar {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 1rem;
}

.label {
  display: block;
  color: var(--muted);
  font-size: 0.8rem;
  margin-bottom: 0.3rem;
}

.trade-card {
  display: grid;
  grid-template-columns: 1fr 1.3fr auto;
  gap: 1rem;
  align-items: center;
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.04);
}

.trade-card.alt {
  background: rgba(215, 175, 98, 0.04);
}

.trade-actions {
  display: flex;
  gap: 0.6rem;
}

.form-grid {
  grid-template-columns: 1.15fr 0.85fr;
}

.styled-form {
  display: grid;
  gap: 1rem;
}

.field-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

label {
  display: block;
  color: var(--muted);
  font-size: 0.95rem;
}

input,
select,
textarea {
  width: 100%;
  margin-top: 0.5rem;
  padding: 0.9rem 1rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.09);
  border-radius: 12px;
  color: var(--text);
}

input:focus,
select:focus,
textarea:focus {
  outline: none;
  border-color: rgba(215, 175, 98, 0.4);
  box-shadow: 0 0 0 4px rgba(215, 175, 98, 0.08);
}

.checkbox-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  color: var(--muted);
}

.checkbox-item input {
  width: 18px;
  height: 18px;
  margin-top: 0.15rem;
}

.info-stack,
.faq-list {
  display: grid;
  gap: 1rem;
}

.status-box {
  padding: 1rem;
  border-radius: 14px;
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.02);
}

.status-box.warning {
  border-color: rgba(255, 107, 107, 0.25);
  background: rgba(255, 107, 107, 0.05);
}

.status-box.neutral {
  border-color: rgba(255, 255, 255, 0.08);
}

.status-box p {
  margin-bottom: 0;
  color: var(--muted);
}

.trade-table-wrap {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 0.8rem 0.75rem;
  border-bottom: 1px solid var(--line);
  text-align: left;
}

th {
  color: var(--muted);
  font-size: 0.74rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.profile-list,
.record-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.8rem;
}

.profile-list li,
.record-item {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.8rem 0.9rem;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.02);
}

.record-item {
  display: grid;
  gap: 0.2rem;
}

.disclaimer-block {
  margin-top: 1rem;
}

.faq-list details {
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 0.8rem 1rem;
  background: rgba(255, 255, 255, 0.02);
}

.faq-list summary {
  cursor: pointer;
  font-weight: 600;
}

.faq-list p {
  margin: 0.8rem 0 0;
  color: var(--muted);
}

.site-footer {
  padding: 2rem 0 2.4rem;
  border-top: 1px solid var(--line);
}

.footer-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
}

.footer-brand {
  font-size: 0.95rem;
}

.footer-links {
  display: flex;
  align-items: center;
  gap: 1rem;
  color: var(--muted);
  flex-wrap: wrap;
}

@media (max-width: 980px) {
  .main-nav {
    position: absolute;
    top: calc(100% + 0.5rem);
    right: 1rem;
    left: 1rem;
    display: none;
    flex-direction: column;
    padding: 1rem;
    background: rgba(11, 20, 29, 0.97);
    border: 1px solid var(--line);
    border-radius: 16px;
    box-shadow: var(--shadow);
  }

  .main-nav.open {
    display: flex;
  }

  .nav-toggle {
    display: block;
  }

  .hero-grid,
  .dashboard-grid,
  .two-col,
  .feature-grid,
  .stats-grid,
  .form-grid {
    grid-template-columns: 1fr;
  }

  .account-options {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .field-grid,
  .summary-grid,
  .trade-card {
    grid-template-columns: 1fr;
  }

  .trade-actions {
    justify-content: stretch;
    width: 100%;
  }

  .trade-actions .btn {
    flex: 1;
  }

  .cta-row {
    flex-direction: column;
  }

  .btn,
  .nav-btn {
    width: 100%;
  }

  .site-footer {
    text-align: center;
  }
}
