// mongo qyeries

1.use new Db = use database / delete database

2.db.createCollection('user') = create collection

3.db.user.insert({ name: 'nayana', place: 'valayanchirangara' });


4.new> db.user.insertMany([{ name: 'krishna', place: 'valayanchirangara' }, { name: 'suramya', place: 'vengola' }])

5.db.user.update({ name: 'krishna' }, { $set: { name: 'krishnadev' } })

6.db.user.find({ $and: [{ place: 'valayanchirangara' }, { name: 'nayana' }] })

7.new> db.user.find({ $or: [{ name: 'suramya' }, { name: 'nayana' }] })

8.db.dropDatabase

show collections

9.newDb > db.user.find().limit(2)

10.newDb > db.user.distinct('place')

11.db.employee.updateMany({ desg: 'devaloper' }, { $inc: { salary: 5000 } });

12.db.employee.updateMany({ ename: 'rahul' }, $unset: { yoj: 1 });

13: db.employee.update({ ename: 'rahul' }, { $set: project: []}})

14: db.employee.updateOne({ ename: 'rahul' }.{ $push: { project: { $each: ['p1', 'p2'] } } })

15: db.employee.updateOne({
    ename: 'rahul},{$pull:{project:'p2'}})

16.db.employee.update({ enmae: rahul }, {
        $set: {
            contact: {
                email: 'rahul@gmail.com , phone:'4567895431'}}})

17.EmployeeInfo > db.employee.aggregate([{ $match: { Salary: { $gt: 70000 } } }])

18. db.employee.aggregate([{ $group: { _id: { Department: "$Department", Salary: "$Salary" } } }])

db.teachers.aggregate([{ $group: { _id: "$dep", names: { $push: "$name" } } }])

19.EmployeeInfo > db.employee.aggregate([{ $match: { Salary: { $gt: 70000 } } }, { $count: "count" }])

20.EmployeeInfo > db.employee.aggregate([{ $count: 'Salary' }])

21.EmployeeInfo > db.employee.aggregate([{ $project: { EmpFname: 1, EmpLname: 1 } }])

22db.teachers.aggregate([{ $group: { _id: '$salary', count: { $sum: 1 } } }])

23.EmployeeInfo > db.employee.aggregate([{ $group: { _id: null, average: { $avg: "$Salary" } } }])

24.EmployeeInfo > db.employee.aggregate([{ $project: { EmpFname: 1, type: { $type: "$EmpFname" } } }])

25.EmployeeInfo > db.employee.aggregate([{ $out: "CopyCollection" }])//copy collection

26.EmployeeInfo > db.movies.aggregate([{ $lookup: { from: 'marketing', localField: 'marketId', foreignField: '_id', as: 'marketId' } }])

27.db.doc1.updateMany({}, { $set: { date: ISODate(""2024-04-05T12:00:00Z"") } })


db.doc1.aggregate([{ $match: { year: { $gt: 2017 } } }])	

bookdb> db.doc1.aggregate([{ $sort: { price: 1 } }])
 db.doc1.aggregate([{ $skip: 2 }])	

bookdb> db.doc1.aggregate([{ $limit: 3 }])


bookdb> db.doc1.aggregate([{ $lookup: { from: 'collection', localField: 'address', foreignField: '_id', as: address } }])

db.doc2.find({ author: { $exists: true } })

bookdb > db.doc1.find({ author: { $regex: /a$/ } })

db.teachers.find({ name: { $regex: /a/i } })  

bookdb > db.doc1.find({ author: { $in: ['bibin', 'julia'] } })

bookdb > db.doc1.find({ author: { $nin: ['bibin', 'julia'] } })

store > db.shop.aggregate([{ $group: { _id: null, minimum: { $min: '$price' } } }])

 db.shop.aggregate([{ $group: { _id: null, first: { $first: '$price' } } }])

store > db.shop.aggregate([{ $group: { _id: null, last: { $last: '$price' } } }])

store > db.shop.updateOne({ name: 'carworld' }, { $addToSet: { item: 'BMW' } })

db.employee.aggregate([{ $group: { _id: '$EmpId', count: { $sum: 1 } } }])

b.employee.updateOne({ EmpFname: 'Rohit' }, { $mul: { Salary: 1.10 } })

Employee > db.student.find({ name: 'suramya' }).explain('executionStats')//gives additional details about the execution query

Employee > db.student.find({ age: { $in: ['20', '21'] } })


Employee > db.student.aggregate([{ $match: { dep: 'chemistry' } }, { $unwind: '$mark' }, { $group: { _id: null, sumMark: { $sum: '$mark' } } }])

try $eleMatch : db.teachers.find({ salary: { $elemMatch: { $gt: 50000, $lt: 20000 } } })

try $facet

try $ merge

try $expr db.collection.find({ $expr: { $gt: ["$field1", "$field2"] } })


db.teachers.update({ name: 'julia' }, { $set: { fav: ' ObjectId("66050ce1f6d433689a3c9df0")' } })

$size = find the size

 db.teachers.aggregate([{ $unwind: '$sub' }, { $group: { _id: '$name', subject: { $addToSet: '$sub' }, count: { $sum: 1 } } }, { $match: { count: { $gt: 2 } } }])

 db.teachers.aggregate([{ $group: { _id: '$dep', names: { $addToSet: '$name' }, count: { $sum: 1 } } }, { $sort: { count: -1 } }, { $project: { dep: 1, count: 1 } }])	

t> db.teachers.aggregate([{ $group: { _id: '$department', avg: { $avg: '$salary' } } }, { $group: { _id: null, max: { $max: '$avg' } } }]);