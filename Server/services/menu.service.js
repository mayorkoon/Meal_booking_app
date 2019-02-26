import dummyMenu from '../utilities/dummyMenu';

const MenuService = {
  addMenu(menu) {
    const newMenu = menu;
    dummyMenu.menu.push(newMenu);
    return newMenu;
  },

  getMenu() {
    return dummyMenu.menu;
  },
};


export default MenuService;
