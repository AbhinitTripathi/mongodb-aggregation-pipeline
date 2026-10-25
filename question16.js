// Join books with their corresponding author details and present it as an object in document

[
  {
    '$lookup': {
      'from': 'authors', 
      'localField': 'author_id', 
      'foreignField': '_id', 
      'as': 'author_details'
    }
  }, {
    '$addFields': {
      'author_details': {
        '$arrayElemAt': [
          '$author_details', 0
        ]
      }
    }
  }
]