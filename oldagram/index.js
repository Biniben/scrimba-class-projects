const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feeling a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]


const contentEl = document.getElementById("contents")
let iconHeart = "images/icon-heart.png"
let iconDm = "images/icon-dm.png"
let iconComment = "images/icon-comment.png"


for ( let i = 0; i < posts.length; i++){

    contentEl.innerHTML += `
                        <div id="header">
                        <div class="avatar-div">
                            <img src="${posts[i].avatar}" alt="" class="avatar">
                        </div>
                        <div class="name-div">
                            <h4 id="name">${posts[i].name}</h4>
                            <h5 id="location">${posts[i].location}</h5>            
                        </div>
                        </div>
                        <div class="post-div">
                            <img src="${posts[i].post}" alt="" class="post-img">
                        </div>
                        <div class="icon-div">
                            <div class="icons">
                                <img src="${iconHeart}" alt="" class="icon-img">
                                <img src="${iconDm}" alt="" class="icon-img">
                                <img src="${iconComment}" alt="" class="icon-img">
                            </div>
                        </div>
                        <div class="comment-div">
                            <h5 id="likes">${posts[i].likes} likes</h5>
                            <h5 id="comment"><span id="username">${posts[i].username} </span>${posts[i].comment}</h5>
                        </div>
                        <div class="gap"></div>`
}









