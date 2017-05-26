interface IA {
  readonly aa: string;
  readonly bb: boolean;
}

class A implements IA {
  constructor(
    public readonly aa: string,
    public readonly bb: boolean,
  ) {}
}

interface IB extends IA {
  readonly [key: string]: any;
}

const get = (s: string, b: boolean) => new A(s, b);

export { A, get, IA, IB };
