const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
let tab=document.querySelector("table")
let prc=document.querySelectorAll(".price")

const getSum = () => {
//Add your code her
	let sum=0;
	for(let p of prc)
		{
			sum+=+p.innerText;
		}
	let new_row=document.createElement("tr");
	let td1=document.createElement("td");
	let td2=document.createElement("td");
	td1.innerText="Total Price";
	td2.innerText=sum;
	new_row.append(td1,td2);
	tab.append(new_row);
	
	
  
};

getSumBtn.addEventListener("click", getSum);

