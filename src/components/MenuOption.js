function MenuOption({ title, image, altDesc }) {

   // return (<a href="#" class="navbar__link">
   //    <span class="material-symbols-outlined">
   //       home</span>{title}
   // </a>);
   return (<a href="#" className="navbar-link">
   <span><img src={image} alt={altDesc}/></span>{title}
</a>);
}

export default MenuOption;