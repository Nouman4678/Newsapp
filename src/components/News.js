import React, { useEffect , useState} from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

const News = (props)=> {
    const [articles,setArticles] = useState([])
    const [loading,setLoading] = useState(false)
    const [page,setpage] = useState(1)
    const [totalArticles,setTotalArticles] = useState(0)
    
    const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
    const updateNews = async ()=> {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=b06e0d4bd5934894bc7ae835a93134a3&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true)
        let data = await fetch(url)
       
        let parsedData = await data.json();
        setArticles(parsedData.articles)
        setTotalArticles(parsedData.totalResults)
        setLoading(false)
    }
    useEffect( ()=>{
        updateNews();
        document.title = `${capitalizeFirstLetter(props.category)} - NewsApp`;
    },[])
  
    const handleNextbtn = async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=b06e0d4bd5934894bc7ae835a93134a3&page=${page+1}&pageSize=${props.pageSize}`;
        setLoading(true)
        let data = await fetch(url)
       
        let parsedData = await data.json();
        setArticles(parsedData.articles)
        setTotalArticles(parsedData.totalResults)
        setLoading(false)
        setpage(page+1)
    }
   const handlePrevbtn = async ()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=b06e0d4bd5934894bc7ae835a93134a3&page=${page-1}&pageSize=${props.pageSize}`;
    setLoading(true)
        let data = await fetch(url)
       
        let parsedData = await data.json();
        setArticles(parsedData.articles)
        setTotalArticles(parsedData.totalResults)
        setLoading(false)
        setpage(page-1)
    }
    return (
      <div className='container'>
      <h2 className='text-center mt-5 mb-5'>Top {capitalizeFirstLetter(props.category)} Headlines</h2>
      {loading && <Spinner/>}
      <div className="row mt-3">
      {!loading && articles.map((e)=>{
       return <div className="col-md-4 mb-4" key={e.url}>
      <Newsitem title={e.title?e.title.slice(0,45):""} description={e.description?e.description.slice(0,88):""} imgUrl={e.urlToImage} url={e.url} Author={e.author} date={e.publishedAt} source={e.source.name}/>
      </div>
      })}  
      </div>
      <div className="container d-flex justify-content-between mb-4">
      <button disabled={page<=1} className="btn btn-dark" onClick={handlePrevbtn}> &larr; Previous</button>
      <button disabled={page+1 > Math.ceil(totalArticles/props.pageSize) }className="btn btn-dark" onClick={handleNextbtn}>Next &rarr; </button>
      </div>
      </div>
    )
  }

News.propTypes = {
pageSize : PropTypes.number,
country : PropTypes.string,
category : PropTypes.string

} 
    News.defaultProps = {
        pageSize : 6,
        country : "us",
        category : "general"
    }
    export default News