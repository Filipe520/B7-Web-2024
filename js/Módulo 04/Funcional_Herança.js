const defaultUser = {
    name: ``,
    email: ``,
    level: 1
}

let user1 = {
    ...defaultUser,
    name: 'Filipe',
    email: 'filipe520@gmail.com',
}

let adm1 = {
    ...defaultUser,
    name: 'Admin Boladão',
    email: 'admin@admBoladao.com.br',
    level: 2
}

console.log(adm1)