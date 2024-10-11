import React from 'react'

const commentData = [
    {
        name:"irfan",
        text:"kajfajfkj ajfmoamjof joajfasjfnaeif ",
        replies :[{
            name:"irfan 1st reply",
            text:"kajfajfkj ajfmoamjof joajfasjfnaeif ",
            replies :[]
        },
        {
            name:"irfan 2nd reply",
            text:"kajfajfkj ajfmoamjof joajfasjfnaeif ",
            replies :[]
        },
    ]
    },
    {
        name:"irfan commented",
        text:"kajfajfkj ajfmoamjof joajfasjfnaeif ",
        replies :[{
            name:"irfan reply1",
            text:"kajfajfkj ajfmoamjof joajfasjfnaeif ",
            replies :[{
                name:"irfan under reply1",
                text:"kajfajfkj ajfmoamjof joajfasjfnaeif ",
                replies :[{
                    name:"irfan under nested reply",
                    text:"kajfajfkj ajfmoamjof joajfasjfnaeif ",
                    replies :[]
                },]
            },]
        },]
    },
    {
        name:"irfan",
        text:"kajfajfkj ajfmoamjof joajfasjfnaeif ",
        replies :[]
    },
    {
        name:"irfan",
        text:"kajfajfkj ajfmoamjof joajfasjfnaeif ",
        replies :[{
            name:"irfan",
            text:"kajfajfkj ajfmoamjof joajfasjfnaeif ",
            replies :[{
                name:"irfan",
                text:"kajfajfkj ajfmoamjof joajfasjfnaeif ",
                replies :[{
                    name:"irfan",
                    text:"kajfajfkj ajfmoamjof joajfasjfnaeif ",
                    replies :[]
                },{
                    name:"irfan",
                    text:"kajfajfkj ajfmoamjof joajfasjfnaeif ",
                    replies :[]
                },{
                    name:"irfan",
                    text:"kajfajfkj ajfmoamjof joajfasjfnaeif ",
                    replies :[]
                },{
                    name:"irfan",
                    text:"kajfajfkj ajfmoamjof joajfasjfnaeif ",
                    replies :[{
                        name:"irfan",
                        text:"kajfajfkj ajfmoamjof joajfasjfnaeif ",
                        replies :[{
                            name:"irfan",
                            text:"kajfajfkj ajfmoamjof joajfasjfnaeif ",
                            replies :[]
                        },]
                    },]
                },]
            },]
        },]
    },
    {
        name:"irfan2",
        text:"kajfajfkj ajfmoamjof joajfasjfnaeif ",
        replies :[{
            name:"irfan 1st one",
            text:"kajfajfkj ajfmoamjof joajfasjfnaeif ",
            replies :[]
        },
    ]
    },
    
]


const Comment = ({data})=>{
    const {name,text,replies} = data;
    return (
    <div className='mx-5 flex bg-blue-300 rounded-md shadow-sm shadow-black my-2'>
        <img className='w-8 h-8' src="data:image/jpeg;base64,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" alt="user-profile" />
        <div>
            <p className='font-bold mx-2'>{name}</p>
            <p className='mx-4'>{text}</p>
        </div>
    
    </div>

)}
const CommentList = ({comments})=>{
    return (
        <div>
            {comments.map((cmnt,index)=> {
                return (
                <div>
                    <Comment key={index} data = {cmnt} />
                    <div className='ml-5 border border-l-black'>
                      <CommentList key={index} comments={cmnt.replies}  /> 
                    </div>
                </div>
                )
            })}
        </div>
    )
}


const CommentContainer = () => {
  return (
    <div className='m-5 p-2'>
     <p className='font-bold text-2xl'> Comments:</p>
     {/* {commentData.map(cmnt=> <Comment data={cmnt} />)} */}
      {/* <Comment data={commentData[0]}/> */}
      <CommentList comments={commentData} />
    </div>
  )
}

export default CommentContainer
