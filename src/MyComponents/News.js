import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';


const News = (props) => {
    const [articlesLimit, setArticlesLimit] = useState(20)
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalArticles, setTotalResults] = useState(0)
    // document.title = `DNEWS - ${capitializeFunction(props.category)}`;

    const capitializeFunction = (string) => {
        return string[0].toUpperCase() + string.slice(1);
    }


    const updateNews = async () => {
        const url = `https://gnews.io/api/v4/top-headlines?category=${props.category}&lang=${props.language}&country=${props.country}&max=${props.pageSize}&apikey=eea73478c1539060beaba8e17ffba9b6&page=${page}`;
        setLoading(true)
        let response = await fetch(url);
        let data = await response.json();

        setArticles(data.articles)
        setLoading(false)
        setTotalResults(data.totalArticles)
    }

    useEffect(() => {
        updateNews()
    }, [])


    const fetchMoreData = async () => {
        const nextPage = page + 1;
        setPage(nextPage);

        
        const url = `https://gnews.io/api/v4/top-headlines?category=${props.category}&lang=${props.language}&country=${props.country}&max=${props.pageSize}&apikey=eea73478c1539060beaba8e17ffba9b6&page=${nextPage}`;
        
        let response = await fetch(url);
        let data = await response.json();
        
        if (data.articles.length + articles.length > articlesLimit) {
            return;
        }
        setArticles(articles.concat(data.articles));
        setTotalResults(data.totalArticles);
    };

    // ChangeForPrevious = async () => {
    //     this.updateNews()
    // setArticles(filteredArticles)
    // setLoading(false)
    // setPage(page-1)
    // }

    // ChangeForNext = async () => {
    //     this.updateNews()
    //     setArticles(filteredArticles)
    //     setLoading(false)
    //     setPage(page + 1)
    // }

    let { mode } = props;
    return (
        <>
            <h1 className='title text-center' style={{ color: mode === true ? 'white' : 'black' }}>Top {capitializeFunction(props.category)} News - Headlines</h1>
            {loading && <Spinner />}

            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalArticles}
                loader={loading ? <Spinner /> : null}
            >
                <div className="container">
                    <div className="row">
                        {articles.map((element, index) => (
                            <NewsItem
                                mode={mode}
                                key={index}
                                title={element.title === null || element.title === "[Removed]" ? 'No title available' : element.title.slice(0, 90) + '...'}
                                description={element.description === null ? 'No description available' : element.description.slice(0, 70) + '...'}
                                urlToImage={element.image}
                                newsUrl={element.url}
                                author={element.author === null ? 'Author Unknown' : element.author}
                                date={element.publishedAt === null ? 'Date Unknown' : element.publishedAt}
                                source={element.source.name}
                            />
                        ))}
                    </div>
                </div>
            </InfiniteScroll>
            {/* <div className="container mt-5 d-flex justify-content-between buttons">
                            <button type="button" disabled={.page <= 1} onClick={this.ChangeForPrevious} className="btn btn-secondary">&#8592;Previous</button>
                            <button type="button" style={{ display: (.page + 1 > Math.ceil((.totalArticles / props.pageSize))) ? 'none' : 'block' }} onClick={this.ChangeForNext} className="btn btn-secondary">Next&#8594;</button>
                        </div> */}
            {/* } */}
        </>
    );
}


News.propTypes = {
    category: PropTypes.string,
    country: PropTypes.string,
    pageSize: PropTypes.number,
}
export default News;
