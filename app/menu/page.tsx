import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu — Memories Restaurant",
  description:
    "A sample à la carte menu — three courses, locally sourced, served with a pot of fresh vegetables to share and Dauphinoise potato.",
};

type Dish = {
  name: string;
  detail: string;
  price: string;
  v?: boolean;
};

const STARTERS: Dish[] = [
  {
    name: "Gin, Lemon & Dill Pollen Marinated Local Trout Gravadlax",
    detail:
      "Poached trout, caper and lemon crispy fishcake, dill dressing",
    price: "9.95",
  },
  {
    name: "Crispy Rolls of Confit Peking Duck",
    detail: "Noodle, carrot and hoisin with plum dipping sauce",
    price: "9.50",
  },
  {
    name: "Sri Lankan Curried Crab",
    detail: "Leek and ginger tart",
    price: "9.95",
  },
  {
    name: "Asparagus, Ricotta and Pecorino Ravioli",
    detail: "Pine nut and basil pesto verde",
    price: "9.50",
    v: true,
  },
  {
    name: "Curried Cauliflower, Pea and Spinach Samosas",
    detail: "Cashew nut and toasted coconut salad",
    price: "9.50",
    v: true,
  },
  {
    name: "Honey & Soy Glazed Pork Satay Meatballs",
    detail: "Confit garlic, peanut and ginger",
    price: "9.50",
  },
];

const MAINS: Dish[] = [
  {
    name: "Pan-seared Cannon of Local Venison",
    detail: "Pulled beef brisket and red onion croquette, red wine jus",
    price: "25.50",
  },
  {
    name: "Slow-roasted Local Pork Belly",
    detail: "Toad-in-the-hole pie, roasting juices, crackling shard",
    price: "23.00",
  },
  {
    name: "Pan-seared Lamb Rump",
    detail: "Slow-braised lamb hotpot, red wine jus",
    price: "25.00",
  },
  {
    name: "Warm Tart of Roasted Courgette",
    detail: "Pea, mint, leek, feta and ricotta",
    price: "21.00",
    v: true,
  },
  {
    name: "Pan-roasted Local Red Mullet",
    detail: "Champ potato, mango, lime, sun-blushed tomato salsa",
    price: "25.00",
  },
  {
    name: "Roasted Root Vegetable Hotpot",
    detail: "Chestnut mushroom and puy lentil",
    price: "21.00",
    v: true,
  },
];

const PUDDINGS: Dish[] = [
  {
    name: "Steamed Sticky Toffee & Ginger Sponge Pudding",
    detail: "Butterscotch sauce",
    price: "8.95",
  },
  {
    name: "Warm Treacle and Walnut Tart",
    detail: "Double cream",
    price: "8.95",
  },
  {
    name: "Rich Chocolate and Cointreau Marquise",
    detail: "Double cream",
    price: "8.95",
  },
  {
    name: "Passion Fruit, Raspberry & Meringue Semifreddo",
    detail: "",
    price: "8.95",
  },
  {
    name: "Dairy Ice Cream",
    detail: "Two scoops £4.00 · three scoops £5.50",
    price: "4.00",
  },
  {
    name: "Selection of Cheese and Biscuits",
    detail: "",
    price: "8.95",
  },
];

function DishRow({ dish }: { dish: Dish }) {
  return (
    <li className="dish">
      <div className="dish__head">
        <h3 className="dish__name">
          {dish.name}
          {dish.v && (
            <span className="dish__v" aria-label="vegetarian">
              (v)
            </span>
          )}
        </h3>
        <span className="dish__leader" aria-hidden />
        <span className="dish__price">£{dish.price}</span>
      </div>
      {dish.detail && <p className="dish__detail">{dish.detail}</p>}
    </li>
  );
}

function Course({ title, items }: { title: string; items: Dish[] }) {
  return (
    <section className="course">
      <div className="course__head">
        <span className="course__rule" aria-hidden />
        <h2 className="course__title">{title}</h2>
        <span className="course__rule" aria-hidden />
      </div>
      <ul className="course__list">
        {items.map((it) => (
          <DishRow key={it.name} dish={it} />
        ))}
      </ul>
    </section>
  );
}

