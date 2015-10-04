(function(win){

    var doc=window.document;
    
    var bootcdn={};
    
    var base="http://cdn.bootcss.com";
    
    bootcdn["base"]=base;
    
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
    
    bootcdn["importScript"]=importScript;
    bootcdn["importStyle"]=importStyle;
    
    bootcdn["importJquery"]=function(version){
         version=version||"2.1.1";
         importScript("/jquery/"+version+"/jquery.min.js");
    };
    
    
    bootcdn["importJquery_mousewheel"]=function(version){
         version=version||"3.1.12";
         importScript("/jquery-mousewheel/"+version+"/jquery.mousewheel.min.js");
    };
    
    bootcdn["importJqueryui"]=function(version){
         version=version||"1.11.2";
         importStyle("/jqueryui/"+version+"/jquery-ui.min.css");
         importScript("/jqueryui/"+version+"/jquery-ui.min.js");
         
    };
    //yui/yui/yui-min.js
    bootcdn["importYui"]=function(version){
         version=version||"3.18.0/";
         importScript("/yui/"+version+"/yui/yui-min.js");
    };
    
    bootcdn["importBootstrap"]=function(version){
         version=version||"3.3.0";
         importStyle("/bootstrap/"+version+"/css/bootstrap.min.css");
         importScript("/bootstrap/"+version+"/js/bootstrap.min.js");
         
    };
    
     bootcdn["importKnockout"]=function(version){  
         version=version||"3.2.0";
         importScript("/knockout/"+version+"/knockout-min.js");
    };
    
    bootcdn["importD3"]=function(version){  
         version=version||"3.4.13";
         importScript("/d3/"+version+"/d3.min.js");
    };
    
    bootcdn["importThreejs"]=function(version){  
         version=version||"r69";
         importScript("/three.js/"+version+"/three.min.js");
    };
    
    bootcdn["importDatejs"]=function(version){  
         version=version||"1.0";
         importScript("/datejs/"+version+"/date.min.js");
    };
    
    bootcdn["importJsurl"]=function(version){  
         version=version||"1.8.4";
         importScript("/js-url/"+version+"/url.min.js");
    };
    
    
    bootcdn["importLinq"]=function(version){  
         version=version||"2.2.0.2";
         importScript("/linq.js/"+version+"/jquery.linq.min.js");
    };
  
    bootcdn["importRequirejs"]=function(version){
        version=version||"2.1.15";
         importScript("/require.js/"+version+"/require.min.js");
    };
    
 
    bootcdn["importStatsjs"]=function(version){
        version=version||"r11";
         importScript("/stats.js/"+version+"/Stats.js");
    };
    
    
    bootcdn["importDatgui"]=function(version){
        version=version||"0.5";
         importScript("/dat-gui/"+version+"/dat.gui.js");
    };
    
    
     bootcdn["importUnderscore"]=function(version){
        version=version||"1.7.0";
         importScript("/underscore.js/"+version+"/underscore-min.js");
    };
    
     bootcdn["importNormalize"]=function(version){
        version=version||"3.0.1";
         importStyle("/normalize/"+version+"/normalize.min.css");
    };
    
     bootcdn["importModernizr"]=function(version){
        version=version||"2010.07.06dev";
         importScript("/modernizr/"+version+"/modernizr.min.js");
    };
    
    bootcdn["importChromajs"]=function(version){
        version=version||"0.6.1";
         importScript("/chroma-js/"+version+"/chroma.min.js");
    };
    
    bootcdn["importMathjax"]=function(config,version){
        version=version||"2.4.0";
        config=config||"TeX-AMS_HTML-full";
         importScript("/mathjax/"+version+"/MathJax.js?config="+config);
    };
    
    
   
    bootcdn["importFontawesome"]=function(version){
        version=version||"4.2.0";
         importStyle("/font-awesome/"+version+"/css/font-awesome.min.css");
    };
   
    
    bootcdn["importMarked"]=function(version){
        version=version||"0.3.2";
         importScript("/marked/"+version+"/marked.min.js");
    };
    
    bootcdn["importReact"]=function(version){
        ////cdn.bootcss.com/react/0.14.0-alpha3/react.min.js
        version=version||"0.14.0-alpha3";
         importScript("/react/"+version+"/react.min.js");
         importScript("/react/"+version+"/JSXTransformer.js");
    };
    
    bootcdn["importTinymce"]=function(version){
        version=version||"4.2.5";
        importScript("/tinymce/"+version+"/tinymce.min.js");
        importScript("/tinymce/"+version+"/jquery.tinymce.min.js");
        
    }
    
    
    bootcdn["importJustifiedGallery"]=function(version){
        version=version||"3.6.0";
        importStyle("/justifiedGallery/"+version+"/css/justifiedGallery.min.css");
        importScript("/justifiedGallery/"+version+"/justifiedGallery.min.js");
        
    }
    
    bootcdn["importChartist"]=function(version){
        version=version||"0.9.4";
        importStyle("/chartist/"+version+"/chartist.min.css");
        importScript("/chartist/"+version+"/chartist.min.js");
        
    }
    
    
    
    win['Bootcdn']=bootcdn;
  
})(window);
