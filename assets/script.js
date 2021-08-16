  // Marking li as completed
$('#container ul').on('click', 'li', function () {
    $(this).toggleClass('completed');
})

// removing li items from our todo
$('#container ul').on('click', 'i', function (event) {
    $(this).parent().fadeOut(function () {
        // console.log("FadeOut Completed");
        $(this).remove();
    });
   
    event.stopPropagation();  //to prevent event bubbling
})

// Adding new todo 
$('input[type="text"]').keypress(function (event) {
    
    // if (event.which === 13) {
    //     // console.log(event);
    //     let newTodoText = $(this).val();
    //     $('#container ul').append(`<li><span><i class="fas fa-trash-alt"></i></span> ${newTodoText}</li>`);
    //     $(this).val("");
    // } 

})

$('#plus').click(function () {
    $('input').fadeToggle(500,function () {
        console.log("Faded");
    })
})

$('.getList').click(function () {
    $('#container').fadeToggle(500,function () {
    })
})
function addfun(){
    var x=document.getElementById('addTodo').value;
     console.log(x);
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "name": x,
  "isComplete": false
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://localhost:44312/api/todo", requestOptions)
  .then(response => response.text())
  .then(result => {
      sessionStorage.setItem('idd',result.id) 

      console.log(result)})
  
  .catch(error => console.log('error', error));
 
  var ul = document. getElementById("list");
var li = document. createElement("li");
var dltbtn=document.createElement("i");
dltbtn.setAttribute("class", "fas fa-trash-alt");
// dltbtn.setAttribute("onClick", "deleteLi()");
li.setAttribute("id", "dltid");
li.appendChild(dltbtn);
li. appendChild(document. createTextNode(x));
ul. appendChild(li);
}
// function deleteLi() {
//     var iidd=sessionStorage.getItem('idd'); 
//    var requestOptions = {
//   method: 'DELETE',
//   redirect: 'follow'
// };

// fetch("https://localhost:44312/api/todo/"+iidd, requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));
// }
