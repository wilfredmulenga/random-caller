export const randomlySelectThreeItems = (array, num) => {
  // Shuffle array
  const shuffled = array.sort(() => 0.5 - Math.random())

  // Get sub-array of first n elements after shuffled
  const selected = shuffled.slice(0, num)
  return selected
}
