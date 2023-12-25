import React from 'react'

const commentsData=[
    {
        name:"Rachna yadav",
        text:"bdbjdbjdbnjdn",
        replies:[     
        ]
    },
    {
        name:"Rachna yadav",
        text:"bdbjdbjdbnjdn",
        replies:[ 
            {
                name:"Rachna yadav",
                text:"bdbjdbjdbnjdn",
                replies:[     
                ]
            },   
            {
                name:"Rachna yadav",
                text:"bdbjdbjdbnjdn",
                replies:[     
                ]
            },
            {
                name:"Rachna yadav",
                text:"bdbjdbjdbnjdn",
                replies:[
                    {
                        name:"Rachna yadav",
                        text:"bdbjdbjdbnjdn",
                        replies:[     
                        ]
                    },
                    {
                        name:"Rachna yadav",
                        text:"bdbjdbjdbnjdn",
                        replies:[ 
                            {
                                name:"Rachna yadav",
                                text:"bdbjdbjdbnjdn",
                                replies:[  
                                    {
                                        name:"Rachna yadav",
                                        text:"bdbjdbjdbnjdn",
                                        replies:[ 
                                            {
                                                name:"Rachna yadav",
                                                text:"bdbjdbjdbnjdn",
                                                replies:[     
                                                ]
                                            },    
                                        ]
                                    },   
                                ]
                            },    
                        ]
                    },
                    {
                        name:"Rachna yadav",
                        text:"bdbjdbjdbnjdn",
                        replies:[     
                        ]
                    },     
                ]
            },
            {
                name:"Rachna yadav",
                text:"bdbjdbjdbnjdn",
                replies:[     
                ]
            }, 
        ]
    },
    {
        name:"Rachna yadav",
        text:"bdbjdbjdbnjdn",
        replies:[     
        ]
    },
    {
        name:"Rachna yadav",
        text:"bdbjdbjdbnjdn",
        replies:[     
        ]
    },
]

const Comment=({data})=>{
    const {name,text,replies}=data;
    return <div className='flex shadow-sm p-2 bg-white-200 rounded-lg my-2'>
        <img
          className="h-12"
          alt="user"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKL0xm6dUTEVbYn_suX7dMuhA05fIIb_pATA&usqp=CAU"
        />
        <div className='px-3'>
            <p className='font-bold'>{name}</p>
            <p>{text}</p>
        </div>
    </div>;

}

const CommentsList=({comments})=>{
    return comments.map((comment,index) => (
    <div key={index} >
    <Comment data={comment}/>
    <div className='pl-5 border border-l-4 ml-5'>
    <CommentsList comments={comment.replies}/>
    </div>
    </div>
    ));
    
}

const CommentsContainer = () => {
  return (
    <div className='px-20 mt-5'>
        <h1 className='text-xl font-bold'>Comments:</h1>
        <CommentsList comments={commentsData}/>
    </div>
  )
}

export default CommentsContainer