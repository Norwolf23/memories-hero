import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu — Memories Restaurant",
  description:
    "An à la carte menu that changes weekly with what lands on the quay and what walks in from the fields.",
};

const STARTERS = [
  {
    name: "Smoked Haddock Tart",
    detail: "House-smoked, leek cream, chive oil",
  },
  {
    name: "Peking Duck Rolls",
    detail: "Cucumber, spring onion, hoisin",
  },
  {
    name: "Crab on Toast",
    detail: "Bideford brown crab, lemon, sourdough",
  },
  {
    name: "Wild Mushroom & Tarragon",
    detail: "Brown butter, soft yolk, toasted hazelnut",
  },
];

const MAINS = [
  {
    name: "John Dory",
    detail: "Brown butter and capers, seasonal greens, Dauphinoise",
  },
  {
    name: "Belly Pork",
    detail: "Slow-rendered crackling, Bramley apple, mustard",
  },
  {
    name: "Hartland Lamb",
    detail: "Pink-roasted rump, rosemary jus, glazed root vegetables",
  },
  {
    name: "Pan-roasted Sea Bass",
    detail: "Brown shrimp butter, samphire, new potatoes",
  },
  {
    name: "Calves' Liver",
    detail: "Caramelised onion, smoked bacon, mash",
  },
];

const PUDDINGS = [
  {
    name: "Sticky Toffee Pudding",
    detail: "Dark muscovado, clotted cream, salted toffee",
  },
  {
    name: "Dark Chocolate Torte",
    detail: "Sea salt, crème fraîche",
  },
  {
    name: "Vanilla Pannacotta",
    detail: "Poached rhubarb, almond crumb",
  },
  {
    name: "Local Cheeses",
    detail: "Three from the West Country, biscuits, quince",
  },
];

function Course({
  title,
  items,
}: {
  title: string;
  items: { name: string; detail: string }[];
}) {
  return (
    <section className="course">
      <div className="course__head">
        <span className="course__rule" aria-hidden />
        <h2 className="course__title">{title}</h2>
        <span className="course__rule" aria-hidden />
      </div>
      <ul className="course__list">
        {items.map((it) => (
          <li key={it.name} className="dish">
            <h3 className="dish__name">{it.name}</h3>
            <p className="dish__detail">{it.detail}</p>
          </li>
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
          <p className="eyebrow">À la carte · changes weekly</p>
          <h1 className="menu-page__title">The menu</h1>
          <p className="menu-page__supporting">
            Mains are served with a pot of fresh vegetables to share and
            Dauphinoise potato. Bread, amuse-bouche and petits fours come with
            our compliments. The list below is representative — the kitchen
            follows what arrives at the door.
          </p>
        </header>

        <Course title="To Start" items={STARTERS} />
        <Course title="Mains" items={MAINS} />
        <Course title="Puddings" items={PUDDINGS} />

        <section className="menu-page__notes">
          <p>
            <strong>A note on diets.</strong> The kitchen is small and the
            menu is small. We can adapt for gluten-free with notice; we are
            unable to cater for vegan diets, dairy-free, or severe allergies
            such as coeliac. Please ring when you book if you'd like to chat
            it through.
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
        .menu-page__inner { max-width: 780px; }
        .menu-page__head { margin-bottom: 80px; }
        .menu-page__title { margin: 14px 0 28px; }
        .menu-page__supporting {
          color: var(--text);
          font-size: 1.05rem;
          line-height: 1.75;
          max-width: 56ch;
        }
        .course { margin-bottom: 72px; }
        .course__head {
          display: flex;
          align-items: center;
          gap: 24px;
          margin-bottom: 36px;
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
        .dish {
          display: grid;
          grid-template-columns: minmax(0, 1fr);
        }
        .dish__name {
          font-family: var(--font-display), serif;
          font-weight: 400;
          font-size: 1.45rem;
          margin-bottom: 6px;
          color: var(--text);
        }
        .dish__detail {
          color: var(--muted);
          font-size: 1rem;
          line-height: 1.6;
        }
        .menu-page__notes {
          margin: 72px 0 60px;
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
