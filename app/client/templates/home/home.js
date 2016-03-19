Curation = Mongo.Collection.get('curations');

/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.Home.events({});

/*****************************************************************************/
/* Home: Helpers */
/*****************************************************************************/
Template.Home.helpers({});

/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.Home.onCreated(function () {
});

Template.Home.onRendered(function () {
    $("#slider").flexslider({
        animation: "slide",
        controlNav: true,
        slideshow: true,
    });
});

Template.Home.onDestroyed(function () {
});