export default function MenuPage() {
  return (
    <div className="menu-page">
      <div className="container menu-page__inner">
        <header className="menu-page__head">
          <p className="eyebrow">À la carte · sample menu</p>
          <h1 className="menu-page__title">The menu</h1>
          <p className="menu-page__supporting">
            All dishes are served with a pot of fresh vegetables to share and
            Dauphinoise potato. Bread, amuse-bouche and petits fours come with
            our compliments. The kitchen follows what arrives at the door, so
            the list below is a sample.
          </p>
        </header>

        <Course title="First Course" items={STARTERS} />
        <Course title="Main Course" items={MAINS} />
        <Course title="Puddings" items={PUDDINGS} />

        <section className="menu-page__sourcing">
          <p>
            <span className="smallcaps">Sourcing</span>
          </p>
          <p>
            All our meat and poultry is locally sourced and free range or
            outdoor reared. All fish is locally caught.
          </p>
        </section>

        <section className="menu-page__notes">
          <p>
            <strong>A note on diets.</strong> The kitchen is small and the menu
            is small. We can adapt for gluten-free with notice; we are unable
            to cater for vegan diets, dairy-free, or severe allergies such as
            coeliac. Please ring when you book if you'd like to chat it through.
          </p>
        </section>

        <div className="menu-page__cta">
          <Link href="/reserve" className="btn btn-solid">
            Reserve a table
          </Link>
        </div>
      </div>

      <style>{`
        .menu-page { padding: 160px 0 40px; }
        .menu-page__inner { max-width: 820px; }
        .menu-page__head { margin-bottom: 80px; }
        .menu-page__title { margin: 14px 0 28px; }
        .menu-page__supporting {
          color: var(--text);
          font-size: 1.05rem;
          line-height: 1.75;
          max-width: 60ch;
        }
        .course { margin-bottom: 80px; }
        .course__head {
          display: flex;
          align-items: center;
          gap: 24px;
          margin-bottom: 40px;
        }
        .course__rule {
          flex: 1;
          height: 1px;
          background: var(--surface-2);
        }
        .course__title {
          font-family: var(--font-display), serif;
          font-style: italic;
          font-weight: 400;
          font-size: 1.6rem;
          color: var(--accent);
          letter-spacing: 0.02em;
          white-space: nowrap;
        }
        .course__list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          gap: 32px;
        }
        .dish { display: grid; gap: 6px; }
        .dish__head {
          display: flex;
          align-items: baseline;
          gap: 14px;
        }
        .dish__name {
          font-family: var(--font-display), serif;
          font-weight: 400;
          font-size: 1.32rem;
          color: var(--text);
          line-height: 1.25;
          margin: 0;
        }
        .dish__v {
          display: inline-block;
          margin-left: 8px;
          font-family: var(--font-body), sans-serif;
          font-style: italic;
          font-size: 0.78rem;
          color: var(--accent);
          letter-spacing: 0.04em;
          vertical-align: 1px;
        }
        .dish__leader {
          flex: 1;
          height: 1px;
          background: var(--surface-2);
          transform: translateY(-4px);
        }
        .dish__price {
          font-family: var(--font-display), serif;
          font-weight: 400;
          font-size: 1.18rem;
          color: var(--accent);
          white-space: nowrap;
        }
        .dish__detail {
          color: var(--muted);
          font-size: 0.98rem;
          line-height: 1.6;
          max-width: 60ch;
        }
        @media (max-width: 560px) {
          .dish__head { flex-wrap: wrap; gap: 6px 12px; }
          .dish__leader { display: none; }
          .dish__name { flex: 1 1 auto; font-size: 1.2rem; }
          .dish__price { flex: 0 0 auto; }
        }

        .menu-page__sourcing {
          margin: 0 0 56px;
          padding: 28px 0;
          border-top: 1px solid var(--surface-2);
          border-bottom: 1px solid var(--surface-2);
          display: grid;
          gap: 10px;
          text-align: center;
        }
        .menu-page__sourcing p:last-child {
          color: var(--text);
          font-family: var(--font-display), serif;
          font-style: italic;
          font-size: 1.1rem;
          max-width: 50ch;
          margin-inline: auto;
        }
        .menu-page__notes {
          margin: 0 0 60px;
          padding: 32px;
          background: var(--surface);
          border: 1px solid var(--surface-2);
          border-radius: 2px;
        }
        .menu-page__notes p {
          color: var(--text);
          font-size: 0.98rem;
          line-height: 1.7;
        }
        .menu-page__notes strong {
          color: var(--accent);
          font-weight: 500;
        }
        .menu-page__cta {
          display: flex;
          justify-content: center;
          padding: 24px 0 40px;
        }
      `}</style>
    </div>
  );
}
