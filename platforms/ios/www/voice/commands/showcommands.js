define([],function(){return function(e){switch(e.success=!0,e.item.sourceid){case"music":Dashboard.navigate("music.html");break;case"movies":if(e.properties.movieName){var t={Limit:1,UserId:e.userId,ExcludeLocationTypes:"Virtual"};e.item.itemType&&(t.IncludeItemTypes=e.item.itemType),t.SearchTerm=e.properties.movieName,ApiClient.getItems(Dashboard.getCurrentUserId(),t).then(function(e){e[0]})}else Dashboard.navigate("movies.html");break;case"tvseries":Dashboard.navigate("tv.html");break;case"livetv":var i=e.item.menuid;Dashboard.navigate(i?-1!=i.indexOf("livetv")?"livetv.html?tab=0":-1!=i.indexOf("guide")?"livetv.html?tab=1":-1!=i.indexOf("channels")?"livetv.html?tab=2":-1!=i.indexOf("recordings")?"livetv.html?tab=3":-1!=i.indexOf("scheduled")?"livetv.html?tab=4":-1!=i.indexOf("series")?"livetv.html?tab=5":"livetv.html?tab=0":"livetv.html?tab=0");break;case"recordings":Dashboard.navigate("livetv.html?tab=3");break;case"latestepisodes":Dashboard.navigate("tv.html?tab=1");case"home":var i=e.item.menuid;Dashboard.navigate(i?-1!=i.indexOf("home")?"index.html":-1!=i.indexOf("nextup")?"index.html?tab=2":-1!=i.indexOf("favorites")?"index.html?tab=2":-1!=i.indexOf("upcoming")?"index.html?tab=3":-1!=i.indexOf("nowplaying")?"nowplaying.html":"index.html":"index.html");case"group":break;default:return void(e.success=!1)}}});