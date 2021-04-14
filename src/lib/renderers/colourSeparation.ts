const colourSeparation = (images:string[] = []):Function => (canvas: HTMLCanvasElement) => {
    const context: CanvasRenderingContext2D = canvas.getContext("2d");


console.log(images[0])
            //Loading of the home test image - img1
            const img1 = new Image();

            //drawing of the test image - img1
            img1.onload = function () {
                //draw background image
                context.drawImage(img1, 0, 0);
                //draw a box over the top
                context.fillStyle = "rgba(200, 0, 0, 0.5)";
                context.fillRect(0, 0, 500, 500);
    
            };
    
            img1.src = images[0];
}

export { colourSeparation }