class PeopleCtrl {
  constructor() {
    this.nameToAdd = '';
    this.people = [];
  }

  addPerson(personName) {
    this.people.push({ name: personName });
    this.nameToAdd = '';
  }
}

export default PeopleCtrl;
