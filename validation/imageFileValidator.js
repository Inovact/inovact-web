const imageFilter = function(fileType) {
    // Accept images only
    if (['jpg','JPG','jpeg','JPEG','png','PNG','gif','GIF','svg','SVG','webp','WEBP'].indexOf(fileType) > -1) {
        return true;
    }
    return false;
};

module.exports = imageFilter;