// 01
// using: reduce method
//function arraySum(arr){
//	const sum = arr.reduce((a, b) => a + b, 0)
//	return sum
//}
//console.log(arraySum([ 1,2,3,4,5,15 ]));
//console.log(arraySum([ 1,2,3,4,5,15,30 ]));

//02 
// task: summ all of ellement instead the last elements; then check it - whether sum first elements equal value of the last elements
// using: sort, forEach

//function arraySum(arr){
//	let tempArr = arr.sort((a,b) =>{
//		return a-b
//	})
//	// remove the bigest-last array element
//	let largest = tempArr.pop()
	
//	// sorting the other elements  
//	let number = 0
//	tempArr.forEach(item => (number += item))
//		return largest === number
	
//}

//console.log(arraySum([ 1,5,3,10,5, 24 ]));
//console.log(arraySum([ 1,2,3,4,5,15, 30 ]));