import type { GenderType } from '@faker-js/faker'
import { faker } from '@faker-js/faker'

import type { Animal, Fruit, Gender } from '../types'

export const fakeAnimal = (): Animal => {
  const gender = faker.random.arrayElement(['male', 'female']) as Gender
  //   Easy tricky bug: add wrong fruit
  const favouriteFruit = faker.random.arrayElement(['banana', 'apple', 'cherry']) as Fruit

  return {
    id: faker.datatype.uuid(),
    name: faker.name.firstName(gender as GenderType),
    species: faker.animal.type(),
    gender,
    birthdate: faker.date.past(25),
    weight: faker.datatype.float({
      min: 20,
      max: 250,
      precision: 0.1,
    }),
    height: faker.datatype.float({
      min: 0.25,
      max: 4,
      precision: 0.01,
    }),
    favouriteFruit,
  }
}
