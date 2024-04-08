import Header from "../components/home/Header";
import Footer from "../components/home/Footer";
import ProjectList from "../components/home/ProjectList";
import Banner from "../components/home/Banner";
import Career from "../components/home/Career";
import AboutMe from "../components/home/AboutMe";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <AboutMe />
      <Career />
      <ProjectList />
      <Footer />
    </>
  );
}
