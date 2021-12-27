export const state = () => ({
  isDarkMode: false,
  loaded: false,
});

export const mutations = {
  toggleDarkMode(state) {
    state.isDarkMode = !state.isDarkMode;
  },
  setDarkMode(state, value) {
    state.isDarkMode = value;
  },
  setLoaded(state, value) {
    state.loaded = true;
  }
};
