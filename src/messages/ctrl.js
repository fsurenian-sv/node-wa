import Message from './model.js';

const feature = '[messages]';

export const getMessages = (req, res) => {
	Message.fetchAll()
		.then(messages => {
			console.log(`${feature} Fetching all messages`);
			res.status(200).json({ success: true, payload: JSON.parse(messages) });
		})
		.catch(err => {
			console.error(`[ERROR] ${feature} Fetching all messages`);
			console.error(err);
			res.status(500).json({ success: false, err });
		});
};

export const getMessage = (req, res) => {
	const { id } = req.params;

	Message.findById(id)
		.then(message => {
			console.log(`${feature} Fetching message with id: ${id}`);
			res.status(200).json({ success: true, payload: message });
		})
		.catch(err => {
			console.error(`[ERROR] ${feature} Fetching message with id: ${id}`);
			console.error(err);
			res.status(500).json({ success: false, err });
		});
};

export const createMessage = (req, res) => {
	const {
		body: { contactFrom, contactTo, text },
	} = req;

	const newMessage = new Message(contactFrom, contactTo, text);

	console.log(`${feature} Creating message for ${newMessage.name}`);
	res.status(201).json({ success: true, payload: newMessage });
};

export const updateMessage = (req, res) => {
	const {
		body,
		params: { id },
	} = req;

	Message.findById(id)
		.then(message => {
			console.log(`${feature} Updating message with id: ${id}`);
			res.status(200).json({ success: true, payload: { ...message, ...body } });
		})
		.catch(err => {
			console.error(`[ERROR] ${feature} Updating message with id: ${id}`);
			console.error(err);
			res.status(500).json({ success: false, err });
		});
};

export const deleteMessage = (req, res) => {
	const {
		params: { id },
	} = req;

	Message.findById(id)
		.then(message => {
			console.log(`${feature} Deleting message with id: ${id}`);
			res.status(200).json({ success: true, payload: { ...message } });
		})
		.catch(err => {
			console.error(`[ERROR] ${feature} Deleting message with id: ${id}`);
			console.error(err);
			res.status(500).json({ success: false, err });
		});
};
