import React from "react";

export default function YtVideoPlayer({ Videkey }) {
  return (
    <div>
      <iframe
        width="200"
        height="200"
        src={`https://www.youtube.com/embed/${Videkey}?si=6pKvpODlL7K9Qju0`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}
