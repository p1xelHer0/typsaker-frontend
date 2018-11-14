function hello(name) {
  console.log("Hello " + name);
}

const exclamation = string => string + "!";

const shoutHello = name => {
  hello(exclamation(name));
};

shoutHello("Pontus"); // "Hello Pontus!"

shoutHello(4); // "Hello 4!"
