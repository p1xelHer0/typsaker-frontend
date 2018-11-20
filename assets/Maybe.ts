interface Some<T> {
  discriminator: "Some";
  value: T;
}

interface None {
  discriminator: "None";
}

type Maybe<T> = Some<T> | None;

interface Left<T> {
  discriminator: "Left";
  value: T;
}

interface Right<T> {
  discriminator: "Right";
  value: T;
}

type Either<T> = Left<T> | Right<T>;
