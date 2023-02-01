import react, { useEffect ,useState} from 'react'


const Home=()=>{
    
const [data,setdata]=useState([''])
    const click=()=>{
        alert("alert")
    }

    useEffect(()=>{
    const api=()=>{
    try{
        const apidata=fetch("https://reqres.in/api/users").then(res=>res.json()).then((resdata)=>{
            console.log(resdata)
            console.log(resdata.data)
            setdata(resdata.data)
           
            resdata.data.map((i)=>{
                console.log(i.last_name)
            })
        })
    }catch(e){
        console.log(e)
    }
}

api()


    },[])

    useEffect(()=>{
console.log(data)
    },[])

    return(
        <>
        <h1>Home</h1>
        {/* <Image src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'/> */}
       <img src={'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'}/>
        {console.log(data)}
       {data.map((item, i) => (
              <div>
                <p>
                  {i} {item.first_name} {item.last_name}{' '}
                </p>
                <img src={item.avatar}/>
              </div>
            ))
          }
        </>
    )
}

export default Home;