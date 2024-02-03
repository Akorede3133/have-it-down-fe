const renderContent = (blocks) => {
  const doc = blocks.map(( block) => {
    const value = block.data.text;
    switch (block.type) {
      case "header":
        return `<h1>${block.data.text}</h1>`;
      case 'paragraph':
        return `<p>${value}</p>`;
      default:
        return null;
    }
  })
  return doc;
}

export default renderContent;