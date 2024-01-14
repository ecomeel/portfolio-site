import "./App.scss";
import { Header } from "./components/header/Header";
import { Aside } from "./components/aside/Aside";
import { Content } from "./components/content/Content";

function App() {
    return (
        <>
            <Header />
            <Aside />
            <Content />
        </>
    );
}

export default App;
