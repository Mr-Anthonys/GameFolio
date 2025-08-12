//Lista de armazenamento dos JOGOS (Estente de Jogos);
let games = [
    {
        title: "Elden Ring",
        image: "https://upload.wikimedia.org/wikipedia/en/b/b9/Elden_Ring_Box_art.jpg",
        category: "RPG",
        platform: "PC",
        year: 2022,
        rating: 5
    },
    {
        title: "The Witcher 3",
        image: "https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg",
        category: "RPG",
        platform: "PS5",
        year: 2015,
        rating: 5
    },
    {
        title: "God of War Ragnarok",
        image: "./imgs/God_of_War_Ragnarök_capa.jpg",
        category: "Ação",
        platform: "PS5",
        year: 2022,
        rating: 4
    },
    {
        title: "Hollow Knight",
        image: "./imgs/Hollow_Knight_Cover.jpg",
        category: "Metroidvania",
        platform: "PC",
        year: 2017,
        rating: 5
    },
    {
        title: "Hollow Knight",
        image: "./imgs/Hollow_Knight_Cover.jpg",
        category: "Metroidvania",
        platform: "PC",
        year: 2017,
        rating: 5
    }
];

//Isso garante que o JS só será executado depois que todo o HTML for carregado.
document.addEventListener('DOMContentLoaded', function() {

    // Rating do formulario
    let newRating = 0;
    const ratingStars = document.querySelectorAll('#new-rating i');

    //Controle das estrelas de avaliacao no formulario
    ratingStars.forEach((star, index) => {
        star.addEventListener('click', () => {
            newRating = index + 1;
            ratingStars.forEach((s, i) => {
                s.classList.remove('fas');
                s.classList.add('far');
                if (i <= index) {
                    s.classList.remove('far');
                    s.classList.add('fas');
                }
            });
        });
    });

                            //BTN ADD NEW GAME
                            const addButton = document.getElementById('add-game-btn');
                            addButton.addEventListener('click', () => {
                                const titleInput = document.getElementById('game-title');
                                const platformInput = document.getElementById('game-platform');
                                const categoryInput = document.getElementById('game-category'); 
                                const yearInput = document.getElementById('game-year');
                                const imageInput = document.getElementById('game-image');
                                const rating = newRating;

                                // Empacotando as informacoes em um objeto
                                const newGame = {
                                    id: Date.now(),
                                    title: titleInput.value,
                                    platform: platformInput.value,
                                    category: categoryInput.value,
                                    year: yearInput.value,
                                    image: imageInput.value,
                                    rating: rating
                                };
                                
                                if (newGame.title != "" && newGame.platform != "" && newGame.category != "" && newGame.year != "") {
                                    games.push(newGame);
                                    renderGames(); //Funcao para desenhar os cards

                                    //Limpando inputs apos inserir card
                                    titleInput.value = '';
                                    platformInput.value = '';
                                    categoryInput.value = '';
                                    yearInput.value = '';
                                    imageInput.value = '';
                                    rating = newRating
                                } else {
                                    alert('Preencha os campos!')
                                }
                            });


                            // Estrelas APENAS VISUAIS dos cards
                            const starsContainers = document.querySelectorAll('.game-card .stars');
                            
                            starsContainers.forEach(container => {
                                const stars = container.querySelectorAll('i');
                                
                                stars.forEach((star, index) => {
                                    star.addEventListener('click', () => {
                                        stars.forEach(s => {
                                            s.classList.remove('fas');
                                            s.classList.add('far');
                                        });
                                        for (let i = 0; i <= index; i++) {
                                            stars[i].classList.remove('far');
                                            stars[i].classList.add('fas');
                                        }
                                    });
                                });
                            });
                            

                            // FILTROS VISUAIS
                            const filterButtons = document.querySelectorAll('.bg-gray-800.rounded-full');
                            
                            filterButtons.forEach(button => {
                                button.addEventListener('click', function() {
                            
                                    filterButtons.forEach(btn => btn.classList.remove('active-filter'));
                                    this.classList.add('active-filter');
                                });
                            });


renderFeaturedGames();
renderGames(); 
});


//Funcao auxiliar para gerar as estrelas
function generateStars(rating) {
    let starsHTML = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            starsHTML += '<i class="fas fa-star"></i>';
        } else {
            starsHTML += '<i class="far fa-star"></i>';
        }
    }
    return starsHTML;
}


//FUNCAO RESPONSAVEL PELOS CARDS NA TELA
function renderGames() {
    const gameListContainer = document.getElementById('game-list-container');

    //Limpa o container
    gameListContainer.innerHTML = '';

    //Passar por cada jogo da lista 'games'
    games.forEach((game) => {
        const cardHTML = `
            <div class="game-card bg-gray-800 rounded-lg overflow-hidden transition-transform duration-300">
                <div class="relative">
                    <img src="${game.image || 'https://via.placeholder.com/300x200.png?text=Sem+Imagem'}" alt="Capa do jogo ${game.title}" class="w-full h-48 object-cover">
                    <div class="absolute top-2 left-2 bg-purple-600 text-white text-xs px-2 py-1 rounded">
                        ${game.category || 'Ação'}
                    </div>
                </div>
                <div class="p-3">
                    <h3 class="font-bold mb-1 truncate">${game.title}</h3>
                    <div class="flex justify-between items-center mb-2 text-sm">
                        <span>${game.year}</span>
                        <div class="stars">
                            ${generateStars(game.rating)}
                        </div>
                    </div>
                    <div class="flex space-x-1 text-xs">
                        <span class="bg-gray-700 px-2 py-1 rounded">${game.platform}</span>
                    </div>
                </div>
            </div>
        `;

        //Inserir o HTML Card dentro do container
        gameListContainer.innerHTML += cardHTML;
    });
}

//Renderizar Jogos em Destaque
function renderFeaturedGames() {

    const carousel = document.getElementById('game-list-container');
    carousel.innerHTML = ''; 

    games.forEach((game) => {
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