const createCanvas = (
  target: string,
  width: number = 300,
  height: number = 300,
  sizeToParent: boolean = true,
  optClassName: string | null = null
): HTMLCanvasElement | null => {
  let canvas: HTMLCanvasElement;
  const d: HTMLDivElement = document.querySelector(`#${target}`);
  const parentWidth = d.getBoundingClientRect().width;
  const parentHeight = d.getBoundingClientRect().height;
  console.log("parentWidth ", parentWidth);
  console.log("parentHeight ", parentHeight);
  if (d) {
    canvas = document.createElement("canvas") as HTMLCanvasElement;
    console.log("canvas ", canvas);
    canvas.width = sizeToParent ? parentWidth : width;
    canvas.height = sizeToParent ? parentHeight : height;
    canvas.style.position = "relative";
    canvas.style.top = "0";
    canvas.style.left = "0";
    if (optClassName) {
      canvas.className = optClassName;
    }
    d.appendChild(canvas);
  }
  return canvas ? canvas : null;
};

export { createCanvas };
