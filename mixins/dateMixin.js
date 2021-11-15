export default {
  methods: {
    formatDate(date) {
      let options;
      const currentYear = new Date()
      const formattedDate = new Date(date);

      if (Number(date.split("-")[0]) === currentYear.getFullYear()) {
        options = {month: "short", day: "numeric"};
      } else {
        options = { year: "numeric", month: "short", day: "numeric" };
      }

      return formattedDate.toLocaleDateString("en", options);;
    }
  }
};