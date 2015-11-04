

module.exports = function xhr() {
  return function *xhr(next) {
    this.request.xhr = (this.request.get('X-Requested-With') === 'XMLHttpRequest');
    yield next;
  }
};
