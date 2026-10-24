// Which country has the highest number of registered users

[
  {
    '$group': {
      '_id': '$company.location.country', 
      'count': {
        '$sum': 1
      }
    }
  }, {
    '$sort': {
      'count': -1
    }
  }, {
    '$limit': 1
  }
]