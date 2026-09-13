import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import History from "./components/History/History";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import OurTeam from "./components/OurTeam/OurTeam";
import Testimonials from "./components/Testimonials/Testimonials";
import CTA from "./components/CTA/CTA";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import HelpButton from "./HelpButton/HelpButton";
import Map from "./components/Location/Location";

import Blogs from "./components/Blogs/Blogs";
import BlogDetails from "./components/BlogDetails/BlogDetails";

import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

// ========================================
// HOME PAGE
// ========================================

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <History />
      <HowItWorks />
      <OurTeam />
      <Testimonials />
      <Blogs />
      <Contact />
      <CTA />
      <Map />
      <Footer />
      <HelpButton />
    </>
  );
}

// ========================================
// BLOGS PAGE
// ========================================

function BlogsPage() {
  return (
    <>
      <Navbar />

      <main className="blogs-page">
        <Blogs />
      </main>
    </>
  );
}

// ========================================
// APP
// ========================================

function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        {/* ================================
            HOME
        ================================= */}

        <Route path="/" element={<Home />} />

        {/* ================================
            ALL BLOGS
        ================================= */}

        <Route path="/blogs" element={<BlogsPage />} />

        {/* ================================
            SINGLE BLOG
        ================================= */}

        <Route path="/blog/:slug" element={<BlogDetails />} />
      </Routes>
    </>
  );
}

export default App;
