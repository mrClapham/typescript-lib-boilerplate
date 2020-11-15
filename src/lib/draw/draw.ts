export interface drawFunctionInterface {
  play: Function;
  pause: Function;
}

const draw = (render: Function): drawFunctionInterface => {
  let request: number;

  const performAnimation = (): void => {
    request = requestAnimationFrame(performAnimation);
    //animate something
    render();
  };
  requestAnimationFrame(performAnimation);

  const play: Function = (): void => {
    requestAnimationFrame(performAnimation);
  };

  const pause: Function = (): void => {
    window.cancelAnimationFrame(request);
  };

  return { play, pause };
};

export { draw };
