import React, { useState } from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact";
import ContactForm from "./pages/ContactForm";
import Footer from "./Footer";








export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

 
  // checking each condition to see what page we are on , then rendering that page, otherwise rendering the contact form
  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Projects") {
      return <Projects />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "ContactForm") return <ContactForm />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <div>
      {/* the handlepage function is what were using as prop */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      </div>
      <Footer />
    </div>
  );
}
