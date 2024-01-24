class Data {
  constructor() {
    this.data = JSON.parse(sessionStorage.getItem("data")) || this.getDefaultData();
    this.allQuestions = JSON.parse(sessionStorage.getItem("allQuestions")) || [];
    this.saveToSessionStorageDebouncedData = this.debounce(this.saveToSessionStorageData, 500);
    this.saveToSessionStorageDebouncedQuestions = this.debounce(this.saveToSessionStorageQuestions, 500);
  }

  getDefaultData() {
    return {
      score: "",
      allSelect: "",
      timeString: "",
      selectedObj: "",
      subject: "",
      rejultPage: false,
    };
  }

  setData(data) {
    this.data = { ...this.data, ...data };
    this.saveToSessionStorageDebouncedData();
  }

  getData() {
    return this.data;
  }
  setQuestions(data) {
    this.allQuestions = [...data];
    this.saveToSessionStorageDebouncedQuestions();
  }

  getQuestions() {
    return this.allQuestions;
  }

  getSubjectName() {
    return this.data.subject;
  }

  setSubjectName(data) {
    this.data = { ...this.data, subject: data.subject };
    this.saveToSessionStorageDebouncedData();
  }

  saveToSessionStorageData() {
    sessionStorage.setItem("data", JSON.stringify(this.data));
  }
  saveToSessionStorageQuestions() {
    sessionStorage.setItem("questions", JSON.stringify(this.questions));
  }

  debounce(func, delay) {
    let timeoutId;
    return function () {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, arguments);
      }, delay);
    };
  }
}

const dataInstance = new Data();

export default dataInstance;
