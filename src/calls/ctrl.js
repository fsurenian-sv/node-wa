import Call from './model.js';

const feature = '[calls]';

export const getCalls = (req, res) => {
	Call.fetchAll()
		.then(calls => {
			console.log(`${feature} Fetching all calls`);
			res.status(200).json({ success: true, payload: JSON.parse(calls) });
		})
		.catch(err => {
			console.error(`[ERROR] ${feature} Fetching all calls`);
			console.error(err);
			res.status(500).json({ success: false, err });
		});
};

export const getCall = (req, res) => {
	const { id } = req.params;

	Call.findById(id)
		.then(call => {
			console.log(`${feature} Fetching call with id: ${id}`);
			res.status(200).json({ success: true, payload: call });
		})
		.catch(err => {
			console.error(`[ERROR] ${feature} Fetching call with id: ${id}`);
			console.error(err);
			res.status(500).json({ success: false, err });
		});
};

export const createCall = (req, res) => {
	const {
		body: { contactFrom, contactTo, type, duration },
	} = req;

	const newCall = new Call(contactFrom, contactTo, type, duration);

	console.log(`${feature} Creating call`);
	res.status(201).json({ success: true, payload: newCall });
};

export const deleteCall = (req, res) => {
	const {
		params: { id },
	} = req;

	Call.findById(id)
		.then(call => {
			console.log(`${feature} Deleting call with id: ${id}`);
			res.status(200).json({ success: true, payload: { ...call } });
		})
		.catch(err => {
			console.error(`[ERROR] ${feature} Deleting call with id: ${id}`);
			console.error(err);
			res.status(500).json({ success: false, err });
		});
};
