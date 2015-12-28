var _BaseForm = class _BaseForm {
  constructor(err, obj, res, next) {
      this.err = err;
      this.obj = obj;
      this.res = res;
      this.next = next;
  }

  evaluate () {
    if(this.err) {
      if(Array.isArray(this.err)) {
        return this.res.send(200, { errors: this.formatErrors(this.err) });
      } else {
        return this.next(this.err);
      }
    }
    return this.response()
  }

  formatErrors (errorsIn) {
    var errors = {};
    var a, e;

    for(a = 0; a < errorsIn.length; a++) {
      e = errorsIn[a];

      errors[e.property] = errors[e.property] || [];
      errors[e.property].push(e.msg);
    }
    return errors;
  }

  response () {
      return this.res.send("Override this method.");
  }
};

var ModelForm = class ModelForm extends _BaseForm {
    response () {
      this.res.send(200, this.obj.serialize());
    }
}

module.exports = {
    'ModelForm': ModelForm
};
