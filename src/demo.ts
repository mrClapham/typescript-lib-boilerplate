import { simpleCircleRenderer, colourSeparation, simpleMouseTrack } from "lib/renderers";
import { renderFactory } from "lib/factories";
document.addEventListener("DOMContentLoaded", () => {
  //simpleMouseTrack("rootMouseTrack");

  // const { play, pause } = renderFactory(colourSeparation(['img/blue.png','two']))(
  //   "root",
  //   100,
  //   100,
  //   true
  // );

  // const { play, pause } = renderFactory(simpleCircleRenderer)(
  //   "root",
  //   100,
  //   100,
  //   true
  // );

  //console.log("renderFactory ", fact);

  const { pause, play } = simpleMouseTrack("root");
  setTimeout(pause, 4000);
  setTimeout(play, 6000);
});
