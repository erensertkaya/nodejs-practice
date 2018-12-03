let userId;
const user = {id: 10, name: 'eren'};
const friends = [{id: 11, name: 'samet'}, {id: 12, name: 'yasin'}];

const getUser = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(user);
        }, 3000);
    });
};

const getFriends = (userId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(friends);
        }, 1000)
    });
};


/*

//callback hell
getUser().then((x) => {
    userId = x.id;
    getFriends(userId).then((y) => {
        console.log(y);
        console.log(x);
    })
});

*/

/*
//Promise Chain Instance

getUser()
    .then((x) => {
        return x.id;
    })
    .then((userId) => {
        getFriends(userId)
            .then((friends) => {
                console.log(friends);
            })
    })
*/
//Promise Chain Instance 2

/*
getUser()
    .then((x) => {
        return getFriends(x.id);
    })
    .then((friends) => {
        console.log(friends);
    })
*/

//Async-Await

/*
async function asyncToSync() {
    const user = await getUser();
    console.log(user);
    const friends = await getFriends();
    console.log(friends);
}

asyncToSync();
*/










