function firstWord(s) {
	const trimmedStr = str.trim();

  // Find the index of the first space
  const spaceIndex = trimmedStr.indexOf(' ');

  // Return the first word or the entire string if no space is found
  return spaceIndex !== -1 ? trimmedStr.slice(0, spaceIndex) : trimmedStr;
  // your code here
}

// // Do not change the code below 

const s = prompt("Enter String:");
alert(firstWord(s));
