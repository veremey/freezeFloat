var data = {header: {
	main: {
		item: [
			{list: [
				{ link: 'float', name: 'Why Float'},
				{ link: 'float-service', name: 'Services',
				submenu: ['Delivery', 'Cleaning']
			},
			]},
			{list: [
				{ link: 'about', name: 'about'},
				{ link: 'contact', name: 'contact us'}
			]},
		]
	},
	about: {
		inner: 'header-inner',
		item: [
			{list: [
				{ link: 'float', name: 'Why Float'},
				{ link: 'float-service', name: 'Services',
				submenu: ['Delivery', 'Cleaning']},
			]},
			{list: [
				{ link: 'about', name: 'about', active: 'is-active'},
				{ link: 'contact', name: 'contact us'}
			]},
		]
	},
	service: {
		inner: 'header-inner',
		item: [
			{list: [
				{ link: 'float', name: 'Why Float'},
				{ link: 'float-service', name: 'Services', active: 'is-active',
				submenu: ['Delivery', 'Cleaning']},
			]},
			{list: [
				{ link: 'about', name: 'about'},
				{ link: 'contact', name: 'contact us'}
			]},
		]
	},
	float: {
		inner: 'header-inner',
		item: [
			{list: [
				{ link: 'float', name: 'Why Float', active: 'is-active'},
				{ link: 'float-service', name: 'Services',
				submenu: ['Delivery', 'Cleaning']},
			]},
			{list: [
				{ link: 'about', name: 'about'},
				{ link: 'contact', name: 'contact us'}
			]},
		]
	},
	freeze: {
		inner: 'header-inner',
		item: [
			{list: [
				{ link: 'freeze', name: 'Why freeze', active: 'is-active'},
				{ link: 'float-service', name: 'Services',
				submenu: ['Delivery', 'Cleaning']},
			]},
			{list: [
				{ link: 'about', name: 'about'},
				{ link: 'contact', name: 'contact us'}
			]},
		]
	},
	contact: {
		inner: 'header-inner',
		item: [
			{list: [
				{ link: 'freeze', name: 'Why freeze'},
				{ link: 'float-service', name: 'Services',
				submenu: ['Delivery', 'Cleaning']},
			]},
			{list: [
				{ link: 'about', name: 'about'},
				{ link: 'contact', name: 'contact us', active: 'is-active'}
			]},
		]
	}
}};