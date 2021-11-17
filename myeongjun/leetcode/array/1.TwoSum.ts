function twoSum(numbers: number[], target: number): number[] {

    let output: number[] = [];

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) {
                output.push(i, j);
                return output;
            }
        }
    }
};