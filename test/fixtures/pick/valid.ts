import { struct } from '../../..'

export const Struct = struct.pick({
  name: 'string',
  age: 'number',
})

export const data = {
  name: 'john',
  age: 42,
}

export const output = {
  name: 'john',
  age: 42,
}
