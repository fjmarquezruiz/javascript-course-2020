const express = require('express');
const { MongoClient } = require('mongodb');

const router = express.Router();

const uri =
	'mongodb+srv://<user>:<password>@<cluster-url>?retryWrites=true&w=majority';

const client = new MongoClient(uri);

const locationStorage = {
	locations: [],
};

router.post('/add-location', (req, res, next) => {
	const id = Math.random();
	locationStorage.locations.push({
		id: id,
		address: req.body.address,
		coords: { lat: req.body.lat, lng: req.body.lng },
	});
	res.json({ message: 'Stored location!', locId: id });

	async function run() {
		try {
			await client.connect();

			const database = client.db('locations');
			const collection = database.collection('user-locations');

			// Query for a movie that has the title 'Back to the Future'
			const query = {
                id: id,
                address: req.body.address,
                coords: { lat: req.body.lat, lng: req.body.lng },
            };
			const movie = await collection.insertOne(query);

			console.log(movie);
		} finally {
			// Ensures that the client will close when you finish/error
			await client.close();
		}
	}
	run().catch(console.dir);
});

router.get('/location/:lid', (req, res, next) => {
	const locationId = +req.params.lid;
	const location = locationStorage.locations.find((loc) => {
		return loc.id === locationId;
	});

	if (!location) {
		return res.status(404).json({ message: 'Not found!' });
	}

	res.status(200).json({
		address: location.address,
		coordinates: location.coordinates,
	});
});

module.exports = router;
