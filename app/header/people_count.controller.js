class PeopleCountCtrl {
  constructor(peopleSvc) {
    this.peopleSvc = peopleSvc;
  }

  peopleCount() {
    return this.peopleSvc.people.length;
  }
}

PeopleCountCtrl.$inject = ['PeopleService'];

export default PeopleCountCtrl;
