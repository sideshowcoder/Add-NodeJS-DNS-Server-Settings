var dnsext = require('./dnsext');

// resolve with one NS
var g1 = dnsext.initChannelWithNs('8.8.4.4');
var g2 = dnsext.initChannelWithNs('8.8.8.8');

dnsext.getHostByName(g1, 'yahoo.de', function(err, domains){
	if(err) console.log(err);
	console.log(domains);
});

dnsext.getHostByName(g2, 'google.de', function(err, domains){
	if(err) console.log(err);
	console.log(domains);
});

