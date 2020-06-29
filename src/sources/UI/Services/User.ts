export const userService = {
    login,
    logout,
};

//TODO Note : Simplement pour modele cette page

function login(username, password) {
    // eslint-disable-next-line no-unused-vars
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({username, password})
    };

}

function logout() {
    localStorage.removeItem('user');
}