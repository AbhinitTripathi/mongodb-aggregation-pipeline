// What are the names and age of users who are inactive and have 'velit' as a tag

[
  {
    '$match': {
      'tags': 'velit', 
      'isActive': false
    }
  }, {
    '$project': {
      'name': 1, 
      'age': 1
    }
  }
]