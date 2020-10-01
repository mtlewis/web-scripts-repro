import { Foo } from "./dep";

export const Baz = (foo: Foo) => {
  return foo.bar;
};
