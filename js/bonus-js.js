// Output should include:
// - total number of employees
// - total number of units sold
// - avg units sold per employee
// - Then output should share employee production, ordered from highest to lowest # of units
// * Units   |     Full Name       |   Employee Number
// * 5             Bob Boberson        2

var reportContents = "Monthly Sales Report\nDate: 03-17-2015\nOffice: Codeup\n ===================================================\nEmployee Number, First Name, Last Name, Sales Units\n***************************************************\n\n1, Jane, Janeway, 3\n3, Tricia, Triciason, 5\n4, Jeannette, Jeanson, 4\n5, Charles Emmerson III, Winchester, 2\n6, Chet, Chedderson, 8\n7, Chaiam, Chaiamson, 12\n8, Dale, Dalesinger, 1\n9, Zig, Ziglar, 50\n10, Henry, Kissinger, 1\n11, Arthur Herbert, Fonzarelli, 23\n12, Betty, Boop, 67";
var seperatedContents = reportContents.split('\n');
console.log(seperatedContents);

var employeesArray = [];
for(var i = 7; i < seperatedContents.length; i++){
    employeesArray[i -7] = seperatedContents[i].split(",");
}
console.log(employeesArray);

var totalEmployees = 'There are ' + employeesArray.length + ' employees.';

console.log(totalEmployees);

var totalUnitsSold = 0;

employeesArray.forEach(function(element){
    totalUnitsSold += parseFloat(element[3]);
});

console.log('Total units sold is ' + totalUnitsSold);
var avgUnitsSold = totalUnitsSold / employeesArray.length;
console.log('Average units sold is ' + avgUnitsSold);

function sortNumber(a, b){
    return a[3]-b[3];
}

console.log(seperatedContents.sort(sortNumber));