// @ts-check

/**
 * Determine how many cards of a certain type there are in the deck
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} number of cards of a single type there are in the deck
 */
export function cardTypeCheck(stack, card) {
  let compteur = 0
  stack.forEach((number) => {if (number == card) {
    return compteur++
  }})
  return compteur
  // 🚨 Use .forEach
  throw new Error('Implement the cardTypeCheck function');
}

/**
 * Determine how many cards are odd or even
 *
 * @param {number[]} stack
 * @param {boolean} type the type of value to check for - odd or even
 * @returns {number} number of cards that are either odd or even (depending on `type`)
 */
export function determineOddEvenCards(stack, type) {
  let compteur = 0
  for( const number of stack)  {
    if (type === true && number%2 === 0) {
      compteur++
    }else if(type === false && number%2 !== 0){ 
      compteur++
    }
  }
  return compteur
  // 🚨 Use a `for...of` loop
  throw new Error('Implement the determineOddEvenCards function');
}
