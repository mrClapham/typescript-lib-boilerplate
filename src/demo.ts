import { simpleMouseTrack } from "./index";
document.addEventListener("DOMContentLoaded", () => {
  simpleMouseTrack("rootMouseTrack");

  const { pause, play } = simpleMouseTrack("root");
  setTimeout(pause, 4000);
  setTimeout(play, 6000);
});
