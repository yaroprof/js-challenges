// 01 - version
//function capitalizeWords(str){
//	let words = str.split(' ').map((word) =>{
//		let firstLetter = word.slice( 0, 1).toUpperCase()
//		let rest = word.slice(1)
//		return `${firstLetter}${rest}`
//	})
//	return words.join(' ')
//}

//console.log(capitalizeWords('Lorem ipsum dolor sit amet consectetur adipisicing elit.'));
//console.log(capitalizeWords('molestiae quas vel sint commodi repudiandae consequuntur'));

// 02 - version
//function capitalizeWords(str){
//	let words = str.split(' ').map((word) =>{

//		return word.charAt(0).toUpperCase() + word.slice(1)
//	})
//	return words.join(' ')
//}

//console.log(capitalizeWords('Lorem ipsum dolor sit amet consectetur adipisicing elit.'));
//console.log(capitalizeWords('molestiae quas vel sint commodi repudiandae consequuntur'));






















//function capitalizeWords(str){
//let words = str.split(' ').map( word => {
//	// 01 version

//	//let firstLetter = word.slice(0, 1)
//	//let rest = word.slice(1)
//	//firstLetter = firstLetter.toUpperCase()
//	//return `${firstLetter}${rest}`

//	// 02 version
//	return word.charAt(0).toUpperCase() + word.slice(1)
//} )
//	return words.join(' ')
//}