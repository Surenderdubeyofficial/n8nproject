import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import ContactHeader from "./components/ContactHeader/ContactHeader.jsx";
import Button from "./components/Button/Button.jsx";
import ContactForm from "./components/ContactForm/ContactForm.jsx";
const App = () => {
  return (
    <div>
      <Navbar />
      <ContactHeader />
      <ContactForm />
    </div>
  );
};
export default App;