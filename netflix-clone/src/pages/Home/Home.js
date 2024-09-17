import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Banner from "../../Banner/Banner";
import Row from "../../components/Rows/Row/Row";
import requests from "../../utils/requests";

function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="TV Shows" fetchUrl={requests.fetchDocumentaries}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>

      <Footer />
    </div>
  );
}

export default Home;
