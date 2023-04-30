import React from 'react'
import './Book.css'
import background from '../Images/background.png'
function Book() {
  return (
    <div style={{backgroundImage:`url(${background})`,height:"1000px"}} >
    
      <div id="booking" class="section">
		<div class="section-center">
			<div class="container">
				<div class="row">
					<div class="booking-form">
						<div class="form-header">
							<h1>Book a car</h1>
						</div>
						<form>
							<div class="row">
								<div class="col-sm-6">
									<div class="form-group">
										<span class="form-label">Name</span>
										<input class="form-control" type="text" placeholder="Enter your name"required/>
									</div>
								</div>
								<div class="col-sm-6">
									<div class="form-group">
										<span class="form-label">Email</span>
										<input class="form-control" type="email" placeholder="Enter your email"required/>
									</div>
								</div>
							</div>
							<div class="form-group">
								<span class="form-label">Car Name</span>
								<input class="form-control" type="tel" placeholder="Enter Car Name" required/>
							</div>
							<div class="form-group">
								<span class="form-label">Car Model</span>
								<input class="form-control" type="text" placeholder="Enter Car Model" required/>
							</div>
							<div class="form-group">
								<span class="form-label">Car Colour</span>
								<input class="form-control" type="text" placeholder="Enter Colour" required/>
							</div>
							<div class="row">
								<div class="col-sm-5">
									<div class="form-group">
										<span class="form-label">Booking Date</span>
										<input class="form-control" type="date" required/>
									</div>
								</div>
								<div class="col-sm-7">
									<div class="row">
										<div class="col-sm-4">
											<div class="form-group">
												<span class="form-label">Hour</span>
												<select class="form-control">
													<option>1</option>
													<option>2</option>
													<option>3</option>
													<option>4</option>
													<option>5</option>
													<option>6</option>
													<option>7</option>
													<option>8</option>
													<option>9</option>
													<option>10</option>
													<option>11</option>
													<option>12</option>
												</select>
												<span class="select-arrow"></span>
											</div>
										</div>
										<div class="col-sm-4">
											<div class="form-group">
												<span class="form-label">Min</span>
												<select class="form-control">
													<option>05</option>
													<option>10</option>
													<option>15</option>
													<option>20</option>
													<option>25</option>
													<option>30</option>
													<option>35</option>
													<option>40</option>
													<option>45</option>
													<option>50</option>
													<option>55</option>
												</select>
												<span class="select-arrow"></span>
											</div>
										</div>
										<div class="col-sm-4">
											<div class="form-group">
												<span class="form-label">AM/PM</span>
												<select class="form-control">
													<option>AM</option>
													<option>PM</option>
												</select>
												<span class="select-arrow"></span>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="form-btn">
								<button class="submit-btn">Book Now</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
      </div>
    )
}

export default Book