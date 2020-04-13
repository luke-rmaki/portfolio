const createIconLinkObjectArray = (icons, links) => {
  const iconLinkArray = [];
  // create an object containing both the icon and link and push into an array
  icons.forEach(icon => {
    const iconLinkObj = { iconURL: icon.node.publicURL, name: icon.node.name };
    links.forEach(link => {
      if (link.includes(icon.node.name)) {
        iconLinkObj.link = link;
      }
    });
    iconLinkArray.push(iconLinkObj);
  });
  return iconLinkArray;
};

export default createIconLinkObjectArray;
