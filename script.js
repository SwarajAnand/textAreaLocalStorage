console.log("Working");
const input = document.getElementById("input");
input.addEventListener("input", () => {
  //   console.log(input.value);
  let val = input.value;

  let currVal = localStorage.getItem("textValue");

  localStorage.setItem("textValue", val);
  //   console.log(currVal);
});

const getStoredValue = () => {
  let currVal = localStorage.getItem("textValue");
  input.innerText = currVal;
};

window.onload = () => {
  getStoredValue();
};

// Trying Debouncing and other stuffs
// Step 1: Debounce function definition
// const debounce = (func, delay) => {
//   let timer;
//   return function () {
//     const context = this;
//     const args = arguments;
//     clearTimeout(timer);
//     timer = setTimeout(() => func.apply(context, args), delay);
//   };
// };

// // Step 2: Function to update the local storage
// const updateLocalStorage = (value) => {
//   localStorage.setItem("textValue", value);
// };

// // Step 3: Function to get the stored value from local storage
// const getStoredValue = () => {
//   return localStorage.getItem("textValue");
// };

// // Step 4: Debounced input event handler
// const handleInput = debounce((value) => {
//   updateLocalStorage(value); // Save the input value to local storage
// }, 500); // Delay of 500 milliseconds

// // Step 5: Adding event listener to the input element
// input.addEventListener("input", (event) => {
//   let val = event.target.value;
//   handleInput(val); // Call the debounced input handler
// });

// // Step 6: Load the stored value when the window loads
// window.onload = () => {
//   const storedValue = getStoredValue(); // Retrieve the stored value
//   if (storedValue) {
//     input.value = storedValue; // Set the input value to the stored value
//   }
// };
