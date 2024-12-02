import type { Expect, Equal } from 'type-testing';

type ValidNumber<T> = T extends number ? number : never;

type t0_actual = ValidNumber<number>;

type t0_expected = number;

type t0 = Expect<Equal<t0_actual, t0_expected>>;
