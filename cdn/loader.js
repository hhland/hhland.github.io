(function(_window){

    var doc=_window.document;

    var base="http://hhland.github.io/cdn";
    
    var loader={};
    
    loader["base"]=base;
    
    var writeScript=function(src){
         doc.write("<script type='text/javascript' src=\""+src+"\" ><"+"/script>");
    };
    
    var writeStyle=function(href){
         doc.write("<link rel=\"stylesheet\" type=\"text/css\"  href=\""+href+"\" />");
    };
    
    var importScript=function(src){
         writeScript(base+src);
    };
    
    var importStyle=function(href){
         writeStyle(base+href);
    };
    
    loader["importScript"]=importScript;
    
    loader["importStyle"]=importStyle;
    
    
    
    _window["Loader"]=loader;
    

})(window);
