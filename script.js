let user1 = { name : "Raushan Bhai Patel", role : "admin"};
let user2 = { name : "Adrina Patel", role : "manager" };
let user3 = { name : "Archi Kumari", role : "customer" };
let user4 = { name : "Sonu Kumar", role : "customer"};
/* Higher Order Function */
function authorize(requiredRole){
    return function(user){
        if(user.role === requiredRole){
            console.log(`Access granted for ${user.name}`);
        }else{
            console.log(`Access denied for ${user.name}`);
        }
    };
}

// let isAdmin = authorize("admin");
// /* Return a function that check role === "admin" */
// let isManager = authorize("manager");
// /* Return a function that check role === "manager" */
// let isCustomer = authorize("customer");
// /* Return a function that check role === "customer" */

// isAdmin(user1);
// isAdmin(user2);

/* Simplest Version */
function authorize(user, requiredRole){
    if (user.role === requiredRole){
        console.log(`Access granted for ${user.name}.`);
    }else {
        console.log(`Access denied for ${user.name}.`);
    }
}
authorize(user1, "admin");
authorize(user2, "admin");
authorize(user3, "admin");
authorize(user2, "manager");
authorize(user4, "customer");