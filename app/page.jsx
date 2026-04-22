function Wordmark({ name }) {
  const wrapStyle = {
    width: "220px",
    height: "72px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "currentColor",
  };

  if (name === "Vendify") {
    return (
      <div style={wrapStyle}>
        <svg viewBox="0 0 320 100" style={{ width: "220px", height: "62px", display: "block" }} fill="none">
          <text
            x="160"
            y="62"
            textAnchor="middle"
            fill="currentColor"
            fontSize="42"
            fontWeight="700"
            letterSpacing="4"
            style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
          >
            VENDIFY
          </text>
        </svg>
      </div>
    );
  }

  if (name === "LOOT") {
    return (
      <div style={wrapStyle}>
        <svg viewBox="0 0 320 100" style={{ width: "220px", height: "62px", display: "block" }} fill="none">
          <g fill="currentColor">
            <text
              x="160"
              y="64"
              textAnchor="middle"
              fontSize="54"
              fontWeight="700"
              letterSpacing="2"
              style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
            >
              LOOT
            </text>
          </g>
        </svg>
      </div>
    );
  }

  if (name === "Ingles de Colores") {
    return (
      <div style={wrapStyle}>
        <svg viewBox="0 0 320 110" style={{ width: "220px", height: "68px", display: "block" }} fill="none">
          <text
            x="160"
            y="42"
            textAnchor="middle"
            fill="currentColor"
            fontSize="20"
            fontWeight="700"
            letterSpacing="5"
            style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
          >
            INGLES DE
          </text>
          <text
            x="160"
            y="74"
            textAnchor="middle"
            fill="currentColor"
            fontSize="20"
            fontWeight="700"
            letterSpacing="5"
            style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
          >
            COLORES
          </text>
        </svg>
      </div>
    );
  }

  return (
    <div style={wrapStyle}>
      <svg viewBox="0 0 320 100" style={{ width: "220px", height: "58px", display: "block" }} fill="none">
        <text
          x="160"
          y="62"
          textAnchor="middle"
          fill="currentColor"
          fontSize="40"
          fontWeight="500"
          letterSpacing="1"
          style={{ fontFamily: '"Times New Roman", Georgia, serif', fontStyle: "italic" }}
        >
          CoffeeTAB
        </text>
      </svg>
    </div>
  );
}

function CompanyCard({ company, index }) {
  const borderRight = index % 2 === 0 ? "1px solid rgba(255,255,255,0.08)" : "none";
  const borderBottom = index < 2 ? "1px solid rgba(255,255,255,0.08)" : "none";

  return (
    <a
      href={company.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={company.name}
      className="company-card fade-up"
      style={{
        height: "188px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "rgba(255,255,255,0.86)",
        textDecoration: "none",
        borderRight,
        borderBottom,
        position: "relative",
        zIndex: 2,
      }}
    >
      <Wordmark name={company.name} />
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
      background: "#000000",
      color: "#ffffff",
      padding: "80px 24px",
      fontFamily: 'Inter, Arial, Helvetica, sans-serif',
    },
    wrap: {
      minHeight: "100vh",
      maxWidth: "1120px",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    hero: {
      textAlign: "center",
      fontSize: "clamp(42px, 7vw, 88px)",
      lineHeight: 1,
      letterSpacing: "0.12em",
      margin: 0,
      fontWeight: 400,
      textTransform: "lowercase",
      fontFamily: '"Times New Roman", Georgia, serif',
      color: "rgba(255,255,255,0.96)",
    },
    about: {
      marginTop: "52px",
      textAlign: "center",
      fontSize: "22px",
      lineHeight: 1.55,
      color: "rgba(255,255,255,0.56)",
      fontFamily: '"Times New Roman", Georgia, serif',
    },
    gridWrap: {
      marginTop: "78px",
      width: "100%",
      maxWidth: "920px",
      position: "relative",
      border: "1px solid rgba(255,255,255,0.08)",
      background: "rgba(255,255,255,0.01)",
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
      background: "rgba(255,255,255,0.05)",
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
      background: "rgba(255,255,255,0.05)",
      transform: "translateX(-0.5px)",
      zIndex: 1,
      pointerEvents: "none",
    },
    emailWrap: {
      marginTop: "72px",
      textAlign: "center",
    },
    email: {
      color: "rgba(255,255,255,0.68)",
      textDecoration: "none",
      fontSize: "18px",
      letterSpacing: "0.02em",
      fontFamily: 'Inter, Arial, Helvetica, sans-serif',
    },
  };

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-up {
          opacity: 0;
          animation: fadeUp 900ms ease forwards;
        }

        .fade-delay-1 { animation-delay: 120ms; }
        .fade-delay-2 { animation-delay: 240ms; }
        .fade-delay-3 { animation-delay: 360ms; }

        .company-card {
          transition:
            background 220ms ease,
            color 220ms ease,
            transform 220ms ease;
        }

        .company-card:hover {
          background: rgba(255,255,255,0.03);
          color: #ffffff;
          transform: translateY(-1px);
        }

        .email-link {
          transition: color 220ms ease, opacity 220ms ease;
        }

        .email-link:hover {
          color: #ffffff !important;
        }

        @media (max-width: 700px) {
          .portfolio-grid {
            grid-template-columns: 1fr !important;
          }

          .portfolio-grid .company-card {
            border-right: none !important;
            border-bottom: 1px solid rgba(255,255,255,0.08) !important;
          }

          .portfolio-grid .company-card:last-child {
            border-bottom: none !important;
          }

          .grid-cross {
            display: none !important;
          }
        }
      `}</style>

      <div style={styles.page}>
        <div style={styles.wrap}>
          <h1 style={styles.hero} className="fade-up">
            untitled.holdings
          </h1>

          <div style={styles.about} className="fade-up fade-delay-1">
            Quietly building.
            <br />
            No Signal. Just execution.
          </div>

          <div style={styles.gridWrap} className="fade-up fade-delay-2">
            <div style={styles.crossHorizontal} className="grid-cross" />
            <div style={styles.crossVertical} className="grid-cross" />

            <div style={styles.grid} className="portfolio-grid">
              {companies.map((company, index) => (
                <CompanyCard key={company.name} company={company} index={index} />
              ))}
            </div>
          </div>

          <div style={styles.emailWrap} className="fade-up fade-delay-3">
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
