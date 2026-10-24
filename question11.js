// Who has registered most recently

[
  {
    '$sort': {
      'registered': -1
    }
  }, {
    '$project': {
      'name': 1, 
      'registered': 1
    }
  }, {
    '$limit': 1
  }
]