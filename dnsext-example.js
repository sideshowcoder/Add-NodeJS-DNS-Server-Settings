var dnsext = require('../lib/dnsext');

// resolve with one NS
var c1 = dnsext.initChannelWithNs('8.8.4.4'),
 		c2 = dnsext.initChannelWithNs('8.8.8.8'),
		c3 = dnsext.initChannelWithNs();

dnsext.getHostByName(c1, 'yahoo.de', function(err, domains){
	if(err) console.log(err);
	console.log(domains);
});

dnsext.getHostByName(c2, 'google.de', function(err, domains){
	if(err) console.log(err);
	console.log(domains);
});

dnsext.getHostByName(c3, 'facebook.com', function(err, domains){
	if(err) console.log(err);
	console.log(domains);
});
