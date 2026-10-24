// How many users have enim as one of their tags
// tags: ['enim', 'id', 'velit'...] <- this is stored in the tags field of the user document

[
  {
    '$match': {
      'tags': 'enim'
    }
  }, {
    '$count': 'userWithTagEnim'
  }
]

