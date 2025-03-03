var Menu = require('../models/menu');

handle_request =  async(msg, callback) => {
    const menu = await Menu.findById(msg.id);
    const customer = msg.user._id;
    try {
        const customerEntry = {
            status: "Pending",
            order_date: Date.now(),
            customer
        }
		menu.order.unshift(customerEntry);
        await menu.save();

        callback(null, {status: 200, responseMessage: "Successful"});
    } catch (e) {
		callback(null, {status: 500, responseMessage: 'Unable to save data.'});
    }
}

exports.handle_request = handle_request;
