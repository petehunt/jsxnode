function sayHello(name: string) {
  return 'Hello, ' + name;
}

var {firstName} = {firstName: 'Pete', lastName: 'Hunt'};

console.log(sayHello(firstName));
