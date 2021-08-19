const getPostsOfUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/')
        .then(value => value.json())
}

export {getPostsOfUsers}