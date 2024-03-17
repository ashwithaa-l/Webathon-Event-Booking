const mongoose=require('mongoose')
const express=require('express')
const bodyParser=require('body-parser')
const cors=require('cors')
const axios = require('axios');

const {booking}=require('./bookingschema.js')

const app = express()
app.use(cors())
app.use(bodyParser.json())
async function connecttodb(){
    try{
        await mongoose.connect('mongodb+srv://ashwithaa:WynlhhO4B8YPwtWc@cluster0.gwnlctj.mongodb.net/booking?retryWrites=true&w=majority&appName=Cluster0')
        console.log('db connected')
    
    app.listen(7000,function(){
        console.log('listening on port7000')
    })
}catch(error){
    console.log(error)
    console.log('couldn\'t connect to')
}
}

connecttodb()
app.get('/', (req, res) => {
    res.send('Hello, World!');
});


// events page
app.get('/events', async function(req, res) {
    const options = {
        method: 'GET',
        url: 'https://real-time-events-search.p.rapidapi.com/search-events',
        params: {
          query: 'Concerts in San-Francisco',
          start: '0'
        },
        headers: {
          'X-RapidAPI-Key': '621f77aa6bmsh4a9771efdd7bee7p1ed688jsn3a547051b7d0',
          'X-RapidAPI-Host': 'real-time-events-search.p.rapidapi.com'
        }
      };
      
      try {
          const response = await axios.request(options);
          console.log(response.data);
      } catch (error) {
          console.error(error);
      }
})


// booking

// app.post('/booking',async function(request,response){
//     try{
//         const book=await booking.create({
//             "firstname": request.body.firstname,
//             "lastname": request.body.lastname,
//             "gender":request.body.gender,
//             "email": request.body.email,
//             "phoneno": request.body.phoneno,
//             "eventname":request.body.eventname,
//             "date":request.body.date
//         })
//         response.status(201).json(book);
//     }catch(error){
//         console.error(error);
//         response.status(500).json({error:"internal error"});
//     }
// })



// app.get('/getbooking',async function(request,response){
//     try{
//         const getbook=await booking.find({},{eventname:1,date:1})
//         response.status(200).json(getbook)
//     }catch(error){
//             response.status(500).json({
//                 "status":"failure",
//                 "error":error
//         })
//     }
// })

