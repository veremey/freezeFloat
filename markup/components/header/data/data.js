var data = {header: {
	main: {
		item: [
			{list: [
				{ link: 'float', name: 'Float'},
				{ link: 'float-service', name: 'Services',
				submenu: ['Float', 'freeze', 'infrared sauna']
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
				{ link: 'float', name: 'Float'},
				{ link: 'float-service', name: 'Services',
				submenu: ['Float', 'freeze', 'infrared sauna']},
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
				{ link: 'float', name: 'Float'},
				{ link: 'float-service', name: 'Services', active: 'is-active',
				submenu: ['Float', 'freeze', 'infrared sauna']},
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
				{ link: 'float', name: 'Float', active: 'is-active'},
				{ link: 'float-service', name: 'Services',
				submenu: ['Float', 'freeze', 'infrared sauna']},
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
				{ link: 'freeze', name: 'freeze', active: 'is-active'},
				{ link: 'float-service', name: 'Services',
				submenu: ['Float', 'freeze', 'infrared sauna']},
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
				{ link: 'freeze', name: 'freeze'},
				{ link: 'float-service', name: 'Services',
				submenu: ['Float', 'freeze', 'infrared sauna']},
			]},
			{list: [
				{ link: 'about', name: 'about'},
				{ link: 'contact', name: 'contact us', active: 'is-active'}
			]},
		]
	}
}};