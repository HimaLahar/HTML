//counter.js
const para = document.getElementsByTagName('p')
const num = document.getElementById('number')


let count = 0;
function incr ()
{
  
  if (count<25) {
    count++ 
    if(count % 2 === 0){
        document.getElementById("number").innerHTML = "The Number is Even:"+ count
        para[0].textContent = count
        para[1].textContent = "Incremented"
      }
      else {
        document.getElementById("number").innerHTML = "The Number is Odd:"+ count
        para[0].textContent = count
        para[1].textContent = "Incremented"
        }
      }
   else
   {
    alert("Maximum Limit Reached! We Can't increase the count more than 25")
   }
   
}
function decr ()
{
    if (count > 0)
    {
      count--
      if(count % 2 === 0){
        document.getElementById("number").innerHTML = "The Number is Even:"+ count
        para[0].textContent = count
        para[1].textContent = "Decremented"
      }
      else {
        document.getElementById("number").innerHTML = "The Number is Odd:"+ count
        para[0].textContent = count
       para[1].textContent = "Decremented"
     }
        
        
    }
    else
    {
        alert("Minimum Limit Reached! We Can't decrease the count less than 0")
    }
   
}
function reset ()
{
    count = 0;
    para[0].textContent = count
    para[1].textContent = ""
}

//console.log(incr())
// function isEven(number) {
//   if (number % 2 === 0) {
//       return true;
//   } else {
//       return false;
//   }
// }
