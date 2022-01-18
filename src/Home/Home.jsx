import React,{useEffect,useState} from 'react'
import CustomFilter from '../components/CustomFilter';
import CustomSearch from '../components/CustomSearch';
import MySlider from '../components/MySlider'

function Home() {
    const [state, setState] = useState([])


    const getData = async() => {
        const url = 'https://tvapiv2.voot.com/wsv_1_0/episode/list.json?tvSeriesId=361251&from=1&to=20&sortId=mostPopular';
        try {
            let res = await fetch(url);
            return await res.json();
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getData().then((success)=> {
            setState(success.assets)
        })
       
    }, [])

    return (
        <div className="container-fluid">
            <MySlider data={state} />
            <div className="container">
                <div className="col-md-6">
                    <h2>Filter Component</h2>
                    <CustomFilter products={state}/>
                </div>
                <div className="col-md-6">
                    <h2>Search Component</h2>
                    <CustomSearch data={state}/>
                </div>  
            </div>
            
        </div>
    )
}

export default Home
