/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Creates a new score board with an initial entry.
 *
 * @returns {Record<string, number>} new score board
 */
export function createScoreBoard() {
  const player = {
    'The Best Ever': 1000000, 
  }
  return player
}

/**
 * Adds a player to a score board.
 *
 * @param {Record<string, number>} scoreBoard
 * @param {string} player
 * @param {number} score
 * @returns {Record<string, number>} updated score board
 */
export function addPlayer(scoreBoard, player, score) {
  // 1. Ajoute le joueur au tableau des scores
  const scores = scoreBoard
  scores[player] = score
  // 2. Retourne le tableau des scores
  return scores
}

/**
 * Removes a player from a score board.
 *
 * @param {Record<string, number>} scoreBoard
 * @param {string} player
 * @returns {Record<string, number>} updated score board
 */
export function removePlayer(scoreBoard, player) {
    delete scoreBoard[player]
    return scoreBoard
  throw new Error('Remove this line and implement the function');
}

/**
 * Increases a player's score by the given amount.
 *
 * @param {Record<string, number>} scoreBoard
 * @param {string} player
 * @param {number} points
 * @returns {Record<string, number>} updated score board
 */
export function updateScore(scoreBoard, player, points) {
  scoreBoard[player] += points
  return scoreBoard
  throw new Error('Remove this line and implement the function');
}

/**
 * Applies 100 bonus points to all players on the board.
 *
 * @param {Record<string, number>} scoreBoard
 * @returns {Record<string, number>} updated score board
 */
export function applyMondayBonus(scoreBoard) {
  for (let score in scoreBoard) {
    scoreBoard[score] += 100
  }
  return scoreBoard
  throw new Error('Remove this line and implement the function');
}
