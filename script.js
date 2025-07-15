
// Rating System
//Isso garante que o JS só será executado depois que todo o HTML for carregado.
document.addEventListener('DOMContentLoaded', function() {
    // Simula o hover nas estrelas do rating
    // Seleciona todos os blocos de estrelas que existem na página (as avaliações dos jogos).
    const starsContainers = document.querySelectorAll('.stars');
    
    starsContainers.forEach(container => {
        const stars = container.querySelectorAll('i');
    //Para cada bloco de estrelas, seleciona as 5 estrelinhas (<i> do Font Awesome).
        
        stars.forEach((star, index) => {
            star.addEventListener('click', () => {
        //Adiciona um evento de clique em cada estrela. index representa o número da estrela clicada (0 a 4).
                // Remove todas as classes
                stars.forEach(s => {
                    s.classList.remove('fas');
                    s.classList.add('far');
                });
                //Ao clicar, ele zera as estrelas: transforma todas em far (estrela vazia).

                // Ativa as estrelas até a clicada
                for (let i = 0; i <= index; i++) {
                    stars[i].classList.remove('far');
                    stars[i].classList.add('fas');
                }
                //Depois, ativa até a estrela clicada, transformando em fas (estrela cheia).
            });
        });
    });
    
    // Filter buttons
    const filterButtons = document.querySelectorAll('.bg-gray-800.rounded-full');
    //Pega todos os botões de filtro que estão nas classes .bg-gray-800 e .rounded-full.
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
    //Para cada botão, adiciona um clique. Quando clicado:
    
            filterButtons.forEach(btn => btn.classList.remove('active-filter'));
            this.classList.add('active-filter');
            // Remove a classe active-filter de todos os botões, e adiciona somente no clicado. ( isso só muda a aparência do botão clicado, não filtra nada ainda.)
        });
    });


    let newRating = 0;

    //Controle das estrelas de avaliacao no formulario
    const ratingStars = document.querySelectorAll('#new-rating i');

    ratingStars.forEach((star, index) => {
        star.addEventListener('click', () => {
            newRating = index + 1;
            ratingStars.forEach((s, i) => {
                s.classList.remove('fas');
                s.classList.add('far');
                if (i <= index) {
                    s.classList.add('fas');
                }
            });
        });
    });
});