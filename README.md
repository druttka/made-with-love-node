made-with-love-node
===================

Node middleware to set an x-made-with header to &lt;3, or any custom ingredient you choose!

### Why?

All the designers are putting it in their footers

> Made with <3

Those of us working on the backing APIs and services that power the web are left with no good way to let our consumers know that **we care too!**

Until now!

### Express Usage

    var madeWithLove = require('made-with-love');
    app.use(madeWithLove.middleware());

Or if you don't want to use the default `<3` ingredient,

    var madeWithLove = require('made-with-love');
    app.use(madeWithLove.middleware( { ingredient: 'love' }));
