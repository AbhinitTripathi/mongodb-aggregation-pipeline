// List all companies located in the USA with their corresponding user count

[
  {
    '$match': {
      'company.location.country': 'USA'
    }
  }, {
    '$group': {
      '_id': '$company.title', 
      'userCount': {
        '$sum': 1
      }
    }
  }
]