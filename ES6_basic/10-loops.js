export default function appendToEachArrayValue(array, appendString) {
  const arra = [];
	for (const value of array) {
		arra.push(appendString + value);
	}

  return arra;
}
