var data = {header: {
	main: {
		item: [
			{list: [
				{ link: 'float', name: 'why Float'},
				{ link: 'float-service', name: 'Services',
				submenu: [
					{
						name: 'Float',
						link: 'float'
					}, {
						name: 'freeze',
						link: 'freeze'
					}, {
						name: 'infrared sauna',
						link: 'sauna'
					}
				]
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
				{ link: 'float', name: 'why Float'},
				{ link: 'float-service', name: 'Services',
				submenu: [
					{
						name: 'Float',
						link: 'float'
					}, {
						name: 'freeze',
						link: 'freeze'
					}, {
						name: 'infrared sauna',
						link: 'sauna'
					}
				]
				},
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
				{ link: 'float', name: 'why Float'},
				{ link: 'float-service', name: 'Services', active: 'is-active',
				submenu: [
					{
						name: 'Float',
						link: 'float'
					}, {
						name: 'freeze',
						link: 'freeze'
					}, {
						name: 'infrared sauna',
						link: 'sauna'
					}
				]
				},
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
				submenu: [
					{
						name: 'Float',
						link: 'float'
					}, {
						name: 'freeze',
						link: 'freeze'
					}, {
						name: 'infrared sauna',
						link: 'sauna'
					}
				]
				},
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
				{ link: 'float', name: 'why float'},
				{ link: 'float-service', name: 'Services',
				submenu: [
					{
						name: 'Float',
						link: 'float'
					}, {
						name: 'freeze',
						link: 'freeze'
					}, {
						name: 'infrared sauna',
						link: 'sauna'
					}
				]
				},
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
				{ link: 'float', name: 'why float'},
				{ link: 'float-service', name: 'Services',
				submenu: [
					{
						name: 'Float',
						link: 'float'
					}, {
						name: 'freeze',
						link: 'freeze'
					}, {
						name: 'infrared sauna',
						link: 'sauna'
					}
				]
				},
			]},
			{list: [
				{ link: 'about', name: 'about'},
				{ link: 'contact', name: 'contact us', active: 'is-active'}
			]},
		]
	}
}};