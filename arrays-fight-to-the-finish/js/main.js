//Create an array of movie titles. Loop through the array and each element to the h2.



let movieTitles = ["A Walk to Remember", "500 Days of Summer", "The Notebook"]

for(let i = 0; i < movieTitles.length ; i++){
    document.querySelector("h2").innerText += movieTitles[i]
}



//Create an array of numbers. Loop through the array and add three to each number and replace the old number.

let arrNums = [ 5, 10, 15, 20]

 arrNums.forEach((item, i) => {
    arrNums[i] = item + 3
    })


//Find the average of all the numbers from question two

let sum = 0

arrNums.forEach((num) => sum+=num) 
//forEach

for(let i = 0; i < arrNums.length; i++){
    sum += arrNums[i]
}