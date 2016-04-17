/*
 * GET home page.
 */

var fs = require('fs');
var path = require('path');

exports.index = function(req, res) {
	res.render('index', {
		title : 'ParkWiz'
	});
};

exports.panaroma = function(req, res) {
	res.render('panaroma', {
		title : 'ParkWiz'
	});
};

exports.details = function(req, res) {
	res.render('details', {
		title : 'ParkWiz'
	});
};

exports.uploadimage = function(req, res) {
	res.render('uploadImage', {
		title : 'ParkWiz'
	});
};

exports.search = function(req, res) {
	res.render('search', {
		title : 'ParkWiz'
	});
};

exports.myaccount = function(req, res) {
	var userDetails = {
		'userid': 0,
  		'firstname': 'Shivi',
  		'lastname': 'Jain',
  		'email': 'blah@foo.com',
  		'password': '',
  		'address': 'blah st, San Jose, Ca',
  		'phoneno': '111-222-3333',
  		'isVendor': 'no'
	};
	
	res.render('myaccount', {
		title : 'ParkWiz',
		userDetails: userDetails
	});

};

exports.bookinghistory = function(req, res) {
	res.render('bookinghistory', {
		title : 'ParkWiz'
	});
};

/*
 upload image
 */
exports.upload = function(req, res) {
	fs.readFile(req.files.upl.path, function(err, data) {
		var name = req.files.upl.name;
		if (!name) {
			console.log("error no files has been selected");
		} else {
			var newPath = path.join(__dirname, '../public/images/uploaded/') + name;
			fs.writeFile(newPath, data, function(err) {
				if (err) {
					throw err;
				} else {
					console.log("File saved");
				}
			});
		}
	});

};