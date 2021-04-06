import React, {useState, useEffect} from 'react';
import SearchBar from '../Components/SearchBar';
import YelpService from '../Service/YelpService';
import CardList from '../Components/CardList';

export default function Home(){
    const [results, setResults] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [location, setLocation] = useState('');
    const [offset, setOffset] = useState(0);
    const [maxPageCount, setMaxPageCount] = useState(0);
    const [loading, setLoading] = useState(false);
    const limit = 30;

    const containerTitleStyle = {
        textAlign: "center"
    }

    const onSearch = async (location) => {
        //initialize data first
        setLocation(location)
        setLoading(true);
    }

    const decrement = async () => {
        setCurrentPage(old => Math.max(old - 1, 1));
        setOffset(offset > 0 ? offset - limit: offset);
        setLoading(true);
    }

    const increment = async () => {
        setCurrentPage(currentPage < maxPageCount ? currentPage + 1 : currentPage);
        setOffset(offset + limit);
        setLoading(true);
    }

    useEffect(() => {
        async function fetchData() {
            const result = await YelpService.get("" , {
                params: {location: location, limit: limit, offset: offset }
            });
            if(result.data.error) {
                throw result.data.error;
            } else {
                let itemCount = result.data.data.total;
                setResults(result.data);
                setMaxPageCount(Math.ceil(itemCount / limit));
            }
        }
        try {
            if(loading) {
                fetchData();
                setLoading(false);
            }
        } catch (error) {
            console.error(error)
        }
    },[loading, location, offset, results]);


    return (
        <>
        <div className="container">
            <h1 className="title" style={containerTitleStyle}>Lowest Rated Parking Lots</h1>
            <SearchBar disabled={loading} onSearch={onSearch} />
        </div>

        {
            results.data ?  
            (
                <div className="pagination is-centered" >
                    <button className="pagination-previous" disabled = {currentPage === 1 || loading || results.length === 0} onClick={decrement}>Previous</button>
                    <ul className="pagination-list">
                        <li><span disabled={true} className="pagination-link">{currentPage}</span></li>
                    </ul>
                    <button className="pagination-next" disabled = {currentPage === maxPageCount || loading || results.length === 0} onClick={increment}>Next Page</button>
                </div> 
            ) : ''
        }
        
        {
            loading ?
                (
                <div>Please Wait</div>
                ) :
                (
                    <div className="container">
                        <CardList results = {results}/>
                    </div>
                )
        }
        </>
    );
}