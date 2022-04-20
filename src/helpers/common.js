export {
  random,
  typePostsFalse,
  typePostsTrue,
  returnStatusTypeList,
  urtFilteredList,
}

function random(max, min = 0) {
  return Math.floor(Math.random() * (max - min) + min)
}

function typePostsFalse(typePostList) {
  typePostList.forEach((post) => {
    if (post.status) {
      post.status = false
    }
  })
}
function typePostsTrue(typePostList) {
  typePostList.forEach((post) => {
    if (post.status) {
      post.status = true
    }
  })
}

function returnStatusTypeList(typesPostList) {
  for (let key in typesPostList) {
    if (typesPostList[key]) {
      return typesPostList[key]
    } 
  }  
  return false  
}

function urtFilteredList(type, sort) {
  if (type.name === 'all') {
    return `https://dreddyi.ru/json/posts?${ sort.sortLink }&_order=asc`
  } else {
    return `https://dreddyi.ru/json/posts?type=${ type.name }&${ sort.sortLink }&_order=asc`
  }
} 