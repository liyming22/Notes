const navigation = [
  {
    text: 'Home',
    link: '/'
  },
  {
    text: 'FE',
    items: [
      { text: 'JavaScript', link: '/Frontend/JavaScript/' },
      { text: 'Node', link: '/Frontend/Node/' },
    ]
  },
  {
    text: 'Find Me',
    items: [
      { text: 'Github', link: 'https://github.com/liyming22', target: '_blank' },
      { text: 'StackOverflow', link: 'https://stackoverflow.com/users/9120653/liam-1997', target: '_blank' },
      { text: '掘金', link: 'https://juejin.im/user/1978776662064520/', target: '_blank' },
    ]
  }
];

module.exports = navigation;