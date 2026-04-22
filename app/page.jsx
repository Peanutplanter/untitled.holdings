function LogoMark({ name }) {
  const baseSvgStyle = { width: "220px", height: "64px", display: "block" };

  if (name === "Vendify") {
    return (
      <svg viewBox="0 0 320 100" style={baseSvgStyle} fill="none">
        <text x="160" y="64" textAnchor="middle" fill="currentColor" fontSize="42" fontWeight="700" letterSpacing="2">
          VENDIFY
        </text>
      </svg>
    );
  }

  if (name === "LOOT") {
    return (
      <svg viewBox="0 0 260 90" style={baseSvgStyle} fill="none">
        <text x="130" y="62" textAnchor="middle" fill="currentColor" fontSize="64" fontWeight="700">
          LOOT
        </text>
      </svg>
    );
  }

  if (name === "Ingles de Colores") {
    return (
      <svg viewBox="0 0 260 100" style={baseSvgStyle} fill="none">
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
    <svg viewBox="0 0 320 100" style={{ width: "220px", height: "56px", display: "block" }} fill="none">
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

  const styles = {
    page: {
      minHeight: "100vh",
      background: "#000",
      color: "#fff",
      padding: "80px 24px",
      fontFamily: 'Georgia, "Times New Roman", serif',
    },
    wrap: {
      minHeight: "100vh",
      maxWidth: "1100px",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    hero: {
      textAlign: "center",
      fontSize: "clamp(64px, 10vw, 128px)",
      lineHeight: 0.92,
      letterSpacing: "-0.04em",
      margin: 0,
      fontWeight: 400,
    },
    about: {
      marginTop: "64px",
      textAlign: "center",
      fontSize: "28px",
      lineHeight: 1.4,
      color: "rgba(255,255,255,0.6)",
      fontFamily: 'Georgia, "Times New Roman", serif',
    },
    grid: {
      marginTop: "80px",
      width: "100%",
      maxWidth: "900px",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      border: "1px solid rgba(255,255,255,0.1)",
    },
    card: {
      height: "176px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "rgba(255,255,255,0.82)",
      textDecoration: "none",
      transition: "background 0.2s ease, color 0.2s ease",
    },
    emailWrap: {
      marginTop: "80px",
      textAlign: "center",
    },
    email: {
      color: "rgba(255,255,255,0.7)",
      textDecoration: "none",
      fontSize: "20px",
      fontFamily: 'Georgia, "Times New Roman", serif',
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.wrap}>
        <h1 style={styles.hero}>
          Untitled
          <br />
          Holdings
        </h1>

        <div style={styles.about}>
          Quietly building.
          <br />
          No Signal. Just execution.
        </div>

        <div style={styles.grid}>
          {companies.map((company, index) => {
            const borderRight = index % 2 === 0 ? "1px solid rgba(255,255,255,0.1)" : "none";
            const borderBottom = index < 2 ? "1px solid rgba(255,255,255,0.1)" : "none";

            return (
              <a
                key={company.name}
                href={company.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={company.name}
                style={{
                  ...styles.card,
                  borderRight,
                  borderBottom,
                }}
              >
                <LogoMark name={company.name} />
              </a>
            );
          })}
        </div>

        <div style={styles.emailWrap}>
          <a href="mailto:hello@untitled.holdings" style={styles.email}>
            hello@untitled.holdings
          </a>
        </div>
      </div>
    </div>
  );
}
