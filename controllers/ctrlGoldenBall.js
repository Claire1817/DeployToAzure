const winnerlist = function (req, res) {
    res.render('goldenBall', {
        winnersPlayer: [
            {year:'2011', player:'Lionel Messi'},
            {year:'2012', player:'Lionel Messi'},
            {year:'2013', player:'Cristiano Ronaldo'},
            {year:'2014', player:'Cristiano Ronaldo'},
            {year:'2015', player:'Lionel Messi'},
            {year:'2016', player:'Cristiano Ronaldo'},
            {year:'2017', player:'Cristiano Ronaldo'},

        ]
    });
};

module.exports= {
    winnerlist
};