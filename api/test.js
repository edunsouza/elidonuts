module.exports = (req, res) => {
    const { name = 'not sent' } = req.query
    res.send(`Test query string: ${name}!`)
}