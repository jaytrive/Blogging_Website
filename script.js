let container=document.querySelector('.container');
let main=document.querySelector('.main')
let display=document.querySelector('.display')
//new modal window created
function newModal(){
    //creating modal element to to disable container functionality
    let modal =document.createElement('div')
    modal.classList.add('modal')
    document.body.appendChild(modal)

    //form creation
    container.classList.add('hide')
    let postCreation=document.createElement('form');
    postCreation.classList.add('newPost');

    let header=document.createElement('h2')
    header.style.backgroundColor="#E3E3E3"
    header.innerText="Create A Post"

    let postText=document.createElement('input')
    postText.placeholder="Enter Your heading...."
    postText.classList.add('inputFields')
    postText.required=true

    let postTextbox=document.createElement('textarea')
    postTextbox.placeholder="Enter Your Blog Post...."
    postTextbox.style.height="180px"
    postTextbox.classList.add('inputFields')
    postTextbox.required=true

    let divBtn=document.createElement('div')
    divBtn.style.display="flex"
    divBtn.style.backgroundColor="#E3E3E3"
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

    display.appendChild(postCreation)

    //publish functionality
    publishBtn.addEventListener('click', function publishPost(){
        if(postText.value.trim()==="" || postTextbox.value.trim()===""){
            alert("Fill all required field")
            return
        }
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

        //providing updated time
        let timedate=new Date().toLocaleString()
        let dateString=document.createElement('p')
        dateString.innerText='Created At: '+timedate.substring(0,8)+' at '+timedate.substring(10,15)+timedate.substring(18,21)
        dateString.classList.add('dateTime')
        
        //appending elements to main class in form of div
        divEle.appendChild(head)
        divEle.appendChild(blogPost)
        divEle.appendChild(editBtn)
        divEle.appendChild(delBtn)
        divEle.appendChild(dateString)
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
                container.classList.remove('hide')
                modal.classList.remove('modal')
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

            //save button functionality
            saveBtn.addEventListener('click',function savePost(){
                if(postText.value.trim()==="" || postTextbox.value.trim()===""){
                    alert("Fill all required field")
                    return
                }
                let timedate2=new Date().toLocaleString()
                dateString.innerText='Updated At: '+timedate2.substring(0,8)+' at '+timedate2.substring(10,15)+timedate2.substring(18,21)
                head.innerText=postText.value
                blogPost.innerText=postTextbox.value
                postCreation.style.display="none"
                container.classList.remove('hide')
                modal.classList.remove('modal')
            })
            del2Btn.addEventListener('click',deletePost)
            container.classList.add('hide')
            modal.classList.add('modal')
        })

        container.classList.remove('hide')
        modal.classList.remove('modal')
    })
    //cancel button functionality
    cancelBtn.addEventListener('click',function cancelPost(){
        postCreation.style.display="none"
        container.classList.remove('hide')
        modal.classList.remove('modal')
    })
    //close button functionality
    closeBtn.addEventListener('click',function closePost(){
        postCreation.style.display="none"
        container.classList.remove('hide')
        modal.classList.remove('modal')
    })
}