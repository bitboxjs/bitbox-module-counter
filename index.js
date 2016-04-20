import 'jspm.reload.js'
import bitbox from 'bitbox'
import counter from 'bitbox-module-counter'
import Counter from 'bitbox-module-counter/module'

bitbox.app({})

bitbox.modules({
	counter: Counter({ count: 1 })
})

bitbox.run(counter.bind(null, { module: 'counter', x: Date.now() }), document.body)
