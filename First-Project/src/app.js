import getData ,{ getPost } from "./lib/service.js";
(async() => {
  try{
    const data = await getData(1);
    const post = await getPost(1);

    console.log(data);
    console.log(post);


  }catch(e){
    console.log(e);

  }
})()