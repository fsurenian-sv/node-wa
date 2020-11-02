import fs from 'fs';
import { getTime } from '../utils.js';

class Message {
	constructor(contactFrom, contactTo, text, date = new Date().toISOString(), id = getTime()) {
		this.id = id;
		this.contactFrom = contactFrom;
		this.contactTo = contactTo;
		this.text = text;
		this.date = date;
	}

	static fetchAll() {
		return new Promise((resolve, reject) => {
			const data = fs.readFileSync('src/messages/data.JSON');
			if (data) resolve(data);
			else reject('File read failed');
		});
	}

	static findById(id) {
		return new Promise((resolve, reject) => {
			const data = JSON.parse(fs.readFileSync('src/messages/data.JSON'));
			const found = data.find(el => el.id === id);
			if (found) resolve(found);
			else if (data) reject('Not Found');
			else reject('File read failed');
		});
	}
}

export default Message;
