export const mousePositionListener: Function = (
  element: HTMLCanvasElement,
  callback: Function
) => {
  const onMove = (e: MouseEvent): void => {
    callback(e);
  };

  element.addEventListener("mousemove", onMove);

  return (): void => {
    element.removeEventListener("mousemove", onMove);
  };
};
