import api from '@/services/api';

import state from './state';
import mutations from './mutations';

export default{
  async getPokemonByName(name) {
		const { setPokemonSearched } = mutations;

		const pokemon = await api.get(`/${name}`);

		if (pokemon) {
			setPokemonSearched(pokemon);
		}
	},
  async searchPokemon(name) {
		const {
			setIsPokemonSearch,
			setIsSearching,
			setPokemonSearched,
			setSearchHasError,
			resetList,
		} = mutations;

		if (!name) {
			resetList();
			return;
		}

		try {
			setSearchHasError(false);
			setIsSearching(true);
			setIsPokemonSearch(true);

			const pokemon = state.tmpList.find(info => info.name.toLowerCase() === name.toLowerCase());

			if (pokemon) {
				setPokemonSearched(pokemon);
				return;
			}

			await this.getPokemonByName(name);
		} catch (error) {
			setSearchHasError(true);
		} finally {
			setIsSearching(false);
		}
	},
}