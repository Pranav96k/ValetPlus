const csvFileToArray = (string) => {
  // Split the CSV content by new lines
  const rows = string.trim().split("\n");
  
  // Extract the header row
  const heading = rows[0].split(",");
  
  // Array to store the resulting objects
  const ans_array = [];

  // Iterate through each data row (excluding the header)
  for (let i = 1; i < rows.length; i++) {
    const row = rows[i].split(",");
    const obj = {};

    // Map each column to the corresponding header
    for (let j = 0; j < heading.length; j++) {
      if (!row[j]) {
        row[j] = "NA";
      }
      // Add the key-value pair to the object
      obj[heading[j].replaceAll(" ", "_")] = row[j].trim().replaceAll(" ", "_");
    }
    
    // Push the object to the result array
    ans_array.push(obj);
  }

  console.log({ ans_array });
  return ans_array;
};

export default csvFileToArray;
