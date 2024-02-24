import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Lottie from "lottie-react";
import { Header } from "./components";
import { HomePage, AboutPage } from "./pages";
// import bgs from "./assests/animation/bgs.json";

function App() {
  // const style = {
  //   width: "100%",
  //   height: "100%",
  //   backgroundSize: "cover",
  //   // opacity: 0.5,
  //   zIndex: 30
  // };
  return (
    <div className="App">
      {/* <Lottie animationData={bgs} style={style}> */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
      {/* </Lottie> */}
    </div>
  );
}

export default App;
