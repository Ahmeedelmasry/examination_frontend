import Store from "@/store/index";

export default {
  state: {
    examDetails: "",
  },
  mutations: {
    getQuestions(state, payload) {
      state.examDetails = payload;
    },
  },
  actions: {
    async uploadPdfFunc(context, payload) {
      let resData;
      const formData = new FormData();
      formData.append("pdf", payload.pdf);
      const call = await fetch(`${Store.state.apiLink}/generate-exam`, {
        method: "POST",
        body: formData,
      });
      console.log(call);
      if (call.status == 200) {
        const res = await call.json();
        console.log(res.data.content)
        resData = JSON.parse(res.data.content);
      } else {
        resData = "";
      }
      return resData;
    },
    async getExamQuestions(context, payload) {
      await fetch(`${Store.state.apiLink}/exams/signle-exam/${payload}`)
        .then((res) => res.json())
        .then((data) => context.commit("getQuestions", data));
    },
  },
};
