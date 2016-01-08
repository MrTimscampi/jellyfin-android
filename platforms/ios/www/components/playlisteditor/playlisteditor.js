define(["components/paperdialoghelper","paper-dialog","paper-input"],function(e){function t(e){var t=getParameterByName("context");ApiClient.getItem(Dashboard.getCurrentUserId(),e).then(function(e){Dashboard.navigate(LibraryBrowser.getHref(e,t))})}function a(){Dashboard.showLoadingMsg();var e=$(this).parents("paper-dialog")[0],t=$("#selectPlaylistToAddTo",e).val();return t?(c=t,i(e,t)):l(e),!1}function l(a){var l=ApiClient.getUrl("Playlists",{Name:$("#txtNewPlaylistName",a).val(),Ids:$(".fldSelectedItemIds",a).val()||"",userId:Dashboard.getCurrentUserId()});ApiClient.ajax({type:"POST",url:l,dataType:"json"}).then(function(l){Dashboard.hideLoadingMsg();var i=l.Id;e.close(a),t(i)})}function i(t,a){var l=ApiClient.getUrl("Playlists/"+a+"/Items",{Ids:$(".fldSelectedItemIds",t).val()||"",userId:Dashboard.getCurrentUserId()});ApiClient.ajax({type:"POST",url:l}).then(function(){Dashboard.hideLoadingMsg(),e.close(t),Dashboard.alert(Globalize.translate("MessageAddedToPlaylistSuccess"))})}function n(){$(this).remove(),Dashboard.hideLoadingMsg()}function o(e){var t=$("#selectPlaylistToAddTo",e);if(!t.length)return void $("#txtNewPlaylistName",e).val("").focus();Dashboard.showLoadingMsg(),$(".newPlaylistInfo",e).hide();var a={Recursive:!0,IncludeItemTypes:"Playlist",SortBy:"SortName"};ApiClient.getItems(Dashboard.getCurrentUserId(),a).then(function(e){var a="";a+='<option value="">'+Globalize.translate("OptionNewPlaylist")+"</option>",a+=e.Items.map(function(e){return'<option value="'+e.Id+'">'+e.Name+"</option>"}),t.html(a).val(c||"").trigger("change"),Dashboard.hideLoadingMsg()})}function s(){var e="";return e+='<form style="margin:auto;">',e+='<div class="fldSelectPlaylist">',e+='<label for="selectPlaylistToAddTo">'+Globalize.translate("LabelSelectPlaylist")+"</label>",e+='<select id="selectPlaylistToAddTo" data-mini="true"></select>',e+="</div>",e+='<div class="newPlaylistInfo">',e+="<div>",e+='<paper-input type="text" id="txtNewPlaylistName" required="required" label="'+Globalize.translate("LabelName")+'"></paper-input>',e+="</div>",e+="<br />",e+="</div>",e+="<br />",e+="<div>",e+='<button type="submit" class="clearButton" data-role="none"><paper-button raised class="submit block">'+Globalize.translate("ButtonOk")+"</paper-button></button>",e+="</div>",e+='<input type="hidden" class="fldSelectedItemIds" />',e+="</form>"}function r(e,t){$("#selectPlaylistToAddTo",e).on("change",function(){this.value?($(".newPlaylistInfo",e).hide(),$("input",e).removeAttr("required")):($(".newPlaylistInfo",e).show(),$("input",e).attr("required","required"))}).trigger("change"),o(e),$("form",e).on("submit",a),$(".fldSelectedItemIds",e).val(t.join(",")),t.length?($(".fldSelectPlaylist",e).show(),o(e)):($(".fldSelectPlaylist",e).hide(),$("#selectPlaylistToAddTo",e).html("").val("").trigger("change"))}function d(){var t=this;t.show=function(t){t=t||[];var a=e.createDialog({size:"small"}),l="",i=Globalize.translate("HeaderAddToPlaylist");l+='<div class="dialogHeader">',l+='<paper-icon-button icon="close" class="btnCancel"></paper-icon-button>',l+='<div class="dialogHeaderTitle">',l+=i,l+="</div>",l+="</div>",l+=s(),a.innerHTML=l,document.body.appendChild(a),r(a,t),$(a).on("iron-overlay-closed",n),e.open(a),$(".btnCancel",a).on("click",function(){e.close(a)})}}var c="";return d});