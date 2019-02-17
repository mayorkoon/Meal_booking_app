import MenuService from '../services/menu.service'

const MenuController = {
    getMenu(req, res) {
        const dayMenu = MenuService.getMenu();
        return res.json({
            status: "success",
            data: dayMenu
        }).status(200);
    },

    addMenu(req, res) {
        /* 
            Expect JSON of the following format:

            {
                day: "day of the week",
                category: "say breakfast,lunch,dinner",
                meals: [
                    collection of meals for each category ;
                ]
            }
        
        */

        const newMenu = req.body;
        const createdMenu = MenuService.addMenu(newMenu);
        return res.json({
            status: "success",
            data: createdMenu
        }).status(201);
    }
}

export default MenuController;