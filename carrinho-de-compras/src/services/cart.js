// adicionar item , assinatura de metodo ✅
async function addItem(userCart, item) {
  userCart.push(item);
}

//deleter item
async function deleteItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);

  if (index !== -1) {
    userCart.splice(index, 1);
  }
}

//remover
async function removeItem(userCart, index) {
  const deleteIndex = index - 1;

  if (index >= 0 && index < userCart.length) {
    userCart.splice(deleteIndex, 1);
  }
}

// calcular total
async function calculateTotal(userCart) {
  console.log("\nShopee cart total is: ");
  const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
  console.log(`Total🛒 : ${result}`);
}

async function displayCart(userCart) {
  console.log("\nShopee cart list:");
  userCart.forEach((item, index) => {
    console.log(
      `${index + 1}. ${item.name}. R$ - ${item.price}. | ${
        item.quantity
      }x | Subtotal = ${item.subtotal()}`
    );
  });
}

export { addItem, deleteItem, removeItem, calculateTotal, displayCart };
