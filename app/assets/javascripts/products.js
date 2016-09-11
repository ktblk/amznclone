// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$('#destroy').on('click',function(event){
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
           self.parent().remove();
           swal("Deleted!", "Your file has been deleted.", "success");
         }
       });
    } else {
      swal("Cancelled", "Your file is still safe and sound in our database.", "error");
    }
  });

});
