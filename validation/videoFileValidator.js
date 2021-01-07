const videoFilter = function(fileType) {
    // Accept videos only
    if (['mp4','webm','mov','ts','m3u8'].indexOf(fileType) > -1 ) {
        return true;
    }
    return false;
};

module.exports = videoFilter;