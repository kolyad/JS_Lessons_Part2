Vue.component('search', {
    data: function (){
      return {
          searchValue: ''
      }
    },
    template: `
         <form action="#" class="search-form" @submit.prevent="$emit('apply-filter', searchValue)">
                <input type="text" class="search-field" v-model = 'searchValue'>
                <button type="submit" class="btn-search">
                    <i class="fas fa-search"></i>
                </button>
            </form>
    `
});