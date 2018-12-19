const wait = delay => new Promise((resolve, reject) => setTimeout(resolve, delay));

wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

const githubAPIToken = '7gd4beg9439418gd3d8fccbd596g98g446:118g5';

const fetchOptions = {headers: {'Authorization': `token ${githubAPIToken}`}};

const githubfetch = username => fetch(`https://api.github.com/users/${username}/events`, fetchOptions)
    .then((response) => response.json())
    .then((response) => response[0])
    .then((response) => response.created_at)
    .then((response) => console.log(response));

const encrypt = (input) => {
    if(typeof(input) != "string"){
        return undefined;
    }
    let shift = new TextEncoder("utf-8").encode(input);
    for(let i = 0; i < shift.length; i++){
        shift[i] += 1;
    }
    const result = new TextDecoder("utf-8").decode(shift);
    return result;
};

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