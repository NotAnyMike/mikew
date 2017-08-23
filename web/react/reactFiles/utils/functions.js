'use strict';

const Functions = {
	fetchAdvanced: function(req){
		if(false && self.fetch){
			return fetch(req)
		}else{
			//use xml
			console.log("there is no fetch");
			return new Promise(function(resolve,reject){
				var xmlReq = new XMLHttpRequest();

				//know what to open
				if(typeof req === 'string') xmlReq.open('get', req);
				else xmlReq.open(req.method, req.url);

				//adding headers
				if(req.headers){
					for(let [key,val] of req.headers.entries()){
						xmlReq.setRequestHeader(key,val);
					}
				}

				xmlReq.onload = function(resp){
					if(resp.target.status >= 200 && resp.target.status < 300){
						resp.target.json = function(){return new Promise(function(resolve, reject){resolve(JSON.parse(resp.target.responseText))})};
						resp.target.ok = true;
						resolve(resp.target);
					}else{
						reject({
							status: resp.target.status,
							statusText: resp.target.statusText
						});
					}
				};
				xmlReq.onerror = function(resp){
					reject({
						status: resp.target.status,
						statusText: resp.target.statusText
					});
				};

				if(req.body) xmlReq.send(req.body)
				else xmlReq.send();

			}.bind(this));

		}
	},
}

module.exports = Functions;
