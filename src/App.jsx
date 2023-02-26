import "./App.css";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Skill from "./components/Skill";

function App() {
  return (
    <>
      <header >
        <Nav/>
      </header>
      <main className="container">
        <section className="hero">
          <Hero/>
        </section>
        <div className="devicer"></div>
        <section className="skills" id="skill_tab">
          <Skill/>
        </section>
      </main>
      <footer className="container">

      </footer>
    </>
  );
}

export default App;
