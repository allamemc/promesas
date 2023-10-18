async function fetchCatFactUsingAsyncAwait() {
  try {
    const response = await fetch("https://catfact.ninja/fact");

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log("Cat Fact:", data.fact);
  } catch (error) {
    console.error("Error:", error);
  }
}

function fetchCatFactUsingPromises() {
  fetch("https://catfact.ninja/fact")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Cat Fact:", data.fact);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
