var User = /** @class */ (function () {
    function User(name, email) {
        this._coursecount = 1;
        this.name = name;
        this.email = email;
    }
    Object.defineProperty(User.prototype, "getAppleEmail", {
        get: function () {
            return "email".concat(this.email);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "coursecount", {
        get: function () {
            return this._coursecount;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var shi = new User('shi', 'sh@gmail.com');
console.log(shi.getAppleEmail);
