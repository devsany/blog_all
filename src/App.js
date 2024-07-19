import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./mainComponent/Home";
import Blog from "./mainComponent/Blog";
import MainLink from "./AllNavLink/AppLink/MainLink";
import GeneralTheam from "./blogComponent/General Theme/GeneralTheam";
// import Tech from "./blogComponent/TECH/Programming/Tech";
import Travel from "./blogComponent/Travel/Travel";
import Lifestyle from "./blogComponent/Lifestyle/Lifestyle";
import PersonalDevelopment from "./blogComponent/PersonalDevelopment/PersonalDevelopment";
import CreativeWriting from "./blogComponent/Creative Writing/CreativeWriting";
import Login from "./Login/Login";
import GeneralTheamLogin from "./Login/componentForLogin/General Theme/GeneralTheamLogin";
// import TechLogin from "./Login/componentForLogin/TECH/Programming/TechLogin";
import TravelLogin from "./Login/componentForLogin/Travel/TravelLogin";
import LifestyleLogin from "./Login/componentForLogin/Lifestyle/LifestyleLogin";
import PersonalDevelopmentLogin from "./Login/componentForLogin/PersonalDevelopment/PersonalDevelopmentLogin";
import CreativeWritingLogin from "./Login/componentForLogin/Creative Writing/CreativeWritingLogin";
import "./bootstrap.css";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/blog/general_theme" element={<GeneralTheam />} />
          {/* <Route path="/blog/tech_&_Program" element={<Tech />} /> */}
          <Route path="/blog/travel" element={<Travel />} />
          <Route path="/blog/lifestyle" element={<Lifestyle />} />
          <Route
            path="/blog/personal_Development"
            element={<PersonalDevelopment />}
          />
          <Route path="/blog/creative_Writing" element={<CreativeWriting />} />

          <Route path="/login/general_theme" element={<GeneralTheamLogin />} />
          {/* <Route path="/login/tech_&_Program" element={<TechLogin />} /> */}
          <Route path="/login/travel" element={<TravelLogin />} />
          <Route path="/login/lifestyle" element={<LifestyleLogin />} />
          <Route
            path="/login/personal_Development"
            element={<PersonalDevelopmentLogin />}
          />
          <Route
            path="/login/creative_Writing"
            element={<CreativeWritingLogin />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
