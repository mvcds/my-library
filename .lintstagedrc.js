module.exports = {
  '*': {
    title: 'Prettify all files',
    task: async (files) => {
      return "prettier --write " + files.join(' ');
    },
  },
}