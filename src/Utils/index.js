/**
 * This function calculates total price of a new order
 * @param {Array} products cartProducts: Array of Objects
 * @returns {number} Total Price
 */
export const totalPrice = (products) => {
  return products.reduce((sum, product) => sum + product.price, 0)
}

/**
 * This function obtains current DateTime
 * @returns {number} Date Time
 */
export const dateTime = () => {
  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  var time = new Date().toLocaleTimeString();
  var dateTime = date+' '+time;
      
  return dateTime;
}