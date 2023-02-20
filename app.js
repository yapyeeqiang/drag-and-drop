const items = document.querySelectorAll(".item");
const columns = document.querySelectorAll(".column");

function dragStart() {
  setTimeout(() => (this.className = "invisible"), 0);
}

function dragEnd() {
  this.className = "item";
}

items.forEach((item) => {
  item.addEventListener("dragstart", dragStart);
  item.addEventListener("dragend", dragEnd);
});

columns.forEach((column) => {
  new Sortable(column, {
    group: "shared",
    animation: 150,
    ghostClass: "blue-background-class",
  });
});
