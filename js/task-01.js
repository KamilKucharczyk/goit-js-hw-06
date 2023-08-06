const categoriesList = document.querySelectorAll("#categories .item");
const numberOfCategories = categoriesList.length;

console.log("Number of categories:", numberOfCategories);

categoriesList.forEach((category) => {
  const categoryTitle = category.querySelector("h2").textContent;
  const elementsList = category.querySelectorAll("ul li");
  const numberOfElements = elementsList.length;

  console.log("Category:", categoryTitle);
  console.log("Elements:", numberOfElements);
});
