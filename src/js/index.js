const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonCard = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemons.forEach(pokemon => {
    pokemon.addEventListener('click', () => {

        //esconder cartao aberto do pokemon atual

        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        //ao clicar no pokemon da listagem, aparecer cartao correspondente confere seu id

        const idPokemonSelecionado = pokemon.attributes.id.value

        const cartaoPokemonParaAbrir = document.getElementById('cartao-' + idPokemonSelecionado)
        cartaoPokemonParaAbrir.classList.add('aberto')

        //remover classe ativo do pokemon atual

        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove ('ativo')

        //add classe ativo no pokemon selecionado

        const pokemonSelecionadoNaListagem = document.getElementById (idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add ('ativo')

    })
})