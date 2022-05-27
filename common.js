window.onload = function(){
    window.isLocal = false;
        $.post('https://script.google.com/macros/s/AKfycbyA0gGkw67AJm8DxktH4zDeGWkDjLHftHWUMjn4LIDFls2KvejrGDw0Kf7GI9LpiBNyfw/exec', {'sheetname': 'top'}, function(data){
        console.log(data);
        for(var i = 0; i < data.length; i++){
            var id = '#url-' + String(data[i].id);
            console.log(id);
            if (data[i].id == 104){
                $.get(data[i].url, function(data, status, xhr){
                    console.log(xhr.status)
                    if(xhr.status == 200){
                        isLocal = true;
                    } else{
                        isLocal = false;
                    }
                });
            }
            if ($(id).length) {
                $(id).each(function() {
                    var url = data[i].url + $(this).attr('href');
                    $(this).attr('href', url);
                    console.log(url);
                });
            }
        }
        if(loaded != null) {
            if(typeof loaded == 'function'){
                setTimeout(() => {
                    loaded();
                }, 2000);
            }
        }
    },'json');
}