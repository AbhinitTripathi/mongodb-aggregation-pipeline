// How many users have phone numbers starting with "+1 (940)"

[
  {
    '$match': {
      'company.phone': new RegExp('^\+1 \(940\)')
    }
  }, {
    '$count': 'peopleWithRequiredNumberPrefix'
  }
]