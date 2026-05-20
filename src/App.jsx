import React from "react";

export default function App() {
  const base = import.meta.env.BASE_URL;

  const projects = [
    {
      number: "01",
      title: "Self-Locking Rope Pulley",
      description: "3D printed cam block",
      image: `${base}images/self-locking-rope-pulley.jpg`,
      link: "#",
    },
    {
      number: "02",
      title: "Ultimate 18mm Corner Clamp",
      description: "3rd hand woodworking jig",
      image: `${base}images/ultimate-corner-clamp.jpg`,
      link: "#",
    },
    {
      number: "03",
      title: "Ignas Modular Box",
      description: "modular storage box",
      image: `${base}images/ignas-modular-box-main.jpg?v=10`,
      link: "#",
    },
  ];

  return (
    <main className="page">
      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          background: #07080d;
          font-family: Arial, Helvetica, sans-serif;
        }

        .page {
          min-height: 100vh;
          padding: 40px;
          background: #07080d;
        }

        .makerworld-section {
          width: 100%;
          padding: 80px 42px;
          border-radius: 36px;
          background:
            radial-gradient(circle at top right, rgba(255, 63, 63, 0.28), transparent 36%),
            linear-gradient(135deg, #120d13 0%, #1a0f14 52%, #09090d 100%);
          color: white;
          overflow: hidden;
        }

        .makerworld-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 30px;
          margin-bottom: 50px;
        }

        .makerworld-small-title {
          margin-bottom: 14px;
          font-size: 14px;
          font-weight: 900;
          letter-spacing: 6px;
          text-transform: uppercase;
          color: #ff9d9d;
        }

        .makerworld-title {
          margin: 0;
          font-size: clamp(42px, 6vw, 82px);
          line-height: 0.95;
          font-weight: 950;
          letter-spacing: -2px;
          color: #ffffff;
        }

        .makerworld-title span {
          color: #ff3f3f;
        }

        .makerworld-logo {
          width: 120px;
          height: auto;
          display: block;
          flex-shrink: 0;
        }

        .makerworld-layout {
          display: grid;
          grid-template-columns: 0.9fr 1.45fr;
          gap: 44px;
          align-items: start;
        }

        .makerworld-description {
          max-width: 580px;
          margin: 0;
          font-size: 21px;
          line-height: 1.55;
          color: #c8c8d5;
        }

        .makerworld-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-top: 34px;
          padding: 20px 30px;
          border-radius: 18px;
          background: #ff3f3f;
          color: #ffffff;
          font-size: 18px;
          font-weight: 900;
          text-decoration: none;
        }

        .makerworld-badge {
          width: fit-content;
          margin-top: 16px;
          padding: 16px 22px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.07);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: #dedee8;
          font-weight: 800;
        }

        .makerworld-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .makerworld-card {
          min-height: 570px;
          display: flex;
          flex-direction: column;
          padding: 18px;
          border-radius: 28px;
          background:
            linear-gradient(180deg, rgba(255, 74, 74, 0.18), rgba(255, 74, 74, 0.04)),
            rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 120, 120, 0.2);
          box-shadow: 0 24px 70px rgba(0, 0, 0, 0.25);
          overflow: hidden;
        }

        .project-image-wrap {
          width: 100%;
          height: 320px;
          border-radius: 20px;
          overflow: hidden;
          background: #111111;
        }

        .project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
        }

        .project-info {
          position: relative;
          padding-top: 24px;
          padding-right: 56px;
        }

        .project-info h3 {
          margin: 0;
          font-size: 24px;
          line-height: 1.08;
          font-weight: 950;
          color: #ffffff;
        }

        .project-info p {
          margin: 12px 0 0;
          font-size: 17px;
          line-height: 1.35;
          color: #b7b8c8;
        }

        .project-number {
          position: absolute;
          top: 22px;
          right: 0;
          width: 46px;
          height: 46px;
          border-radius: 16px;
          display: grid;
          place-items: center;
          background: rgba(255, 63, 63, 0.22);
          color: #ffd1d1;
          font-size: 16px;
          font-weight: 950;
        }

        .project-link {
          margin-top: auto;
          padding-top: 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          color: #ffb4b4;
          font-size: 16px;
          font-weight: 900;
          text-decoration: none;
        }

        .project-link:hover {
          color: white;
        }

        @media (max-width: 1100px) {
          .makerworld-layout {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 850px) {
          .page {
            padding: 18px;
          }

          .makerworld-section {
            padding: 54px 22px;
            border-radius: 26px;
          }

          .makerworld-header {
            flex-direction: column-reverse;
          }

          .makerworld-logo {
            width: 100px;
          }

          .makerworld-cards {
            grid-template-columns: 1fr;
          }

          .makerworld-card {
            min-height: auto;
          }

          .project-image-wrap {
            height: 280px;
          }
        }
      `}</style>

      <section className="makerworld-section">
        <div className="makerworld-header">
          <div>
            <div className="makerworld-small-title">MakerWorld</div>

            <h1 className="makerworld-title">
              Projekty Ign3d <br />
              <span>na MakerWorld</span>
            </h1>
          </div>

          <img
            className="makerworld-logo"
            src={`${base}images/ign3d-logo.png?v=10`}
            alt="Ign3d logo"
          />
        </div>

        <div className="makerworld-layout">
          <div>
            <p className="makerworld-description">
              Publikujemy modele 3D, organizery, części użytkowe oraz projekty
              tworzone dla społeczności makerów.
            </p>

            <a className="makerworld-button" href="#">
              Zobacz profil MakerWorld
            </a>

            <div className="makerworld-badge">
              Official MakerWorld Creator
            </div>
          </div>

          <div className="makerworld-cards">
            {projects.map((project) => (
              <article className="makerworld-card" key={project.number}>
                <div className="project-image-wrap">
                  <img
                    className="project-image"
                    src={project.image}
                    alt={project.title}
                  />
                </div>

                <div className="project-info">
                  <span className="project-number">{project.number}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>

                <a className="project-link" href={project.link}>
                  Zobacz na MakerWorld
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
