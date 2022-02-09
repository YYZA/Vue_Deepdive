import {
  fetchAskList,
  fetchJobsList,
  fetchNewsList,
  fetchUserInfo,
  fetchItemInfo,
} from "../api/index";
export default {
  FETCH_NEWS({ commit }) {
    fetchNewsList()
      .then((res) => {
        console.log(res.data);
        commit("SET_NEWS", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  FETCH_ASK({ commit }) {
    fetchAskList().then((res) => {
      commit("SET_ASK", res.data);
    });
  },
  FETCH_JOBS({ commit }) {
    fetchJobsList().then((res) => {
      commit("SET_JOBS", res.data);
    });
  },
  FETCH_USER({ commit }, username) {
    fetchUserInfo(username).then((res) => {
      commit("SET_USER", res.data);
    });
  },
  FETCH_ITEM({ commit }, id) {
    fetchItemInfo(id).then((res) => {
      commit("SET_ITEM", res.data);
    });
  },
};
