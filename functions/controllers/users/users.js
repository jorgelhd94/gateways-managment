exports.create = async (req, res) => {
    try {
        return res.status(201).send({ text: 'Hello mtf' });
    } catch (err) {
        return handleError(res, err);
    }
}

function handleError(res, err) {
   return res.status(500).send({ message: `${err.code} - ${err.message}` });
}