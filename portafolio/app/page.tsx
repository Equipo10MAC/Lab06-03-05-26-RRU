import Header from "./Components/Header/Header";
import Hero from "./Components/Header/Hero/Hero";
import Interests from "./Components/Header/Interests/Interests";
import CV from "./Components/Header/CV/CV";
import Projects from "./Components/Projects/Projects";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Interests />
        <CV />
        <Projects />
      </main>
    </>
  );
}