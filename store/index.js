export const state = () => ({
  theme: '',
  windowTheme: ''
});

export const mutations = {
  setTheme(state, value) {
    state.theme = value
  },
  setWindowTheme(state, value) {
    state.windowTheme = value
  }
};
