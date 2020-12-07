var connection =  new require('./kafka/Connection');
//topics files
let CustomerSignup = require('./services/customer-signup');
let CustomerLogin = require('./services/customer-login');
let CustomerMenus = require('./services/customer-menus');
let CustomerOrders = require('./services/customer-orders');
let CustomerOrder = require('./services/customer-order');
let CustomerBasicDetails = require('./services/customer-basic-details');
let CustomerBasicDetail = require('./services/customer-basic-detail');
let Customers = require('./services/customers');
let RestaurantSignup = require('./services/restaurant-signup');
let RestaurantLogin = require('./services/restaurant-login');
let RestaurantMenu = require('./services/restaurant-menu');
let RestaurantMenus = require('./services/restaurant-menus');
let RestaurantCustomers = require('./services/restaurant-customers');
let RestaurantDetails = require('./services/restaurant-details');
let RestaurantInfo = require('./services/restaurant-info');
const connectDB = require('./db/mongoose');

connectDB();

function handleTopicRequest(topic_name,fname){
    //var topic_name = 'root_topic';
    var consumer = connection.getConsumer(topic_name);
    var producer = connection.getProducer();
    console.log('server is running ');
    consumer.on('message', function (message) {
        console.log('message received for ' + topic_name +" ", fname);
		console.log(JSON.stringify(message.value));
		console.log('message');
		console.log(message);
        var data = JSON.parse(message.value);
        
        fname.handle_request(data.data, function(err,res){
            console.log('after handle'+res);
            var payloads = [
                { topic: data.replyTo,
                    messages:JSON.stringify({
                        correlationId:data.correlationId,
                        data : res
                    }),
                    partition : 0
                }
            ];
            producer.send(payloads, function(err, data){
                console.log("Inside kafka backend",data);
            });
            return;
        });
        
    });
}
// Add your TOPICs here
//first argument is topic name
//second argument is a function that will handle this topic request
handleTopicRequest('customer_signup', CustomerSignup);
handleTopicRequest('customer_login', CustomerLogin);
handleTopicRequest('customer_menus', CustomerMenus);
handleTopicRequest('customer_orders', CustomerOrders);
handleTopicRequest('customer_order', CustomerOrder);
handleTopicRequest('customer_basic_details', CustomerBasicDetails);
handleTopicRequest('customer_basic_detail', CustomerBasicDetail);
handleTopicRequest('customers', Customers);
handleTopicRequest('restaurant_signup', RestaurantSignup);
handleTopicRequest('restaurant_login', RestaurantLogin);
handleTopicRequest('restaurant_menu', RestaurantMenu);
handleTopicRequest('restaurant_menus', RestaurantMenus);
handleTopicRequest('restaurant_customers', RestaurantCustomers);
handleTopicRequest('restaurant_details', RestaurantDetails);
handleTopicRequest('restaurant_info', RestaurantInfo);
