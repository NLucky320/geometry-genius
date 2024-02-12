// triangleArea calculation
function calculateTriangleArea() {
  const triangleBaseInput = document.getElementById("triangle-base");
  const triangleBaseText = triangleBaseInput.value;
  const triangleBase = parseFloat(triangleBaseText);

  const triangleHeightInput = document.getElementById("triangle-height");
  const triangleHeightText = triangleHeightInput.value;
  const triangleHeight = parseFloat(triangleHeightText);

  const triangleArea = 0.5 * triangleBase * triangleHeight;

  const triangleAreaSpan = document.getElementById("triangle-area");
  triangleAreaSpan.innerText = triangleArea;
}

// rectangleArea calculation
function calculateRectangleArea() {
  const rectangleWidthInput = document.getElementById("rectangle-width");
  const rectangleWidthText = rectangleWidthInput.value;
  const rectangleWidth = parseFloat(rectangleWidthText);

  const rectangleLengthInput = document.getElementById("rectangle-length");
  const rectangleLengthText = rectangleLengthInput.value;
  const rectangleLength = parseFloat(rectangleLengthText);

  const rectangleArea = rectangleWidth * rectangleLength;

  const rectangleAreaSpan = document.getElementById("rectangle-area");
  rectangleAreaSpan.innerText = rectangleArea;
}

// ParallelogramArea Calculation
function calculateParallelogramArea() {
  const parallelogramBaseInput = document.getElementById("parallelogram-base");
  const parallelogramBaseText = parallelogramBaseInput.value;
  const parallelogramBase = parseFloat(parallelogramBaseText);

  const parallelogramHeightInput = document.getElementById(
    "parallelogram-height"
  );
  const parallelogramHeightText = parallelogramHeightInput.value;
  const parallelogramHeight = parseFloat(parallelogramHeightText);

  const parallelogramArea = parallelogramBase * parallelogramHeight;

  const parallelogramAreaSpan = document.getElementById("parallelogram-area");
  parallelogramAreaSpan.innerText = parallelogramArea;
}
