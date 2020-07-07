alert('Running');
collection = document.getElementsByClassName('btn-tag-item');
for (let i = 0; i < collection.length; ++i) {
    collection[i].click();
    //await new Promise(r => setTimeout(r, 1000));
    setTimeout(function(){}, 2000);
}

delete collection;