const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');



app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set('view engine','ejs')

const blogs = [
    {title:'blog 1',author:'ayman',snippet:'this is blog 1'},
    {title:'blog 2',author:'ayman',snippet:'this is blog 2'},
    {title:'blog 3',author:'imane',snippet:'this is blog 3'},
    {title:'blog 4',author:'yassine',snippet:'this is blog 3'},
];



app.get('/blogs',(req, res) => {
    res.render('blogs',{blogs})
})


app.get('/addblog',(req, res) => {
    res.render('add')
})


app.post('/addblog',(req, res) =>{
    const {title,snippet} = req.body
    blogs.push({title,snippet})
    res.status(302).redirect('/blogs')
})

app.get('/home',(req, res) =>{
    res.render('home.ejs')


})


app.use('/aboutus',(req, res) =>{
    res.render('about.ejs',{title:'about us page from serever',name:'ayman',})


})









app.use('/',(req, res) => {
    // fs.readFile('./pages/index.html','utf-8',(err,data)=>{
    //     if(err){
    //         console.log(err)
    //     }else{
    //         res.send(data)
    //     }
    
    // })
    // res.sendFile('./pages/index.html',{root:__dirname})
})




app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
