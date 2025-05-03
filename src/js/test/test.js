import Team from '../app.js';
import Character from '../Character.js';

test('create character', () => {
  const char = new Character('Джон', 'Swordsman', 10, 10);
  expect(char).toEqual({
    name: 'Джон', type: 'Swordsman', health: 100, level: 1, attack: 10, defence: 10,
  });
});

const sword = new Character('Джон', 'Swordsman', 10, 10);
const mage = new Character('Гендальф', 'magician', 10, 10);

test('create team add', () => {
  const testTeam = new Team();
  testTeam.add(sword);
  testTeam.add(sword);

  expect(testTeam.members).toEqual(new Set([sword]));
});

test('create team addAll', () => {
  const testTeam = new Team();

  testTeam.addAll(sword, mage, sword);

  expect(testTeam.members).toEqual(new Set([sword, mage]));
});

test('create team toArray', () => {
  const testTeam = new Team();

  testTeam.addAll(sword, mage);

  expect(testTeam.toArray()).toEqual([sword, mage]);
});
