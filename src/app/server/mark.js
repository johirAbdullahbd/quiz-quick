class MarkData {
  constructor() {
    this.data = {
      name: "",
      email: "",
      password: "",
      score: "",
      allSelect: "",
      timeString: "",
      selectedObj: "",
      questions: [],
      subject: "",
      rejultPage: false,
    };
  }

  setMarkData(data) {
    this.data = { ...this.data, ...data };
  }

  getMarkData() {
    return this.data;
  }

  getSubjectName() {
    return this.data.subject;
  }

  setSubjectName(data) {
    this.data = { ...this.data, subject: data.subject };
  }
}

// Creating a single instance of the MarkData class
const markDataInstance = new MarkData();

export default markDataInstance;
