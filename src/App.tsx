import "./App.scss";
import { Header } from "./components/header/Header";
import { Aside } from "./components/aside/Aside";
import { Content } from "./components/content/Content";
import { Footer } from "components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Aside />
      <Content />
      <Footer />
    </>
  );
}

export default App;
