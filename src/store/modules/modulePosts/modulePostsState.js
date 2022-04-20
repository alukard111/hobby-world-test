export default {
  postList: JSON.parse(localStorage.getItem('postList')),
  templatePost: {
    id: 0,
    title: 'Title',
    body: 'Description',
    type: 'music',
  },

  typeGroupLists: [
    {
      name: 'all',
      status: true
    },
    {
      name: 'game',
      status: false,
    }, 
    {
      name: 'movie',
      status: false,
    }, 
    {
      name: 'lifestyle',
      status: false,
    }, 
    {
      name: 'music',
      status: false,
    },
  ],
  sortList: [
    {
      name: 'По title',
      status: true,
      key: 'title-key',
      sortLink: '_sort=title'
    },
    {
      name: 'По id',
      status: false,
      key: 'post-id-key',
      sortLink: '_sort=id'
    }
  ]
}