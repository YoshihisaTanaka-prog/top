window.onload = function(){
    window.isLocal = false;
    console.log('test');
    $.post('https://script.google.com/macros/s/AKfycbyA0gGkw67AJm8DxktH4zDeGWkDjLHftHWUMjn4LIDFls2KvejrGDw0Kf7GI9LpiBNyfw/exec',
        {'sheetname': 'top', 'mode': 'r'},
        function(data){
            console.log('test3');
            console.log(data);
            for(var i = 0; i < data.length; i++){
                var id = '#url-' + String(data[i].vmId);
                console.log(id);
                if (data[i].vmId == 104){
                    // ネットワークテスト用
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
                    // リンク先の上書き
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
        }, 
        'json'
    );
    console.log('test2');
}