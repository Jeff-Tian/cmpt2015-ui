'use strict';
require('express')()
    .use('/cmpt2015', require('./controller'))
    .listen(process.env.PORT || 3006);
console.log('app listening on port %d', process.env.PORT || 3006);