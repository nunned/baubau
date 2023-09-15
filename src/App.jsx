// App.jsx
import "./App.css";
import HomePage from "./components/pages/homepage";
import TermsOfServicePage from "./components/pages/TermsOfServicePage";
import PrivacyPolicyPage from "./components/pages/PrivacyPolicyPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

