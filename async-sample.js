var Rx = require('rxjs/Rx');

function getNumbers() {
	return [1,2,3,4,5]
}

var source = Rx.Observable.from(getNumbers())
var subject = new Rx.Subject()
var multicasted = source.multicast(subject)

multicasted.subscribe({
	next: (stuff) => console.log(stuff)
})

multicasted.subscribe({
	next: (moreStuff) => console.log(moreStuff)
})

multicasted.connect()
