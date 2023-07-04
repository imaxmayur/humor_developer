let list = [['Animals', 'Lion', 'Cat', 'Dog', 'Deer'], ['Fruits', 'Apple', 'Banana', 'Guava', 'Litchi'], ['Counties', 'USA', 'India', 'China', 'Africa', 'Germany']];

for (let i = 0; i < list.length; i++) {
  const heading = list[i][0];
  
  console.log(heading);
  console.log('---------');
  
  for (let j = 1; j < list[i].length; j++) {
    const submenu = list[i][j];
    console.log(submenu);
  }
  
  console.log('\n');
}
