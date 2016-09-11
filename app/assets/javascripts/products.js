// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// alert("hello")

$(document).on('click','#destroy', function(event){
  event.preventDefault();
  var self = $(this);

  swal({
    title: "Are you sure?",
    text: "You will not be able to recover this file!",
    type: "warning",
    showCancelButton: true,
    closeOnConfirm: false,
    closeOnCancel: false,
    confirmButtonText: "Yes, delete it!",
    confirmButtonColor: "tomato",
  },
    function(isConfirm){
      if (isConfirm) {
       $.ajax({
         url: self.attr("data-url"),
         method: "DELETE",
         dataType: "JSON",
         success: function(data) {
           self.closest('#troptions').remove();
           swal("Deleted!", "Your file has been deleted.", "success");
         }
       });
    } else {
      swal("Cancelled", "Your file is still safe and sound in our database.", "error");
    }
  });

});

$(".submittag").click(function(e){
  e.preventDefault();
  $.ajax({
    url: '/search',
    method: "GET",
    dataType: "JSON",
    success: function(data) {
      console.log(data);
    },
    error: function (error){
      console.error(error);
    }
  })
});

// ("#saveFile").click(function() {
//       $.ajax({
//         url : "/users/documents/"+ file_id[1],
//         type: "PUT",
//         data : { document: { file: fire_text } },
//         success: function(data) {
//           console.log("Success");
//           window.location.href = '/'
//         },
//         error: function (error){
//           console.error(error);
//         }
//       });
