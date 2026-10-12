import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import Layout from "./Component/Layout/Layout";
import AdminRoutes from "./admin/AdminRoutes";
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

  return (
    <Routes>
      {/* The admin dashboard has its own sidebar layout — it deliberately
          bypasses the public site's Header/Footer/WhatsApp button. */}
      <Route path="/admin/*" element={<AdminRoutes />} />
      <Route path="/*" element={<Layout />} />
    </Routes>
  );
}

export default App;
