const wait = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('It has been resolved!');
    }, 1000);
});

wait.then(function (string) {
    console.log(string);
});

const githubAPIToken = '7gd4beg9439418gd3d8fccbd596g98g446:118g5';

const fetchOptions = {headers: {'Authorization': `token ${githubAPIToken}`}};

const githubfetch = fetch('https://api.github.com/users/allenjustinblanco/events', fetchOptions)
    .then((response) => {
        const jsonResponse = response.json();
        return jsonResponse;
    })
    .then((response) => {
        return response[0]
    })
    .then((response) => {
        return response.created_at;
    });
console.log(githubfetch);

//function to decrypt githubAPIkey
const decrypt = (input) => {
    if(typeof(input) != "string"){
        return undefined;
    }
    let shift = new TextEncoder("utf-8").encode(input);
    for(let i = 0; i < shift.length; i++){
        shift[i] -= 1;
    }

    const result = new TextDecoder("utf-8").decode(shift);
    return result;
};

