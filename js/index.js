const filterGrid = document.querySelector(".filter-grid");
const cardGrid = document.querySelector('.card-grid');

let cardItems = cardGrid.children;
let all = filterGrid.querySelector(`[data-choice="all"]`)


filterGrid.addEventListener('click', function(e){
    e.preventDefault();
    if(!e.target.classList.contains('filter-grid')) {
        let siblings = e.target.parentNode.children;
        if(!e.target.classList.contains("filter-choice") && !e.target.classList.contains('filter-grid')) {
            e.target = e.target.parentNode;
        }


        for(let i = 0; i < siblings.length; i++) {
            if(siblings[i].classList.contains('filterActive')) {
                siblings[i].classList.remove('filterActive');
                e.target.classList.add('filterActive');
            }
        }
        
        for(let i = 0; i < cardItems.length; i++) {
            if(cardItems[i].classList.contains(e.target.dataset.choice) && e.target.classList.contains('filterActive')) {
                cardItems[i].style.display = 'block';
            } else {
                cardItems[i].style.display = 'none';
            }
        }

        if(e.target.dataset.choice == "all" && all.classList.contains("filterActive")) {
            for(let i = 0; i < cardItems.length; i++) {
                cardItems[i].style.display = 'block';
            }
        }
    }
    
})






