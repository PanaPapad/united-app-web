import "./Home.scss";

export default function Home() {
  return (
    <main className="home">
      <span className="home__badge">🔴</span>
      <h1 className="home__title">Manchester United</h1>
      <hr className="home__divider" />
      <p className="home__subtitle">The Theatre of Dreams</p>
      <div className="home__coming-soon">More coming soon</div>
    </main>
  );
}
