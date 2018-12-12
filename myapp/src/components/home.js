import React, { Component } from 'react';
import $ from 'jquery';

class Home extends React.Component{
	constructor(){
		super();
		this.state = {
			"arr" : [],
			"nmusic" :[]
		}
	}
	componentWillMount(){
		$.get(this.props.url,(data)=>{
			this.setState({
				"arr":data[0],
				"nmusic":data[1]
			})
			//console.log(data[0]);
		});
	}
    render(){
        return <div className='wrap'>
            <div className='recommend'>
                <h3>推荐歌单</h3>
                <ul>{
                	this.state.arr.map((item)=>{
                	return <li className='rec-music'>
                				<img src={item.imgsrc}/>
                				<p>{item.title}</p>
                				<span>{item.sign}</span>
                			</li>
                	})
                }  	
                </ul>
            </div>
			<div className="new-music">
				<h3>最新音乐</h3>
				<div className="new-list">
					{
						this.state.nmusic.map((item)=>{
							return <div className="new-table clearfix">
										<dl>
											<dt>{item.title}</dt>
											<dd>{item.singer}</dd>
										</dl>
										<p></p>
									</div>
						})
					}	
				</div>
			</div>
			<div className="recommend-foot">
				<h2>网易云音乐</h2>
				<strong>打开APP，发现更多好音乐></strong>
				<p>网易公司版权所有©1997-2018   杭州乐读科技有限公司运营</p>
			</div>
        </div>
    }
}
Home.defaultProps = {
	"url" : "http://localhost:3000/date/date.json"
}

export default Home;