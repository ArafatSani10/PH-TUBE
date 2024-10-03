// 1- fetch, show and load categories on html

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
        let button = document.createElement('button');
        button.classList = 'btn';
        button.innerText = item.category
        categoriesContainer.append(button)
    })

}
loadCategories();