// Count the number of males and females in the DB

[
  {
    '$group': {
      '_id': '$gender', 
      'count': {
        '$sum': 1
      }
    }
  }
]