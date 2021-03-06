const addItem = function() {
  const newItem = document.getElementById("newItem");
  const newItemValue = newItem.value.trim();
  if (!newItemValue) return;
  fetch("/addItem", {
    method: "POST",
    body: `newItem=${newItemValue}`,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  })
    .then(response => {
      newItem.value = "";
      return response.text();
    })
    .then(itemHtml => {
      document.getElementById("items").innerHTML = itemHtml;
    });
};

const toggleState = function(item) {
  fetch("/changeItemState", {
    method: "POST",
    body: `item=${item}`,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  });
};

const deleteItem = function(item) {
  fetch("/deleteItem", {
    method: "POST",
    body: `item=${item}`,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  })
    .then(res => {
      return res.text();
    })
    .then(itemHtml => {
      document.getElementById("items").innerHTML = itemHtml;
    });
};

const editItem = function(itemId) {
  const inputField = `<input id="${itemId}Edit" value="${itemId}"/>`;
  const saveButton = `<input type="button" value="Save" onclick='saveChanges("${itemId}")'/>`;

  document.getElementById(itemId + "Item").innerHTML = inputField;
  document.getElementById(itemId + "Button").innerHTML = saveButton;
};

const saveChanges = function(previous) {
  const newItem = document.getElementById(previous + "Edit").value;
  fetch("/changeItem", {
    method: "POST",
    body: `oldItem=${previous}&newItem=${newItem}`,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  })
    .then(res => {
      return res.text();
    })
    .then(itemHtml => {
      document.getElementById("items").innerHTML = itemHtml;
    });
};

const saveTodo = function() {
  fetch("/saveUser");
};
