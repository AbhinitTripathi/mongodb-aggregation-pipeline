// What is the average number of tags per user

// Method 1: Using $unwind
[
  {
    '$unwind': '$tags'
  }, {
    '$group': {
      '_id': '$_id', 
      'numberOfTags': {
        '$sum': 1
      }
    }
  }, {
    '$group': {
      '_id': null, 
      'avgNumberOfTagsPerUser': {
        '$avg': '$numberOfTags'
      }
    }
  }
]

// Method 2: Using $addFields and $size
[
  {
    '$addFields': {
      'numberOfTags': {
        '$size': {
          '$ifNull': [
            '$tags', []
          ]
        }
      }
    }
  }, {
    '$group': {
      '_id': null, 
      'averageNumberOfTagsPerUser': {
        '$avg': '$numberOfTags'
      }
    }
  }
]