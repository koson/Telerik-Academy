/*
    5. Create a tag cloud:
    - Visualize a string of tags (strings) in a given container
    - By given minFontSize and maxFontSize, generate the tags 
      with different font-size, depending on the number of occurrences
*/

taskName = "5. Tag cloud";

function Main(bufferElement) {

    var tags = [ "http", "cms", "ASP.NET MVC", "js", "javascript", ".net", ".net", "web", "html", "xaml", "ASP.NET", "css", "wordpress", "js", "http", "asp.net", "asp.net MVC", "ASP.NET MVC", "wp", "cms", "html", "wp", "javascript", "http", ".NET Framework", ".net", "Java", "java", "java" ];

    generateTagCloud(tags, 14, 32);
}

function generateTagCloud(tags, minFontSize, maxFontSize) {
    var tagDictionary = extractTags(tags);

    createTagCloudContainer();
    pushTagsInList(tagDictionary, minFontSize, maxFontSize);
}

function extractTags(collection) {
    var tagDictionary = [];

    for (var i = 0; i < collection.length; i++) {
        var currentTag = collection[i].toLowerCase();

        tagDictionary[currentTag] = tagDictionary[currentTag] || 0;   
        tagDictionary[currentTag]++;
    }

    return tagDictionary;
}

function createTagCloudContainer() {
    var container = document.createElement('div');
    container.id = 'tag-cloud';

    container.appendChild(createList());
    _GetDefaultContainer().appendChild(container);
}

function createList() {
    var list = document.createElement('ul');
    list.id = 'tag-cloud-list';

    return list;
}

function pushTagsInList(tags, minFontSize, maxFontSize) {
    var list = document.getElementById('tag-cloud-list');

    var minOccurs = Array.min(tags);
    var maxOccurs = Array.max(tags);

    var length = maxOccurs - minOccurs;
    var step = (maxFontSize - minFontSize) / length;

    for (var tagName in tags) {
        var li = document.createElement('li');
        li.style.color = getRandomRgbColor();
        li.style.fontSize = ((tags[tagName] - 1) * step + minFontSize) + 'px';
        li.innerHTML = tagName;

        list.appendChild(li);
    }
}

function getRandomRgbColor() {
    return 'rgb(' + [GetRandomInt(255), GetRandomInt(255), GetRandomInt(255)].join(',') + ')';
}

Array.min = function(collection) {
  return Math.min.apply(null, 
                        Object.keys(collection).map(function(e) {
                            return collection[e]; }));
}

Array.max = function(collection) {
  return Math.max.apply(null, 
                        Object.keys(collection).map(function(e) {
                            return collection[e]; }));
}