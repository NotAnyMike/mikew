import React, {Component} from 'react'

class BlogProjectEntry extends Component{

	render(){
		return (
			<li>
				<figure className="identifierBlogList"><img src="/static/img/firebase.png" alt=""></img></figure>
				<span className="bodyBlogList">Use firebase to create a chat under an hour</span>
			</li>
		)
	}
}

export default BlogProjectEntry;
