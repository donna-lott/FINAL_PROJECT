// Load the letter mapping from letterMap.json
fetch('data/letterMap.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to load letterMap.json');
    }
    return response.json();
  })
  .then(letterMap => {
    // Add click event listener to the translate button
    document.getElementById('translate-button').addEventListener('click', () => {
      // Get user input and convert to lowercase
      const input = document.getElementById('name-input').value.toLowerCase();
      // Transliterate the input
      const output = transliterate(input, letterMap);
      // Display the result
      document.getElementById('translated-name').textContent = output;
    });
  })
  .catch(error => {
    console.error('Error loading letterMap.json:', error);
    document.getElementById('translated-name').textContent = "Error: Could not load translation data.";
  });

// Function to transliterate input using the letter map
function transliterate(input, letterMap) {
  let output = "";
  let i = 0;
  while (i < input.length) {
    // Skip non-letter characters (e.g., hyphens, spaces)
    const currentChar = input.substring(i, i + 1);
    if (!/[a-z]/.test(currentChar)) {
      output += currentChar;
      i += 1;
      continue;
    }
    // Check for 2-letter combinations first (e.g., "kh")
    let twoLetters = input.substring(i, i + 2);
    if (letterMap[twoLetters]) {
      output += letterMap[twoLetters];
      i += 2; // Skip the next letter since we used 2
    } else {
      // Fall back to single letter
      let oneLetter = input.substring(i, i + 1);
      output += letterMap[oneLetter] || oneLetter; // Use original if not found
      i += 1;
    }
  }
  return output;
}