{
  type R = 'A' | 'B' | "C"
  type Person = {
    name: string;
    age: number;
  }
  // 约束key 和 value
  //   type Merge = {
  //     A: Person;
  //     B: Person;
  //     C: Person;
  // }
  type Merge = Record<R, Person>
}