const NAME_OF_STORE = "Dalida's store";
let readline = require('prompt-sync')();
console.log(` YOU ARE WELCOME TO [${NAME_OF_STORE}] \n--------------------------------------------------------------`);
let isActive = true;
let product = {};
let user = {};
while (isActive){
    let choose = parseInt(readline("Enter '1' if you are a client or '2' if you are a customer and '3' to Quite -> "));
    if(choose === 2){
        let signer = parseInt(readline("Enter '1' to SignIn or '2' to SignUp -> "));
        let isEmpty = (x) => {
            for(let key in x){
                if(user.hasOwnProperty(key)){
                    return false;
                }
            }
            return true;
        }
        let check = (x, a, b) => {
            for(let key in x){
                if(x[key].login === a && x[key].pass === b){
                    return true;
                }
            }
            return false;
        }
        if(signer === 1){
            console.log("YOU ARE IN SIGN-IN PAGE!");
            let username = readline('Enter username -> ');
            let password = readline('Enter password -> ');
            if(check(user, username, password) === true){
                console.log(`YOU ARE WELCOME ${username}!!! YOU CAN (ADD/REMOVE/UPDATE) YOUR PRODUCT`);
                let want = readline("Enter ADD/REMOVE/UPDATE -> ");
                if(want === "ADD"){
                    let name = readline('Enter the name of product -> ');
                    let price = parseInt(readline('Enter price of the product -> '));
                    product[username] = {
                        'product name' : name,
                        'price' : price
                    }
                }else if(want === "UPDATE"){
                    let action = readline("IF YOUN WANT TO CHANGE ALL TYPE 'FIRST' OR TYPE 'SECOND' TO CHANGE PRODUCT NAME OR TYPE 'THREE' TO CHANGE PRICE");
                    if (action === "FIRST"){
                        name = readline("Enter the name of product -> ");
                        price = parseInt(readline("Enter price of the product -> "));
                        product[username]['product name'] = name;
                        product[username]['price'] = price;
                    }else if(action === "SECOND"){
                        name = readline("Enter the name of product -> ");
                        product[username]['product name'] = name;
                    }else if(action === "THREE"){
                        price = parseInt(readline("Enter price of the product -> "));
                        product[username]['price'] = price;
                    }else{

                    }
                }
            }else{
                console.log("Login is failed!");
            }
        }else if(signer === 2){
            console.log("YOU ARE IN REGISTRATION PAGE!");
            if(isEmpty(user) === true){
                let username = readline('Enter username -> ');
                let password = readline('Enter password -> ');
                user['customer'] = {
                    'login' : username,
                    'pass' : password
                }
            }else{
                let username = readline('Enter username -> ');
                let password = readline('Enter password -> ');
                if(check(user, username, password) === true){
                    console.log("User is already have!")
                    continue;
                }else{
                    user['customer'] = {
                        'login' : username,
                        'pass' : password
                    }
                }
            }
        }else{

        }
    }else if(choose === 1){
        let name = readline("Pls, enter your name -> ");
        let basket = {};
        let isBuy = true;
        while(isBuy) {
            let buy = readline("What do you want to buy? Enter name of product or 'Exit' -> ");
            if(buy === "Exit"){
                isBuy = false;
            }else {
                for (let key in product) {
                    if (product[key]['product name'] === buy) {
                        basket[product[key]['product name']] = product[key]['price'];
                    }else{
                        console.log("This product doesn't have");
                    }
                }
            }
        }
        let cnt = 0;
        for(let key in basket){
            cnt += basket[key];
        }
        console.log(` ${name} YOUR TOTAL PRICE = ${cnt}`);
    }else{
        isActive = false;
    }
}

console.log(user);
console.log(product);


// I WANNA SLEEP!

