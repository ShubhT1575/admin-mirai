import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import Sidebar from "../Sidebar";
import DashboardMain from "../Dashboard/DashboardMain";
import StakeMain from "../Stake/StakeMain";
import IncomeMain from "../IncomeGraph/IncomeMain";
// import WithdrawMain from "../Withdrawal/WithdrawMain";
// import FormMAin from "../Form/FormMAin";
import ProfileMain from "../Profile/ProfileMain";
import SupportMain from "../Support/SupportMain";
import MatrixMain from "../Matrix/MatrixMain";
import CoreMain from "../CoreIncome/CoreMain";
import GlobalMain from "../GlobalIncome/GlobalMain";
import FortuneMain from "../FortuneIncome/FortuneMain";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import RankingMain from "../GlobalRanking/RankingMain";
import LapseMain from "../Dashboard/LapseWallet/LapseMain";
import Support from "../SupportSystem/Support";
import Home from "../Landing/Home";
import LearnMore from "../Landing/LearnMore";
import Terms from "../Terms";
import AutoMain from "../AutoGlobal/AutoMain";
import RankMain from "../RankReward/RankMain";
// import WithdrawMain from "../Withdrawal /WithdrawMain";
import MatrixTree from "../MatrixTree/MatrixTree";
import MatrixTreeUw2 from "../MatrixTreeUw2/MatrixTreeUw2";
import MatrixTreeUw1 from "../MatrixTreeUw1/MatrixTreeUw1";
import MatrixTreeUw from "../MatrixTreeUw/MatrixTreeUw";
import MatrixTreeUw4 from "../MatrixTreeUw4/MatrixTreeUw4";
import MatrixTreeUw5 from "../MatrixTreeUw5/MatrixTreeUw5";
import MatrixTreeAll from "../MatrixTreeAll/MatrixTreeAll";
import MAtrixTreeUw6 from "../MatrixTreeUw6/MAtrixTreeUw6"; 
import LevelIncome from "../LevelIncome/LevelIncome";


const Layout = ({ children }) => {
  const location = useLocation();
  const hideHeaderFooterSidebar = [
    "/learnmore",
    "/",
    "/SignIn", 
    "/Terms",
    "/SignUp",
  ].includes(location.pathname);

  return (
    <>
      {!hideHeaderFooterSidebar && <Header />}
      {!hideHeaderFooterSidebar && <Sidebar />}
      {children}
      {/* {!hideHeaderFooterSidebar && <Footer />} */}
    </>
  );
};

const AppRoutes = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<SignIn />} />
          {/* <Route path="/learnmore" element={<LearnMore />} /> */}
          {/* <Route path="/SignUp" element={<SignUp />} /> */}
          <Route path="/Dashboard" element={<DashboardMain />} />
          {/* <Route path="/Level" element={<StakeMain />} /> */}
          {/* <Route path="/IncomeGraph" element={<IncomeMain />} />  */}
          {/* <Route path="/Stake" element={<StakeMain />} /> */}
          {/* <Route path="/Form" element={<FormMAin />} /> */}
          <Route path="/CoreIncome" element={<CoreMain />} />
          {/* <Route path="/GlobalIncome" element={<GlobalMain />} /> */}
          <Route path="/FortuneIncome" element={<FortuneMain />} />
          {/* <Route path="/Ranking" element={<RankingMain />} /> */}
          {/* <Route path="/Profile" element={<ProfileMain />} /> */}
          {/* <Route path="/Support" element={<Support />} /> */}
          {/* <Route path="/Matrix" element={<MatrixMain />} /> */}
          <Route path="/LevelIncome" element={<LevelIncome />} />
          <Route path="/MatrixTreeUw6" element={<MAtrixTreeUw6 />} />
          <Route path="/MatrixTreeUw5" element={<MatrixTreeUw5 />} />
          <Route path="/MatrixTreeUw4" element={<MatrixTreeUw4 />} />
          <Route path="/MatrixTree" element={<MatrixTree />} />
          <Route path="/MatrixTreeUw2" element={<MatrixTreeUw2 />} />
          <Route path="/MatrixTreeUw1" element={<MatrixTreeUw1 />} />
          <Route path="/MatrixTreeUw" element={<MatrixTreeUw />} />
          {/* <Route path="/MatrixTreeAll" element={<MatrixTreeAll />} /> */}
          {/* <Route path="/LapseWallet" element={<LapseMain />} /> */}
          {/* <Route path="/AutoGlobal" element={<AutoMain />} /> */}
          <Route path="/RankReward" element={<RankMain />} />
          {/* <Route path="/Withdraw" element={<WithdrawMain />} /> */}
          <Route path="/Terms" element={<Terms />} />
          {/* <Route path="/SignIn" element={<SignIn />} /> */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRoutes;
