import React, { useEffect, useState } from "react";
import SearchForm from "../Components/Form/SearchForm";
import ExpCard from "../Components/Card/ExpCard";
import { Link } from "react-router-dom";
import HomeCard from "../Components/Card/HomeCard";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allExp, setAllExp] = useState([]);

  useEffect(() => {
    fetch("expdata.json")
      .then((res) => res.json())
      .then((data) => {
        setAllExp(data);
      });
  }, []);

  return (
    <div className="md:flex justify-center gap-10 px-6 md:px-10 lg:px-20">
      <div className="mt-4">
        <SearchForm />
      </div>

      <div className="flex-1">
        <div>
          <div className="flex justify-between px-4 mt-10">
            <h2 className="text-xl font-bold">Homes</h2>
            <Link to="/coming-soon">
              <p>See All</p>
            </Link>
          </div>
          <div className="container pb-8 pt-2 mx-auto">
            <div className="flex flex-wrap">
              {[...Array(3)].map((exp, i) => (
                <HomeCard />
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="flex justify-between px-4">
            <h2 className="text-xl font-bold">Experience</h2>
            <Link to="/coming-soon">
              <p>See All</p>
            </Link>
          </div>
          <div className="container pb-8 pt-2 mx-auto">
            <div className="flex flex-wrap">
              {allExp.slice(0, 4).map((exp, i) => (
                <ExpCard key={i} exp={exp}></ExpCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
