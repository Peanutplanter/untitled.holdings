function LogoMark({ name }) {
  if (name === "Vendify") {
    return (
      <svg viewBox="0 0 320 100" className="h-16 w-full max-w-[220px]" fill="none">
        <text x="160" y="64" textAnchor="middle" fill="currentColor" fontSize="42" fontWeight="700" letterSpacing="2">
          VENDIFY
        </text>
      </svg>
    );
  }

  if (name === "LOOT") {
    return (
      <svg viewBox="0 0 260 90" className="h-16 w-full max-w-[220px]" fill="none">
        <text x="130" y="62" textAnchor="middle" fill="currentColor" fontSize="64" fontWeight="700">
          LOOT
        </text>
      </svg>
    );
  }

  if (name === "Ingles de Colores") {
    return (
      <svg viewBox="0 0 260 100" className="h-16 w-full max-w-[220px]" fill="none">
        <text x="130" y="48" textAnchor="middle" fill="currentColor" fontSize="20" fontWeight="700" letterSpacing="2">
          INGLÉS DE
        </text>
        <text x="130" y="78" textAnchor="middle" fill="currentColor" fontSize="20" fontWeight="700" letterSpacing="2">
          COLORES
        </text>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 320 100" className="h-14 w-full max-w-[220px]" fill="none">
      <text x="160" y="64" textAnchor="middle" fill="currentColor" fontSize="38" fontWeight="400">
        CoffeeTAB
      </text>
    </svg>
  );
}

export default function Page() {
  const companies = [
    { name: "Vendify", link: "https://vendifyco.com" },
    { name: "LOOT", link: "https://vendifyco.com" },
    { name: "Ingles de Colores", link: "https://inglesdecoloresconjessy.com" },
    { name: "CoffeeTAB", link: "https://coffeetab.cafe" },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center">
        
        {/* HERO */}
        <div className="text-center">
          <h1 className="text-6xl font-serif tracking-tight md:text-8xl">
            Untitled
            <br />
            Holdings
          </h1>
        </div>

        {/* ABOUT */}
        <div className="mt-16 text-center text-lg text-white/60">
          Quietly building.
          <br />
          No Signal. Just execution.
        </div>

        {/* PORTFOLIO */}
        <div className="mt-20 grid w-full max-w-4xl grid-cols-2 gap-0 overflow-hidden border border-white/10">
          {companies.map((company, index) => (
            <a
              key={company.name}
              href={company.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex h-44 items-center justify-center text-white/80 transition hover:bg-white/[0.03] hover:text-white ${
                index % 2 === 0 ? 'border-r border-white/10' : ''
              } ${index < 2 ? 'border-b border-white/10' : ''}`}
            >
              <LogoMark name={company.name} />
            </a>
          ))}
        </div>

        {/* CONTACT */}
        <div className="mt-20 text-center">
          <a
            href="mailto:hello@untitled.holdings"
            className="text-white/70 transition hover:text-white"
          >
            hello@untitled.holdings
          </a>
        </div>

      </div>
    </div>
  );
}
