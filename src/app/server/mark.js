class Data {
  constructor() {
    this.data = (typeof window !== "undefined" && JSON.parse(sessionStorage.getItem("data"))) || this.getDefaultData();
    this.allQuestions = (typeof window !== "undefined" && JSON.parse(sessionStorage.getItem("allQuestions"))) || [];
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
    if (typeof window !== "undefined") {
      sessionStorage.setItem("data", JSON.stringify(this.data));
    }
  }
  saveToSessionStorageQuestions() {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("questions", JSON.stringify(this.allQuestions));
    }
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
