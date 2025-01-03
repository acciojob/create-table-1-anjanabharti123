function insert_Row() {
    //Write your code here
  
  // Get the table by its ID
    var table = document.getElementById('sampleTable');
    
    // Create a new row at the top (index 0)
    var newRow = table.insertRow(0);
    
    // Create two new cells for the new row
    var cell1 = newRow.insertCell(0); // First cell
    var cell2 = newRow.insertCell(1); // Second cell
    
    // Set the text content for the new cells
    cell1.textContent = "New Cell1"; // Left cell value
    cell2.textContent = "New Cell2"; // Right cell value
}
