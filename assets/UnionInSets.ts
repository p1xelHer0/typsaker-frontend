type Dice = 1 | 2 | 3 | 4 | 5 | 6;

type BinaryDice = 1 | 2 | 4 | 8 | 16 | 32;

type UnionDice = Dice | BinaryDice;
// => 1 | 2 | 3 | 4 | 5 | 6 | 8 | 16 | 32

// {1, 2, 3} U {3, 4, 5} => {1, 2, 3, 4, 5}
