export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(member) {
    this.members.add(member);
  }

  addAll(...args) {
    args.forEach((memb) => this.members.add(memb));
  }

  toArray() {
    const result = [];
    this.members.forEach((memb) => result.push(memb));
    return result;
  }
}
