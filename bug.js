```javascript
//Incorrect usage of $inc operator with a string field
db.collection('myCollection').updateOne({"_id":ObjectId("someId")},{$inc:{ "myString":"1"}});
```