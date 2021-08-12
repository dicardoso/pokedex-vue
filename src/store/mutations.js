import state from './state';

export default{
  setPokemonSearched(pokemon) {
    state.list = [pokemon];
  },
  setSearchHasError(flag) {
		state.searchHasError = flag;
	},
}