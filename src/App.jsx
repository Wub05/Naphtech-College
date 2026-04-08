import COCTraining from "./components/COCTraining";
import Footer from "./components/Footer";
import Header from "./components/header";
import HomePage from "./components/Homepage";
import Services from "./components/Services";
import StartNow from "./components/StartNow.jsx";
import WhyUs from "./components/WhyUs.jsx";
import FAQ from "./components/FAQ.jsx";
import Language from "./components/Language.jsx";
import ContactUs from "./components/ContactUs.jsx";
const App = () => {
  return (
    <>
      <Header />
      <HomePage />
      <COCTraining />
      <Services />
      <WhyUs />
      <StartNow />
      <Language />
      <FAQ />
      <ContactUs />
      <Footer />
    </>
  );
};
// bg-gradient-to-br from-[#93C6FF] via-[#A981FF] to-[#538FF7]

export default App;
