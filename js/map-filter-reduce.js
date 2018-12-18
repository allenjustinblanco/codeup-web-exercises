const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

const arrayOfUserLanguages = users.filter(users => users.languages.length >= 3);
const usersEmails = users.map(function(n){
   return n.email;
});
const totalYearsOfExperience = users.reduce((total, user) => {
        return total + user.yearsOfExperience;
}, 0);
const numberOfUsers = users.length;
const averageYearsOfExperience = totalYearsOfExperience/numberOfUsers;
const longestEmail = users.reduce((total, user) => {
   return user.email.length;
}, '');
const userNames = users.reduce((total, user) => {
    return total + user.name;
}, '');

console.log(averageYearsOfExperience);
console.log(totalYearsOfExperience);
console.log(arrayOfUserLanguages);
console.log(usersEmails);
console.log(userNames);
