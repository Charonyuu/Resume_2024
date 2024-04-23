import Footer from "../components/home/Footer";
import ProjectList from "../components/home/ProjectList";
import Banner from "../components/home/Banner";
import Career from "../components/home/Career";
import AboutMe from "../components/home/AboutMe";
import Skills from "@/components/home/Skills";

export default function Home() {
  return (
    <>
      <Banner />
      <AboutMe />
      <Skills />
      <Career />
      <ProjectList />
      <Footer />
    </>
  );
}
