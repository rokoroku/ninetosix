ReviewController = RouteController.extend({

    // A place to put your subscriptions
    // this.subscribe('items');
    // // add the subscription to the waitlist
    // this.subscribe('item', this.params._id).wait();

    subscriptions: function () {
    },

    // Subscriptions or other things we want to "wait" on. This also
    // automatically uses the loading hook. That's the only difference between
    // this option and the subscriptions option above.
    // return Meteor.subscribe('post', this.params._id);

    waitOn: function () {
    },

    // A data function that can be used to automatically set the data context for
    // our layout. This function can also be used by hooks and plugins. For
    // example, the "dataNotFound" plugin calls this function to see if it
    // returns a null value, and if so, renders the not found template.
    // return Posts.findOne({_id: this.params._id});

    data: function () {
        return {
            title: '봄날 햇살처럼 상큼한 바이브레이터',
            cover: '/image/staffpick4.png',
            review: "  꽃샘추위마저 물러갔다. 그토록 기다렸던 봄. 겨울동안 함께하였던 사뭇 무겁기도, 칙칙하기도, 다소간 민망하게도 느껴지는 친구들과 작별할 시간이 왔다." +
            "그 대신 가볍고 산뜻한 느낌의 새로운 친구들을 만나볼 차례이기도 하다. 어떤 것들이 있을까? 이번 봄 화제를 모으고 있는 네 가지 종류의 바이브레이터 셀렉션을 소개한다.",
            curations: [
                {
                    title: 'Related Items',
                    item: [
                        {
                            title: 'Gigi™',
                            description: 'LELO',
                            image: 'http://ecx.images-amazon.com/images/I/317eS5IGuKL.jpg'
                        },
                        {
                            title: 'ORA™ ',
                            description: 'LELO',
                            image: 'https://www.lelo.com/sites/default/files/styles/medium/public/LELO_Insignia_ORA_product-1_midnight-blue_2x_2.jpg?itok=hcBSUNm8'
                        },
                        {
                            title: 'LELO',
                            description: 'SORAYA™',
                            image: 'https://www.lelo.com/sites/default/files/styles/medium/public/LELO_Insignia_Soraya_product_cerise_2x_0.jpg?itok=jzGPNcO_'
                        },
                        {
                            title: 'LILY™ 2',
                            description: 'LELO',
                            image: 'https://www.lelo.com/sites/default/files/styles/medium/public/LELO_Femme-Homme_LILY-2_product_plum.jpg?itok=ricTSU3R'
                        },

                    ]
                }
            ],
        };
    },

    // You can provide any of the hook options

    onRun: function () {
        this.next();
    },
    onRerun: function () {
        this.next();
    },
    onBeforeAction: function () {
        this.next();
    },

    // The same thing as providing a function as the second parameter. You can
    // also provide a string action name here which will be looked up on a Controller
    // when the route runs. More on Controllers later. Note, the action function
    // is optional. By default a route will render its template, layout and
    // regions automatically.
    // Example:
    //  action: 'myActionFunction'

    action: function () {
        this.render();
    },
    onAfterAction: function () {
    },
    onStop: function () {
    }
});
