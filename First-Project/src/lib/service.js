import axios from "axios";

async function getData(Number){
  return new Promise(async(resolve, reject) => {
    if (Number === 1){
      const {data} = await axios("https://jsonplaceholder.typicode.com/users/1");

      resolve (data);
    }
    else{
      reject("Bir hata oluştu")
    }

  })
}
export default getData;

async function getPost(Number){
  return new Promise(async (resolve, reject) => {
    if (Number === 1){
      const {data} = await axios ("https://jsonplaceholder.typicode.com/posts?userId=1");
      resolve(data)
    }
    else{
      reject("Bir hata oluştu")
    }
  })
}
export{
  getPost
}