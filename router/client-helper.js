
module.exports = {
    
    calculateOrderAmount: (items) => { //on success calc num of tokens 
        amountJson = JSON.parse(items.amount);
        console.log(amountJson);
        return amountJson;
    },

    formatOrder: (order) => {
        let user = order.userPhone;
        let type = order.type;
        let token = order.token;
        let amount = JSON.parse(order.amount);
        let address = order.address;

        let formatted = { 
            user: `${user}`,
            type: `${type}`,
            token: `${token}`,
            amount: `${amount}`,
            address: `${address}`,
        };
        console.log(formatted)
        
        return formatted
    },


}