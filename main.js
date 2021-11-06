const { join } = require('path')
const express = require('express')
const hbs = require('express-handlebars')

const PORT = parseInt(process.argv[2]) || parseInt(process.env.APP_PORT) || 3000

const app = express()

app.engine('hbs', hbs({ defaultLayout: false }))

app.set('view engine', 'hbs')

app.get('/time', (req, resp) => {
	const t = (new Date()).toString()
	console.log(req.get('accept'))
	resp.status(200)
	resp.format({
		'text/html': () => {
			resp.type('text/html')
			resp.render('time', { time: t })
		},
		'application/json': () => {
			resp.json({ time: t })
		},
		'default': () => {
			resp.type('text/html')
			resp.render('time', { time: t })
		}
	})
})

app.use(express.static(join(__dirname, 'public')))

app.listen(PORT, () => {
	console.info('Application started at %s on port %d',
			(new Date()).toString(), PORT);
})
