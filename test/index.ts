interface IA {
  readonly bb: boolean
  readonly aa: string
}

class A implements IA {
  constructor(
    public readonly aa: string,
    public readonly bb: boolean,
  ) {}
  public hello() {
    return 'hello'
  }
}

interface IB extends IA {
  readonly [key: string]: any
}

const theA = new A('xyz', false)

const bbx = {
  aa: theA.hello(),
  array: ['1', '2', '3'],
  bb: true,
  dd: 'dd',
}

const get = (s: string, b: boolean) => new A(s, b)

export { A, get, bbx, IA, IB }
