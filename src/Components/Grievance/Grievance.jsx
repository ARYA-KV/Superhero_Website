import React, { useState } from 'react';
import { FloatingLabel, Form, Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../../pages/Header';
import { addGrievanceAPI } from '../../services/allAPI';

const Grievance = () => {
  const [grievanceData, setGrievanceData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    pincode: '',
    complaint: '',
    mobile: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (grievanceData.firstName && grievanceData.lastName && grievanceData.address && grievanceData.pincode && grievanceData.complaint && grievanceData.mobile) {
      const reqBody = {
        firstName: grievanceData.firstName,
        lastName: grievanceData.lastName,
        fullAddress: grievanceData.address,
        pincode: grievanceData.pincode,
        complaint: grievanceData.complaint,
        mobileNumber: grievanceData.mobile
      };

      console.log("Submitting data:", reqBody);

      try {
        const result = await addGrievanceAPI(reqBody);
        console.log("API Result:", result);

        if (result && (result.status === 200 || result.status === 201)) { // handle 200 or 201 status
          toast.success(result.data.message || "Grievance submitted successfully");
          setGrievanceData({ firstName: '', lastName: '', address: '', pincode: '', complaint: '', mobile: '' });
        } else if (result && result.data) {
          toast.warning(result.data.message);
        } else {
          toast.error("An error occurred. Please try again.");
        }
      } catch (err) {
        console.error("API error:", err);
        toast.error("An error occurred while submitting the grievance");
      }
    } else {
      toast.info("Please fill the form completely");
    }
  };



  return (
    <>
      <Header />
      <div style={{ width: '100%', height: '130vh',backgroundColor:'black'  }} className='d-flex justify-content-center align-items-center'>
      <div style={{  marginTop: '10px', padding: '20px',backgroundColor:'white' }} className='container w-50'>
  <h1  className='fw-bolder mt-2 text-center'>Submit Your Grievance</h1>
  <Form onSubmit={handleSubmit} style={{  padding: "20px", borderRadius: "10px" }}>
    
    <FloatingLabel controlId="floatingFirstName" label="First Name" className="mb-3">
      <Form.Control
        value={grievanceData.firstName}
        onChange={(e) => setGrievanceData({ ...grievanceData, firstName: e.target.value })}
        type="text"
        placeholder="First Name"
        required
      />
    </FloatingLabel>

    <FloatingLabel controlId="floatingLastName" label="Last Name" className="mb-3">
      <Form.Control
        value={grievanceData.lastName}
        onChange={(e) => setGrievanceData({ ...grievanceData, lastName: e.target.value })}
        type="text"
        placeholder="Last Name"
        required
      />
    </FloatingLabel>

    <FloatingLabel controlId="floatingAddress" label="Full Address" className="mb-3">
      <Form.Control
        value={grievanceData.address}
        onChange={(e) => setGrievanceData({ ...grievanceData, address: e.target.value })}
        type="text"
        placeholder="Full Address"
        required
      />
    </FloatingLabel>

    <FloatingLabel controlId="floatingPincode" label="Pincode" className="mb-3">
      <Form.Control
        value={grievanceData.pincode}
        onChange={(e) => setGrievanceData({ ...grievanceData, pincode: e.target.value })}
        type="text"
        placeholder="Pincode"
        required
      />
    </FloatingLabel>

    <FloatingLabel controlId="floatingComplaint" label="Write Your Complaint" className="mb-3">
      <Form.Control
        value={grievanceData.complaint}
        onChange={(e) => setGrievanceData({ ...grievanceData, complaint: e.target.value })}
        as="textarea"
        placeholder="Write your complaint"
        style={{ height: '100px' }}
        required
      />
    </FloatingLabel>

    <FloatingLabel controlId="floatingMobile" label="Mobile Number" className="mb-3">
      <Form.Control
        value={grievanceData.mobile}
        onChange={(e) => setGrievanceData({ ...grievanceData, mobile: e.target.value })}
        type="text"
        placeholder="Mobile Number"
        required
      />
    </FloatingLabel>

    <Button style={{ backgroundColor: 'tomato', color: 'white' }} variant="primary" type="submit" className="w-20">
      Submit
    </Button>
  </Form>
</div>


        <ToastContainer position='top-center' theme='colored' autoClose={3000} />
      </div>
    </>
  );
};

export default Grievance;
