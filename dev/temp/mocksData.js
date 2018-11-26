/* Module data structure */

// moduleName: {
//     dataType: {
//         property: value
//     }
// }

/* Module data example */

_template: {
    big: {
        title: 'Hello world',
        age: 10,
        button: false
    }
},

'benefits': {
	float: {
		title: 'Float benefits',
		desc: 'Anyone can benefit from incorporating floating into their wellness routine. Consistent floating can help alleviate the following.',
		list: ['Stress relief', 'Emotional and pain relief', 'Pain relief', 'Injury recovery', 'Insomnia', 'Athletic training recovery', 'Addiction', 'Heart disease', 'Enhanced creativity', 'Problem-solving', 'Cognitive ability', 'Sports performance', 'Hair and skin health', 'Weight-loss', 'Overall well-being ']
	},
	service: {
		topMod: 'picture-ben',
		title: 'OUR BENEFITS',
		pictureList: {
			ben: [{
				icon: 'icon1.png',
				title: 'Weight loss',
				desc: '30-minute sessions can burn up to 200-600 calories.'
			}, {
				icon: 'icon2.png',
				title: 'Pain relief',
				desc: 'Relieve back, neck, and arthritis pain.'
			}, {
				icon: 'icon3.png',
				title: 'Anti-aging',
				desc: 'Reduces wrinkles, makes skin look radiant, firms and improves skin tone and elasticity.'
			}, {
				icon: 'icon4.png',
				title: 'Improved circulation',
				desc: 'Heating of muscles with infrared produces an increased blood flow level similar to that seen during exercise.'
			}, {
				icon: 'icon5.png',
				title: 'Speedy recovery from injuries',
				desc: 'Heating of muscles'
			}, {
				icon: 'icon6.png',
				title: 'Lowering blood pressure',
				desc: 'Repeated infrared treatment improves impaired blood vessel functions in patients with high blood pressure, diabetes, and high cholesterol.'
			}
			]
		}
	}
},

'clients': {},

'contact': {},

'head': {
    defaults: {
        title: 'freeze&float',
        useSocialMetaTags: false
    },
    service: {
        title: 'service',
        useSocialMetaTags: false
    },
    float: {
        title: 'float',
        useSocialMetaTags: false
    },
    freeze: {
        title: 'freeze',
        useSocialMetaTags: false
    },
    sauna: {
        title: 'sauna',
        useSocialMetaTags: false
    }
},

'header': {
	main: {
		item: [
			{list: [
				{ link: '/freezeFloat/dev/float', name: 'Why Float'},
				{ link: '/freezeFloat/dev/float-service', name: 'Services'},
			]},
			{list: [
				{ link: '/freezeFloat/dev/about', name: 'about'},
				{ link: '/freezeFloat/dev/contact', name: 'contact us'}
			]},
		]
	},
	about: {
		inner: 'header-inner',
		item: [
			{list: [
				{ link: '/freezeFloat/dev/float', name: 'Why Float'},
				{ link: '/freezeFloat/dev/float-service', name: 'Services'},
			]},
			{list: [
				{ link: '/freezeFloat/dev/about', name: 'about', active: 'is-active'},
				{ link: '/freezeFloat/dev/contact', name: 'contact us'}
			]},
		]
	},
	service: {
		inner: 'header-inner',
		item: [
			{list: [
				{ link: '/freezeFloat/dev/float', name: 'Why Float'},
				{ link: '/freezeFloat/dev/float-service', name: 'Services', active: 'is-active'},
			]},
			{list: [
				{ link: '/freezeFloat/dev/about', name: 'about'},
				{ link: '/freezeFloat/dev/contact', name: 'contact us'}
			]},
		]
	},
	float: {
		inner: 'header-inner',
		item: [
			{list: [
				{ link: '/freezeFloat/dev/float', name: 'Why Float', active: 'is-active'},
				{ link: '/freezeFloat/dev/float-service', name: 'Services'},
			]},
			{list: [
				{ link: '/freezeFloat/dev/about', name: 'about'},
				{ link: '/freezeFloat/dev/contact', name: 'contact us'}
			]},
		]
	},
	freeze: {
		inner: 'header-inner',
		item: [
			{list: [
				{ link: '/freezeFloat/dev/freeze', name: 'Why freeze', active: 'is-active'},
				{ link: '/freezeFloat/dev/float-service', name: 'Services'},
			]},
			{list: [
				{ link: '/freezeFloat/dev/about', name: 'about'},
				{ link: '/freezeFloat/dev/contact', name: 'contact us'}
			]},
		]
	},
	contact: {
		inner: 'header-inner',
		item: [
			{list: [
				{ link: '/freezeFloat/dev/freeze', name: 'Why freeze'},
				{ link: '/freezeFloat/dev/float-service', name: 'Services'},
			]},
			{list: [
				{ link: '/freezeFloat/dev/about', name: 'about'},
				{ link: '/freezeFloat/dev/contact', name: 'contact us', active: 'is-active'}
			]},
		]
	}
},

'resort': {
	mainPage: {
		first: 'picture',
		second: 'content',
		picture: 'static/img/content/sky.png',
		title: 'the<br>resort',
		desc: ['Freeze & Float Spa is a boutique property with tranquil valley views in the rural village of Sebali, just outside of Ubud.</br>', 'It is attuned to the surrounding environment through a thoughtful design that respects Bali’s rich artistry and cultural heritage.']
	},
	float: {
		mod: 'float-resort',
		first: 'picture',
		second: 'content',
		picture: 'static/img/content/inWater.png',
		title: 'THE</br>FOAT',
		desc: ['Regularly floating not only reduces health problems it also boosts the following mind and body improvements.']
	},
	sauna: {
		mod: 'sauna-resort',
		first: 'picture',
		second: 'content',
		picture: 'static/img/content/inWater.png',
		title: 'HOW</br>IT WORKS?',
		desc: ['Infrared heat is completely healthy and safe. You can be exposed to infrared heat for hours and it will never cause your skin to burn.']
	},
	service: {
		bg: true,
		mod: 'service-resort',
		first: 'picture',
		second: 'content',
		picture: 'static/img/content/candles.png',
		title: 'HOW</br>IT WORKS?',
		desc: ['Infrared heat is completely healthy and safe. You can be exposed to infrared heat for hours and it will never cause your skin to burn.'],
		about: 'Book Now'
	},
},

'service': {},

'subheader': {},

__pages: [{
                name: 'about',
                href: 'about.html'
             },{
                name: 'contact',
                href: 'contact.html'
             },{
                name: 'float-service',
                href: 'float-service.html'
             },{
                name: 'float',
                href: 'float.html'
             },{
                name: 'freeze',
                href: 'freeze.html'
             },{
                name: 'index',
                href: 'index.html'
             },{
                name: 'main',
                href: 'main.html'
             },{
                name: 'sauna',
                href: 'sauna.html'
             },{
                name: 'service',
                href: 'service.html'
             }]