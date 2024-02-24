/* eslint-disable react/function-component-definition */
// HomePage.tsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import Lottie from "lottie-react";
import { MainLayout } from "../layouts";
import constants from "../utils/constants";
import Card from "../components/core/Card/Card";
import Pagination from "../components/core/pagination/Pagination";

import about from "../assests/animation/about.json";

const PAGE_SIZE = 10;

const HomePage: React.FC = () => {
  const style = {
    width: "60%",
    height: "60%",
    marginTop: "5rem",
    marginLeft: "20rem",
    alignItems: "center" // Note: 'alienItems' corrected to 'alignItems'
  };

  const mediaQueryStyle = {
    "@media screen and (max-width: 768px)": {
      alignItems: "center",
      width: "80%", // Adjust width for smaller screens
      height: "80%", // Adjust height for smaller screens
      marginTop: "5rem",
      marginLeft: "5rem"
    }
  };
  const mergedStyle = {
    ...style,
    ...mediaQueryStyle["@media screen and (max-width: 768px)"]
  };

  const [planets, setPlanets] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  // const container = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(constants.API_URL, {
          params: {
            page: currentPage,
            pageSize: PAGE_SIZE
          }
        });
        setPlanets(response.data.results);
        setTotalPages(Math.ceil(response.data.count / PAGE_SIZE));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching planets", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [currentPage]);
  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleDataFromCard = (data: any) => {
    console.log("Data received from Card component:", data);
  };

  return (
    <MainLayout>
      {loading ? (
        <Lottie animationData={about} style={mergedStyle} download="lazy" />
      ) : (
        <div>
          <Card data={planets} onDataReceived={handleDataFromCard} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onNextPage={handleNextPage}
            onPreviousPage={handlePreviousPage}
          />
        </div>
      )}
    </MainLayout>
  );
};

export default HomePage;
