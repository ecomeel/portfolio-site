// import { register } from "swiper/element/bundle";

import "./App.scss";
import { Header } from "./components/header/Header";
import { Content } from "./components/content/Content";
import { Footer } from "components/footer/Footer";

function App() {
  // register()
  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
}

export default App;
