
const accessKey = "Lg1SVqy3KEsYvdvzX9hdSi5u9rG5YsQ1M-WOZGKkOwA";

const form = document.querySelector("form");
const input = document.getElementById("searchVal");
const output  = document.getElementById("output");
const showMore = document.getElementById("show-more-btn");

let inputData=""
let page = 1;

 async function searchImg(){
 inputData = input.value;

 const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`

const response = await fetch(url)
const data = await response.json();
    
  const results = data.results

  if(page === 1){
    output.innerHTML="";
  }

  results.map((ele)=>{
     const imgWrapper = document.createElement("div");
     imgWrapper.classList.add("search-result");
     const img = document.createElement("img");
     img.src = ele.urls.small
     img.alt = ele.alt_description;
     const imageLink = document.createElement('a');
     imageLink.href = ele.links.html
     imageLink.target="_blank";
     imageLink.textContent=ele.alt_description;

     imgWrapper.appendChild(img);
     imgWrapper.appendChild(imageLink);
     output.appendChild(imgWrapper);
  });


  page++;

  if(page > 1) {
    showMore.style="display:block";
  }


}

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    page=1;
    searchImg();
})

showMore.addEventListener("click",()=>{

    searchImg();
})



