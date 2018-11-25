var data = {header: {
	main: {
		item: [
			{list: [
				{ link: 'float', name: 'Why Float'},
				{ link: 'float-service', name: 'Services'},
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
				{ link: 'float-service', name: 'Services'},
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
				{ link: 'float-service', name: 'Services', active: 'is-active'},
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
				{ link: 'float-service', name: 'Services'},
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
				{ link: 'float-service', name: 'Services'},
			]},
			{list: [
				{ link: 'about', name: 'about'},
				{ link: 'contact', name: 'contact us'}
			]},
		]
	}
}};