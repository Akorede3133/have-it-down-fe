const renderContent = (block) => {
  switch (block.type) {
    case "header":
      return <h{block.data.level}>${block.data.text}</h>;
    case 'paragraph':
      return <p>${block.data.text}</p>;
    default:
      return null;
  }
}

export default renderContent;