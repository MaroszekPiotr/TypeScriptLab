var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Role;
(function (Role) {
    Role["Standard"] = "Standard User";
    Role["Moderator"] = "Moderator User";
    Role["Admin"] = "Admin User";
})(Role || (Role = {}));
var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    User.prototype.toString = function () {
        return this.firstName + " " + this.lastName + " " + this.role;
    };
    return User;
}());
var StandardUser = /** @class */ (function (_super) {
    __extends(StandardUser, _super);
    function StandardUser(firstName, lastName) {
        return _super.call(this, firstName, lastName) || this;
    }
    StandardUser = __decorate([
        StandardAccess
    ], StandardUser);
    return StandardUser;
}(User));
var ModeratorUser = /** @class */ (function (_super) {
    __extends(ModeratorUser, _super);
    function ModeratorUser(firstName, lastName) {
        return _super.call(this, firstName, lastName) || this;
    }
    ModeratorUser = __decorate([
        ModeratorAccess
    ], ModeratorUser);
    return ModeratorUser;
}(User));
var AdminUser = /** @class */ (function (_super) {
    __extends(AdminUser, _super);
    function AdminUser(firstName, lastName) {
        return _super.call(this, firstName, lastName) || this;
    }
    AdminUser = __decorate([
        AdminAccess
    ], AdminUser);
    return AdminUser;
}(User));
//decorators:
function StandardAccess(constructorFn) {
    constructorFn.prototype.role = Role.Standard;
}
function ModeratorAccess(constructorFn) {
    constructorFn.prototype.role = Role.Moderator;
}
function AdminAccess(constructorFn) {
    constructorFn.prototype.role = Role.Admin;
}
var adminUser = new AdminUser("Jan", "Kowalski");
console.log(adminUser.toString());
var Resource = /** @class */ (function () {
    function Resource() {
        this.ResourceValue = "secret resource";
    }
    Resource.prototype.Read = function (user) {
        console.log(this.ResourceValue);
    };
    Resource.prototype.Write = function (user) {
        this.ResourceValue = "new secret value";
        console.log(this.ResourceValue);
    };
    __decorate([
        Watch
    ], Resource.prototype, "Read");
    return Resource;
}());
function Watch(target, propKey, descriptor) {
    var originalFn = target[propKey];
    descriptor.value = function (param) {
        console.log("User: " + param + " wants " + propKey);
        return originalFn.call(this, param);
    };
}
function ForModerator(target, propKey, descriptor) {
    var originalFn = target[propKey];
    descriptor.value = function (param) {
        console.log("User: " + param + " wants " + propKey);
        return originalFn.call(this, param);
    };
}
function ForAdmin(target, propKey, descriptor) {
    var originalFn = target[propKey];
    descriptor.value = function (param) {
        console.log("User: " + param + " wants " + propKey);
        return originalFn.call(this, param);
    };
}
var resource = new Resource();
resource.Read(adminUser);
