const getPostsOfUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(value => value.json())
}


const getPostsOfUser = (id) => {
    fetch('https://jsonplaceholder.typicode.com/posts/' + id)
        .then(value => value.json())
}

export {getPostsOfUsers, getPostsOfUser}