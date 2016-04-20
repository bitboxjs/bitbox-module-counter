import reloader from 'systemjs-hot-reloader'

new reloader(/** host */)
	.on('change', (file) => document.title = file)

// System.import('systemjs-hot-reloader')
// 	.then(function(m) {
// 		new m.default()
// 			.on('change', (file) => document.title = file)
// 		System.import('index.js')
// 	})
