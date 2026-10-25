// Categorize users by their favorite fruit

[
  {
    '$group': {
      '_id': '$favoriteFruit', 
      'count': {
        '$sum': 1
      }, 
      'users': {
        '$push': '$name'
      }
    }
  }
]