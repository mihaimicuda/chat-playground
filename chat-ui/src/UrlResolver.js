function getRestUrl() {
    let url = "";
    switch(process.env.NODE_ENV) {
        case 'production':
          url = 'http://193.47.69.248:8100';
          break;
        case 'development':
        default:
          url = 'http://localhost:3000';
      }
    return url;
}

module.exports = {
    getRestUrl : getRestUrl
};