import React,{} from 'react';
import { useQuery } from '@apollo/client';
import Particles from "../components/Particles";
import Header from "../components/Header";

import { QUERY_PROFILES } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_PROFILES);
  const profiles = data?.profiles || [];

  return (
   <div>
      <Header/>
      <Particles/>
    </div>
  );
};

export default Home;
