import Header from "./(home)/Header";
import Footer from "./(home)/Footer";
import ProjectList from "./(home)/ProjectList";
import Banner from "./(home)/Banner";
import Career from "./(home)/Career";
import AboutMe from "./(home)/AboutMe";

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
