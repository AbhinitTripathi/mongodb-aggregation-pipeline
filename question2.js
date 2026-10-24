// What is the average age of all users

[
  {
    '$group': {
      '_id': null, 
      'averageAge': {
        '$avg': '$age'
      }
    }
  }
]