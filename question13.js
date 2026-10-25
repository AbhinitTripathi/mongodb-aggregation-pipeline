// How many users have 'ad' as the second tag in their list of tags

[
  {
    '$match': {
      'tags.2': 'ad'
    }
  }, {
    '$count': 'usersWithADAtPos2'
  }
]