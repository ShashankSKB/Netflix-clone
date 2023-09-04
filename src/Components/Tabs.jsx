import { useState } from "react";
import { Tab } from "@headlessui/react";
import WatchProvidersList from "./WatchProvidersList";
import MovieTrailers from "./MovieTrailers";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function CustomTabs() {
  let [categories] = useState({
    OverView: [
      {
        id: 1,
        title: "Does drinking coffee make you smarter?",
        date: "5h ago",
        commentCount: 5,
        shareCount: 2,
        children: <MovieTrailers />,
      },
    ],
    "Watch Providers": [
      {
        id: 1,
        title: "Is tech making coffee better or worse?",
        date: "Jan 7",
        commentCount: 29,
        shareCount: 16,
        children: <WatchProvidersList></WatchProvidersList>,
      },
    ],
  });

  return (
    <div className=" px-2 py-16 ">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                  selected ? "bg-white shadow" : "text-blue-100 ]"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "rounded-xl",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
              )}
            >
              <ul>
                {posts.map((post) => (
                  <li key={post.id} className="relative rounded-md p-3 ">
                    {post.children}
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
