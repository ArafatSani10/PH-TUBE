// 1- fetch, show and load categories on html


function getTimeString(time) {
    const hour = Math.floor(time / 3600);
    let remainingSeconds = time % 3600;
    const minute = Math.floor(remainingSeconds / 60);
    return `${hour} hour(s) ${minute} minute(s) ago`;
}

console.log(getTimeString(4320));



// * create a loadCategories
let loadCategories = () => {
    //    fetch the data
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then((res) => res.json())
        .then((data) => displayCategories(data.categories))
        .catch((error) => console.log(error))
}

// * display categories
let displayCategories = (Categories) => {
    let categoriesContainer = document.getElementById('categories');
    Categories.forEach((item) => {
        console.log(item);
        let buttonContainer = document.createElement('div');
        buttonContainer.innerHTML=`

        <button onclick = 'loadCategoriesVideos(${item.category_id})' class="btn">
        ${item.category}
        </button>
        
        `
        categoriesContainer.append(buttonContainer)
    })

}

// create a loadVideos
let loadVideos = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
        .then((res) => res.json())
        .then((data) => displayVideos(data.videos))
        .catch((error) => console.log(error))
}

let loadCategoriesVideos = (id) => {
    // alert(id)
    fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
    .then((res) => res.json())
    .then((data) => displayVideos(data.category))
    .catch((error) => console.log(error))
}

// displayvideo

// let cardDemo = {
//     "category_id": "1001",
//     "video_id": "aaah",
//     "thumbnail": "https://i.ibb.co/hY496Db/coloer-of-the-wind.jpg",
//     "title": "Colors of the Wind",
//     "authors": [
//         {
//             "profile_picture": "https://i.ibb.co/6r4cx4P/ethen-clack.png",
//             "profile_name": "Ethan Clark",
//             "verified": true
//         }
//     ],
//     "others": {
//         "views": "233K",
//         "posted_date": "16090"
//     },
//     "description": "Ethan Clark's 'Colors of the Wind' is a vibrant musical exploration that captivates listeners with its rich, expressive melodies and uplifting rhythm. With 233K views, this song is a celebration of nature's beauty and human connection, offering a soothing and enriching experience for fans of heartfelt, nature-inspired music."
// }




let displayVideos = (videos) => {
    let videoContainer = document.getElementById('videos');
    videoContainer.innerHTML = "";
    videos.forEach((video) => {
        console.log(video);
        let card = document.createElement('div');

        card.classList = 'card card-compact'
        card.innerHTML = `
         <figure class = ' h-[200px] relative'>
    <img
      src=${video.thumbnail }
      class = 'h-full w-full object-cover'
      alt="Shoes" />
         ${
        video.others.posted_date?.lenght == 0 ? "" : ` <span class = 'absolute right-2 bottom-2 bg-black text-xs text-white rounded p-1'> ${getTimeString(video.others.posted_date)} </span>`
     }
  
  
  </figure>
  <div class="px-0 py-3 flex gap-2" >

     <div> 
         <img class = 'w-10 h-10 rounded-full object-cover' src= ${video.authors[0].profile_picture}/>
     </div>
     

     <div>
        <h2 class ='font-bold'> ${video.title}</h2>

       <div class ='flex items-center py-2 ' >
          <p class = 'text-gray-500'>${video.authors[0].profile_name} </p>
       </div>


      
     </div>
 
    </div>
  </div>
    
        `;
        videoContainer.append(card);

    })
}



loadCategories();
loadVideos();