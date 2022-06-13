// return true only if values are unique, otherwise - false

// 01
// using : prototypes, includes, arr.push, this, for
// no Set Data Structure

//Array.prototype.unique = function(){
//	let arr = []
//	for (let i=0; i < this.length; i++){
//		if( !arr.includes(this[i])){
//			arr.push( this[i] )
//		}
//	}
//	return arr
//}

//const ages = [26, 27, 26, 26, 28, 28, 29, 29, 30]
//const uniqueAges = ages.unique()
//console.log(uniqueAges);

// 02
// using: filter, indexOf
// no Set Data Structure

//const ages = [26, 27, 26, 26, 28, 28, 29, 29, 30]
//const uniqueAges = ages.filter((value, index, self) => self.indexOf(value) == index)
//console.log(uniqueAges);



















//Array.prototype.unique = function(){
//	let arr = []
//	for(let i = 0; i < this.length; i++){
//		if( !arr.includes(this[i])){
//			arr.push(this[i])
//		}
//	}
//	return arr
//}
//const ages = [26, 27, 26, 26, 28, 28, 29, 29, 30]
//const uniqueAges = ages.unique()
//console.log(uniqueAges);