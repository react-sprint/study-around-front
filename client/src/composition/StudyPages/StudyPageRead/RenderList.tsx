import React,{Fragment} from 'react'
import styled from 'styled-components'
function RenderList() {
    const Dummy = [{title:"인증방법",disc:"매일 제시되는 단어로 N행시 짓기, 텍스트로 인증!"}
    ,{title:"인증시간",
    disc:"매일 02:00 ~ 다음날 02:00"
    }
]
    const RenderLists = Dummy.map((data,index)=>{
        return(
            <Fragment key={index}>
            <div className="List">
        <div className="ListTitle">{data.title}</div>
        <div className="ListContent">{data.disc}</div>
        </div>
            </Fragment>
        )
    })
    return (
        <Fragment>
        <DescLists>
        {RenderLists}
        </DescLists>
        </Fragment>
    )
}

export default RenderList
const DescLists = styled.div`
width:100%;
padding:5px 20px;
box-sizing:border-box;
background-color: #f6f2fe;
.List{
    display:flex;
    justify-content:flex-start;
    align-items:center;
    width:100%;
    height:46px;
    border-bottom:1px solid #e5e5e5;
    padding:12px 0px;
    line-height: 1.62;
    color: #6c51b4;
    box-sizing:border-box;
    &:last-child{
 border-bottom:none;
}
    .ListTitle{
        min-width:45px;
    font-weight: 400;
    font-size: 13px;
}
.ListContent{
    padding-left:10px;
    font-weight: 900;
    font-size: 14px;
}
}
`
