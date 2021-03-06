const getAllRepoData = (username) => {
    return fetch(`https://api.github.com/users/${username}/repos?per_page=10`)
        .then(res => res.json())
}


export const fetchUsers = (username) => {
    return dispatch => {
        fetch(`https://api.github.com/users/${username}`)
        .then(res => res.json())
        .then(res => {
            // let repo = await getAllRepoData(username);
            let saveUser = window.localStorage.getItem('savedItems');
            saveUser = saveUser ? JSON.parse(saveUser) : []; 
            let alreadyViewd= false;
            if(saveUser.includes(res.id)) {
                alreadyViewd = true;
            } else {
                saveUser.push(res.id);
                window.localStorage.setItem('savedItems', JSON.stringify(saveUser));
            }
            dispatch({
                type: 'SUCCESS',
                data: {...res, alreadyViewd}
            });
        });
    }
}

