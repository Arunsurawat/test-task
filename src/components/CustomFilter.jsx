import React,{useState, useEffect} from 'react'

export default function CustomFilter({products}) {
    const[filter, setFilter] = useState('')
    const [filterData, setFilterData] = useState([])

    useEffect(() => {
        let newArr = products.filter((product) => {
            if(filter === product.language || filter === product.age || filter === product.isDownable){
                return product
            }else{
                return null
            }
        })

        setFilterData(newArr)
    }, [filter,products])
   
    return (
        <div>
            <form className="form-inline">
                <label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">Filter By : </label>
                <select 
                    className="form-control" 
                    id="inlineFormCustomSelectPref"
                    value={filter}
                    name="filter"
                    onChange={(e)=> setFilter(e.target.value)}>
                        <option defaultValue="">Choose...</option>
                        <option value="Hindi">Hindi</option>
                        <option value="English">English</option>
                        <option value="U/A 13+">Under 19</option>
                        <option value="Yes">Downloadable</option>

                </select>
            </form>
            {filter.length > 0 &&
            <>
            <h5>Filter Data ({filterData.length })</h5>
            <div className="custom-scroll">
                
                {filterData.length > 0 ?
                    filterData.map((val, id) => {
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
