import React, { Component } from 'react';
import $ from 'jquery';

class List extends React.Component{
    constructor(){
        super();
        this.state = {
            "list":[]
        }
    }
    componentWillMount(){
		$.get(this.props.source,(data)=>{
			this.setState({
				"list":data[2]
			})
			//console.log(data[2]);
		});
	}
    render(){
        return (
            <div className="wrap">
                <div className="hot-top">
                    <div className="hot-bg">
                        <div></div>
                        <p>更新日期：10月31日</p>
                    </div>  
                </div>
                <div className="new-list">
					{
						this.state.list.map((item)=>{
							return <div className="new-table clearfix">
                                        <span>{item.id}</span>
                                            <dl className="list-dl">
                                                <dt>{item.title}</dt>
                                                <dd>{item.singer}</dd>
                                            </dl>
                                            <p></p>
                                        </div>
						})
					}	
				</div>
                <div className="list-foot">查看完整榜单></div>

           </div>
    )}
}
List.defaultProps = {
    'source':'http://localhost:3000/date/date.json'
}
export default List;