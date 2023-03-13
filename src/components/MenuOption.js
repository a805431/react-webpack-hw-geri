function MenuOption({ title }) {

   return (<a href="#" class="navbar__link">
      <span class="material-symbols-outlined">
         home</span>{title}
   </a>);
}

export default MenuOption;