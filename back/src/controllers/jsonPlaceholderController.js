const { getPosts, getPhotos } = require('../services/jsonPlaceholderService');

exports.getPosts = async (req, res) => {
  try {
    const posts = await getPosts();

    if(!posts) {
      res.status(404).json({ message: 'Posts not found' });
    }
    
    res.json({posts});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}; 

exports.getPhotos = async (req, res) => {
  try {
    const { page } = req.query;

    const photos = await getPhotos(page);

    if(!photos) {
      res.status(404).json({ message: 'Photos not found' });
    }

    res.status(200).json({photos});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};