import React from 'react'
import { Button, Form, Input } from 'antd'
import {Link} from 'react-router-dom';
import axios from "axios";
import toast from "react-hot-toast"
import { useDispatch } from 'react-redux';
import { hideLoading, showLoading } from '../redux/alertsSlice';


function Register() {
  const dispatch = useDispatch();
  const onFinish = async(values) => {
    try{
      dispatch(showLoading())
      const response = await axios.post('/api/user/register',values);
      dispatch(hideLoading())
      if(response.data.sucess){
        toast.success(response.data.message);
      }else{
        toast.error(response.data.message);
      }
    } 
    catch(error){
      dispatch(hideLoading())
      toast.error("Something went wrong");

    }
  };
  return (
    <div className="authentication">
      <div className="authentication-form card p-3">
        <h1 className="card-title">Nice To meet U</h1>
        <Form layout="vertical" onFinish={onFinish}>

          <Form.Item label="Name" name="name">
            <Input placeholder = "Name"/>
          </Form.Item>

          <Form.Item label="Email" name="email">
            <Input placeholder = "Email"/>
          </Form.Item>

          <Form.Item label="Password" name="password">
            <Input type= "password" placeholder = "Password"/>
          </Form.Item>

          <Button className="primary-button m-2" htmlType="submit">Register</Button>
          <Link to="/login" className="anchor mt-2">
            Click Here to Login
          </Link>
        </Form>
      </div>  
    </div>
  )
}

export default Register