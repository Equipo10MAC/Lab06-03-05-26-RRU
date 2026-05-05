import Header from "./Components/Header/Header";
import Hero from "./Components/Header/Hero/Hero";
import Interests from "./Components/Header/Interests/Interests";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Interests />
      </main>
    </>
  );
}