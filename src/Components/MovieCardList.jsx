import React from "react";
import MovieCard from "./MovieCard";

export default function MovieCardList({ data, title }) {
  return (
    <>
      {data && data?.length > 0 && (
        <div className="p-4 text-white">
          <p className="text-lg mb-1">{title}</p>
          <div className="overflow-scroll flex flex-row gap-1">
            {data.map((e) => {
              return (
                <MovieCard
                  posterPath={e.poster_path}
                  movieId={e.id}
                  overview={e.overview}
                  title={e.title}
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
