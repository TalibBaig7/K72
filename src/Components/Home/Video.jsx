// import React from "react";

// const Video = () => {
//   return (
//     <div className="h-full w-full">
//       <video
//         className="h-full w-full object-cover"
//         autoPlay
//         loop
//         muted
//         src="/video.mp4"
//       ></video>
//     </div>
//   );
// };

// export default Video;
import React from "react";

const Video = () => {
  return (
    <video
      className="h-full w-full object-cover"
      autoPlay
      loop
      muted
      playsInline
    >
      <source src="/videos/video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default Video;
