// useEffect import 
import React,{useEffect} from 'react';
// useSelector, useDispatch import
import { useDispatch, useSelector } from 'react-redux';
// auth module 액션 생성함수 import
import { changeField, initializeForm } from './auth';
import AuthForm from './AuthForm';
import axios from 'axios';

const LoginForm = () => {
    const dispatch = useDispatch();
    const { form } = useSelector( ({ auth }) => ( {
        form : auth.login
    }));
    // input change event 로 액션 디스패치. 디스패치 : 액션을 발생시키는 것.
    const onChange = e => {
        const { value, name } = e.target;
        // 액션 생성 함수 import
        dispatch(
            changeField({
                form:'login',
                key:name,
                value
            })
        );
    };
    // form submit event
    const onSubmit = e => {
        e.preventDefault();

        axios.post('http://3.88.1.192:3000/api/login', { 
            username: document.getElementsByName("username"),
            password: document.getElementsByName("password")
            
        })
        .then(response => {
        const data = response.data;
        console.log(`로그`);
        if (data.success) {
            // 로그인 성공
            console.log(`로그인 성공: 사용자 ${data.user}`);
            // 세션 등의 로그인 관련 처리를 진행합니다.
        } else { 
            // 로그인 실패
            console.log('로그인 실패:', data.message);
            // 실패에 따른 처리를 수행합니다.
        }
        })
    .catch(error => {
      console.error('로그인 요청 에러: ',error.response.data);
      // 에러 처리를 수행합니다.
  });
    }
    // 컴포넌트 초기 렌더링시 form 초기화
    useEffect(()=>{
        // 액션 생성 함수 import
        dispatch(initializeForm('login'));
    },[dispatch]);

    return (
        
       <AuthForm
       type="login"
       form={form}
       onChange={onChange}
       onSubmit={onSubmit} 
       />
    );
};

export default LoginForm;