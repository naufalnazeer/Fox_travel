import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import Layout from "./Component/Layout/Layout";
import { useLanguage } from "./i18n/LanguageContext";

function App() {
  const { lang } = useLanguage();

  useEffect(() => {
    AOS.init({ duration: 700, easing: "ease-out-cubic", once: true, offset: 60 });
  }, []);

  useEffect(() => {
    // Malayalam/English text lengths differ, which shifts layout — refresh AOS's
    // cached element offsets whenever the language (and therefore layout) changes.
    AOS.refresh();
  }, [lang]);

  return <Layout />;
}

export default App;
