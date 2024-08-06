var library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }];
 
    
 library.forEach((value)=>{
        console.log("Title :" ,value.title);
        console.log("Author:",value.author);
        if(value.readingStatus == true){
            console.log("Reading status : Currently reading");
        }
        else{
           console.log("Reading status : Not reading");
       }
})
