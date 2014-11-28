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
	
	github.User=function(owner){
	     this.owner=owner;
	} 
	
	github.User.prototype.info = function(callback) {
      github.fn.request('/users/' + this.owner, {}, function(data) {callback(data.data);});
	};
	
	github.User.prototype.repos=function(param,callback) {
      github.fn.request('/users/' + this.owner + '/repos', param, function(data) {callback(data.data);});
	};
	
	github.User.prototype.following=function(callback) {
      github.fn.request('/users/' + this.owner + '/following', {}, function(data) {callback(data.data);});
	};
	
	github.User.prototype.followers=function(callback) {
      github.fn.request('/users/' + this.owner + '/followers', {}, function(data) {callback(data.data);});
	};
	
	github.User.prototype.issues=function(param,callback) {
      github.fn.request('/user/issues', param, function(data) {callback(data.data);});
	};

	github.User.prototype.repo=function(repo) {
      return new github.Repo(this.owner,repo);
	};
	
    github.Repo=function(owner,repo){
	     this.owner=owner;
		 this.repo=repo;
	}; 

	github.Repo.prototype.info = function(callback) {
      github.fn.request('/repos/' + this.owner + '/' + this.repo , function(data) {callback(data.data);});
	};

	github.Repo.prototype.issues = function(param,callback) {
      github.fn.request('/repos/' + this.owner + '/' + this.repo + '/issues', param, function(data) {callback(data.data);});
	};

	github.Repo.prototype.forks = function(param,callback) {
      github.fn.request('/repos/' + this.owner + '/' + this.repo + '/forks', param, function(data) {callback(data.data);});
	};
	
   github.Repo.prototype.labels = function(owner,repo,callback) {
      github.fn.request('/repos/' + this.owner + '/' + this.repo + '/labels', {}, function(data) {callback(data.data);});
	};



	win.Github=github;
  }
)(window);
