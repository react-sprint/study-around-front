import React, { Fragment,useState } from 'react'
import styled from 'styled-components'

function IfMember() {
    return (
        <Fragment>
        <Layout>
        <Title>
        ❗️정말로 탈퇴하시겠습니까?
        </Title>
        <CheckDropLayout>
        <div className="title">
        탈퇴를 원하시는 경우 하단에 스터디 명을 정확히 입력해주세요.
        </div>
        <input className="inputForDrop" placeholder="스터디명"/>
        </CheckDropLayout>
        <SubmitButton>탈퇴하기</SubmitButton>
        </Layout>
        </Fragment>
    )
}

export default IfMember
const CheckDropLayout = styled.div`
width:100%;
padding:0px 10px;
box-sizing:border-box;
.title{
    text-align:center;
    font-size:14px;
    font-weight:bold;
    color:#000;
}.inputForDrop{
margin-top:30px;
width:100%;
height:40px;
padding:0px 10px;
border:1px solid #808080;
border-radius:5px;
box-sizing:border-box;
&::placeholder{
    font-weight:bold;
}
}
`
const SubmitButton = styled.div`
cursor: pointer;
margin-top:10px;
display:flex;
justify-content:center;
align-items:center;
font-weight:bold;
color:#fff;
font-size:14px;
width:90px;
height:40px;
background-color:#ff6178;
border-radius:5px;
border:none;
`
const Layout = styled.div`  
width:100%;
height:100%;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
`
const Title = styled.div`
font-size:20px;
font-weight:bold;
color:#000;
`
