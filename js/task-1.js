const categories = document.querySelectorAll(`.item`);
console.log('Number of categories:', categories.length);
categories.forEach(category => {
    const h = category.querySelector(`h2`);
    console.log(`Category:`, h.textContent);
    const lies = category.querySelectorAll(`li`);
    console.log(`Elements:`, lies.length);
})
