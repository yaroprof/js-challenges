// 01 version: split an array, for loop an dcomparisson with longest word in a string
//function longestWord(str){
//	let words = str.split(' ')
//	let longestWord = ''

//	for(let word of words){
//		if( word.length > words.length ){
//			longestWord = word
//		}
//	}

//	return longestWord
//}

//console.log( longestWord('I doing fitness exercises every morning'));
//console.log( longestWord('I went straight to the bu station'));

// 02 version: sort() method

//function longestWord(str){
//	let words = str.split(' ')
//	let longestWord = words.sort((a, b) =>{
//		return b.length - a.length
//	})

//	return longestWord[0]
//}

//console.log( longestWord('I doing fitness exercises every morning'));
//console.log( longestWord('I went straight to the bus station'));

// 03 version: reduce() method

//function longestWord(str){
//	let words = str.split(' ')
//	let longWords = words.reduce( function(longest, current){
//		return current.length > longest.length ? current: longest
//	}, '')
//	return longWords
//}

//console.log( longestWord('I doing fitness exercises every morning'));
//console.log( longestWord('I went straight to the bus station'));





