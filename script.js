let container=document.querySelector('.container');
let main=document.querySelector('.main')
//new modal window created
function newModal(){
    //form creation
    container.classList.add('hide')
    let postCreation=document.createElement('form');
    postCreation.classList.add('newPost');

    let header=document.createElement('h2')
    header.innerText="Create A Post"

    let postText=document.createElement('input')
    postText.placeholder="Enter Your heading...."
    postText.classList.add('inputFields')

    let postTextbox=document.createElement('textarea')
    postTextbox.placeholder="Enter Your Blog Post...."
    postTextbox.style.height="180px"
    postTextbox.classList.add('inputFields')

    let divBtn=document.createElement('div')
    divBtn.style.display="flex"
    divBtn.style.gap="30px"

    let publishBtn=document.createElement('button')
    publishBtn.type="button"
    publishBtn.innerText="Publish Post"
    publishBtn.classList.add('inputFields')

    let cancelBtn=document.createElement('button')
    cancelBtn.type="button"
    cancelBtn.innerText="Cancel Post"
    cancelBtn.classList.add('inputFields')

    //close icon imported from google-icons
    let closeBtn=document.createElement('button')
    closeBtn.type="button"
    closeBtn.classList.add("material-symbols-outlined")
    closeBtn.innerText="close"

    //appending all elements in form
    postCreation.appendChild(header)
    postCreation.appendChild(closeBtn)
    postCreation.appendChild(postText)
    postCreation.appendChild(postTextbox)
    divBtn.appendChild(publishBtn)
    divBtn.appendChild(cancelBtn)
    postCreation.appendChild(divBtn)

    container.appendChild(postCreation)

    //publish functionality
    publishBtn.addEventListener('click', function publishPost(){
        
        //taking value from text input
        let divEle=document.createElement('div')
        let head=document.createElement('h2')
        head.innerText=postText.value

        //taking value from textarea field
        let blogPost=document.createElement('p')
        blogPost.innerText=postTextbox.value
        postCreation.style.display="none"

        let editBtn=document.createElement('button')
        editBtn.innerText="Edit Post"
        let delBtn=document.createElement('button')
        delBtn.innerHTML="Delete Post"

        //appending elements to main class in form of div
        divEle.appendChild(head)
        divEle.appendChild(blogPost)
        divEle.appendChild(editBtn)
        divEle.appendChild(delBtn)
        main.appendChild(divEle)

        //delete functionality
        delBtn.addEventListener('click',deletePost)

        //separate function made for deletation as 2 deletebuttons are there
        function deletePost(){
            //confirming the choice
            let bool=confirm('Are you sure you want to delete this blog')
            if(bool==true){
                divEle.remove()
                postCreation.style.display="none"
            }
        }

        //edit functionality
        editBtn.addEventListener('click',function editPost(){
            //displaying form
            postCreation.style.display="flex"
            header.innerText="Edit A Post"
            
            let saveBtn=document.createElement('button')
            saveBtn.type="button"
            saveBtn.classList.add('inputFields')
            saveBtn.innerText="Save Post"

            let del2Btn=document.createElement('button')
            del2Btn.type="button"
            del2Btn.classList.add('inputFields')
            del2Btn.innerText="Delete Post"
            
            //replacing both buttons with new updated buttons
            publishBtn.replaceWith(saveBtn)
            cancelBtn.replaceWith(del2Btn)

            saveBtn.addEventListener('click',function sacePost(){
                head.innerText=postText.value
                blogPost.innerText=postTextbox.value
                postCreation.style.display="none"
            })
            del2Btn.addEventListener('click',deletePost)
        })
    })
    //cancel button functionality
    cancelBtn.addEventListener('click',function cancelPost(){
        postCreation.style.display="none"
    })
    //close button functionality
    closeBtn.addEventListener('click',function closePost(){
        postCreation.style.display="none"
    })
}