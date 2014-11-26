;(function(win){

//
    var github={};
	github["base_api_path"]="https://api.github.com";

	github.fn={};

	github.fn.request = function(method, parameters, callback) {
		var url = github["base_api_path"] + method + '?callback=?'

		$.getJSON(url, parameters, function(data) {
		  if(!data.meta || !data.data || data.meta.status !== 200) {
			try {
			  console.log(data)
			} catch(e) {
			}
		  }
		  callback.call(github, data)
		});
	};
	
	github.user=function(owner){
	     this.owner=owner;
	} 
	
	github.user.prototype.info = function(callback) {
      github.fn.request('/users/' + this.owner, {}, function(data) {callback(data.data);});
	};
	
	github.user.prototype.repos=function(callback) {
      github.fn.request('/users/' + this.owner + '/repos', {}, function(data) {callback(data.data);});
	};

	github.user.prototype.repo=function(repo) {
      return new github.repo(this.owner,repo);
	};
	
    github.repo=function(owner,repo){
	     this.owner=owner;
		 this.repo=repo;
	}; 

	github.repo.prototype.info = function(callback) {
      github.fn.request('/repos/' + this.owner + '/' + this.repo , function(data) {callback(data.data);});
	};

	github.repo.prototype.issues = function(param,callback) {
      github.fn.request('/repos/' + this.owner + '/' + this.repo + '/issues', param, function(data) {callback(data.data);});
	};

	github.repo.prototype.forks = function(param,callback) {
      github.fn.request('/repos/' + this.owner + '/' + this.repo + '/forks', param, function(data) {callback(data.data);});
	};
	
   github.repo.prototype.labels = function(owner,repo,callback) {
      github.fn.request('/repos/' + this.owner + '/' + this.repo + '/labels', {}, function(data) {callback(data.data);});
	};



	win.Github=github;
  }
)(window);