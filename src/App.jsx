import { Routes, Route } from "react-router-dom";

// ==============================
// GLOBAL COMPONENTS
// ==============================
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import HelpButton from "./HelpButton/HelpButton";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

// ==============================
// HOME COMPONENTS
// ==============================
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import History from "./components/History/History";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import OurTeam from "./components/OurTeam/OurTeam";
import Testimonials from "./components/Testimonials/Testimonials";

// ==============================
// HOME BLOGS COMPONENT
// ==============================
import Blogs from "./components/Blogs/Blogs";

import Contact from "./components/Contact/Contact";
import CTA from "./components/CTA/CTA";
import Map from "./components/Location/Location";

// ==============================
// FAQ PAGE
// ==============================
import FAQ from "./Pages/FAQ/FAQ";

// ==============================
// INNER PAGES
// ==============================
import AboutDetails from "./Pages/AboutDetails/AboutDetails";
import ContactDetails from "./Pages/ContactDetails/ContactDetails";
import ServicesPage from "./Pages/Services/Services";

// ==============================
// BLOG PAGES
// ==============================
import BlogsPage from "./Pages/Blogs/Blogs";
import BlogDetails from "./components/BlogDetails/BlogDetails";

// ==============================
// 404
// ==============================
import NotFound from "./Pages/NotFound/NotFound";

// ======================================================
// HOME PAGE
// ======================================================

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <About />

        <Services />

        <WhyChooseUs />

        <History />

        <HowItWorks />

        <OurTeam />

        <Testimonials />

        {/* =========================================
            HOME BLOGS
            Only 3 blogs + View All Insights
        ========================================= */}
        <Blogs />

        <Contact />

        <CTA />

        <Map />
      </main>

      <Footer />

      <HelpButton />
    </>
  );
}

// ======================================================
// BLOGS PAGE
// ======================================================

function BlogsPageWrapper() {
  return (
    <>
      <Navbar />

      <BlogsPage />

      <Footer />

      <HelpButton />
    </>
  );
}

// ======================================================
// BLOG DETAILS PAGE
// ======================================================

function BlogDetailsPage() {
  return (
    <>
      <Navbar />

      <BlogDetails />

      <Footer />

      <HelpButton />
    </>
  );
}

// ======================================================
// ABOUT US PAGE
// ======================================================

function AboutUsPage() {
  return (
    <>
      <Navbar />

      <AboutDetails />

      <Footer />

      <HelpButton />
    </>
  );
}

// ======================================================
// CONTACT US PAGE
// ======================================================

function ContactPage() {
  return (
    <>
      <Navbar />

      <ContactDetails />

      <Footer />

      <HelpButton />
    </>
  );
}

// ======================================================
// SERVICES PAGE
// ======================================================

function ServicesPageWrapper() {
  return (
    <>
      <Navbar />

      <ServicesPage />

      <Footer />

      <HelpButton />
    </>
  );
}

// ======================================================
// FAQ PAGE
// ======================================================

function FAQPageWrapper() {
  return (
    <>
      <Navbar />

      <FAQ />

      <Footer />

      <HelpButton />
    </>
  );
}

// ======================================================
// APP
// ======================================================

function App() {
  return (
    <>
      {/* Global scroll reset / scroll-to-top */}
      <ScrollToTop />

      <Routes>
        {/* ================= HOME ================= */}
        <Route path="/" element={<Home />} />

        {/* ================= ABOUT US ================= */}
        <Route path="/about-us" element={<AboutUsPage />} />

        {/* ================= SERVICES ================= */}
        <Route path="/services" element={<ServicesPageWrapper />} />

        {/* ================= BLOGS ================= */}
        <Route path="/blogs" element={<BlogsPageWrapper />} />

        {/* ================= BLOG DETAILS ================= */}
        <Route path="/blog/:slug" element={<BlogDetailsPage />} />

        {/* ================= CONTACT US ================= */}
        <Route path="/contact-us" element={<ContactPage />} />

        {/* ================= FAQ ================= */}
        <Route path="/faq" element={<FAQPageWrapper />} />

        {/* ================= 404 ================= */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
