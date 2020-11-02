import Contact from './model.js';

const feature = '[contacts]';

export const getContacts = (req, res) => {
	Contact.fetchAll()
		.then(contacts => {
			console.log(`${feature} Fetching all contacts`);
			res.status(200).json({ success: true, payload: JSON.parse(contacts) });
		})
		.catch(err => {
			console.error(`[ERROR] ${feature} Fetching all contacts`);
			console.error(err);
			res.status(500).json({ success: false, err });
		});
};

export const getContact = (req, res) => {
	const { id } = req.params;

	Contact.findById(id)
		.then(contact => {
			console.log(`${feature} Fetching contact with id: ${id}`);
			res.status(200).json({ success: true, payload: contact });
		})
		.catch(err => {
			console.error(`[ERROR] ${feature} Fetching contact with id: ${id}`);
			console.error(err);
			res.status(500).json({ success: false, err });
		});
};

export const createContact = (req, res) => {
	const {
		body: { name, alias, number, imgUrl },
	} = req;

	const newContact = new Contact(name, alias, number, imgUrl);

	console.log(`${feature} Creating contact for ${newContact.name}`);
	res.status(201).json({ success: true, payload: newContact });
};

export const updateContact = (req, res) => {
	const {
		body,
		params: { id },
	} = req;

	Contact.findById(id)
		.then(contact => {
			console.log(`${feature} Updating contact with id: ${id}`);
			res.status(200).json({ success: true, payload: { ...contact, ...body } });
		})
		.catch(err => {
			console.error(`[ERROR] ${feature} Updating contact with id: ${id}`);
			console.error(err);
			res.status(500).json({ success: false, err });
		});
};

export const deleteContact = (req, res) => {
	const {
		params: { id },
	} = req;

	Contact.findById(id)
		.then(contact => {
			console.log(`${feature} Deleting contact with id: ${id}`);
			res.status(200).json({ success: true, payload: { ...contact } });
		})
		.catch(err => {
			console.error(`[ERROR] ${feature} Deleting contact with id: ${id}`);
			console.error(err);
			res.status(500).json({ success: false, err });
		});
};
