const FeedBody = ({ blocks }) => {
  console.log(blocks);
  return (
    <div>
      {
        blocks.map((block) => {
          switch (block.type) {
            case 'header':
              switch (block.data.level) {
                case 1:
                  return <h1 className="text-[2.125rem] font-bold" key={block.id}>{block.data.text}</h1>
                case 2:
                  return <h2 className="text-3xl font-bold" key={block.id}>{block.data.text}</h2>
                case 3:
                  return <h3 className="text-2xl font-bold" key={block.id}>{block.data.text}</h3>
                case 4:
                  return <h4 className="text-xl font-bold" key={block.id}>{block.data.text}</h4>
                case 5:
                  return <h5 className=" text-lg font-bold" key={block.id}>{block.data.text}</h5>
                case 6:
                    return <h6 className="text-base font-bold" key={block.id}>{block.data.text}</h6>
                  
                 default:
                  return null;
              }
            case 'paragraph':
              return <p key={block.id}>{block.data.text}</p>
            case 'list':
              return (
                <ul>
                  {
                    blocks.data.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))
                  }
                </ul>
              )
            default:
              return null

          }
        })
      }

    </div>
  )
}

export default FeedBody