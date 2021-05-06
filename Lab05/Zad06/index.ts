enum Role {
  Standard = "Standard User",
  Moderator = "Moderator User",
  Admin = "Admin User",
}

abstract class User {
  firstName: string;
  lastName: string;
  role: Role;
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  toString(): string {
    return `${this.firstName} ${this.lastName} ${this.role}`;
  }
}

@StandardAccess
class StandardUser extends User {
  constructor(firstName: string, lastName: string) {
    super(firstName, lastName);
  }
}
@ModeratorAccess
class ModeratorUser extends User {
  constructor(firstName: string, lastName: string) {
    super(firstName, lastName);
  }
}
@AdminAccess
class AdminUser extends User {
  constructor(firstName: string, lastName: string) {
    super(firstName, lastName);
  }
}
//decorators:
function StandardAccess(constructorFn: Function): void {
  constructorFn.prototype.role = Role.Standard;
}
function ModeratorAccess(constructorFn: Function): void {
  constructorFn.prototype.role = Role.Moderator;
}
function AdminAccess(constructorFn: Function): void {
  constructorFn.prototype.role = Role.Admin;
}

const adminUser = new AdminUser("Jan", "Kowalski");
console.log(adminUser.toString());

class Resource {
  private ResourceValue: string;
  constructor() {
    this.ResourceValue = "secret resource";
  }
  @Watch
  Read(user: User): void {
    console.log(this.ResourceValue);
  }
  Write(user: User): void {
    this.ResourceValue = "new secret value";
    console.log(this.ResourceValue);
  }
}

function Watch(
  target: object,
  propKey: string,
  descriptor: PropertyDescriptor
) {
  const originalFn = target[propKey];
  descriptor.value = function (param) {
    console.log(`User: ${param} wants ${propKey}`);
    return originalFn.call(this, param);
  };
}
function ForModerator(
  target: object,
  propKey: string,
  descriptor: PropertyDescriptor
) {
  const originalFn = target[propKey];
  descriptor.value = function (param) {
    console.log(`User: ${param} wants ${propKey}`);
    return originalFn.call(this, param);
  };
}

function ForAdmin(
  target: object,
  propKey: string,
  descriptor: PropertyDescriptor
) {
  const originalFn = target[propKey];
  descriptor.value = function (param) {
    console.log(`User: ${param} wants ${propKey}`);
    return originalFn.call(this, param);
  };
}

const resource = new Resource();
resource.Read(adminUser);
