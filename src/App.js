import {
  Experience,
  Footer,
  Header,
  Nav,
  About,
  Services,
  Portfolio,
  // Testimonials,
  Contact,
} from "./components";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </>
  );
}

export default App;
