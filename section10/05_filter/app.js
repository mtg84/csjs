const nums = [34,35,67,54,109,102,32,2,9];

const odds = nums.filter((n)=>{
	return n % 2 !==0;
})

const evens = nums.filter(n => n % 2 === 0);

const bigNums = nums.filter(n => n > 50);
