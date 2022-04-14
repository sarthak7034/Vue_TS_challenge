import { fakeAnimal } from '../../helpers/fakeAnimal';
import type { Animal } from '../../types';

const ANIMALS: Array<Animal> = Array.from({ length: 50 }, () => fakeAnimal());

export default () => ANIMALS;
