import React, { useEffect, useState } from "react";
import VideoContainer from "./VideoContainer";
import MovieDescription from "./MovieDescription";
import { useSelector } from "react-redux";

export default function MainContainer() {
  const [randomNo, setRandomNo] = useState(0);
  const { data } = useSelector(({ movies }) => ({
    data: movies.nowPlaying,
  }));

  useEffect(() => {
    if (data) {
      setRandomNo(Math.floor(Math.random() * data.length));
    }
  }, [data]);

  return (
    <>
      {data && (
        <div>
          <MovieDescription
            title={data[randomNo]?.title}
            description={data[randomNo]?.overview}
          />
          <VideoContainer movieId={data[randomNo]?.id} />
        </div>
      )}
    </>
  );
}
