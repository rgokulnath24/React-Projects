import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
  const title = "GNR Tech";
  const sidebar = [
    { id: 1, Title: "Home"},
    { id: 2, Title: "About"},
    { id: 3, Title: "Services"},
    { id: 4, Title: "Contact"}
  ];
  const content = "Web Development Softwares";
  const content_inside = `At our company, we specialize in delivering cutting-edge web development software solutions tailored to meet the specific goals of your business. We understand that every organization is unique, which is why we offer highly customizable and scalable tools that help you build, manage, and grow your digital presence with ease. Our focus is on creating seamless, responsive, and user-friendly applications that engage your customers and deliver real results.

  Whether you're a startup, small business, or an established enterprise, our solutions are designed to support your journey through every stage of development. From initial concept and design to deployment and ongoing support, we ensure high performance, security, and functionality in everything we build. We utilize the latest technologies and frameworks to keep your software modern and competitive.

  With a team of skilled developers, designers, and strategists, we are committed to driving innovation and helping you stay ahead in an ever-evolving digital landscape. Partner with us and transform your ideas into powerful, result-driven web applications that make a lasting impact.`;


  const footer = (
  <p>
    © {new Date().getFullYear()} Design by Gokul |{" "}
    <a href="https://www.linkedin.com/in/gokulnath-webdev/" target="_blank" rel="noopener noreferrer">
      LinkedIn
    </a>
  </p>
);


  return (
    <>
      <Header data={title} />
      <div className="main-layout">
        <Sidebar data={sidebar} />
        <Content data={content} fulldata={content_inside} />
      </div>
      <Footer data={footer} />
    </>
  );
}

export default App;
