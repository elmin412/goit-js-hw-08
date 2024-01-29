const idCategory = document.getElementById("categories");
const itemsCategorie = idCategory.querySelectorAll("li.item");

console.log(`Number of categories: ${itemsCategorie.length}`);

itemsCategorie.forEach((categoryItem) => {
  const categoryName = categoryItem.querySelector("h2").textContent;
  const categoryElements = categoryItem.querySelectorAll("ul > li");

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements.length}`);
});


     // другий варіант виконання 
const item = document.querySelectorAll(".item");
console.log(`Number of categories ${item.length}`);

item.forEach((list) => {
  console.log(`Category: ${list.firstElementChild.textContent}`);
  console.log(`Elements: ${list.lastElementChild.childElementCount}`);
})