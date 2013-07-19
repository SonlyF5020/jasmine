
function deleteList(){
    $('#totalList>li:last').remove();
}

function submitList(){
    var newList = $(document.createElement('li')).html($('#weibo').val());
    $('#totalList').append("",newList);
}
