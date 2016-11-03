class PeopleCtrl {
  constructor(peopleSvc) {
    this.peopleSvc = peopleSvc;
    this.nameToAdd = '';
  }

  addPerson(personName) {
    this.peopleSvc.addPerson(personName);
    this.nameToAdd = '';
  }

  people() {
    return this.peopleSvc.people;
  }
}

PeopleCtrl.$inject = ['PeopleService']

export default PeopleCtrl;
