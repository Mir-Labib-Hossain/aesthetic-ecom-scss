import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";

type Props = {};

const App = (props: Props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="teams" element={<Teams />}>
          <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
