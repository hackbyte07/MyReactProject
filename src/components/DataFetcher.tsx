import axios from 'axios'
import React, { useEffect, useState } from 'react'



export interface RootObject {
	userId: number;
	id: number;
	title: string;
	body: string;
}

const DataFetcher = () => {

    const [data, setData] = useState<Array<RootObject>>()


    const handleApi = async () => {
        try {
            const {data} = await axios.get<Array<RootObject>>('https://jsonplaceholder.typicode.com/posts')
            setData(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        handleApi()
    }, [])

  return (
    <div>
        <h1> data from web </h1>
        {
          data !== undefined && data.map(it => it.title)
        }
    </div>
  )
}

export default DataFetcher