/*
    Question 8: Filter Active Users

Given:

type User = {
  id: string;
  name: string;
  isActive: boolean;
  lastLogin: string;
};

Write a function that returns only active users who logged in within the last 30 days.

Function signature:

function getRecentlyActiveUsers(users: User[]): User[]

*/

type User = {
    id: string;
    name: string;
    isActive: boolean;
    lastLogin: string;
}

// Assumptions: lastLogin values = "30 days", "1 month ago", "3 months ago", "5 months ago", "1 year ago"

function getRecentlyActiveUsers(users : User[]): User[]{

    let activeUsers = [];

    for(let user of users){
        if(user.isActive && user.lastLogin !== "30 days"){
            activeUsers.push(user);
        } 
    }

    return activeUsers;
}