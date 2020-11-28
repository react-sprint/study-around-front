import React, { Fragment } from 'react'
import styled from 'styled-components'
function PassWordGenerator() {
    return (
        <Fragment>
        <Layout>
        <PassWordInput/>
        <PassWordInput/>
        <PassWordInput/>
        <PassWordInput/>
        </Layout>
        </Fragment>
    )
}

export default PassWordGenerator
const PassWordInput = styled.input`
outline:none;
text-align:center;
font-size:24px;
font-weight:bold;
margin:0px 5px;
width:50px;
height:60px;
border:1px solid #808080;
border-radius:5px;
box-sizing:border-box;
`
const Layout = styled.div`
margin-top:50px;
display:flex;
justify-content:center;
align-items:center;
width:100%;
`
