import React, { useEffect, useState } from 'react'
import NewsIteam from '../NewsIteam'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
const News = (props) => {
  // const [loading, setLoading] = useState(true)
  const [articles, setArticles] = useState([])
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResult] = useState(0)
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const updateNews = async () => {
    props.setProgress(0)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=f73190b2ac1a443196960ba0188ce3fb&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    setArticles(parsedData.articles)
    setTotalResult(parsedData.totalResults)
    props.setProgress(100)
  }
  useEffect(() => {
    updateNews();
    // eslint-disable-next-line
  }, [])
  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=f73190b2ac1a443196960ba0188ce3fb&page=${page}&pageSize=${props.pageSize}`;
    setPage(page + 1)
    // this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json()
    setArticles(articles.concat(parsedData.articles))
    setTotalResult(parsedData.totalResults)
  };
  return (
    <>
      <h2 className='text-center' style={{ margin: '5px', marginTop: '80px' }} >Top {capitalizeFirstLetter(props.category)} Headlines</h2>
     
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return <div className="col-md-4" key={element.url}>
                <NewsIteam title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
              </div>
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  )
}
News.defaultProps = {
  country: 'in',
  pageSize: 9
}
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number
}
export default News
