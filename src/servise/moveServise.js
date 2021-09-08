import axios from  "axios"

let instance = axios.create({
      baseURL: 'https://api.themoviedb.org/3/',
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMDAwNTVjYjRjNWE2ZTE2NmZlMDRkZmE4MmJhZjExMyIsInN1YiI6IjYxMzhmM2VkMDcyMTY2MDA0NGM5YWZkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TLKLmnZN85gg5FrT1Wx14Zbjzc7trjxo43RO8kefY3Q'
      }
})

const discoverMovie = async () => await instance.get('/discover/movie')


export {discoverMovie}