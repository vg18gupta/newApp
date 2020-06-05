module.exports = {
    serverError(res, error) {
        console.log(error)
        res.status(500).json({
            message: 'Server error Occurred'
        });
    },
    resourceError(res, message) {
        res.status(400).json({
            message
        });
    },
    unauthorisedError(res, message) {
        res.status(401).json({
            message: "unauthorised"
        });
    }
}