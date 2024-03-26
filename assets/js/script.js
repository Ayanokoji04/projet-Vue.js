const API_KEY = 'e1cf9a9a248b7e3c0190bee2623c9b47';

new Vue({
    el: '#app',
    data: {
        selectedGenre: '',
        genres: [],
        movies: []
    },
    methods: {
        async fetchMovieGenres() {
            const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`);
            const data = await response.json();
            this.genres = data.genres;
        },
        async searchMoviesByGenre() {
            const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${this.selectedGenre}`);
            const data = await response.json();
            this.movies = data.results;
        },

        handleDragEnd(event) {
            this.topMovies.splice(event.newIndex, 0, this.topMovies.splice(event.oldIndex, 1)[0]);
        }
    },
    created() {
        this.fetchMovieGenres();
    }
});
