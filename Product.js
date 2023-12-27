console.log('this file is for Exporting purpose only');

export let order = (buyer, item) => {
  console.log(`${buyer} ordered the ${item}`);
};

// exporting multiple values
let laptopPrice = '50k';
let quantity = 5;

export { laptopPrice, quantity as quant };

//default export ---> only this single variable will be export
export default order;
