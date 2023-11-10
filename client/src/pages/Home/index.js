import React,{useRef, useEffect,useCallback } from 'react';
import { useQuery } from '@apollo/client';
import Particles from "../../components/Particles/index";
import Header from "../../components/Header/index";
import "./Home.css";
import { QUERY_PROFILES } from '../../utils/queries';
import Navigation from '../../components/Navigation';

const Home = () => {
  const { loading, data } = useQuery(QUERY_PROFILES);
  const profiles = data?.profiles || [];

  const ref = useRef();
  // The scroll listener
  const handleScroll = useCallback(() => {
    console.log("scrolling")
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementById("navbar").style.padding = "30px 10px";
      document.getElementById("logo").style.fontSize = "25px";
    } else {
      document.getElementById("navbar").style.padding = "80px 10px";
      document.getElementById("logo").style.fontSize = "35px";
    }
  }, [])

  // Attach the scroll listener to the div
  useEffect(() => {
    const div = ref.current
    div.addEventListener("scroll", handleScroll)
  }, [handleScroll])

  return (
   <div className="scrollableContainer" ref={ref}>
      <Header/>
      <Particles/>
      <Navigation /> 
    </div>
  );
};

export default Home;
