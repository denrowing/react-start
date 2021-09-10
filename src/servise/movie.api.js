const fetchMovie = () => {
    return fetch('https://api.themoviedb.org/3/', {
        baseURL: 'https://api.themoviedb.org/3/',
        headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMDAwNTVjYjRjNWE2ZTE2NmZlMDRkZmE4MmJhZjExMyIsInN1YiI6IjYxMzhmM2VkMDcyMTY2MDA0NGM5YWZkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TLKLmnZN85gg5FrT1Wx14Zbjzc7trjxo43RO8kefY3Q'
        }
    })
        .then(value => value.json())
}

const findMovie = async () => await fetchMovie().get('/discover/movie')

export {findMovie}