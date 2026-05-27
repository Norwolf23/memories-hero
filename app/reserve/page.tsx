"use client";

import { useState } from "react";
import type { FormEvent } from "react";

export default function ReservePage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const date = String(data.get("date") ?? "");
    const party = String(data.get("party") ?? "");
    const phone = String(data.get("phone") ?? "");
    const email = String(data.get("email") ?? "");
    const note = String(data.get("note") ?? "");

    const subject = `Reservation enquiry — ${name} · ${date}`;
    const body = [
      `Name: ${name}`,
      `Preferred date: ${date}`,
      `Party size: ${party}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      "",
      "Note:",
      note,
    ].join("\n");

    window.location.href = `mailto:bookings@memoriesrestaurant.co.uk?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  }

  return (
    <div className="reserve-page">
      <div className="container reserve-page__inner">
        <header className="reserve-page__head">
          <p className="eyebrow">Reservations</p>
          <h1 className="reserve-page__title">
            Ring us. <em>That's how this works.</em>
          </h1>
          <p className="reserve-page__supporting">
            The single sitting starts at seven, Thursday to Saturday. Bookings
            open two to three months ahead. Naomi answers the phone between
            10am and 6pm.
          </p>
        </header>

        <a href="tel:+441237473419" className="reserve-page__phone">
          01237 473419
        </a>
        <p className="reserve-page__phone-detail smallcaps">
          Tap to call · 10am – 6pm
        </p>

        <div className="reserve-page__divider">
          <span aria-hidden />
          <p>If we don't pick up, leave us this</p>
          <span aria-hidden />
        </div>

        <form className="reserve-form" onSubmit={handleSubmit}>
          <div className="reserve-form__row">
            <label className="reserve-form__field">
              <span>Your name</span>
              <input name="name" required autoComplete="name" />
            </label>
            <label className="reserve-form__field">
              <span>Party size</span>
              <select name="party" required defaultValue="2">
                <option value="1">1 guest</option>
                <option value="2">2 guests</option>
                <option value="3">3 guests</option>
                <option value="4">4 guests</option>
                <option value="5">5 guests</option>
                <option value="6">6 guests</option>
                <option value="7">7 guests</option>
                <option value="8">8 guests</option>
              </select>
            </label>
          </div>
          <div className="reserve-form__row">
            <label className="reserve-form__field">
              <span>Preferred date</span>
              <input name="date" type="date" required />
            </label>
            <label className="reserve-form__field">
              <span>Phone</span>
              <input
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                placeholder="So we can ring back"
              />
            </label>
          </div>
          <label className="reserve-form__field">
            <span>Email</span>
            <input
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="In case we can't get through"
            />
          </label>
          <label className="reserve-form__field">
            <span>Anything we should know</span>
            <textarea
              name="note"
              rows={4}
              placeholder="Anniversary, dietary needs, a request — keep it brief."
            />
          </label>
          <button type="submit" className="btn btn-solid reserve-form__submit">
            {submitted ? "Opening your mail…" : "Send us the details"}
          </button>
          <p className="reserve-form__small">
            We'll reply within a working day. If you're trying to book for next
            week, please ring instead — the list moves fast.
          </p>
        </form>

        <aside className="reserve-page__where">
          <div className="reserve-page__where-block">
            <p className="smallcaps">Find us</p>
            <p>
              8 Fore Street
              <br />
              Northam, Bideford
              <br />
              Devon EX39 1AW
            </p>
          </div>
          <div className="reserve-page__where-block">
            <p className="smallcaps">Hours</p>
            <p>
              Thursday — Saturday
              <br />
              One sitting · from 7pm
              <br />
              Closed Sunday — Wednesday
            </p>
          </div>
        </aside>
      </div>

      <style>{`
        .reserve-page { padding: 160px 0 40px; }
        .reserve-page__inner { max-width: 780px; }
        .reserve-page__head { text-align: center; margin-bottom: 56px; }
        .reserve-page__title { margin: 14px 0 24px; }
        .reserve-page__title em { color: var(--accent); font-style: italic; }
        .reserve-page__supporting {
          max-width: 52ch;
          margin: 0 auto;
          color: var(--text);
          font-size: 1.08rem;
          line-height: 1.7;
        }
        .reserve-page__phone {
          display: block;
          text-align: center;
          font-family: var(--font-display), serif;
          font-size: clamp(2.8rem, 7vw, 4.2rem);
          font-weight: 300;
          color: var(--accent);
          letter-spacing: 0.05em;
          margin: 48px 0 8px;
          transition: color 400ms cubic-bezier(0.2,0.7,0.2,1);
        }
        .reserve-page__phone:hover { color: var(--accent-2); }
        .reserve-page__phone-detail {
          text-align: center;
          color: var(--muted);
          margin-bottom: 56px;
        }
        .reserve-page__divider {
          display: flex;
          align-items: center;
          gap: 18px;
          margin: 72px 0 36px;
          color: var(--muted);
        }
        .reserve-page__divider span { flex: 1; height: 1px; background: var(--surface-2); }
        .reserve-page__divider p {
          font-size: 0.78rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
        }

        .reserve-form {
          display: grid;
          gap: 22px;
          margin-bottom: 64px;
        }
        .reserve-form__row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 22px;
        }
        @media (max-width: 560px) {
          .reserve-form__row { grid-template-columns: 1fr; }
        }
        .reserve-form__field { display: grid; gap: 8px; }
        .reserve-form__field > span {
          font-size: 0.74rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--muted);
        }
        .reserve-form__field input,
        .reserve-form__field select,
        .reserve-form__field textarea {
          background: var(--surface);
          border: 1px solid var(--surface-2);
          color: var(--text);
          padding: 14px 16px;
          border-radius: 2px;
          font-size: 1rem;
          line-height: 1.5;
          width: 100%;
          transition: border-color 400ms cubic-bezier(0.2,0.7,0.2,1);
        }
        .reserve-form__field input::placeholder,
        .reserve-form__field textarea::placeholder { color: var(--muted); opacity: 0.7; }
        .reserve-form__field input:focus,
        .reserve-form__field select:focus,
        .reserve-form__field textarea:focus {
          outline: none;
          border-color: var(--accent);
        }
        .reserve-form__submit { justify-self: flex-start; margin-top: 12px; }
        .reserve-form__small {
          color: var(--muted);
          font-size: 0.9rem;
          line-height: 1.6;
        }

        .reserve-page__where {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          padding-top: 56px;
          border-top: 1px solid var(--surface-2);
        }
        @media (max-width: 560px) {
          .reserve-page__where { grid-template-columns: 1fr; gap: 28px; }
        }
        .reserve-page__where-block p:not(.smallcaps) {
          margin-top: 14px;
          font-size: 1rem;
          line-height: 1.7;
          color: var(--text);
        }
      `}</style>
    </div>
  );
}
