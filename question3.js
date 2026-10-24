// Find top 5 fruits liked by the users in DB

[
  {
    '$group': {
      '_id': '$favoriteFruit', 
      'count': {
        '$sum': 1
      }
    }
  }, {
    '$sort': {
      'count': -1
    }
  }, {
    '$limit': 5
  }
]