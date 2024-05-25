var mukundaparajuli = {
    dbId: 123,
    email: "mukunda@mukunda.com",
    id: 22737,
    startTrial: function () {
        return "Mukunda";
    },
    //you dont need to match the variable as of interface
    getCoupon: function (name) {
        return 13;
    },
};
// mukundaparajuli.dbId = 1234;     =>not allowed since it is read only
mukundaparajuli.email = "m@m.com";
