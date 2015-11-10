

module.exports = function xhr() {
  return function *xhr(next) {
    this.state.xhr = (this.request.get('X-Requested-With') === 'XMLHttpRequest');
    yield next;
  }
};
