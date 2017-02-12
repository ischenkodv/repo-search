// http://stackoverflow.com/a/17936621/533711
export function RequestError() {
  let tmp = Error.apply(this, arguments);
  tmp.name = this.name = 'RequestError';

  this.message = tmp.message;
  // instead of this.stack = ..., a getter for more optimizy goodness
  Object.defineProperty(this, 'stack', {
    get: function () {
      return tmp.stack;
    }
  });

  return this;
}

const IntermediateInheritor = function () {}
IntermediateInheritor.prototype = Error.prototype;
RequestError.prototype = new IntermediateInheritor();
