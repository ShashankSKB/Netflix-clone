import React from "react";
import { useSelector } from "react-redux";
import { countryCodesToNames } from "../Utils/Contants";

export default function WatchProvidersList({ title }) {
  const WatchProvidersData = useSelector(
    (store) => store.movies.watchProviders.results
  );

  const countries = WatchProvidersData && Object.keys(WatchProvidersData);

  return countries?.length > 0 ? (
    <div className="text-white w-[900px">
      <p className=" text-3xl mb-4">{title}</p>
      <div className="flex flex-col gap-2 divide-y divide-gray-400">
        {countries.map((country) => {
          if (WatchProvidersData[country]) {
            return (
              <div className="flex flex-row gap-3 " key={Math.random()}>
                <p> {countryCodesToNames[country]} 🌎</p>
                <a
                  href={WatchProvidersData[country].link}
                  target="_blank"
                  className="underline font-extralight"
                >
                  link 👈🏻
                </a>
              </div>
            );
          }
        })}
      </div>
    </div>
  ) : (
    countries?.length === 0 && (
      <div className="text-white">🥲 No Watch Providers Found</div>
    )
  );
}
