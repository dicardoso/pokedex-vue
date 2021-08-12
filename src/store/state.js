import Vue from 'vue'

const LIMIT = 50
const OFFSET = 0

export default Vue.observable({
  list: [],

  searchHasError: false,
  
  limit: LIMIT,
	offset: OFFSET,
})