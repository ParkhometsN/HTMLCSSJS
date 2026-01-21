export async function LoadFoodList (){
    try{
        const response = await fetch('data/products.json');

        if (!response.ok){
            throw new Error(res.statusText)
        }

        const products = await response.json();
        const ContainerCard = document.querySelector('.grid_food')

        ContainerCard.innerHTML = '';

        products.forEach(product => {
            const card = document.createElement('div');
            card.className = 'cad_item';

            card.innerHTML = `
                <img src="${product.img}" alt="${product.descr}">
                <p class="title">${product.title}</p>
                <div class="ttpp">
                    <p class="price">${product.price}р</p>
                    <button>В корзину</button>
                </div>
            `;

            ContainerCard.appendChild(card)
        });
    }catch(error){
        console.log('error load data')
    }
}
