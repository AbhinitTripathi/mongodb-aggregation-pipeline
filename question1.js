// How many users are active?

[
  {
    '$match': {
      'isActive': true
    }
  }, {
    '$count': 'activeUsers'
  }
]