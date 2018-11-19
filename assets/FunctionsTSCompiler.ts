function hello(name) {
  console.log("Hello " + name);
}

const exclamation = word => word + "!";

const shoutHello = name => {
  hello(exclamation(name));
};

shoutHello("Pontus"); // "Hello Pontus!"

shoutHello(4);
// 2345: Argument of type '4' is not
// assignable to parameter of type 'string'.
