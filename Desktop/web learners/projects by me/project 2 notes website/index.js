console.log("project 2")
showNotes();    

let addbtn= document.getElementById('addbtn');
addbtn.addEventListener('click',()=>{

    let addtxt=document.getElementById('addtxt');
    let notes=localStorage.getItem("notes");
    if (notes==null){
        notesArr=[];// blank array
    }
    else{
        notesArr=JSON.parse(notes);
    }
    notesArr.push(addtxt.value);
    localStorage.setItem("notes",JSON.stringify(notesArr));
    // localStorage.setItem("notes",addtxt,value);// ab masle yeh ke woh ek hi variable ko update kari ja raha 
    addtxt.value="";
    showNotes();    
})

function showNotes()
{
    let notes=localStorage.getItem("notes");
    if (notes==null){   
        notesArr=[];// blank array
    }
    else{
        notesArr=JSON.parse(notes);
    }
    let html="";
    notesArr.forEach(function(element,index) {
        
        html +=`
        <div class="card mb-2 mx-2 noteCard " style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title">Note ${index+1}</h5>
          <p class="card-text">${element}</p>
          <a href="#" onclick="deleteTheNote(this.id)"class="btn btn-primary" id=${index}>Delete Note</a>
        </div>
      </div>      
        `;

    });

    let writeNote = document.getElementById('notes');
    if(notesArr.length!=0)writeNote.innerHTML=html;
    else{
        writeNote.innerHTML=`<p>Use add note section to make notes</p>`
    }


}

// function to delte note
function deleteTheNote(index)
{
    let notes=localStorage.getItem("notes");
    if (notes==null){   
        notesArr=[];// blank array
    }
    else{
        notesArr=JSON.parse(notes);
    }

    notesArr.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesArr));
    showNotes();
    console.log("delete " , index)
}

search =document.getElementById('searchtxt');
search.addEventListener('input',()=>{


    let val = search.value.toLowerCase();
    let notecards=document.getElementsByClassName('noteCard');
    Array.from(notecards).forEach(function(element){

            let cardtxt=element.getElementsByTagName('p')[0].innerText;
            if(cardtxt.includes(val)){
                element.style.display="block";
            }
            else{
                element.style.display="none";

            }

    })
   
})
