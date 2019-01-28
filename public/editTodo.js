const addItem = function() {
  const newItem = document.getElementById("newItem");
  fetch("/addItem", {
    method: "POST",
    body: newItem.value
  })
    .then(response => {
      newItem.value = "";
      return response.text();
    })
    .then(itemHtml => {
      document.getElementById("items").innerHTML = itemHtml;
    });
};

window.onload = function() {
  document.getElementById("add").onclick = addItem;
};
