function LogoMark({ name }) {
  const common = {
    width: "200px",
    height: "64px",
    display: "block",
  };

  if (name === "Vendify") {
    return (
      <svg viewBox="0 0 320 100" style={common} fill="none">
        <text
          x="160"
          y="64"
          textAnchor="middle"
          fill="currentColor"
          fontSize="44"
          fontWeight="800"
          letterSpacing="2"
        >
          VENDIFY
        </text>
      </svg>
    );
  }

  if (name === "LOOT") {
    return (
      <svg viewBox="0 0 260 90" style={common} fill="none">
        <text
          x="130"
          y="62"
          textAnchor="middle"
          fill="currentColor"
          fontSize="58"
          fontWeight="600"
        >
          LOOT
        </text>
      </svg>
    );
  }

  if (name === "Ingles de Colores") {
    return (
      <svg viewBox="0 0 260 100" style={common} fill="none">
        <text
          x="130"
          y="48"
          textAnchor="middle"
          fill="currentColor"
          fontSize="24"
          fontWeight="700"
          letterSpacing="3"
        >
          INGLES DE
        </text>
        <text
          x="130"
          y="78"
          textAnchor="middle"
          fill="currentColor"
          fontSize="24"
          fontWeight="700"
          letterSpacing="3"
        >
          COLORES
        </text>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 320 100" style={common} fill="none">
      <text
        x="160"
        y="64"
        textAnchor="middle"
        fill="currentColor"
        fontSize="42"
        fontWeight="600"
        letterSpacing="1"
      >
        CoffeeTAB
      </text>
    </svg>
  );
}

function CompanyCard({ company, index }) {
  const borderRight =
    index % 2 === 0 ? "1px solid rgba(255,255,255,0.08)" : "none";
  const borderBottom =
    index < 2 ? "1px solid rgba(255,255,255,0.08)" : "none";

  return (
    <a
      href={company.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={company.name}
      style={{
        height: "176px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "rgba(255,255,255,0.82)",
        textDecoration: "none",
        background: "transparent",
        borderRight,
        borderBottom,
        transition: "background 0.2s ease, color 0.2s ease",
        position: "relative",
        zIndex: 2,
      }}
    >
      <LogoMark name={company.name} />
    </a>
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
      letterSpacing: "-0.06em",
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
    gridWrap: {
      marginTop: "80px",
      width: "100%",
      maxWidth: "900px",
      position: "relative",
      border: "1px solid rgba(255,255,255,0.08)",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      position: "relative",
      zIndex: 2,
    },
    crossHorizontal: {
      position: "absolute",
      top: "50%",
      left: 0,
      right: 0,
      height: "1px",
      background: "rgba(255,255,255,0.06)",
      transform: "translateY(-0.5px)",
      zIndex: 1,
      pointerEvents: "none",
    },
    crossVertical: {
      position: "absolute",
      left: "50%",
      top: 0,
      bottom: 0,
      width: "1px",
      background: "rgba(255,255,255,0.06)",
      transform: "translateX(-0.5px)",
      zIndex: 1,
      pointerEvents: "none",
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
    <>
      <style>{`
        a[aria-label]:hover {
          background: rgba(255,255,255,0.03) !important;
          color: #ffffff !important;
        }
        .email-link:hover {
          color: #ffffff !important;
        }
      `}</style>

      <div style={styles.page}>
        <div style={styles.wrap}>
          <h1
            style={{
              ...styles.hero,
              letterSpacing: "0.08em",
              fontSize: "clamp(56px, 9vw, 110px)",
            }}
          >
            untitled.holdings
          </h1>
          <div style={styles.about}>
            Quietly building.
            <br />
            No Signal. Just execution.
          </div>

          <div style={styles.gridWrap}>
            <div style={styles.crossHorizontal} />
            <div style={styles.crossVertical} />

            <div style={styles.grid}>
              {companies.map((company, index) => (
                <CompanyCard key={company.name} company={company} index={index} />
              ))}
            </div>
          </div>

          <div style={styles.emailWrap}>
            <a
              href="mailto:hello@untitled.holdings"
              className="email-link"
              style={styles.email}
            >
              hello@untitled.holdings
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
