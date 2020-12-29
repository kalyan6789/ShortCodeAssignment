
import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})


export class AppComponent {
	title = 'Users List';

	// Add few users for initial listing
	studentsList = [
	{	
		id : 1,
		first_name : "Aravind",
		last_name : "Kalyan",
		email : "aravind567@shortcode.com",
		
	},
	{
		id : 2,
		first_name : "Sai",
		last_name : "Kumar",
		email : "sai23@shortcode.com",
		
	},
	{
		id : 3,
		first_name : "Ram",
		last_name : "Kumar",
		email : "ramsai1245@shortcode.com",
		
	},
	{
		id : 4,
		first_name : "Shankar",
		last_name : "Dattha",
		email : "shanka345r@shortcode.com",
	
	},
	{
		id : 5,
		first_name : "Vijay",
		last_name : "Parker",
		email : "vijay435@shorcode.com",
		
	}
	];

	constructor() {
		// Save users to localStorage
		localStorage.setItem('students', JSON.stringify(this.studentsList));
	}
}

