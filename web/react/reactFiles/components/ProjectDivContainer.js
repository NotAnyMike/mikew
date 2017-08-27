import React, {Component} from 'react'

class ProjectDivContainer extends Component {
	
	render(){
		return (
			<div className="mainContainer projectContainer">
				<figure className="identifierEntry"><img src="/static/img/tg.png" alt="firebase"></img></figure>
				<span className="title">Trueque Gamer</span>
				<span className="summary">
					<p>Well … this is a project that a friend and I came up with when I found out how tedious it is to exchange games through Facebook (because I recently bought my first console  -a PS4  -in a long time), so we figured out why not create a web page? so we decided to program it and we ask for help to another friend of mine to design it (so all the design its his … check out his web site here): <a href="">www.truequegamer.com</a>
				Just to give some context to the non-spanish speakers, trueque means exchange, so the name is pretty obvious. 
				Given that the website hasn’t been designed yet I would like to show you the main features we have thought of.</p></span>
				<div className="techs">
					<span className="title">Technologies used:</span>
					<ul>
						<li>
							<img src="/static/img/react.png" alt=""></img>
							<span>React.js</span>
						</li>
						<li>
							<img src="/static/img/js.png" alt=""></img>
							<span>Javascript</span>
						</li>
						<li>
							<img src="/static/img/gulp.png" alt=""></img>
							<span>Gulp</span>
						</li>
						<li>
							<img src="/static/img/aws.png" alt=""></img>
							<span>webpack</span>
						</li>
						<li>
							<img src="/static/img/django.png" alt=""></img>
							<span>django</span>
						</li>
						<li>
							<img src="/static/img/flux.png" alt=""></img>
							<span>flux</span>
						</li>
						<li>
							<img src="/static/img/npm.png" alt=""></img>
							<span>npm</span>
						</li>
					</ul>
				</div>
				<div className="content">
					<section>
					<h2>General idea</h2>
					<p>To start with a general idea about what is TRUEQUE GAMER. The main idea here is to help connecting each parts who intervene while changing a used game (the one who has the game and the one who wants the game). It is basically it, but everyone should be asking, isn’t it what a Facebook group does? Well … yes, the difference here is that there are a bunch of different groups out there (at least here) and even if there were only one group, the information is pretty unorganized, people publish several times the same game, or publish several games in the same post (i.e. not updating the status of the post properly for every game  — sold or still in stock), because of that no one likes to search for the game they want, that means search for the post and ask and contact if that person still has the game and negotiate its price, they prefer to create a new publication to buy (and no to sell) the game, so they will get several responses, not all of them about the game wanted.
					<br></br>
					<br></br>
					But the organize and connect the two parts is not all, as important as those, TRUEQUE GAMER should centralize the information of used games. Without it there would not be any real added value to the app. </p>
					</section>
					<section>
					<h2>some questions</h2>
					<ul>
						<li>Is it free? ... Of course, the idea is to help players.</li>
						<li>Will can I sell games there? … Yep.</li>
						<li>Will can I sell consoles there? … No, at least in the first version, we will consider it.</li>
					</ul>	
					<p>
					Will it be open source?… Well, due to one of its main purposes is to centralize information, having different pages of the same app will be detrimental for it, so perhaps it will. So given that the main idea is generating connections and centralize here are there main functions.</p>
					</section>
					<section>
					<h2>Search</h2>
					<p>What would be a app to connect two parties if you cannot search what you want. The search part here will work a little different from a normal search, instead of having different designs for searching something, there will be only one search panel in all the app, the same no mater where you are, it will popup and allowing you to search, this panel will have the following filters:
					</p>
					<ul>
						<li>Used, New, Both.</li>
						<li>Exchange, Selling, Both.</li>
						<li>Text field.</li>
						<li>Console (can select multiple)</li>
						<li>By City and Country.</li>
					</ul>
					</section>
					<section>
					<h2>Internal chat (VERY VERY IMPORTANT)</h2>
					<p>This is one of the most important part. This should work perfectly, and I don’t mean it in a technical way, how it works would allow a perfect communication between the two parties. I was thinking on copying Facebook’s chat in order to keep it simple. Perhaps it can shows what games each party is selling or exchanging, to give some information.</p>
					</section>
					<section>
					<h2>Exchange or sell games</h2>
					<p>This is one of the most important part. This should work perfectly, and I don’t mean it in a technical way, how it works would allow a perfect communication between the two parties. I was thinking on copying Facebook’s chat in order to keep it simple. Perhaps it can shows what games each party is selling or exchanging, to give some information.</p>
					</section>
					<section>
					<h2>Some others ideas for the following versions</h2>
					<p>Some others ideas for the following versions</p>
					</section>
				</div>
			</div>
		)
	}

}

export default ProjectDivContainer;
