/*
    Assignment 05
*/

$(document).ready(function () {
    // your code here
    contentItems.forEach(function(item){
        const itemHtml = item.toString();
        $('#content-item-list').append(itemHtml);
    });

    $('.content-item-wrapper').css({
        border: '2px solid #000',
        width:'300px',
        padding:'10px',
        margin:'10px auto'
    });
    $('#updateSuccesfulButton').click(function(){
        contentItems[0].updateContentItem(0, "Updated Item 1", null,null);
        $('#content-item-0').html(contentItems[0].toString());
    });

    $('#updateSuccesfulButton').click(function(){
        contentItems[1].updateContentItem(0, "Updated Item 1", null,null);
        $('#content-item-1').html(contentItems[1].toString());
    });


});
class ContentItme{
    constructor(id, name, description, category){
        this.id=id;
        this.name=name;
        this.description=description;
        this.category=category;
    }
    updateContentItem(id , name, description, category){
        if(this.id === id){
            if(name !==null)this.name = name;
            if (description !==null) this.decription = description;
            if (category !==null)this.category = category;
        }
    }
    toString() {
        return '<div class="content-item-wrapper" id="content-item-${this.id}"><h4>${this.name}</h4><p>${this.description}</p><div>${this.category}</div></div>';
    }
}
const contentItems = [
    new ContentItme(o, "Red Ranger","Leader of the team", "Mighty Morphin"),
    new ContentItme(o, "Blue Ranger","Great invetor", "Mighty Morphin"),
    new ContentItme(o, "Pink Ranger","Skilled", "Mighty Morphin"),
    new ContentItme(o, "Green Ranger","Former enemy", "Mighty Morphin"),
    new ContentItme(o, "Yellow Ranger","Trained martial artist", "Mighty Morphin"),

]



