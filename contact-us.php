<?php

        include 'include/header.php';

?>
	<!--Banner-->
	<div class="container-fluid AboutBanner py-5">
		<div class="container my-4">
			<h1 class="text-center text-white FontSize36">CONTACT US</h1> </div>
	</div>
	<!--//Banner-->
	<!--Body-->
	<div class="container-fluid pb-4 pt-1">
		<div class="container">
			<div class="row">
				<div class="col-sm-4 mt-3">
					<div class="LightBlueBGColor rounded px-3 py-4 h-100">
						<div class="text-center"><i class="fa fa-phone-volume fa-3x BlueTxtColor"></i></div>
						<h2 class="FontSize20 font-weight-bold text-center mt-3">Phone Number</h2>
						<div class="text-center FontSize18 mt-2"><a href="tel:8469502020">+91 8469 502 020</a></div>
					</div>
				</div>
				<div class="col-sm-4 mt-3">
					<div class="LightBlueBGColor rounded px-3 py-4 h-100">
						<div class="text-center"><i class="fa fa-envelope fa-3x BlueTxtColor"></i></div>
						<h2 class="FontSize20 font-weight-bold text-center mt-3">Email Address</h2>
						<div class="text-center FontSize18 mt-2"><a href="mailto:sjmssurat8@gmail.com">sjmssurat8@gmail.com</a></div>
					</div>
				</div>
				<div class="col-sm-4 mt-3">
					<div class="LightBlueBGColor rounded px-3 py-4">
						<div class="text-center"><i class="fa fa-map fa-3x BlueTxtColor"></i></div>
						<h2 class="FontSize20 font-weight-bold text-center mt-3">Office Address</h2>
						<div class="text-center FontSize18 mt-2">2124-25, Ambaji Market, Nr. Kamela Darwaja, Ring Road, Surat - 395002, Gujarat</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="container-fluid bg-white pt-3 pb-4">
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<h2 class="text-center FontSize36">Get In Touch</h2></div>
			</div>
			<div class="row mt-3">
				<div class="col-lg-8 offset-lg-2">
					<form role="role" method="post" id="form_data" enctype="multipart/form-data" autocomplete="off" >
						<span><strong style="color: red;"  id="error_msg"></strong></span>
           				 <br>

						<div class="row">
							<div class="col-sm-6 mt-3">
								<input type="text" class="form-control" id="FirstName" name="FirstName" placeholder="First Name"> </div>
							<div class="col-sm-6 mt-3">
								<input type="text" class="form-control" id="LastName" name="LastName" placeholder="Last Name"> </div>
							<div class="col-sm-6 mt-3">
								<input type="number" class="form-control" id="CustomerMobileNumber" name="CustomerMobileNumber" placeholder="Phone Number"> </div>
							<div class="col-sm-6 mt-3">
								<input type="text" class="form-control"  id="EmailId" name="EmailId" placeholder="Email Id"> </div>
							<div class="col-sm-12 mt-3">
								<textarea rows="2" class="form-control" id="Message" name="Message" placeholder="Your message here"></textarea>
							</div>
							<div class="col-sm-12 text-center mt-3">
								<input type="hidden" name="task" id="task" value="send_contact_us_email" >
								<button type="button" class="btn btn-danger text-uppercase" id="SubmitData" >Submit Now</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
	<div class="container-fluid px-0">
		<div class="embed-responsive embed-responsive-21by9">
			<iframe class="embed-responsive-item" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1860.0518976656297!2d72.83804630050095!3d21.18803529875484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fe0c9dbe20f%3A0x4656e1fa5bb313d5!2sAmbaji%20Market!5e0!3m2!1sen!2sin!4v1605935040512!5m2!1sen!2sin" allowfullscreen></iframe>
		</div>
	</div>
	<!--//Body-->



	<script type="text/javascript">
		

$('#SubmitData').click(function(e) {

			var FirstName = $('#FirstName').val();
			var LastName = $('#LastName').val();
			var CustomerMobileNumber = $('#CustomerMobileNumber').val();
			var EmailId = $('#EmailId').val();
			var Message = $('#Message').val();
			var validate_mobile_no = /^\d{10}$/;
			var validate_email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            if(FirstName == "") {
                $('#FirstName').css("border-color", "red");
                $("#error_msg").empty().append("Please Enter First Name.");
                setTimeout(function() {
                    $("#FirstName").removeAttr('style');
                    $('#error_msg').empty();
                }, 3000);
            } else if(LastName == "") {
                $('#LastName').css("border-color", "red");
                $("#error_msg").empty().append("Please Enter Last Name.");
                setTimeout(function() {
                    $("#LastName").removeAttr('style');
                    $('#error_msg').empty();
                }, 3000);
            } else if(CustomerMobileNumber == "") {
                $('#CustomerMobileNumber').css("border-color", "red");
                $("#error_msg").empty().append("Please Enter Mobile Number.");
                setTimeout(function() {
                    $("#CustomerMobileNumber").removeAttr('style');
                    $('#error_msg').empty();
                }, 3000);
            } else if(!CustomerMobileNumber.match(validate_mobile_no))
	        {
	            $('#CustomerMobileNumber').css("border-color", "red");
	            $('#error_msg').empty().append('Please Enter Valid Mobile Number.');
	            setTimeout(function()
	            {
	              $("#CustomerMobileNumber").removeAttr('style');
	              $('#error_msg').empty();  
	            },3000);
	        } else if(EmailId == "") {

                $('#EmailId').css("border-color", "red");
                $("#error_msg").empty().append("Please Enter Email Id.");
                setTimeout(function() {
                    $("#EmailId").removeAttr('style');
                    $('#error_msg').empty();
                }, 3000);

            } else if(!EmailId.match(validate_email))
	        {
	            $('#EmailId').css("border-color", "red");
	            $('#error_msg').empty().append('Please Enter Valid Email Id.');
	            setTimeout(function()
	            {
	               $("#EmailId").removeAttr('style');
	              $('#error_msg').empty();  
	            },3000);

	      	} else if(Message == "") {

                $('#Message').css("border-color", "red");
                $("#error_msg").empty().append("Please Enter Message.");
                setTimeout(function() {
                    $("#Message").removeAttr('style');
                    $('#error_msg').empty();
                }, 3000);

            } else{

                    e.preventDefault();
                    $.ajax({
                        url: 'contact_us_db_operations.php',
                        type: 'post',
                        data: $('#form_data').serialize(),
                        success: function(data) {

                            if (data.trim() == 'Success') {

								alert("Thank You. Your enquiry has been successfully posted.");

                            }else {

                                alert("Error");

                            }
                        }

                    }); 

            }

});


	</script>
<?php

        include 'include/footer.php';

?>