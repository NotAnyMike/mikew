import React, {Component} from 'react';

class BlogContainer extends Component{
	render(){
		return (
			<div className="mainContainer blogContainer">
				<figure className="identifierEntry"><img src="/static/img/firebase.png" alt="firebase"></img></figure>
				<span className="title">Create a chat in less than an hour</span>
				<div className="content">
					<p>Firebase by Google is a framework to use in the backend for android, iOS and even for webpages (for these you can use it in the frontend). This post will not be long. The things that this framework can do go from authentication, not limited to Google accounts, it also includes Facebook, Twitter, GitHub and event it supports authentication via email, changing and recovering the password. Without doubt a lot of people will find this very useful.</p>
					<img src="/static/img/img1.png" alt=""></img>
					<p>Some other features are DataBases (something necessary), Storage, one very useful is Hosting, and taking advantage that Firebase merged with Google Cloud, and given that Google App Engine works perfectly and is pretty easy to use I imagine that the same will happen with firebase. Another characteristic interesting is that it counts with Analytics integrated, very useful to have the project under control. There are many more features that I have not mencioned, here are some more:</p>
					<img src="/static/img/img2.png" alt=""></img>
					<p>To know more about Firebase you should visit their webpage here: <a href="">https://firebase.google.com/</a></p>
					<h2>se examples (a tiny pice)</h2>
					<img src="/static/img/img3.png" alt=""></img>
					<p>This is a very small example of how easy Firebase is, this exercice will use Firebase to create a very simple chat (just in one hour). Clearly I won’t show how to do it, Google has done a excellent job doing it, the link of this example is: <a href="">https://codelabs.developers.google.com/codelabs/firebase-web/#0</a> but here you can find more interesting examples: <a href="">https://codelabs.developers.google.com/</a>
					This example is very interesting, it is also fast and it only takes one hour, but it shows several features which are very very important in web development (there are different version depending on your device, I used the web version), the features used here are Authentication (using google, although using Facebook and the others are as easy as using Google’s), Database management and the Firebase storage. All these are very useful.</p>
				</div>
			</div>
		)
	}
}

export default BlogContainer
