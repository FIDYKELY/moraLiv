/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
export function cookingStatus(minutes) {
  if (minutes == 0) {
    return 'Lasagna is done.'
  }else if (minutes > 0) {
    return 'Not done, please wait.'
  }else{
    return 'You forgot to set the timer.'
  }
}

export function preparationTime(layers, times = 2) {
  let response = 0
  for (let layer of layers) {
    response += times
  }
  return response
}

export function quantities(couches){
  let response = {
    noodles: 0,
    sauce: 0
  }
  for (let index = 0; index < couches.length; index++) {
    if (couches[index] == 'sauce') {
      response.sauce += 0.2
    }else if (couches[index] == 'noodles') {
      response.noodles += 50
    }
  }
  return response
}

export function addSecretIngredient(friendsList, myList){
  myList.push(friendsList[friendsList.length-1])
}

export function scaleRecipe(recipes, portions){
  let quantity = portions/2
  let nwRecipe = {...recipes}
  for (let recipe in nwRecipe) {
    nwRecipe[recipe] *= quantity
  }
  return nwRecipe
}