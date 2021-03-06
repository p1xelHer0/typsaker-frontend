function hello(name: string): void {
  console.log("Hello " + name);
}

const exclamation = (word: string): string => word + "!";

const shoutHello = (name: string): void => {
  hello(exclamation(name));
};

shoutHello("Pontus"); // "Hello Pontus!"

shoutHello(4);
// 2345: Argument of type '4' is not
// assignable to parameter of type 'string'.
