import React,{useState, useEffect} from 'react'

export default function CustomSearch({data}) {
    const [search, setSearch] = useState('')
    const [searchData, setSearchData]=useState([])
    
    useEffect(() => {
    const lowercasedFilter = search.toLowerCase();
      let newArr =  data.filter(item => {
            return item.title.toLowerCase().includes(lowercasedFilter)
        });       
        setSearchData(newArr)
    }, [search,data])


    return (
        <div>
            <div>
                <input 
                    className="form-control" 
                    type="text"
                    placeholder="search by title..." 
                    onChange={(e)=> setSearch(e.target.value)} 
                    value={search} 
                    name="search"/>
            </div>
            {search.length > 0 &&
            <>
            <h5>Search Result ({searchData.length })</h5>
            <div className="custom-scroll">
                
                {searchData.length > 0 ?
                    searchData.map((val, id) => {
                        return(
                            <div className="card" style={{width: "200px"}} key={id}>
                                <img className="card-img-top" src={`${val.imgURL}`} alt={`${val.URL}`}/>
                            <div className="card-body">
                                <h5 className="card-title">{val.title}</h5>
                                <p className="card-text">{val.desc}</p>
                            </div>
                        </div>
                        )
                    }):<p>No result found...</p>
                }
            </div>
            </>}
            
        </div>
    )
}
