import React, { Component } from 'react';
import $ from 'jquery';

class Search extends React.Component{
    constructor(){
        super();
        this.state = {
            "search":[]
        }
    }
    componentWillMount(){
        $.get(this.props.url,((data)=>{
            this.setState({
                "search":data[3]
            })
        }))
    }
    render(){
        return (
            <div className="wrap">
                <div className="form">
                    <form>
                        <div>
                            <i></i>
                            <input type="search" placeholder="搜索歌曲、歌手、专辑" className="input" />
                        </div>  
                    </form>
                </div>
                <div className="hot-search">
                    <h3>热门搜索</h3>
                    <ul>{
                        this.state.search.map((item)=>{
                            return <li>{item}</li>
                        })
                    }      
                    </ul>
                </div>
            </div>
        )
           
    }
}
Search.defaultProps ={
    'url':"http://localhost:3000/date/date.json"
}
export default Search;