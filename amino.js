jQuery(function ($) {
var model = $(".community-badge");
$(model).each(function(index, item) {
$.each($(this).data(), function(key, value) {
newlink = document.createElement('a');
newlink.setAttribute('href', "https://aminoapps.com/partial/main-chat-window?ndcId="+value);
console.log($(newlink).text(value));
});
}); 
});
