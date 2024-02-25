import { Thasadith } from "next/font/google";

class Data {
  constructor() {
    this.onTimeData = {};
    this.data =
      (typeof window !== "undefined" && JSON.parse(sessionStorage.getItem(`${sessionStorage.getItem("questions")}Data`))) || this.getDefaultData();
    this.allQuestions =
      (typeof window !== "undefined" && JSON.parse(sessionStorage.getItem(`${sessionStorage.getItem("questions")}Questions`))) || [];
    this.saveToSessionStorageDebouncedData = this.debounce(this.saveToSessionStorageData, 1);
    this.saveToSessionStorageDebouncedQuestions = this.debounce(this.saveToSessionStorageQuestions, 500);
  }
  getOnTimeData(step) {
    return this.onTimeData[step];
  }
  setOnTimeData(step, data) {
    this.onTimeData = { ...this.onTimeData, [step]: { ...data } };
  }

  getDefaultData() {
    return {
      score: 0,
      wrong: 0,
      allSelect: 0,
      timeString: "",
      selectedObj: 0,
      subject: "",
      rejultPage: false,
    };
  }

  setData(data) {
    this.data = { ...this.data, ...data };
    this.saveToSessionStorageDebouncedData();
  }

  getData(currentStep) {
    if (typeof window !== "undefined") {
      let step = sessionStorage.getItem("questions");
      let data = JSON.parse(sessionStorage.getItem(`${currentStep || step}Data`)) || this.getDefaultData();
      return data;
    }
  }
  setQuestions(data) {
    this.allQuestions = [...data];
    this.saveToSessionStorageDebouncedQuestions();
  }

  getQuestions() {
    if (typeof window !== "undefined") {
      let step = sessionStorage.getItem("questions");
      let data = JSON.parse(sessionStorage.getItem(`${step}Questions`)) || [];
      console.log(data, step, "mark");
      return data;
    }
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
      let dataName = sessionStorage.getItem("questions");
      sessionStorage.setItem(`${dataName}Data`, JSON.stringify(this.data));
    }
  }
  saveToSessionStorageQuestions() {
    if (typeof window !== "undefined") {
      let questionsName = sessionStorage.getItem("questions");
      sessionStorage.setItem(`${questionsName}Questions`, JSON.stringify(this.allQuestions));
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
