import fs from 'fs';
import { getTime } from '../utils.js';

class Call {
	constructor(
		contactFrom,
		contactTo,
		type,
		duration = null,
		date = new Date().toISOString(),
		id = getTime(),
	) {
		this.id = id;
		this.contactFrom = contactFrom;
		this.contactTo = contactTo;
		this.date = date;
		this.duration = duration;
		this.type = type;
	}

	static fetchAll() {
		return new Promise((resolve, reject) => {
			const data = fs.readFileSync('src/calls/data.JSON');
			if (data) resolve(data);
			else reject('File read failed');
		});
	}

	static findById(id) {
		return new Promise((resolve, reject) => {
			const data = JSON.parse(fs.readFileSync('src/calls/data.JSON'));
			const found = data.find(el => el.id === id);
			if (found) resolve(found);
			else if (data) reject('Not Found');
			else reject('File read failed');
		});
	}
}

export default Call;
