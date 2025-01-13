async function getFullName(codeId, productName) {
  console.log(codeId + "---" + productName);
  brake();
}

async function productLabel(description) {
  console.log(description);
  brake();
}

//hidden function
async function brake() {
  console.log();
}

module.exports = {
  getFullName,
  productLabel,
};
