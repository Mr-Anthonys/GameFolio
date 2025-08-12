//Renderizar Jogos em Destaque
function renderFeaturedGames() {
    console.log('featuredGames:', featuredGames);
    console.log('renderFeaturedGames rodando...');
    const carousel = document.getElementById('carousel-container');
    carousel.innerHTML = ''; 

    featuredGames.forEach((game) => {
        const card = document.createElement('div');
        card.className = "min-w-[200px] snap-start bg-gray-800 rounded-lg overflow-hidden"

        card.innerHTML = `
            <img src="${game.image}" alt="${game.title}" class="w-full h-40 object-cover">
            <div class="p-2">
                <h3 class="font-bold truncate">${game.title}</h3>
                <p class="text-sm text-gray-400">${game.category} • ${game.platform}</p>
                <div class="stars text-yellow-400 mt-1">${generateStars(game.rating)}</div>
            </div>
        `;
        carousel.appendChild(card);
    });
}