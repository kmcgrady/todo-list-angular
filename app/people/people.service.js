class PeopleService {
  constructor() {
    this.people = [];
  }

  addPerson(personName) {
    this.people.push({ name: personName });
  }
}

export default PeopleService;
