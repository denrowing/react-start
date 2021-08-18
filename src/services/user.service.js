let url = 'https://jsonplaceholder.typicode.com/users'
const getUsers = () => {
  return  fetch(url)
        .then(value => value.json())
}

const  getUser = async (id) => {
    if (+id > 0) {
        throw new Error('must be greater then 0')
    }
   let user = await fetch(url + '/' + id)  // возвращает юзера по его id
        .then(value => value.json())
    return user;
}

export{getUsers}