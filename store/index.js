import axios from "axios";

export const state = () => ({
  globalData: null,
  homePageData: null,
  komisiData: null,
  peraturanData: null,
  pertanyaanAndJawabanData: null,
});

export const mutations = {
  setGlobalRes(state, data) {
    state.globalData = data;
  },
  setHomeRes(state, data) {
    state.homePageData = data;
  },
  setKomisiRes(state, data) {
    state.komisiData = data;
  },
  setPeraturanRes(state, data) {
    state.peraturanData = data;
  },
  setPertanyaanAndJawabanRes(state, data) {
    state.pertanyaanAndJawabanData = data;
  },
};

export const actions = {
  async nuxtServerInit({ commit }) {
    try {
      const response = await axios.get(
        "https://super7tech.com/web_developer_exam_sr/api"
      );

      if (response.data && response.data.routes) {
        const { global, homePage, komisi, peraturan, pertanyaanAndJawaban } =
          response.data.routes;

        const [
          globalRes,
          homeRes,
          komisiRes,
          peraturanRes,
          pertanyaanAndJawabanRes,
        ] = await Promise.all([
          axios.get(global),
          axios.get(homePage),
          axios.get(komisi),
          axios.get(peraturan),
          axios.get(pertanyaanAndJawaban),
        ]);

        commit("setGlobalRes", globalRes.data);
        commit("setHomeRes", homeRes.data);
        commit("setKomisiRes", komisiRes.data);
        commit("setPeraturanRes", peraturanRes.data);
        commit("setPertanyaanAndJawabanRes", pertanyaanAndJawabanRes.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },

  setGlobalRes({ commit }, data) {
    commit("setGlobalRes", data);
  },
  setHomeRes({ commit }, data) {
    commit("setHomeRes", data);
  },
  setKomisiRes({ commit }, data) {
    commit("setKomisiRes", data);
  },
  setPeraturanRes({ commit }, data) {
    commit("setPeraturanRes", data);
  },
  setPertanyaanAndJawabanRes({ commit }, data) {
    commit("setPertanyaanAndJawabanRes", data);
  },
};
