const categoryList = document.querySelector("#categories");
const categoryItems = categoryList.querySelectorAll("li.item");
const numberOfCategories = categoryItems.length;
console.log("Number of categories: " + numberOfCategories);

categoryItems.forEach((item) => {
  const categoryTitle = item.querySelector("h2").textContent;
  const categoryElements = item.querySelectorAll("li").length;
  console.log("Category: ", categoryTitle);
  console.log("Elements: ", categoryElements);
});
