import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./App.css";
import Video from "./Video";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get("/v2/posts");
      setVideos(response.data);

      return response;
    }
    fetchPosts();
  }, []);
  console.log(videos);
  return (
    <div className="app">
      <div className="app__videos">
        {videos.map((vid) => (
          <Video
            url={vid.url}
            channel={vid.channel}
            description={vid.description}
            song={vid.song}
            likes={vid.likes}
            shares={vid.shares}
            messages={vid.messages}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
