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
const usersEmails = users.map((n) => n.email);
const totalYearsOfExperience = users.reduce((total, user) => {
        return total + user.yearsOfExperience;
}, 0);
const numberOfUsers = users.length;
const averageYearsOfExperience = totalYearsOfExperience/numberOfUsers;
const longestEmail = users.reduce((longestEmailCurrently, user) => {
   if(user.email.length > longestEmailCurrently.length){
       return user.email;
   }
   return longestEmailCurrently;
}, '');
const userNames = users.reduce((total, user) => {
    debugger;
    return `${total} ${user.name}`
}, 'Your instructors are: ');
console.log(longestEmail);
console.log(averageYearsOfExperience);
console.log(totalYearsOfExperience);
console.log(arrayOfUserLanguages);
console.log(usersEmails);
console.log(userNames);
