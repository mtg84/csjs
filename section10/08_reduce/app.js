const nums = [3,4,5,6,7];

const product = nums.reduce((total, currentVal) => {

    return total * currentVal;

});

const grades = [87,64,96,92,88,99,73,70,64];

const maxGrade = grades.reduce((max,currentVal) => {

    if(currentVal > max) return currentVal;
    
    return max;

});

const minGrade = grades.reduce((min, currentVal) => (
    Math.min(min,currentVal)
));

// reduce using an initial value (empty object)
const votes = ['y','y','n','n', 'y','y','y','n','n','n','n', 'absent'];

const results = votes.reduce((tally,val) => {
    if(tally[val]){
        tally[val]++;
    }
    else{
        tally[val] = 1;
    }
    return tally;
},{});