Meteor.startup(function () {
    if (Meteor.users.find().count() === 0) {
        Accounts.createUser({
            username: 'user',
            email: 'email',
            password: 'asdfasdf',
            profile: {
                first_name: 'fname',
                last_name: 'lname',
                company: 'company',
            }
        });
        console.log('default user added');
    }
    var curations = Mongo.Collection.get('curations');
    if (curations.find().count() === 0) {
        for (var i = 1; i <= 10; i++) {
            var doc = {
                title: "item " + i,
                description: "Lorem ipsum sexex",
                image: ""
            };
            curations.insert(doc)
        }
        console.log(curations.find().count());
    }
});
