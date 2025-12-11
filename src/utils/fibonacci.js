/**
 * Generates a Fibonacci sequence based on maximum number and starting values
 * @param {number} maxNumber - The maximum number in the sequence (generate up to this number)
 * @param {number} f0 - The first starting value (f(0))
 * @param {number} f1 - The second starting value (f(1))
 * @returns {Array} Array of Fibonacci numbers up to maxNumber
 */
export function generateFibonacci(maxNumber, f0 = 0, f1 = 1) {
  const sequence = [];
  
  // Ensure maxNumber is valid
  const validMaxNumber = Math.max(0, Math.floor(maxNumber || 0));
  
  // Ensure starting values are valid numbers (handle empty strings)
  const validF0 = (typeof f0 === 'number' && !isNaN(f0)) ? f0 : (f0 === '' ? 0 : (parseInt(f0, 10) || 0));
  const validF1 = (typeof f1 === 'number' && !isNaN(f1)) ? f1 : (f1 === '' ? 1 : (parseInt(f1, 10) || 1));
  
  // If maxNumber is 0 or less, return empty array or just the starting values if they're within range
  if (validMaxNumber === 0) {
    if (validF0 <= 0) {
      sequence.push(validF0);
    }
    return sequence;
  }
  
  // Add first value if it's within range
  if (validF0 <= validMaxNumber) {
    sequence.push(validF0);
  }
  
  // Add second value if it's within range
  if (validF1 <= validMaxNumber) {
    sequence.push(validF1);
  }
  
  // Generate the rest of the sequence
  let prev = validF0;
  let current = validF1;
  
  while (true) {
    const next = prev + current;
    
    // Stop if next number exceeds maxNumber
    if (next > validMaxNumber) {
      break;
    }
    
    sequence.push(next);
    prev = current;
    current = next;
  }
  
  return sequence;
}

