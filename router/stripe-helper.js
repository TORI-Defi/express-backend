

module.exports = {
    
    calculateOrderAmount: (items) => {
        amountJson = JSON.parse(items.amount);
        console.log(amountJson);
        return amountJson;
    },

    formatReply: (items) => {
        type = items.type;
        token = items.token;
        amount = JSON.parse(items.amount);
        address = items.address;

        reply = `${type} $${amount} of ${token}  and send to ${address}`;
        console.log(reply)
        
        return reply
    },

    
}