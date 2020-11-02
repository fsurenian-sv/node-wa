import fs from 'fs';
import { getTime } from '../utils.js';

class Contact {
	constructor(name, alias, number, imgUrl, id = getTime()) {
		this.id = id;
		this.name = name;
		this.alias = alias;
		this.number = number;
		this.imgUrl = imgUrl;
	}

	static fetchAll() {
		return new Promise((resolve, reject) => {
			const data = fs.readFileSync('src/contacts/data.JSON');
			if (data) resolve(data);
			else reject('File read failed');
		});
	}

	static findById(id) {
		return new Promise((resolve, reject) => {
			const data = JSON.parse(fs.readFileSync('src/contacts/data.JSON'));
			const found = data.find(el => el.id === id);
			if (found) resolve(found);
			else if (data) reject('Not Found');
			else reject('File read failed');
		});
	}
}

export default Contact;
