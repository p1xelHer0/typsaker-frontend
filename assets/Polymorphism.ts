// Array<T>, T = ???
const numbers: Array<number> = [1, 2, 3];

type NumberList = Array<number>;
type StringList = Array<string>;
type BooleanList = Array<boolean>;

const thierThing: NumberList = [1, 2, 3];

type OurList<T> = Array<T>;
const ourThing: OurList<number> = [1, 2, 3];
