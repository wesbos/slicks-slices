module.exports = (req, res) => {
  console.log(req);

  return res.status(200).json({ body: 'Hello!!' });
};
