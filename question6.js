// List all unique eye colors in the collection

[
  {
    '$group': {
      '_id': '$eyeColor', 
      'count': {
        '$sum': 1
      }
    }
  }
]