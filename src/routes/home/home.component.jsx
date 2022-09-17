import { Outlet } from "react-router-dom";

import Directory from "../../components/directory/directory.component";

import {HomeContainer} from "./home.styles";

const Home = () => {

  return (
    <HomeContainer>
    <Directory 
    />
    <Outlet />
    </HomeContainer>
  );
}

export default Home;