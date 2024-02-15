// triangleArea calculation
// function calculateTriangleArea() {
//   const triangleBaseInput = document.getElementById("triangle-base");
//   const triangleBaseText = triangleBaseInput.value;
//   const triangleBase = parseFloat(triangleBaseText);

//   const triangleHeightInput = document.getElementById("triangle-height");
//   const triangleHeightText = triangleHeightInput.value;
//   const triangleHeight = parseFloat(triangleHeightText);

//   const triangleArea = 0.5 * triangleBase * triangleHeight;

//   const triangleAreaSpan = document.getElementById("triangle-area");
//   triangleAreaSpan.innerText = triangleArea;
// }

// // rectangleArea calculation
// function calculateRectangleArea() {
//   const rectangleWidthInput = document.getElementById("rectangle-width");
//   const rectangleWidthText = rectangleWidthInput.value;
//   const rectangleWidth = parseFloat(rectangleWidthText);

//   const rectangleLengthInput = document.getElementById("rectangle-length");
//   const rectangleLengthText = rectangleLengthInput.value;
//   const rectangleLength = parseFloat(rectangleLengthText);

//   const rectangleArea = rectangleWidth * rectangleLength;

//   const rectangleAreaSpan = document.getElementById("rectangle-area");
//   rectangleAreaSpan.innerText = rectangleArea;
// }

// // ParallelogramArea Calculation
// function calculateParallelogramArea() {
//   const parallelogramBaseInput = document.getElementById("parallelogram-base");
//   const parallelogramBaseText = parallelogramBaseInput.value;
//   const parallelogramBase = parseFloat(parallelogramBaseText);

//   const parallelogramHeightInput = document.getElementById(
//     "parallelogram-height"
//   );
//   const parallelogramHeightText = parallelogramHeightInput.value;
//   const parallelogramHeight = parseFloat(parallelogramHeightText);

//   const parallelogramArea = parallelogramBase * parallelogramHeight;

//   const parallelogramAreaSpan = document.getElementById("parallelogram-area");
//   parallelogramAreaSpan.innerText = parallelogramArea;
// }

const listContainer = document.getElementById("list-container");
// triangle area calculation
function calculateTriangleArea() {
  const base = getInputValueById("triangle-base");
  const height = getInputValueById("triangle-height");
  const calculateArea = 0.5 * base * height;
  setInnerTextById("triangle-area", calculateArea);

  // const showInList = createElementAndSetValue("triangle-area", calculateArea);
  // return showInList;
}

// rectangle area calculation

function calculateRectangleArea() {
  const width = getInputValueById("rectangle-width");
  const length = getInputValueById("rectangle-length");

  const calculateArea = width * length;
  setInnerTextById("rectangle-area", calculateArea);
}

// parallelogram area calculation

function calculateParallelogramArea() {
  const base = getInputValueById("parallelogram-base");
  const height = getInputValueById("parallelogram-height");
  const calculateArea = base * height;
  setInnerTextById("parallelogram-area", calculateArea);
}

// rhombus area calculation
function calculateRhombusArea() {
  const base = getInputValueById("rhombus-base");
  const height = getInputValueById("rhombus-height");
  const calculateArea = 0.5 * base * height;
  setInnerTextById("rhombus-area", calculateArea);
}

// pentagon area calculation

function calculatePentagonArea() {
  const perimeter = getInputValueById("pentagon-perimeter");
  const apothem = getInputValueById("pentagon-apothem");
  const calculateArea = 0.5 * perimeter * apothem;
  setInnerTextById("pentagon-area", calculateArea);
}

// ellipse area calculation

function calculateEllipseArea() {
  const majorAxis = getInputValueById("semi-major-axis");
  const minorAxis = getInputValueById("semi-minor-axis");
  const calculateArea = 3.1416 * majorAxis * minorAxis;
  setInnerTextById("ellipse-area", calculateArea);
}
// common formula

function getInputValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputFieldText = inputField.value;
  const inputFieldValue = parseFloat(inputFieldText);
  return inputFieldValue;
}

function setInnerTextById(elementId, calculateArea) {
  const element = document.getElementById(elementId);
  element.innerText = calculateArea;
}

// function createElementAndSetValue(liContent, value) {
//   const createLi = document.createElement("li");
//   createLi.innerText = `${liContent} : ${value} cm²`;
//   createLi.classList.add("text-xl", font - medium);
//   const addToParent = listContainer.appendChild(createLi);
//   return addToParent;
// }

const onMouseOver = document.querySelectorAll(".onMouseOver");

for (const card of onMouseOver) {
  card.addEventListener("mouseover", function () {
    if (
      card === onMouseOver[0] ||
      card === onMouseOver[1] ||
      card === onMouseOver[2]
    ) {
      card.style.backgroundColor = "#FBBCED";
    } else {
      card.style.backgroundColor = "#69C7F0";
    }
  });
  card.addEventListener("mouseout", function () {
    card.style.backgroundColor = "";
  });
}
