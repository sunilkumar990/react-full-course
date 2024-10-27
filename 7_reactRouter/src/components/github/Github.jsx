import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';
const Github = () => {
    const data = useLoaderData()
    // const [data, setdata] = useState([])
    // useEffect(() => {
    // fatch('https://api.github.com/users/hiteshchoudhary')
    // .then(Response => Response.json())
    // .then(data => {
    //     console.log(data);
    //     setdata(data)
    // })
    // }, [])
    

  return (
   <>
   <div className="text-center bg-gray-600 text-white text-3xl">Github followers: {data.followers}
    <img src={data.avatar_url} alt="Git picture" width={300} />
   </div>
   </>
  )
}

export default Github;

export const githubInfoLoader = async() => {
  const respnse = await fatch("https://api.github.com/users/hiteshchoudhary")
  return respnse.json()
}
