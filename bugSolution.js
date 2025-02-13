```javascript
//Correct usage of $inc operator with a numeric field
db.collection('myCollection').updateOne({"_id":ObjectId("someId")},{$inc:{ "myNumber":1}});

//Alternative: Convert the string to a number before incrementing (if appropriate)
db.collection('myCollection').findOneAndUpdate(
  {"myString":"1"},
  {$inc:{myNumber:1}},
  {returnOriginal: false}
)
```